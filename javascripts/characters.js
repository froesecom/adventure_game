var characters = {
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
  $.each(characters, function(c){
    a.push(c + "-" + step);
  });
  return a;
}

function updateCharacter(character){
  alert("dank");
  //append character to nav so we can get it later in showCharacter
  //also add image there
}

function showCharacter(){
  $("#adventure_content").append("<img class='character' style='display:none' src='witch.png'>");
}

function hideCharacter(){
  alert("nothing to do here");
}