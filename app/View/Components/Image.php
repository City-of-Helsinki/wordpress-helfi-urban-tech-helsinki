<?php

namespace App\View\Components;

use Roots\Acorn\View\Component;

class Image extends Component
{
    public $style;

    public function __construct($style = 'outline')
    {
        $this->style = $style;
    }

    public function render()
    {
        return $this->view('components.image');
    }
}
