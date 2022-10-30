(function() {
    try {
        /* main variables */
        var debug = 0;
        var variation_name = "";

        /* all Pure helper functions */

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
        https: //play.vidyard.com/bHtAPUZAMLdPkouzRLmADC

            function init() {

                document.querySelector(".s-trial .b-steps-free-trial").insertAdjacentHTML("afterend", '<div class="eg-video-container"><div class="eg-thumbnail"></div><div class="eg-video"><iframe allow="autoplay; fullscreen; picture-in-picture; camera; microphone; display-capture" allowfullscreen="" allowtransparency="true" referrerpolicy="no-referrer-when-downgrade" class="vidyard-iframe-Aydz1phXGXAqUGqg4pWWMw" frameborder="0"scrolling="no" src="https://play.vidyard.com/bHtAPUZAMLdPkouzRLmADC?disable_popouts=1&amp;v=4.3.10&amp;type=inline&amp;autoplay=0" style="opacity: 1; background-color: transparent;"></iframe></div></div>');


                document.querySelector('.eg-thumbnail').addEventListener('click', function() {

                    this.remove();
                    document.querySelector('.eg-video-container .eg-video iframe').src = 'https://play.vidyard.com/bHtAPUZAMLdPkouzRLmADC?disable_popouts=1&v=4.3.10&type=inline&autoplay=1';
                });


            }
            /* Initialize variation */
        waitForElement(".s-trial .b-steps-free-trial", init, 100, 35000);
    } catch (e) {
        if (debug) console.log(e, "error in Test" + variation_name);
    }
})();