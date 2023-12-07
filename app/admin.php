<?php

/**
 * Theme admin.
 */

namespace App;

use WP_Customize_Manager;

use function Roots\asset;

/**
 * Add a custom Block category for the theme
 */
add_filter('block_categories', function ($categories, $post) {
    $categories[] = [
        'slug' => 'sage',
        'title' => __('Theme blocks', 'sage'),
        'icon' => 'wordpress',
    ];
    return $categories;
}, 10, 2);

/**
 * Register the `.brand` selector as the blogname.
 *
 * @param  \WP_Customize_Manager $wp_customize
 * @return void
 */
add_action('customize_register', function (WP_Customize_Manager $wp_customize) {
    $wp_customize->get_setting('blogname')->transport = 'postMessage';
    $wp_customize->selective_refresh->add_partial('blogname', [
        'selector' => '.brand',
        'render_callback' => function () {
            bloginfo('name');
        }
    ]);
});

/**
 * Add styling classes to TinyMCE.
 */
add_filter('tiny_mce_before_init', function ($settings) {
    $style_formats = [
        [
            'title' => 'Buttons',
            'items' => [
                ['title' => 'Buttons', 'selector' => 'a', 'classes' => 'button'],
            ],
        ],
    ];
    $settings['style_formats'] = json_encode($style_formats);
    $settings['style_formats_merge'] = true;
    return $settings;
});

/**
 * Modify buttons in TinyMCE's second row.
 */
add_filter('mce_buttons_2', function ($buttons) {
    // Unless TinyMCE Advanced is enabled, we need to specifically add the style button.
    array_splice($buttons, 1, 0, 'styleselect');
    $remove = [
        'forecolor', // text color
    ];
    return array_diff($buttons, $remove);
});

/**
 * Register the customizer assets.
 *
 * @return void
 */
add_action('customize_preview_init', function () {
    wp_enqueue_script('sage/customizer.js', asset('scripts/customizer.js')->uri(), ['customize-preview'], null, true);
});

/**
 * Theme assets for the admin interface.
 */
add_action('admin_enqueue_scripts', function () {
    wp_enqueue_style('sage/admin.css', asset('styles/admin.css')->uri(), false, null);
});
