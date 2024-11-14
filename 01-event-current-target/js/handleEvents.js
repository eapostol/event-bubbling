// Event handler for showing/hiding menus and updating info display

const whichContainer =  document.getElementById("containerInfo");
const whichTarget = document.getElementById("originInfo");
const targetLabel = document.getElementById("labelInfo");

function handleNavClick(event) {
  const navBar = event.currentTarget;
  const buttons = navBar.getElementsByClassName("nav-button");

  // Display which container and origin element was clicked
  whichContainer.textContent = "Navigation Bar (navBar)";
  whichTarget.textContent = event.target.tagName + 
    (event.target.className ? ` (class: ${event.target.className})` : "");

  // Display the label of the clicked item
  const clickedLabel = event.target.dataset.label || "Unknown";
  targetLabel.textContent = clickedLabel;

  for (const button of buttons) {
    const menu = button.querySelector(".menu");

    if (event.target === button || button.contains(event.target)) {
      // Toggle the visibility of the menu for the clicked button
      menu.style.display = menu.style.display === "block" ? "none" : "block";
    } else {
      // Hide other menus
      menu.style.display = "none";
    }
  }
}

// Attach the click event listener to the navigation bar for event bubbling
document.getElementById("navBar").addEventListener("click", handleNavClick);
