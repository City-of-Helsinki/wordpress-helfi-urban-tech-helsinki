<?php

namespace App\View\Composers\Concerns;

use WP_Post;

trait HasPostData
{
    public function content(): string
    {
        if ($post = $this->post()) {
            return apply_filters('the_content', get_the_content(null, false, $post));
        }
        return '';
    }

    public function title(): string
    {
        if ($this->view->name() !== 'partials.page-header') {
            return get_the_title($this->post());
        }

        if (is_home()) {
            if ($home = get_option('page_for_posts', true)) {
                return get_the_title($home);
            }

            return __('Latest Posts', 'sage');
        }

        if (is_archive()) {
            return get_the_archive_title();
        }

        if (is_search()) {
            /* translators: %s is replaced with the search query */
            return sprintf(
                __('Search Results for %s', 'sage'),
                get_search_query()
            );
        }

        if (is_404()) {
            return __('Not Found', 'sage');
        }

        return get_the_title();
    }

    public function post(): ?WP_Post
    {
        $object = get_queried_object();
        if (isset($object->post_type)) {
            return $object;
        }

        if (function_exists('get_page_for_post_type')) {
            /* @see humanmade/page-for-post-type */
            $post_id = get_page_for_post_type();
            return $post_id ? get_post($post_id) : null;
        }

        return null;
    }
}
