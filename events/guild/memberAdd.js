module.exports = async (member) => {

    const channel = member.guild.channels.cache.get('ID-CHANNEL-WELCOME-MESSAGE');
    if (!channel) return;

    channel.send(`:white_small_square: **Welcome** ${member}! | #**${member.guild.memberCount}** members`)
}