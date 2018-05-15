const Discord = require('discord.js');

exports.run = (client, message, args) => {

    message.channel.send(`Timu nya! toluku: ${Date.now() - message.createdTimestamp} ms
tu pingu: ${Math.round(client.ping)} ms`);
		message.channel.send('Nya. Watashi wa neko desu! :cat: ');

}