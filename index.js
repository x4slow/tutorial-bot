const Discord = require('discord.js');
const client = new Discord.Client({ disableMentions: 'everyone' }):
const fs = require('fs');
const config = require('./config.json');
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
client.categories = fs.readdirSync('./commands/');
client.prefix = config.prefix;

["command", "event"].forEach(handler => {
    require(`./handlers/${handler}`)(client);
});

  client.on('guildMemberAdd', async member => {
    require("./events/guild/memberAdd")(member)
  })

  client.on('guildMemberRemove', async (message) => {
    require("./events/guild/memberRemove")(message)
  })

client.login(config.token);