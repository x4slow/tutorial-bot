module.exports = {
    name: "test-message",
    category: "template",
    timeout: 5000,
    run: async (client, message, args) => {

    	message.channel.send('test!');

    	// message.reply('test!');

	}
}