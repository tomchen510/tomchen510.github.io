$(function() {
    
  $(".carousel").swipe({

      swipe: function(event, direction, distance, duration, fingerCount, fingerData) {
    //    console.log("direction",direction);
        if (direction == 'left') $(this).carousel('next');
        if (direction == 'right') $(this).carousel('prev');

      },
      allowPageScroll:"vertical"

    });
    
//  $('.spe_right_form a').smoothScroll();
//
//  $('.spe_left a[href*="#"]:not([href="#"])').click(function() {
//    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
//      var target = $(this.hash);
//      target = target.length ? target : $("[name='" + this.hash.slice(1) +"']");
//      console.log("target:",target);
//      if (target.length) {
//          console.log(target.offset().top);
//        $('.spe_right_form').stop().animate({
//          scrollTop: target.offset().top
//        }, 1000, 'swing', function () {
//	        window.location.hash = target;
//	    });
//        return false;
//      }
//    }
//  });
    
    $(".spe_left_li a[href*='#']").click(function(evn){
        evn.preventDefault();
//        console.log("scrollTo");
        $('.spe_right_form').scrollTo(this.hash, this.hash); 
    });
    
    
});
function fadeTransition(){
        var options = {
          "duration"       :  500, // in milliseconds (ms), default 400
          "iosdelay"       :   50, // ms to wait for the iOS webview to update before animation kicks in, default 60
          "androiddelay"   :  100,
        };
        window.plugins.nativepagetransitions.fade(
          options
//            ,
//          function (msg) {console.log("success: " + msg)}, // called when the animation has finished
//          function (msg) {alert("error: " + msg)} // called in case you pass in weird values
        );
    }

function slideTransition(){
        var options = {
          "duration"       :  600, // in milliseconds (ms), default 400
          "iosdelay"       :   50, // ms to wait for the iOS webview to update before animation kicks in, default 60
          "androiddelay"   :  100,
          "direction": "left",
          "fixedPixelsTop"   :  54,
        };
        window.plugins.nativepagetransitions.slide(
          options
//            ,
//          function (msg) {console.log("success: " + msg)}, // called when the animation has finished
//          function (msg) {alert("error: " + msg)} // called in case you pass in weird values
        );
    }


