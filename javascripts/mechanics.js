
//============================
//global variables
//============================
var $adv;
var i = 0;

//============================
//functional functions (see what I did there)
//============================
function type(chars){
  // var chars = input.split("");
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
var controls = {
  update: function(chapter, step){
    console.log("updating controls");
    //fade out all control panels and empty them
    $(".buttons").fadeOut(function(){
      $(this).html("");
    });
    $(".text_console").fadeOut(function(){
      $(this).find("input:text").val("");
    });
    //build buttons in control panel if necessary
    if (plot[chapter][step].buttons){
      controls.buildButtons(plot[chapter][step].buttons);
    }
    //else if (text thingo) {
    // textFunctions["chapter-step"]();
    //}
    //show correct control panel within the correct function
  },
  buildButtons: function(buttons){
    console.log("building buttons");
    $.each(buttons, function(i, button){
      var bArray = button.split("-");
      var text = bArray[0];
      var chapter = bArray[1];
      var step =bArray[2];
      var button = "<div data-next-chapter='" + chapter + "' data-next-step='" + step + "' class='button wood'><div>" + text + "</div></div>";
      $(".buttons").append(button);
    });
    $(".buttons").fadeIn();
  },
  turnThePage: function(chapter, step){
    //update chapter and step
    // if chapter and step passed in from buttons/text input, update them.
    // else, assume it is a step with no controls, and simply increment the step.
    $adv.data("step", step + 1);
    $adv.data("chapter", chapter);
  }
};
var textFunctions = {
  "details-1": "putYourFunctionHere"
};


