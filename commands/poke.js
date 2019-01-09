const NekoJS = require("nekos.life");

exports.run = (client, message, args) => {
	const user = message.mentions.users.first();
	if (!user) { return message.channel.send(`:x: **${message.author.username}** O.o anata wa pokeu anata jishin??`)
	}else{
	message.channel.send(`**${message.author.username}** pokeu wa **${user.username}** :point_right: `)
	const sfw = new NekoJS();
    sfw.getSFWPoke().then(poke => {
	message.channel.send({embed: {
	color: client.getRandomColor(),
	author: {
		icon_url: client.user.avatarURL
	},
	image: {
		url: poke.url
	}
}
});
});
}
}