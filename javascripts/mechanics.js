
var i = 0;
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
    update: function(){
      console.log("updating controls");
      //fade out all control panels
      //refresh all controls panels
      //build buttons in control panel if necessary
      //show correct control panel
    },
    buildButtons: function(){

    },
    turnThePage: function(chapter, step){
      //update chapter and step
      var $adv = $("#adventure");
      // if chapter and step passed in from buttons/text input, update them.
      // else, assume it is a step with no controls, and simply increment the step.
      var step = $adv.data("step");
      $adv.data("step", step + 1);
    }
  };



