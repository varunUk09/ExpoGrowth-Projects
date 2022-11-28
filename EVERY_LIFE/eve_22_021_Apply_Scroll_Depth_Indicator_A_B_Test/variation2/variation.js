(function() {
    try {
        /* main variables */
        var debug = 0;
        var variation_name = "";
        var $;
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
            /****Helper Functions****/
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
                                nodes = (node.parentNode || node.document).querySelectorAll(selector),
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
                    while (el && el.matches && el !== context && !(found = el.matches(selector))) el = el.parentElement;
                    if (found) callback.call(el, e);
                });
            }
            live(selector, event, callback, context);
        }

        let egTopHeight = 0;

        const egJumpLinks = `
                <div class = "eg-jump-links__container">
                    <ul class = "eg-jump-links__lists">
                        <!--link one-->
                        <li class="eg-jump-links_list">
                            <a href="#" class="link-1">Personal Information</a>
                        </li>

                        <!--link two-->
                        <li class="eg-jump-links_list">
                            <a href="#" class="link-2">Protection</a>
                        </li>

                        <!--link three-->
                        <li class="eg-jump-links_list">
                            <a href="#" class="link-3">Growth</a>
                        </li>

                        <!--link four-->
                        <li class="eg-jump-links_list">
                            <a href="#" class="link-4">Results</a>
                        </li>
                    </ul>
                </div>
`;


        /* Variation Init */
        function init() {
            /* start your code here */
            document.querySelector("#__next  section#estimatorRef").insertAdjacentHTML("afterbegin", egJumpLinks);

            egTopHeight = document.querySelector("#__next > header").offsetHeight + document.querySelector(".eg-jump-links__container").offsetHeight;

            // links click
            live('.eg-jump-links_list > a', 'click', (e) => {
                e.preventDefault();
                // document.querySelectorAll(".eg-jump-links__lists a.active").forEach(ele => {
                //     ele.classList.remove("active");
                // });
                // e.target.classList.add("active");

                addActive(e.target);

                if (e.target.classList.contains("link-1")) {
                    let pos = getPos("#estimatorRef form > div > section:nth-child(1) > div >div:nth-child(1) > div:nth-child(1)");
                    moveToSection(pos);
                } else if (e.target.classList.contains("link-2")) {
                    let pos = getPos("#estimatorRef form > div > section:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div");
                    moveToSection(pos);
                } else if (e.target.classList.contains("link-3")) {
                    let pos = getPos("#estimatorRef form > div > section:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1)");
                    moveToSection(pos);
                } else if (e.target.classList.contains("link-4")) {
                    let pos = getPos("#estimatorRef form > div > section:nth-child(4) > div > div:nth-child(2) > section > div");
                    moveToSection(pos);
                }
            });

            // onscrolling add active class to related section link
            window.addEventListener("scroll",(e)=>{
                
            });
        }

        function addActive(btn) {
            document.querySelectorAll(".eg-jump-links__lists a.active").forEach(ele => {
                ele.classList.remove("active");
            });

            btn.classList.add("active");

        }

        function moveToSection(pos) {
            window.scrollTo({
                top: pos,
                behavior: "smooth"
            });
        }

        // gettin position of the small title of the section
        function getPos(selector) {
            pos = (document.querySelector(selector).getBoundingClientRect().top - egTopHeight - 30) + document.documentElement.scrollTop;
            return pos;
        }



        /* Initialize variation */
        waitForElement('#__next  section#estimatorRef', init, 50, 15000);
    } catch (e) {
        if (debug) console.log(e, "error in Test" + variation_name);
    }
})();