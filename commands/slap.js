const NekoJS = require("nekos.life");

exports.run = (client, message, args) => {
	const user = message.mentions.users.first();
	if (!user) { return message.channel.send(`:x: **${message.author.username}** O.o anata wa slapu anata jishin??`)
	}else{
	message.channel.send(`**${message.author.username}** slapu wa **${user.username}** :raised_back_of_hand: `)
	const sfw = new NekoJS();
    sfw.getSFWSlap().then(slap => {
	message.channel.send({embed: {
	color: client.getRandomColor(),
	author: {
		icon_url: client.user.avatarURL
	},
	image: {
		url: slap.url
	}
}
});
});
}
}