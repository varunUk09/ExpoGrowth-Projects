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
'                  <div style="text-align: left;">Concevez votre <strong>volet roulant ??lectrique sur mesure</strong> de la gamme Profalux Visio via notre configurateur simple, rapide mais surtout ?? un tarif incomparable.</div>'+ 
'                  <div style="text-align: left;">Le <strong>volet roulant r??novation</strong>?? est le <strong>volet'+ 
'                          roulant'+ 
'                          ??lectrique</strong> le plus connu du grand public. De la gamme Visio, ce volet roulant vous offre un confort exceptionnel, tout en mettant l\'accent sur un design raffin?? et discret.</div>'+ 
'                  <div style="text-align: left;">La premi??re option ?? choisir est le type de pose du volet roulant, selon votre habitat. Vous pouvez opter pour un <strong>volet roulant en applique</strong>, ou un <strong>volet'+ 
'                          roulant sous'+ 
'                          linteau</strong>???</div>'+ 
'                  <div style="text-align: left;">Vous pouvez choisir le type de lames de votre volet roulant : choisissez un'+ 
'                      <strong>volet roulant pvc</strong>, ou un <strong>volet roulant aluminium</strong>'+ 
'                  </div>'+ 
'                  <div style="text-align: left;">Choisissez ??galement votre coloris de volet roulant, en choisissant un volet roulant blanc, un <strong>volet roulant gris anthracite</strong>, ou un <strong>volet roulant'+ 
'                          marron</strong></div>'+ 
'                  <div style="text-align: left;">En choisissant librement vos <strong>dimensions de volet'+ 
'                          roulant</strong>, vous pouvez aussi bien opter pour un <strong>volet roulant grande largeur</strong> ou un <strong>petit'+ 
'                          volet'+ 
'                          roulant</strong>.</div>'+ 
'                  <div style="text-align: left;">Le <strong>volet roulant Visio</strong> est le <strong>volet roulant sur'+ 
'                          mesure</strong> qui offre une <strong>dimension coffre volet roulant</strong> bien plus r??duite que la normale, pour permettre plus de luminosit??, pour prendre moins de place. On a au final un'+ 
'                      <strong>volet roulant'+ 
'                          r??novation faible encombrement</strong></div>'+ 
'                  <div style="text-align: left;">Une des options essentielles ?? v??rifier est le moteur de votre'+ 
'                      <strong>volet roulant'+ 
'                          motoris??</strong> : vous pouvez opter pour un moteur Profalux ou un moteur Somfy, et vous obtiendrez donc un'+ 
'                      <strong>volet roulant Profalux</strong> ou un <b>volet roulant ??lectrique somfy</b>.'+ 
'                  </div>'+ 
'                  <div style="text-align: left;">Le type de motorisation d??finira donc votre type de volet roulant : selon votre besoin, optez pour un <strong>volet roulant radio</strong> ou un <strong>volet roulant'+ 
'                          filaire</strong>.</div>'+ 
'                  <div style="text-align: left;">Enfin, afin de concevoir le <strong>volet roulant connect??</strong>, nous vous proposons en accessoire de nombreuses box domotiques, telles que box tahoma, ou la box connexoon.'+ 
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
'                      <h2 class="eg-benchmark-heading">Le <strong>volet roulant r??novation</strong> de r??f??rence</h2>'+ 
'                      <p class="eg-benchmark-para">D??lai de livraison moyen : 3 semaines<br>Avec le plus petit caisson de sa cat??gorie, le <strong>volet roulant r??novation</strong> Profalux Visio est devenu la r??f??rence du volet roulant en r??novation<br>Il a ??t?? vendu ?? plus d\'un million'+ 
'                          d???exemplaires !'+ 
'                      </p>'+ 
'                      <ul>'+ 
'                          <li>'+ 
'                              <span class="eg-icon"><i class="fa fa-check"></i></span>'+ 
'                              <div class="eg-bench-text">'+ 
'                                  <p><strong>Volet roulant esth??tique et discret</strong></p>'+ 
'                                  <p><em>L???emprise sur la fen??tre et le vitrage se trouve r??duite au minimum : caisson'+ 
'                                          ext??rieur, coulisses de faible profondeur, lame finale qui s???escamote???</em></p>'+ 
'                              </div>'+ 
'                          </li>'+ 
'                          <li>'+ 
'                              <span class="eg-icon"><i class="fa fa-check"></i></span>'+ 
'                              <div class="eg-bench-text">'+ 
'                                  <p><strong>Design soign?? et moderne</strong></p>'+ 
'                                  <p><em>Douceur et int??gration sont privil??gi??es avec des angles arrondis et des lignes'+ 
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
'  </div>'+ 
'  <div class="eg-devider">'+ 
'      <div class="container-bob">'+ 
'          <div class="row">'+ 
'              <hr>'+ 
'              <div>Avec son design qui sait enfin donner ?? la lumi??re la place qu???elle m??rite, le??<strong>volet roulant r??novation??</strong>Visio est l???innovation ins??parable des projets de r??novation.</div>'+ 
'              <hr>'+ 
'          </div>'+ 
'      </div>'+ 
'  </div>'+ 
'  <div class="eg-security">'+ 
'      <div class="container-bob">'+ 
'          <div class="row">'+ 
'              <div class="egSecurityContent">'+ 
'  '+ 
'                  <div class="eg_leftSide">'+ 
'                      <img data-src="https://clic-volet.fr/img/cms/Configs/Visio/Description/profalux-min.jpg" alt="" class=" lazyloaded" src="https://clic-volet.fr/img/cms/Configs/Visio/Description/profalux-min.jpg">'+ 
'  '+ 
'                      <div class="eg_SecurityText">Volets roulants garantis 5 ans</div>'+ 
'  '+ 
'                      <div class="eg_images_security">'+ 
'                          <div class="egImg1">'+ 
'                              <img data-src="https://clic-volet.fr/img/cms/Configs/Visio/Description/se??curite??-1-min.jpg" alt="" class=" lazyloaded" src="https://clic-volet.fr/img/cms/Configs/Visio/Description/se??curite??-1-min.jpg">'+ 
'                          </div>'+ 
'                          <div class="egImg2">'+ 
'                              <img data-src="https://clic-volet.fr/img/cms/Configs/Visio/Description/nf-certifie-1-min.jpg" alt="" class=" lazyloaded" src="https://clic-volet.fr/img/cms/Configs/Visio/Description/nf-certifie-1-min.jpg">'+ 
'                          </div>'+ 
'                      </div>'+ 
'  '+ 
'                  </div>'+ 
'  '+ 
'                  <div class="eg_rightSide">'+ 
'                      <h2 class="eg_heads">La fiabilit?? et la s??curit??</h2>'+ 
'  '+ 
'                      <ul>'+ 
'                          <li>'+ 
'                              <span class="eg-icon"><i class="fa fa-check"></i></span>'+ 
'                              <div class="eg-security-text">'+ 
'                                  Dispositif anti-relevage :??<strong>volet roulant r??novation</strong>??s??curis?? et difficile ?? forcer<br><em>Dans le caisson, ce dispositif comprime le??volet'+ 
'                                      roulant vers le bas quand le volet??</em><i>roulant??</i><em>est ferm?? et'+ 
'                                      emp??che tout soul??vement de l???ext??rieur</em>'+ 
'  '+ 
'                              </div>'+ 
'                          </li>'+ 
'  '+ 
'                          <li>'+ 
'                              <span class="eg-icon"><i class="fa fa-check"></i></span>'+ 
'                              <div class="eg-security-text">'+ 
'                                  Dispositif anti-retour et blocage lat??ra<br><em>Votre volet reste stable, align??'+ 
'                                  et bien int??gr?? dans son installation. Une solution vraiment plus durable et plus'+ 
'                                  fiable.</em>'+ 
'                              </div>'+ 
'                          </li>'+ 
'                      </ul>'+ 
'                  </div>'+ 
'              </div>'+ 
'          </div>'+ 
'      </div>'+ 
'  </div>'+ 
'  <div class="eg-types">'+ 
'      <div class="container-bob">'+ 
'          <div class="row">'+ 
'              <div class="eg_type">'+ 
'                  <h2 class="eg_heading_title">Les diff??rents types de pose</h2>'+ 
'                  <p class="eg_subtitle">Pour toutes les situations</p>'+ 
'                  <p class="eg_para_types">Le coffre du profalux Visio peux se monter de trois mani??res diff??rentes pour un maximum de fl??xibilit??.<br>Peu importe votre type d???encadrement de fenetre, ou vos pr??f??rences esth??tiques Visio saura s???adapter.</p>'+ 
'              </div>'+ 
'  '+ 
'              <div class="eg_images_type">'+ 
'                  <div class="eg_img_types">'+ 
'                      <div class="img_section">'+ 
'                          <img data-src="https://clic-volet.fr/img/cms/Configs/Visio/Description/Rectangle 829-1-min.jpg" alt="" class=" lazyloaded" src="https://clic-volet.fr/img/cms/Configs/Visio/Description/Rectangle 829-1-min.jpg">'+ 
'                      </div>'+ 
'                      <div class="eg_img_desc">'+ 
'                          <span>Pose sous linteau<br>'+ 
'  						Coffre ext??rieur</span>'+ 
'                      </div>'+ 
'                  </div>'+ 
'  '+ 
'                  <div class="eg_img_types">'+ 
'                      <div class="img_section">'+ 
'                          <img data-src="https://clic-volet.fr/img/cms/Configs/Visio/Description/Rectangle 832-1-min.jpg" alt="" class=" lazyloaded" src="https://clic-volet.fr/img/cms/Configs/Visio/Description/Rectangle 832-1-min.jpg">'+ 
'                      </div>'+ 
'                      <div class="eg_img_desc">'+ 
'                          <span>Pose sous linteau<br>'+ 
'  						Coffre int??rieur</span>'+ 
'                      </div>'+ 
'                  </div>'+ 
'  '+ 
'                  <div class="eg_img_types">'+ 
'                      <div class="img_section">'+ 
'                          <img data-src="https://clic-volet.fr/img/cms/Configs/Visio/Description/Rectangle 826-1-min.jpg" alt="" class=" lazyloaded" src="https://clic-volet.fr/img/cms/Configs/Visio/Description/Rectangle 826-1-min.jpg">'+ 
'                      </div>'+ 
'                      <div class="eg_img_desc">'+ 
'                          <span>Pose en<br>applique ext??rieure</span>'+ 
'                      </div>'+ 
'                  </div>'+ 
'              </div>'+ 
'          </div>'+ 
'      </div>'+ 
'  </div>'+ 
'  <div class="eg-encombrement">'+ 
'      <div class="container-bob">'+ 
'          <div class="row">'+ 
'  '+ 
'              <h4>Encombrement coffre</h4>'+ 
'  '+ 
'              <div class="eg_lhs_coffre">'+ 
'                  <h3><span>Le coffre du Visio</span></h3>'+ 
'  '+ 
'                  <p class="eg_coffre_para">'+ 
'                      Le coffre du??<strong>volet roulant r??novation??</strong>Profalux Visio s???adapte ?? toute les situations grace ?? sa taille r??duite et ?? sa forme optimis??. La lame finale recourb?? des volets profalux Visio rentre directement'+ 
'                      dans son coffre. Outre l???aspect esth??tique, cette innovation permet de vous faire gagner en luminosit??.??'+ 
'                  </p>'+ 
'  '+ 
'                  <div class="eg_coffre_img">'+ 
'                      <img data-src="https://clic-volet.fr/img/cms/Configs/Visio/Description/mini/petit_caisson1-1-min.jpg" alt="" class=" lazyloaded" src="https://clic-volet.fr/img/cms/Configs/Visio/Description/mini/petit_caisson1-1-min.jpg">'+ 
'                  </div>'+ 
'  '+ 
'                  <div class="eg_coffre_btm">'+ 
'                      <h3>Les types de coffre</h3>'+ 
'                      <div class="eg_coffre_final">'+ 
'                          <div class="eg_btmImg_1">'+ 
'                              <img data-src="https://clic-volet.fr/img/cms/Configs/Visio/Description/mini/coffre-pan-coupe-1-min.jpg" alt="" class=" lazyloaded" src="https://clic-volet.fr/img/cms/Configs/Visio/Description/mini/coffre-pan-coupe-1-min.jpg">'+ 
'                              <span>Pan-coup??</span>'+ 
'                          </div>'+ 
'  '+ 
'                          <div class="eg_btmImg_1">'+ 
'                              <img data-src="https://clic-volet.fr/img/cms/Configs/Visio/Description/mini/coffre-rond-1-min.jpg" alt="" class=" lazyloaded" src="https://clic-volet.fr/img/cms/Configs/Visio/Description/mini/coffre-rond-1-min.jpg">'+ 
'                              <span>Rond</span>'+ 
'                          </div>'+ 
'  '+ 
'                          <div class="eg_btmImg_1">'+ 
'                              <img data-src="https://clic-volet.fr/img/cms/Configs/Visio/Description/mini/coffre-carre-1-min.jpg" alt="" class=" lazyloaded" src="https://clic-volet.fr/img/cms/Configs/Visio/Description/mini/coffre-carre-1-min.jpg">'+ 
'                              <span>Carr??</span>'+ 
'                          </div>'+ 
'                      </div>'+ 
'                  </div>'+ 
'              </div>'+ 
'  '+ 
'              <div class="eg_rhs_coffre">'+ 
'                  <h4>Taille du coffre - selon vos mesures</h4>'+ 
'                  <p>Taille du caisson du volet en fonction de la hauteur totale maximale du volet, et du type de lame choisi.<br>Les dimensions sont exprim??es en mm.</p>'+ 
'  '+ 
'                  <table class="eg_table_right">'+ 
'                      <thead>'+ 
'                          <tr class="bg-gradient-violetfonce-bleufonce font-weight-bold text-white">'+ 
'                              <th class="px-1">Hauteur max??</th>'+ 
'                              <th class="px-1">??PX-39</th>'+ 
'                              <th class="px-1">PX-40</th>'+ 
'                              <th class="px-1">PX-55</th>'+ 
'                              <th class="px-1">PVC-40</th>'+ 
'                          </tr>'+ 
'                      </thead>'+ 
'                      <tbody>'+ 
'                          <tr>'+ 
'                              <td><strong>??750</strong></td>'+ 
'                              <td><em>123</em></td>'+ 
'                              <td>132</td>'+ 
'                              <td><em>205</em></td>'+ 
'                              <td>132</td>'+ 
'                          </tr>'+ 
'                          <tr>'+ 
'                              <td><strong>??1150</strong></td>'+ 
'                              <td><em>123</em></td>'+ 
'                              <td>155</td>'+ 
'                              <td><em>205</em></td>'+ 
'                              <td>132</td>'+ 
'                          </tr>'+ 
'                          <tr>'+ 
'                              <td><strong>??1250</strong></td>'+ 
'                              <td>123</td>'+ 
'                              <td>170</td>'+ 
'                              <td><em>205</em></td>'+ 
'                              <td><i>155</i></td>'+ 
'                          </tr>'+ 
'                          <tr>'+ 
'                              <td><strong>??1550</strong></td>'+ 
'                              <td>133</td>'+ 
'                              <td>205</td>'+ 
'                              <td>230</td>'+ 
'                              <td><i>155</i></td>'+ 
'                          </tr>'+ 
'                          <tr>'+ 
'                              <td><strong>??1750</strong></td>'+ 
'                              <td><i>155</i></td>'+ 
'                              <td>205</td>'+ 
'                              <td>230</td>'+ 
'                              <td><i>155</i></td>'+ 
'                          </tr>'+ 
'                          <tr>'+ 
'                              <td><strong>??2150</strong><strong></strong></td>'+ 
'                              <td><i>155</i><em></em></td>'+ 
'                              <td>205</td>'+ 
'                              <td>230</td>'+ 
'                              <td>170</td>'+ 
'                          </tr>'+ 
'                          <tr>'+ 
'                              <td><strong>??2350</strong></td>'+ 
'                              <td><i>155</i></td>'+ 
'                              <td>205</td>'+ 
'                              <td>230</td>'+ 
'                              <td>205</td>'+ 
'                          </tr>'+ 
'                          <tr>'+ 
'                              <td><strong>??2450</strong></td>'+ 
'                              <td><i>170</i></td>'+ 
'                              <td>205</td>'+ 
'                              <td>230</td>'+ 
'                              <td>205</td>'+ 
'                          </tr>'+ 
'                          <tr>'+ 
'                              <td><strong>??2499</strong></td>'+ 
'                              <td><i>170</i></td>'+ 
'                              <td>230</td>'+ 
'                              <td>230</td>'+ 
'                              <td>205</td>'+ 
'                          </tr>'+ 
'                          <tr>'+ 
'                              <td><strong>??2750</strong></td>'+ 
'                              <td><i>170</i></td>'+ 
'                              <td>230</td>'+ 
'                              <td>--</td>'+ 
'                              <td>205</td>'+ 
'                          </tr>'+ 
'                          <tr>'+ 
'                              <td><strong>??2899</strong></td>'+ 
'                              <td><em>205</em></td>'+ 
'                              <td>230</td>'+ 
'                              <td>--</td>'+ 
'                              <td>205</td>'+ 
'                          </tr>'+ 
'                          <tr>'+ 
'                              <td><strong>??3099</strong></td>'+ 
'                              <td><i>205</i></td>'+ 
'                              <td><i>230</i></td>'+ 
'                              <td>--</td>'+ 
'                              <td><i>--</i></td>'+ 
'                          </tr>'+ 
'                      </tbody>'+ 
'                  </table>'+ 
'              </div>'+ 
'  '+ 
'          </div>'+ 
'      </div>'+ 
'  </div>'+ 
'  <div class="eg-lames">'+ 
'      <div class="container-bob">'+ 
'          <div class="row">'+ 
'  '+ 
'              <h4>Les types de lames</h4>'+ 
'  '+ 
'              <div class="eg_lames_container">'+ 
'                  <div class="eg_lames_type">'+ 
'                      <img data-src="https://clic-volet.fr/img/cms/Configs/Visio/Description/mini/lame_pvc40-1-min.jpg" alt="" class=" lazyloaded" src="https://clic-volet.fr/img/cms/Configs/Visio/Description/mini/lame_pvc40-1-min.jpg"> <!-- top and bottom'+ 
'                      , border will be added -->'+ 
'                      <div class="eg_descs">Lame en PVC</div>'+ 
'                      <span>Lame PVC-40</span>'+ 
'                      <div class="eg_lames_para">Adapt??e aux faibles r??servations<br>Lame extrud??e en PVC<br>Lame bomb??e et ajour??e<br>Masse : 3kg/m2</div>'+ 
'                  </div>'+ 
'  '+ 
'                  <div class="eg_lames_type">'+ 
'                      <img data-src="https://clic-volet.fr/img/cms/Configs/Visio/Description/mini/lame_alu_px39-min.jpg" alt="" class=" lazyloaded" src="https://clic-volet.fr/img/cms/Configs/Visio/Description/mini/lame_alu_px39-min.jpg"> <!-- top and bottom'+ 
'                      , border will be added -->'+ 
'                      <div class="eg_descs">Lame en??Aluminium</div>'+ 
'                      <span>Lame Aluminium px-39</span>'+ 
'                      <div class="eg_lames_para">Adapt??e aux faibles r??servations<br>Lame bomb??e et ajour??e<br>Masse : 2.7kg/m2<br>Densit?? mousse : 90Kg/m2</div>'+ 
'                  </div>'+ 
'  '+ 
'                  <div class="eg_lames_type">'+ 
'                      <img data-src="https://clic-volet.fr/img/cms/Configs/Visio/Description/mini/lame_alu_px55-min.jpg" alt="" class=" lazyloaded" src="https://clic-volet.fr/img/cms/Configs/Visio/Description/mini/lame_alu_px55-min.jpg">'+ 
'                      <div class="eg_descs">Lame en??Aluminium</div>'+ 
'                      <span>Lame Aluminium PX-55</span>'+ 
'                      <div class="eg_lames_para">Sp??cifique pour les grandes largeurs motoris??es<br>Lame bomb??e<br>Masse : 3.8kg/m2<br>Densit?? mousse : 70Kg/m2</div>'+ 
'                  </div>'+ 
'  '+ 
'                  <div class="eg_lames_type">'+ 
'                      <img data-src="https://clic-volet.fr/img/cms/Configs/Visio/Description/mini/lame_alu_px40-min.jpg" alt="" class=" lazyloaded" src="https://clic-volet.fr/img/cms/Configs/Visio/Description/mini/lame_alu_px40-min.jpg">'+ 
'                      <div class="eg_descs">Lame en??Aluminium</div>'+ 
'                      <span>Lame Aluminium PX-40</span>'+ 
'                      <div class="eg_lames_para">Profil identique en ext??rieur et int??rieur<br>Lame plate<br>Masse : 3.3kg/m2<br>Densit?? mousse : 90Kg/m2</div>'+ 
'                  </div>'+ 
'              </div>'+ 
'  '+ 
'          </div>'+ 
'      </div>'+ 
'  </div>'+ 
'  <div class="eg-volet">'+ 
'      <div class="container-bob">'+ 
'          <div class="row">'+ 
'  '+ 
'              <h4>Le corps du volet</h4>'+ 
'  '+ 
'              <div class="eg_volet_Container">'+ 
'                  <div class="eg_volet_content">'+ 
'  '+ 
'                      <div class="eg_volet_img">'+ 
'                          <img data-src="https://clic-volet.fr/img/cms/Configs/Visio/Description/mini/blocage-lateral-min.jpg" alt="" class=" lazyloaded" src="https://clic-volet.fr/img/cms/Configs/Visio/Description/mini/blocage-lateral-min.jpg">'+ 
'                      </div>'+ 
'                      <h3 class="eg_volet_title">Blocage lat??ral int??gr??</h3>'+ 
'                      <div class="eg_volet_desc">'+ 
'                          Fini les volets qui se mettent de travers ! Le blocage lat??ral int??gr?? op??re un pincement de la lame sup??rieure et permet ?? vos volets de se maintenir droits, parfaitement int??gr??s, et de rester bien align??s.'+ 
'                      </div>'+ 
'                  </div>'+ 
'  '+ 
'                  <div class="eg_volet_content">'+ 
'                      <div class="eg_volet_img">'+ 
'                          <img data-src="https://clic-volet.fr/img/cms/Configs/Visio/Description/mini/attache-min.jpg" alt="" class=" lazyloaded" src="https://clic-volet.fr/img/cms/Configs/Visio/Description/mini/attache-min.jpg">'+ 
'                      </div>'+ 
'                      <h3 class="eg_volet_title">Attaches rigides</h3>'+ 
'                      <div class="eg_volet_desc">'+ 
'                          Les attaches rigides supportent les tabliers les plus lourds. Elles bloquent toute tentative de relevage forc?? depuis l\'ext??rieur. Enfin, elles arr??tent automatiquement la remont??e du volet.'+ 
'                      </div>'+ 
'                  </div>'+ 
'  '+ 
'                  <div class="eg_volet_content">'+ 
'                      <div class="eg_volet_img">'+ 
'                          <img data-src="https://clic-volet.fr/img/cms/Configs/Visio/Description/mini/lame-finale-2-min.jpg" alt="" class=" lazyloaded" src="https://clic-volet.fr/img/cms/Configs/Visio/Description/mini/lame-finale-2-min.jpg">'+ 
'                      </div>'+ 
'                      <h3 class="eg_volet_title">Lame finale encastr??e</h3>'+ 
'                      <div class="eg_volet_desc">'+ 
'                          La lame finale du volet est recourb??e vers l???int??rieur.<br>Une fois le volet remont??, cette lame finale disparait totalement dans le caisson. Vous b??n??ficiez donc de plus de lumi??re, d\'un encastrement parfait et d\'une finition'+ 
'                          impeccable.'+ 
'                      </div>'+ 
'                  </div>'+ 
'              </div>'+ 
'  '+ 
'          </div>'+ 
'      </div>'+ 
'  </div>'+ 
'  <div class="eg-coulisses">'+ 
'      <div class="container-bob">'+ 
'          <div class="row">'+ 
'  '+ 
'              <h4>Les types de coulisses</h4>'+ 
'  '+ 
'              <div class="eg_coulisses_Container">'+ 
'                  <div class="eg_coulisses_content">'+ 
'  '+ 
'                      <div class="eg_coulisses_img">'+ 
'                          <img data-src="https://clic-volet.fr/img/cms/Configs/Visio/Description/coulisses_standard.jpg" alt="" class=" lazyloaded" src="https://clic-volet.fr/img/cms/Configs/Visio/Description/coulisses_standard.jpg">'+ 
'                      </div>'+ 
'                      <h3 class="eg_coulisses_title">Coulisse standard</h3>'+ 
'                      <p>Pr??conis??e dans la plupart des installations.<br>Pour les lames suivantes : <br>Alu PX39 / Alu PX40 / PVC 40</p>'+ 
'                  </div>'+ 
'  '+ 
'                  <div class="eg_coulisses_content">'+ 
'                      <div class="eg_coulisses_img">'+ 
'                          <img data-src="https://clic-volet.fr/img/cms/Configs/Visio/Description/coulisse_c63.jpg" alt="" class=" lazyloaded" src="https://clic-volet.fr/img/cms/Configs/Visio/Description/coulisse_c63.jpg">'+ 
'                      </div>'+ 
'                      <h3 class="eg_coulisses_title">Coulisse C63</h3>'+ 
'                      <p>Pr??conis??e pour les grandes installations.<br>Id??ale avec notamment la lame Aluminium PX-55</p>'+ 
'                  </div>'+ 
'  '+ 
'                  <div class="eg_coulisses_content">'+ 
'                      <div class="eg_coulisses_img">'+ 
'                          <img data-src="https://clic-volet.fr/img/cms/Configs/Visio/Description/coulisse_a_l.jpg" alt="" class=" lazyloaded" src="https://clic-volet.fr/img/cms/Configs/Visio/Description/coulisse_a_l.jpg">'+ 
'                      </div>'+ 
'                      <h3 class="eg_coulisses_title">Coulisse ?? L</h3>'+ 
'                      <p>Pr??conis??e pour les volets en pose sous linteau avec coffre int??rieur<br>Elle permet de percer plus loin du coin de la ma??onnerie, et de ne pas abimer les bordures du mur.</p>'+ 
'                  </div>'+ 
'              </div>'+ 
'  '+ 
'          </div>'+ 
'      </div>'+ 
'  </div>'+ 
'  <div class="eg-moteurs">'+ 
'      <div class="container-bob">'+ 
'          <div class="row">'+ 
'  '+ 
'              <h4>Les types de moteurs</h4>'+ 
'  '+ 
'              <div class="eg_moteurs_Container">'+ 
'  '+ 
'                  <div class="eg_left_moteurs">'+ 
'                      <h4>Les motorisations Somfy</h4>'+ 
'                      <div class="eg_list_item_left">'+ 
'                          <ul>'+ 
'                              <li>'+ 
'                                  <span class="eg-icon"><i class="fa fa-check"></i></span>'+ 
'                                  <div class="eg-moteurs-text">'+ 
'                                      Moteurs les plus vendus du march??'+ 
'                                  </div>'+ 
'                              </li>'+ 
'  '+ 
'                              <li>'+ 
'                                  <span class="eg-icon"><i class="fa fa-check"></i></span>'+ 
'                                  <div class="eg-moteurs-text">'+ 
'                                      Moteurs compatibles avec la plupart des installations et solutions domotiques'+ 
'                                  </div>'+ 
'                              </li>'+ 
'  '+ 
'                              <li>'+ 
'                                  <span class="eg-icon"><i class="fa fa-check"></i></span>'+ 
'                                  <div class="eg-moteurs-text">'+ 
'                                      Motorisations garanties 5 ans'+ 
'                                  </div>'+ 
'                              </li>'+ 
'                          </ul>'+ 
'                      </div>'+ 
'  '+ 
'                      <div class="eg_moteurs_images">'+ 
'                          <div class="eg_moImg_container">'+ 
'                              <img data-src="https://clic-volet.fr/img/cms/Configs/Visio/Description/moteur_somfy.jpg" alt="" class=" lazyloaded" src="https://clic-volet.fr/img/cms/Configs/Visio/Description/moteur_somfy.jpg">'+ 
'                          </div>'+ 
'                          <div class="eg_moImg_container">'+ 
'                              <img data-src="https://clic-volet.fr/img/cms/marques/Aucun espace interne/somfy.png" alt="" class=" lazyloaded" src="https://clic-volet.fr/img/cms/marques/Aucun espace interne/somfy.png">'+ 
'                          </div>'+ 
'                      </div>'+ 
'                  </div>'+ 
'  '+ 
'                  <div class="eg_right_moteurs">'+ 
'                      <h4>Les motorisations Profalux</h4>'+ 
'  '+ 
'                      <div class="eg_list_item_right">'+ 
'                          <ul>'+ 
'                              <li>'+ 
'                                  <span class="eg-icon"><i class="fa fa-check"></i></span>'+ 
'                                  <div class="eg-moteurs-text">'+ 
'                                      Moteurs de la marque constructeur du volet roulant'+ 
'                                  </div>'+ 
'                              </li>'+ 
'  '+ 
'                              <li>'+ 
'                                  <span class="eg-icon"><i class="fa fa-check"></i></span>'+ 
'                                  <div class="eg-moteurs-text">'+ 
'                                      Moteurs radios compatibles Zigbee'+ 
'                                  </div>'+ 
'                              </li>'+ 
'  '+ 
'                              <li>'+ 
'                                  <span class="eg-icon"><i class="fa fa-check"></i></span>'+ 
'                                  <div class="eg-moteurs-text">'+ 
'                                      Motorisations garanties 7 ans'+ 
'                                  </div>'+ 
'                              </li>'+ 
'                          </ul>'+ 
'                      </div>'+ 
'  '+ 
'                      <div class="eg_moteurs_images">'+ 
'                          <div class="eg_moImg_container">'+ 
'                              <img data-src="https://clic-volet.fr/img/cms/Configs/Visio/Description/mini/moteur_profalux-min.jpg" alt="" class=" lazyloaded" src="https://clic-volet.fr/img/cms/Configs/Visio/Description/mini/moteur_profalux-min.jpg">'+ 
'                          </div>'+ 
'                          <div class="eg_moImg_container">'+ 
'                              <img data-src="https://clic-volet.fr/img/cms/marques/Aucun espace interne/profalux.png" alt="" class=" lazyloaded" src="https://clic-volet.fr/img/cms/marques/Aucun espace interne/profalux.png">'+ 
'                          </div>'+ 
'                      </div>'+ 
'  '+ 
'                  </div>'+ 
'  '+ 
'              </div>'+ 
'  '+ 
'          </div>'+ 
'      </div>'+ 
'  </div>'+ 
'  <div class="eg-moteurs">'+ 
'      <div class="container-bob">'+ 
'          <div class="row">'+ 
'              <div class="eg_default_container">'+ 
'                  <div class="eg_default_content_left">'+ 
'                      <h4>Moteurs filaires</h4>'+ 
'                      <div class="eg_default_left">'+ 
'                          <ul>'+ 
'                              <li>'+ 
'                                  <span class="eg-icon"><i class="fa fa-check"></i></span>'+ 
'                                  <div class="eg-default-text">'+ 
'                                      Motorisations adapt??es aux petits budgets, plus ??conome'+ 
'                                  </div>'+ 
'                              </li>'+ 
'  '+ 
'                              <li>'+ 
'                                  <span class="eg-icon"><i class="fa fa-check"></i></span>'+ 
'                                  <div class="eg-default-text">'+ 
'                                      livr??s avec interrupteur standard (encastr?? ou en applique, au choix)'+ 
'                                  </div>'+ 
'                              </li>'+ 
'  '+ 
'                              <li>'+ 
'                                  <span class="eg-icon"><i class="fa fa-check"></i></span>'+ 
'                                  <div class="eg-default-text">'+ 
'                                      Deux choix de motorisation : Somfy ou Profalux'+ 
'                                  </div>'+ 
'                              </li>'+ 
'                          </ul>'+ 
'                      </div>'+ 
'                  </div>'+ 
'  '+ 
'                  <div class="eg_default_content_center">'+ 
'                      <h4>Moteurs radio</h4>'+ 
'                      <div class="eg_default_center">'+ 
'                          <ul>'+ 
'                              <li>'+ 
'                                  <span class="eg-icon"><i class="fa fa-check"></i></span>'+ 
'                                  <div class="eg-default-text">'+ 
'                                      Utilisation plus confortable qu\'un moteur filaire via l\'??metteur'+ 
'                                  </div>'+ 
'                              </li>'+ 
'  '+ 
'                              <li>'+ 
'                                  <span class="eg-icon"><i class="fa fa-check"></i></span>'+ 
'                                  <div class="eg-default-text">'+ 
'                                      Installation ??lectrique plus simple : pas de saign??e d\'interrupteur'+ 
'                                  </div>'+ 
'                              </li>'+ 
'  '+ 
'                              <li>'+ 
'                                  <span class="eg-icon"><i class="fa fa-check"></i></span>'+ 
'                                  <div class="eg-default-text">'+ 
'                                      Moteurs compatibles avec les box domotiques'+ 
'                                  </div>'+ 
'                              </li>'+ 
'                          </ul>'+ 
'                      </div>'+ 
'                  </div>'+ 
'  '+ 
'                  <div class="eg_default_content_right">'+ 
'  '+ 
'                      <div class="eg_heading_default">'+ 
'                          <div class="headings">'+ 
'                              <h4>Moteurs Smart</h4>'+ 
'                              <h4>Somfy RS100 IO</h4>'+ 
'                          </div>'+ 
'                          <div class="imageDef">'+ 
'                              <img data-src="https://clic-volet.fr/img/cms/Configs/Visio/Description/best-seller.png" alt="" class=" lazyloaded" src="https://clic-volet.fr/img/cms/Configs/Visio/Description/best-seller.png">'+ 
'                          </div>'+ 
'                      </div>'+ 
'  '+ 
'                      <div class="eg_default_right">'+ 
'                          <ul>'+ 
'                              <li>'+ 
'                                  <span class="eg-icon"><i class="fa fa-check"></i></span>'+ 
'                                  <div class="eg-default-text">'+ 
'                                      Moteurs intelligents et silencieux de derni??re g??n??ration Somfy'+ 
'                                  </div>'+ 
'                              </li>'+ 
'  '+ 
'                              <li>'+ 
'                                  <span class="eg-icon"><i class="fa fa-check"></i></span>'+ 
'                                  <div class="eg-default-text">'+ 
'                                      D??tection d\'obstacle, double vitesse et position favorite automatique'+ 
'                                  </div>'+ 
'                              </li>'+ 
'  '+ 
'                              <li>'+ 
'                                  <span class="eg-icon"><i class="fa fa-check"></i></span>'+ 
'                                  <div class="eg-default-text">'+ 
'                                      Compatible avec les solutions domotiques'+ 
'                                  </div>'+ 
'                              </li>'+ 
'                          </ul>'+ 
'                      </div>'+ 
'                  </div>'+ 
'  '+ 
'              </div>'+ 
'  '+ 
'          </div>'+ 
'      </div>'+ 
'  </div>'+ 
'  <h4 class="eg_tile">Les commandes domotiques</h4>'+ 
'  <div class="eg-solution">'+ 
'      <div class="container-bob">'+ 
'          <div class="row">'+ 
'  '+ 
'              <div class="eg_solution_container">'+ 
'  '+ 
'                  <div class="eg_formal">'+ 
'                      <h3 class="eg_advanced-title-solution">Solution globale</h3>'+ 
'                      <span>Tahoma Switch<br>'+ 
'  				Box domotique Somfy</span>'+ 
'                      <div class="eg_img_solution">'+ 
'                          <img data-src="https://clic-volet.fr/img/cms/marques/Aucun espace interne/somfy.png" alt="" class=" lazyloaded" src="https://clic-volet.fr/img/cms/marques/Aucun espace interne/somfy.png">'+ 
'                      </div>'+ 
'                  </div>'+ 
'                  <div class="eg_formal_description">'+ 
'                      La box domotique Tahoma Switch permet??le contr??le centralis??, en local ou ?? distance, de tous les ??quipements connect??s de la maison.<br>Exemple : depuis un ordinateur, un smartphone ou une tablette, il est possible d\'ouvrir la'+ 
'                      porte de la maison ?? vos enfants s\'ils ont oubli?? leurs cl??s'+ 
'                  </div>'+ 
'              </div>'+ 
'  '+ 
'              <div class="eg_solution_container_innr">'+ 
'                  <div class="eg_solution_innr_left">'+ 
'                      <div class="eg_solution_img_left">'+ 
'                          <img data-src="https://clic-volet.fr/img/cms/Configs/Visio/Description/mini/tahoma-switch-2-min.jpg" alt="accessoire volet roulant sur mesure" class=" lazyloaded" src="https://clic-volet.fr/img/cms/Configs/Visio/Description/mini/tahoma-switch-2-min.jpg">'+
'					   </div>'+ 
'                      <p>Compatible Siri et toutes plateformes???</p>'+ 
'  '+ 
'                      <div class="eg_solution_img_bottom">'+ 
'                          <img data-src="https://clic-volet.fr/img/cms/Guide/Domotique/works-with-alexa.jpg" alt="iDiamant with Netatmo - Avec Amazon Alexa" class=" lazyloaded eg_first_img" src="https://clic-volet.fr/img/cms/Guide/Domotique/works-with-alexa.jpg">'+ 
'  '+ 
'                          <img data-src="https://clic-volet.fr/img/cms/Guide/Domotique/works-with-apple-homekit.jpg" alt="iDiamant with Netatmo avec Apple Homekit" class=" lazyloaded eg_second_img" src="https://clic-volet.fr/img/cms/Guide/Domotique/works-with-apple-homekit.jpg">'+ 
'  '+ 
'                          <img data-src="https://clic-volet.fr/img/cms/Guide/Domotique/works-with-hey-google.jpg" alt="iDiamant with Netatmo - Avec Ok Google !" class=" lazyloaded eg_third_img" src="https://clic-volet.fr/img/cms/Guide/Domotique/works-with-hey-google.jpg">'+ 
'                      </div>'+ 
'  '+ 
'                  </div>'+ 
'  '+ 
'                  <div class="eg_solution_innr_right">'+ 
'                      <ul>'+ 
'                          <li>'+ 
'                              <span class="eg-icon"><i class="fa fa-check"></i></span>'+ 
'                              <div class="eg-solution-text">'+ 
'                                  Centralisez votre logement d???un simple geste !'+ 
'                              </div>'+ 
'                          </li>'+ 
'  '+ 
'                          <li>'+ 
'                              <span class="eg-icon"><i class="fa fa-check"></i></span>'+ 
'                              <div class="eg-solution-text">'+ 
'                                  <div>Solution globale et ??volutive : 1 application pour tous les univers<br>(fen??tre, terrasse, acc??s, chauffage, ??clairage, s??curit?????)</div>'+ 
'                              </div>'+ 
'                          </li>'+ 
'  '+ 
'                          <li>'+ 
'                              <span class="eg-icon"><i class="fa fa-check"></i></span>'+ 
'                              <div class="eg-solution-text">'+ 
'                                  Protocole radio : Multi protocoles : RTS, io, Zigbee3.0 (??clairage uniquement) <br>'+ 
'                                  <img class=" lazyloaded" data-src="https://clic-volet.fr/img/cms/Guide/Domotique/domotique-somfy-radio-tahoma.jpg" width="333" height="50" src="https://clic-volet.fr/img/cms/Guide/Domotique/domotique-somfy-radio-tahoma.jpg">'+ 
'                              </div>'+ 
'                          </li>'+ 
'  '+ 
'                          <li>'+ 
'                              <span class="eg-icon"><i class="fa fa-check"></i></span>'+ 
'                              <div class="eg-solution-text">'+ 
'                                  Pilotage : Multi devices : smartphone et tablette'+ 
'                              </div>'+ 
'                          </li>'+ 
'  '+ 
'                          <li>'+ 
'                              <span class="eg-icon"><i class="fa fa-check"></i></span>'+ 
'                              <div class="eg-solution-text">'+ 
'                                  Nombre d\'??quipements : 200'+ 
'                              </div>'+ 
'                          </li>'+ 
'  '+ 
'                          <li>'+ 
'                              <span class="eg-icon"><i class="fa fa-check"></i></span>'+ 
'                              <div class="eg-solution-text">'+ 
'                                  Nombre de sc??narios : 40 sc??narios d\'usage'+ 
'                              </div>'+ 
'                          </li>'+ 
'  '+ 
'                          <li>'+ 
'                              <span class="eg-icon"><i class="fa fa-check"></i></span>'+ 
'                              <div class="eg-solution-text">'+ 
'                                  Nombre d\'automatismes : 40 automatismes (horloges, capteurs et d??tecteurs)'+ 
'                              </div>'+ 
'                          </li>'+ 
'                      </ul>'+ 
'                  </div>'+ 
'              </div>'+ 
'          </div>'+ 
'      </div>'+ 
'  </div>'+ 
'  <div class="eg-Calypshome">'+ 
'      <div class="container-bob">'+ 
'          <div class="row">'+ 
'              <div class="eg_wrpper_last">'+ 
'                  <div class="eg_Calypshome_container">'+ 
'                      <div class="eg_left_Calypshome">'+ 
'                          <h3>La Box Calypshome</h3>'+ 
'                          <p>Avec la box Calpyshome,??prenez??le contr??le??de votre confort en toute simplicit??. Calyps???HOME fait de votre smartphone une t??l??commande connect??e !</p>'+ 
'                          <div class="eg_left_list_Calypshome">'+ 
'                              <ul>'+ 
'                                  <li>'+ 
'                                      <span class="eg-icon"><i class="fa fa-check"></i></span>'+ 
'                                      <div class="eg-Calypshome-text">'+ 
'                                          Programmation horaire ou programmation de sc??nario'+ 
'                                      </div>'+ 
'                                  </li>'+ 
'  '+ 
'                                  <li>'+ 
'                                      <span class="eg-icon"><i class="fa fa-check"></i></span>'+ 
'                                      <div class="eg-Calypshome-text">'+ 
'                                          Cr??ation de groupes d?????quipements'+ 
'                                      </div>'+ 
'                                  </li>'+ 
'  '+ 
'                                  <li>'+ 
'                                      <span class="eg-icon"><i class="fa fa-check"></i></span>'+ 
'                                      <div class="eg-Calypshome-text">'+ 
'                                          Gestion ?? distance de vos ??quipements'+ 
'                                      </div>'+ 
'                                  </li>'+ 
'  '+ 
'                                  <li>'+ 
'                                      <span class="eg-icon"><i class="fa fa-check"></i></span>'+ 
'                                      <div class="eg-Calypshome-text">'+ 
'                                          Simulation de pr??sence'+ 
'                                      </div>'+ 
'                                  </li>'+ 
'  '+ 
'                                  <li>'+ 
'                                      <span class="eg-icon"><i class="fa fa-check"></i></span>'+ 
'                                      <div class="eg-Calypshome-text">'+ 
'                                          Gestion ?? distance depuis votre smartphone'+ 
'                                      </div>'+ 
'                                  </li>'+ 
'                              </ul>'+ 
'  '+ 
'                          </div>'+ 
'  '+ 
'                          <p class="eg_Calypshome_end">Contr??lez l???ensemble de vos ??quipements Profalux via votre smartphone : <em>volets roulants, brise-soleil orientables, porte de garage, portail, stores, lumi??res</em></p>'+ 
'                      </div>'+ 
'  '+ 
'                      <div class="eg_right_Calypshome">'+ 
'                          <div class="eg_Calypshome_img">'+ 
'                              <img data-src="https://clic-volet.fr/img/cms/Configs/Visio/Description/mini/calpyshome-min.jpg" alt="" class=" lazyloaded" src="https://clic-volet.fr/img/cms/Configs/Visio/Description/mini/calpyshome-min.jpg">'+ 
'                          </div>'+ 
'                      </div>'+ 
'                  </div>'+ 
'  '+ 
'                  <div class="eg_zoe_container">'+ 
'  '+ 
'                      <div class="eg_left_zoe">'+ 
'                          <div class="eg_zoe_img">'+ 
'                              <img data-src="https://clic-volet.fr/img/cms/Configs/Visio/Description/mini/commande-zoe-min.jpg" alt="" class=" lazyloaded" src="https://clic-volet.fr/img/cms/Configs/Visio/Description/mini/commande-zoe-min.jpg">'+ 
'                          </div>'+ 
'                      </div>'+ 
'  '+ 
'                      <div class="eg_right_zoe">'+ 
'                          <h3>La Commande g??n??rale Zo??</h3>'+ 
'                          <p>La nouvelle t??l??commande Zo??, vous offre un design ??pur?? qui s???int??gre parfaitement dans votre int??rieur, un ??cran couleur, une simplicit?? d???utilisation, un fonctionnement intuitif et la garantie que tous vos ordres ont ??t?? pris'+ 
'                              en compte.</p>'+ 
'  '+ 
'                          <div class="eg_right_list_zoe">'+ 
'                              <ul>'+ 
'                                  <li>'+ 
'                                      <span class="eg-icon"><i class="fa fa-check"></i></span>'+ 
'                                      <div class="eg-zoe-text">'+ 
'                                          Retour d\'information : la certitude que tout est ferm??'+ 
'                                      </div>'+ 
'                                  </li>'+ 
'  '+ 
'                                  <li>'+ 
'                                      <span class="eg-icon"><i class="fa fa-check"></i></span>'+ 
'                                      <div class="eg-zoe-text">'+ 
'                                          La simulation de pr??sence'+ 
'                                      </div>'+ 
'                                  </li>'+ 
'  '+ 
'                                  <li>'+ 
'                                      <span class="eg-icon"><i class="fa fa-check"></i></span>'+ 
'                                      <div class="eg-zoe-text">'+ 
'                                          Economies d\'??nergie : ??t?? comme hiver'+ 
'                                      </div>'+ 
'                                  </li>'+ 
'  '+ 
'                                  <li>'+ 
'                                      <span class="eg-icon"><i class="fa fa-check"></i></span>'+ 
'                                      <div class="eg-zoe-text">'+ 
'                                          Compl??tement personnalisable'+ 
'                                      </div>'+ 
'                                  </li>'+ 
'  '+ 
'                                  <li>'+ 
'                                      <span class="eg-icon"><i class="fa fa-check"></i></span>'+ 
'                                      <div class="eg-zoe-text">'+ 
'                                          Commande manuelle ou programm??e'+ 
'                                      </div>'+ 
'                                  </li>'+ 
'  '+ 
'                                  <li>'+ 
'                                      <span class="eg-icon"><i class="fa fa-check"></i></span>'+ 
'                                      <div class="eg-zoe-text">'+ 
'                                          S??curit?? accrue : Anti-parasitage et anti-piratage'+ 
'                                      </div>'+ 
'                                  </li>'+ 
'                              </ul>'+ 
'  '+ 
'                          </div>'+ 
'                      </div>'+ 
'  '+ 
'                  </div>'+ 
'              </div>'+ 
'          </div>'+ 
'      </div>'+ 
'  </div>';

		function init() {
		
			document.querySelector('.catalog-product-view-configurateur-widgets').insertAdjacentHTML('beforebegin', egNewSection);
			
		}

		
		/* Initialise variation */
		waitForElement(".catalog-product-view-configurateur-widgets", init, 50, 15000);
	} catch (e) {
		if (debug) console.log(e, "error in Test" + variation_name);
	}
})();
