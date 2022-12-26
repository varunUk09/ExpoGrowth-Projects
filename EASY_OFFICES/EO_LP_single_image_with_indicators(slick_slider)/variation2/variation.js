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

        live(['html body .slick-dots', '.slick-arrow'], 'click', (e) => {
            e.preventDefault();
        });

        function waitForSlick(trigger) {
            var interval = setInterval(function() {
                if (window.jQuery.fn.slick != undefined) {
                    clearInterval(interval);
                    trigger();
                }
            }, 50);
            setTimeout(function() {
                clearInterval(interval);
            }, 15000)
        }

        function waitForjQuery(trigger) {
            var interval = setInterval(function() {
                if (window.jQuery != undefined) {
                    clearInterval(interval);
                    trigger();
                } else {
                    addJQuery();
                }
            }, 50);
            setTimeout(function() {
                clearInterval(interval);
            }, 15000)
        }

        function addJQuery() {
            var jQueryScript = document.createElement('script');
            jQueryScript.src = 'https://code.jquery.com/jquery-3.6.3.min.js';
            document.getElementsByTagName('head')[0].appendChild(jQueryScript);
        }

        function addScript() {
            var cssScript = '' +
                "<link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.css'/>";
            let themeCssScript = `<link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick-theme.css'/>`;
            document.querySelector('head').insertAdjacentHTML('beforeend', cssScript);
            document.querySelector('head').insertAdjacentHTML('beforeend', themeCssScript);

            var swiperScript = document.createElement('script');
            swiperScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js';
            document.getElementsByTagName('head')[0].appendChild(swiperScript);
        }

        /* Variation Init */
        function init() {
            /* start your code here */

            document.addEventListener('DOMContentLoaded', (event) => {
                if (window.innerWidth < 501) {

                    waitForjQuery(function() {
                        addScript();

                        waitForSlick(function() {
                            var $ = window.jQuery;
                            $('html body #toSort .offices-list-item-images').slick({
                                dots: true,
                                arrows: true,
                                infinite: false,
                                speed: 300,
                                slidesToShow: 1,
                            });

                            // moving h5 out of the slick
                            document.querySelectorAll("html body #toSort .offices-list-item-images").forEach(imageBox => {
                                let egPrice = imageBox.querySelector(".office-list-item-price");
                                egIndex = imageBox.querySelector(".slick-track").children.length - 1;
                                imageBox.querySelector(".slick-dots").insertAdjacentElement("afterend", egPrice);
                                $(imageBox).slick('slickRemove', egIndex);
                            });


                        });

                    });
                }
            });
        }

        /* Initialize variation */
        waitForElement('html body #toSort .offices-list-item-images', init, 50, 15000);
    } catch (e) {
        if (debug) console.log(e, "error in Test" + variation_name);
    }
})();