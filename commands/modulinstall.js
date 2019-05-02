const Discord = require('discord.js');

exports.run = (client, message, args) => {
const modulu = args[2];
const chala = message.channel;

try{
let hFile  = require(`./modulinstall/${modulu}.js`);
hFile.run(client, message, args, chala, modulu);
} catch(e) {
    console.log(e.message);
    client.channels.find("id", process.env.LOG_CHANNALE).send(`**log**: **error** - ${e.message}
    -------------------------------------------------------------------`);
} finally {
    console.log(`${message.author.username} run the lang: ${modulu}`);
    client.channels.find("id", process.env.LOG_CHANNALE).send(`**log**: **run modulu** - **${message.author.username}** run the command: **${modulu}**
    -------------------------------------------------------------------`);
}
}