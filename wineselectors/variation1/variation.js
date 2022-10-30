/* CUSTOM CODE */
(function () {
  try {
    var debug = 0;
    var variation_name = '';

    var customizedHTML = `<div class="col tile most-popular-collections customised-collections"  style="max-width:100%;">
        <div class="flip-container" style="min-height: 540px;">
          <div class="flipper">
            <div class="front" style="min-height: 540px;">
              <img src="https://images.wineselectors.com.au/media/wineselectors/WinePlan/3251-CDR-Landing_1920-x-500-Organic.jpg" alt=""><div class="tile-icon" style="background-image:url('https://images.wineselectors.com.au/media/wineselectors/wineplan/release-icon-regional.png');"></div>
              <div class="product-info" style="background-color: rgb(131 11 44 / 10%);"><p>Mixed, Reds or Whites</p><p>Delivers every 4 weeks</p><p>Tasting notes</p></div><div class="description" data-mh="wp-d" style="height: 180px;"><br><p>Travel through a different Australian wine region in every delivery, tasting the tried and true varieties and exciting new discoveries.</p>
      </div><div class="price-bar"><p><small>From</small><sup> $</sup>107<small>&nbsp; / 6 Pack</small></p></div>
              <div class="sale"><p>20% off RRP</p></div>
              
              
              <a class="view-more-button" onclick="location.href='showcase-wine-plans'">View More</a>
            </div>
            <div class="back" style="min-height: 540px;">
              <div class="tile-icon" style="background-image:url('https://images.wineselectors.com.au/media/wineselectors/wineplan/release-icon-regional.png');"></div>
              <p class="info-text">Choose from one of the Pre-made Cases below.</p>
              <div class="tile regional">
                <div class="cdr-price-bar prices-3">
                  
                    <div class="price-col" data-mh="wp-cdr-price" style="height: 0px;">
        <div class="type-label">Mixed</div>
        <div class="count-icon count-6 ">
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot"></div>
          
        </div>
        <div class="price"><sup>$</sup>110.00<small> / 6 Pack</small></div>
        <div class="cta">
          <a href="/wine-plans/standard-plans/regional-cellar-door-release-6-pack/regional-release-welcome-mixed-6-pack-owpm-09" class="button button-small ">More</a>
        </div>
      </div><div class="price-col" data-mh="wp-cdr-price" style="height: 0px;">
        <div class="type-label">Red</div>
        <div class="count-icon count-6 ">
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot"></div>
          
        </div>
        <div class="price"><sup>$</sup>110.00<small> / 6 Pack</small></div>
        <div class="cta">
          <a href="/wine-plans/standard-plans/regional-cellar-door-release-6-pack/regional-release-welcome-red-6-pack-owpr-08" class="button button-small ">More</a>
        </div>
      </div><div class="price-col" data-mh="wp-cdr-price" style="height: 0px;">
        <div class="type-label">White</div>
        <div class="count-icon count-6 ">
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot"></div>
          
        </div>
        <div class="price"><sup>$</sup>107.00<small> / 6 Pack</small></div>
        <div class="cta">
          <a href="/wine-plans/standard-plans/regional-cellar-door-release-6-pack/regional-release-welcome-white-6-pack-owpw-08" class="button button-small ">More</a>
        </div>
      </div>
                  
                  <a class="opt-back" onclick="flipCard(event);">Back</a>
                  
                </div>
              </div>
            </div>
          </div>
        </div> 
      </div>`;

    var assests = [
      {
        img: 'https://images.wineselectors.com.au/media/wineselectors/wineplan/2974ct-cdr-release-regional-plus-landing-page.jpg',
      },
      {
        img: 'https://images.wineselectors.com.au/media/vwo/vineyard-subspage.jpg',
      },
      {
        img: 'https://images.wineselectors.com.au/media/vwo/waiter-pouring-wine-subspage.jpg',
      },
      {
        img: 'https://images.wineselectors.com.au/media/wineselectors/wineplan/3301ct-top-banner-1920x500-opt-2.jpg',
      },
      {
        img: 'https://images.wineselectors.com.au/media/wineselectors/WinePlan/3251-CDR-Landing_1920-x-500-TOA.jpg',
      },
      {
        img: 'https://images.wineselectors.com.au/media/wineselectors/WinePlan/3251-CDR-Landing_1920-x-500-Organic.jpg',
      },
      {
        img: 'https://images.wineselectors.com.au/media/wineselectors/WinePlan/3251-CDR-Landing_1920-x-500-Organic.jpg',
      },
      {
        img: 'https://images.wineselectors.com.au/media/wineselectors/WinePlan/3251-CDR-Landing_1920-x-500-Organic.jpg',
      },
      {
        img: 'https://images.wineselectors.com.au/media/wineselectors/WinePlan/3251-CDR-Landing_1920-x-500-Organic.jpg',
      },
      {
        img: 'https://images.wineselectors.com.au/media/wineselectors/WinePlan/3251-CDR-Landing_1920-x-500-Sparkling.jpg',
      },
      {
        img: 'https://images.wineselectors.com.au/media/wineselectors/WinePlan/3251-CDR-Landing_1920-x-500-Winemakers.jpg',
      },
      {
        img: 'https://images.wineselectors.com.au/media/wineselectors/WinePlan/3251-CDR-Landing_1920-x-500-Winemakers.jpg',
      },
      {
        img: 'https://images.wineselectors.com.au/media/wineselectors/WinePlan/3251-CDR-Landing_1920-x-500-Chairmans.jpg',
      },
      {
        img: 'https://images.wineselectors.com.au/media/wineselectors/wineplan/tailor made/1860ct-landing-page-banner-tailormade.jpg',
      },
      {
        img: 'https://images.wineselectors.com.au/media/wineselectors/wineplan/tailor made/1860ct-landing-page-banner-tailormade.jpg',
      },
    ];

    function waitForElement(selector, trigger, delayInterval, delayTimeout) {
      var interval = setInterval(function () {
        if (document && document.querySelector(selector) && document.querySelectorAll(selector).length > 0) {
          clearInterval(interval);
          trigger();
        }
      }, delayInterval);
      setTimeout(function () {
        clearInterval(interval);
      }, delayTimeout);
    }

    var egHero =
      '' +
      '  <div class="eg-hero-banner">' +
      '  <div class="eg-hero-inr">' +
      '      <div class="eg-hero-content">' +
      '      <div class="eg-hero-text">' +
      '          <h2 class="hero-heading">UNBOX. DISCOVER. ENJOY.</h2>' +
      '          <p class="hero-para">Experience new flavours and discover your next favourite Australian wine with one of our exclusive wine subscriptions, pre-selected or customised to suit you.</p>' +
      '      </div>' +
      '      <div class="eg-hero-img">' +
      '       <img src="https://images.wineselectors.com.au/media/vwo/wine-bottles-subspage.png" alt="wine-bottles">' +
      '      </div>' +
      '      </div>' +
      '      </div>' +
      '  </div>';

    var egVideoSection =
      '' +
      '  <div class="eg-filter-section">' +
      '     <div class="eg-filter-section-inr">' +
      '     <h2 class="text-center eg-filter-heading">OUR MOST POPULAR COLLECTIONS</h2>' +
      '     <p class="text-center eg-filter-subheading">Tried and true, these subscriptions are sure to impress.</p>' +
      '       <div class="eg-filter-container">' +
      '         <p class="filter-text">Filter</p>' +
      '  <div class="spSelect-container eg-collection" tabindex="0">' +
      '      <div class="spSelect-label">' +
      '          <div class="spSelect-label-text">Price, low to high</div>' +
      '          <div class="spIconSelect up">' +
      '              <div class="i-angle-up"></div>' +
      '          </div>' +
      '          <div class="spIconSelect down">' +
      '              <div class="i-angle-down"></div>' +
      '          </div>' +
      '      </div>' +
      '      <div class="spSelect-options-container" style="max-height: 1000px; display: none;">' +
      '          <div class="spSelect-option selected" data-value="/wine-shop/red-wines?sortby=price_lh" data-index="0">Price, low to high</div>' +
      '          <div class="spSelect-option" data-value="/wine-shop/red-wines?sortby=price_hl" data-index="1">Price, high to low' +
      '          </div>' +
      '          <div class="spSelect-option" data-value="/wine-shop/red-wines?sortby=name" data-index="2">Name, a to z</div>' +
      '          <div class="spSelect-option" data-value="/wine-shop/red-wines?sortby=name_d" data-index="3">Name, z to a</div>' +
      '          <div class="spSelect-option" data-value="/wine-shop/red-wines?sortby=variety" data-index="4">Variety, a to z' +
      '          </div>' +
      '      </div>' +
      '  </div>' +
      '  <div class="spSelect-container eg-category" tabindex="0">' +
      '      <div class="spSelect-label">' +
      '          <div class="spSelect-label-text">Price, low to high</div>' +
      '          <div class="spIconSelect up">' +
      '              <div class="i-angle-up"></div>' +
      '          </div>' +
      '          <div class="spIconSelect down">' +
      '              <div class="i-angle-down"></div>' +
      '          </div>' +
      '      </div>' +
      '      <div class="spSelect-options-container" style="max-height: 1000px; display: none;">' +
      '          <div class="spSelect-option selected" data-value="/wine-shop/red-wines?sortby=price_lh" data-index="0">Price, low to high</div>' +
      '          <div class="spSelect-option" data-value="/wine-shop/red-wines?sortby=price_hl" data-index="1">Price, high to low' +
      '          </div>' +
      '          <div class="spSelect-option" data-value="/wine-shop/red-wines?sortby=name" data-index="2">Name, a to z</div>' +
      '          <div class="spSelect-option" data-value="/wine-shop/red-wines?sortby=name_d" data-index="3">Name, z to a</div>' +
      '          <div class="spSelect-option" data-value="/wine-shop/red-wines?sortby=variety" data-index="4">Variety, a to z' +
      '          </div>' +
      '      </div>' +
      '  </div>' +
      '       </div>' +
      '     </div>' +
      '  </div>' +
      '  <div class="eg-video-section">' +
      '      <div class="eg-video-section-inr">' +
      '      <div class="eg-video-container">' +
      '          <iframe src="https://player.vimeo.com/video/755401883?h=f8a9bb716c&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;" title="3292CT Brand Awareness Ad 1200x628.mp4"></iframe>' +
      '      </div>' +
      '      </div>' +
      '  </div>' +
      '  <div class="eg-subscription-section">' +
      '      <div class="eg-subscription-inr">' +
      '          <div class="eg-sub-left">' +
      '              <h2 class="eg-sub-heading">Your subscription is So much more than just a box of wine</h2>' +
      '          </div>' +
      '          <div class="eg-sub-right">' +
      '              <p class="eg-sub-heading">What’s in the box?</p>' +
      '              <ul class="eg-sub-list">' +
      '                  <li>Tasting notes with every delivery</li>' +
      '                  <li>Exclusive Invitations to Member Events</li>' +
      '                  <li>At least 20% of RRP on Dozens</li>' +
      '                  <li>Award-winning Selector magazine</li>' +
      '                  <li>Yearly Food and Wine Calendar</li>' +
      '                  <li>Welcome Pack</li>' +
      '                  <li>Member Discounts at wineries, restaurants and more</li>' +
      '                  <li>100% flexibility and satisfaction guarantee</li>' +
      '                  <li>Australian wine selected by expert Tasting Panel</li>' +
      '              </ul>' +
      '             <p class="expend-view">+ View more benefits </p>' +
      '              <a href="https://www.wineselectors.com.au/wine-plans/member-benefits" class="eg-sub-link">Members benefits <svg xmlns="http://www.w3.org/2000/svg" width="8" height="10" viewBox="0 0 8 10" fill="none">' +
      '<path d="M0.5 1L4.49997 4.99997L0.5 8.99993" stroke="#B00A2C"></path>' +
      '<path d="M3.08789 1L7.08786 4.99997L3.08789 8.99993" stroke="#B00A2C"></path>' +
      '</svg></a>' +
      '          </div>' +
      '      </div>' +
      '  </div>' +
      '  <div class="eg-faq-section">' +
      '      <div class="eg-faq-inr">' +
      '  <div class="faq-set">' +
      '      <h2 style="text-align: center">Frequently Asked Questions</h2>' +
      '  ' +
      '      <div class="accordion" data-allow-multiple="1">' +
      '  ' +
      '          <div class="item">' +
      '              <div class="header">' +
      '                  <b>Q. What is an Entertainer’s Wine Subscription?</b>' +
      '                  <div class="icon-container">' +
      '                      <span class="icon up i-angle-up"></span>' +
      '                      <span class="icon down i-angle-down"></span>' +
      '                  </div>' +
      '              </div>' +
      '              <div class="copy" style="display: none;">' +
      '                  <div class="inner">' +
      '                      A.' +
      '                      <p>Our Entertainer’s Wine Subscription is ideal for all occasions and all tastes and includes wines that are great to share, pair well with food and selected to enjoy now with friends, released every 4 weeks. Whether you are entertaining' +
      "                          friends or enjoying a quiet night in, Entertainers' Wine Subscriptions are perfect for those who want everyday drinking wines without compromising on quality or regional integrity.</p>" +
      '  ' +
      '                  </div>' +
      '              </div>' +
      '          </div>' +
      '  ' +
      '          <div class="item">' +
      '              <div class="header">' +
      '                  <b>Q. What are the benefits?</b>' +
      '                  <div class="icon-container">' +
      '                      <span class="icon up i-angle-up"></span>' +
      '                      <span class="icon down i-angle-down"></span>' +
      '                  </div>' +
      '              </div>' +
      '              <div class="copy">' +
      '                  <div class="inner">' +
      '                      A.' +
      '                      <p>Your deliveries will feature wines from Australia’s major wine producers as well as top boutique labels, plus you’ll have access to hundreds of hard-to-get wines you won’t find anywhere but at cellar doors. You will benefit of incredible' +
      '                          savings with a minimum of 20% off bottle RRP. In addition to your wine you will also receive extensive tasting notes to learn more about the wines, wineries and mouth-watering food matches – and you will be able to access many' +
      '                          other exciting <a href="http://www.wineselectors.com.au/wine-plans/member-benefits">Member Benefits</a>!</p>' +
      '  ' +
      '                  </div>' +
      '              </div>' +
      '          </div>' +
      '  ' +
      '          <div class="item">' +
      '              <div class="header">' +
      '                  <b>Q. What’s included in my membership?</b>' +
      '                  <div class="icon-container">' +
      '                      <span class="icon up i-angle-up"></span>' +
      '                      <span class="icon down i-angle-down"></span>' +
      '                  </div>' +
      '              </div>' +
      '              <div class="copy">' +
      '                  <div class="inner">' +
      '                      A.' +
      '                      <p>As a Member, you’ll receive up to six (6) free Selector Magazine copies in your wine deliveries and one (1) copy of our exclusive Food and Wine Matching Calendar each year. You will get exclusive access to many amazing deals across' +
      '                          Australia and will be invited to meet great Australian winemakers, discover exciting new wines and dine out with celebrity chefs at our Member Events. All this for only $22 a year!</p>' +
      '  ' +
      '                  </div>' +
      '              </div>' +
      '          </div>' +
      '  ' +
      '          <div class="item">' +
      '              <div class="header">' +
      '                  <b>Q. What mix of wines will I receive?</b>' +
      '                  <div class="icon-container">' +
      '                      <span class="icon up i-angle-up"></span>' +
      '                      <span class="icon down i-angle-down"></span>' +
      '                  </div>' +
      '              </div>' +
      '              <div class="copy">' +
      '                  <div class="inner">' +
      '                      A.' +
      '                      <p>With a selection of over 3,000 wines of over 500 Australian wineries, we will present you with a unique tasting experience in every delivery. You will be enjoying a great diversity of wines and explore Australia’s most interesting' +
      '                          wines of iconic regional cellar doors and fresh new talents in the wine making industry.</p>' +
      '  ' +
      '                  </div>' +
      '              </div>' +
      '          </div>' +
      '  ' +
      '          <div class="item">' +
      '              <div class="header">' +
      '                  <b>Q. Can I change the frequency of my delivery?</b>' +
      '                  <div class="icon-container">' +
      '                      <span class="icon up i-angle-up"></span>' +
      '                      <span class="icon down i-angle-down"></span>' +
      '                  </div>' +
      '              </div>' +
      '              <div class="copy">' +
      '                  <div class="inner">' +
      '                      A.' +
      '                      <p>The frequency of our Wine Subscriptions can be customised to suit your needs. You are also free to skip or hold a delivery at any time. To make a change to your customized delivery, give our Customer Service Team a call on 1300 303' +
      '                          307, 9am–6pm, Monday to Friday.</p>' +
      '  ' +
      '                  </div>' +
      '              </div>' +
      '          </div>' +
      '  ' +
      '          <div class="item">' +
      '              <div class="header">' +
      '                  <b>Q. How do I change my wine style preferences?</b>' +
      '                  <div class="icon-container">' +
      '                      <span class="icon up i-angle-up"></span>' +
      '                      <span class="icon down i-angle-down"></span>' +
      '                  </div>' +
      '              </div>' +
      '              <div class="copy">' +
      '                  <div class="inner">' +
      '                      A.' +
      '                      <p>To change your varietal preference, give our Customer Service Team a call on 1300 303 307, 9am–6pm, Monday to Friday.</p>' +
      '  ' +
      '                  </div>' +
      '              </div>' +
      '          </div>' +
      '  ' +
      '          <div class="item">' +
      '              <div class="header">' +
      '                  <b>Q. Can I manage my Wine Subscriptions online?</b>' +
      '                  <div class="icon-container">' +
      '                      <span class="icon up i-angle-up"></span>' +
      '                      <span class="icon down i-angle-down"></span>' +
      '                  </div>' +
      '              </div>' +
      '              <div class="copy">' +
      '                  <div class="inner">' +
      '                      A.' +
      '                      <p>You can view your regular wine delivery program online, however, if you wish to change your varietal preference, or alter your contact details, please call our Customer Service Team on 1300 303 307. Please note, changing you wine preferences' +
      '                          in your online account does NOT update your deliveries.</p>' +
      '  ' +
      '                  </div>' +
      '              </div>' +
      '          </div>' +
      '  ' +
      '          <div class="item">' +
      '              <div class="header">' +
      '                  <b>Q. How do I cancel my membership?</b>' +
      '                  <div class="icon-container">' +
      '                      <span class="icon up i-angle-up"></span>' +
      '                      <span class="icon down i-angle-down"></span>' +
      '                  </div>' +
      '              </div>' +
      '              <div class="copy">' +
      '                  <div class="inner">' +
      '                      A.' +
      '                      <p>Our Entertainer’s Wine Subscription is completely flexible. If you are unable to take a delivery, let us know at your earliest convenience. There is no financial catch if you decide to skip or stop your deliveries. To cease, make a' +
      '                          change or customise your delivery, give our Customer Service Team a call on 1300 303 307, 9am–6pm, Monday to Friday.</p>' +
      '  ' +
      '                  </div>' +
      '              </div>' +
      '          </div>' +
      '  ' +
      '      </div>' +
      '  ' +
      '  ' +
      '  </div>' +
      '  </div>' +
      '  </div>' +
      '<div class="eg-form-section">' +
      '  <div class="eg-form-inr">' +
      '     <div class="eg-form-left">' +
      '       <img src="https://images.wineselectors.com.au/media/wineselectors/wineplan/makers1.jpg" alt="makers1">' +
      '     </div>' +
      '     <div class="eg-form-right">' +
      '     </div>' +
      '  </div>' +
      '</div>';

    var egHowitWorks =
      '' +
      '  <div class="eg-how-it-work">' +
      '      <div class="eg-how-it-work-inr">' +
      '          <div class="eg-left-section">' +
      '              <img src="https://images.wineselectors.com.au/media/wineselectors/wineplan/makers1.jpg" alt="makers1">' +
      '          </div>' +
      '          <div class="eg-right-section">' +
      '              <h2>HOW DOES IT WORK?</h2>' +
      '              <P>Our tasting panel handpicks wines from over 500 Australian wineries, and creates exclusive collections, delivered to your door with at least 20% off RRP on dozens. </P>' +
      '  ' +
      '              <ol>' +
      '                  <li><b>Select your subscription</b> - from the popular Regional, the Top Shelf Chairman’s, or your own Customised creation, find your perfect case.</li>' +
      '                  <li><b>Choose your delivery frequency</b> – and we’ll do the rest. You can always adjust to more or less later. </li>' +
      '                  <li><b>Unbox your wines!</b> Discover the stories, the flavours and exclusive member benefits you now have access to. And enjoy!</li>' +
      '              </ol>' +
      '          </div>' +
      '      </div>' +
      '  </div>';

    // .wine-plans .plan-tiles .row .col.sparkling
    // .wine-plans .plan-tiles .row .col.entertainer
    // .wine-plans .plan-tiles .row .col.winemaker

    function init() {
      var html = `
      <h2 class="text-center eg-filter-heading">OUR MOST POPULAR COLLECTIONS</h2>
      <p class="text-center eg-filter-subheading">Tried and true, these subscriptions are sure to impress.</p>
        <div class="wine-filter">
          <div class="wine-first-row">
            <h3>Filter: </h3>
            <div class="wine-filter-collection">
                <select style="display: none;">
                    <option value="">Category</option>
                    <option value="most-popular-collections">Most Popular Collections</option>
                    <option value="regional-collections">Regional Collections</option>
                    <option value="organic-collections">Organic Collections</option>
                    <option value="celebratory-collections">Celebratory Collections</option>
                    <option value="varietal-collections">Varietal Collections</option>
                    <option value="connoisseur-collections">Connoisseur Collections</option>
                    <option value="customised-collection">Customised Collection</option>
                </select>
                <div class="wine-dropdown-wrapper">
                  <div class="wine-dropdown-value">Most Popular Collections <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"> <rect width="18" height="18" rx="9" fill="#F2F2F2"/> <path d="M6.45033 7L9.00033 9.47467L11.5503 7L12.3337 7.76533L9.00033 11L5.66699 7.76533L6.45033 7Z" fill="#830B2C"/> </svg></div>
                  <div class="wine-dropdown">
                    <div value="">Category</div>
                    <div value="most-popular-collections">Most Popular Collections</div>
                    <div value="regional-collections">Regional Collections</div>
                    <div value="organic-collections">Organic Collections</div>
                    <div value="celebratory-collections">Celebratory Collections</div>
                    <div value="varietal-collections">Varietal Collections</div>
                    <div value="connoisseur-collections">Connoisseur Collections</div>
                    <div value="customised-collection">Customised Collection</div>
                  </div>
                </div>
            </div>
            <div class="wine-filter-category">
                <select>
                    <option value="">Category</option>
                    <option value="red">Red</option>
                    <option value="white">White</option>
                    <option value="mixed">Mixed</option>
                </select>
            </div>
          </div>
          <div class="wine-second-row">
            <div class="wine-fitler-name wine-filter-collection-name"><span>Most Popular</span><button data-for="wine-filter-collection">X</button></div>
            <div class="wine-fitler-name wine-filter-category-name"><span>Red</span><button data-for="wine-filter-category">X</button></div>
            <button class="wine-filter-clear">Clear All Filter</button>
          </div>
        </div>
      `;

      document.querySelector('.new-banner + .wine-plans > .wrapper:first-child').insertAdjacentHTML('afterbegin', html);

      document
        .querySelector('html body .regDiscoveries')
        .insertAdjacentHTML('afterend', '<button class="wine-show-more">See all subscriptions</button>');

      document.querySelector('body .wine-show-more').addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector('.wine-filter-collection select').value = '';
        document.querySelector('.wine-filter-category select').value = '';
        var event = new Event('change');
        document.querySelector('.wine-filter-category select').dispatchEvent(event);
        document.querySelector('.wine-filter-collection select').dispatchEvent(event);
        document.body.classList.add('win-clearAll');
      });

      document.querySelector('.wine-second-row .wine-filter-clear').addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector('.wine-filter-collection select').value = '';
        document.querySelector('.wine-filter-category select').value = '';
        var event = new Event('change');
        document.querySelector('.wine-filter-category select').dispatchEvent(event);
        document.querySelector('.wine-filter-collection select').dispatchEvent(event);
        document.body.classList.add('win-clearAll');
      });

      document.querySelectorAll('.wine-fitler-name button').forEach(function (item, index) {
        item.addEventListener('click', function (e) {
          e.preventDefault();
          document.querySelector('.' + this.getAttribute('data-for') + ' select').value = '';
          var event = new Event('change');
          document.querySelector('.' + this.getAttribute('data-for') + ' select').dispatchEvent(event);
        });
      });

      document.querySelector('.wine-dropdown-wrapper .wine-dropdown-value').addEventListener('click', function () {
        this.classList.toggle('open');
      });

      document.querySelectorAll('.wine-dropdown-wrapper .wine-dropdown > div').forEach(function (item, index) {
        item.addEventListener('click', function () {
          if (!this.classList.contains('active')) {
            document.querySelector('.wine-dropdown-wrapper .wine-dropdown > div.active') &&
              document.querySelector('.wine-dropdown-wrapper .wine-dropdown > div.active').classList.remove('active');
            this.classList.add('active');
            document.querySelector('.wine-dropdown-wrapper .wine-dropdown-value').classList.remove('open');
            document.querySelector('.wine-filter-collection select').value = this.getAttribute('value');
            document.querySelector('.wine-filter-collection .wine-dropdown-value').firstChild.textContent = this.innerHTML;
            var event = new Event('change');
            document.querySelector('.wine-filter-collection select').dispatchEvent(event);
          }
        });
      });

      document.querySelector('.wine-filter-collection select').addEventListener('change', function () {
        if (this.value.length > 0) {
          document.querySelector('.wine-second-row .wine-filter-collection-name').classList.add('show');
          document.querySelector('.wine-second-row .wine-filter-collection-name span').innerHTML = this.options[this.selectedIndex].text;
          document.querySelector('.wine-dropdown-wrapper .wine-dropdown-value').firstChild.textContent =
            this.options[this.selectedIndex].text;
          var clsName = Array.prototype.slice.call(document.body.classList).filter(function (item) {
            return item.includes('wineCol-');
          });
          if (clsName.length != 0) {
            clsName && document.body.classList.remove(clsName);
          }
          document.body.classList.add('wineCol-' + this.value);
        } else {
          var clsName = Array.prototype.slice.call(document.body.classList).filter(function (item) {
            return item.includes('wineCol-');
          });
          if (clsName.length != 0) {
            document.body.classList.remove(clsName);
          }
          document.querySelector('.wine-second-row .wine-filter-collection-name').classList.remove('show');
        }
        document.body.classList.remove('win-clearAll');
        if (this.value.length == 0) {
          document.body.classList.add('win-clearAll');
        }
      });

      document.querySelector('.wine-filter-category select').addEventListener('change', function () {
        if (this.value.length > 0) {
          document.querySelector('.wine-second-row .wine-filter-category-name').classList.add('show');
          document.querySelector('.wine-second-row .wine-filter-category-name span').innerHTML = this.options[this.selectedIndex].text;
          var clsName = Array.prototype.slice.call(document.body.classList).filter(function (item) {
            return item.includes('wine-');
          });
          if (clsName.length != 0) {
            document.body.classList.remove(clsName);
          }
          document.body.classList.add('wine-' + this.value);
        } else {
          var clsName = Array.prototype.slice.call(document.body.classList).filter(function (item) {
            return item.includes('wine-');
          });
          if (clsName.length != 0) {
            document.body.classList.remove(clsName);
          }
          document.querySelector('.wine-second-row .wine-filter-category-name').classList.remove('show');
        }
        document.body.classList.remove('win-clearAll');
      });

      document.querySelectorAll('.wine-plans .plan-tiles .row .col .front .product-info > p:first-child').forEach(function (item, index) {
        if (item.innerHTML.includes('Mixed')) {
          item.closest('.tile').classList.add('mixed');
        }
        if (item.innerHTML.includes('Reds')) {
          item.closest('.tile').classList.add('red');
        }
        if (item.innerHTML.includes('Whites')) {
          item.closest('.tile').classList.add('white');
        }
      });

      document
        .querySelector('html body .wine-plans .plan-tiles .row > .col.regional:first-child')
        .classList.add('most-popular-collections');

      document.querySelectorAll('.wine-plans .plan-tiles .row .col.tile').forEach(function (item, index) {
        item.querySelector('.tile-icon').insertAdjacentHTML('beforebegin', '<img src="' + assests[index].img + '" alt=""/>');
        item.querySelector('.price-bar').insertAdjacentElement('beforebegin', item.querySelector('.product-info'));
        item.querySelector('.price-bar').insertAdjacentElement('beforebegin', item.querySelector('.description'));

        if (item.classList.contains('entertainer')) {
          item.classList.add('most-popular-collections');
        }
        if (
          item.classList.contains('regional') ||
          item.classList.contains('regionalplus') ||
          item.classList.contains('hunter') ||
          item.classList.contains('australia')
        ) {
          item.classList.add('regional-collections');
        }

        if (item.classList.contains('organic')) {
          item.classList.add('organic-collections');
        }

        if (item.classList.contains('entertainer') || item.classList.contains('sparkling')) {
          item.classList.add('celebratory-collections');
        }

        if (item.classList.contains('varietal')) {
          item.classList.add('varietal-collections');
        }

        if (item.classList.contains('winemaker')) {
          item.classList.add('connoisseur-collections');
        }

        // WRITE CODE HERE TO MAKE THE ELEMENT
        document.querySelector('.wine-plans .regDiscoveries .plan-tiles > .row').insertAdjacentElement('beforeend', item);
      });

      document.querySelector('.regDiscoveries > .plan-tiles > .row').insertAdjacentHTML('beforeend', customizedHTML);

      document.querySelector('.wine-filter-collection select').value = 'most-popular-collections';
      var event = new Event('change');
      document.querySelector('.wine-filter-collection select').dispatchEvent(event);
    }

    function init2() {
      document.querySelector('article > .wrapper').insertAdjacentHTML('beforebegin', egHero);
      document.querySelector('article .new-banner').insertAdjacentHTML('beforebegin', egHowitWorks);

      document.querySelector('article .wine-plans').insertAdjacentHTML('afterend', egVideoSection);

      document
        .querySelector('.eg-form-section .eg-form-right')
        .insertAdjacentElement('beforeend', document.querySelector('.wine-plans > .wrapper:last-child'));

      if (window.innerWidth < 767) {
        document.querySelector('.eg-subscription-inr .eg-sub-list').classList.add('eg-active');
      }
      document.querySelector('.eg-subscription-section .expend-view').addEventListener('click', function () {
        document.querySelector('.eg-subscription-inr .eg-sub-list').classList.toggle('eg-active');
      });

      document.querySelector('.eg-form-section .eg-form-right .wrapper .grid-row input[name*="FirstName"]').placeholder = 'First name ';

      document.querySelector('.eg-form-section .eg-form-right .wrapper .grid-row input[name*="LastName"]').placeholder = 'Last name ';

      document.querySelector('.eg-form-section .eg-form-right .wrapper .grid-row input[name*="Email"]').placeholder = 'Email address ';

      document.querySelector('.eg-form-section .eg-form-right .wrapper .grid-row input[name*="Postcode"]').placeholder = 'Postcode ';

      // document.querySelector('.eg-form-section .eg-form-right .wrapper .grid-row input[name*="MobilePhone"]').placeholder = 'Phone number';

      document.querySelector('.eg-form-section .eg-form-right .wrapper .grid-row .spSelect-label-text').placeholder =
        'Preferred time of call ';

      document.querySelectorAll('.FormPanel label[id]').forEach(function (item, index) {
        item.lastChild.remove();
      });

      document.querySelectorAll('.FormPanel fieldset input').forEach(function (item, index) {
        if (item.value.length > 0) {
          item.closest('fieldset').classList.add('wine-hide-label');
        } else {
          item.closest('fieldset').classList.remove('wine-hide-label');
        }
        item.addEventListener('focus', function () {
          if (this.value.length > 0) {
            this.closest('fieldset').classList.add('wine-hide-label');
          } else {
            this.closest('fieldset').classList.remove('wine-hide-label');
          }
        });
        item.addEventListener('blur', function () {
          if (this.value.length > 0) {
            this.closest('fieldset').classList.add('wine-hide-label');
          } else {
            this.closest('fieldset').classList.remove('wine-hide-label');
          }
        });
        item.addEventListener('keyup', function (e) {
          if (e.target.value.length > 0) {
            this.closest('fieldset').classList.add('wine-hide-label');
          } else {
            this.closest('fieldset').classList.remove('wine-hide-label');
          }
        });
      });

      var carouselHTML = `
        <div class="wine-carousel">
          <div class="col tile" style="max-width:100%;">
          <div class="flip-container" style="min-height: 540px;">
            <div class="flipper">
              <div class="front" style="min-height: 540px;">
                <img src="https://images.wineselectors.com.au/media/wineselectors/wineplan/2974ct-cdr-release-regional-plus-landing-page.jpg" alt=""><div class="tile-icon" style="background-image:url('https://images.wineselectors.com.au/media/wineselectors/wineplan/release-icon-regional.png');"></div>
                <div class="product-info"><p>Mixed, Reds or Whites</p><p>Delivers every 4, 6, 8, 10, or 12 weeks</p><p>Tasting notes</p></div><div class="description" data-mh="wp-d" style="height: 180px;"><br><p><strong style="outline: 0px; -webkit-font-smoothing: antialiased; box-sizing: border-box; font-weight: 700; color: rgb(72, 73, 68); font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size: 14px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-style: initial; text-decoration-color: initial;">Dozen delivery.</strong> Travel through a different Australian wine region in every delivery, tasting the tried and true varieties and exciting new discoveries. Released at a frequency that suits you.</p>
        </div><div class="price-bar"><p><small>From</small><sup> $</sup>206<small>&nbsp; / 12 Pack</small></p></div>
                <div class="sale"><p>20% off RRP</p></div>
                
                
                <a class="view-more-button" onclick="location.href='regional-wine-plans'">View More</a>
              </div>
              <div class="back" style="min-height: 540px;">
                <div class="tile-icon" style="background-image:url('https://images.wineselectors.com.au/media/wineselectors/wineplan/release-icon-regional.png');"></div>
                <p class="info-text">Choose from one of the Pre-made Cases below.</p>
                <div class="tile regional" style="">
                  <div class="cdr-price-bar prices-3">
                    
                      <div class="price-col" data-mh="wp-cdr-price" style="">
          <div class="type-label">Mixed</div>
          <div class="count-icon count-12 ">
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
            
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
            
          </div>
          <div class="price"><sup>$</sup>209.00<small> / 12 Pack</small></div>
          <div class="cta">
            <a href="/wine-plans/standard-plans/regional-releases/regional-release-welcome-mixed-dozen-rwpm-27" class="button button-small ">More</a>
          </div>
        </div><div class="price-col" data-mh="wp-cdr-price" style="">
          <div class="type-label">Red</div>
          <div class="count-icon count-12 ">
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
            
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
            
          </div>
          <div class="price"><sup>$</sup>209.00<small> / 12 Pack</small></div>
          <div class="cta">
            <a href="/wine-plans/standard-plans/regional-releases/regional-release-welcome-red-dozen-rwpr-36" class="button button-small ">More</a>
          </div>
        </div><div class="price-col" data-mh="wp-cdr-price" style="">
          <div class="type-label">White</div>
          <div class="count-icon count-12 ">
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
            
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
            
          </div>
          <div class="price"><sup>$</sup>206.00<small> / 12 Pack</small></div>
          <div class="cta">
            <a href="/wine-plans/standard-plans/regional-releases/regional-release-welcome-white-dozen-rwpw-32" class="button button-small ">More</a>
          </div>
        </div>
                    
                    <a class="opt-back" onclick="flipCard(event);">Back</a>
                    
                  </div>
                </div>
              </div>
            </div>
          </div> 
        </div>
        <div class="col tile" style="max-width:100%;">
          <div class="flip-container" style="min-height: 540px;">
            <div class="flipper">
              <div class="front" style="min-height: 540px;">
                <img src="https://images.wineselectors.com.au/media/wineselectors/WinePlan/3251-CDR-Landing_1920-x-500-Organic.jpg" alt=""><div class="tile-icon" style="background-image:url('https://images.wineselectors.com.au/media/wineselectors/wineplan/release-icon-entertainer.png');"></div>
                <div class="product-info"><p>Mixed, Reds or Whites</p><p>Delivers every 4 weeks</p><p>Tasting notes</p></div><div class="description" data-mh="wp-d" style="height: 180px;"><br><p>Ideal for all occasions and all tastes. Includes wines that are great to share, pair well with food and selected to enjoy now with friends. Released every&nbsp;4 weeks.</p>
        </div><div class="price-bar"><p><small>From</small><sup> $</sup>160<small>&nbsp; / 12 Pack</small></p></div>
                <div class="sale"><p>20% off RRP</p></div>
                
                
                <a class="view-more-button" onclick="location.href='entertainers-wine-plans'">View More</a>
              </div>
              <div class="back" style="min-height: 540px;">
                <div class="tile-icon" style="background-image:url('https://images.wineselectors.com.au/media/wineselectors/wineplan/release-icon-entertainer.png');"></div>
                <p class="info-text">Choose from one of the Pre-made Cases below.</p>
                <div class="tile regional" style="">
                  <div class="cdr-price-bar prices-3">
                    
                      <div class="price-col" data-mh="wp-cdr-price" style="">
          <div class="type-label">Mixed</div>
          <div class="count-icon count-12 ">
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
            
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
            
          </div>
          <div class="price"><sup>$</sup>163.00<small> / 12 Pack</small></div>
          <div class="cta">
            <a href="/wine-plans/standard-plans/entertainers/entertainer-s-release-welcome-mixed-dozen-ewpm-89" class="button button-small ">More</a>
          </div>
        </div><div class="price-col" data-mh="wp-cdr-price" style="">
          <div class="type-label">Red</div>
          <div class="count-icon count-12 ">
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
            
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
            
          </div>
          <div class="price"><sup>$</sup>163.00<small> / 12 Pack</small></div>
          <div class="cta">
            <a href="/wine-plans/standard-plans/entertainers/entertainer-s-release-welcome-red-dozen-ewpr-89" class="button button-small ">More</a>
          </div>
        </div><div class="price-col" data-mh="wp-cdr-price" style="">
          <div class="type-label">White</div>
          <div class="count-icon count-12 ">
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
            
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
            
          </div>
          <div class="price"><sup>$</sup>160.00<small> / 12 Pack</small></div>
          <div class="cta">
            <a href="/wine-plans/standard-plans/entertainers/entertainer-s-release-welcome-white-dozen-ewpw-93" class="button button-small ">More</a>
          </div>
        </div>
                    
                    <a class="opt-back" onclick="flipCard(event);">Back</a>
                    
                  </div>
                </div>
              </div>
            </div>
          </div> 
        </div>
        ${customizedHTML}
        </div>
      `;

      document.querySelector('body .regDiscoveries').insertAdjacentHTML('beforebegin', carouselHTML);

      var waitSlick = setInterval(function () {
        if (window.$ && window.$.fn && window.$.fn.slick) {
          clearInterval(waitSlick);
          window.$('body .wine-carousel').slick({
            dots: true,
            infinite: false,
            slidesToShow: 1.1,
            slidesToScroll: 1,
            arrows: false,
          });
        }
      }, 50);
      setTimeout(function () {
        clearInterval(waitSlick);
      }, 6000);
    }
    /* Initialise variation */
    waitForElement('.wine-plans .plan-tiles .row .col .front .product-info > p:first-child', init, 100, 15000);

    waitForElement('article .wine-plans', init2, 100, 15000);
  } catch (e) {
    if (debug) console.log(e, 'error in Test' + variation_name);
  }
})();
