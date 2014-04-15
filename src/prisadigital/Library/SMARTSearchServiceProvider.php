<?php

namespace prisadigital\Library;

use Exception;
use Silex\Application;
use Silex\ServiceProviderInterface;

class SMARTSearchServiceProvider implements ServiceProviderInterface {
    
    public function boot(Application $app) {
    }

    public function register(Application $app) {
        $this->app = $app;
        
        $app['smart'] = $app->share(function ($name) use ($app) {
            return new SMARTSearch($app['logger'], 
                    $app['smart.options.url'],
                    $app['smart.options.query_news'],
                    $app['smart.options.query_weather']
                    );
        });        
    }
}
