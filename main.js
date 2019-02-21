function onload() {
  var sample = document.getElementById('sample');
  sample.innerHTML = QUESTION[0][0];
}

var isShift = false
var numCode = [["0", "!", '"', "#", "$", "%", "&", "'", "(", ")"],["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]]

function keydown(){
  target = document.getElementById("input");
  console.log(event.keyCode)
  // A~Z と　スペース
  if(65 <= event.keyCode && event.keyCode <= 90 || event.keyCode == 32) {
    if (isShift) {
      target.innerHTML += String.fromCharCode(event.keyCode);
    } else {
      target.innerHTML += String.fromCharCode(event.keyCode).toLowerCase();
    }
  // 数字
  } else if(48 <= event.keyCode && event.keyCode <= 57) {
    if (isShift) {
      target.innerHTML += numCode[0][event.keyCode - 48];
    } else {
      target.innerHTML += numCode[1][event.keyCode - 48];
    }
  // 改行
  } else if(event.keyCode == 13) {
    target.innerHTML += '<br>'
  // バックスペース
  } else if(event.keyCode == 8) {
    var str = target.innerHTML;
    console.log(str);
    if (str.match(/>$/)) {
      target.innerHTML = str.substring(0, str.length-4);
    } else if (str.match(/&amp;$/)) {
      target.innerHTML = str.substring(0, str.length-5);
    } else {
      target.innerHTML = str.substring(0, str.length-1);
    }
  // Shift
  } else if(event.keyCode == 16) {
    isShift = true;
  // ;
  } else if(event.keyCode == 186) {
    target.innerHTML += ";";
  // その他
  } else {
  }
}

function keyup(){
  console.log(event.keyCode + ":up")
  if (event.keyCode == 16){
    isShift = false;
  }
}

window.onload = onload

document.onkeydown = keydown
document.onkeyup = keyup
