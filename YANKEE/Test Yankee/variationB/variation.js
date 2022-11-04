(function() {
    var debug = false;
    try {
        function waitForElement(selector, callback) {
            var maxCheck = 200;
            var interval = window.setInterval(function() {
                if (document.querySelectorAll(selector).length > 0) {
                    callback();
                    window.clearInterval(interval);
                } else if (--maxCheck < 0) {
                    window.clearInterval(interval);
                }
            }, 50);
        }

        function addProductsToPDP(products) {
            for (var i = 0; i < products.length; i++) {
                if (products[i].getAttribute('data-tile-position') < 10) {
                    document.querySelectorAll('.yankee-pdp-wrapper').forEach(function(item, index) {
                        console.log(item);
                        item.insertAdjacentElement('beforeend', products[i].cloneNode(true));
                    });
                }
            }
        }

        function init() {
            document.querySelectorAll('.pdp-tile > .attributes .pdp-selector').forEach(function(item, index) {
                item.insertAdjacentHTML('beforeend', '<div class="yankee-pdp-wrapper"></div>');
            });

            // changing product tile title
            document.querySelectorAll("#productTileTitle").forEach(title => {
                title.textContent = "Style (1 of 9)";
            })

            var xhr = new XMLHttpRequest();
            var url = document.querySelector('.breadcrumb > .breadcrumb-item:nth-child(3) a').getAttribute('href');
            xhr.open('GET', url, true);
            xhr.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    var customEl = document.createElement('div');
                    customEl.innerHTML = this.responseText;
                    var products = customEl.querySelectorAll('.product-grid .product-tile-wrap');
                    addProductsToPDP(products);
                }
            };
            xhr.send();
        }

        waitForElement('.breadcrumb > .breadcrumb-item:nth-child(3) a', init);
    } catch (e) {
        if (debug) console.log(e, 'error in ' + variation_name);
    }
})();