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

            const egLocation = document.querySelector("#centre > main > section.breadcrumbs > nav > div > a:nth-last-child(2)");

            const egPageHead = document.querySelector("#centre > main > section.container.container-medium.js-shorlist-help > div");
            const egBackBtnHtml = `<a href="${egLocation.href}" class="eg_back-to-listing-btn">Back To Listing</a>`;

            // function to append btn to the dom
            function egAppendBackBtn() {
                // matching media for 500
                if (window.innerWidth <= 500) {
                    const egOfficeInfo = document.querySelector("#centre > main > section.office-info");
                    egOfficeInfo.insertAdjacentHTML("beforebegin", egBackBtnHtml);
                } else {
                    //if media is above 500
                    // appending btn to the dom(head section)
                    egPageHead.insertAdjacentHTML("beforeend", egBackBtnHtml);
                }
            }

            egAppendBackBtn();

        }


        /* Initialize variation */
        waitForElement("#centre > main > section.container.container-medium.js-shorlist-help", init, 50, 15000);
    } catch (e) {
        if (debug) console.log(e, "error in Test" + variation_name);
    }
})();