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
    
//    var arr_a = $('.spe_left_li a')
    

    
    var IsAutoScrolling = false;
     $('.spe_right_form').scroll(function (event) {
//         event.preventDefault();
//        if(!IsAutoScrolling){
////         
//            $('.spe_left_li a.touch').removeClass("touch");
//        }
         
         var scrollPos = $(this).scrollTop();
         $('.spe_left_li a').each(function () {
            var currLink = $(this);
            var refElement = $(currLink.attr("href")+" img");
//            console.log(scrollPos,refElement.position().top,(refElement.position().top + refElement.outerHeight(true)) );
            if (refElement.position().top <10 && (refElement.position().top + refElement.outerHeight()) >= 10) {
                $('.spe_left_li a').removeClass("touch");
                currLink.addClass("touch");
            }
            else{
                currLink.removeClass("touch");
            }
        });
//         console.log("----------");
        
    });
    $(".spe_left_li a[href*='#']").click(function(evn){
        evn.preventDefault();
        
//        $('.spe_left_li a').removeClass("touch");
//        $(this).addClass("touch");      
        
        $('.spe_right_form').scrollTo(this.hash, this.hash); 
    });
    
    
//    var videoUrl = "video/agema.mp4";
//
//  // Just play a video
//  window.plugins.streamingMedia.playVideo(videoUrl);

//  // Play a video with callbacks
//  var options = {
//    successCallback: function() {
//      console.log("Video was closed without error.");
//    },
//    errorCallback: function(errMsg) {
//      console.log("Error! " + errMsg);
//    },
//    orientation: 'landscape'
//  };
//  window.plugins.streamingMedia.playVideo(videoUrl, options);

    
});
$(document).ready(function() {
    $(".fancybox-media").fancybox({
        
    fitToView: false, // to show videos in their own size
    content: '<span></span>', // create temp content
    scrolling: 'no', // don't show scrolling bars in fancybox
    afterLoad: function () {
      // get dimensions from data attributes
      var $width = $(this.element).data('width'); 
      var $height = $(this.element).data('height');
      // replace temp content
      this.content = "<embed src='js/jwplayer.swf?file=" + this.href + "&autostart=true&amp;wmode=opaque' type='application/x-shockwave-flash' width='" + $width + "' height='" + $height + "'></embed>"; 
    }
  });
});
function playVideo(videoUrl){
//      var options = {
//        orientation: 'landscape',
//          initFullscreen: false,
//          bgColor: "#FFFFFF"
//      };
    var path = cordova.file.applicationDirectory + "www"+videoUrl;
    var options = {
        successCallback: function () {
            console.log("Video was closed without error.");
        },
        errorCallback: function (errMsg) {
            console.log("Error! " + errMsg);
        },
        orientation: 'landscape'
    };
    window.plugins.streamingMedia.playVideo(path);
//     window.plugins.streamingMedia.playVideo(videoUrl,options);
}
function fadeTransition(){
        var options = {
          "duration"       :  700, // in milliseconds (ms), default 400
          "iosdelay"       :   50, // ms to wait for the iOS webview to update before animation kicks in, default 60
          "androiddelay"   :  100
            
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
          "direction": "right",
          "fixedPixelsTop"   :  60,
        };
        window.plugins.nativepagetransitions.slide(
          options
//            ,
//          function (msg) {console.log("success: " + msg)}, // called when the animation has finished
//          function (msg) {alert("error: " + msg)} // called in case you pass in weird values
        );
    }
function flipTransition(){
        var options = {
          "duration"       :  600, // in milliseconds (ms), default 400
          "iosdelay"       :   50, // ms to wait for the iOS webview to update before animation kicks in, default 60
          "androiddelay"   :  100,
          "direction": "left",
//          "fixedPixelsTop"   :  60,
        };
        window.plugins.nativepagetransitions.flip(
          options
//            ,
//          function (msg) {console.log("success: " + msg)}, // called when the animation has finished
//          function (msg) {alert("error: " + msg)} // called in case you pass in weird values
        );
    }

