const NekoJS = require("neko.js");

exports.run = (client, message, args) => {
	const user = message.mentions.users.first();
	if (!user) { return message.channel.send(`:x: **${message.author.username}** O.o anata wa patu anata jishin??`)
	}else{
	message.channel.send(`**${message.author.username}** patu wa **${user.username}** :sparkling_heart: `)
	let nekoclient = new NekoJS.Client();
	nekoclient.pat().then(function(pat){
	message.channel.send({embed: {
	color: client.getRandomColor(),
	author: {
		icon_url: client.user.avatarURL
	},
	image: {
		url: pat.url
	}
}
});
});
}
}