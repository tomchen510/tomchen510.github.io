Template.myLogin.helpers({
	// mcd_user_name: function(){
	// 	// console.log(Cookie.get("mcd_name"));
	// 	return Cookie.get("mcd_name");
	// }
});
// Template.myLogin.rendered = function() {
// 	// console.log(Meteor.userId());
// 	// if(Roles.userIsInRole(Meteor.user(), ['player'])){
// 	// 	Meteor.subscribe("userList");
// 	// }
	
// }

Template.myLogin.events({
	'submit .login-form': function (event, template) {
		event.preventDefault();
		$("#sign-info").text(" ");
		var $form = $(event.currentTarget);
	    var $usernameInput = $form.find('.username-input').eq(0);
	    var $passwordInput = $form.find('.password-input').eq(0);

	    var username = $usernameInput.val() || '';
	    var password = $passwordInput.val() || '';
	    console.log(username+","+password);
	    Meteor.loginWithPassword(username, password, function (error) {
	        if (error) {
	          console.log(error);
	          var newUserData = {
		            username: username,
		            password: password,
		            profile: {
		            	phone: password
		            }
		      }
	          Meteor.call('insertUser', newUserData, function(err, res){
	            if (err) {
	              console.log(err);
	              
	            }
	            if(res){
	            	Meteor.loginWithPassword(username, password, function (error) {
	        			if (error) {
	        				console.log(error);
	        			}
	            		Router.go('/games');
	            	});
	            }
	          });
	          
	          // $("#sign-info").text("手機號碼有誤，請重新輸入");
	          // sAlert.error('Account login failed for unknown reasons :('+error);
	        } else {
	        	console.log("Router.go('games')");
	          	Router.go('/games');
	        }
	    });
	    // if(username.length<3){
	    // 	Meteor.call('findUsernameByPhone', {
	    //         	userPhone: password
	    //       	}, function(err, res){
	    //         if (err) {
	    //           console.log(err);
	              
	    //         }
	    //         if(res){
		   //  		console.log(res.userData.username,password);
		   //  		Meteor.loginWithPassword(res.userData.username, password, function (error) {
				 //        if (error) {
				 //          console.log(error);
				 //          $("#sign-info").text("手機號碼有誤，請重新輸入");
				 //          // sAlert.error('Account login failed for unknown reasons :('+error);
				 //        } else {
				 //          Router.go('/');
				 //        }
				 //      });
		   //  	}
		   //  	else{
		   //  		$("#sign-info").text("手機號碼有誤，請重新輸入");
		   //  	}
	            
	    //       });
	    	
	    	
	    // }
	    // else{
	    // 	Meteor.loginWithPassword(username, password, function (error) {
	    //     if (error) {
	    //       console.log(error);
	    //       $("#sign-info").text("手機號碼有誤，請重新輸入");
	    //       // sAlert.error('Account login failed for unknown reasons :('+error);
	    //     } else {
	    //       Router.go('/');
	    //     }
	    //   });
	    // }
	    
	     
	    

	}
});