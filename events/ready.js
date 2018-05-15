const version = require('../data/version.json');
exports.run = async(client) => {
const Discord = require('discord.js');

client.channels.get(process.env.LOG_CHANNALE).send(`
============================================

█──█──███──█──█──████
██─█──█────█─█───█──█
█─██──███──██────█──█
█──█──█────█─█───█──█
█──█──███──█──█──████

============================================
**log**: function **ready** - Logged in as **${client.user.username}  [ID ${client.user.id}]**!
**log**: function **ready** - On **${client.guilds.size} servers**!
**${client.channels.size}** channels and **${client.users.size}** users cached!
**log**: function **ready** - Bot Game Set **neko help**
**log**: function **ready** - Bot Autor = **${version.BotAutor}**
Bot Version = **${version.BotVersion}**
============================================`)
client.channels.get(process.env.BOT_INFO_LOG_CHANNALE).send({
	embed: {
		color: 0xe20808,
		title: "I restarted",
		author: {
			name: client.user.username,
			icon_url: client.user.avatarURL
		}
		,
		fields: [
			{
				name: "Guilds",
				value: client.guilds.size
				, inline: true
			},
			{
				name: "Users",
				value: client.users.filter(g => g.client).size, inline: true
			},
			{
				name: "Bot Autor",
				value: version.BotAutor, inline: true
			}, {
				name: "Bot Version",
				value: version.BotVersion, inline: true
			},

			{
				name: "Ram used",
				value: `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB`, inline: true
			},
			{
				name: "Version info",
				value: "**Node**: " + process.version, inline: true

			}
		],
		timestamp: new Date(),
	}

}).catch(e => console.warn('wew tf happened here ' + e));
client.user.setGame("neko help")
console.log('===================================================')
console.log(`
♥♥──♥♥─♥♥♥♥♥──♥♥──♥♥──♥♥♥♥
♥♥♥─♥♥─♥♥─────♥♥─♥♥──♥♥──♥♥
♥♥─♥♥♥─♥♥♥♥───♥♥♥♥───♥♥──♥♥
♥♥──♥♥─♥♥─────♥♥─♥♥──♥♥──♥♥
♥♥──♥♥─♥♥♥♥♥──♥♥──♥♥──♥♥♥♥
`)
console.log('===================================================')
console.log(`
█───████─████─████──███─█──█─████─███
█───█──█─█──█─█──██──█──██─█─█────█
█───█──█─████─█──██──█──█─██─█─██─███
█───█──█─█──█─█──██──█──█──█─█──█───█
███─████─█──█─████──███─█──█─████─███
`)
console.log('===================================================')
console.log(`Logged in as ${client.user.username} [ID ${client.user.id}]!`)
console.log(`On ${client.guilds.size} servers!`)
console.log(`${client.channels.size} channels and ${client.users.size} users cached!`)
console.log('Bot Game Set neko help')
console.log(`Bot Autor = ${version.BotAutor}`)
console.log(`Bot Version = ${version.BotVersion}`)
console.log('===================================================');
}