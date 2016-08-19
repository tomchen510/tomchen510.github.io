$(document).ready(function() {
	
    $('body').jpreLoader({splashID: "#jSplash",loaderVPos: '41%',autoClose: true}, function() {
        opening();
    });

	$.preload('img/btn_go_hover.gif', 'img/pop_rule_bg.png', 'img/rule1.png', 'img/rule2.png', 'img/rule3.png', 'img/pop_form_bg.png');
	
	
	
	$(".tab_content").hide();
	$("ul.tabs li:first").addClass("active").show();
	$(".tab_content:first").show();
	
	//On Click Event
	$("ul.tabs li").click(function() {
		$("ul.tabs li").removeClass("active"); 
		$(this).addClass("active");
		$(".tab_content").hide(); 
		var activeTab = $(this).find("a").attr("href"); 
		$(activeTab).fadeIn(); 
		return false;
	});
	
	
  $('.btn_rule,.btn_rule2').fancybox({
    width: 665,
    height: 405,
    minWidth  : 665,
    minHeight : 405,
    maxWidth  : 665,
    maxHeight : 405,
    closeBtn  : true,
    padding: 0,
    margin: 0,
    iframe: {
      scrolling: 'no',
      preload: false
    },

	helpers:{
		overlay:{
		closeClick : true
		}
	}
  });
	


	
	
});

function opening(){
		TweenMax.fromTo($('.header .tit'),1.2,{left:-675},{left:0,delay:0,ease:Quint.easeOut});
		TweenMax.fromTo($('.header .kv'),1.5,{right:-910},{right:0,delay:0.5,ease:Quint.easeOut});
		TweenMax.fromTo($('.header .hand'),1,{top:750},{top:410,delay:1.0,ease:Back.easeOut});
		TweenMax.fromTo($('.header .btn_go'),1,{top:480,opacity:0},{top:520,opacity:1,delay:1.3,ease:Back.easeOut});
}

function articleArea(){
     $('html,body').animate({scrollTop:1030},1000);
}


