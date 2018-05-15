exports.run = async(client, message) => {
    const Discord = require('discord.js');

    if (message.author.bot) return undefined;
	if (!(message.content.startsWith(process.env.PREFIX) || message.content.startsWith(process.env.PREFIXADM))) return;
	
    const sender = message.author;
	const args = message.content.split(' ');
	const cmd = args[1];


    try{
        let commandFile = require(`../commands/${cmd}.js`);
        commandFile.run(client, message, args);
    } catch(e) {
        console.log(e.message);
        client.channels.find("id", process.env.LOG_CHANNALE).send(`**log**: **error** - ${e.message}
        -------------------------------------------------------------------`);
    } finally {
        console.log(`${message.author.username} run the command: ${cmd}`);
        client.channels.find("id", process.env.LOG_CHANNALE).send(`**log**: **run cmd** - **${message.author.username}** run the command: **${cmd}**
        -------------------------------------------------------------------`);
	}
}