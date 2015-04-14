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

function showCharacter(){
  alert("show characters here");
}

function hideCharacter(){
  alert("nothing to do here");
}