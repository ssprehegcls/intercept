<?php

namespace Drupal\intercept_core\Plugin\views\filter;

use Drupal\Component\Plugin\DependentPluginInterface;
use Drupal\Component\Utility\Html;
use Drupal\Component\Utility\NestedArray;
use Drupal\Core\Entity\Element\EntityAutocomplete;
use Drupal\Core\Entity\EntityReferenceSelection\SelectionInterface;
use Drupal\Core\Entity\EntityReferenceSelection\SelectionPluginManagerInterface;
use Drupal\Core\Entity\EntityTypeInterface;
use Drupal\Core\Entity\EntityTypeManagerInterface;
use Drupal\Core\Form\FormStateInterface;
use Drupal\Core\Form\SubformState;
use Drupal\Core\Messenger\MessengerInterface;
use Drupal\Core\Render\Element;
use Drupal\views\FieldAPIHandlerTrait;
use Drupal\views\Plugin\views\display\DisplayPluginBase;
use Drupal\views\Plugin\views\filter\ManyToOne;
use Drupal\views\ViewExecutable;
use Symfony\Component\DependencyInjection\ContainerInterface;

/**
 * Filters a view by entity references.
 *
 * @TODO: Remove when https://www.drupal.org/project/drupal/issues/2429699 lands.
 *
 * @ingroup views_filter_handlers
 *
 * @ViewsFilter("intercept_entity_reference")
 */
class EntityReference extends ManyToOne {

  use FieldAPIHandlerTrait;

  /**
   * Type for the auto complete filter format.
   */
  const WIDGET_AUTOCOMPLETE = 'autocomplete';

  /**
   * Type for the select list filter format.
   */
  const WIDGET_SELECT = 'select';

  /**
   * The all value.
   */
  const ALL_VALUE = 'All';

  /**
   * Validated exposed input that will be set as value in case.
   *
   * @var array
   */
  protected $validatedExposedInput;

  /**
   * The selection plugin manager service.
   *
   * @var \Drupal\Core\Entity\EntityReferenceSelection\SelectionPluginManagerInterface
   */
  protected $selectionPluginManager;

  /**
   * The entity type manager service.
   *
   * @var \Drupal\Core\Entity\EntityTypeManagerInterface
   */
  protected $entityTypeManager;

  /**
   * The messenger service for setting messages.
   *
   * @var \Drupal\Core\Messenger\MessengerInterface
   */
  protected $messenger;

  /**
   * {@inheritdoc}
   */
  public function __construct(
    array $configuration,
    $plugin_id,
    $plugin_definition,
    SelectionPluginManagerInterface $selection_plugin_manager,
    EntityTypeManagerInterface $entity_type_manager,
    MessengerInterface $messenger
  ) {
    parent::__construct($configuration, $plugin_id, $plugin_definition);
    $this->selectionPluginManager = $selection_plugin_manager;
    $this->entityTypeManager = $entity_type_manager;
    $this->messenger = $messenger;
  }

  /**
   * {@inheritdoc}
   */
  public static function create(ContainerInterface $container, array $configuration, $plugin_id, $plugin_definition): EntityReference {
    return new static(
      $configuration,
      $plugin_id,
      $plugin_definition,
      $container->get('plugin.manager.entity_reference_selection'),
      $container->get('entity_type.manager'),
      $container->get('messenger')
    );
  }

  /**
   * {@inheritdoc}
   */
  public function init(ViewExecutable $view, DisplayPluginBase $display, array &$options = NULL) {
    parent::init($view, $display, $options);

    if (empty($this->definition['field_name'])) {
      $this->definition['field_name'] = $options['field'];
    }

    $this->definition['options callback'] = [$this, 'getValueOptionsCallback'];
    $this->definition['options arguments'] = [$this->getSelectionHandler()];
  }

  /**
   * Get the used entity reference selection handler.
   *
   * @return \Drupal\Core\Entity\EntityReferenceSelection\SelectionInterface
   *   The selection handler plugin instance.
   */
  protected function getSelectionHandler(): SelectionInterface {
    $handler_settings = $this->options['handler_settings'] + [
      'target_type' => $this->getReferencedEntityType()->id(),
      'handler' => $this->options['handler'],
    ];
    return $this->selectionPluginManager->getInstance($handler_settings);
  }

