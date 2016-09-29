(function(){


  "use strict"

  // navigation scroll/swing code you can customize it . see documentation for furhter details

  $(".scroll").on('click', function(event){
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

  // services section hover effect / changes color on hover look further documentation for the help

  $('.servicesItem').on('mouseenter',function(){
    $(this).children().css({
      'color':'#fff'
    });
  });
  $('.servicesItem').on('mouseleave',function(){
    $(this).children().css({
      'color':'#2e2e2e'
    });
  });

  // this will change image on every single container

  $('#design').on('mouseenter',function(){
    $(this).children('img').attr('src','assets/services/1White.png');
  });
  $('#design').on('mouseleave',function(){
    $(this).children('img').attr('src','assets/services/1.png');
  });
  $('#development').on('mouseenter',function(){
    $(this).children('img').attr('src','assets/services/2White.png');
  });
  $('#development').on('mouseleave',function(){
    $(this).children('img').attr('src','assets/services/2.png');
  });
  $('#printing').on('mouseenter',function(){
    $(this).children('img').attr('src','assets/services/3White.png');
  });
  $('#printing').on('mouseleave',function(){
    $(this).children('img').attr('src','assets/services/3.png');
  });
  $('#perfection').on('mouseenter',function(){
    $(this).children('img').attr('src','assets/services/4White.png');
  });
  $('#perfection').on('mouseleave',function(){
    $(this).children('img').attr('src','assets/services/4.png');
  });
  $('#maintainence').on('mouseenter',function(){
    $(this).children('img').attr('src','assets/services/5White.png');
  });
  $('#maintainence').on('mouseleave',function(){
    $(this).children('img').attr('src','assets/services/5.png');
  });
  $('#internet').on('mouseenter',function(){
    $(this).children('img').attr('src','assets/services/6White.png');
  });
  $('#internet').on('mouseleave',function(){
    $(this).children('img').attr('src','assets/services/6.png');
  });
  

  // navigation of portfolio section

  $('.portfolio ul li a').on('click',function(e){
      e.preventDefault();
    $(this).parent().addClass("activeClassNavigation").siblings().removeClass("activeClassNavigation");
  });

  // portfolio section mixItUp see documentation for further information

  $('#Container').mixItUp();

  // custom active switcher of portfolio menu line 349 index.html

  $('.portfolioMenu li').on('click',function(e){
    e.preventDefault();
    $(this).addClass('activePortfolioMenuItem').siblings().removeClass('activePortfolioMenuItem');
  }); 

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

  // google maps

  google.maps.event.addDomListener(window, 'load', init);
  function init() {
      var mapOptions = {
          // How zoomed in you want the map to start at
          zoom: 14,

          // The latitude and longitude to center the map
          center: new google.maps.LatLng(40.6700, -73.9400), // New York

          // How you would like to style the map. 
          // This is where you would paste any style found on Snazzy Maps.
          styles:[
  {
      "featureType": "water",
      "elementType": "geometry",
      "stylers": [
          {
              "color": "#e9e9e9"
          },
          {
              "lightness": 17
          }
      ]
  },
  {
      "featureType": "landscape",
      "elementType": "geometry",
      "stylers": [
          {
              "color": "#f5f5f5"
          },
          {
              "lightness": 20
          }
      ]
  },
  {
      "featureType": "road.highway",
      "elementType": "geometry.fill",
      "stylers": [
          {
              "color": "#ffffff"
          },
          {
              "lightness": 17
          }
      ]
  },
  {
      "featureType": "road.highway",
      "elementType": "geometry.stroke",
      "stylers": [
          {
              "color": "#ffffff"
          },
          {
              "lightness": 29
          },
          {
              "weight": 0.2
          }
      ]
  },
  {
      "featureType": "road.arterial",
      "elementType": "geometry",
      "stylers": [
          {
              "color": "#ffffff"
          },
          {
              "lightness": 18
          }
      ]
  },
  {
      "featureType": "road.local",
      "elementType": "geometry",
      "stylers": [
          {
              "color": "#ffffff"
          },
          {
              "lightness": 16
          }
      ]
  },
  {
      "featureType": "poi",
      "elementType": "geometry",
      "stylers": [
          {
              "color": "#f5f5f5"
          },
          {
              "lightness": 21
          }
      ]
  },
  {
      "featureType": "poi.park",
      "elementType": "geometry",
      "stylers": [
          {
              "color": "#dedede"
          },
          {
              "lightness": 21
          }
      ]
  },
  {
      "elementType": "labels.text.stroke",
      "stylers": [
          {
              "visibility": "on"
          },
          {
              "color": "#ffffff"
          },
          {
              "lightness": 16
          }
      ]
  },
  {
      "elementType": "labels.text.fill",
      "stylers": [
          {
              "saturation": 36
          },
          {
              "color": "#333333"
          },
          {
              "lightness": 40
          }
      ]
  },
  {
      "elementType": "labels.icon",
      "stylers": [
          {
              "visibility": "off"
          }
      ]
  },
  {
      "featureType": "transit",
      "elementType": "geometry",
      "stylers": [
          {
              "color": "#f2f2f2"
          },
          {
              "lightness": 19
          }
      ]
  },
  {
      "featureType": "administrative",
      "elementType": "geometry.fill",
      "stylers": [
          {
              "color": "#fefefe"
          },
          {
              "lightness": 20
          }
      ]
  },
  {
      "featureType": "administrative",
      "elementType": "geometry.stroke",
      "stylers": [
          {
              "color": "#fefefe"
          },
          {
              "lightness": 17
          },
          {
              "weight": 1.2
          }
      ]
  }
]
        };

        // Get the HTML DOM element that will contain your map 
        // We are using a div with id="map" seen below in the <body>
        var mapElement = document.getElementById('map');

        // Create the Google Map using our element and options defined above
        var map = new google.maps.Map(mapElement, mapOptions);

        // Let's also add a marker while we're at it
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(40.6700, -73.9400),
            map: map,
            title: 'Snazzy!'
        });
    }


// end google maps


})();