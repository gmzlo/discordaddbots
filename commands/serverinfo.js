const dateFormat = require('dateformat');
const Discord = require('discord.js');
const now = new Date();
dateFormat(now, 'dddd, mmmm dS, yyyy, h:MM:ss TT');

exports.run = (client, message) => {
    if (!message.guild) {
        throw 'This can only be used in a guild!';
    }

    const millis = new Date().getTime() - message.guild.createdAt.getTime();
    const days = millis / 1000 / 60 / 60 / 24;

    const owner = message.guild.owner.user || {};

    const verificationLevels = ['None', 'Low', 'Medium', 'Insane', 'Extreme'];
	const randomColor = "#000000".replace(/0/g, function () { return (~~(Math.random() * 16)).toString(16); });
  
  if (!message.guild.iconURL) {
    var embed = new Discord.RichEmbed()
    .setTitle(`${message.guild.name}`, "This is the servers info!")
    .setColor(randomColor)
    .addField("Created On", `${dateFormat(message.guild.createdAt)}`, true)
    .addField("Region", `${message.guild.region}`, true)
    .addField("User Count", `${message.guild.members.filter(m => m.presence.status !== 'offline').size} / ${message.guild.memberCount}`, true)
    .addField("Owner", `${owner.username || 'None'}`, true)
    .addField("Text Channels Count", `${message.guild.channels.filter(m => m.type === 'text').size}`, true)
    .addField("Voice Channels Count", `${message.guild.channels.filter(m => m.type === 'voice').size}`, true)
    .addField("Verification Level", `${verificationLevels[message.guild.verificationLevel]}`, true)
    .addField("Roles Count", `${message.guild.roles.size}`, true)
    .addField("Guild ID", `${message.guild.id}`, true)
    message.channel.send({ embed: embed });
} else {
    var embed2 = new Discord.RichEmbed()
    .setTitle(`${message.guild.name}`, "This is the servers info!", true)
    .setColor(randomColor)
    .setThumbnail(`${message.guild.iconURL}`, true)
    .addField("Created On", `${dateFormat(message.guild.createdAt)}`, true)
    .addField("Region", `${message.guild.region}`, true)
    .addField("User Count", `${message.guild.members.filter(m => m.presence.status !== 'offline').size} / ${message.guild.memberCount}`, true)
    .addField("Owner", `${owner.username || 'None'}`, true)
    .addField("Text Channels Count", `${message.guild.channels.filter(m => m.type === 'text').size}`, true)
    .addField("Voice Channels Count", `${message.guild.channels.filter(m => m.type === 'voice').size}`, true)
    .addField("Verification Level", `${verificationLevels[message.guild.verificationLevel]}`, true)
    .addField("Roles Count", `${message.guild.roles.size}`, true)
    .addField("Guild ID", `${message.guild.id}`, true)
    message.channel.send({ embed: embed2 });
  }};
