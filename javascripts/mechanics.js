
//============================
//global variables
//============================
var $adv;
var i = 0;

//============================
function type(chars){
  $("#adventure_content").text("");
  if(chars.length >= 1 ) {
    pressKey(chars.shift(), chars);
  } else {
    i = 0;
  }
}
function pressKey(char, chars){
  setTimeout(function(){$("#adventure_content").append(char);}, i * 30);
  i ++;
  type(chars);
}
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
    //build/show correct inputs
    if (plot[chapter][step].buttons){
      controls.buildButtons(plot[chapter][step].buttons);
    }
    else if (plot[chapter][step].text) {
      $(".text_console").fadeIn();
    }
  },
  buildButtons: function(buttons){
    $.each(buttons, function(i, button){
      var bArray = button.split("-");
      var text = bArray[0];
      var chapter = bArray[1];
      var step =bArray[2];
      var button = "<div data-next-chapter='" + chapter + "' data-next-step='" + step + "' class='button wood'><div>" + text + "</div></div>";
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


