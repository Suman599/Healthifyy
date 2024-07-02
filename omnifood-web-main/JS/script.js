const header = document.querySelector(".header");
const toogleBtn = document.querySelector(".btn-mobile-nav");

// toogleBtn.classList.toggle("nav-open");


toogleBtn.addEventListener("click", () => {
  header.classList.toggle("nav-open");
});

function removeButtonAndReload() {
  var button = document.getElementById('myButton');
  button.parentNode.removeChild(button); // Remove the button from its parent node

  // Set a flag in localStorage to indicate button removal
  localStorage.setItem('removeButtonAfterReload', 'true');

  // Reload the page
  window.location.reload();
}

// Check localStorage on page load
window.onload = function() {
  var shouldRemoveButton = localStorage.getItem('removeButtonAfterReload');
  if (shouldRemoveButton === 'true') {
      var button = document.getElementById('myButton');
      button.parentNode.removeChild(button); // Remove the button from its parent node
      
      // Clear the flag from localStorage
      localStorage.removeItem('removeButtonAfterReload');
  }
};
