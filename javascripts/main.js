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
    MECHANICS.read();
   
    
  });
  
  $(".buttons").on("click", ".button", function(){
    GAMESTATE.allow_typing = false;
    //then move onto the next chapter
    GAMESTATE.plotPhase.chapter   = $(this).data("next-chapter");
    GAMESTATE.plotPhase.page      = $(this).data("next-page");
    var callback                  = $(this).data("callback");
    var choice                    = $(this).text();

    if (callback.length > 0){
      var thisFunction = MECHANICS[callback];
      thisFunction(choice);
    }
    MECHANICS.read();

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