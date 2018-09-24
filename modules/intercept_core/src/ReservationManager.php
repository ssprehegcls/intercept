<?php

namespace Drupal\intercept_core;

use Drupal\Core\Config\ConfigFactoryInterface;
use Drupal\Core\Datetime\DrupalDateTime;
use Drupal\Core\Entity\EntityTypeManagerInterface;
use Drupal\Core\Mail\MailManagerInterface;
use Drupal\datetime\Plugin\Field\FieldType\DateTimeItemInterface;
use Drupal\intercept_room_reservation\Entity\RoomReservation;
use Drupal\office_hours\OfficeHoursDateHelper;

/**
 * Class ReservationManager.
 *
 * TODO: Move partially over to an EntityReservationManager/RoomReservationManager.
 */
class ReservationManager implements ReservationManagerInterface {

  const FORMAT = 'Y-m-d\TH:i:s';

  /**
   * Drupal\Core\Entity\EntityTypeManagerInterface definition.
   *
   * @var \Drupal\Core\Entity\EntityTypeManagerInterface
   */
  protected $entityTypeManager;

    /**
     * @var ConfigFactoryInterface
     */
  protected $configFactory;

  protected $idKey;

  /**
   * Constructs a new ReservationManager object.
   */
  public function __construct(EntityTypeManagerInterface $entity_type_manager, ConfigFactoryInterface $config_factory, MailManagerInterface $mail_manager) {
    $this->entityTypeManager = $entity_type_manager;
    $this->configFactory = $config_factory;
    $this->mailManager = $mail_manager;
  }

  protected function getTimezone() {
    $timezone_name = DateTimeItemInterface::STORAGE_TIMEZONE;
    return new \DateTimeZone($timezone_name);
  }

  protected function getDate($string) {
    return new \DateTime($string, $this->getTimezone());
  }

  protected function getDrupalDate($string) {
    return DrupalDateTime::createFromDateTime($this->getDate($string));
  }

  protected function hasReservationConflict(array $reservations, array $params) {
    $has_openings = FALSE;
    // Check if there is open space between existing reservations.
    array_reduce($reservations, function($datetime, $reservation) use (&$has_openings, $params) {
      // Diff between current res start time and (either start time param or end date of last reservation).
      $int = $datetime->diff($reservation->getStartDate());
      $total = $int->h * 60 + $int->i;
      if ($total >= $params['duration']) {
        $has_openings = TRUE;
      }
      return $reservation->getEndDate();
    }, $this->getDrupalDate($params['start']));

    // Now check open space between (start time or last reservation) and end time.
    $date = empty($reservations) ? $this->getDrupalDate($params['start']) : end($reservations)->getEndDate();
    // Calculate (start time or last reservation) + duration.
    $slot_start = $date->add(new \DateInterval('PT' . $params['duration'] . 'M'));
    $slot_end = $this->getDrupalDate($params['end']);
    if ($slot_end >= $slot_start) {
      $has_openings = TRUE;
    }
    return !$has_openings;
  }

  protected function hasOpeningHoursConflict($reservations, $params, $node) {
    if (!$hours = $this->getHours($params, $node)) {
      // Appears to be closed.
      return TRUE;
    }
    foreach (['start', 'end'] as $type) {
      // get location start/end hours for location
      // convert to date objects using the start date param as a base, but default timezone
      // convert timezone to UTC
      // return dates
      $selected_date = $this->getDrupalDate($params[$type]);
      // Hardcode get start date here because the end date might span into another day.
      // TODO: Make this less error prone by defining a way to specify the current searched "day".
      $date = $this->timeToDate($hours[$type . 'hours'], $this->getDate($params['start']));
      $converted_date = $this->convertTimezone($date);
      if ($type == 'start' && ($converted_date > $selected_date)) {
        $params['start'] = $converted_date->format(self::FORMAT);
      }
      if ($type == 'end' && ($converted_date < $selected_date)) {
        $params['end'] = $converted_date->format(self::FORMAT);
      }
    }
    return $this->hasReservationConflict($reservations, $params);
  }

  protected function getLocation($node) {
    return !empty($node->field_location->entity) ? $node->field_location->entity : FALSE;
  }

  protected function getHours($params, $node) {
    if (!$location = $this->getLocation($node)) {
      return FALSE;
    }
    $start_date = $this->convertDate($params['start']);
    $d = $start_date->format('w');
    // Eventually there is going to be a TIMEZONE setting on this field.
    $hours = $location->field_location_hours;
    $values = $hours->getValue();
    // e.g. 'starthours' => '0900', 'endhours' => '1700'
    $times = $values[$d];

    return !empty($values[$d]) ? $values[$d] : FALSE;
  }

  protected function isClosed($params, $node) {
    return empty($this->getHours($params, $node));
  }

