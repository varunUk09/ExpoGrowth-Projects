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

        let egUsps = `
        <div class="eg-usp">
            <ul>
                <li>
                    <span class="eg-check-icon">
                        <svg width="16px" height="16px" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <rect width="16" height="16" id="icon-bound" fill="none" />
                            <path d="M0,9.014L1.414,7.6L5.004,11.189L14.593,1.6L16.007,3.014L5.003,14.017L0,9.014Z" />
                        </svg>
                    </span>
                    <p>
                        Your Equifax Report and Score will be updated daily upon login to myEquifax
                    </p>
                </li>
                
                <li>
                    <span class="eg-check-icon">
                        <svg width="16px" height="16px" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <rect width="16" height="16" id="icon-bound" fill="none" />
                            <path d="M0,9.014L1.414,7.6L5.004,11.189L14.593,1.6L16.007,3.014L5.003,14.017L0,9.014Z" />
                        </svg>
                    </span>
                    <p>
                        Traffic light system identifying the parts of your report that need attention
                    </p>
                </li>
                
                <li>
                    <span class="eg-check-icon">
                        <svg width="16px" height="16px" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <rect width="16" height="16" id="icon-bound" fill="none" />
                            <path d="M0,9.014L1.414,7.6L5.004,11.189L14.593,1.6L16.007,3.014L5.003,14.017L0,9.014Z" />
                        </svg>
                    </span>
                    <p>
                        Actionable hints and tips within your report
                    </p>
                </li>
                
                <li>
                    <span class="eg-check-icon">
                        <svg width="16px" height="16px" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <rect width="16" height="16" id="icon-bound" fill="none" />
                            <path d="M0,9.014L1.414,7.6L5.004,11.189L14.593,1.6L16.007,3.014L5.003,14.017L0,9.014Z" />
                        </svg>
                    </span>
                    <p>
                        Identity protection tools monitoring 24 hours a day, 7 days a week
                    </p>
                </li>
            </ul>
        </div>
        `;

        /* Variation functions */
        function init() {
            document.querySelector(".header-wrapper .heading-content").insertAdjacentHTML("beforeend",egUsps);            

        }


        /* Initialize variation */
        waitForElement("div.header-wrapper", init, 50, 15000);
    } catch (e) {
        if (debug) console.log(e, "error in Test" + variation_name);
    }
})();