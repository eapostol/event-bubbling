  // Event listener for click handling
  document.getElementById("navBar").addEventListener("click", function(event) {
    const target = event.target;

    // Identify which element was clicked and display its information
    if (target.id === "button1") {
      displayInfo("Button", "Button 1");
      toggleDisplay(target.querySelector(".menu"));
    } else if (target.id === "menu1_1") {
      displayInfo("Menu", "Menu 1.1");
      toggleDisplay(target.querySelector(".submenu"));
    } else if (target.id === "submenu1_1_1") {
      displayInfo("Submenu", "Submenu 1.1.1");
    } else if (target.id === "submenu1_1_2") {
      displayInfo("Submenu", "Submenu 1.1.2");
    } else if (target.id === "submenu1_1_3") {
      displayInfo("Submenu", "Submenu 1.1.3");
    } else if (target.id === "submenu1_1_4") {
      displayInfo("Submenu", "Submenu 1.1.4");
    } else if (target.id === "submenu1_1_5") {
      displayInfo("Submenu", "Submenu 1.1.5");
    } else if (target.id === "menu1_2") {
      displayInfo("Menu", "Menu 1.2");
    } else if (target.id === "menu1_3") {
      displayInfo("Menu", "Menu 1.3");
    } else if (target.id === "menu1_4") {
      displayInfo("Menu", "Menu 1.4");
    } else if (target.id === "menu1_5") {
      displayInfo("Menu", "Menu 1.5");
    } else {
      displayInfo("Unknown", "None");
    }
  });

  // Function to update information display
  function displayInfo(elementType, label) {
    document.getElementById("clickedElement").textContent = elementType;
    document.getElementById("elementLabel").textContent = label;
  }

  // Function to toggle display of menus and submenus
  function toggleDisplay(menu) {
    if (menu) {
      menu.style.display = menu.style.display === "block" ? "none" : "block";
    }
  }