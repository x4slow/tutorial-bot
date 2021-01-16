const { MessageEmbed } = require('discord.js');
 
module.exports = async member => {

    const hasleft = member.guild.channels.cache.get('ID-CHANNEL-HASLEFT-MESSAGE');
    if (!hasleft) return;

    hasleft.send(`:white_small_square: ${member.tag} has **left the server**! | #**${member.guild.memberCount}** members now...`)
}