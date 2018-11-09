<<<<<<< HEAD
// testing git pull
=======
<<<<<<< HEAD
/* Christie was here. */
=======
// testing git pulling
>>>>>>> 0b0da6a1b424ce56f1ad6509bc46a6b1ab152ddb
// hello Christie


>>>>>>> c5dc41befedac84b9d56feb0f1460ee12fa3acfc
function goBack() {
    window.history.back();
}

function goBackRoutine() {
    window.location = "./routines.html";
}

function myFunction(e) {
  var dropdown = e.parentNode.getElementsByClassName('dropdown-content')[0];
  dropdown.classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
