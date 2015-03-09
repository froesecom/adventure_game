$(function(){

  //============================
  // event listeners
  //============================
  $(".intro_form").on("submit", function(){
    var content = $("form input:text").val();
    // stuff here
    return false;
  });
  
  $(".buttons").on("click", ".button", function(){
    console.log("button clicked");
    var chapter = $(this).data("next-chapter");
    var step = $(this).data("next-step");
    type(plot[chapter][step]["content"].split(""));
    controls.update(chapter, step);
    setTimeout(function(){
      controls.turnThePage(chapter, step)
    }, 1000);

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