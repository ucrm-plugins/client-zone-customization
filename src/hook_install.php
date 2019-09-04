<?php
declare(strict_types=1);

$defaults = [
    "javascript" => 'console.log("Running the Client Zone Customization plugin.");',
];

mkdir(__DIR__."/data");
file_put_contents(__DIR__."/data/config.json", json_encode($defaults));