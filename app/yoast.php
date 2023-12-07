<?php

add_filter('wpseo_breadcrumb_links', function ($links) {
  $links[0]['text'] = get_the_title(get_option('page_on_front'));
  return $links;
});
