
GAMESTATE.characters = {
  "Zombie": {
    "description": "Zombie description"
  },
  "Witch": {
    "description": "Witch description"
  },
  "Fairy": {
    "description": "Fairy description"
  },
  "Robot": {
    "description": "Robot description"
  }

};

function characterButtons(step){
  var a = [];
  $.each(GAMESTATE.characters, function(c){
    a.push(c + "-" + step);
  });
  return a;
}

function updateCharacter(character){
  $(".character_type").text("| " + character).css("visibility", "visible");
  $(".character_icon img").attr("src", character.toLowerCase() + ".png" );

  $('.character_icon').animate({opacity: 1}, 'slow', function(){
    $('.character_icon').css('visibility', 'visible');
  });

}

function showCharacter(){
  $("#adventure_content").append("<img class='character' style='display:none' src='witch.png'>");
}
