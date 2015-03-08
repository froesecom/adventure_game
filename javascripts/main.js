$(function(){
  var step = 1;
  var name;
  

  function intro(){
    type(plot["intro"]["1"]["content"].split(""));
    // $("#adventure_content").text(type(plot.intro.hello.split("")));
  }

  function updateControls(){
    console.log("updating controls");
  }

  $(".intro_form").on("submit", function(){
    var content = $("form input:text").val();
    // stuff here
    return false;
  });
  // event listeners
  $(".button").on("click", function(){
    var $path = $(this).data("next-step");
    type(plot[$path].split(""));
    updateControls();
  });
  
  intro();
});