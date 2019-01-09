const NekoJS = require("nekos.life");

exports.run = (client, message, args) => {
	const user = message.mentions.users.first();
	if (!user) { return message.channel.send(`:x: **${message.author.username}** O.o anata wa feedu anata jishin??`)
	}else{
	message.channel.send(`**${message.author.username}** feedu wa **${user.username}** :spaghetti: `)
	const sfw = new NekoJS();
    sfw.getSFWFeed().then(feed => {
	message.channel.send({embed: {
	color: client.getRandomColor(),
	author: {
		icon_url: client.user.avatarURL
	},
	image: {
		url: feed.url
	}
}
});
});
}
}