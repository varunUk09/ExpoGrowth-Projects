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

            // getting the first price label (there are two same labels first one is for mobile and second one is for desktop) 
            const egPriceLabel = document.querySelector(".price.price-container");

            const egPriceLabelDesktop = document.querySelector("#pdp--title > p");
            // remove this second price label
            egPriceLabelDesktop.remove();

            // offer
            const egOfferHtml = "<h2>FREE Returns &amp; Exchanges</h2>";

            // append this offer html to the price label
            egPriceLabel.insertAdjacentHTML("beforeend", egOfferHtml);

            const egSelectSize = document.querySelector("#pdp--form > div.pdp--form__cta-container");
            egSelectSize.insertAdjacentElement("beforebegin", egPriceLabel);
        }
        /* Initialize variation */
        waitForElement("#pdp--details", init, 50, 15000);
    } catch (e) {
        if (debug) console.log(e, "error in Test" + variation_name);
    }
})();