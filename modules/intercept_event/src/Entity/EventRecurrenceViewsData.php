<?php

namespace Drupal\intercept_event\Entity;

use Drupal\views\EntityViewsData;

/**
 * Provides Views data for Event Recurrence entities.
 */
class EventRecurrenceViewsData extends EntityViewsData {

  /**
   * {@inheritdoc}
   */
  public function getViewsData() {
    $data = parent::getViewsData();

    // Additional information for Views integration, such as table joins, can be
    // put here.

    return $data;
  }

}
