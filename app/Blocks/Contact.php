<?php

namespace App\Blocks;

use Log1x\AcfComposer\Block;

class Contact extends Block
{
  public $name = 'Contact';
  public $mode = 'auto';
  public function with() {
    return [
      'contacts' => get_field('contacts'),
    ];
  }

  public function fields()
  {
      return [];
  }
}
