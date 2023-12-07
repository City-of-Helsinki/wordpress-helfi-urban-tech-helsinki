<?php

/**
 * Theme setup.
 */

namespace App;

use function Roots\asset;
use function Roots\base_path;

/**
 * Register the theme assets.
 *
 * @return void
 */
add_action('wp_enqueue_scripts', function () {
    wp_enqueue_script('sage/vendor.js', asset('scripts/vendor.js')->uri(), ['jquery'], null, true);
    wp_enqueue_script('sage/app.js', asset('scripts/app.js')->uri(), ['sage/vendor.js', 'jquery'], null, true);
    wp_enqueue_script('accordion.js', asset('scripts/accordion.js')->uri(), [], null, true);

    wp_add_inline_script('sage/vendor.js', asset('scripts/polyfill.js')->contents(), 'before');
    wp_add_inline_script('sage/vendor.js', asset('scripts/manifest.js')->contents(), 'before');

    if (is_single() && comments_open() && get_option('thread_comments')) {
        wp_enqueue_script('comment-reply');
    }

    wp_enqueue_style('sage/app.css', asset('styles/app.css')->uri(), ['wp-block-library'], null);

    wp_localize_script('sage/app.js', 'Sage', [
        'locale' => get_locale(),
        'WP_DEBUG' => WP_DEBUG,
        'site_url' => home_url('/'),
        'ajax_url' => admin_url('admin-ajax.php'),
    ]);
}, 100);

/**
 * Replace core jQuery with theme's jQuery.
 */
add_action('wp_enqueue_scripts', function () {
    wp_deregister_script('jquery');
    wp_deregister_script('jquery-core');
    wp_deregister_script('jquery-migrate');
    wp_register_script('jquery', asset('scripts/jquery.js')->uri(), false, null, true);
});

/**
 * Register the theme assets with the block editor.
 *
 * @return void
 */
add_action('enqueue_block_editor_assets', function () {
    $dir = get_template_directory();

    if (file_exists($dir . '/dist/scripts/manifest.asset.php')) {
        $manifest = include $dir . '/dist/scripts/manifest.asset.php';

        wp_enqueue_script('sage/vendor.js', asset('scripts/vendor.js')->uri(), $manifest['dependencies'], null, true);
        wp_enqueue_script('sage/editor.js', asset('scripts/editor.js')->uri(), ['sage/vendor.js'], null, true);

        wp_add_inline_script('sage/vendor.js', asset('scripts/manifest.js')->contents(), 'before');
    }

    wp_enqueue_style('sage/editor.css', asset('styles/editor.css')->uri(), false, null);
}, 100);

/**
 * Register the initial theme setup.
 *
 * @return void
 */
add_action('after_setup_theme', function () {
    /**
     * Enable features from Soil when plugin is activated
     * @link https://roots.io/plugins/soil/
     */
    add_theme_support('soil-clean-up');
    add_theme_support('soil-nav-walker');
    add_theme_support('soil-nice-search');
    add_theme_support('soil-relative-urls');

    /**
     * Enable plugins to manage the document title
     * @link https://developer.wordpress.org/reference/functions/add_theme_support/#title-tag
     */
    add_theme_support('title-tag');

    /**
     * Register navigation menus
     * @link https://developer.wordpress.org/reference/functions/register_nav_menus/
     */
    register_nav_menus([
        'primary_navigation' => __('Primary Navigation', 'sage')
    ]);
    register_nav_menus([
        'footer_navigation' => __('Footer Navigation', 'sage')
    ]);

    /**
     * Enable post thumbnails
     * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
     */
    add_theme_support('post-thumbnails');

    /**
     * Add theme support for Wide Alignment
     * @link https://wordpress.org/gutenberg/handbook/designers-developers/developers/themes/theme-support/#wide-alignment
     */
    add_theme_support('align-wide');

    /**
     * Enable responsive embeds
     * @link https://wordpress.org/gutenberg/handbook/designers-developers/developers/themes/theme-support/#responsive-embedded-content
     */
    add_theme_support('responsive-embeds');

    /**
     * Enable HTML5 markup support
     * @link https://developer.wordpress.org/reference/functions/add_theme_support/#html5
     */
    add_theme_support('html5', ['caption', 'comment-form', 'comment-list', 'gallery', 'search-form']);

    /**
     * Enable selective refresh for widgets in customizer
     * @link https://developer.wordpress.org/themes/advanced-topics/customizer-api/#theme-support-in-sidebars
     */
    add_theme_support('customize-selective-refresh-widgets');

    /**
     * Enable theme color palette support
     * @link https://developer.wordpress.org/block-editor/developers/themes/theme-support/#block-color-palettes
     */
    add_theme_support('editor-color-palette', json_decode(
        file_get_contents(base_path('resources/assets/palette.json')),
        true
    ));

    add_theme_support('editor-font-sizes', [
        // [
        //     'name' => __('small', 'sage'),
        //     'slug' => 'small',
        //     'size' => 14,
        // ],
        // [
        //     'name' => __('medium', 'sage'),
        //     'slug' => 'medium',
        //     'size' => 18,
        // ],
        // [
        //     'name' => __('large', 'sage'),
        //     'slug' => 'large',
        //     'size' => 20,
        // ],
    ]);

    add_theme_support('wp-block-styles');
    add_theme_support('disable-custom-colors');
    add_theme_support('disable-custom-font-sizes');

    remove_theme_support( 'widgets-block-editor' );

    add_image_size('tiny', 50, 50, true);
    add_image_size('wide', 1200);
    add_image_size('xlarge', 1440);
    add_image_size('xxlarge', 2000);
}, 20);

/**
 * Register the theme sidebars.
 *
 * @return void
 */
add_action('widgets_init', function () {
    $config = [
        'before_widget' => '<section class="widget %1$s %2$s">',
        'after_widget' => '</section>',
        'before_title' => '<h3>',
        'after_title' => '</h3>'
    ];
    register_sidebar([
        'name' => __('Footer: Logos', 'uht'),
        'id' => 'footer-logos'
    ] + $config);
    register_sidebar([
        'name' => __('Footer: Socials', 'uht'),
        'id' => 'footer-socials'
    ] + $config);
    register_sidebar([
        'name' => __('Footer: Fine print', 'uht'),
        'id' => 'footer-fineprint'
    ] + $config);
});
