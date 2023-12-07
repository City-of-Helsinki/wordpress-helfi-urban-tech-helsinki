<?php

namespace App\View\Composers;

use App\View\Composers\Concerns\HasPostData;
use Roots\Acorn\View\Composer;

class PageHeading extends Composer
{
    /**
     * List of views served by this composer.
     *
     * @var array
     */
    protected static $views = [
        'index',
        'partials.page-header',
        'partials.content',
        'partials.content-*',
    ];

    /**
     * Data to be passed to view before rendering, but after merging.
     *
     * @return array
     */
    public function with()
    {
        return [
            'printPageHeading' => $this->printPageHeading(),
        ];
    }

    /**
     * Do not print page heading if there's an <h1> tag in the content.
     */
    public function printPageHeading(): bool
    {
        $content = get_the_content();
        return strpos($content, '</h1>') === false;
    }
}
