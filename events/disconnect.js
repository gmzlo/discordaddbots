exports.run = async(client) => {
	client.channels.find("id", process.env.LOG_CHANNALE).send(`**log**: function **disconnect** - I just disconnected, making sure you know, I will reconnect now...
-------------------------------------------------------------------`)
	console.log('I just disconnected, making sure you know, I will reconnect now...')
}