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
				},
				{
				name: "Invite Link 🔗",
				value: `
				**Server**: [https://invite.neko.me/](https://discord.gg/Fd2n2Y8)
				 **Bot**: [https://bot.neko.me/](https://discordapp.com/oauth2/authorize?client_id=394476127768412160&scope=bot&permissions=2146958591)
				 `
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