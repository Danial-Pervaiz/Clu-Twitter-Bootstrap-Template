(function(){


  "use strict"

  // navigation scroll/swing code you can customize it . see documentation for furhter details

  $(".scroll").on('click',function(event){
       event.preventDefault();
       //calculate destination place
       var dest=0;
       if($(this.hash).offset().top > $(document).height()-$(window).height()){
            dest=$(document).height()-$(window).height();
       }else{
            dest=$(this.hash).offset().top - 50;
       }
       //go to destination
       $('html,body').animate({scrollTop:dest}, 1000,'swing');
  });

  // side bar navigation

  // menu overlay
      
  var menuOpen = $('#openMenu');

  menuOpen.on('click',function(){
    $('.navigationOpenMenu').fadeIn();
    $('.navbar-default').hide();
  });
  $('#closeMenu').on('click',function(){
    $('.navigationOpenMenu').fadeOut();
    $('.navbar-default').show();
  });

  // navigation is hidden by default and gets visible when scroll down the page 

  $('.navbar-default').hide();

  var navigation = $('.header').offset().top + 100;

  $(document).scroll(function(){

    if($(this).scrollTop() > navigation){
    	$('.navbar-default').fadeIn();
    	$('.navbar-default').css({
    		'border-bottom':'1px solid #eee'
    	})
    }  
    else
    {
    	$('.navbar-default').fadeOut();
    } 

  });

  // animate numbers section , the numbers will be animate when it scrolls down to the particular section

  var targetAnimateNumbers = $('#about').offset().top + 500;

  $(document).scroll(function(){

  	if ($(this).scrollTop() > targetAnimateNumbers ) {

  		$('#animateNumber1').animate(  // animate numbers 
        {someValue: 970}, 
        {
        duration: 1000,
        easing:'swing',
        step: function() {
            $('#animateNumber1').text(Math.round(this.someValue));
        }
      });
      $('#animateNumber2').animate(  // animate numbers 
          {someValue: 720}, 
          {
          duration: 1000,
          easing:'swing',
          step: function() {
              $('#animateNumber2').text(Math.round(this.someValue));
          }
      });
      $('#animateNumber3').animate(  // animate numbers 
          {someValue: 450}, 
          {
          duration: 1000,
          easing:'swing',
          step: function() {
              $('#animateNumber3').text(Math.round(this.someValue));
          }
      });
      $('#animateNumber4').animate(  // animate numbers 
          {someValue: 24}, 
          {
          duration: 1000,
          easing:'swing',
          step: function() {
              $('#animateNumber4').text(Math.round(this.someValue));
     	 }

      });
  	}

  });  

  // navigation of portfolio section

  $('.portfolio ul li a').on('click',function(e){
      e.preventDefault();
    $(this).parent().addClass("activeClassNavigation").siblings().removeClass("activeClassNavigation");
  });

  // portfolio section mixItUp see documentation for further information

  $('#Container').mixItUp();

  // magnific pop up for gallery

  $('.parent-container').magnificPopup({
    delegate: 'a', // child items selector, by clicking on it popup will open
    type: 'image'
    // other options
  });
  
  $('.gallery').each(function() { // the containers for all your galleries
      $(this).magnificPopup({
          delegate: 'a', // the selector for gallery item
          type: 'image',
          gallery: {
            enabled:true
          }
      });
  });

  // googleMaps you can customize it from https://snazzymaps.com/

  google.maps.event.addDomListener(window, 'load', init);
      var map;
      function init() {
          var mapOptions = {
              center: new google.maps.LatLng(27.170971,-81.67019),
              zoom: 9,
              zoomControl: true,
              zoomControlOptions: {
                  style: google.maps.ZoomControlStyle.DEFAULT,
              },
              disableDoubleClickZoom: true,
              mapTypeControl: true,
              mapTypeControlOptions: {
                  style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
              },
              scaleControl: true,
              scrollwheel: true,
              panControl: true,
              streetViewControl: true,
              draggable : true,
              overviewMapControl: true,
              overviewMapControlOptions: {
                  opened: false,
              },
              mapTypeId: google.maps.MapTypeId.ROADMAP,
          }
          var mapElement = document.getElementById('mapi');
          var map = new google.maps.Map(mapElement, mapOptions);
          var locations = [

          ];
          for (var i = 0; i < locations.length; i++) {
        if (locations[i][1] =='undefined'){ description ='';} else { description = locations[i][1];}
        if (locations[i][2] =='undefined'){ telephone ='';} else { telephone = locations[i][2];}
        if (locations[i][3] =='undefined'){ email ='';} else { email = locations[i][3];}
             if (locations[i][4] =='undefined'){ web ='';} else { web = locations[i][4];}
             if (locations[i][7] =='undefined'){ markericon ='';} else { markericon = locations[i][7];}
              marker = new google.maps.Marker({
                  icon: markericon,
                  position: new google.maps.LatLng(locations[i][5], locations[i][6]),
                  map: map,
                  title: locations[i][0],
                  desc: description,
                  tel: telephone,
                  email: email,
                  web: web
              });
  link = '';     }

  }

})();