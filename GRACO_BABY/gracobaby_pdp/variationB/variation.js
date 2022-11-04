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
            const aboutShipping = document.querySelector("#maincontent > div.container.product-detail.product-wrapper.user-selected > div.row.tile > div.pdp-tile > div.attributes.no-show-more > div.shipping > p");

            aboutShipping.insertAdjacentHTML("afterend", `
                <p class="eg-returns-exchanges">
                    <strong>Easy Returns.</strong> <span class="learnmore">Learn More.</span>
                    <span class="tooltip-text">
                        we want yout to love everything you purchase from us - car seats,strollers,home and gear,and anything else. If for any reason you don't, even if you just change your mind, start our self-service return process by mail.<a href="#" class="learnmmore-link"><strong>Click here for more info</strong></a>
                    </span>
                </p>`);

        }


        /* Initialize variation */
        waitForElement("#maincontent > div.container.product-detail.product-wrapper.user-selected > div.row.tile > div.pdp-tile > div.attributes.no-show-more > div.shipping", init, 50, 15000);
    } catch (e) {
        if (debug) console.log(e, "error in Test" + variation_name);
    }
})();