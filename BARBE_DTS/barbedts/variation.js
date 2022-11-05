
  (function () {
	try {
	  /* main variables */
	  var debug = 0;
	  var variation_name = "";
  
	  /* all Pure helper functions */
  
	  var waitForElement = function(selector, trigger, delayInterval, delayTimeout){
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
  
	  var live = function(selector, event, callback, context) {
		  // helper for enabling IE 8 event bindings
		  function addEvent(el, type, handler) {
			if (el.attachEvent) el.attachEvent("on" + type, handler);
			else el.addEventListener(type, handler);
		  }
		  // matches polyfill
		  this &&
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
  
    var getCookie = function(name) {
      var nameEQ = name + "=";
      var ca = document.cookie.split(';');
      for(var i=0;i < ca.length;i++) {
          var c = ca[i];
          while (c.charAt(0)==' ') c = c.substring(1,c.length);
          if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
      }
      return null;
  }

  var setCookie = function(name,value,days) {
      var expires = "";
      if (days) {
          var date = new Date();
          date.setTime(date.getTime() + (days*24*60*60*1000));
          expires = "; expires=" + date.toUTCString();
      }
      document.cookie = name + "=" + (value || "")  + expires + "; path=/";
  }


  var formPopup =''+ 
  '  <div class="eg-form-popup">'+ 
  '      <div class="eg-form-popup-inr">'+ 
  '          <div class="eg-form-container">'+ 
  '             <span class="eg-form-close">&times;</span>'+
  '             <form method="POST" class="edb-survey gf" id="edb-survey" data-step="1">'+
	'								<div id="step1" class="fg" data-section="1"><label class="fl">Qu\'est-ce qui vous a poussé à acheter sur Barber DTS ?</label><textarea type="text" name="motivation" placeholder="Votre réponse..." rows="4" class="fc"></textarea></div>'+
	'								<div id="step2" class="fg" data-section="2"><label class="fl">Avez-vous considéré d\'autres enseignes avant d\'acheter sur notre site ? Si oui, quelles enseignes ?</label><textarea type="text" name="competition" placeholder="Votre réponse..." rows="4" class="fc"></textarea></div>'+
	'								<div id="step3" class="fg" data-section="3"><label class="fl">Qu\'est-ce qui a failli vous empêcher d\'acheter sur notre site ?</label><textarea type="text" name="objection" placeholder="Votre réponse..." rows="4" class="fc"></textarea></div>'+
	'								<div id="step4" class="fg" data-section="4"><label class="fl">Recherchiez-vous des informations que vous n\'avez pas trouvé sur notre site ?</label><textarea type="text" name="product" placeholder="Votre réponse..." rows="4" class="fc"></textarea></div>'+
	'								<div id="step5" class="fg" data-section="5"><label class="fl">Recommanderiez-vous notre site à vos proches ?</label><label class="flradio"><input type="radio" name="nps" value="1">1</label><label class="flradio"><input type="radio" name="nps" value="2">2</label><label class="flradio"><input type="radio" name="nps" value="3">3</label><label class="flradio"><input type="radio" name="nps" value="4">4</label><label class="flradio"><input type="radio" name="nps" value="5">5</label><label class="flradio"><input type="radio" name="nps" value="6">6</label><label class="flradio"><input type="radio" name="nps" value="7">7</label><label class="flradio"><input type="radio" name="nps" value="8">8</label><label class="flradio"><input type="radio" name="nps" value="9">9</label><label class="flradio"><input type="radio" name="nps" value="10">10</label></div>'+
  '								<div class="edb-action" ><div class="edb-btn" id="previous">Précédent</div><div class="edb-btn" id="next">Suivant</div><button class="edb-btn" id="close" >Terminer</button></div>'+
  '             </form>'+ 
  '             <p class="eg-thanks">Nous vous remercions pour votre participation</p>'+
  '          </div>'+ 
  '      </div>'+ 
  '  </div>';
  

  var offset;
    
  var createSession = function() {
    if(getCookie('firstVisit') == null) {
      setCookie('firstVisit', '1',365);
    }
  }

  var hideForm = function(){
		createSession();
		document.querySelector('.eg-form-popup .eg-thanks').style.display='block';
		   /*setTimeout(function(){
			document.querySelector('.eg-form-popup').remove();
		   },5000);*/
		   
	   }

       var sendData = function(language,motivation,competition,objection,product,checkout,nps){
		var url = "https://script.google.com/macros/s/AKfycbzlkcuQu3jTLZyORHnzOALFQYn7J4it_9pAwy9RSB-caNbvXxd5iQHLTWU3RNMU21FtWQ/exec";
        
		 var XHR = new XMLHttpRequest(),
		 FD = new FormData();
	   // Push our data into our FormData object
	   //FD.append('Email',email);
	   //FD.append('Name',name);
       FD.append('Language',language);
	   FD.append('Motivation',motivation);
	   FD.append('Competition',competition);
	   FD.append('Objection',objection);
	   FD.append('Product',product);
	   FD.append('NPS',nps);
	   XHR.onreadystatechange = function () {
		 if (this.readyState == 4 && this.status == 200) {
		  //console.log('success');
		 
		  document.querySelector('.eg-form-popup form').style.display = "none";
		  hideForm();
		 }
	   };
	   // Set up our request
	   XHR.open('POST', url);
	   // Send our FormData object; HTTP headers are set automatically
	   XHR.send(FD);
	   }

	  var init = function() {
  
		  document.querySelector('body footer').insertAdjacentHTML('afterend', formPopup);
		   
		  live(".eg-form-popup .eg-form-close", "click", function() {
			  createSession();
        document.querySelector('body').classList.add('form-popup-hide');
		  });
		  live('.eg-form-popup button','click',function(e){
			e.preventDefault();
      //var email = document.querySelector('input[type="email"]').value;
			//var name= document.querySelector('input[name="Name"]').value;
            var language = "EN";
			var motivation= document.querySelector('textarea[name="motivation"]').value;
			var competition= document.querySelector('textarea[name="competition"]').value;
			var objection= document.querySelector('textarea[name="objection"]').value;
			var product= document.querySelector('textarea[name="product"]').value;
			var nps;
			var spn= document.querySelector('input[name="nps"]:checked'); console.log(spn);
			if (typeof(spn) != 'undefined' && spn != null) {
				console.log('spn known');
				var nps = spn.value;
			} else {
				console.log('spn unknown, set value');
				var nps = "none";
			}
			console.log(nps);
			sendData(language,motivation,competition,objection,product,checkout,nps);
		  });
	  }

	document.addEventListener('click', function (event) {
	   //console.log("clicked");
	   if(!event.target.matches('.edb-survey #next, .edb-survey #previous')) return;
	   //console.log('matched');
	   var cur = document.querySelector('.edb-survey').getAttribute('data-step'); //console.log('data-step =>', cur);
	   var act = cur;
	   if(event.target.matches('.edb-survey #next')) {
	      var act = parseInt(cur) + 1;
	   } else if (event.target.matches('.edb-survey #previous')) {
	      var act = parseInt(cur) - 1;
	   }
	   //console.log('new step =>', act);
	   document.querySelector('.edb-survey').setAttribute('data-step', act);
	   //console.log('step changed');
   });

	document.addEventListener('click', function (event) {
	   //console.log("clicked");
	   if(!event.target.matches('.flradio')) return;
	   //console.log('matched');
	   var flr = document.querySelectorAll('.flradio');
	   for(f=0;f<flr.length;f++) {
	   	if(flr[f].classList.contains('flradiochecked')) {
	   		flr[f].classList.remove('flradiochecked');
	   	}
	   }
	   event.target.classList.add('flradiochecked');
	   var cur = document.querySelector('.edb-survey').getAttribute('data-step'); //console.log('data-step =>', cur);
	   var act = cur;
	   if(event.target.matches('.edb-survey #next')) {
	      var act = parseInt(cur) + 1;
	   } else if (event.target.matches('.edb-survey #previous')) {
	      var act = parseInt(cur) - 1;
	   }
	   //console.log('new step =>', act);
	   document.querySelector('.edb-survey').setAttribute('data-step', act);
	   //console.log('step changed');
   });


	  /* Initialise variation */
    //if(!getCookie('firstVisit')){
      waitForElement("body footer", init, 100, 25000);
    //}
	} catch (e) {
	  if (debug) console.log(e, "error in Test" + variation_name);
	}
  })();