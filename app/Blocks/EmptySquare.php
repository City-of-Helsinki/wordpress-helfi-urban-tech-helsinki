<?php

namespace App\Blocks;

use Log1x\AcfComposer\Block;

class EmptySquare extends Block
{
  public $name = 'Empty Square';
  public function with()
  {
  }

  public function fields()
  {
      return [];
  }
}
