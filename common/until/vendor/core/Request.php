<?php

namespace common\until\vendor\core;

class Request
{
    public $router;

    public function decode()
    {
        $requestURI = $_SERVER['REQUEST_URI'];
        $router = substr($requestURI, strpos($requestURI, WEB_DIR) + strlen(WEB_DIR));
        $pos = strpos($router, '?');
        if ($pos > -1) {
            $router = substr($router, 0, $pos);
        }
        $this->router = $router;
        return $this;
    }
}