  /**
   * {@inheritdoc}
   */
  protected function defineOptions(): array {
    $options = parent::defineOptions();

    $options['handler'] = ['default' => 'default:' . $this->getReferencedEntityType()->id()];
    $options['handler_settings'] = ['default' => []];
    $options['widget'] = ['default' => self::WIDGET_AUTOCOMPLETE];
    $options['list_max'] = ['default' => ''];

    return $options;
  }

  /**
   * {@inheritdoc}
   */
  public function hasExtraOptions(): bool {
    return TRUE;
  }

  /**
   * {@inheritdoc}
   */
  public function buildExtraOptionsForm(&$form, FormStateInterface $form_state) {
    $entity_type = $this->getReferencedEntityType();

    // Get all selection plugins for this entity type.
    $selection_plugins = $this->selectionPluginManager->getSelectionGroups($entity_type->id());
    $handlers_options = [];
    foreach (array_keys($selection_plugins) as $selection_group_id) {
      // We only display base plugins (e.g. 'default', 'views', ...) and not
      // entity type specific plugins (e.g. 'default:node', 'default:user',
      // ...).
      if (array_key_exists($selection_group_id, $selection_plugins[$selection_group_id])) {
        $handlers_options[$selection_group_id] = Html::escape($selection_plugins[$selection_group_id][$selection_group_id]['label']);
      }
      elseif (array_key_exists($selection_group_id . ':' . $entity_type->id(), $selection_plugins[$selection_group_id])) {
        $selection_group_plugin = $selection_group_id . ':' . $entity_type->id();
        $handlers_options[$selection_group_plugin] = Html::escape($selection_plugins[$selection_group_id][$selection_group_plugin]['base_plugin_label']);
      }
    }

    // @todo When changing selection handler Ajax request doesn't get processed
    // correctly so need to add this hack.
    $input = $form_state->getUserInput();
    if (isset($input['options']['handler']) && array_key_exists($input['options']['handler'], $handlers_options)) {
      $this->options['handler'] = $input['options']['handler'];
    }
    if (isset($input['options']['handler_settings'])) {
      $this->options['handler_settings'] = $input['options']['handler_settings'];
    }

    $form['#process'] = [[get_class($this), 'extraOptionsAjaxProcess']];

    // @todo: We would actually prefer organizing the form elements according
    // to the required structure of the value tree, and to rearrange the visual
    // grouping using the #group key, in order to avoid messing with #parents.
    // Currently, this however isn't possible. Revisit once Core issue
    // https://www.drupal.org/project/drupal/issues/2854166 landed.
    $form['reference'] = [
      '#type' => 'details',
      '#title' => $this->t('Reference type'),
      '#open' => TRUE,
      '#parents' => ['options'],
    ];

    $form['reference']['handler'] = [
      '#type' => 'select',
      '#title' => $this->t('Reference method'),
      '#options' => $handlers_options,
      '#default_value' => $this->options['handler'],
      '#required' => TRUE,
      '#ajax' => TRUE,
      '#limit_validation_errors' => [['options', 'handler']],
    ];

    $form['reference']['handler_submit'] = [
      '#type' => 'submit',
      '#value' => $this->t('Change handler'),
      '#limit_validation_errors' => [],
      '#attributes' => [
        'class' => ['js-hide'],
      ],
      '#submit' => [[get_class($this), 'settingsAjaxSubmit']],
    ];

    $form['reference']['handler_settings'] = [
      '#type' => 'container',
      '#attributes' => ['class' => ['entity_reference-settings']],
      '#process' => [[get_class($this), 'fixSubmitParents']],
    ];

    $selection_handler = $this->getSelectionHandler();
    $subform_state = SubformState::createForSubform($form['reference'], $form, $form_state);
    $form['reference']['handler_settings'] += $selection_handler->buildConfigurationForm([], $subform_state);

    // There is no need in polluting filter config form.
    $form['reference']['handler_settings']['target_bundles']['#ajax'] = FALSE;
    $form['reference']['handler_settings']['target_bundles_update']['#access'] = FALSE;
    $form['reference']['handler_settings']['auto_create']['#access'] = FALSE;
    $form['reference']['handler_settings']['auto_create_bundle']['#access'] = FALSE;

    $form['widget'] = [
      '#type' => 'radios',
      '#title' => $this->t('Selection type'),
      '#default_value' => $this->options['widget'],
      '#options' => [
        self::WIDGET_SELECT => $this->t('Select list'),
        self::WIDGET_AUTOCOMPLETE => $this->t('Autocomplete'),
      ],
    ];

    $form['list_max'] = [
      '#type' => 'number',
      '#title' => $this->t('Maximum entities in select list'),
      '#description' => $this->t('This is the limit to the number of entities to allow for select type of widget. It is strongly recommended to set a limit to avoid performance issues. When this limit is reached the widget switches automatically to an autocomplete widget.'),
      '#default_value' => $this->options['list_max'],
      '#min' => 1,
      '#max' => 1000,
      '#states' => [
        'visible' => [
          ':input[name="options[widget]"]' => ['value' => static::WIDGET_SELECT],
        ],
      ],
    ];
  }

