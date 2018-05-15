const Discord = require('discord.js');
exports.run = (client, message, args, chala, langu) => {
    message.delete();
if (message.guild.roles.find("name", "Admin") === null || message.guild.roles.find("name", "Moder") === null || message.guild.roles.find("name", "Anonser") === null )return message.author.send({embed:{
			
                "description": ":x: основные модули бота не установлены воспользуйтесь командой botinstall",
                "color": 15337994,
        }
        });
	if (message.guild.roles.find("name", "Admin") === null) return message.author.send({embed:{
			
                "description": ":x: не установлен модуль Admin",
                "color": 15337994,
        }
        });
	if (message.guild.roles.find("name", "Moder") === null) return message.author.send({embed:{
			
                "description": ":x: не установлен модуль Moder",
                "color": 15337994,
        }
        });
	if (message.guild.roles.find("name", "Anonser") === null) return message.author.send({embed:{
			
                "description": ":x: не установлен модуль Anonser",
                "color": 15337994,
        }
        });	
	
	message.author.send({embed: {
		color: 16713430,
		author: {
			name: client.user.username,
			icon_url: client.user.avatarURL
		},
		"title": "Neko Bot h- admin info",
		"description": "Тут будет выведена помощь для команд доступных только вам"
	}})
	if (message.author.id === process.env.owner_id) {
		message.author.send({embed:{
			color: 0xe20808,
			"title": "Neko Bot owner info",
			"description": "Эти команды доступны только для командующего ботом!",
			"thumbnail": {
				"url": client.user.avatarURL
			},
				"fields": [
					{
						"name": "shutdown",
						"value": "выключает бота доступно только мне"
					},
				]
		}})
	}
	const ModerRole = message.guild.roles.find("name", "Moder");
	const AdminRole = message.guild.roles.find("name", "Admin");
	const AnonsRole = message.guild.roles.find("name", "Anonser");
	if (message.member.roles.has(AdminRole.id) || message.member.roles.has(ModerRole.id)) {
		message.author.send({embed:{
			color: 15830804,
			"title": "Neko Bot Admin and Moder info",
			"description": "Этих команд есть доступ только у Админов и Модеров",
			"thumbnail": {
				"url": client.user.avatarURL
			},
				"fields": [
					{
						"name": "say",
						"value": `позволяет сказать что то от имени бота, для этого вам надо написать: 
**neko say <название канала>! <метод публикации>!! <само сообщение>**
**!<название канала>** - суда вы можете вносить только 
название текстовых каналов к которым у бота есть доступ на чтение и письмо
иначе сообщение не будет выведено
**!!<метод публикации>** - это форма по которой вы получате публикацию, 
есть вы введёте: **one** то получите обычную публикацию,
при вводе: **ev** метод публикации будет для всех или everyone.
таким образом правельная команда выгледит так:
neko say chat one привет`
					},
					{
						"name": "msdel",
						"value": `позволяет удалить сообщения с сверева, для этого вам нужна написать:
**neko msdel <чисто от 2 до 100>**
Внимание!!! меньше или большее число создаст ошибку и не удалит сообщения`
					},
				]
		}})
	}
	if (message.member.roles.has(AnonsRole.id)) {
		message.author.send({embed:{
			color: 7524363,
			"title": "Neko Bot Anonser info",
			"description": "Этих команд есть доступ только для Анонсеров",
			"thumbnail": {
				"url": client.user.avatarURL
			},
			"fields": [
				{
					"name": "Внимение!!!",
					"value": "Эти команды пишутся через **неко** на русском а не Английском, ниже будут описаны полные команды а не только комад часть"
				},
				{
					"name": "неко анонс --рейд",
					"value": `Эта Команда позволяет вам вывести Анонс в спец чат Annonsi
Эта ввариация команды выводит Анонс об Рейде и выглядет так:
**неко анонс --рейд <номер статика>! <Имя Босса Рейда>!! <день недели когда состоится рейд>!!! <Время Сбора>!!!! <Время Начала рейда>!!!!!**
**!<номер статика>** - на ваше усмотрение но помните всего статиков может быть 4 не обманывайте людей ) тоесть число от 1 - 4 эт номер статика
**!!<Имя Босса Рейда>** - тут уже чётко пишем либо: Ворона либо: Джулии , желательно с маленькой буквы будет проверка систаксиса!!!!
**!!!<день недели когда состоится рейд>** - день недели с понедельника по воскресения можно сокрощенно но сложней ) или сегодня и завтра, Внимание идёт проверка синтаксиса!!!
**!!!!<Время Сбора>** - Время начала сбора на рейд в 24 часовом формате
**!!!!!<Время Начала рейда>** - Время начала рейда в 24 часовом формате
и так правильная команда будет выглядеть так:
неко анонс --рейд 1 ворона воскресение 19:30 20:00`
				},
				{
					"name": "неко анонс --таблица",
					"value": `Эта Команда позволяет вам вывести Анонс в спец чат Annonsi
Эта ввариация команды выводит Анонс об Таблице и выглядет так:
**неко анонс --таблица <номер статика>! <Имя Босса Рейда>!!**
**!<номер статика>** - на ваше усмотрение но помните всего статиков может быть 4 не обманывайте людей ) тоесть число от 1 - 4 эт номер статика
**!!<Имя Босса Рейда>** - тут уже чётко пишем либо: Ворон либо: Джулия , желательно с маленькой буквы будет проверка систаксиса!!!!
и так правильная команда будет выглядеть так:
неко анонс --таблица 1 ворон`
				},
			]
		}})
	}
	if(message.author.id == "238499960092491776" || message.member.roles.has(AdminRole.id) || message.member.roles.has(ModerRole.id) || message.member.roles.has(AnonsRole.id)){
		message.author.send({embed: {
			color: 16713430,
			"title": "На данный момент!",
			"description": "вам показаны все доступные для вас команды Спасибо",
			"timestamp": new Date(),
			"footer": {
				"icon_url": client.user.avatarURL,
				"text": "© neko"
			},
		}})
	} else{
		message.author.send({embed: {
			"description": "-------------------------------------------------------",
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
					"name": "У вас нет уровня Доступа до Админ команд.",
					"value": "-------------------------------------------------------"
				},
			],
		}
		})
		message.author.send({embed: {
			color: 16713430,
			"title": "На данный момент!",
			"description": "вам показаны все доступные для вас команды Спасибо",
			"timestamp": new Date(),
			"footer": {
				"icon_url": client.user.avatarURL,
				"text": "© neko"
			},
		}})
	}		
}