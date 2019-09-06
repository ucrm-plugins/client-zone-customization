


// noinspection JSUnusedGlobalSymbols
const clientZone = {

    accountPage:
    {

        /**
         * Adds a specified image and optional text to re-brand the page.
         *
         * @param {string} imageSource   The base64 encoded image string to be used as "src".
         * @param {string} zoneText      The optional custom zone text.
         */
        addBranding: function(imageSource, zoneText = "")
        {

            let $brand = $("#header__client-zone");
            let titleText = zoneText !== "" ? zoneText : $brand.text();

            $brand.html(`
                <div id="custom-brand" style="display:flex; align-items:center;">
                    <img style="height:100%; width:auto;" src="${imageSource}" alt="Logo">
                    ${titleText}
                </div>
            `);

            $(window.parent)
                .on("resize",
                    function()
                    {
                        let maxHeight = $("#header").height();

                        let $brand = $("#custom-brand");
                        $brand.css("height", maxHeight + "px");

                        let $menu = $(".appGlobalHeader__menu");

                        //if($menu.css("display") === "block")
                        $("#header__client-zone").css("padding-left", "0");
                    }
                )
                .trigger("resize");
        },

        largeColumnFix: function(always = false)
        {
            let $column = $(".col--lg6");

            if($column.length === 2)
            {
                let $right = $($column[1]);
                let $content = $right.html().trim();

                // NOTE: I think I prefer it always as a single column, but will leave it like this for now!
                if($content === "" || always)
                {
                    $column.removeClass("col--lg6");
                    $column.addClass("col--lg12");
                }
            }
        },



        /**
         *
         * @param label
         */
        hideClientContactDetailsRow: function (label) {


            $("#client-contact-details .details-table tbody tr").each(
                function (index, element) {
                    let $current = $(element);
                    let text = $current.find("th").text();

                    if (text === label)
                        $current.css("display", "none");
                }
            );
        }


    }


};
