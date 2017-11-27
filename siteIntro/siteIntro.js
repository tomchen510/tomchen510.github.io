Template.siteIntro.rendered = function() {
    Session.set('siteIntro', '_cloud_computing');
};


Template.siteIntro.helpers({
  name: function(){
    return Session.get('siteIntro');
  }
});


Template.siteIntro.events({
  'click .menu li': function(e){
    $('.menu li').removeClass('active');
    $(e.target).addClass('active');
    Session.set('siteIntro', '_'+e.target.classList[0]);
  }
});