Template.activities.rendered = function() {
  Session.set('activities', '_stage');
};


Template.activities.helpers({
  name: function(){
    return Session.get('activities');
  }
});


Template.activities.events({
  'click .menu li': function(e){
    $('.menu li').removeClass('active');
    $(e.target).addClass('active');
    Session.set('activities', '_'+e.target.classList[0]);
  }
});