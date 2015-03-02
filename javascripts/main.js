$(function(){
  var step = 1;
  var name;
  

  function intro(){
    $("#adventure_content").text(type(plot.intro.hello));
  }

  $(".intro_form").on("submit", function(){
    var content = $("form input:text").val();
    // stuff here
    return false;
  });
  // event listeners
  $(".yes").on("click", function(){
    // plot.details();
  });
  $(".no").on("click", function(){
    type(plot.end);
  });
  
  intro();
});