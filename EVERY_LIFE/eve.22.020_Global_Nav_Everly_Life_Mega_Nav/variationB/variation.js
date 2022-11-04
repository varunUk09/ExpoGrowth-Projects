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

        function live(selector, event, callback, context) {
            // helper for enabling IE 8 event bindings
            function addEvent(el, type, handler) {
                if (el.attachEvent) el.attachEvent("on" + type, handler);
                else el.addEventListener(type, handler);
            }
            // matches polyfill
            this.Element &&
                (function(ElementPrototype) {
                    ElementPrototype.matches =
                        ElementPrototype.matches ||
                        ElementPrototype.matchesSelector ||
                        ElementPrototype.webkitMatchesSelector ||
                        ElementPrototype.msMatchesSelector ||
                        function(selector) {
                            var node = this,
                                nodes = (node.parentNode || node.document).querySelectorAll(
                                    selector
                                ),
                                i = -1;
                            while (nodes[++i] && nodes[i] != node);
                            return !!nodes[i];
                        };
                })(Element.prototype);
            // live binding helper using matchesSelector
            function live(selector, event, callback, context) {
                addEvent(context || document, event, function(e) {
                    var found,
                        el = e.target || e.srcElement;
                    while (
                        el &&
                        el.matches &&
                        el !== context &&
                        !(found = el.matches(selector))
                    )
                        el = el.parentElement;
                    if (found) callback.call(el, e);
                });
            }
            live(selector, event, callback, context);
        }
        /* Variation functions */

        var htmlString = '' +
            '  <div class="eg_container">' +
            '      <div class="eg_first">' +
            '          <a class="" href="/overview">' +
            '              <svg class="eg_img" width="25" height="25" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">' +
            '  <path fill-rule="evenodd" clip-rule="evenodd" d="M12.7501 0.666718H14.4168C14.4168 1.44027 14.7241 2.18213 15.271 2.72911C15.818 3.27609 16.5599 3.58338 17.3334 3.58338V5.25005C16.5599 5.25005 15.818 5.55734 15.271 6.10432C14.7241 6.6513 14.4168 7.39317 14.4168 8.16672H12.7501C12.7501 7.7837 12.6747 7.40442 12.5281 7.05056C12.3815 6.69669 12.1667 6.37516 11.8958 6.10432C11.625 5.83349 11.3035 5.61865 10.9496 5.47207C10.5957 5.32549 10.2165 5.25005 9.83344 5.25005V3.58338C10.2165 3.58338 10.5957 3.50794 10.9496 3.36137C11.3035 3.21479 11.625 2.99995 11.8958 2.72911C12.1667 2.45827 12.3815 2.13674 12.5281 1.78288C12.6747 1.42901 12.7501 1.04974 12.7501 0.666718ZM12.4668 4.41672C12.8989 4.72378 13.2764 5.10126 13.5834 5.53338C13.8905 5.10126 14.268 4.72378 14.7001 4.41672C14.268 4.10965 13.8905 3.73218 13.5834 3.30005C13.2764 3.73218 12.8989 4.10965 12.4668 4.41672ZM6.5002 4.00005H8.16687C8.16687 5.54715 8.78145 7.03088 9.87541 8.12484C10.9694 9.2188 12.4531 9.83338 14.0002 9.83338V11.5001C12.4531 11.5001 10.9694 12.1146 9.87541 13.2086C8.78145 14.3026 8.16687 15.7863 8.16687 17.3334H6.5002C6.5002 15.7863 5.88562 14.3026 4.79166 13.2086C3.6977 12.1146 2.21397 11.5001 0.66687 11.5001V9.83338C2.21397 9.83338 3.6977 9.2188 4.79166 8.12484C5.88562 7.03088 6.5002 5.54715 6.5002 4.00005ZM4.1002 10.6667C5.48564 11.3853 6.615 12.5146 7.33354 13.9001C8.05207 12.5146 9.18143 11.3853 10.5669 10.6667C9.18143 9.94818 8.05207 8.81882 7.33354 7.43338C6.615 8.81882 5.48564 9.94818 4.1002 10.6667Z" fill="#1536A2"/>' +
            '  </svg> Overview' +
            '  ' +
            '          </a>' +
            '          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>' +
            '      </div>' +
            '  ' +
            '      <div class="eg_inner">' +
            '          <div class="eg_first">' +
            '              <a class="" href="/protection">' +
            '                  <svg class="eg_img" width="25" height="25" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">' +
            '  <path d="M9.0002 18.375L8.73354 18.2917C8.40854 18.1834 0.66687 15.4667 0.66687 4.16669V3.56669L9.0002 0.833359L17.3335 3.56669V4.16669C17.3335 15.4667 9.59187 18.1834 9.26687 18.3334L9.0002 18.375ZM2.33354 4.76669C2.5752 13.3334 7.74187 16.0667 9.0002 16.6084C10.2585 16.0667 15.4252 13.3417 15.6669 4.76669L9.0002 2.54169L2.33354 4.76669Z" fill="#1536A2"/>' +
            '  <path d="M11.5415 10.3917H11.5999V12.5H6.26654V12.4334C6.602 11.7808 6.75189 11.0486 6.69987 10.3167V7.18336C6.75189 6.45144 6.602 5.71929 6.26654 5.0667V5.00003H11.2165L11.2915 6.93336H11.2332C10.8332 6.10003 10.2332 5.30836 9.28321 5.30836C9.1608 5.30491 9.03897 5.32648 8.92518 5.37174C8.8114 5.41701 8.70804 5.48502 8.62145 5.57161C8.53486 5.6582 8.46685 5.76155 8.42159 5.87534C8.37632 5.98913 8.35476 6.11095 8.35821 6.23336V12.175C9.59939 11.9832 10.7297 11.35 11.5415 10.3917ZM11.7249 7.68336L11.5499 7.80003C11.4662 7.84678 11.3703 7.86711 11.2749 7.85836C11.1861 7.86598 11.0969 7.86598 11.0082 7.85836C10.8897 7.8355 10.7727 7.80488 10.6582 7.7667C10.5249 7.7667 10.3749 7.65836 10.1999 7.58336L9.61654 7.2917C9.41654 7.45003 9.20821 7.60836 9.00821 7.78336L8.39154 8.30003L8.85821 8.5667C8.99987 8.63336 9.12487 8.6917 9.24154 8.73336C9.34794 8.78077 9.45995 8.81437 9.57487 8.83336L9.86654 8.88336C9.96842 8.90254 10.073 8.90254 10.1749 8.88336C10.3146 8.82695 10.4486 8.75718 10.5749 8.67503C10.7332 8.5667 10.9249 8.43336 11.1499 8.25003L11.7332 7.77503L11.7249 7.68336Z" fill="#1536A2"/>' +
            '  </svg> Protection <svg class="eg_img_plus " width="20" height="20" viewBox="0 0 10 9" fill="none" xmlns="http://www.w3.org/2000/svg">' +
            '       <path d="M9.18881 5.424V3.568H5.90881V0.304H4.06881V3.568H0.804813V5.424H4.06881V8.688H5.90881V5.424H9.18881Z" fill="#484545"/>' +
            '       </svg></a>' +
            '              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>' +
            '          </div>' +
            '  ' +
            '          <div class="eg_first">' +
            '              <a class="" href="/growth">' +
            '                  <svg class="eg_img" width="20" height="20" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">' +
            '  <path d="M3.34167 10.1667L6.75 6.75834L8.24167 8.25834C8.31914 8.33644 8.4113 8.39844 8.51285 8.44075C8.6144 8.48306 8.72332 8.50484 8.83333 8.50484C8.94334 8.50484 9.05226 8.48306 9.15381 8.44075C9.25536 8.39844 9.34753 8.33644 9.425 8.25834L13.5917 4.09167L12.4083 2.90834L8.83333 6.49167L7.34167 4.99167C7.2642 4.91356 7.17203 4.85157 7.07048 4.80926C6.96893 4.76695 6.86001 4.74517 6.75 4.74517C6.63999 4.74517 6.53107 4.76695 6.42952 4.80926C6.32797 4.85157 6.2358 4.91356 6.15833 4.99167L2.16667 8.99167V0.166672H0.5V11C0.5 11.221 0.587797 11.433 0.744078 11.5893C0.900358 11.7455 1.11232 11.8333 1.33333 11.8333H15.5V10.1667H3.34167Z" fill="#1536A2"/>' +
            '  </svg> Growth' +
            '  ' +
            '              </a>' +
            '              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>' +
            '          </div>' +
            '      </div>' +
            '  ' +
            '  </div>';


        function init() {
            live("#__next  nav div.bohicy > div:nth-child(1) > button", 'click', function() {
                setTimeout(function() {
                    addItem();
                }, 50);

            });
        }

        function addItem() {
            console.log('hello')
            document.querySelector("#__next > header  nav  div:nth-child(1) > ul").innerHTML = htmlString;

        }
        /* Initialize variation */
        waitForElement("#__next  nav div.bohicy > div:nth-child(1) > ul", init, 50, 15000);

    } catch (e) {
        if (debug) console.log(e, "error in Test" + variation_name);
    }
})();