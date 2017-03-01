<?php

namespace common\until\vendor\core;

class Application
{
    public function run()
    {
        $this->dispatch();
    }

    public function dispatch()
    {
        $request = new Request();
        $request->decode();

        $controllerClass = APP_DIR . '\\base\\Controller';

        /** @var Controller $baseController */
        $baseController = new $controllerClass();
        $baseController->setRequest($request);
        $baseController->redirect();
    }
}