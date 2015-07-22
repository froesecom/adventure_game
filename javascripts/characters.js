
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

function characterButtons(page){
  var a = [];
  $.each(GAMESTATE.characters, function(c){
    a.push(c + "-" + page);
  });
  return a;
}

function showCharacter(character){
  $(".character_type").text("| " + character).css("visibility", "visible");
  $(".character_icon img").attr("src", character.toLowerCase() + ".png" );

  $('.character_icon').animate({opacity: 1}, 'slow', function(){
    $('.character_icon').css('visibility', 'visible');
  });

}


