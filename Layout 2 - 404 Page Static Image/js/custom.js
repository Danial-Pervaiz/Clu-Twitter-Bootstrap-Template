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

})();