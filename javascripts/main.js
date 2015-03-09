$(function(){

  //============================
  // event listeners
  //============================
  $(".text_console").on("submit", function(){
    var content = $("form input:text").val();
    var chapter = $adv.data("chapter");
    var step = $adv.data("step");
    textFunctions[chapter + "-" + step](content);
    //I'm confused here, not going to lie
    //have to updated the controls and
    //turnThePage(with new chapter and step from the textFunctions function)
    //but not sure if they'll work they're currently build with text function
    //sort out timing
    return false;
  });
  
  $(".buttons").on("click", ".button", function(){
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