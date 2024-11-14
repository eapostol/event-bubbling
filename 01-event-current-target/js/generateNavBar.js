// Helper function to generate a random integer between min and max
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  // Helper function to generate a unique label with a prefix
  function createUniqueLabel(type, count) {
    return `${type} ${count}`;
  }
  
  // Generate random buttons, menus, submenus, and sub-submenus with unique labels
  function generateNavBar() {
    const navBar = document.getElementById("navBar");
    let buttonCount = 1;
  
    const totalButtons = getRandomInt(2, 5);
    for (let i = 0; i < totalButtons; i++) {
      // Create a button with a unique label
      const buttonLabel = createUniqueLabel("Button", buttonCount++);
      const button = document.createElement("div");
      button.className = "nav-button";
      button.textContent = buttonLabel;
      button.dataset.label = buttonLabel;
  
      let menuCount = 1;
      const menuCountLimit = getRandomInt(1, 4);
      const menu = document.createElement("div");
      menu.className = "menu";
  
      for (let j = 0; j < menuCountLimit; j++) {
        // Create a menu item with a unique label
        const menuLabel = createUniqueLabel("Menu", menuCount++);
        const menuItem = document.createElement("div");
        menuItem.className = "menu-item";
        menuItem.textContent = menuLabel;
        menuItem.dataset.label = menuLabel;
  
        if (Math.random() < 0.5) { // 50% chance to add a submenu
          let submenuCount = 1;
          const submenuCountLimit = getRandomInt(1, 3);
          const submenu = document.createElement("div");
          submenu.className = "submenu";
  
          for (let k = 0; k < submenuCountLimit; k++) {
            // Create a submenu item with a unique label
            const submenuLabel = createUniqueLabel("Submenu", submenuCount++);
            const submenuItem = document.createElement("div");
            submenuItem.className = "menu-item";
            submenuItem.textContent = submenuLabel;
            submenuItem.dataset.label = submenuLabel;
  
            if (Math.random() < 0.5) { // 50% chance to add a sub-submenu
              let subsubmenuCount = 1;
              const subsubmenuCountLimit = getRandomInt(1, 2);
              const subsubmenu = document.createElement("div");
              subsubmenu.className = "submenu";
  
              for (let l = 0; l < subsubmenuCountLimit; l++) {
                // Create a sub-submenu item with a unique label
                const subsubmenuLabel = createUniqueLabel("Sub-submenu", subsubmenuCount++);
                const subsubmenuItem = document.createElement("div");
                subsubmenuItem.className = "menu-item";
                subsubmenuItem.textContent = subsubmenuLabel;
                subsubmenuItem.dataset.label = subsubmenuLabel;
                subsubmenu.appendChild(subsubmenuItem);
              }
  
              submenuItem.appendChild(subsubmenu);
            }
  
            submenu.appendChild(submenuItem);
          }
  
          menuItem.appendChild(submenu);
        }
  
        menu.appendChild(menuItem);
      }
  
      button.appendChild(menu);
      navBar.appendChild(button);
    }
  }
  
  // Generate the navigation bar on page load
  generateNavBar();
  