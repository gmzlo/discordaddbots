const Discord = require('discord.js');

exports.run = (client, message, args) => {
const langu = args[2];
const chala = message.channel;

try{
let hFile  = require(`./-h/${langu}.js`);
hFile.run(client, message, args, chala, langu);
} catch(e) {
    console.log(e.message);
    client.channels.find("id", process.env.LOG_CHANNALE).send(`**log**: **error** - ${e.message}
    -------------------------------------------------------------------`);
} finally {
    console.log(`${message.author.username} run the lang: ${langu}`);
    client.channels.find("id", process.env.LOG_CHANNALE).send(`**log**: **run langu** - **${message.author.username}** run the command: **${langu}**
    -------------------------------------------------------------------`);
}
}