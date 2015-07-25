var MECHANICS = {};

MECHANICS.type = function(chars){
  var char = chars.shift();
  var timeout = char.search(/[!,.:;?]/) < 0 ? 60 : 800;
  $("#adventure_content").append(char);

  if(GAMESTATE.allow_typing === true && chars.length >= 1 ) {
    setTimeout(function(){MECHANICS.type(chars)}, timeout);
  }; 
};

MECHANICS.processText = function(callback){
  callback();
};

MECHANICS.read = function(chapter, page){
  var prepare = function(){
    $("#adventure_content").text("");

    GAMESTATE.allow_typing  = true;
    var content             = MECHANICS.interpolate(GAMESTATE.plot[chapter][page]["content"]);
    
    MECHANICS.processText(function(){
      MECHANICS.type(content.split(""));
    });
    
    MECHANICS.controls.update(chapter, page);
    MECHANICS.controls.turnThePage(chapter, page)
  };
  
  // wait for recursive typing to finish
  setTimeout(prepare, 500);
};

MECHANICS.interpolate = function(content){
  return content.replace("#CHAR#", GAMESTATE.player.character).replace("#NAME#", GAMESTATE.player.name);
 
};


MECHANICS.controls = {
  update: function(chapter, step){
    //fade out all control panels and empty them
    $(".buttons").fadeOut(function(){
      $(this).html("");
    });
    $(".text_console").fadeOut(function(){
      $(this).find("input:text").val("");
    });
    //run special functions if they exist
    if (GAMESTATE.plot[chapter][step].special){  
      GAMESTATE.plot[chapter][step].special();
    }
    //build/show correct inputs
    if (GAMESTATE.plot[chapter][step].buttons){
      MECHANICS.controls.buildButtons(GAMESTATE.plot[chapter][step].buttons);
    }
    else if (GAMESTATE.plot[chapter][step].text) {
      $(".text_console").fadeIn();
    }
  },
  buildButtons: function(buttons){
    $.each(buttons, function(i, button){
      var bArray = button.split("-");
      var text = bArray[0];
      var chapter = bArray[1];
      var page =bArray[2];
      var callback = bArray[3] === undefined ? "" : bArray[3]
      var button = "<div data-next-chapter='" + chapter + "' data-next-page='" + page + "' data-callback='" + callback + "' class='button wood'><div>" + text + "</div></div>";
      setTimeout(function(){$(".buttons").append(button)}, 500);
    });
    $(".buttons").fadeIn();
  },
  turnThePage: function(chapter, page){
    //update chapter and page
    // if chapter and page passed in from buttons/text input, update them.
    GAMESTATE.plotPhase.page    = page + 1;
    GAMESTATE.plotPhase.chapter = chapter;
   
  }
};

//========================================================
//CHARACTER FUNCTIONS
//========================================================
MECHANICS.characterButtons = function (page){
  var a = [];
  $.each(GAMESTATE.characters, function(c){
    a.push(c + "-" + page);
  });
  return a;
}

MECHANICS.showCharacter = function (character){
  GAMESTATE.player.character = character;
  $(".character_type").text("the " + character).css("visibility", "visible");
  $(".character_icon img").attr("src", character.toLowerCase() + ".png" );

  $('.character_icon').animate({opacity: 1}, 'slow', function(){
    $('.character_icon').css('visibility', 'visible');
  });

}
//========================================================
//TEXT FUNCTIONS
//========================================================

MECHANICS.textFunctions = {
  "details-2": function(content){
    GAMESTATE.player.name = content;
    $(".user_name").text(content);
  }
};


