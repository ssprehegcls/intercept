<?php

namespace Drupal\intercept_core\Form;

use Drupal\Core\Entity\ContentEntityInterface;
use Drupal\Core\Entity\Entity\EntityFormDisplay;
use Drupal\Core\Form\FormStateInterface;
use Drupal\profile\Entity\ProfileInterface;
use Drupal\profile\ProfileStorageInterface;
use Drupal\user\UserInterface;
use RCPL\Polaris\Entity\Patron;

class UserProfileForm extends \Drupal\user\ProfileForm {

  protected $profileEntity;

  /**
   * {@inheritdoc}
   */
  public function buildForm(array $form, FormStateInterface $form_state) {
    $user = $form_state->getFormObject()->getEntity();
    $form['customer_profile'] = [
      '#type' => 'inline_entity_form',
      '#entity_type' => 'profile',
      '#bundle' => 'customer',
      '#form_mode' => 'customer',
      '#save_entity' => TRUE,
      '#default_value' => $this->getProfileEntity($user),
    ];

    return parent::buildForm($form, $form_state);
  }

  public function alterProfileForm(&$entity_form, $form_state) {
    $user = $form_state->getFormObject()->getEntity();
    $profile = $this->getProfileEntity($user);
    if ($pin = $this->getInlineEntityFormDisplay($profile, $entity_form['#form_mode'])->getComponent('pin')) {
      $entity_form['pin'] = [
        '#type' => 'password',
        '#weight' => $pin['weight'],
        '#title' => $this->t('PIN'),
      ];
    }
    // Set the default value for barcode and add a save handler for the pin.
    if ($patron = \Drupal::service('polaris.client')->patron->getByUser($user)) {
      $this->populateName($entity_form, $patron, $profile);
      $form_state->set('patron', $patron);
      $entity_form['field_barcode']['widget'][0]['value']['#default_value'] = $patron->barcode;
      $entity_form['field_phone']['widget'][0]['value']['#default_value'] = $patron->basicData()->PhoneNumber;
      $entity_form['field_email_address']['widget'][0]['value']['#default_value'] = $patron->basicData()->EmailAddress;
      $entity_form['#ief_element_submit'][] = [$this, 'saveInlineEntityForm'];
      foreach (['field_first_name', 'field_last_name'] as $field) {
        $entity_form[$field]['widget'][0]['#disabled'] = TRUE;
      }
      $this->populateAddress($patron, $entity_form['field_address']);
    }
    $entity_form['field_barcode']['widget']['#disabled'] = TRUE;
  }

  private function populateName(array &$form, Patron $patron,  ProfileInterface $profile) {
    if ($patron->getFirstName() != $profile->get('field_first_name')->getString()) {
      $form['field_first_name']['widget'][0]['value']['#default_value'] = $patron->getFirstName();
    }
    if ($patron->getLastName() != $profile->get('field_first_name')->getString()) {
      $form['field_last_name']['widget'][0]['value']['#default_value'] = $patron->getLastName();
    }
  }

  protected function populateAddress($patron, &$address_field) {
      $data = $patron->data();
      if (!empty($data->PatronAddresses[0])) {
        $address = $data->PatronAddresses[0];
        $address_field = &$address_field['widget'][0]['address'];
        $address_field['#default_value']['country_code'] = 'US';
        $replacements = [
          'address_line1' => 'StreetOne',
          'postal_code' => 'PostalCode',
          'locality' => 'City',
          'administrative_area' => 'State',
        ];
        foreach ($replacements as $drupal => $ils) {
          $address_field['#default_value'][$drupal] = $address->{$ils};
        }

        $address_field['#disabled'] = TRUE;
      }
  }

  protected function getInlineEntityFormDisplay(ContentEntityInterface $entity, $view_mode) {
    return EntityFormDisplay::collectRenderDisplay($entity, $view_mode);
  }

  /**
   * Custom submit callback for #ief_element_submit.
   */
  public function saveInlineEntityForm(&$form, $form_state) {
    $pin = $form_state->cleanValues()->getValue('pin');
    $email_address = $form_state->cleanValues()->getValue(['customer_profile', 'field_email_address']);
    $email_address = $email_address[0]['value'];
    $phone = $form_state->cleanValues()->getValue(['customer_profile', 'field_phone']);
    $phone = $phone[0]['value'];
    if (!empty($pin) || !empty($phone) || !empty($email_address)) {
      // If $patron is empty, this submit handler is never set.
      $patron = $form_state->get('patron');
      if (!empty($pin)) {
        $patron->Password = $pin;
      }
      if (!empty($phone)) {
        $patron->PhoneVoice1 = $phone;
      }
      if (!empty($email_address)) {
        $patron->EmailAddress = $email_address;
      }
      $patron->update();

      // Also update externalauth authdata
      $user = $form_state->getFormObject()->getEntity();
      $externalauth = \Drupal::service('externalauth.externalauth');
      $authmap = \Drupal::service('externalauth.authmap');
      $authdata = $authmap->getAuthdata($user->id(), 'polaris');
      $authdata_data = unserialize($authdata['data']);

      // Update the authdata & user account based on the latest Polaris info.
      if ($patron = \Drupal::service('polaris.client')->patron->getByUser($user)) {
        $authmap->save($user, 'polaris', $patron->barcode(), $patron->basicData());
      }
    }
  }

  protected function getProfileEntity(UserInterface  $user) {
    $profile_storage = $this->entityTypeManager->getStorage('profile');
    /** @var $profile_storage ProfileStorageInterface */
    $profile = $profile_storage->loadDefaultByUser($user, 'customer');
    if (!$profile) {
      $profile = $profile_storage->create([
        'type' => 'customer',
        'uid' => $user->id(),
      ]);
    }
    $this->profileEntity = $profile;
    return $profile;
  }

}