  /**
   * Render API callback.
   *
   * @param array $form
   *   Associative array containing the structure of the form.
   * @param \Drupal\Core\Form\FormStateInterface $form_state
   *   The current state of the form.
   *
   * @return array
   *   Associative array containing the structure of the form.
   *
   * @see static::buildExtraOptionsForm()
   */
  public static function fixSubmitParents(array $form, FormStateInterface $form_state): array {
    static::fixSubmitParentsElement($form, 'root');
    return $form;
  }

  /**
   * Process element callback.
   *
   * @param array $element
   *   Associative array containing the structure of the form, subform or form
   *   element, passed by reference.
   * @param string $key
   *   The element key, or 'root'.
   *
   * @see static::fixSubmitParents()
   */
  public static function fixSubmitParentsElement(array &$element, $key) {
    if (isset($element['#type']) && in_array($element['#type'], ['button', 'submit']) && $key !== 'root') {
      $element['#parents'] = [$key];
    }

    foreach (Element::children($element) as $key) {
      static::fixSubmitParentsElement($element[$key], $key);
    }
  }

  /**
   * Render API callback.
   *
   * Processes the extra options form and allows access to the form state.
   *
   * @see static::buildExtraOptionsForm()
   * @see \Drupal\Core\Field\Plugin\Field\FieldType\EntityReferenceItem::fieldSettingsAjaxProcess()
   */
  public static function extraOptionsAjaxProcess(array $form, FormStateInterface $form_state): array {
    static::extraOptionsAjaxProcessElement($form, $form, $form_state);
    return $form;
  }

  /**
   * Process element callback.
   *
   * Adds entity_reference specific properties to AJAX form elements from the
   * extra options form.
   *
   * @param array $element
   *   Associative array containing the structure of the form, subform or form
   *   element to be processed, passed by reference.
   * @param array $main_form
   *   Associative array containing the structure of the form.
   * @param \Drupal\Core\Form\FormStateInterface $form_state
   *   The current state of the form.
   *
   * @see static::extraOptionsAjaxProcess()
   * @see \Drupal\Core\Field\Plugin\Field\FieldType\EntityReferenceItem::fieldSettingsAjaxProcessElement()
   */
  public static function extraOptionsAjaxProcessElement(array &$element, array $main_form, FormStateInterface $form_state) {
    if (!empty($element['#ajax'])) {
      $element['#ajax'] = [
        'callback' => [get_called_class(), 'settingsAjax'],
        'url' => views_ui_build_form_url($form_state),
        'wrapper' => $main_form['#id'],
        'element' => $main_form['#array_parents'],
      ];
    }

    foreach (Element::children($element) as $key) {
      static::extraOptionsAjaxProcessElement($element[$key], $main_form, $form_state);
    }
  }

  /**
   * Ajax callback for the handler settings form.
   *
   * @param array $form
   *   Associative array containing the structure of the form.
   * @param \Drupal\Core\Form\FormStateInterface $form_state
   *   The current state of the form.
   *
   * @return array
   *   Settings form array for the triggering element.
   *
   * @see static::extraOptionsAjaxProcessElement()
   * @see \Drupal\Core\Field\Plugin\Field\FieldType\EntityReferenceItem::settingsAjax()
   */
  public static function settingsAjax(array $form, FormStateInterface $form_state): array {
    $triggering_element = $form_state->getTriggeringElement();
    return NestedArray::getValue($form, $triggering_element['#ajax']['element']);
  }

