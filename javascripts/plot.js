$(function(){
  GAMESTATE.plot = {
    "intro": {
      "1": {
        "content": "Hello. Would you like to go on an adventure?",
        "buttons": ["Yes-details-1", "No-end-1"]
      },
    },
    "details": {
      "1": {
        "content": "What is your name?",
        "text": true
      },
      "2": {
        "content": "Choose your character:",
        "buttons": MECHANICS.characterButtons("details-3-showCharacter")
      },
      "3": {
        "content": "And so your quest begins, #NAME# the #CHAR#...",
        "buttons": ["Begin-#CHAR#-1"]
      }
    },
    "Robot": {
      "1": {
        "content": "#NAME#, you are a happy robot, who works in a factory making bits and bobs.",
        "buttons": ["Continue-Robot-2"]
      },
      "2": {
        "content": "What you want more than anything is a giant pot of jelly, but first you have to finish work.",
        "buttons": ["Continue-Robot-3"]

      }
    },
    "end": {
      "1": {
        "content": "The end."
      }
    }
    
  };
});

  
