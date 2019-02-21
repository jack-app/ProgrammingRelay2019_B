function sample() {
  var text = document.getElementById('sample');
  console.log(text);
  text.innerHTML = 'a = 0'
}

function keydown(){
  target = document.getElementById("input");
  switch (event.keyCode) {
    case 13:
    target.innerHTML += '<br>'
      break;
    case 16
    if (target.match(/>$/)) {
      target.substring(3, -1)); //"012"
    }
      target.innerHTML =
    default:
    target.innerHTML += String.fromCharCode(event.keyCode).toLowerCase();

  }

        }

window.onload = sample

document.onkeydown = keydown
