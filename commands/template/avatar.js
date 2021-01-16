const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "avatar",
    category: "template",
    timeout: 10000,
    run: async (client, message, args) => {
      
      let user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;
      let avatar = user.avatarURL({ dynamic: true, size: 4096 })

      let embed = new MessageEmbed()
        .setColor('RANDOM') 
        .setDescription(`**${user.username}'s** avatar!`)
        .setImage(avatar)
      await message.channel.send(embed)
    
    }
  }
