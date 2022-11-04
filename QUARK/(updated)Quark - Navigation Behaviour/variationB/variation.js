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
            document.querySelectorAll("div#mega-menu-dropdown #level-2-1 a").forEach(anchor => {
                anchor.addEventListener("click", function() {
                    window.location.href = anchor.href;
                })
            })

        }


        /* Initialize variation */
        waitForElement("body > div.dialog-off-canvas-main-canvas > div > nav", init, 50, 15000);
    } catch (e) {
        if (debug) console.log(e, "error in Test" + variation_name);
    }
})();