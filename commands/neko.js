const NekoJS = require("nekos.life");

exports.run = (client, message, args) => {
	const sfw = new NekoJS();
	sfw.getSFWNeko().then(neko => {
	message.channel.send({embed: {
	color: client.getRandomColor(),
	author: {
		name: "Nekos \\o/",
		icon_url: client.user.avatarURL
	},
	image: {
		url: neko.url
	}
}
});
});
}