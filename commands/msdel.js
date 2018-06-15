const Discord = require('discord.js');

exports.run = (client, message, args) => {
const count = args[2] 
message.delete();
	if (message.guild.roles.find("name", "Admin") === null || message.guild.roles.find("name", "Moder") === null || message.guild.roles.find("name", "Anonser") === null )return message.channel.send({embed:{
			
                "description": ":x: Generalu modulu botu notu installu onegai use commando botinstall",
                "color": 15337994,
        }
        });
	if (message.guild.roles.find("name", "Admin") === null) return message.channel.send({embed:{
			
                "description": ":x: notu installu modulu Admin",
                "color": 15337994,
        }
        });
	if (message.guild.roles.find("name", "Moder") === null) return message.channel.send({embed:{
			
                "description": ":x: notu installu modulu Moder",
                "color": 15337994,
        }
        });
	if (message.guild.roles.find("name", "Anonser") === null) return message.channel.send({embed:{
			
                "description": ":x: notu installu modulu Anonser",
                "color": 15337994,
        }
        });


	const ModerRole = message.guild.roles.find("name", "Moder");
	const AdminRole = message.guild.roles.find("name", "Admin");
		if (message.member.roles.has(AdminRole.id) || message.member.roles.has(ModerRole.id)){
	async function purge() {

		if(isNaN(count)){
			message.channel.send('Plisu numeru onegai \n Use: neko msdel <amount>');
			return;
		}

		const fefched = await message.channel.fetchMessages({limit: count});
		console.log(fefched.size + ' mesng found, deleting....');

		message.channel.bulkDelete(fefched)
		.catch(error => message.channel.send(`Error: ${error}`));
		message.channel.send(":wastebasket:" + " " + " | " + " **" + message.author.username + "**, " + fefched.size + ' messunge deletu onegai').then(msg => msg.delete(3000));
	}
	purge();
} else {message.channel.send({embed: {
	"description": "------------------------------------------------",
	"color": 15337994,
	"timestamp": new Date(),
	"footer": {
		"icon_url": client.user.avatarURL,
		"text": "© neko"
	},
	"thumbnail": {
		"url": "https://raw.githubusercontent.com/NekoUchiha/neko-bot/master/img/dont.png"
	},
	"fields": [
		{
			"name": "Gomennasai anata no tokken chīsa sugiru",
			"value": "------------------------------------------------"
		},
	],
}
}); return;}
}