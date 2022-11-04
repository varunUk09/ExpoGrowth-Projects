(function() {
    try {
        /* main variables */
        var debug = 0;
        var variation_name = "Subscribe Tickbox Below CTA";

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

        const egCustomHTML = `
        <div class="field eg-auth-container">
           <button>Create Account</button>
           <p>Already have an account? <a class="eg-login-text" href="https://www.poppyshop.org.uk/account/login">Login here</a></p>
        </div>
        `;

        /* Variation functions */
        function init() {
            // updating para below page heading
            document.querySelector("#MainContent>section>div.container>div.columns>div.column>div.account-subscribe p").innerHTML = `For the latest news and information from the Poppy Shop, please create an account by providing us with a few details and <strong>sign up to receive 15% off your next purchase.</strong>`;

            // adding return to store
            document.querySelector("#MainContent > section .container").insertAdjacentHTML("afterbegin",`<div class="eg-return-to-store"><a href="https://www.poppyshop.org.uk/">&lt Return Store</a></div>`);

            // spliting first and last name
            const egTitleDiv = document.querySelector("form.js-registration-form > div:has(label[for='Title'])");
            egTitleDiv.insertAdjacentHTML("afterend",`
                <div class="field eg-user-name-container"></div>`);

            // adding user's first and last name to the eg-user-name-container
            const egUserFirstName = document.querySelector("form.js-registration-form > div:has(input#FirstName)");
            const egUserLastName = document.querySelector("form.js-registration-form > div:has(input#LastName)");

            [egUserFirstName,egUserLastName].forEach(Name=>{
                document.querySelector(".eg-user-name-container").insertAdjacentElement("beforeend",Name);
            });


            // moving subscribe content box outside the form element
            document.querySelector("form.js-registration-form").insertAdjacentElement("afterend",document.querySelector("form.js-registration-form > div.field.account-subscribe.content"));

            // adding subscribe content
            document.querySelector("form.js-registration-form + div.account-subscribe.content").insertAdjacentHTML("afterbegin",`
                <p>We will only use this information to talk to you about the Poppy Shop and the Royal British Legion, we will never share your email address with third parties, or use your data for any other purpose.</p>`)


            const egNewsLetterEle = document.querySelector("form.js-registration-form > div:has(#acceptsMarketing)");
            
            // updating text 
            egNewsLetterEle.innerHTML = egNewsLetterEle.innerHTML.split("?").shift();

            egNewsLetterEle.insertAdjacentHTML("beforebegin",egCustomHTML);

            // clicking to the default buttons
            
            // clicking to default signup button
            document.querySelector(".eg-auth-container > button").addEventListener("click",function(){
                document.querySelector("form.js-registration-form > div:has(#acceptsMarketing) + div input[type='submit']").click();
            });                   
        }


        /* Initialize variation */
        waitForElement("form.js-registration-form", init, 50, 15000);
    } catch (e) {
        if (debug) console.log(e, "error in Test" + variation_name);
    }
})();