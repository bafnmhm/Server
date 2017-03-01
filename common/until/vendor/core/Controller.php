<?php

namespace common\until\vendor\core;

abstract class Controller
{
    /** @var Request $baseController */
    protected $request;

    protected $modulePath;

    protected $view;

    abstract function goHome();

    abstract function goNotFound();

    abstract function goError();

    public function redirect($router = null)
    {
        if (!$router) {
            $router = $this->request->router;
        }

        $this->request->router = $router;

        if (!$router) {
            $this->goHome();
            return;
        }

        $routerStacks = explode('/', $router);
        $routerLevel = count($routerStacks);

        if ($routerLevel == 1) {
            $class = $this;
            $method = 'action' . $routerStacks[0];
        } elseif ($routerLevel == 2) {
            $controller = APP_DIR . '\\module\\' . $routerStacks[0] . '\\controller\\' . ucfirst($routerStacks[0]) . 'Controller';
            $class = new $controller;
            $method = 'action' . $routerStacks[1];
        } elseif ($routerLevel == 3) {
            $controller = APP_DIR . '\\module\\' . $routerStacks[0] . '\\controller\\' . ucfirst($routerStacks[1]) . 'Controller';
            $class = new $controller;
            $method = 'action' . $routerStacks[2];
        } else {
            $this->goNotFound();
            return;
        }

        if (!method_exists($class, $method)) {
            $this->goNotFound();
            return;
        }

        $class->setRequest($this->request);
        $class->$method();
    }

    public function render($file, $params = [])
    {
        if (strpos($file, '/') === false) {
            $file = $this->getModulePath() . '/view/' . $file . '.php';
        } else {
            $pos = strrpos($file, '/');
            $file = substr($file, 0, $pos) . '/view/' . substr($file, $pos);
            $file = APP_PATH . 'module/' . $file . '.php';
        }

        $view = $this->getView();
        $view->render($file, $params);
    }

    public function setRequest(Request $request)
    {
        $this->request = $request;
    }

    protected function getView()
    {
        if (!$this->view) {
            $this->view = new View($this->getRouter());
        }
        return $this->view;
    }

    protected function getRouter()
    {
        return $this->request->router;
    }

    private function getModulePath()
    {
        if (!$this->modulePath) {
            $class = new \ReflectionClass($this);
            $this->modulePath = dirname(dirname($class->getFileName()));
        }

        return $this->modulePath;
    }
}