  /**
   * Submit handler for the non-JS case.
   *
   * @param array $form
   *   Associative array containing the structure of the form.
   * @param \Drupal\Core\Form\FormStateInterface $form_state
   *   The current state of the form.
   *
   * @see \Drupal\Core\Field\Plugin\Field\FieldType\EntityReferenceItem::settingsAjaxSubmit()
   */
  public static function settingsAjaxSubmit(array $form, FormStateInterface $form_state) {
    $form_state->set('rerender', TRUE);
    $form_state->setRebuild();
  }

  /**
   * {@inheritdoc}
   */
  public function validateExtraOptionsForm($form, FormStateInterface $form_state) {
    $subform_state = SubformState::createForSubform($form['reference'], $form, $form_state);

    // Copy handler_settings from options to settings to be compatible with
    // selection plugins.
    $subform_state->setValue(['settings', 'handler_settings'], $form_state->getValue(['options', 'handler_settings']));

    $this->getSelectionHandler()->validateConfigurationForm($form, $subform_state);

    // Copy handler_settings back into options.
    // Necessary because DefaultSelection::validateConfigurationForm()
    // manipulates the form state values.
    $form_state->setValue(['options', 'handler_settings'], $subform_state->getValue(['settings', 'handler_settings']));

    parent::validateExtraOptionsForm($form, $form_state);
  }

  /**
   * Fixes the issue with switching between the widgets in the view editor.
   *
   * @param array $form
   *   Associative array containing the structure of the form, passed by
   *   reference.
   * @param \Drupal\Core\Form\FormStateInterface $form_state
   *   The current state of the form.
   */
  protected function alternateWidgetsDefaultNormalize(array &$form, FormStateInterface $form_state) {
    $field_id = '_' . $this->getFieldDefinition()->getName() . '-widget';
    $form[$field_id] = [
      '#type' => 'hidden',
      '#value' => $this->options['widget'],
    ];

    $previous_widget = $form_state->getUserInput()[$field_id] ?? NULL;
    if ($previous_widget && $previous_widget !== $this->options['widget']) {
      $form['value']['#value_callback'] = function ($element) {
        return $element['#default_value'] ?? '';
      };
    }
  }

  /**
   * {@inheritdoc}
   */
  protected function valueForm(&$form, FormStateInterface $form_state) {
    switch ($this->options['widget']) {
      case self::WIDGET_SELECT:
        $list_max = $this->options['list_max'] > 0 ? $this->options['list_max'] : -1;
        $options = $this->getValueOptions();
        if ($list_max < 0 || count($options) <= $list_max) {
          $this->valueFormAddSelect($form, $form_state);
        }
        else {
          $this->options['widget'] = self::WIDGET_AUTOCOMPLETE;
          $this->valueFormAddAutocomplete($form, $form_state);

          if (!empty($this->view->live_preview)) {
            $this->messenger->addWarning($this->t("Limit of maximum :limit entities reached for entity reference filter ':filter', switching to autocomplete widget.", [
              ':filter' => $this->getFieldDefinition()->getName(),
              ':limit' => $list_max,
            ]));
          }
        }
        break;

      case self::WIDGET_AUTOCOMPLETE:
        $this->valueFormAddAutocomplete($form, $form_state);
        break;
    }

    if (!empty($this->view->live_preview)) {
      $this->alternateWidgetsDefaultNormalize($form, $form_state);
    }

    // Show or hide the value field depending on the operator field.
    $is_exposed = $form_state->get('exposed');

    $visible = [];
    if ($is_exposed) {
      $operator_field = ($this->options['expose']['use_operator'] && $this->options['expose']['operator_id']) ? $this->options['expose']['operator_id'] : NULL;
    }
    else {
      $operator_field = 'options[operator]';
      $visible[] = [
        ':input[name="options[expose_button][checkbox][checkbox]"]' => ['checked' => TRUE],
        ':input[name="options[expose][use_operator]"]' => ['checked' => TRUE],
        ':input[name="options[expose][operator_id]"]' => ['empty' => FALSE],
      ];
    }
    if ($operator_field) {
      foreach ($this->operatorValues(1) as $operator) {
        $visible[] = [
          ':input[name="' . $operator_field . '"]' => ['value' => $operator],
        ];
      }
      $form['value']['#states'] = ['visible' => $visible];
    }

    if (!$is_exposed) {
      // Retain the helper option.
      $this->helper->buildOptionsForm($form, $form_state);

      // Show help text if not exposed to end users.
      $form['value']['#description'] = $this->t('Leave blank for all. Otherwise, the first selected item will be the default instead of "Any".');
    }
  }

