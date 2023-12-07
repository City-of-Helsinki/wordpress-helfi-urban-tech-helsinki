<?php

namespace App\View\Components;

use Roots\Acorn\View\Component;

class Group extends Component
{
    public $style;
    public $color;
    public $background;
    public $align;
    public $class;

    public function __construct($style = null, $color = null, $background = null, $align = null, $class = null)
    {
        $this->style = $style;
        $this->color = $color;
        $this->background = $background;
        $this->align = $align;
        $this->class = $class;
    }

    public function render()
    {
        return $this->view('components.group');
    }
}
