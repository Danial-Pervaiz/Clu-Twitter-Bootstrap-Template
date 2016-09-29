(function(){


  "use strict"

  $('#animateNumber1').animate(  // animate numbers 
    {someValue: 404}, 
    {
    duration: 1000,
    easing:'swing',
    step: function() {
        $('#animateNumber1').text(Math.round(this.someValue));
    }
  });

  // header section backstretch carousel 
  // image flipper header section (backstrech plugin jquery)

   $(".header").backstretch([
    "assets/header/header2.jpg",
    "assets/header/header3.jpg",
    "assets/header/header4.jpg"
    ], {
      fade: 750,
      duration: 4000
    }); 

})();