  /**
   * ValueForm helper adding an autocomplete element to the form.
   *
   * @param array $form
   *   Associative array containing the structure of the form, passed by
   *   reference.
   * @param \Drupal\Core\Form\FormStateInterface $form_state
   *   The current state of the form.
   */
  protected function valueFormAddAutocomplete(array &$form, FormStateInterface $form_state) {
    $referenced_type = $this->getReferencedEntityType();
    $form['value'] = [
      '#title' => $this->t('Select %entity_types', ['%entity_types' => $referenced_type->getPluralLabel()]),
      '#type' => 'entity_autocomplete',
      '#default_value' => EntityAutocomplete::getEntityLabels($this->getDefaultSelectedEntities()),
      '#tags' => TRUE,
      '#process_default_value' => FALSE,
      '#target_type' => $this->getReferencedEntityType()->id(),
      '#selection_handler' => $this->options['handler'],
      '#selection_settings' => $this->options['handler_settings'],
      '#validate_reference' => FALSE,
    ];
  }

  /**
   * ValueForm helper adding a select element to the form.
   *
   * @param array $form
   *   Associative array containing the structure of the form, passed by
   *   reference.
   * @param \Drupal\Core\Form\FormStateInterface $form_state
   *   The current state of the form.
   */
  protected function valueFormAddSelect(array &$form, FormStateInterface $form_state) {
    $is_exposed = $form_state->get('exposed');

    $options = $this->getValueOptions();
    $default_value = (array) $this->value;

    if ($is_exposed) {
      $identifier = $this->options['expose']['identifier'];

      if (!empty($this->options['expose']['reduce'])) {
        $options = $this->reduceValueOptions($options);

        if (!empty($this->options['expose']['multiple']) && empty($this->options['expose']['required'])) {
          $default_value = [];
        }
      }

      if (empty($this->options['expose']['multiple'])) {
        if (empty($this->options['expose']['required']) && (empty($default_value) || !empty($this->options['expose']['reduce']))) {
          $default_value = self::ALL_VALUE;
        }
        elseif (empty($default_value)) {
          $keys = array_keys($options);
          $default_value = array_shift($keys);
        }
        // Due to https://www.drupal.org/node/1464174 there is a chance that
        // [''] was saved in the admin ui. Let's choose a safe default value.
        elseif ($default_value == ['']) {
          $default_value = self::ALL_VALUE;
        }
        else {
          $copy = $default_value;
          $default_value = array_shift($copy);
        }
      }
    }

    $referenced_type = $this->getReferencedEntityType();
    $form['value'] = [
      '#type' => 'select',
      '#title' => $this->t('Select @entity_types', ['@entity_types' => $referenced_type->getPluralLabel()]),
      '#multiple' => TRUE,
      '#options' => $options,
      '#size' => min(9, count($options)),
      '#default_value' => $default_value,
    ];

    $user_input = $form_state->getUserInput();
    if ($is_exposed && isset($identifier) && !isset($user_input[$identifier])) {
      $user_input[$identifier] = $default_value;
      $form_state->setUserInput($user_input);
    }
  }

  /**
   * Gets all entities selected by default.
   *
   * @return \Drupal\Core\Entity\EntityInterface[]
   *   All entities selected by default, or an empty array, if none.
   */
  protected function getDefaultSelectedEntities(): array {
    $referenced_type_id = $this->getReferencedEntityType()->id();
    $entity_storage = $this->entityTypeManager->getStorage($referenced_type_id);

    return $this->value && !isset($this->value[self::ALL_VALUE]) ? $entity_storage->loadMultiple($this->value) : [];
  }

  /**
   * Value options callback.
   *
   * @param \Drupal\Core\Entity\EntityReferenceSelection\SelectionInterface $selection_handler
   *   The selection handler.
   *
   * @return string[]
   *   The options.
   *
   * @see \Drupal\views\Plugin\views\filter\InOperator::getValueOptions()
   */
  protected function getValueOptionsCallback(SelectionInterface $selection_handler): array {
    // Get the "Maximum entities in select list" value as an integer and set it
    // to -1 if no maximum is set.
    $list_max = !empty($this->options['list_max']) ? (int) $this->options['list_max'] : -1;

    // If there is a maximum set, get one more than the maximum
    // referencable entities to determine if the widget should be switched to
    // autocomplete.
    $limit = ($list_max > 0 ? ($list_max + 1) : $list_max);
    $entities = $selection_handler->getReferenceableEntities(NULL, 'CONTAINS', $limit);

    $options = [];
    foreach ($entities as $bundle) {
      foreach ($bundle as $id => $entity_label) {
        $options[$id] = $entity_label;
      }
    }

    return $options;
  }

