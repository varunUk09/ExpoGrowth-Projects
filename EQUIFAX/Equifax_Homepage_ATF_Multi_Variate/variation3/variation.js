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


            const egVideoBLock = document.querySelector(".video-block-wrapper");
            const egCarouselWrapper = document.querySelector("div.carousel-wrapper");


            // inserting a new div and moving video block and crousel into that div
            document.querySelector(".header-wrapper").insertAdjacentHTML("afterend",`
                <!-- This is eg-video-carousel container -->
                <div class="eg-video-carousel-container">
                    <div class="eg-video-carousel-wrapper">
                    </div>
                </div>
                <!-- This is eg-video-carousel wrapper end -->`);

            [egVideoBLock,egCarouselWrapper].forEach(ele=>{
                document.querySelector(".eg-video-carousel-wrapper").insertAdjacentElement("beforeend",ele);
            });

            // updating on video block container
            let egTitle = ``;
            let egInfoBlock = ``;

            if (window.innerWidth < 768){
                egTitle = `Why choose us`;
                egInfoBlock = `A Credit Reference Agency like Equifax can help<br>people understand and improve their credit score.<br>Find out how our enhanced credit report works and<br>how you can use it to manage your financial records.`;
            } else {
                egTitle = `Why use Equifax`;
                egInfoBlock = egUsps;
            }

            document.querySelector(".eg-video-carousel-wrapper .video-block-container h2.title").innerHTML = egTitle;
            document.querySelector(".eg-video-carousel-wrapper .video-block-container p.info-block-p").innerHTML = egInfoBlock;


            document.querySelector(".eg-video-carousel-wrapper .video-block-container a.cta-x").textContent = "TRY FOR FREE*";



        }


        /* Initialize variation */
        waitForElement(".video-block-wrapper", init, 50, 15000);
    } catch (e) {
        if (debug) console.log(e, "error in Test" + variation_name);
    }
})();