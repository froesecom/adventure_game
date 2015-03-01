var ac = $("#adventure_content");
function type(string){
  chars = string.split("");
  ac.text("");
  $.each(chars, function(i){
    var l = chars.shift();
    setTimeout(function(){printLetter(l);}, i*30);
  });
  
}
function printLetter(letter){
  $("#adventure_content").append(letter);
  
}

