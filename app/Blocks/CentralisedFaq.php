<?php

namespace App\Blocks;

use Log1x\AcfComposer\Block;

class CentralisedFaq extends Block
{
  public $name = 'Centralised FAQ';
  public $slug = 'centralised-faq';
  public $description = 'Shows a list of all FAQs using expansion panels.';
  public $category = 'widgets';
  public $icon = 'editor-help';
  public $mode = 'preview';
  public $supports = [
    'align' => ['full', 'wide'],
    'mode' => false,
];
  public function with() {
    return [
      'faqs' => get_posts([
        'posts_per_page' => -1,
        'orderby' => 'menu_order',
        'order' => 'ASC',
        'post_type' => 'faq',
        'post_status' => 'publish',
      ]),
    ];

  }

  public function fields()
  {
      return [];
  }
}
