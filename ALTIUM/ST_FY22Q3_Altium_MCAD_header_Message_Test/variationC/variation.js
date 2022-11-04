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
            // header 1
            const egHeader1 = document.querySelector("div#block-altium-365-content section.hero .hero__wrap .hero__text > h1");
            egHeader1.innerHTML = `Optimize the design process between electrical PCB and mechanical domains`;

            // header 2
            const egHeader2 = document.querySelector("div#block-altium-365-content section.hero .hero__wrap .hero__text > p")
            egHeader2.innerHTML = `Streamline and simplify communication and collaboration between PCB and mechanical design with a common design workspace that uses the “native language” of both mechanical and PCB design.`;
        }


        /* Initialize variation */
        waitForElement("div#block-altium-365-content section.hero .hero__wrap .hero__text", init, 50, 15000);
    } catch (e) {
        if (debug) console.log(e, "error in Test" + variation_name);
    }
})();