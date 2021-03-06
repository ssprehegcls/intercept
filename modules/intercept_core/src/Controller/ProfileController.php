<?php

namespace Drupal\intercept_core\Controller;

use Drupal\Core\Routing\RouteMatchInterface;
use Drupal\profile\Controller\ProfileController as CoreProfileController;
use Drupal\profile\Entity\ProfileInterface;
use Drupal\profile\Entity\ProfileTypeInterface;
use Drupal\user\UserInterface;

/**
 * Returns responses for ProfileController routes.
 */
class ProfileController extends CoreProfileController {

  /**
   * {@inheritdoc}
   */
  public function addProfile(RouteMatchInterface $route_match, UserInterface $user, ProfileTypeInterface $profile_type) {
    $profile = $this->entityTypeManager()->getStorage('profile')->create([
      'uid' => $user->id(),
      'type' => $profile_type->id(),
    ]);
    return $this->entityFormBuilder()->getForm($profile, 'customer', ['uid' => $user->id(), 'created' => REQUEST_TIME]);
  }

  /**
   * {@inheritdoc}
   */
  public function editProfile(RouteMatchInterface $route_match, UserInterface $user, ProfileInterface $profile) {
    return $this->entityFormBuilder()->getForm($profile, 'customer');
  }

  /**
   * {@inheritdoc}
   */
  public function addPageTitle(ProfileTypeInterface $profile_type) {
    return $this->t('Settings');
  }

}
