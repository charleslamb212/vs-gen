var shortcuts = {
    "Basic Editing": [
      { "key": "Cmd + X", "description": "Cut line (empty selection)" },
      { "key": "Cmd + C", "description": "Copy line (empty selection)" },
      { "key": "Cmd + Shift + K", "description": "Delete line" },
      { "key": "Cmd + Enter", "description": "Insert line below" },
      { "key": "Cmd + Shift + Enter", "description": "Insert line above" },
      { "key": "Cmd + Shift + \\", "description": "Jump to matching bracket" },
      { "key": "Cmd + /", "description": "Toggle line comment" },
      { "key": "Option + Up Arrow", "description": "Move line up" },
      { "key": "Option + Down Arrow", "description": "Move line down" },
      { "key": "Cmd + Shift + L", "description": "Select all occurrences of current selection" }
    ],
    "Navigation": [
      { "key": "Cmd + P", "description": "Quick open, go to file" },
      { "key": "Cmd + Shift + O", "description": "Quick open, go to symbol" },
      { "key": "Cmd + T", "description": "Quick open, go to symbol in workspace" },
      { "key": "Cmd + Shift + M", "description": "Show errors and warnings" },
      { "key": "Cmd + Shift + Tab", "description": "Navigate editor group history" },
      { "key": "Cmd + Shift + F", "description": "Find in files" }
    ],
    "Editor Management": [
      { "key": "Cmd + W", "description": "Close editor" },
      { "key": "Cmd + K F", "description": "Close folder" },
      { "key": "Cmd + Shift + T", "description": "Reopen closed editor" },
      { "key": "Cmd + K P", "description": "Copy path of active file" }
    ],
    "Text Manipulation": [
      { "key": "Cmd + D", "description": "Add selection to next find match" },
      { "key": "Cmd + K Cmd + D", "description": "Move last selection to next find match" },
      { "key": "Cmd + F2", "description": "Select all occurrences of current word" },
      { "key": "Cmd + F", "description": "Find" },
      { "key": "Cmd + H", "description": "Replace" },
      { "key": "Cmd + Shift + F", "description": "Find in files" }
    ]
  };

  // Get the necessary elements
  var centeredDiv = document.getElementById("centeredDiv");
  var generateButton = document.getElementById("generateButton");
  

var shortcutDisplay = document.getElementById("shortcutDisplay");

  // Function to generate and display a random shortcut
  function generateShortcut() {
    // Get a random category from the JSON data
    var categories = Object.keys(shortcuts);
    var randomCategory = categories[Math.floor(Math.random() * categories.length)];

    // Get a random shortcut from the selected category
    var shortcutsInCategory = shortcuts[randomCategory];
    var randomShortcut = shortcutsInCategory[Math.floor(Math.random() * shortcutsInCategory.length)];

    // Display the random shortcut
    shortcutDisplay.textContent = randomShortcut.key + " - " + randomShortcut.description;
  }

  // Add click event listener to the Generate button
  generateButton.addEventListener("click", generateShortcut);