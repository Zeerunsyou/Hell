import rawCommands from "./commands.json" assert { type: "json" };

const container = document.getElementById("commands-container");
const searchInput = document.getElementById("searchInput");

// Convert JSON keys into an array of command objects
const commands = Object.keys(rawCommands).map(name => ({
  name,
  category: "General",      // You can customize later
  description: "No description yet.",
  usage: `/${name}`
}));

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

// Initial display
displayCommands(commands);

// Search filter
searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase();
  const filtered = commands.filter(cmd =>
    cmd.name.toLowerCase().includes(query) ||
    cmd.category.toLowerCase().includes(query) ||
    cmd.description.toLowerCase().includes(query)
  );
  displayCommands(filtered);
});
