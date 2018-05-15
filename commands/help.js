exports.run = (client, message, args) => {

message.channel.send("Nya. Watashi wa anata o tasukerudeshou!");
		message.channel.send({embed: {
			color: 3447003,
			author: {
			  name: client.user.username,
			  icon_url: client.user.avatarURL
			},
			title: "neko help info",
			description: "-----------------------------------------------",
			fields: [{
				name: "neko -h neko",
				value: "commando spisco wa neko originalo lenygyage des."
			  },
			  {
				name: "neko -h ru",
				value: "список комманд на русском языке."
			  },
			  {
				name: "neko -h eng",
				value: "list of commands in English!"
			  }
			],
			timestamp: new Date(),
			footer: {
			  icon_url: client.user.avatarURL,
			  text: "© neko"
			}
		  }
        });
    }