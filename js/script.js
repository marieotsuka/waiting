$(document).ready(function(){

  var now;
  var stamp; 
  var diff;
  var sum = 0;

  function getTimes(){
    $(".post").each(function(index){
      now = new Date();
      stamp = Date.parse($(".time", this).text());
      var diff = (now - stamp)/5000000;
      $(this).css('transform', 'scale('+(1/diff)+')');
    });
  }

  setInterval(function() {
       getTimes();
  }, 1000);

});
  