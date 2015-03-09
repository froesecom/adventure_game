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
    //update.controls();

  });

  //============================
  // start the app
  //============================
  function intro(){
    $adv = $("#adventure");
    var chapter = $adv.data("chapter");
    var step = $adv.data("step");
    
    type(plot[chapter][step]["content"].split(""));
    controls.update(chapter, step);
    setTimeout(function(){
      controls.turnThePage(chapter, step)
    }, 1000);
  }
  intro();
});