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

        const customHTML = `
        <section class="eg-benifit-box__section">
            <div class="eg-benifit-box__container">
                <h2 class="eg-title">Start your free trial now</h2>
                <p class="eg-benifits">
                   No commitment, no ads, no hassle. Watch on any device. <br>Cancel any time with a monthly subscription, <br>or save with an annual plan.
                </p>
                <a href="https://www.britbox.com/us/account/signup" class="eg-benifit-box__cta">Try free for 7 days</a>
                <small class="eg-offer">Free 7-day trial, then just $7.99/month or $79.99/year</small>
                <img class="eg-benifit-box__logo" src="https://v.fastcdn.co/u/5149ab86/59643481-0-BritBox-Inline-Posit.png" alt="logo">
            </div>
        </section>`;

        /* Variation functions */
        function init() {
            document.querySelector("#page-block-w1qaqlowgu").insertAdjacentHTML("beforebegin", customHTML);
        }


        /* Initialize variation */
        waitForElement("main", init, 50, 15000);
    } catch (e) {
        if (debug) console.log(e, "error in Test" + variation_name);
    }
})();