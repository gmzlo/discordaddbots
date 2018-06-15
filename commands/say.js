exports.run = (client, message, args) => {
    message.delete();
	exports.run = (client, message, args) => {
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
			if (args[2] === undefined) return message.channel.send({embed: {
				"description": ":x: sintaxisi Erroru",
				"color": 15337994,
		}
		});
		if (args[3] === undefined) return message.channel.send({embed: {
			"description": ":x: sintaxisi Erroru",
			"color": 15337994,
	}
	});
	if (args[4] === undefined) return message.channel.send({embed: {
		"description": ":x: sintaxisi Erroru",
		"color": 15337994,
}
});
	var msgSay = message.cleanContent.replace(`neko say ${args[2]} ${args[3]}`, "");
	let ForsceSay = args[3];
	if (ForsceSay === "ev") return message.guild.channels.find("name", args[2]).send("@everyone" + msgSay);
	if (ForsceSay === "one") return message.guild.channels.find("name", args[2]).send(msgSay);
	if ( ForsceSay === "ev" || ForsceSay === "one") {

	}
	else {
		message.channel.send({embed: {
			"description": ":x: sintaxisi Erroru",
			"color": 15337994,
	}
	});
	}
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
}
