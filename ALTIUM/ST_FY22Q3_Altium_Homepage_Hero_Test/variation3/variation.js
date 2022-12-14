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

            // changing image logo
            document.querySelector("section.black-friday .black-friday__logo > img").src = "https://www.altium.com/sites/default/files/media_icon/2021-07/se_logo.svg";

            document.querySelector("section.black-friday .black-friday__logo").insertAdjacentHTML("beforeend", `
                <span>ALTIUM<br><strong>DESIGNER</strong></span>`)


            // changing headline
            document.querySelector("section.black-friday .black-friday__text > h2").innerHTML = `Transform The Way You Design Electronics With The<br>World's Most Trusted PCB Design Software`;

            // trusted by xxxx companies
            document.querySelector("section.black-friday .black-friday__text > p").innerHTML = `Trusted By More Than X,XXX Companies For 35 Years`;

            // updating button text 
            document.querySelector("section.black-friday .black-friday__text .hero__btns a:nth-child(2)").textContent = "Get a Free Trial";

            // adding logos
            // all logos src links serial wise
            const egLogosLink = ["https://www.altium.com/sites/default/files/media_icon/2022-01/ArduinoLogo_%C2%AE.svg",
                "https://www.altium.com/sites/default/files/media_icon/2021-07/bae_color.svg",
                "https://www.altium.com/sites/default/files/media_icon/2021-07/leicamicrosystems_color.svg",
                "https://www.altium.com/sites/default/files/media_icon/2021-07/microsoft_color.svg",
                "https://www.altium.com/sites/default/files/media_icon/2021-07/lyft_color.svg",
                "https://www.altium.com/sites/default/files/media_icon/2021-07/amazon_color.svg",
                "https://www.altium.com/sites/default/files/media_icon/2021-07/facebook_color.svg",
                "https://www.altium.com/sites/default/files/media_icon/2021-07/dell_color.svg"
            ]

            let egTrustLogosDiv = '<div class="eg-trust-logos">';

            // looping to add images to their parent div
            for (link of egLogosLink) {
                egTrustLogosDiv += '<div><img src="' + link + '" class="logo"></div>';
            }

            egTrustLogosDiv += '</div>';

            // appending logo div above the ctas
            document.querySelector("section.black-friday div.black-friday__text .hero__btns").insertAdjacentHTML("beforebegin", egTrustLogosDiv);

            // adding a box below hero
            document.querySelector("section.black-friday").insertAdjacentHTML("afterend",`
                <div class="eg-message">
                    <p>Get Your First Month Of Altium Designer FREE!</p>
                    <a href="#">See Offer</a>
                </div>`);

        }


        /* Initialize variation */
        waitForElement("main section.black-friday", init, 50, 15000);
    } catch (e) {
        if (debug) console.log(e, "error in Test" + variation_name);
    }
})();