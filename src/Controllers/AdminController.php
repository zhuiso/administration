<?php
// +----------------------------------------------------------------------
// | Dscription:  The file is part of Zs
// +----------------------------------------------------------------------
// | Author: showkw <showkw@163.com>
// +----------------------------------------------------------------------
// | CopyRight: (c) 2018 zhuiso.com
// +----------------------------------------------------------------------
namespace Zs\Administration\Controllers;

use Zs\Foundation\Routing\Abstracts\Controller;

/**
 * Class AdminController.
 */
class AdminController extends Controller
{
    /**
     * Return index content.
     *
     * @return \Illuminate\Contracts\View\View
     */
    public function handle()
    {
        $this->share('translations', json_encode($this->translator->fetch('zh-cn')));

        return $this->view('admin::layout');
    }
}
