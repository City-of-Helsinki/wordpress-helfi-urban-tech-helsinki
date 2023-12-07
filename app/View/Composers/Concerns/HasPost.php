<?php

namespace App\View\Composers\Concerns;

use WP_Post;

use function Roots\asset;

trait HasPost
{
    public function image(WP_Post $post): string
    {
        $defaultUrl = asset('images/default-teaser.jpg');

        $imageId = get_field('teaser_image', $post->ID);
        if (!$imageId) {
            $imageId = get_post_thumbnail_id($post);
        }

        if (!$imageId) {
            return $defaultUrl;
        }

        $image = wp_get_attachment_image_src($imageId, 'large');

        if ($image) {
            return $image[0];
        }

        return $defaultUrl;
    }

    public function title(WP_Post $post): string
    {
        return get_the_title($post);
    }

    public function label(WP_Post $post): string
    {
        return sprintf(
            '%s, %s',
            get_the_author_meta('display_name', $post->post_author),
            get_the_date('', $post)
        );
    }

    public function categories(WP_Post $post): array
    {
        return get_the_category($post->ID);
    }

    public function color(WP_Post $post): string
    {
        return get_post_meta($post->ID, 'post_color', true) ?: 'ui-03';
    }
}
