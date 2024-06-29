
//for index.html dark-theme toggle

const toggle = document.getElementById('switch');
let isSwitched = false

toggle.onclick = function(){
  isSwitched = !isSwitched;
  if (isSwitched = isSwitched) {
    var bg_toggle = document.getElementById("bg-toggle");
    bg_toggle.innerHTML = "";
      }
      else{
    var bg_toggle = document.getElementById("bg-toggle");
bg_toggle.innerHTML = "<link rel=" + "stylesheet" + " href=" + "./styletoggle.css" + ">";
  }
}
