var ICON_DATASET = [];

Template.waterfallWall.onCreated(function(){
	ICON_DATASET = [
    	{name: "type1", src: "badge-test-01.png", score: 10},
    	{name: "type2", src: "badge-test-02.png", score: 15},
    	{name: "type3", src: "badge-test-03.png", score: 20},
    ];

});
Template.waterfallWall.rendered = function() {
	//jQuery is required to run this code
	$( document ).ready(function() {

		var svg = d3.select("svg");
	    var circleH = 120, circleW = 120;
	    var svgHeight;
	    var svgWidth = $(window).width();
	    
	    scaleVideoContainer();

	    initBannerVideoSize('.video-container .poster img');
	    initBannerVideoSize('.video-container .filter');
	    initBannerVideoSize('.video-container video');
	    initSvgSize('svg','.video-container video');
	    svgHeight = +svg.attr('height');

	    $(window).on('resize', function() {
	        scaleVideoContainer();
	        scaleBannerVideoSize('.video-container .poster img');
	        scaleBannerVideoSize('.video-container .filter');
	        scaleBannerVideoSize('.video-container video');
	        scaleSvgSize('svg','.video-container video');
	        svgHeight = +svg.attr('height');
	        svgWidth = $(window).width();
	        // scaleBannerVideoSize('svg');
	    });

	    
	    // var svgWidth = svg.attr('width');
	    console.log(svgHeight,svgWidth);
	    var myScore = 0;
	    

	    svg.append("g").attr({
	    	id: "areaDetect"
	    }).append("rect").attr({
	    	x:0,
	    	y:0,
	    	width: svg.attr("width"),
	    	height: svg.attr("height"),
	    	fill: "transparent"
	    });

	    var selection = svg.selectAll("g.icon").data(ICON_DATASET);
	    var gSelection = selection.enter().append("g").classed("icon",true);
	    gSelection.append("image");
	    selection.exit().remove();

	    svg.append("text").attr({
	    	id: "gScore",
	    	x: 40,
	    	y: 100,
	    	"font-size": 80,
	    	fill: "#fff"
	    }).text(0);

	    d3.selectAll("svg>g.icon").each(repeat);

	    function repeat() {
	      var dist = random(1,1.7);
	      var constX = random(circleW/2,svgWidth-circleW/2);
	      d3.select(this).attr({
	      	transform: function(){
	      		return "translate("+
	      		constX+
	      		","+(-circleH-400)+") rotate("+
	      		random(10,60)+")"
	      	},
	      	opacity: 1
	      })
	      .transition()
	      .duration(Math.floor(8000/dist))
	      .delay(function(){
	      	 return 3000+random(0,8000)
	      })
	      .ease("linear")
	      .attr({
	      	transform: function(){
	      		return "translate("+
	      		constX+
	      		","+(circleH+svgHeight)+") rotate("+
	      		random(10,60)+")"
	      	}
	      })
	      .each("end", repeat);

	      d3.select(this).select("image").attr({
	        x: 0,
	    	y: 0,
	    	width: circleW*dist,
	    	height: circleH*dist,
	    	
	    	"xlink:href": function(d){
	    		return "images/waterfall/"+d.src;
	    	}
	      })

	      d3.select(this).on("click",function(d){
	      	// console.log("click")
	      	myScore+=d.score;
	      	d3.select("#gScore").text(myScore)
	      	// console.log(myScore);
	      	d3.select(this).transition()
	      	.duration(500).ease("back").attr({
	      		transform: function(){
		      		return "translate(0,"+(svgHeight-circleH)+")"
		      	},
		      	opacity: 0
	      	}).each("end", repeat);
	      	d3.select(this).select("image").transition()
	      	.duration(500).attr({
	      		width: 80,
	    		height: 80,
	      	});
	      	Meteor.call("addItemToUsr", {
	            content: d 
	          }, function(err, res){
	            if (err) {
	              console.log(err);
	              // Cookie.set("dWallCode", false);
	            }
	            else{
	            	
	            	// Cookie.
	             // Cookie.set("dWallCode", true);
	            }
	            
	          });
	 

	      })
	      
	    }
	    d3.select("#areaDetect").on("click",function(){
	    	console.log("areaDetect");
	    });
	    // d3.selectAll("svg>image").attr({
	    // 	x:"200",
	    // 	y: -circleH,
	    // 	width: circleW,
	    // 	height: circleH,
	    // 	"xlink:href": function(d){
	    // 		return "images/waterfall/"+d.src;
	    // 	}
	    // }).transition().duration(8000).attr({
	    // 	y: circleH+height
	    // });
	});

	function scaleVideoContainer() {

	    var height = $(window).height() + 5;
	    var unitHeight = parseInt(height) + 'px';
	    $('.homepage-hero-module').css('height',unitHeight);
	    // $('svg').attr('height',unitHeight);
	}

	function initBannerVideoSize(element){

	    $(element).each(function(){
	        $(this).data('height', $(this).height());
	        $(this).data('width', $(this).width());
	    });

	    scaleBannerVideoSize(element);

	}
	
	function initSvgSize(element,ref){
	    $(element).attr('height', $(ref).height()+77);
	}
	function scaleSvgSize(element,ref){
		// console.log($(ref).height());
	    $(element).attr('height', $(ref).height());
	}
	function scaleBannerVideoSize(element){

	    var windowWidth = $(window).width(),
	    windowHeight = $(window).height() + 5,
	    videoWidth,
	    videoHeight;

	    // console.log(windowHeight);

	    $(element).each(function(){
	        var videoAspectRatio = $(this).data('height')/$(this).data('width');
	        // console.log($(this).data('height'),$(this).data('width'));

	        $(this).width(windowWidth);

	        // if(windowWidth < 1000){
	        //     videoHeight = windowHeight;
	        //     videoWidth = videoHeight / videoAspectRatio;
	        //     $(this).css({'margin-top' : 0, 'margin-left' : -(videoWidth - windowWidth) / 2 + 'px'});

	        //     $(this).width(videoWidth).height(videoHeight);
	        // }

	        $('.homepage-hero-module .video-container video').addClass('fadeIn animated');

	    });
	}
};
function random(N,M){
	return Math.floor((Math.random()*(M-N+1)+N)*10)/10;
}
