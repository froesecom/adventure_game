$(function(){
  var step = 1;
  var name;
  

  function intro(){
    $("#adventure_content").text(plot.introText);
  }

  $(".intro_form").on("submit", function(){
    var content = $("form input:text").val();
    // stuff here
    return false;
  });

  
  intro();
});