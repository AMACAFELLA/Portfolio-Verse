// Define DOM elements
const toggleButton = document.querySelector("#toggle-button");
const root = document.querySelector(":root");
const storageKey = "color-mode";
const defaultMode = "light-mode";

// Load the user's preffered color mode from local storage.
function loadColorMode() {
  const colorMode = localStorage.getItem(storageKey);
  root.classList.add(colorMode || defaultMode);
  updateToggleButton();
  toggleText();
}

loadColorMode();

// Toggle the color mode
toggleButton.addEventListener("click", () => {
  saveColorMode();
  toggleText();
});

// Save the users's preffered color mode to local storage
function saveColorMode() {
  // Check if the root element has a class of "dark-mode". If yes, then the current mode is switched to light, and vice versa.
  const currentMode = root.classList.contains("dark-mode")
    ? "light-mode"
    : "dark-mode";
  root.classList.remove("light-mode", "dark-mode");
  root.classList.add(currentMode);
  localStorage.setItem(storageKey, currentMode);
  updateToggleButton();
}

function updateToggleButton() {
  if (root.classList.contains("dark-mode")) {
    toggleButton.style.backgroundImage = "var(--moon)";
  } else {
    toggleButton.style.backgroundImage = "var(--sun)";
  }
}
function toggleText() {
  var nametag = document.getElementById('nametag');
  // var name = document.getElementById('name');
  var description = document.getElementById('description');

  if (root.classList.contains('dark-mode')) {
    nametag.src = './assets/icons/spiderman.svg';
    // name.textContent = 'Your Friendly Neighborhood';
    description.textContent = 'Your Friendly Neighborhood Spider-Man';
  } else {
    nametag.src = './assets/icons/miles.svg';
    // name.textContent = 'Miles Morales';
    description.textContent = 'Fullstack Developer';
  }
}