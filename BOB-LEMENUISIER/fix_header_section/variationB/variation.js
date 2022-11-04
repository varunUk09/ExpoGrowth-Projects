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
            const egPhoneText = document.querySelector("body > div.page-wrapper > header > div.panel.wrapper > div > div > div.header-left > div > p");

            // setting the phone text
            egPhoneText.textContent = "Commander en ligne :";

            // getting phone content box
            const egContentBox = document.querySelector("body > div.page-wrapper > header > div.panel.wrapper > div > div > div.header-left > div");

            // creating anchor for call
            const egCallMe = `<a href="tel:+33805542084" class="eg_call_me"></a>`;

            egContentBox.insertAdjacentHTML("beforeend", egCallMe);

        }
        /* Initialize variation */
        waitForElement("body > div.page-wrapper > header > div.panel.wrapper > div > div > div.header-left", init, 50, 15000);
    } catch (e) {
        if (debug) console.log(e, "error in Test" + variation_name);
    }
})();