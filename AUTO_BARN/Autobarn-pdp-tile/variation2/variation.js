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
            if (window.innerWidth < 768) {
                const egLogoDiv = document.querySelector("div.container.main__inner-wrapper div.product__brand_promo");
                const egTitle = document.querySelector("div.container.main__inner-wrapper h1.name");
                const egSku = document.querySelector("div.container.main__inner-wrapper div.sku");

                // adding elements to the list in order to append them on required div
                const egElementsToMove = [egSku, egTitle, egLogoDiv];

                egElementsToMove.forEach(ele => {
                    // target to where move
                document.querySelector("div.container.main__inner-wrapper").insertAdjacentElement("afterbegin", ele);
                });

                // changing text from "sku"
                document.querySelector("div.product__brand_promo + h1.name + div.sku").innerHTML = document.querySelector("div.product__brand_promo + h1.name + div.sku").innerHTML.replace("SKU:", "<strong>SKU:</strong>").replace("Part Number.", "<strong>Part Number:</strong>");
            }

        }


        /* Initialize variation */
        waitForElement("body > main", init, 50, 15000);
    } catch (e) {
        if (debug) console.log(e, "error in Test" + variation_name);
    }
})();