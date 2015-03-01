var content,
    content1;

var plot = {
  introText: function(){
    content = "Hello. Would you like to go on an adventure?";
    type(content);
  },
  details: function(){
    content   = "Great!"
    content1  = "What is your name?"
    type(content);
    setTimeout(type(content1), 1000);
  }
}
  
