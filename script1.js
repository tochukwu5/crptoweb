
//for index.html dark-theme toggle

const toggle = document.getElementById('switch');
let isSwitched = true

toggle.addEventListener("click", turnon)

function turnon(){
  var bg_toggle = document.getElementById("bg-toggle");
  isSwitched = !isSwitched;
  if (isSwitched = isSwitched) {
    bg_toggle.innerHTML = "";
      }
      else{
bg_toggle.innerHTML = "<link rel=" + "stylesheet" + " href=" + "./styletoggle.css" + ">";
  }
}

