<?php

class BaseClass{
    public $user;
    public function __construct(){
        echo '验证登陆';
    }
    public function error(){
        echo "404<br/>";
    }
}
class SubClass extends BaseClass{
    public function __construct(){ //如果子类没有构造函数，则会自动执行父类的构造函数
        parent::__construct(); //执行子类构造函数的同时调用父类的构造函数
        echo '验证权限';  //子类有构造函数时不会调用父类的构造函数
    }
    public function test(){
        $this->user;
        $this->error();
    }
    public function error(){  //子类调用时用的是子类的方法，父类方法被覆盖了
        echo 'error'; 
    }
}
// $baseClass = new BaseClass();

$subClass = new SubClass();

$subClass->error();