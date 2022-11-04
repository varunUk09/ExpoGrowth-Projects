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

        const egPricingHTML = `
        <section class="eg-price-section">
            <div class="eg-wrapper">
                <div class="eg-container">
                    <div class="eg-card-1">
                        <div class="eg-icon">
                            <img src="https://thespanishgroup.org/wp-content/uploads/2020/08/Group-8.png" alt="Certified Translation for Official Purposes">
                        </div>
                        <div class="eg-pricing">
                            <p>Certified Translation for Official Purposes</p>
                            <div><span>&dollar;30</span>/Page</div>
                        </div>
                    </div>

                    <div class="eg-card-2">
                        <div class="eg-icon">
                            <img src="https://thespanishgroup.org/wp-content/uploads/2020/08/Group-9.png" alt="Certified Translation for Professional Purposes">
                        </div>
                        <div class="eg-pricing">
                            <p>Certified Translation for Professional Purposes</p>
                            <div><span>10¢</span>/Word</div>
                        </div>
                    </div>

                    <div class="eg-card-3">
                        <div class="eg-icon">
                           <img src="https://thespanishgroup.org/wp-content/uploads/2020/08/Group-7.png" alt="Academic Translation and Evaluation">
                        </div>
                        <div class="eg-pricing">
                            <p>Academic Translation and Evaluation</p>
                            <div><span>&dollar;49</span>/Page</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>`;

        /* Variation functions */
        function init() {
            document.querySelector("#header-img > section.template_banner.feature-neka").insertAdjacentHTML("afterend",egPricingHTML);

        }

        /* Initialize variation */
        waitForElement("#header-img > section.template_banner.feature-neka", init, 50, 15000);
    } catch (e) {
        if (debug) console.log(e, "error in Test" + variation_name);
    }
})();