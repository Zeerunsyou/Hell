const commands = [
  { name: "aidisable", category: "Moderation", description: "Disable AI system", usage: "`aidisable" },
  { name: "aienable", category: "Moderation", description: "Enable AI system", usage: "`aienable" },
  { name: "allowvc", category: "Moderation", description: "Stop auto kicking/disconnecting a user from your VC", usage: "`allowvc @user" },
  { name: "antifeet", category: "Moderation", description: "Enable or disable deleting messages containing 'foot' or 'feet'", usage: "`antifeet <on/off>" },
  { name: "antirole", category: "Moderation", description: "Auto-Remove a role from a user when they get it.", usage: "`antirole @user <roleid> or `antirole clear @user" },
  { name: "antiping", category: "Moderation", description: "Deletes bot pings.", usage: "/antiping" },
  { name: "autodelete", category: "Moderation", description: "Toggle automatic deletion of messages or embeds in a channel.", usage: "`autodelete <message/embeds>" },
  { name: "antodeleteclear", category: "Moderation", description: "Stops auto-deleting messages/embeds in the channel.", usage: "`antodeleteclear" },
  { name: "antodeletelist", category: "Moderation", description: "Show all channels and what is being auto-deleted.", usage: "`antideletelist" },
  { name: "autodeletewhitelist", category: "Moderation", description: "Whitelist a user from being auto-deleted", usage: "`autodeletewhitelist @user" },
  { name: "automessage", category: "Moderation", description: "Send automated embeds at a set interval in a specific channel", usage: "`automessage <triple-quoted JSON embed> <interval_in_seconds> <channel_id>" },
  { name: "autoreact", category: "Moderation", description: "Add/Remove Autoreactions for users.", usage: "`autoreact add <userId> <emoji> OR `autoreact remove <userId> <emoji>" },
  { name: "autoreactlist", category: "Moderation", description: "List autoreactions that users have.", usage: "`autoreactlist" },
  { name: "banner", category: "User", description: "Displays a user's banner.", usage: "`banner @user" },
  { name: "calc", category: "Fun", description: "Calculate a math expression", usage: "`calc <expression>" },
  { name: "clear", category: "Moderation", description: "Clear bot and user's command messages", usage: "`clear" },
  { name: "cmds", category: "Moderation", description: "View a list of the bot's commands", usage: "`cmds" },
  { name: "code2embed", category: "Moderation", description: "Convert JSON code to an embed", usage: "`code2embed <JSON>" },
  { name: "create", category: "Moderation", description: "Create a Text Channel, Voice Channel, or Category", usage: "`create <channel/category> <vc/text> <under categoryId or 'none'> <name>" },
  { name: "cs", category: "Moderation", description: "Clear sniped messages.", usage: "`cs" },
  { name: "delete", category: "Moderation", description: "Delete a Channel or Category.", usage: "`delete (channel/category ID)" },
  { name: "embed2code", category: "Moderation", description: "Converts an Embed into JSON code", usage: "`code2embed <reply to embed message>" },
  { name: "es", category: "Moderation", description: "Snipes edited messages. Use es, es 1, es 2, etc.", usage: "`es <number>" },
  { name: "fn", category: "Moderation", description: "Change a users nickname in a server", usage: "`fn <user> [nickname]" },
  { name: "guess", category: "Fun", description: "Play a number guessing game (1-100) and track wins", usage: "`guess start to start a game, `guess leaderboard to view top players" },
  { name: "latestPing", category: "User", description: "Shows a users latest ping", usage: "`latestping @user" },
  { name: "listvc", category: "Moderation", description: "Displays a list of VC prevented users", usage: "`listvc" },
  { name: "massban", category: "Moderation", description: "Massban a list of userids in a txt file", usage: "`massban <.txt file>" },
  { name: "pfp", category: "User", description: "View a users profile picture.", usage: "`pfp @user" },
  { name: "ping", category: "User", description: "Checks the bot’s latency.", usage: "`ping" },
  { name: "pp", category: "Fun", description: "View your dick size.", usage: "`pp" },
  { name: "preventmessage", category: "Moderation", description: "Prevent and auto delete a specific message sent.", usage: "`preventmessage <message>" },
  { name: "preventvc", category: "Moderation", description: "Prevent a user from joining your VC.", usage: "`preventvc @user" },
  { name: "purge", category: "Moderation", description: "Delete a specific amount of messages", usage: "`purge <amount>" },
  { name: "rcreate", category: "Moderation", description: "Create a new role in a server", usage: "`rcreate <roleName>" },
  { name: "rdelete", category: "Moderation", description: "Deletes a role in a server", usage: "`rdelete <roleName>" },
  { name: "role", category: "Moderation", description: "Add or remove a role from a user (Optional specific amount of time).", usage: "`r <add/remove> @user <roleId> [time]" },
  { name: "s", category: "Moderation", description: "Snipe a deleted message", usage: "`s <number>" },
  { name: "serverinfo", category: "User", description: "View your server information", usage: "`serverinfo" },
  { name: "suggestion", category: "User", description: "Suggest a command to the bot's developer", usage: "`suggest <command_name> <how_it_works> | <extra_info>" },
  { name: "suggestionwl", category: "Moderation", description: "Whitelist a user from using suggestions", usage: "`suggestionwl @user" },
  { name: "suggestionbl", category: "Moderation", description: "Blacklist a user from using suggestions", usage: "`suggestionbl @user" },
  { name: "userinfo", category: "User", description: "View information about a user", usage: "`userinfo @user" },
  { name: "voiceclaim", category: "Voice", description: "Claims a voice channel if the owner of it has left", usage: "`vcclaim" },
  { name: "vckick", category: "Voice", description: "Kicks a user from voice channel.", usage: "`vckick @user" },
  { name: "vclock", category: "Voice", description: "Locks a voice channel.", usage: "`vclock" },
  { name: "vcsetup", category: "Voice", description: "Sets up Join 2 Create Channel", usage: "`vcsetup" },
  { name: "vctransfer", category: "Voice", description: "Transfers voice channel ownership.", usage: "`vctransfer @user" },
  { name: "vcunlock", category: "Voice", description: "Unlocks a voice channel.", usage: "`vcunlock" },
  { name: "verification", category: "Moderation", description: "Enable/Disable server verification.", usage: "`verification <enable/disable>" },
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


