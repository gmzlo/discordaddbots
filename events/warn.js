exports.run = async(client, error) => {
	console.warn
	client.channels.find("id", process.env.LOG_CHANNALE).send(`**log**: **warn** - ${warn}
	-------------------------------------------------------------------`)
}