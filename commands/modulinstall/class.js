const Discord = require('discord.js');

exports.run = (client, message, args) => {
const classu = args[3];
const chala = message.channel;

try{
let hFile  = require(`./class/${classu}.js`);
hFile.run(client, message, args, chala, classu);
} catch(e) {
    console.log(e.message);
    client.channels.find("id", process.env.LOG_CHANNALE).send(`**log**: **error** - ${e.message}
    -------------------------------------------------------------------`);
} finally {
    console.log(`${message.author.username} run the lang: ${classu}`);
    client.channels.find("id", process.env.LOG_CHANNALE).send(`**log**: **run classu** - **${message.author.username}** run the command: **${classu}**
    -------------------------------------------------------------------`);
}
}