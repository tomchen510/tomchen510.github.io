Template.games.rendered = function() {
	$('[data-toggle^=tab]').click(function(e) {
	  if (!$(this).children().hasClass('active')) {
	  	$('[data-toggle^=tab]>.game-nav').removeClass('active');
	  	$(this).children().addClass('active');

	  }
	  // e.stopPropagation();
	})
};
Template.games.helpers({
	dWallIsOn: function(){
		if(Meteor.user()){
			return Meteor.user().profile.game.dWall.hasPlayed;
		}
		else{
			return false
		}
	},
	myItems: function(){
		return Meteor.user().profile.game.dWall.items;
	},
	infoTvCode1: function(){
		return Cookie.get("tvcode1");
	},
	infoTvCode2: function(){
		return Cookie.get("tvcode2");
	},
	infoTvCode3: function(){
		return Cookie.get("tvcode3");
	},
	dKeyingCode: function(){
		return Cookie.get("dKeyingCode");
	},
});
Template.games.onCreated = function() {
	Meteor.subscribe('dwalls');

};
Template.games.events({
	// 'click [data-toggle^=tab]':function(event){
	// 	console.log($(event).children());
	// 	if (!$( event.target ).children(".game-nav").hasClass('active')) {
	// 	  	$('[data-toggle^=tab]>.game-nav').removeClass('active');
	// 	  	$( event.target ).children(".game-nav").addClass('active');

	// 	  }
	// },
	
	'keyup input[name="dkeycode"]':function(){
		Cookie.set("dKeyingCode",$('input[name="dkeycode"]').val());
	},
	'keyup input[name="tvcode1"]':function(){
		Cookie.set("tvcode1",$('input[name="tvcode1"]').val());
	},
	'keyup input[name="tvcode2"]':function(){
		Cookie.set("tvcode2",$('input[name="tvcode2"]').val());
	},
	'keyup input[name="tvcode3"]':function(){
		Cookie.set("tvcode3",$('input[name="tvcode3"]').val());
	},
	'keyup #dWallInput':function(event){
		var usrInputText = $('#dWallInput').val();
		if(usrInputText.length===4){
			var which_dwall = Dwalls.findOne({"secret_id": usrInputText});
			if(which_dwall){
				if(which_dwall.isOn){
					$("#enter-info").text("該驗證碼已失效，請再次確認");
				}
				else{
					console.log("secret_id is correct");
					Meteor.call("dwall_usr_input", {
			            usr_id: Meteor.userId(),
			            wall_id: which_dwall._id
			          }, function(err, res){
			            if (err | res===false) {
			              console.log(err);
			              // Cookie.set("dWallCode", false);
			            }
			            else{
			             // Cookie.set("dWallCode", true);
			            }
			            
			          });
				}
				
			}
			else{
				$("#enter-info").text("驗證碼錯誤，請重新輸入");
			}
			

		}
		else if(usrInputText.length>4){
			$("#enter-info").text("驗證碼錯誤，請重新輸入");
		}
	},
	'click #final-count':function(){
		// var playedDwallYet = Meteor.user().profile.game.dWall.score;
		if(Meteor.user().profile.game.dWall.hasPlayed && (Cookie.get("tvcode1")|Cookie.get("tvcode2")|Cookie.get("tvcode3"))){
			console.log(Cookie.get("tvcode1"),Cookie.get("tvcode2"),Cookie.get("tvcode3"));
			Cookie.set("tvcode1","");
			Cookie.set("tvcode2","");
			Cookie.set("tvcode3","");
			Cookie.set("dKeyingCode","");
			
		}
		else{
			$('[data-toggle^=tab]>.game-nav').removeClass('active');
			$('[class^=tab-pane]').removeClass('in active');
			$('#notYetToBeCount').addClass('in active');
		}
		// profile.game.infoTV.score": {$gt: 0}
		// 				});
		// console.log(playedYet);
	}
});
