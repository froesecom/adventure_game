$(function(){

  //============================
  // event listeners
  //============================
  $(".text_console").on("submit", function(e){
    e.preventDefault();
    // stop any recursive typing function
    GAMESTATE.allow_typing = false;

    var content = $("form input:text").val();
    var chapter = GAMESTATE.plotPhase.chapter;
    var page    = GAMESTATE.plotPhase.page;
    MECHANICS.textFunctions[chapter + "-" + page](content);
    MECHANICS.read(chapter, page);
    //I'm confused here, not going to lie
    //have to updated the MECHANICS.controls and
    //turnThePage(with new chapter and step from the textFunctions function)
    //but not sure if they'll work they're currently build with text function
    //sort out timing
    
  });
  
  $(".buttons").on("click", ".button", function(){
    GAMESTATE.allow_typing = false;
    //then move onto the next chapter
    var chapter   = $(this).data("next-chapter");
    var page      = $(this).data("next-page");
    var callback  = $(this).data("callback");
    var choice    = $(this).text();

    if (callback.length > 0){
      var thisFunction = MECHANICS[callback];
      thisFunction(choice);
    }
    MECHANICS.read(chapter, page);

  });

  //============================
  // start the app
  //============================
  (function(){
    var chapter = GAMESTATE.plotPhase.chapter;
    var page    = GAMESTATE.plotPhase.page;
    
    $("#adventure_content").text("");
    MECHANICS.type(GAMESTATE.plot[chapter][page]["content"].split(""));
    MECHANICS.controls.update(chapter, page);
    MECHANICS.controls.turnThePage(chapter, page)
   
  })();
});