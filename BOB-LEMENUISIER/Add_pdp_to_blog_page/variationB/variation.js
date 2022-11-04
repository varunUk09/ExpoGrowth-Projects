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

        egCustomHTML = `<div class="eg-products-container">
            <ul>
                <li class="item product product-item col-lg-3 col-md-6 col-sm-6 col-xs-12">
                    <div class="product-item-info" id="product-item-info_337" data-container="product-grid">
                        <div>
                            <div class="product-item-image">
                                <a href="https://www.bob-lemenuisier.fr/escalier-bois-metal-limon-droit-2740" class="product photo product-item-photo" tabindex="-1">
                                    <span class="product-image-container product-image-container-337" style="width: 315px;">
                                        <span class="product-image-wrapper" style="padding-bottom: 68.254%;">
                                            <img class="product-image-photo" src="https://www.bob-lemenuisier.fr/pub/media/catalog/product/cache/283fb84653c99f02e2c3d0e6ad77ae0f/e/s/escalier-droit-marches-ouvertes_1.png" width="315" height="215" alt="Escalier bois métal Limon droit 2740"></span>
                                    </span>
                                </a>
                                <div class="attr-madein">
                                    <object data="https://www.bob-lemenuisier.fr/pub/static/version1658240930/frontend/BobMenuisier/BobMenuisierTheme/fr_FR/img/France.svg" width="40" height="40" type="image/svg+xml">
                                        <img src="https://www.bob-lemenuisier.fr/pub/static/version1658240930/frontend/BobMenuisier/BobMenuisierTheme/fr_FR/img/France.png" alt="badge made in france">
                                    </object>
                                </div>
                                <div class="attr-promo">-20%</div>
                                <div class="attr-label tag bg-green bp-label">Bon plan</div>
                            </div>
                            <div class="product details product-item-details">
                                <strong class="product name product-item-name">
                                    <a class="product-item-link" href="https://www.bob-lemenuisier.fr/escalier-bois-metal-limon-droit-2740">
                                        Escalier bois métal Limon droit 2740 </a>
                                </strong>
                                <div class="attr-option-disponible">
                                    + 3 options disponibles </div>
                                <div class="attr-garantie">
                                    Garantie 5 ans </div>
                                <div class="attr-colors">
                                    <div class="dots" style="background: #A17F54;"></div>
                                </div>
                                <div class="product-item-inner">
                                </div>
                            </div>
                            <div class="clear"></div>
                        </div>
                        <div class="action-price">
                            <div class="attr-price">
                                <div class="price-from">à partir de :</div>
                                <div class="prices">
                                    <div class="promo">
                                        <span class="old">
                                            2&nbsp;202,00&nbsp;€ </span>
                                        <span class="new">
                                            1&nbsp;761,60&nbsp;€ </span>
                                    </div>
                                </div>
                            </div>
                            <div class="attr-button">
                                <a href="https://www.bob-lemenuisier.fr/escalier-bois-metal-limon-droit-2740">
                                    <div>Choisir vos options</div>
                                </a>
                            </div>
                            <div class="clear"></div>
                        </div>
                    </div>
                </li>
                <li class="item product product-item col-lg-3 col-md-6 col-sm-6 col-xs-12">
                    <div class="product-item-info" id="product-item-info_338" data-container="product-grid">
                        <div>
                            <div class="product-item-image">
                                <a href="https://www.bob-lemenuisier.fr/escalier-bois-metal-limon-quart-tournant-2740" class="product photo product-item-photo" tabindex="-1">
                                    <span class="product-image-container product-image-container-338" style="width: 315px;">
                                        <span class="product-image-wrapper" style="padding-bottom: 68.254%;">
                                            <img class="product-image-photo" src="https://www.bob-lemenuisier.fr/pub/media/catalog/product/cache/283fb84653c99f02e2c3d0e6ad77ae0f/e/s/escalier-quart-tournant-marches-ouvertes.png" width="315" height="215" alt="Escalier bois métal Limon quart tournant 2740"></span>
                                    </span>
                                </a>
                                <div class="attr-madein">
                                    <object data="https://www.bob-lemenuisier.fr/pub/static/version1658240930/frontend/BobMenuisier/BobMenuisierTheme/fr_FR/img/France.svg" width="40" height="40" type="image/svg+xml">
                                        <img src="https://www.bob-lemenuisier.fr/pub/static/version1658240930/frontend/BobMenuisier/BobMenuisierTheme/fr_FR/img/France.png" alt="badge made in france">
                                    </object>
                                </div>
                                <div class="attr-promo">-20%</div>
                                <div class="attr-label tag bg-orange mv-label">Meilleure vente</div>
                            </div>
                            <div class="product details product-item-details">
                                <strong class="product name product-item-name">
                                    <a class="product-item-link" href="https://www.bob-lemenuisier.fr/escalier-bois-metal-limon-quart-tournant-2740">
                                        Escalier bois métal Limon quart tournant 2740 </a>
                                </strong>
                                <div class="attr-option-disponible">
                                    + 3 options disponibles </div>
                                <div class="attr-garantie">
                                    Garantie 5 ans </div>
                                <div class="attr-colors">
                                    <div class="dots" style="background: #CBB093;"></div>
                                    <div class="dots" style="background: #A17F54;"></div>
                                </div>
                                <div class="product-item-inner">
                                </div>
                            </div>
                            <div class="clear"></div>
                        </div>
                        <div class="action-price">
                            <div class="attr-price">
                                <div class="price-from">à partir de :</div>
                                <div class="prices">
                                    <div class="promo">
                                        <span class="old">
                                            2&nbsp;504,00&nbsp;€ </span>
                                        <span class="new">
                                            2&nbsp;002,56&nbsp;€ </span>
                                    </div>
                                </div>
                            </div>
                            <div class="attr-button">
                                <a href="https://www.bob-lemenuisier.fr/escalier-bois-metal-limon-quart-tournant-2740">
                                    <div>Choisir vos options</div>
                                </a>
                            </div>
                            <div class="clear"></div>
                        </div>
                    </div>
                </li>
                <li class="item product product-item col-lg-3 col-md-6 col-sm-6 col-xs-12">
                    <div class="product-item-info" id="product-item-info_616" data-container="product-grid">
                        <div>
                            <div class="product-item-image">
                                <a href="https://www.bob-lemenuisier.fr/escalier-acier-en-colimacon-interieur" class="product photo product-item-photo" tabindex="-1">
                                    <span class="product-image-container product-image-container-616" style="width: 315px;">
                                        <span class="product-image-wrapper" style="padding-bottom: 68.254%;">
                                            <img class="product-image-photo" src="https://www.bob-lemenuisier.fr/pub/media/catalog/product/cache/283fb84653c99f02e2c3d0e6ad77ae0f/e/s/escalier-colimacon-product-list.png" width="315" height="215" alt="Escalier acier en colimaçon intérieur"></span>
                                    </span>
                                </a>
                                <div class="attr-madein">
                                    <object data="https://www.bob-lemenuisier.fr/pub/static/version1658240930/frontend/BobMenuisier/BobMenuisierTheme/fr_FR/img/France.svg" width="40" height="40" type="image/svg+xml">
                                        <img src="https://www.bob-lemenuisier.fr/pub/static/version1658240930/frontend/BobMenuisier/BobMenuisierTheme/fr_FR/img/France.png" alt="badge made in france">
                                    </object>
                                </div>
                                <div class="attr-promo">-20%</div>
                            </div>
                            <div class="product details product-item-details">
                                <strong class="product name product-item-name">
                                    <a class="product-item-link" href="https://www.bob-lemenuisier.fr/escalier-acier-en-colimacon-interieur">
                                        Escalier acier en colimaçon intérieur </a>
                                </strong>
                                <div class="attr-option-disponible">
                                    + 4 options disponibles </div>
                                <div class="attr-garantie">
                                    Garantie 5 ans </div>
                                <div class="attr-colors">
                                    <div class="dots" style="background: #293133;"></div>
                                </div>
                                <div class="product-item-inner">
                                </div>
                            </div>
                            <div class="clear"></div>
                        </div>
                        <div class="action-price">
                            <div class="attr-price">
                                <div class="price-from">à partir de :</div>
                                <div class="prices">
                                    <div class="promo">
                                        <span class="old">
                                            2&nbsp;000,00&nbsp;€ </span>
                                        <span class="new">
                                            1&nbsp;599,36&nbsp;€ </span>
                                    </div>
                                </div>
                            </div>
                            <div class="attr-button">
                                <a href="https://www.bob-lemenuisier.fr/escalier-acier-en-colimacon-interieur">
                                    <div>Choisir vos options</div>
                                </a>
                            </div>
                            <div class="clear"></div>
                        </div>
                    </div>
                </li>
                <li class="item product product-item col-lg-3 col-md-6 col-sm-6 col-xs-12">
                    <div class="product-item-info" id="product-item-info_339" data-container="product-grid">
                        <div>
                            <div class="product-item-image">
                                <a href="https://www.bob-lemenuisier.fr/escalier-bois-metal-limon-quart-tournant-avec-palier-2740" class="product photo product-item-photo" tabindex="-1">
                                    <span class="product-image-container product-image-container-339" style="width: 315px;">
                                        <span class="product-image-wrapper" style="padding-bottom: 68.254%;">
                                            <img class="product-image-photo" src="https://www.bob-lemenuisier.fr/pub/media/catalog/product/cache/283fb84653c99f02e2c3d0e6ad77ae0f/e/s/escalier-quart-tournant-palier-marches-pleines-2.png" width="315" height="215" alt="Escalier bois métal Limon quart tournant avec palier 2740"></span>
                                    </span>
                                </a>
                                <div class="attr-madein">
                                    <object data="https://www.bob-lemenuisier.fr/pub/static/version1658240930/frontend/BobMenuisier/BobMenuisierTheme/fr_FR/img/France.svg" width="40" height="40" type="image/svg+xml">
                                        <img src="https://www.bob-lemenuisier.fr/pub/static/version1658240930/frontend/BobMenuisier/BobMenuisierTheme/fr_FR/img/France.png" alt="badge made in france">
                                    </object>
                                </div>
                                <div class="attr-promo">-20%</div>
                            </div>
                            <div class="product details product-item-details">
                                <strong class="product name product-item-name">
                                    <a class="product-item-link" href="https://www.bob-lemenuisier.fr/escalier-bois-metal-limon-quart-tournant-avec-palier-2740">
                                        Escalier bois métal Limon quart tournant avec palier 2740 </a>
                                </strong>
                                <div class="attr-option-disponible">
                                    + 3 options disponibles </div>
                                <div class="attr-garantie">
                                    Garantie 5 ans </div>
                                <div class="attr-colors">
                                    <div class="dots" style="background: #CBB093;"></div>
                                    <div class="dots" style="background: #A17F54;"></div>
                                </div>
                                <div class="product-item-inner">
                                </div>
                            </div>
                            <div class="clear"></div>
                        </div>
                        <div class="action-price">
                            <div class="attr-price">
                                <div class="price-from">à partir de :</div>
                                <div class="prices">
                                    <div class="promo">
                                        <span class="old">
                                            4&nbsp;995,00&nbsp;€ </span>
                                        <span class="new">
                                            3&nbsp;995,52&nbsp;€ </span>
                                    </div>
                                </div>
                            </div>
                            <div class="attr-button">
                                <a href="https://www.bob-lemenuisier.fr/escalier-bois-metal-limon-quart-tournant-avec-palier-2740">
                                    <div>Choisir vos options</div>
                                </a>
                            </div>
                            <div class="clear"></div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>`

        /* Variation functions */
        function init() {
            // selecting both content div ( desktop and mobile) and adding custom html
            document.querySelectorAll("main  article .amblog-main-content .amblog-content").forEach(egTarget => {
                egTarget.insertAdjacentHTML("beforeend", egCustomHTML);
            })

        }


        /* Initialize variation */
        waitForElement("main  article .amblog-main-content", init, 50, 15000);
    } catch (e) {
        if (debug) console.log(e, "error in Test" + variation_name);
    }
})();