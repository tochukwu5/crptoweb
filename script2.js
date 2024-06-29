//for buypage.html dark-theme toggle

const toggler = document.getElementById('switcherid');
let isSwitcher = true

toggler.onclick = function(){
  console.log('1123')
  isSwitcher = !isSwitcher;
  if (isSwitcher = isSwitcher) {
    var bg_toggle = document.getElementById("bg-toggler");
    bg_toggle.innerHTML = "";
      }
      else{
    var bg_toggle = document.getElementById("bg-toggler");
bg_toggle.innerHTML = "<link rel=" + "stylesheet" + " href=" + "./styletogglebuypage.css" + ">";
  }
}