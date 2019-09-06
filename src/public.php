<?php
declare(strict_types=1);

// Display the small banner content.
echo file_get_contents(__DIR__."/public/index.html");

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

    #region Large Column Fix

    // Execute the Large Column Fix...
    if(array_key_exists("largeColumnFix", $config) && $config["largeColumnFix"] !== "")
    {
        switch($config["largeColumnFix"])
        {
            case "always":
                echo "<script>clientZone.accountPage.largeColumnFix(true);</script>";
                break;
            case "withoutServices":
                echo "<script>clientZone.accountPage.largeColumnFix();</script>";
                break;
        }
    }

    #endregion

    #region Hide 'Is lead'

    // Hide the "Is Lead" row as desired...
    if(array_key_exists("hideIsLead", $config) && $config["hideIsLead"])
        echo '<script>clientZone.accountPage.hideClientContactDetailsRow("Lead");</script>';

    #endregion

    #region Hide 'Organization'

    // Hide the "Organization" row as desired...
    if (array_key_exists("hideOrganization", $config) && $config["hideOrganization"])
        echo '<script>clientZone.accountPage.hideClientContactDetailsRow("Organization");</script>';

    #endregion

    #region Branding

    if (array_key_exists("brandLogo", $config) && $config["brandLogo"] &&
        file_exists(__DIR__."/data/files/{$config["brandLogo"]}"))
    {
        $image = file_get_contents(__DIR__."/data/files/{$config["brandLogo"]}");
        $imageType = finfo_buffer(finfo_open(), $image, FILEINFO_MIME_TYPE);
        $imageData = base64_encode($image);
        $imageSource = "data:$imageType;base64,$imageData";

        if (array_key_exists("brandText", $config))
            $zoneText = $config["brandText"] ?? "";

        echo "<script>clientZone.accountPage.addBranding('$imageSource', '$zoneText');</script>";
    }

    #endregion

    //
    // NOTE: Add more "simple" functionality as needed!
    //

    // Execute any provided JavaScript code...
    if(array_key_exists("javascript", $config))
    {
        $javascript = $config['javascript'];

        if($javascript !== null && $javascript !== "")
            echo "<script>$javascript</script>";
    }




}

