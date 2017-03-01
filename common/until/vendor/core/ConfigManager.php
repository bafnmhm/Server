<?php

namespace common\until\vendor\core;

class ConfigManager
{
    private static $self;
    private static $config;

    private function  __construct()
    {
        if (APPLICATION_ENV == 'PROD') {
            self::$config = require_once UNTIL_PATH . 'config/prod/config.php';
        }
        elseif (APPLICATION_ENV == 'TEST') {
            self::$config = require_once UNTIL_PATH . 'config/test/config.php';
        }
        elseif (APPLICATION_ENV == 'DEV') {
            self::$config = require_once UNTIL_PATH . 'config/dev/config.php';
        }
    }

    public static function getConfigManager()
    {
        if (!self::$self) {
            self::$self = new self();
        }
        return self::$self;
    }

    public function getConfig()
    {
        return self::$config;
    }
}