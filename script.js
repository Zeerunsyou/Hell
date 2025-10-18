const container = document.getElementById("commands-container");
const searchInput = document.getElementById("searchInput");
let commands = [];

// Load commands from JSON
async function loadCommands() {
  try {
    const res = await fetch("commands.json");
    commands = await res.json();
    displayCommands(commands);
  } catch (err) {
    container.innerHTML = "<p>⚠️ Failed to load commands.</p>";
    console.error("Error loading commands:", err);
  }
}

function displayCommands(list) {
  container.innerHTML = "";
  list.forEach(cmd => {
    const card = document.createElement("div");
    card.className = "command-card";
    card.innerHTML = `
      <h3>${cmd.name}</h3>
      <p><strong>Category:</strong> ${cmd.category}</p>
      <p><strong>Description:</strong> ${cmd.description}</p>
      <p><strong>Usage:</strong> <code>${cmd.usage}</code></p>
    `;
    container.appendChild(card);
  });
}

searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase();
  const filtered = commands.filter(cmd =>
    cmd.name.toLowerCase().includes(query) ||
    cmd.category.toLowerCase().includes(query) ||
    cmd.description.toLowerCase().includes(query)
  );
  displayCommands(filtered);
});

// Run it
loadCommands();
