(function() {
    try {
        var debug = 0;
        var variation_name = "";

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

        // setting according and stuff
        function setAccordian(egPara) {
            const egBtnsHTML = `
                  <input type="radio" name="eg-accordian">
                  <label class="eg-btn-icons">
                      <!--- plus icon -->
                      <svg version="1.1" class="eg-plus-icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                      viewBox="0 0 52 52" style="enable-background:new 0 0 52 52;" xml:space="preserve">
                            <path d="M26,0C11.664,0,0,11.663,0,26s11.664,26,26,26s26-11.663,26-26S40.336,0,26,0z M26,50C12.767,50,2,39.233,2,26
                            S12.767,2,26,2s24,10.767,24,24S39.233,50,26,50z"/>
                            <path d="M38.5,25H27V14c0-0.553-0.448-1-1-1s-1,0.447-1,1v11H13.5c-0.552,0-1,0.447-1,1s0.448,1,1,1H25v12c0,0.553,0.448,1,1,1
                            s1-0.447,1-1V27h11.5c0.552,0,1-0.447,1-1S39.052,25,38.5,25z"/>
                      </svg>

                      <!--- minus icon -->
                      <svg version="1.1" class="eg-minus-icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                      viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
                            <path d="M256,0C114.844,0,0,114.844,0,256c0,141.156,114.844,256,256,256s256-114.844,256-256C512,114.844,397.156,0,256,0z
                            M256,490.667C126.604,490.667,21.333,385.397,21.333,256C21.333,126.606,126.604,21.333,256,21.333
                            c129.396,0,234.667,105.272,234.667,234.667C490.667,385.397,385.396,490.667,256,490.667z"/>
                            <rect x="94.896" y="246.053" width="309.333" height="21.333"/>
                      </svg>
                  </label>
                  `;

            // inserting this html just before the para
            egPara.insertAdjacentHTML("beforebegin", egBtnsHTML);
            egPara.insertAdjacentHTML("beforeend", `<a class="eg-learnmore" href="${egPara.parentElement.lastElementChild.href}">Learn more about ${egPara.parentElement.firstElementChild.textContent} <svg width="24px" height="24px" viewBox="0 0 24 24" id="_24x24_On_Light_Next" data-name="24x24/On Light/Next" xmlns="http://www.w3.org/2000/svg">
  <rect id="view-box" width="24" height="24" opacity="0"></rect>
  <path id="Shape" d="M10.22,9.28a.75.75,0,0,1,0-1.06l2.72-2.72H.75A.75.75,0,0,1,.75,4H12.938L10.22,1.281A.75.75,0,1,1,11.281.22l4,4a.749.749,0,0,1,0,1.06l-4,4a.75.75,0,0,1-1.061,0Z" transform="translate(4.25 7.25)"></path>
</svg></a>`)
        }

        function init() {

            setTimeout((e) => {
                // getting the hidden para and setting accordian

                // will return all the li's
                const items = document.querySelectorAll("#content > div > section.layout--full-width.bg--white.flush-top > div > div > div.carousel__tabs.rhythm--extra-large > ul > li.carousel__tab");
                for (item of items) {
                    const egPara = item.children[0].getElementsByTagName('p')[0];
                    setAccordian(egPara);
                }

                // getting all label elements which contains icon(plus & minus)
                const egIconLabels = document.querySelectorAll(".eg-btn-icons");

                egIconLabels.forEach((label) => {
                    label.addEventListener('click', function() {

                        if (this.previousElementSibling.checked == false) {
                            this.nextElementSibling.children[0].focus();
                            this.previousElementSibling.checked = true;
                        } else if (this.previousElementSibling.checked == true) {
                            this.previousElementSibling.checked = false;
                        }
                    });
                });


            }, 1000);


        }

        waitForElement("body", init, 100, 35000);
    } catch (e) {
        if (debug) console.log(e, "error in Test" + variation_name);
    }
})();