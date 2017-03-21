
$(document).ready(function(){

  var now;
  var stamp; 
  var diff;
  var sum = 0;
  
  $("button").click(function(){
    $("#cover").fadeOut();
  });

  function getTimes(){
      now = new Date();
      
    $(".post").each(function(index){

      stamp = Date.parse($(".time", this).text());

      var diff = (now - stamp)/5000000;
     
      $(this).css('transform', 'scale('+(1/diff)+')');
    });


    $(".bar").each(function(index){
      stamp = Date.parse($(".time", this).text());
      var trans = Math.round((now - stamp)/5000000);
      console.log(trans);
      $(this).css('width', 50*(1/trans) +"px");
    });
  }

  setInterval(function() {
       getTimes();
  }, 1000);

});
  