<?php

namespace common\until\vendor\core;

class View
{
    private $alias;
    private $cache = false;

    public function __construct($alias = '')
    {
        $this->alias = $alias;
    }

    public function render($file, $params = [])
    {
        ob_start();

        ob_implicit_flush(false);
        extract($params, EXTR_OVERWRITE);
        require $file;

        echo ob_get_clean();
    }

    public function renderCache($expire, $paramSeed = '', $alias = '')
    {
        $this->cache = true;


        //todo parse alias
    }

    public function createCache()
    {

    }
}