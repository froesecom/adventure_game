var ac = $("#adventure_content");
function type(string){
  chars = string.split("");
  ac.text("");
  $.each(chars, function(i){
    var l = chars.shift();
    console.log(l);
    setTimeout(function(){printLetter(l);}, i*30);
  });
  
}
function printLetter(lang){
  $("#adventure_content").append(lang);
  console.log(lang);
}

