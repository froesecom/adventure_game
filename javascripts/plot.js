var plot = {
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
      "content": "Choose your character",
      "buttons": characterButtons("details-3-showCharacter")
    },
    "3": {
      "content": "",
      "buttons": ["Next-start-1-showCharacter"]
    }
  },
  "start": {
    "1": {
      "content": "All the starts go here.",
      "special": hideCharacter,
      "text": true
    }
},
  "end": {
    "1": {
      "content": "The end."
    }
  }
};

  
