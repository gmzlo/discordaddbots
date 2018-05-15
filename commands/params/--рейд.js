exports.run = (client, message, args, chala, params) => {
		if (message.guild.roles.find("name", "Admin") === null || message.guild.roles.find("name", "Moder") === null || message.guild.roles.find("name", "Anonser") === null )return message.channel.send({embed:{
			
                "description": ":x: основные модули бота не установлены воспользуйтесь командой botinstall",
                "color": 15337994,
        }
        });
	if (message.guild.roles.find("name", "Admin") === null) return message.channel.send({embed:{
			
                "description": ":x: не установлен модуль Admin",
                "color": 15337994,
        }
        });
	if (message.guild.roles.find("name", "Moder") === null) return message.channel.send({embed:{
			
                "description": ":x: не установлен модуль Moder",
                "color": 15337994,
        }
        });
	if (message.guild.roles.find("name", "Anonser") === null) return message.channel.send({embed:{
			
                "description": ":x: не установлен модуль Anonser",
                "color": 15337994,
        }
        });


  message.channel.send({embed: {
        "description": "------------------------------------------------",
        "color": 15924992,
        "timestamp": new Date(),
        "footer": {
            "icon_url": client.user.avatarURL,
            "text": "© neko"
        },
        "thumbnail": {
            "url": "https://raw.githubusercontent.com/NekoUchiha/neko-bot/master/img/sync.png"
        },
        "fields": [
            {
                "name": "начинаю проверку ваших привелегий",
                "value": "------------------------------------------------"
            },
        ],
    }
    });
    console.log(`удаляю сообщение автора ${message.author.username} с содержанием : ${message}`)
    client.channels.find("id", process.env.LOG_CHANNALE).send(`**log**: function **delete messenge** - удаляю сообщение автора **${message.author.username}** с содержанием : **${message}**`)
    message.delete();
    setTimeout(function() {
    const AnonsRole = message.guild.roles.find("name", "Anonser");
    if (!message.member.roles.has(AnonsRole.id)) {
    message.channel.send({embed: {
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
            "name": "У вас нет Доступа до этой Команды.",
            "value": "------------------------------------------------"
        },
    ],
}
});  return undefined;	}}, 1000)
const AnonsRole = message.guild.roles.find("name", "Anonser");
if (message.member.roles.has(AnonsRole.id)) {
        message.channel.send({embed: {
                "description": "-------------------------------------------------------------",
                "color": 1693449,
                "timestamp": new Date(),
                "footer": {
                    "icon_url": client.user.avatarURL,
                    "text": "© neko"
                },
                "thumbnail": {
                    "url": "https://raw.githubusercontent.com/NekoUchiha/neko-bot/master/img/apply.png"
                },
                "fields": [
                    {
                        "name": "доступ разрешен ожидайте проверку синтакиса",
                        "value": "-------------------------------------------------------------"
                    },
                ],
        }
        })
    setTimeout(function() {
        message.channel.send({embed: {
            "description": ":repeat_one: начинаю проверку синтаксиса",
            "color": 15924992,
        }
        });
    }, 2000)
        let statick = args[3];
        let reidname = args[4];
        let daynedel = args[5];
        let timereid = args[6];
        let timestartreid = args[7];
        if (args[7] === undefined || timestartreid === undefined ) {setTimeout(function() {
            message.channel.send({embed: {
                "description": ":x: Ошибка синтаксита выведение Аносна не возможно",
                "color": 15337994,
        }
        });	}, 3000)
    } else {setTimeout(function() { 
        message.channel.send({embed: {
            "description": ":white_check_mark: синтаксис сообщения верный ожидайте анонс",
            "color": 1693449,
    }
    })}, 3000)
    setTimeout(function() {
     message.guild.channels.find("name", "annonsi").send( `@everyone ${statick} статик, Рейд ${reidname} Будет в ${daynedel} сбор в ${timereid} начало в ${timestartreid} всем быть!!!`);
    }, 4000)} }
}