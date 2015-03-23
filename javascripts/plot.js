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
      "buttons": characterButtons("details-3"),
      "special": "chooseCharacter"
    },
    "3": {
      "content": "All the contents here",
      "buttons": "wtf"
    }
  },
  "start": {
    "1": "All the starts go here."
},
  "end": {
    "1": {
      "content": "The end."
    }
  }
};

  
