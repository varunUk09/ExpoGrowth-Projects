(function() {
    try {
        /* main variables */
        var debug = 0;
        var variation_name = "";

        /* all Pure helper functions */


        // selector would be the parent div where your are changing css/js
        function waitForElement(selector, trigger, delayInterval, delayTimeout) {
            var interval = setInterval(function() {
                if (
                    document &&
                    document.querySelector(selector) &&
                    document.querySelectorAll(selector).length > 0
                ) {
                    clearInterval(interval);
                    trigger();
                }
            }, delayInterval);
            setTimeout(function() {
                clearInterval(interval);
            }, delayTimeout);
        }

        /* Variation functions */
        function init() {
            // write your js here(function can be outside)

            // updating products title
            const egProductTitles = document.querySelectorAll("#productTileTitle");

            egProductTitles.forEach((tiles) => {
                // this regex is matching for like 7 of 16 <=== this is an example
                const egTxt = tiles.textContent.match(/[0-9]+\s[a-zA-Z]+\s[0-9]+/i)[0];
                // 5 of 23
                tiles.textContent = tiles.textContent.replace(egTxt, `${egTxt[0]} of 9`);

            });
        }


        /* Initialize variation */
        waitForElement("#maincontent > div.container.product-detail.product-wrapper.user-selected > div.row.tile > div.pdp-tile > div.attributes .pdp-selector", init, 50, 15000);
    } catch (e) {
        if (debug) console.log(e, "error in Test" + variation_name);
    }
})();