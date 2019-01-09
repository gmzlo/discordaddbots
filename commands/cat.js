const NekoJS = require("nekos.life");

exports.run = (client, message, args) => {
	const sfw = new NekoJS();
	sfw.getSFWMeow().then(meow => {
	message.channel.send({embed: {
	color: client.getRandomColor(),
	author: {
        name: "Meow 🐱",
		icon_url: client.user.avatarURL
	},
	image: {
		url: meow.url
	}
}
});
});
}