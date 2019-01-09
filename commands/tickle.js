const NekoJS = require("nekos.life");

exports.run = (client, message, args) => {
	const user = message.mentions.users.first();
	if (!user) { return message.channel.send(`:x: **${message.author.username}** O.o anata wa tickleu anata jishin??`)
	}else{
	message.channel.send(`**${message.author.username}** tickleu wa **${user.username}** :point_down: `)
	const sfw = new NekoJS();
    sfw.getSFWTickle().then(tickle => {
	message.channel.send({embed: {
	color: client.getRandomColor(),
	author: {
		icon_url: client.user.avatarURL
	},
	image: {
		url: tickle.url
	}
}
});
});
}
}