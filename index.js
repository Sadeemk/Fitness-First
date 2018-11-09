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
