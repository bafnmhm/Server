<?php

function autoLoader($class)
{
    $file = SERVER_PATH . str_replace('\\', '/', $class) . '.php';
    if (APPLICATION_ENV == 'DEV' && !file_exists($file)) {
        exit("class: $class not exist! namespace missing?");
    }
    require_once $file;
}

spl_autoload_register('autoLoader');
