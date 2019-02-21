var qNumI
var qNum
var qNums

var isEnd = false;

function init(){
  qNums = [...Array(QUESTION.length).keys()]

  for (var i = qNums.length - 1; i >= 0; i--){
    // 0~iのランダムな数値を取得
    var rand = Math.floor( Math.random() * ( i + 1 ) );
    // 配列の数値を入れ替える
    [qNums[i], qNums[rand]] = [qNums[rand], qNums[i]]
  }

  qNumI = -1;
  showQuestion();
}

function showQuestion() {
  qNumI += 1;
  if (qNumI >= qNums.length){
    target = document.getElementById('terminal');
    target.innerHTML += "<span>END</span>";
    target.scrollTop = target.scrollHeight - target.clientHeight;
    isEnd = true;
    return;
  }
  qNum = qNums[qNumI];

  var text = document.getElementById('sample');
  console.log(text.innerHTML);
  text.innerHTML = QUESTION[qNum][0];

  document.getElementById("count").innerHTML = (qNumI+1) +"/"+ qNums.length;
  document.getElementById("answerFileName").innerHTML = (qNumI+1) +"/"+ qNums.length + QUESTION[qNum][2];

  target = document.getElementById('terminal');
  target.innerHTML += "$ ";
  target.scrollTop = target.scrollHeight - target.clientHeight;

  document.getElementById("input").innerHTML = "";
}

var isShift = false;
var isControll = false;
var numCode = [["0", "!", '"', "#", "$", "%", "&", "'", "(", ")"],["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]]

function keydown(){
  if (isEnd) {
    if (event.keyCode == 13) {
      location.reload();
    }
    return
  }

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
    if (isControll) {
      check(qNum, target.innerHTML)

    }else {
      target.innerHTML += '<br>'
    }
  // バックスペース
  } else if(event.keyCode == 8) {
    var str = target.innerHTML;
    if (str.match(/>$/)) {
      target.innerHTML = str.substring(0, str.length-4);
    } else if (str.match(/&amp;$/)) {
      target.innerHTML = str.substring(0, str.length-5);
    } else {
      target.innerHTML = str.substring(0, str.length-1);
    }
  // Shift
  } else if (event.keyCode == 16) {
    isShift = true;
  //Controll
  }else if (event.keyCode == 17) {
    isControll = true;
  // ;
  }else if (event.keyCode == 186) {
    target.innerHTML += ";";
  // =
  }else if (event.keyCode == 187) {
    target.innerHTML += "=";
  // -
  }else if (event.keyCode == 189) {
    target.innerHTML += "-";
  // .
}else if (event.keyCode == 190) {
    target.innerHTML += ".";
  // その他
  } else {
  }
}

function keyup() {
  console.log(event.keyCode + ":up")
  if (event.keyCode == 16){
    isShift = false;
  }
  else if (event.keyCode == 17) {
    isControll = false;
  }
}
//答えチェック
function check(qNum, answer){
  document.getElementById('terminal').innerHTML += (qNumI+1) +"/"+ qNums.length + QUESTION[qNum][2] + "<br>";

  console.log(QUESTION[qNum][0])
  console.log(answer)

  target = document.getElementById("terminal");
  if (QUESTION[qNum][0] == answer) {
    target.innerHTML += QUESTION[qNum][1]+"<br>";
  }else {
    target.innerHTML += "error<br>";
  }
  target.scrollTop = target.scrollHeight - target.clientHeight;

  showQuestion();
}

window.onload = init

document.onkeydown = keydown
document.onkeyup = keyup