  protected function timeToDate($time, $base_date) {
    // Then just covert that time to a full date using the date part specified.
    // Make sure it's 4 digits.
    $time = \Drupal\office_hours\OfficeHoursDateHelper::datePad($time, 4);
    // Parse to be in the format for a date format.
    if (!strstr($time, ':')) {
      $time = substr('0000' . $time, -4);
      $hour = substr($time, 0, -2);
      $min = substr($time, -2);
      $time = $hour . ':' . $min;
    }
    $new_date_time = new DrupalDateTime($base_date->format('Y-m-d\T') . $time, $this->getDefaultTimezone());
    return $new_date_time;
  }

  protected function convertTimezone($date, $new_timezone = 'UTC') {
    $date->setTimezone(new \DateTimeZone($new_timezone));
    return $date;
  }

  protected function getUtcTimezone() {
    return new \DateTimeZone('UTC');
  }

  protected function getDefaultTimezone() {
    $config = \Drupal::config('system.date');
    $config_data_default_timezone = $config->get('timezone.default');
    return new \DateTimeZone($config_data_default_timezone);
  }

  /**
   * $from_default
   *   TRUE if converting from default to UTC, FALSE if opposite.
   */
  public function convertDate($string, $from_default = TRUE) {
    $from = $from_default ? $this->getDefaultTimezone() : $this->getUtcTimezone();
    $to = $from_default ? $this->getUtcTimezone() : $this->getDefaultTimezone();
    $date = new DrupalDateTime($string, $from);
    $date->setTimezone($to);
    return $date;
  }

  public function getDates($reservations) {
    $return = [];
    foreach ($reservations as $reservation) {
      $return[$reservation->uuid()] = [
        'start' => $reservation->getStartDate()->format(self::FORMAT),
        'end' => $reservation->getEndDate()->format(self::FORMAT),
      ];
    }
    return $return;
  }

  public function userExceededReservationLimit(\Drupal\core\Session\AccountInterface $user) {
    if ($user->hasPermission('bypass room reservation limit')) {
      return FALSE;
    }
    $reservations = $this->reservations('room', function($query) use ($user) {
      $query->condition('field_user', $user->id(), '=');
      $date = new \Drupal\Core\Datetime\DrupalDateTime('now', new \DateTimeZone('UTC'));
      $query->condition('field_dates.end_value', $date->format('Y-m-d\TH:i:s'), '>');
      $query->condition('field_status', ['requested', 'approved'], 'IN');
    });
    $config = $this->configFactory->get('intercept_room_reservation.settings');
    return count($reservations) >= $config->get('reservation_limit');
  }

  public function availability($params = []) {
    $data = $this->reservationsByNode('room', function($query) use ($params) {
      $start_date = $this->getDate($params['start']);
      $end_date = $this->getDate($params['end']);
      // Add period to end to send to query.
      $period = 'PT' . (int) $params['duration'] . 'M';
      $end_date->add(new \DateInterval($period));
      $params['end'] = $end_date->format(self::FORMAT);
      if (!empty($params['rooms'])) {
        $query->condition('field_room', $params['rooms'], 'IN');
      }
      $query->condition('field_dates.value', $start_date->format(self::FORMAT), '>=');
      $query->condition('field_dates.end_value', $end_date->format(self::FORMAT), '<=');
      $query->condition('field_status', ['canceled', 'denied'], 'NOT IN');
    });

    $nodes = $this->nodes('room', isset($params['rooms']) ? $params['rooms'] : []);
    $return = [];
    foreach ($nodes as $nid => $node) {
      $uuid = $node->uuid();
      $reservations = !empty($data[$node->uuid()]) ? $data[$node->uuid()] : [];
      $return[$uuid]['has_open_hours_conflict'] = $this->hasOpeningHoursConflict($reservations, $params, $node);
      $return[$uuid]['has_reservation_conflict'] = $this->hasReservationConflict($reservations, $params);
      $return[$uuid]['is_closed'] = $this->isClosed($params, $node);
      $return[$uuid]['has_location'] = !empty($this->getLocation($node));
      $return[$uuid]['dates'] = $this->getDates($reservations);
    }
    return $return;
  }

  protected function nodes($type, $ids = []) {
    $properties = [
      'type' => $type,
      'status' => 1,
      'field_reservable_online' => 1,
    ];
    if (!empty($ids)) {
      return $this->entityTypeManager->getStorage('node')->loadMultiple($ids);
    }
    return $this->entityTypeManager->getStorage('node')->loadByProperties($properties);
  }

  public function convertIds(array $uuids) {
    $nodes = \Drupal::service('entity_type.manager')->getStorage('node')->loadByProperties([
      'uuid' => $uuids,
    ]);
    return !empty($nodes) ? array_keys($nodes) : [];
  }

  public function reservationsByNode($type, $exec = NULL) {
    $reservations = [];
    foreach ($this->reservations($type, $exec) as $reservation) {
      $reservations[$reservation->field_room->entity->uuid()][$reservation->uuid()] = $reservation;
    }
    return $reservations;
  }

  public function reservations($type, $exec = NULL) {
    $storage = $this->entityTypeManager->getStorage($type . '_reservation');
    $query = $storage->getQuery();
    if (is_callable($exec)) {
      $exec($query);
    }
    $ids = $query->execute();
    $reservations = $storage->loadMultiple($ids);
    return $reservations;
  }
}
