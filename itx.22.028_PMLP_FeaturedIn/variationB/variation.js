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
            // write your js here

            const logos = ["https://expogrowth.in/wp-content/uploads/2022/10/FleetOwner.png",
                "https://expogrowth.in/wp-content/uploads/2022/10/aitechpark.png",
                "https://expogrowth.in/wp-content/uploads/2022/10/thetrucker.png",
                "https://expogrowth.in/wp-content/uploads/2022/10/CCJ.png",
                "https://expogrowth.in/wp-content/uploads/2022/10/g2.png",
                "https://expogrowth.in/wp-content/uploads/2022/10/FleetEquipment.png",
                "https://expogrowth.in/wp-content/uploads/2022/10/WasteAdvantageMag.png",
                "https://expogrowth.in/wp-content/uploads/2022/10/FeaturedCustomers.png"
            ];

            let egCustomizedHtml = `
            <div class="eg-featured-in">
                <h4>Featured In</h4>
                <div class="eg-logo-container">`;

            // adding logos to the html
            for (logo of logos) {
                egCustomizedHtml += `<div class="logo"><img src="${logo}" alt="${logo.split("/").pop().split(".").shift()}"></div>`;
            }

            egCustomizedHtml += `</div></div>`;

            document.querySelector("#hero-edit > div:nth-child(3)").insertAdjacentHTML("afterend", egCustomizedHtml);

            // adding it to dom

        }


        /* Initialize variation */
        waitForElement("#hero", init, 50, 15000);
    } catch (e) {
        if (debug) console.log(e, "error in Test" + variation_name);
    }
})();