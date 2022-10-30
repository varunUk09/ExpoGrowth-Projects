(function () {
    try {
        /* main variables */
        var debug = 0;
        var variation_name = "";
        /* all Pure helper functions */
        function waitForElement(selector, trigger, delayInterval, delayTimeout) {
            var interval = setInterval(function () {
                if (
                    document &&
                    document.querySelector(selector) &&
                    document.querySelectorAll(selector).length > 0
                ) {
                    clearInterval(interval);
                    trigger();
                }
            }, delayInterval);
            setTimeout(function () {
                clearInterval(interval);
            }, delayTimeout);
        }
        function live(event, selector, callback, context) {
            /****Helper Functions****/
            // helper for enabling IE 8 event bindings
            function addEvent(el, type, handler) {
                if (el.attachEvent) el.attachEvent('on' + type, handler);
                else el.addEventListener(type, handler);
            }
            // matches polyfill
            this && this.Element &&
                (function (ElementPrototype) {
                    ElementPrototype.matches =
                        ElementPrototype.matches ||
                        ElementPrototype.matchesSelector ||
                        ElementPrototype.webkitMatchesSelector ||
                        ElementPrototype.msMatchesSelector ||
                        function (selector) {
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
                addEvent(context || document, event, function (e) {
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

        var egNewSection =''+ 
'  <div class="eg-description">'+ 
'      <div class="container-bob">'+ 
'          <div class="row">'+ 
'              <div class="col-12">'+ 
'                  <div style="text-align: left;">Concevez votre <strong>volet roulant électrique sur mesure</strong> de la gamme Profalux Visio via notre configurateur simple, rapide mais surtout à un tarif incomparable.</div>'+ 
'                  <div style="text-align: left;">Le <strong>volet roulant rénovation</strong>  est le <strong>volet'+ 
'                          roulant'+ 
'                          électrique</strong> le plus connu du grand public. De la gamme Visio, ce volet roulant vous offre un confort exceptionnel, tout en mettant l\'accent sur un design raffiné et discret.</div>'+ 
'                  <div style="text-align: left;">La première option à choisir est le type de pose du volet roulant, selon votre habitat. Vous pouvez opter pour un <strong>volet roulant en applique</strong>, ou un <strong>volet'+ 
'                          roulant sous'+ 
'                          linteau</strong>…</div>'+ 
'                  <div style="text-align: left;">Vous pouvez choisir le type de lames de votre volet roulant : choisissez un'+ 
'                      <strong>volet roulant pvc</strong>, ou un <strong>volet roulant aluminium</strong>'+ 
'                  </div>'+ 
'                  <div style="text-align: left;">Choisissez également votre coloris de volet roulant, en choisissant un volet roulant blanc, un <strong>volet roulant gris anthracite</strong>, ou un <strong>volet roulant'+ 
'                          marron</strong></div>'+ 
'                  <div style="text-align: left;">En choisissant librement vos <strong>dimensions de volet'+ 
'                          roulant</strong>, vous pouvez aussi bien opter pour un <strong>volet roulant grande largeur</strong> ou un <strong>petit'+ 
'                          volet'+ 
'                          roulant</strong>.</div>'+ 
'                  <div style="text-align: left;">Le <strong>volet roulant Visio</strong> est le <strong>volet roulant sur'+ 
'                          mesure</strong> qui offre une <strong>dimension coffre volet roulant</strong> bien plus réduite que la normale, pour permettre plus de luminosité, pour prendre moins de place. On a au final un'+ 
'                      <strong>volet roulant'+ 
'                          rénovation faible encombrement</strong></div>'+ 
'                  <div style="text-align: left;">Une des options essentielles à vérifier est le moteur de votre'+ 
'                      <strong>volet roulant'+ 
'                          motorisé</strong> : vous pouvez opter pour un moteur Profalux ou un moteur Somfy, et vous obtiendrez donc un'+ 
'                      <strong>volet roulant Profalux</strong> ou un <b>volet roulant électrique somfy</b>.'+ 
'                  </div>'+ 
'                  <div style="text-align: left;">Le type de motorisation définira donc votre type de volet roulant : selon votre besoin, optez pour un <strong>volet roulant radio</strong> ou un <strong>volet roulant'+ 
'                          filaire</strong>.</div>'+ 
'                  <div style="text-align: left;">Enfin, afin de concevoir le <strong>volet roulant connecté</strong>, nous vous proposons en accessoire de nombreuses box domotiques, telles que box tahoma, ou la box connexoon.'+ 
'                  </div>'+ 
'              </div>'+ 
'          </div>'+ 
'      </div>'+ 
'  </div>'+ 
'  <div class="eg-benchmark">'+ 
'      <div class="container-bob">'+ 
'          <div class="row">'+ 
'              <div class="eg-benchmark-section col-12">'+ 
'                  <div class="left-section">'+ 
'                      <h2 class="eg-benchmark-heading">Le <strong>volet roulant rénovation</strong> de référence</h2>'+ 
'                      <p class="eg-benchmark-para">Délai de livraison moyen : 3 semaines<br>Avec le plus petit caisson de sa catégorie, le <strong>volet roulant rénovation</strong> Profalux Visio est devenu la référence du volet roulant en rénovation<br>Il a été vendu à plus d\'un million'+ 
'                          d’exemplaires !'+ 
'                      </p>'+ 
'                      <ul>'+ 
'                          <li>'+ 
'                              <span class="eg-icon"><i class="fa fa-check"></i></span>'+ 
'                              <div class="eg-bench-text">'+ 
'                                  <p><strong>Volet roulant esthétique et discret</strong></p>'+ 
'                                  <p><em>L’emprise sur la fenêtre et le vitrage se trouve réduite au minimum : caisson'+ 
'                                          extérieur, coulisses de faible profondeur, lame finale qui s’escamote…</em></p>'+ 
'                              </div>'+ 
'                          </li>'+ 
'                          <li>'+ 
'                              <span class="eg-icon"><i class="fa fa-check"></i></span>'+ 
'                              <div class="eg-bench-text">'+ 
'                                  <p><strong>Design soigné et moderne</strong></p>'+ 
'                                  <p><em>Douceur et intégration sont privilégiées avec des angles arrondis et des lignes'+ 
'                                          fluides.</em></p>'+ 
'                              </div>'+ 
'                          </li>'+ 
'                      </ul>'+ 
'                  </div>'+ 
'                  <div class="right-section">'+ 
'                      <div class="eg-benchmark-img">'+ 
'                          <img data-src="https://clic-volet.fr/img/cms/Configs/Visio/Description/volet-de-base-1-min.jpg" alt="" class=" lazyloaded" src="https://clic-volet.fr/img/cms/Configs/Visio/Description/volet-de-base-1-min.jpg">'+ 
'                      </div>'+ 
'                  </div>'+ 
'              </div>'+ 
'          </div>'+ 
'      </div>'+ 
'  </div>';

        // divider
        egNewSection += `<div class="eg-divider">
            <div class="container-bob"> 
                <div class="row">
                    <hr>
                    <p>Avec son design qui sait enfin donner à la lumière la place qu’elle mérite, le <strong>volet roulant rénovation</strong> Visio est l’innovation inséparable des projets de rénovation.</p>
                    <hr>
                </div>
            </div>   
        </div>`;

        // profalux
        egNewSection += `
        <div class"eg-profalux">
            <div class="container-bob">
                <div class="row">
                    <div class="eg-profalux-container">
                        <div class="eg-left-content">
                            <img data-src="https://clic-volet.fr/img/cms/Configs/Visio/Description/profalux-min.jpg" alt="" class=" lazyloaded" src="https://clic-volet.fr/img/cms/Configs/Visio/Description/profalux-min.jpg">
                            <p>Volets roulants garantis 5 ans</p>
                            <div class="eg-images">
                                <div class="eg-img-1">
                                    <img data-src="https://clic-volet.fr/img/cms/Configs/Visio/Description/sécurité-1-min.jpg" alt="" class=" lazyloaded" src="https://clic-volet.fr/img/cms/Configs/Visio/Description/sécurité-1-min.jpg">
                                </div>
                                <div class="eg-img-2">
                                    <img data-src="https://clic-volet.fr/img/cms/Configs/Visio/Description/nf-certifie-1-min.jpg" alt="" class=" lazyloaded" src="https://clic-volet.fr/img/cms/Configs/Visio/Description/nf-certifie-1-min.jpg">
                                </div>
                            </div>
                        </div>

                        <div class="eg-right-content">
                            <h4>La fiabilité et la sécurité</h4>
                            <ul>
                                <li>
                                    <span><i class="fa fa-check"></i></span>
                                    <p>
                                        Dispositif anti-relevage :&nbsp;<strong>volet roulant rénovation</strong> sécurisé et difficile à forcer
                                        <em>Dans le caisson, ce dispositif comprime le volet roulant vers le bas quand le volet roulant est fermé et empêche tout soulèvement de l’extérieur</em>
                                    </p>
                                </li>
                                
                                <li>
                                    <span><i class="fa fa-check"></i></span>
                                    <p>
                                        Dispositif anti-retour et blocage latéral
                                        <em>Votre volet reste stable, aligné et bien intégré dans son installation. Une solution vraiment plus durable et plus fiable.</em>
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `;

        // types
        egNewSection += `
        <div class="eg-types>
            <div class="container-bob">
                <div class="row">
                    <h3 class="eg-title">Les différents types de pose</h3>
                    <h4 class="eg-subtitle">Pour toutes les situations</h4>
                    <div class="eg-desc">
                        <p>
                            Le coffre du profalux Visio peux se monter de trois manières différentes pour un maximum de fléxibilité.
                            Peu importe votre type d’encadrement de fenetre, ou vos préférences esthétiques Visio saura s’adapter.
                        </p> 
                    </div>

                    <div class="eg-images-types">
                        <div class="eg-type-1">
                            <img data-src="https://clic-volet.fr/img/cms/Configs/Visio/Description/Rectangle 829-1-min.jpg" alt="" class=" lazyloaded" src="https://clic-volet.fr/img/cms/Configs/Visio/Description/Rectangle 829-1-min.jpg">
                            <p>
                                Pose sous linteau<br>Coffre extérieur
                            </p>
                        </div>
                        
                        <div class="eg-type-2">
                            <img data-src="https://clic-volet.fr/img/cms/Configs/Visio/Description/Rectangle 832-1-min.jpg" alt="" class=" lazyloaded" src="https://clic-volet.fr/img/cms/Configs/Visio/Description/Rectangle 832-1-min.jpg">
                            <p>
                                Pose sous linteau<br>Coffre intérieur
                            </p>
                        </div>
                        
                        <div class="eg-type-3">
                            <img data-src="https://clic-volet.fr/img/cms/Configs/Visio/Description/Rectangle 826-1-min.jpg" alt="" class=" lazyloaded" src="https://clic-volet.fr/img/cms/Configs/Visio/Description/Rectangle 826-1-min.jpg">
                            <p>
                                Pose en<br>applique extérieure
                            </p>
                        </div>
                    </div>       
                </div>
            </div>
        </div>`;

        // Encombrement coffre
        egNewSection += `
        <div class="eg-encombrement>
            <div class="container-bob">
                <div class="row">
                    <h3 class="eg-title">Encombrement coffre</h3>
                    <div class="eg-coffre-container>
                        <div class="eg-left-content">
                            <h4 class="eg-subtitle">Le coffre du Visio</h4>
                            <p class="eg-desc-para">Le coffre du <strong>volet roulant rénovation</strong> Profalux Visio s’adapte à toute les situations grace à sa taille réduite et à sa forme optimisé. La lame finale recourbé des volets profalux Visio rentre directement dans son coffre. Outre l’aspect esthétique, cette innovation permet de vous faire gagner en luminosité. </p>
                            <div class="eg-coffre-image">
                                <img data-src="https://clic-volet.fr/img/cms/Configs/Visio/Description/mini/petit_caisson1-1-min.jpg" alt="" class=" lazyloaded" src="https://clic-volet.fr/img/cms/Configs/Visio/Description/mini/petit_caisson1-1-min.jpg">
                            </div>
                            
                            <h3 class="eg-coffre-title">Les types de coffre</h3>
                            
                            <div class="eg-coffre-types">
                                <div>
                                    <img data-src="https://clic-volet.fr/img/cms/Configs/Visio/Description/mini/coffre-pan-coupe-1-min.jpg" alt="" class=" lazyloaded" src="https://clic-volet.fr/img/cms/Configs/Visio/Description/mini/coffre-pan-coupe-1-min.jpg">
                                    <strong>Pan-coupé</strong>
                                </div>
                                
                                <div>
                                    <img data-src="https://clic-volet.fr/img/cms/Configs/Visio/Description/mini/coffre-rond-1-min.jpg" alt="" class=" lazyloaded" src="https://clic-volet.fr/img/cms/Configs/Visio/Description/mini/coffre-rond-1-min.jpg">
                                    <strong>Rond</strong>
                                </div>
                                
                                <div>
                                    <img data-src="https://clic-volet.fr/img/cms/Configs/Visio/Description/mini/coffre-carre-1-min.jpg" alt="" class=" lazyloaded" src="https://clic-volet.fr/img/cms/Configs/Visio/Description/mini/coffre-carre-1-min.jpg">
                                    <strong>Carré</strong
                                </div>
                            </div>
                        </div>

                        <div> class="eg-right-content">
                            <h4 class="eg-subtitle">Taille du coffre - selon vos mesures</h4>
                            <p class="eg-paga-desc">Taille du caisson du volet en fonction de la hauteur totale maximale du volet, et du type de lame choisi.<br>Les dimensions sont exprimées en mm.</p>
                            <div class="eg-table">
                                <table><thead><tr class="bg-gradient-violetfonce-bleufonce font-weight-bold text-white"><th class="px-1">Hauteur max&nbsp;</th><th class="px-1">&nbsp;PX-39</th><th class="px-1">PX-40</th><th class="px-1">PX-55</th><th class="px-1">PVC-40</th></tr></thead><tbody><tr><td><strong>&nbsp;750</strong></td><td><em>123</em></td><td>132</td><td><em>205</em></td><td>132</td></tr><tr><td><strong>&nbsp;1150</strong></td><td><em>123</em></td><td>155</td><td><em>205</em></td><td>132</td></tr><tr><td><strong>&nbsp;1250</strong></td><td>123</td><td>170</td><td><em>205</em></td><td><i>155</i></td></tr><tr><td><strong>&nbsp;1550</strong></td><td>133</td><td>205</td><td>230</td><td><i>155</i></td></tr><tr><td><strong>&nbsp;1750</strong></td><td><i>155</i></td><td>205</td><td>230</td><td><i>155</i></td></tr><tr><td><strong>&nbsp;2150</strong><strong></strong></td><td><i>155</i><em></em></td><td>205</td><td>230</td><td>170</td></tr><tr><td><strong>&nbsp;2350</strong></td><td><i>155</i></td><td>205</td><td>230</td><td>205</td></tr><tr><td><strong>&nbsp;2450</strong></td><td><i>170</i></td><td>205</td><td>230</td><td>205</td></tr><tr><td><strong>&nbsp;2499</strong></td><td><i>170</i></td><td>230</td><td>230</td><td>205</td></tr><tr><td><strong>&nbsp;2750</strong></td><td><i>170</i></td><td>230</td><td>--</td><td>205</td></tr><tr><td><strong>&nbsp;2899</strong></td><td><em>205</em></td><td>230</td><td>--</td><td>205</td></tr><tr><td><strong>&nbsp;3099</strong></td><td><i>205</i></td><td><i>230</i></td><td>--</td><td><i>--</i></td></tr></tbody></table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>`;

        // Les types de lames
        egNewSection += `
        <div class="eg-lames">
            <div class="container-bob">
                <div class="row">
                    <h3 class="eg-title">
                        Les types de lames
                    </h3>

                    <div class="eg-lames-types">
                        <div class="eg-lame-1">
                            <img data-src="https://clic-volet.fr/img/cms/Configs/Visio/Description/mini/lame_pvc40-1-min.jpg" alt="" class=" lazyloaded" src="https://clic-volet.fr/img/cms/Configs/Visio/Description/mini/lame_pvc40-1-min.jpg">
                            <div class="eg-img-widget"><span>Lame en PVC</span></div>
                            <h3 class="eg-title">Lame PVC-40</h3>
                            <p class="eg-lame-spec">Adaptée aux faibles réservations<br>Lame extrudée en PVC<br>Lame bombée et ajourée<br>Masse : 3kg/m2</p>
                        </div>
                        
                        <div class="eg-lame-2">
                            <img data-src="https://clic-volet.fr/img/cms/Configs/Visio/Description/mini/lame_alu_px39-min.jpg" alt="" class=" lazyloaded" src="https://clic-volet.fr/img/cms/Configs/Visio/Description/mini/lame_alu_px39-min.jpg">
                            <div class="eg-img-widget"><span>Lame en Aluminium</span></div>
                            <h3 class="eg-title">Lame Aluminium px-39</h3>
                            <p class="eg-lame-spec">Adaptée aux faibles réservations<br>Lame bombée et ajourée<br>Masse : 2.7kg/m2<br>Densité mousse : 90Kg/m2</p>
                        </div>
                        
                        <div class="eg-lame-3">
                            <img data-src="https://clic-volet.fr/img/cms/Configs/Visio/Description/mini/lame_alu_px55-min.jpg" alt="" class=" lazyloaded" src="https://clic-volet.fr/img/cms/Configs/Visio/Description/mini/lame_alu_px55-min.jpg">
                            <div class="eg-img-widget"><span>Lame en PVC</span></div>
                            <h3 class="eg-title">Lame en Aluminium</h3>
                            <p class="eg-lame-spec">Spécifique pour les grandes largeurs motorisées<br>Lame bombée<br>Masse : 3.8kg/m2<br>Densité mousse : 70Kg/m2</p>
                        </div>
                        
                        <div class="eg-lame-4">
                            <img data-src="https://clic-volet.fr/img/cms/Configs/Visio/Description/mini/lame_alu_px40-min.jpg" alt="" class=" lazyloaded" src="https://clic-volet.fr/img/cms/Configs/Visio/Description/mini/lame_alu_px40-min.jpg">
                            <div class="eg-img-widget"><span>Lame en Aluminium</span></div>
                            <h3 class="eg-title">Lame Aluminium PX-40</h3>
                            <p class="eg-lame-spec">Profil identique en extérieur et intérieur<br>Lame plate<br>Masse : 3.3kg/m2<br>Densité mousse : 90Kg/m2</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>`;

        // Le corps du volet
        egNewSection += `
        <div class="eg-du-volet>
            <div class="container-bob">
                <div class="row">
                    <h3 class="eg-title">Le corps du volet</h3>
                    <div class="eg-du-volet-types">
                        <div class="eg-type-1">
                            <img data-src="https://clic-volet.fr/img/cms/Configs/Visio/Description/mini/blocage-lateral-min.jpg" alt="" class=" lazyloaded" src="https://clic-volet.fr/img/cms/Configs/Visio/Description/mini/blocage-lateral-min.jpg">
                            <h4>Blocage latéral intégré</h4>
                            <p>Fini les volets qui se mettent de travers ! Le blocage latéral intégré opère un pincement de la lame supérieure et permet à vos volets de se maintenir droits, parfaitement intégrés, et de rester bien alignés</p>
                        </div>
                        
                        <div class="eg-type-2">
                            <img data-src="https://clic-volet.fr/img/cms/Configs/Visio/Description/mini/attache-min.jpg" alt="" class=" lazyloaded" src="https://clic-volet.fr/img/cms/Configs/Visio/Description/mini/attache-min.jpg">
                            <h4>Attaches rigides</h4>
                            <p>Les attaches rigides supportent les tabliers les plus lourds. Elles bloquent toute tentative de relevage forcé depuis l'extérieur. Enfin, elles arrêtent automatiquement la remontée du volet.</p>
                        </div>
                        
                        <div class="eg-type-3">
                            <img data-src="https://clic-volet.fr/img/cms/Configs/Visio/Description/mini/lame-finale-2-min.jpg" alt="" class=" lazyloaded" src="https://clic-volet.fr/img/cms/Configs/Visio/Description/mini/lame-finale-2-min.jpg">
                            <h4>Lame finale encastrée</h4>
                            <p>La lame finale du volet est recourbée vers l’intérieur.<br>Une fois le volet remonté, cette lame finale disparait totalement dans le caisson. Vous bénéficiez donc de plus de lumière, d'un encastrement parfait et d'une finition impeccable.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>`;

         // Les types de coulisses
        egNewSection += `
        <div class="eg-de-coulisses>
            <div class="container-bob">
                <div class="row">
                    <h3 class="eg-title">Les types de coulisses</h3>
                    <div class="eg-de-coulisses-types">
                        <div class="eg-type-1">
                            <img data-src="https://clic-volet.fr/img/cms/Configs/Visio/Description/coulisses_standard.jpg" alt="" class=" lazyloaded" src="https://clic-volet.fr/img/cms/Configs/Visio/Description/coulisses_standard.jpg">
                            <h4>Coulisse standard</h4>
                            <p>Préconisée dans la plupart des installations.<br>Pour les lames suivantes :<br>Alu PX39 / Alu PX40 / PVC 40</p>
                        </div>
                        
                        <div class="eg-type-2">
                            <img data-src="https://clic-volet.fr/img/cms/Configs/Visio/Description/coulisse_c63.jpg" alt="" class=" lazyloaded" src="https://clic-volet.fr/img/cms/Configs/Visio/Description/coulisse_c63.jpg">
                            <h4>Coulisse C63</h4>
                            <p>Préconisée pour les grandes installations.<br>Idéale avec notamment la lame Aluminium PX-55</p>
                        </div>
                        
                        <div class="eg-type-3">
                            <img data-src="https://clic-volet.fr/img/cms/Configs/Visio/Description/coulisse_a_l.jpg" alt="" class=" lazyloaded" src="https://clic-volet.fr/img/cms/Configs/Visio/Description/coulisse_a_l.jpg">
                            <h4>Coulisse à L</h4>
                            <p>Préconisée pour les volets en pose sous linteau avec coffre intérieur<br>Elle permet de percer plus loin du coin de la maçonnerie, et de ne pas abimer les bordures du mur.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>`;

        // Les types de moteurs
        egNewSection += `
        <div class="eg-de-moteurs>
            <div class="container-bob">
                <div class="row">
                    <h3 class="eg-title">Les types de moteurs</h3>
                    <div class="eg-de-coulisses-types">
                        <div class="eg-type-1">
                            <h3 class="eg-type-title">Les motorisations Somfy</h3>
                            <ul>
                                <li><span><i class="fa fa-check"></i></span><p>Moteurs les plus vendus du marché</p></li>
                                <li><span><i class="fa fa-check"></i></span><p>Moteurs compatibles avec la plupart des installations et solutions domotiques</p></li>
                                <li><span><i class="fa fa-check"></i></span><p>Motorisations garanties 5 ans</p></li>
                            </ul>
                            <img class="eg-product-img" data-src="https://clic-volet.fr/img/cms/Configs/Visio/Description/moteur_somfy.jpg" alt="" class=" lazyloaded" src="https://clic-volet.fr/img/cms/Configs/Visio/Description/moteur_somfy.jpg">
                            <img class="eg-brand-img" data-src="https://clic-volet.fr/img/cms/marques/Aucun espace interne/somfy.png" alt="" class=" lazyloaded" src="https://clic-volet.fr/img/cms/marques/Aucun espace interne/somfy.png">
                        </div>
                        
                        <div class="eg-type-2">
                            <h3 class="eg-type-title">Les motorisations Profalux</h3>
                            <ul>
                                <li><span><i class="fa fa-check"></i></span><p>Moteurs de la marque constructeur du volet roulant</p></li>
                                <li><span><i class="fa fa-check"></i></span><p>Moteurs radios compatibles Zigbee</p></li>
                                <li><span><i class="fa fa-check"></i></span><p>Motorisations garanties 7 ans</p></li>
                            </ul>
                            <img class="eg-product-img" data-src="https://clic-volet.fr/img/cms/Configs/Visio/Description/mini/moteur_profalux-min.jpg" alt="" class=" lazyloaded" src="https://clic-volet.fr/img/cms/Configs/Visio/Description/mini/moteur_profalux-min.jpg">
                            <img class="eg-brand-img" data-src="https://clic-volet.fr/img/cms/marques/Aucun espace interne/profalux.png" alt="" class=" lazyloaded" src="https://clic-volet.fr/img/cms/marques/Aucun espace interne/profalux.png">
                        </div>
                    </div>

                    <div class="eg-moteurs-container">
                        <div class="eg-moteurs">
                            <span class="eg-moteurs-title">Moteurs filaires</span>
                            <ul>
                                <li><span><i class="fa fa-check"></i></span><p>Motorisations adaptées aux petits budgets, plus économe</p></li>
                                <li><span><i class="fa fa-check"></i></span><p>livrés avec interrupteur standard (encastré ou en applique, au choix)</p></li>
                                <li><span><i class="fa fa-check"></i></span><p>Deux choix de motorisation : Somfy ou Profalux</p></li>
                            </ul>
                        </div>
                        
                        <div class="eg-moteurs">
                            <span class="eg-moteurs-title">Moteurs radio</span>
                            <ul>
                                <li><span><i class="fa fa-check"></i></span><p>Utilisation plus confortable qu'un moteur filaire via l'émetteur</p></li>
                                <li><span><i class="fa fa-check"></i></span><p>Installation électrique plus simple : pas de saignée d'interrupteur</p></li>
                                <li><span><i class="fa fa-check"></i></span><p>Moteurs compatibles avec les box domotiques</p></li>
                            </ul>
                        </div>
                        
                        <div class="eg-somfy">
                            <div class="eg-moteurs-title-grp">
                                <div class="eg-titles">
                                    <span class="eg-title-1">Moteurs Smart</span>
                                    <span class="eg-title-2">Somfy RS100 IO</span>
                                </div>
                                <div class="eg-title-img">
                                    <img data-src="https://clic-volet.fr/img/cms/Configs/Visio/Description/best-seller.png" alt="" class=" lazyloaded" src="https://clic-volet.fr/img/cms/Configs/Visio/Description/best-seller.png">
                                </div>
                            </div>
                            <ul>
                                <li><span><i class="fa fa-check"></i></span><p>Moteurs intelligents et silencieux de dernière génération Somfy</p></li>
                                <li><span><i class="fa fa-check"></i></span><p>Détection d'obstacle, double vitesse et position favorite automatique</p></li>
                                <li><span><i class="fa fa-check"></i></span><p>Compatible avec les solutions domotiques</p></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>`;

        // Les commandes domotiques
        egNewSection += `
        <div class="eg-domotiques">
            <div class="container-bob">
                <div class="row">
                    <h3 class="eg-title">Les commandes domotiques</h3>
                    <div class="eg-solution">
                        <div class="eg-subheading"><small>Solution globale</small></div>
                        <h4 class="eg-heading">Tahoma Switch<br>Box domotique Somfy</h4>
                        <div class="eg-brand-img"><img data-src="https://clic-volet.fr/img/cms/marques/Aucun espace interne/somfy.png" alt="" class=" lazyloaded" src="https://clic-volet.fr/img/cms/marques/Aucun espace interne/somfy.png"></div>
                        <div class="eg-solution-desc">
                            <p>La box domotique Tahoma Switch permet le contrôle centralisé, en local ou à distance, de tous les équipements connectés de la maison.<br>Exemple : depuis un ordinateur, un smartphone ou une tablette, il est possible d'ouvrir la porte de la maison à vos enfants s'ils ont oublié leurs clés</p>
                        </div>
                        <div class="eg-solution-specs">
                            <div class="eg-left-side">
                                <img class="eg-product" data-src="https://clic-volet.fr/img/cms/Configs/Visio/Description/mini/tahoma-switch-2-min.jpg" alt="accessoire volet roulant sur mesure" class=" lazyloaded" src="https://clic-volet.fr/img/cms/Configs/Visio/Description/mini/tahoma-switch-2-min.jpg">
                                <img class="eg-siri-brand-logo" data-src="https://clic-volet.fr/img/cms/Configs/Visio/Description/mini/siri-min.jpg" alt="iDiamant with Netatmo - Application" class=" lazyloaded" src="https://clic-volet.fr/img/cms/Configs/Visio/Description/mini/siri-min.jpg">
                                <p class="eg-siri-compatible-txt" style="text-align:left;">Compatible Siri et toutes plateformes</p>
                                <div class="eg-other-compatible-ai">
                                    <img data-src="https://clic-volet.fr/img/cms/Guide/Domotique/works-with-alexa.jpg" alt="iDiamant with Netatmo - Avec Amazon Alexa" class=" lazyloaded" src="https://clic-volet.fr/img/cms/Guide/Domotique/works-with-alexa.jpg">
                                    <img data-src="https://clic-volet.fr/img/cms/Guide/Domotique/works-with-apple-homekit.jpg" alt="iDiamant with Netatmo avec Apple Homekit" class=" lazyloaded" src="https://clic-volet.fr/img/cms/Guide/Domotique/works-with-apple-homekit.jpg">
                                    <img data-src="https://clic-volet.fr/img/cms/Guide/Domotique/works-with-hey-google.jpg" alt="iDiamant with Netatmo - Avec Ok Google !" class=" lazyloaded" src="https://clic-volet.fr/img/cms/Guide/Domotique/works-with-hey-google.jpg">
                                </div>
                            </div>
                            <div class="eg-right-side">
                                <ul>
                                    <li><span><i class="fa fa-check"></i></span><p>Centralisez votre logement d’un simple geste !</p></li>
                                    <li><span><i class="fa fa-check"></i></span><p>Solution globale et évolutive : 1 application pour tous les univers (fenêtre, terrasse, accès, chauffage, éclairage, sécurité…)</p></li>
                                    <li><span><i class="fa fa-check"></i></span><p>Protocole radio : Multi protocoles : RTS, io, Zigbee3.0 (éclairage uniquement)<br><img class=" lazyloaded" data-src="https://clic-volet.fr/img/cms/Guide/Domotique/domotique-somfy-radio-tahoma.jpg" width="333" height="50" src="https://clic-volet.fr/img/cms/Guide/Domotique/domotique-somfy-radio-tahoma.jpg"></p></li>
                                    <li><span><i class="fa fa-check"></i></span><p>Pilotage : Multi devices : smartphone et tablette</p></li>
                                    <li><span><i class="fa fa-check"></i></span><p>Nombre d'équipements : 200</p></li>
                                    <li><span><i class="fa fa-check"></i></span><p>Nombre de scénarios : 40 scénarios d'usage</p></li>
                                    <li><span><i class="fa fa-check"></i></span><p>Nombre d'automatismes : 40 automatismes (horloges, capteurs et détecteurs)</p></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>`;

        // box
        egNewSection += `
        <div class="eg-box">
            <div class="container-bob">
                <div class="row">
                    <div class="eg-top-box">
                        <div class="eg-left-div">
                            <h3 class="eg-title">La Box Calypshome</h3>
                            <p>Avec la box Calpyshome,&nbsp;prenez&nbsp;le contrôle&nbsp;de votre confort en toute simplicité. Calyps’HOME fait de votre smartphone une télécommande connectée !</p>
                            <ul>
                                <li><span><i class="fa fa-check"></i></span><p>Programmation horaire ou programmation de scénario</p></li>
                                <li><span><i class="fa fa-check"></i></span><p>Création de groupes d’équipements</p></li>
                                <li><span><i class="fa fa-check"></i></span><p>Gestion à distance de vos équipements</p></li>
                                <li><span><i class="fa fa-check"></i></span><p>Simulation de présence</p></li>
                                <li><span><i class="fa fa-check"></i></span><p>Gestion à distance depuis votre smartphone</p></li>
                            </ul>
                            <p>Contrôlez l’ensemble de vos équipements Profalux via votre smartphone : <em>volets roulants, brise-soleil orientables, porte de garage, portail, stores, lumières</em></p>
                        </div>
                        <div class="eg-right-div">
                            <img class="eg-product-img" data-src="https://clic-volet.fr/img/cms/Configs/Visio/Description/mini/calpyshome-min.jpg" alt="" class=" lazyloaded" src="https://clic-volet.fr/img/cms/Configs/Visio/Description/mini/calpyshome-min.jpg">
                        </div>
                    </div>
                    <div class="eg-bottom-box">
                        <div class="eg-left-div">
                            <img class="eg-product-img" data-src="https://clic-volet.fr/img/cms/Configs/Visio/Description/mini/commande-zoe-min.jpg" alt="" class=" lazyloaded" src="https://clic-volet.fr/img/cms/Configs/Visio/Description/mini/commande-zoe-min.jpg">
                        </div>
                        
                        <div class="eg-right-div">
                            <h3 class="eg-title">La Commande générale Zoé</h3>
                            <p>La nouvelle télécommande Zoé, vous offre un design épuré qui s’intègre parfaitement dans votre intérieur, un écran couleur, une simplicité d’utilisation, un fonctionnement intuitif et la garantie que tous vos ordres ont été pris en compte.</p>
                            <ul>
                                <li><span><i class="fa fa-check"></i></span><p>Retour d'information : la certitude que tout est fermé</p></li>
                                <li><span><i class="fa fa-check"></i></span><p>La simulation de présence</p></li>
                                <li><span><i class="fa fa-check"></i></span><p>Economies d'énergie : Été comme hiver</p></li>
                                <li><span><i class="fa fa-check"></i></span><p>Complètement personnalisable</p></li>
                                <li><span><i class="fa fa-check"></i></span><p>Commande manuelle ou programmée</p></li>
                                <li><span><i class="fa fa-check"></i></span><p>Sécurité accrue : Anti-parasitage et anti-piratage</p></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>`;
        
        function init() {
        
            document.querySelector('.catalog-product-view-configurateur-widgets').insertAdjacentHTML('beforebegin', egNewSection);
        }

        
        /* Initialise variation */
        waitForElement(".catalog-product-view-configurateur-widgets", init, 50, 15000);
    } catch (e) {
        if (debug) console.log(e, "error in Test" + variation_name);
    }
})();
