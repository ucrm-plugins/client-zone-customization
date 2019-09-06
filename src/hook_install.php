<?php
declare(strict_types=1);

$defaults = [
    "javascript" => file_get_contents(__DIR__."/defaults/javascript.js"),
];

//scandir(__DIR__."/defaults/");
// TODO: Build the defaults autoloader.

mkdir(__DIR__."/data");
file_put_contents(__DIR__."/data/config.json", json_encode($defaults));
