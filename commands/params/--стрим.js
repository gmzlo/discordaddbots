exports.run = (client, message, args, chala, params) => {	
let youtube = args[3];

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
    client.channels.find(channel => channel.id === process.env.LOG_CHANNALE).send(`**log**: function **delete messenge** - удаляю сообщение автора **${message.author.username}** с содержанием : **${message}**`)
    message.delete();
	setTimeout (perclvl, 1000);
	
  function perclvl(){
  if(message.author.id === process.env.owner_id){
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
	setTimeout (sintcheck, 1000);	
} else {
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
});  return undefined;	}
  }
    function sintcheck(){
        message.channel.send({embed: {
            "description": ":repeat_one: начинаю проверку синтаксиса",
            "color": 15924992,
        }
        })
		setTimeout (checkdat, 1000);
    }
	function checkdat(){
        if (args[3] === undefined || youtube === undefined ){
            message.channel.send({embed: {
                "description": ":x: Ошибка синтаксита выведение Аносна не возможно",
                "color": 15337994,
        }
        }); 
		} else {
        message.channel.send({embed: {
            "description": ":white_check_mark: синтаксис сообщения верный ожидайте анонс",
            "color": 1693449,
    }
    })
	setTimeout (anon, 1000);
	}
}
 function anon() {
client.channels.find(channel => channel.id === process.env.ANON_STREAM_CHANNALE).send(`@everyone хей хей Всем привет у Неко опять начиняется Стримчик Все туда :3 https://www.twitch.tv/eclairbns
Twitch`)
client.channels.find(channel => channel.id === process.env.ANON_STREAM_CHANNALE).send(`@everyone а вот ссылочка на Ютуб ${youtube}`);
    }
}
