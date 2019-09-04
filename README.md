# Client Zone Customization

A simple plugin to perform additional client zone customization in UCRM.

## Installation

1. Download the plugin package from:
https://github.com/ucrm-plugins/client-zone-customization/raw/master/client-zone-customization.zip
2. From your UCRM Portal, navigate to System / Plugins and choose "Upload plugin".
3. Browse to the downloaded ZIP archive, choose upload and enjoy!


## Documentation
Once enabled, you can configure the following options in the Plugin Settings:

##### Apply Large Column Fix
Since a good portion of my own Clients visiting the Client Zone will not have any services established, I felt it was
unappealing to have only 50% of the content width used by the one and only column.  This feature allows for the entire
content area to be used when no services exist.

##### Hide "Is Lead" Row
As the label suggests, when enabled, this hides the "Is lead" row from the details.

##### Hide "Organization" Row
Similarly to above, when enabled, this hides the "Organization" row from the details.

##### Custom JavaScript
Really the best part!  I have been wanting UBNT to add Custom JavaScript capabilities to the UCRM system since plugins
were first introduced.  And now thanks to the "widgets", we can execute our own JavaScript code on any of the pages that
currently support widget inclusion.

Behind the scenes, the core functionality of this plugin is handled by JavaScript code.

For example, hiding the "Is lead" row uses only a single line of code:
```javascript
$("#client-contact-details .details-table tbody tr:nth-child(7)").css("display", "none");
``` 

##### You might be wondering...
Why we don't just use the Custom CSS feature built into UCRM already?

And the unfortunate answer is that the Custom CSS is sanitized to remove some of the necessary selectors like
`:nth-child()`, which we would need to perform such tasks as hiding selected rows.  And while a better solution in my
opinion would have been for UBNT to add specific #id or .class selectors to the elements, this just isn't the case. 


## Notes
- This plugin is only supported in UNMS 1.0.0 (w/ UCRM 3.0.0) and above, due to it's requirement on the new "widgets".
- It is currently not available to UNMS Cloud users, but will likely make it's way to the UBNT repository shortly.