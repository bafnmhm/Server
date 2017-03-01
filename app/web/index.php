<?php

// user define here

define('APPLICATION_ENV', 'DEV');

define('APP_DIR', 'app');

define('WEB_DIR', 'app/web/');

// auto define

define('WEB_PATH', dirname(__FILE__));

define('APP_PATH', dirname(WEB_PATH) . '/');

define('SERVER_PATH', dirname(APP_PATH) . '/');

define('UNTIL_PATH', SERVER_PATH . 'common/until/');

require_once UNTIL_PATH . 'vendor/boot.php';

$application = new common\until\vendor\core\Application();
$application->run();
