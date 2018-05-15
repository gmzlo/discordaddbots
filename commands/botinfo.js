const version = require('../data/version.json');
exports.run = (client, message, member, BotAutor, BotVersion) => {
	
message.channel.send({
	embed: {
		color: 0xe20808,
		title: "Botu Inuforumatu",
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
})
}