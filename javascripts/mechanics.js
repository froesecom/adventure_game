
var i = 0;
function type(chars){
  // chars = input.split("");
  $("#adventure_content").text("");
  if(chars.length >= 1 ) {
    pressKey(chars.shift(), chars);
  }
  // $.each(chars, function(i, val){
  //   // var l = chars.shift();
  //   setTimeout(function(){$("#adventure_content").append(val);}, i*30);
  // });
}
function pressKey(char, chars){
  setTimeout(function(){$("#adventure_content").append(char);}, i * 30);
  i ++;
  type(chars);
}



