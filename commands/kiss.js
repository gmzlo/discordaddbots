const NekoJS = require("neko.js");

exports.run = (client, message, args) => {
	const user = message.mentions.users.first();
	if (!user) { return message.channel.send(`:x: **${message.author.username}** O.o anata wa kissu anata jishin??`)
	}else{
	message.channel.send(`**${message.author.username}** kissu wa **${user.username}** :kiss:  `)
	let nekoclient = new NekoJS.Client();
	nekoclient.kiss().then(function(kiss){
	message.channel.send({embed: {
	color: client.getRandomColor(),
	author: {
		icon_url: client.user.avatarURL
	},
	image: {
		url: kiss.url
	}
}
});
});
}
}