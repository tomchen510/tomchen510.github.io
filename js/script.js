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
    
});