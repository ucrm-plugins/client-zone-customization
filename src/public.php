<?php
declare(strict_types=1);

// Display the small banner content.
echo file_get_contents(__DIR__."/partials/content.html");

// Get the config file path.
$configPath = __DIR__."/data/config.json";

// IF the file exists...
if(file_exists($configPath))
{
    // ...THEN load and decode it!
    $config = json_decode(file_get_contents($configPath), true);

    // IF any decoding errors occurred, THEN exit!
    if(json_last_error() !== JSON_ERROR_NONE)
        exit();

    // Load the jQuery CDN & re-reference $ to the parent document, as that is where we will be executing our selectors!
    echo file_get_contents(__DIR__."/partials/jquery.html");

    // Execute the Large Column Fix...
    if(array_key_exists("largeColumnFix", $config) && $config["largeColumnFix"])
        echo file_get_contents(__DIR__."/partials/largeColumnFix.html");

    // Hide the "Is Lead" row as desired...
    if(array_key_exists("hideIsLead", $config) && $config["hideIsLead"])
        echo file_get_contents(__DIR__."/partials/hideIsLead.html");

    // Hide the "Organization" row as desired...
    if(array_key_exists("hideOrganization", $config) && $config["hideOrganization"])
        echo file_get_contents(__DIR__."/partials/hideOrganization.html");

    //
    // NOTE: Add more functionality as needed!
    //

    // Execute any provided JavaScript code...
    if(array_key_exists("javascript", $config))
    {
        $javascript = $config['javascript'];

        if($javascript !== null && $javascript !== "")
            echo "<script>$javascript</script>";
    }




}

