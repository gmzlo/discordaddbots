const NekoJS = require("nekos.life");

exports.run = (client, message, args) => {
	const sfw = new NekoJS();
	sfw.getSFWWoof().then(woof => {
    message.channel.send({embed: {
	color: client.getRandomColor(),
	author: {
		name: "Woof 🐺",
		icon_url: client.user.avatarURL
	},
	image: {
		url: woof.url
	}
}
});
    })};
