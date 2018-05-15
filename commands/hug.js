const NekoJS = require("neko.js");

exports.run = (client, message, args) => {
	const user = message.mentions.users.first();
	if (!user) { return message.channel.send(`:x: **${message.author.username}** O.o anata wa hugu anata jishin??`)
	}else{
	message.channel.send(`**${message.author.username}** hugu wa **${user.username}** :revolving_hearts: `)
	let nekoclient = new NekoJS.Client();
	nekoclient.hug().then(function(hug){
	message.channel.send({embed: {
	color: client.getRandomColor(),
	author: {
		icon_url: client.user.avatarURL
	},
	image: {
		url: hug.url
	}
}
});
});
}
}