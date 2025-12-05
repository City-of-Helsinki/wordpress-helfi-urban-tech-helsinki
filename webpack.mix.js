const mix = require('laravel-mix');
const path = require('path');
require('@tinypixelco/laravel-mix-wp-blocks');
require('laravel-mix-copy-watched');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Sage application. By default, we are compiling the Sass file
 | for your application, as well as bundling up your JS files.
 |
 */

mix.setPublicPath('./dist')
   .browserSync('urban-tech-helsinki.test');

mix.sass('resources/assets/styles/app.scss', 'styles')
   .sass('resources/assets/styles/admin.scss', 'styles')
   .sass('resources/assets/styles/editor.scss', 'styles');

mix.options({
  extractVueStyles: 'styles/vue.css',
  processCssUrls: false,
  postCss: [
    require('postcss-inline-svg')({paths: ['resources/assets']}),
    // @see https://github.com/JeffreyWay/laravel-mix/issues/1606#issuecomment-551457071
    require('autoprefixer')({grid: 'autoplace'}),
  ],
  // Causes the follow invalid optimization:
  //   calc(50% - (50vw - ((100vw - 42.125rem) / 2) * .2) + 10px)
  //   calc(50% - 50vw - (100vw - 42.125rem) / 2 * 0.2 + 10px)
  cssNano: {calc: false}
});

mix.sourceMaps(false, 'source-map')
   .version();
