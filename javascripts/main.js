$(function(){

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
    turnThePage: function(){
      //update chapter and step

    }
  };


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
    update.controls();

  });

  //============================
  // start the app
  //============================
  function intro(){
    type(plot["intro"]["1"]["content"].split(""));
    controls.turnThePage();
    controls.update();
  }
  intro();
});