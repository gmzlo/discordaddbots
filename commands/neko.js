const NekoJS = require("neko.js");

exports.run = (client, message, args) => {
	let nekoclient = new NekoJS.Client();
	nekoclient.neko().then(function(nekoImg){
	message.channel.send({embed: {
	color: client.getRandomColor(),
	author: {
		name: "Nekos \\o/",
		icon_url: client.user.avatarURL
	},
	image: {
		url: nekoImg.neko
	}
}
});
});
}