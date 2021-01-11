// AOS Effect
function giveAOS(kelas, index, effect, duration = 500, delay = 100) {
  kelas[index].setAttribute("data-aos", effect);
  kelas[index].setAttribute("data-aos-duration", duration);
  kelas[index].setAttribute("data-aos-delay", delay);
}
AOS.init();

// Navbar Button Dropdown Script
function navBarButton() {
    document.getElementById('menuDrop').classList.toggle("show");
  }
  
  window.onclick = function(e) {
    if (!e.target.matches('.drop')) {
    var menuDrop = document.getElementById('menuDrop');
      if (menuDrop.classList.contains('show')) {
        menuDrop.classList.remove('show');
      }
    }
  }

  
// Script Popup 
  var overlay = document.getElementById("login");
  var loginButton = document.getElementById("lgn");
  
  loginButton.onclick = function() {
  overlay.style.visibility = "visible";
  }

  window.onclick = function(event) {
      if (event.target == overlay) {
          overlay.style.visibility = "hidden";
      }
  }

// Input Hanya angka
  function hanyaAngka(evt) {
    var charCode = (evt.which) ? evt.which : event.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57))

        return false;
    return true;
    }