<?php

require_once UNTIL_PATH . 'vendor/core/AutoLoader.php';

if (APPLICATION_ENV == 'PROD') {
    require_once UNTIL_PATH . 'config/prod/define.php';
}
elseif (APPLICATION_ENV == 'TEST') {
    require_once UNTIL_PATH . 'config/test/define.php';
}
elseif (APPLICATION_ENV == 'DEV') {
    require_once UNTIL_PATH . 'config/dev/define.php';
}
else {
    exit('APPLICATION_ENV set wrong!!');
}
