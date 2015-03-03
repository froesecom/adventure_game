
function type(string){
  chars = string.split("");
  $("#adventure_content").text("");
  $.each(chars, function(i, val){
    // var l = chars.shift();
    setTimeout(function(){$("#adventure_content").append(val);}, i*30);
  });
  
}



