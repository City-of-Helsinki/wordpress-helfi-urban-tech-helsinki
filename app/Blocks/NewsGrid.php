<?php

namespace App\Blocks;

use WP_Query;
use Log1x\AcfComposer\Block;

class NewsGrid extends Block
{
  public $name = 'NewsGrid';
  public $mode = 'auto';

  public function with()
  {
    return [
      'query' => $this->query(),
      'use_pagination' => get_field('pagination'),
      'show_all_articles_link' => get_field('all_articles_link'),
    ];
  }

  public function query(): WP_Query
  {
    $opts = [
      'posts_per_page' => get_field('all_articles_link') ? 15 : 16,
      'orderby' => 'date',
      'order' => 'DESC',
      'post_type' => 'Post',
      'use_pagination' => get_field('pagination'),
      'ignore_sticky_posts' => false,
      'post_status' => 'publish',
      'paged' => get_field('pagination') ? (get_query_var('paged') ?: 1) : null,
    ];

    return new WP_Query($opts);
  }

  public function fields()
  {
      return [];
  }
}
