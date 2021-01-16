const { MessageAttachment } = require('discord.js');
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "water",
    category: "template",
    timeout: 10000,
    run: async (client, message, args) => {

    let text = args.join('%20')

    if (!text) {
      return message.reply(`please put a word or a text!`)
    }

    await message.delete()
    if (text.length > 30) {
      return message.reply(`you cannot place more than 30 characters!`)
    }

    let attachment = new MessageAttachment(`https://vacefron.nl/api/water?text=${text}&raw=1`, 'water.png')
    
    await message.channel.send(attachment)

  }
}