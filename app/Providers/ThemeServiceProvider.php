<?php

namespace App\Providers;

use Roots\Acorn\Sage\SageServiceProvider;

use function Roots\view;

class ThemeServiceProvider extends SageServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        parent::register();
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        parent::boot();

        add_filter('searchwp_live_search_results_template', [$this, 'searchwpResultsTemplate']);
    }

    public function searchwpResultsTemplate($template)
    {
        $view = 'vendor.searchwp-live-ajax-search.search-results';
        return view()->exists($view) ? view($view)->makeLoader() : $template;
    }
}
