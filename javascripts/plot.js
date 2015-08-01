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
        "content": "Today is Friday and you are excited to head home, but you have one last task.",
        "buttons": ["Continue-Robot-3"]

      },
      "3": {
        "content": "Finish counting parts. If you have " + PROPS.bobs + " bobs and " + PROPS.bits  + " bits, how many do you have in total?",
        "text": true
      },
      "4": {
        "content": "Great work! Your day is done. You head to the local cafe for a hot cup of oil.",
        "buttons": ["Head out-Robot-5"]
      },
      "5": {
        "content": "As you sit down, a friendly witch pulls up a chair at your table.",
        "buttons": "Next-Robot-6"
      },
      "6": {
        "content": "",
        "text": true
      }
    },
    "end": {
      "1": {
        "content": "The end."
      }
    }
    
  };

  GAMESTATE.plot["Zombie"] = {
    "1": {
      "content": "Sorry, this character is not finished.",
      "buttons": ["Choose another character-details-2"]
    }
  };
  GAMESTATE.plot["Witch"] = {
    "1": {
      "content": "Sorry, this character is not finished.",
      "buttons": ["Choose another character-details-2"]
    }
  };
  GAMESTATE.plot["Fairy"] = {
    "1": {
      "content": "Sorry, this character is not finished.",
      "buttons": ["Choose another character-details-2"]
    }
  };
});

  
