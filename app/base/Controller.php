<?php

namespace app\base;
use common\until\vendor\core\Controller as CoreController;

class Controller extends CoreController
{
    public function goHome()
    {
        $this->redirect('site/index');
    }

    public function goNotFound()
    {
        $this->render('site/not-found');
    }

    public function goError()
    {
        $this->render('site/error');
    }

    public function actionLogin()
    {
        $this->redirect('site/login');
    }

    public function actionIndex()
    {
        $this->redirect('site/index');
    }
}
