<?php

class Tools{
    public static $titleSuffix = '新卓越';
    public function parseTitle($title){
        return $title.'-'.self::$titleSuffix;
    }
}

echo Tools::$titleSuffix;