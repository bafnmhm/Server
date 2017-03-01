<?php

namespace app\module\site\controller;
use app\base\Controller;

class SiteController extends Controller
{
    public function actionIndex()
    {
        $this->render('site/index');
    }

    public function actionLogin()
    {
        if ($this->getView()->renderCache(60, 'abcd')) {
            return;
        }
        $this->render('login');
    }
}