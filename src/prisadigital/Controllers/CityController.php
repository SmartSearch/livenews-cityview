<?php

namespace prisadigital\Controllers;

use DateTime;
use Silex\Application;
use Symfony\Component\HttpFoundation\Request;

class CityController {

    public function indexAction(Request $request, Application $app) {
        
        $api = $app['smart'];

        $api->weather();        
        
        $data = array(
            'document'  => array('id' => 'index'),
            'mod_news' => array(
                'titulo' => $api->noticia(),
                'subtitulo' => 'Breaking News'
                ),
            'mod_wheater'  => array(
                'date'         => new DateTime(),
                'temp_current' => $api->weatherToday(),
                'temp_max'     => '18',
                'temp_min'     => '12',
                'wind'         => '10 km/h',
                'humedad'      => '86%',
                'sol'          => '-',
                )
        );
        
       return $app['twig']->render('index.html.twig', $data);
    }
}

