//============================
function type(chars){
  var char = chars.shift();
  var timeout = char.search(/[!,.:;?]/) < 0 ? 60 : 800;
  $("#adventure_content").append(char);

  if(chars.length >= 1 ) {
    setTimeout(function(){type(chars)}, timeout);
  }; 
};

//================================
var controls = {
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
      controls.buildButtons(GAMESTATE.plot[chapter][step].buttons);
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
      var step =bArray[2];
      var callback = bArray[3] === undefined ? "" : bArray[3]
      var button = "<div data-next-chapter='" + chapter + "' data-next-step='" + step + "' data-callback='" + callback + "' class='button wood'><div>" + text + "</div></div>";
      setTimeout(function(){$(".buttons").append(button)}, 500);
    });
    $(".buttons").fadeIn();
  },
  turnThePage: function(chapter, step){
    //update chapter and step
    // if chapter and step passed in from buttons/text input, update them.
    $adv.data("step", step + 1);
    $adv.data("chapter", chapter);
  }
};
//========================================================
var textFunctions = {
  "details-2": function(content){
    //record name
    $(".user_name").text(content);
  }
};


