$(function(){

  //============================
  // event listeners
  //============================
  $(".intro_form").on("submit", function(){
    var content = $("form input:text").val();
    // stuff here
    return false;
  });
  
  $(".button").on("click", function(){
    //start typing next part of the story
    update.controls();

  });

  //============================
  // start the app
  //============================
  function intro(){
    type(plot["intro"]["0"]["content"].split(""));
    setTimeout(function(){
      controls.turnThePage()
      controls.update();
    }, 1000);
  }
  intro();
});