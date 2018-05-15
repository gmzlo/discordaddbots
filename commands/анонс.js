const Discord = require('discord.js');

exports.run = (client, message, args) => {
const params = args[2];
const chala = message.channel;

try{
let hFile  = require(`./params/${params}.js`);
hFile.run(client, message, args, chala, params);
} catch(e) {
    console.log(e.message);
    client.channels.find("id", process.env.LOG_CHANNALE).send(`**log**: **error** - ${e.message}
    -------------------------------------------------------------------`);
} finally {
    console.log(`${message.author.username} run the lang: ${params}`);
    client.channels.find("id", process.env.LOG_CHANNALE).send(`**log**: **run params** - **${message.author.username}** run the command: **${params}**
    -------------------------------------------------------------------`);
}
}