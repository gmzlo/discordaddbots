exports.run = async(client) => {
	console.log('I am reconnecting now!')
	client.channels.find("id", process.env.LOG_CHANNALE).send(`**log**: function **reconnecting** - I am reconnecting now!`)
	client.channels.find("id", process.env.LOG_CHANNALE).send(`-------------------------------------------------------------------`)
}