  /**
   * {@inheritdoc}
   */
  protected function valueValidate($form, FormStateInterface $form_state) {
    if ($this->options['widget'] == self::WIDGET_AUTOCOMPLETE) {
      $ids = [];
      if ($values = $form_state->getValue(['options', 'value'])) {
        foreach ($values as $value) {
          $ids[] = $value['target_id'];
        }
      }
      $form_state->setValue(['options', 'value'], $ids);
    }
  }

  /**
   * {@inheritdoc}
   */
  public function acceptExposedInput($input): bool {
    if (empty($this->options['exposed'])) {
      return TRUE;
    }
    // We need to know the operator, which is normally set in
    // \Drupal\views\Plugin\views\filter\FilterPluginBase::acceptExposedInput(),
    // before we actually call the parent version of ourselves.
    if (!empty($this->options['expose']['use_operator']) && !empty($this->options['expose']['operator_id']) && isset($input[$this->options['expose']['operator_id']])) {
      $this->operator = $input[$this->options['expose']['operator_id']];
    }

    // If view is an attachment and is inheriting exposed filters, then assume
    // exposed input has already been validated.
    if (!empty($this->view->is_attachment) && $this->view->display_handler->usesExposed()) {
      $this->validatedExposedInput = (array) $this->view->exposed_raw_input[$this->options['expose']['identifier']];
    }

    // If we're checking for EMPTY or NOT, we don't need any input, and we can
    // say that our input conditions are met by just having the right operator.
    if ($this->operator == 'empty' || $this->operator == 'not empty') {
      return TRUE;
    }

    // If it's non-required and there's no value don't bother filtering.
    if (!$this->options['expose']['required'] && empty($this->validatedExposedInput)) {
      return FALSE;
    }

    $rc = parent::acceptExposedInput($input);
    if ($rc) {
      // If we have previously validated input, override.
      if (isset($this->validatedExposedInput)) {
        $this->value = $this->validatedExposedInput;
      }
    }

    return $rc;
  }

  /**
   * {@inheritdoc}
   */
  public function validateExposed(&$form, FormStateInterface $form_state) {
    if (empty($this->options['exposed'])) {
      return;
    }

    $identifier = $this->options['expose']['identifier'];

    // We only validate if they've chosen the select field style.
    if ($this->options['widget'] == self::WIDGET_SELECT) {
      if ($form_state->getValue($identifier) != self::ALL_VALUE) {
        $this->validatedExposedInput = (array) $form_state->getValue($identifier);
      }
      return;
    }

    if (empty($identifier)) {
      return;
    }

    if ($values = $form_state->getValue($identifier)) {
      foreach ($values as $value) {
        $this->validatedExposedInput[] = $value['target_id'];
      }
    }
  }

  /**
   * {@inheritdoc}
   */
  protected function valueSubmit($form, FormStateInterface $form_state) {
    // Prevent array_filter from messing up our arrays in parent submit.
  }

  /**
   * Gets the target entity type ID referenced by this field.
   *
   * @return \Drupal\Core\Entity\EntityTypeInterface
   *   Entity type.
   */
  protected function getReferencedEntityType(): EntityTypeInterface {
    $field_def = $this->getFieldDefinition();
    $entity_type_id = $field_def->getItemDefinition()->getSetting('target_type');
    return $this->entityTypeManager->getDefinition($entity_type_id);
  }

  /**
   * {@inheritdoc}
   */
  public function calculateDependencies(): array {
    $dependencies = parent::calculateDependencies();

    $selection_handler = $this->getSelectionHandler();
    if ($selection_handler instanceof DependentPluginInterface) {
      $dependencies += $selection_handler->calculateDependencies();
    }

    foreach ($this->getDefaultSelectedEntities() as $entity) {
      $dependencies[$entity->getConfigDependencyKey()][] = $entity->getConfigDependencyName();
    }

    return $dependencies;
  }

}
