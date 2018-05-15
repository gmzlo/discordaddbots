exports.run = (client, message, args) => {

			message.channel.send({"embed": {
				"title": "Neko Bot Invite",
				"description": "Onegai inuvaite [Neko](https://discordapp.com/oauth2/authorize?client_id=394476127768412160&scope=bot&permissions=2146958591) io sono playo domo Arigato",
				"url": "https://discordapp.com/oauth2/authorize?client_id=394476127768412160&scope=bot&permissions=2146958591",
				"color": 16713430,
				"timestamp": new Date(),
				"footer": {
					"icon_url": client.user.avatarURL,
					"text": "© neko"
				},
				"thumbnail": {
					"url": client.user.avatarURL
				},
				"fields": [
					{
						"name": "Invite Link",
						"value": "https://discordapp.com/oauth2/authorize?client_id=394476127768412160&scope=bot&permissions=2146958591"
					}
				],
				"author": {
					"name": client.user.username,
					"url": "https://discordapp.com/oauth2/authorize?client_id=394476127768412160&scope=bot&permissions=2146958591",
					"icon_url": client.user.avatarURL
				}
			}
        });
    }