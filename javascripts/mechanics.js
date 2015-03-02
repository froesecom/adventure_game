
function type(string){
  chars = string.split("");
  $("#adventure_content").text("");
  $.each(chars, function(i){
    var l = chars.shift();
    setTimeout(function(){$("#adventure_content").append(l);}, i*30);
  });
  
}



