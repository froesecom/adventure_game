
var i = 0;
function type(chars){
  // var chars = input.split("");
  $("#adventure_content").text("");
  if(chars.length >= 1 ) {
    pressKey(chars.shift(), chars);
  } else {
    i = 0;
  }
}
function pressKey(char, chars){
  setTimeout(function(){$("#adventure_content").append(char);}, i * 30);
  i ++;
  type(chars);
}



