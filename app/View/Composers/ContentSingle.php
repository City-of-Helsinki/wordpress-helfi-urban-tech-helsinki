<?php

namespace App\View\Composers;

use App\View\Composers\Concerns\HasPost;
use Roots\Acorn\View\Composer;
use stdClass;
use WP_Query;

class ContentSingle extends Composer
{
    use HasPost;

    /**
     * List of views served by this composer.
     *
     * @var array
     */
    protected static $views = [
        'partials.content-single',
    ];

    /**
     * @return array
     */
    public function with()
    {
        $post = get_post();
        $categories = get_the_category();
        if (isset($categories) && sizeof($categories) >= 1) {
            $category = $categories[0];
        }

        return [
            'category' => $category,
            'author' => get_the_author_meta('display_name', $post->post_author),
        ];
    }
}
