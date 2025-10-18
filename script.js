const commands = [
  { name: "aidisable", category: "AI", description: "Disables the bot's AI features.", usage: "/aidisable" },
  { name: "aienable", category: "AI", description: "Enables the bot's AI features.", usage: "/aienable" },
  { name: "allowvc", category: "Voice", description: "Allows a user to join voice channels.", usage: "/allowvc @user" },
  { name: "antifeet", category: "Moderation", description: "Blocks inappropriate content related to feet.", usage: "/antifeet" },
  { name: "antigif", category: "Moderation", description: "Prevents posting of GIFs.", usage: "/antigif" },
  { name: "antirole", category: "Moderation", description: "Prevents role abuse.", usage: "/antirole" },
  { name: "antiping", category: "Moderation", description: "Deletes messages that ping users or roles.", usage: "/antiping" },
  { name: "autodelete", category: "Moderation", description: "Automatically deletes messages after a set time.", usage: "/autodelete [time]" },
  { name: "antodeleteclear", category: "Moderation", description: "Prevents clearing of messages.", usage: "/antodeleteclear" },
  { name: "antideletelist", category: "Moderation", description: "Prevents deleting listed messages.", usage: "/antideletelist" },
  { name: "autodeletewhitelist", category: "Moderation", description: "Whitelists users from auto-delete.", usage: "/autodeletewhitelist @user" },
  { name: "automessage", category: "Utility", description: "Sends automated messages.", usage: "/automessage [text]" },
  { name: "autoreact", category: "Utility", description: "Automatically reacts to messages.", usage: "/autoreact [emoji]" },
  { name: "pfp", category: "Utility", description: "Displays a user's profile picture.", usage: "/pfp @user" },
  { name: "pp", category: "Utility", description: "Alias for profile picture.", usage: "/pp @user" },
  { name: "banner", category: "Utility", description: "Shows a user's server banner.", usage: "/banner @user" },
  { name: "calc", category: "Fun", description: "Performs calculations.", usage: "/calc [expression]" },
  { name: "clear", category: "Moderation", description: "Clears a number of messages.", usage: "/clear [amount]" },
  { name: "cmds", category: "Utility", description: "Shows all bot commands.", usage: "/cmds" },
  { name: "code2embed", category: "Utility", description: "Converts code into an embed.", usage: "/code2embed [code]" },
  { name: "create", category: "Utility", description: "Creates a resource or role.", usage: "/create [name]" },
  { name: "cs", category: "Fun", description: "Custom command or fun feature.", usage: "/cs" },
  { name: "delete", category: "Moderation", description: "Deletes a resource or message.", usage: "/delete [item]" },
  { name: "embed2code", category: "Utility", description: "Converts embed to code.", usage: "/embed2code [embed]" },
  { name: "es", category: "Fun", description: "Fun or entertainment command.", usage: "/es" },
  { name: "fn", category: "Fun", description: "Fun command or minigame.", usage: "/fn" },
  { name: "guess", category: "Fun", description: "Play a guessing game.", usage: "/guess [number]" },
  { name: "latestping", category: "Utility", description: "Shows the latest ping of the bot.", usage: "/latestping" },
  { name: "listvc", category: "Voice", description: "Lists all voice channels.", usage: "/listvc" },
  { name: "ping", category: "General", description: "Checks the bot’s latency.", usage: "/ping" },
  { name: "preventmessage", category: "Moderation", description: "Prevents users from sending messages.", usage: "/preventmessage" },
  { name: "preventvc", category: "Moderation", description: "Prevents users from joining voice channels.", usage: "/preventvc" },
  { name: "purge", category: "Moderation", description: "Deletes messages in bulk.", usage: "/purge [amount]" },
  { name: "rcreate", category: "Roles", description: "Creates a new role.", usage: "/rcreate [role]" },
  { name: "rdelete", category: "Roles", description: "Deletes a role.", usage: "/rdelete [role]" },
  { name: "role", category: "Roles", description: "Assigns a role to a user.", usage: "/role @user [role]" },
  { name: "s", category: "Utility", description: "Generic or utility command.", usage: "/s" },
  { name: "serverinfo", category: "Utility", description: "Displays information about the server.", usage: "/serverinfo" },
  { name: "suggestion", category: "Utility", description: "Sends a suggestion.", usage: "/suggestion [text]" },
  { name: "suggestionwl", category: "Utility", description: "Whitelist for suggestions.", usage: "/suggestionwl" },
  { name: "suggestionbl", category: "Utility", description: "Blacklist for suggestions.", usage: "/suggestionbl" },
  { name: "userinfo", category: "Utility", description: "Displays info about a user.", usage: "/userinfo @user" },
  { name: "voiceclaim", category: "Voice", description: "Claims a voice channel.", usage: "/voiceclaim" },
  { name: "vckick", category: "Voice", description: "Kicks a user from voice channel.", usage: "/vckick @user" },
  { name: "vclock", category: "Voice", description: "Locks a voice channel.", usage: "/vclock" },
  { name: "vcsetup", category: "Voice", description: "Sets up a voice channel.", usage: "/vcsetup" },
  { name: "vctransfer", category: "Voice", description: "Transfers voice channel ownership.", usage: "/vctransfer @user" },
  { name: "vcunlock", category: "Voice", description: "Unlocks a voice channel.", usage: "/vcunlock" }
];

const container = document.getElementById("commands-container");
const searchInput = document.getElementById("searchInput");

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
