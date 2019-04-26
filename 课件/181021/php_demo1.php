<?php

class Comment{
    private $username;  //共有
    //protected $username;  //私有
    // public function setUsername($username){
    //     $this->username = $username;  //类内获取类变量
    // }
    // public function getUsername(){
    //     return $this->username;
    // }
    public function __set($name, $value){
        $this->$name = $value;
    }
    public function __get($name){
        return $this->$name;
    }
}

class CommentBook{
    const FilePath = 'commnetBook.txt';
    public function getCommentList(){
        return unserialize(file_get_contents(self::FilePath));
    }
    public function write($commentData){
        $commentList = $this->getCommentList();
    }
}

// $comment = new Comment();
// var_dump($comment);

// $comment->username = 'xzy';
// echo $comment->username;

// $comment->setUsername('xzy');
// echo $comment->getUsername();

$commentBook = new CommentBook();
echo $commentBook::FilePath;