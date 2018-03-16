const { Client, Util } = require('discord.js');
const YouTube = require('simple-youtube-api');
const ytdl = require('ytdl-core');
const neko = require("neko.js");


const client = new Client({ disableEveryone: false });

const youtube = new YouTube(process.env.GOOGLE_API_KEY);

const queue = new Map();

const BotVersion = "0.9.11";

const BotAutor = "Neko";

let nekoclient = new neko.Client();

client.on('warn', () => {
	console.warn
	client.channels.find("id", process.env.LOG_CHANNALE).send(`**log**: **warn** - ${warn}
-------------------------------------------------------------------`)});

client.on('error', () => {
	 console.error
	 client.channels.find("id", process.env.LOG_CHANNALE).send(`**log**: **error** - ${error}
-------------------------------------------------------------------`)});

client.on('ready', () => {
client.channels.find("id", process.env.LOG_CHANNALE).send(`**log**: function **ready** - Logged in as **${client.user.username}  [ID ${client.user.id}]**!
**log**: function **ready** - On **${client.guilds.size} servers**!
**${client.channels.size}** channels and **${client.users.size}** users cached!
**log**: function **ready** - Bot Game Set **neko help**
**log**: function **ready** - Bot Autor = **${BotAutor}**
Bot Version = **${BotVersion}**
-------------------------------------------------------------------`)
client.user.setGame("neko help")
console.log(`Logged in as ${client.user.username} [ID ${client.user.id}]!
On ${client.guilds.size} servers!
${client.channels.size} channels and ${client.users.size} users cached!
Bot Game Set neko help
Bot Autor = ${BotAutor}
Bot Version = ${BotVersion} `)
client.channels.get(process.env.BOT_INFO_LOG_CHANNALE).send({
	embed: {
		color: 0xe20808,
		title: "I restarted",
		author: {
			name: client.user.username,
			icon_url: client.user.avatarURL
		}
		,
		fields: [
			{
				name: "Guilds",
				value: client.guilds.size
				, inline: true
			},
			{
				name: "Users",
				value: client.users.filter(g => g.client).size, inline: true
			},
			{
				name: "Bot Autor",
				value: BotAutor, inline: true
			}, {
				name: "Bot Version",
				value: BotVersion, inline: true
			},

			{
				name: "Ram used",
				value: `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB`, inline: true
			},
			{
				name: "Version info",
				value: "**Node**: " + process.version, inline: true

			}
		],
		timestamp: new Date(),
	}

}).catch(e => console.warn('wew tf happened here ' + e));
client.user.setGame("neko help")
});


client.on('disconnect', () => {
	console.log('I just disconnected, making sure you know, I will reconnect now...')
	client.channels.find("id", process.env.LOG_CHANNALE).send(`**log**: function **disconnect** - I just disconnected, making sure you know, I will reconnect now...
-------------------------------------------------------------------`)});

client.on('reconnecting', () => {
	console.log('I am reconnecting now!')
	client.channels.find("id", process.env.LOG_CHANNALE).send(`**log**: function **reconnecting** - I am reconnecting now!
-------------------------------------------------------------------`)});

// Create an event listener for new guild members
client.on('guildMemberAdd', member => {
	// Send the message to a designated channel on a server:
	const channel = member.guild.channels.find('name', 'chat');
	// Do nothing if the channel wasn't found on this server
	if (!channel) return;
	// Send the message, mentioning the member
	channel.send(`Welcomu to serveru, ${member} onegai pleito`);
  });

 client.getRandomColor = () => {

	let letters = '0123456789';
	let color = '';
	for (let i = 0; i < 7; i++) {
		color += letters[Math.floor(Math.random() * 10)];
	}

	return color;
};  
  
client.on('message', async msg => { // eslint-disable-line
	if (msg.author.bot) return undefined;

	const args = msg.content.split(' ');
	const searchString = args.slice(1).join(' ');
	const url = args[1] ? args[1].replace(/<(.+)>/g, '$1') : '';
	const serverQueue = queue.get(msg.guild.id);

	if (msg.content.startsWith('neko play')) {
		const voiceChannel = msg.member.voiceChannel;
		if (!voiceChannel) return msg.channel.send('Nya. onegai connecto voice chanal');
		const permissions = voiceChannel.permissionsFor(msg.client.user);
		if (!permissions.has('CONNECT')) {
			return msg.channel.send('Watashi wa ii connecto wa channal :(');
		}
		if (!permissions.has('SPEAK')) {
			return msg.channel.send('Watashi wa chan`neru de hanasu koto ga dekimasen');
		}

		if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {
			const playlist = await youtube.getPlaylist(url);
			const videos = await playlist.getVideos();
			for (const video of Object.values(videos)) {
				const video2 = await youtube.getVideoByID(video.id); // eslint-disable-line no-await-in-loop
				await handleVideo(video2, msg, voiceChannel, true); // eslint-disable-line no-await-in-loop
			}
			return msg.channel.send(`:white_check_mark:  Playlist: **${playlist.title}** Nya. addedo to the queue!`);
		} else {
			try {
				var video = await youtube.getVideo(url);
			} catch (error) {
				try {
					var videos = await youtube.searchVideos(searchString, 10);
					let index = 0;
					voiceChannel.join();
					msg.channel.send(`:white_check_mark: connecto wa channale **${voiceChannel.name}**`);
					msg.channel.send({embed: {
						color: 0x66eb00,
						fields: [{
							name: `Song selection:`,
							value: `${videos.map(video2 => `**${++index} -** ${video2.title}`).join('\n')}
							`
						  },
						],
						Thumbnail: {
							
					},
						footer: {
							text: "Irande kudasi no valuemo wa selecto ichi ni kensaku resultso 1-10"
						}					
					  }
					});
					// eslint-disable-next-line max-depth
					try {
						var response = await msg.channel.awaitMessages(msg2 => msg2.content > 0 && msg2.content < 11, {
							maxMatches: 1,
							time: 20000,
							errors: ['time']
						});
					} catch (err) {
						console.error(err);
						return msg.channel.send('Ii o no corecto valumo enterado, cancello video selecto. Nya');
					}
					const videoIndex = parseInt(response.first().content);
					var video = await youtube.getVideoByID(videos[videoIndex - 1].id);
				} catch (err) {
					console.error(err);
					return msg.channel.send(':sos: Watashi wa ii no correcto scripto, Onegai Admino sendo mailo.');
				}
			}
			return handleVideo(video, msg, voiceChannel);
		}
	} else if (msg.content.startsWith('neko skip')) {
		if (!msg.member.voiceChannel) return msg.channel.send('Nya. onegai connecto voice chanal');
		if (!serverQueue) return msg.channel.send('There is nothing playing that I could skip for you.');
		serverQueue.connection.dispatcher.end('Nya. Skip commando usa!');
		return undefined;
	} else if (msg.content.startsWith('neko stop')) {
		if (!msg.member.voiceChannel) return msg.channel.send('Nya. onegai connecto voice chanal');
		if (!serverQueue) return msg.channel.send('There is nothing playing that I could stop for you.');
		serverQueue.songs = [];
		serverQueue.connection.dispatcher.end('Nya. Stopo commando usede!');
		return undefined;
	} else if (msg.content.startsWith('neko volume')) {
		if (!msg.member.voiceChannel) return msg.channel.send('Nya. onegai connecto voice chanal');
		if (!serverQueue) return msg.channel.send('There is nothing playing.');
		if (!args[1]) return msg.channel.send(`The current volume is: **${serverQueue.volume}**`);
		serverQueue.volume = args[1];
		serverQueue.connection.dispatcher.setVolumeLogarithmic(args[1] / 5);
		return msg.channel.send(`I set the volume to: **${args[1]}**`);
	} else if (msg.content.startsWith('neko np')) {
		if (!serverQueue) return msg.channel.send('There is nothing playing.');
		return msg.channel.send(`:notes: Now playing: **${serverQueue.songs[0].title}**`);
	} else if (msg.content.startsWith('neko queue')) {
		if (!serverQueue) return msg.channel.send('There is nothing playing.');
		return msg.channel.send(`
__**Song queue:**__

${serverQueue.songs.map(song => `**-** ${song.title}`).join('\n')}

**Now playing:** ${serverQueue.songs[0].title}
		`);
	} else if (msg.content.startsWith('neko pause')) {
		if (serverQueue && serverQueue.playing) {
			serverQueue.playing = false;
			serverQueue.connection.dispatcher.pause();
			return msg.channel.send(':pause_button: Nya. Musico Pausedo desu!');
		}
		return msg.channel.send('There is nothing playing.');
	} else if (msg.content.startsWith('neko resume')) {
		if (serverQueue && !serverQueue.playing) {
			serverQueue.playing = true;
			serverQueue.connection.dispatcher.resume();
		return msg.channel.send(':play_pause: Nya. Musico Resumedo!');
		}
		return msg.channel.send('There is nothing playing.');
	} else if (msg.content.startsWith('neko ping')) {
		msg.channel.send(`Timu nya! toluku: ${Date.now() - msg.createdTimestamp} ms
tu pingu: ${Math.round(client.ping)} ms`);
		msg.channel.send('Nya. Watashi wa neko desu! :cat: ');
	  }else if (msg.content.startsWith('neko help')) {
		msg.channel.send("Nya. Watashi wa anata o tasukerudeshou!");
		msg.channel.send({embed: {
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
	} else if (msg.content.startsWith('neko -h ru')) {
		msg.channel.send({embed: {
			color: 0xe20808,
			author: {
			  name: client.user.username,
			  icon_url: client.user.avatarURL
			},
			title: "neko -h ru info",
			description: "Список комманд на русском языке",
			fields: [{
				name: "help",
				value: "основная информационая комманда."
			  },
			  {
				name: "-h neko",
				value: "описание всех команд, на уникальном неко языке."
			  },
			  {
				name: "-h ru",
				value: "описание всех команд, на русском языке."
			  },
			  {
				name: "-h eng",
				value: "описание всех команд, на английском языке."
			  },
			  {
				name: "play",
				value: "список доступних композиций **play < название композиции >** выдаёт список с композициями на выбор одной из десяти."
			  },
			  {
				name: "skip",
				value: "пропускает композицию."
			  },
			  {
				name: "stop",
				value: "останавливает композицию и выгоняет бота."
			  },
			  {
				name: "volume<значение>",
				value: "изменяет громкость воспроизвидения бота значением от 1 до 5."
			  },
			  {
				name: "pause",
				value: "ставит композицию на паузу."
			  },
			  {
				name: "resume",
				value: "продлжает воспроизводить поставленную на паузу композицию."
			  },
			  {
				name: "invite",
				value: "вы можете добавить Неко бота к себе на сервер"
			  },
			  {
				name: "neko",
				value: "выдаёт рандомную картинку некочек"
			  }
			],
			timestamp: new Date(),
			footer: {
			  icon_url: client.user.avatarURL,
			  text: "© neko"
			}
		  }
		});
	  } else if (msg.content.startsWith('neko -h eng')) {
			msg.channel.send({embed: {
				color: 0xe20808,
				author: {
					name: client.user.username,
					icon_url: client.user.avatarURL
				},
				title: "neko -h eng info",
				description: "List of commands in English",
				fields: [{
					name: "help",
					value: "basic information command."
					},
					{
					name: "-h neko",
					value: "description of all commands, in a unique language."
					},
					{
					name: "-h ru",
					value: "description of all commands, in Russian."
					},
					{
					name: "-h eng",
					value: "description of all commands, in English."
					},
					{
					name: "play",
					value: "list of available songs ** play <song name> ** gives a list with songs to choose from one of ten."
					},
					{
					name: "skip",
					value: "skips composition."
					},
					{
					name: "stop",
					value: "stops the song and expels the bot."
					},
					{
					name: "volume<значение>",
					value: "changes the volume of bot playback from 1 to 5."
					},
					{
					name: "pause",
					value: "pauses the song."
					},
					{
					name: "resume",
					value: "continues to play the paused song."
					},
					{
					name: "invite",
					value: "ivite neko bot for your server."
				},
				{
				  name: "neko",
				  value: "post random neko image"
				}
				],
				timestamp: new Date(),
				footer: {
					icon_url: client.user.avatarURL,
					text: "© neko"
				}
				}
			});
	  } else if (msg.content.startsWith('neko -h neko')) {
			msg.channel.send({embed: {
				color: 0xe20808,
				author: {
					name: client.user.username,
					icon_url: client.user.avatarURL
				},
				title: "neko -h neko info",
				description: "Listo no commando wa specialo originalo lenygyage des",
				fields: [{
					name: "help",
					value: "Basico listo no informato commando"
					},
					{
					name: "-h neko",
					value: "Listo no commando wa specialo originalo lenygyage des"
					},
					{
					name: "-h ru",
					value: "Listo no commando wa Russa lenygyage des"
					},
					{
					name: "-h eng",
					value: "Listo no commando wa Engliaso lenygyage des"
					},
					{
					name: "play",
					value: "Basico listo no songo ** play <song name> ** Watashi wa searche Anata no listо onegai selecto songo 1 - 10"
					},
					{
					name: "skip",
					value: "skipo songo des"
					},
					{
					name: "stop",
					value: "stopo songo ana boto Exito :("
					},
					{
					name: "volume<значение>",
					value: "changesu volumo poino boto playbacku  1 - 5"
					},
					{
					name: "pause",
					value: "pause songo"
					},
					{
					name: "resume",
					value: "nowo starto play inato pause songo"
					},
					{
					name: "invite",
					value: "anata no inuvito Neko Boto"
				},
				{
				  name: "neko",
				  value: "watashi posto neko imagua"
				}
				],
				timestamp: new Date(),
				footer: {
					icon_url: client.user.avatarURL,
					text: "© neko"
				}
				}
			});
	  }  else if (msg.content.startsWith('неко анонс --рейд')) {
		   	const AnonsRole = msg.guild.roles.find("name", "Anonser");
			msg.channel.send({embed: {
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
			console.log(`удаляю сообщение автора ${msg.author.username} с содержанием : ${msg}`)
			client.channels.find("id", process.env.LOG_CHANNALE).send(`**log**: function **delete messenge** - удаляю сообщение автора **${msg.author.username}** с содержанием : **${msg}**`)
			msg.delete();
			setTimeout(function() {
			if (!msg.member.roles.has(AnonsRole.id)) {
	        msg.channel.send({embed: {
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
	if (msg.member.roles.has(AnonsRole.id)) {
		setTimeout(function() {
				msg.channel.send({embed: {
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
			}, 1000)
			setTimeout(function() {
				msg.channel.send({embed: {
					"description": "начинаю проверку синтаксиса",
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
					msg.channel.send({embed: {
						"description": "Ошибка синтаксита выведение Аносна не возможно",
						"color": 15337994,
				}
				});	}, 3000)
			} else {setTimeout(function() { 
				msg.channel.send({embed: {
					"description": "синтаксис сообщения верный ожидайте анонс",
					"color": 1693449,
			}
			})}, 3000)
			setTimeout(function() {
			 msg.guild.channels.find("name", "annonsi").send( `@everyone ${statick} статик, Рейд ${reidname} Будет в ${daynedel} сбор в ${timereid} начало в ${timestartreid} всем быть!!!`);
			}, 4000)}
	  }
		}  else if (msg.content.startsWith('неко анонс --таблица')) {
			const AnonsRole = msg.guild.roles.find("name", "Anonser");
			msg.channel.send({embed: {
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
			console.log(`удаляю сообщение автора ${msg.author.username} с содержанием : ${msg}`)
			client.channels.find("id", process.env.LOG_CHANNALE).send(`**log**: function **delete messenge** - удаляю сообщение автора **${msg.author.username}** с содержанием : **${msg}**`)
			msg.delete();
			setTimeout(function() {
			if (!msg.member.roles.has(AnonsRole.id)) {
	        msg.channel.send({embed: {
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
	if (msg.member.roles.has(AnonsRole.id)) {
				msg.channel.send({embed: {
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
				msg.channel.send({embed: {
					"description": "начинаю проверку синтаксиса",
					"color": 15924992,
				}
				});
			}, 2000)
				let statick = args[3];
				let reidname = args[4];
				if (args[4] === undefined || reidname === undefined ) {setTimeout(function() {
					msg.channel.send({embed: {
						"description": "Ошибка синтаксита выведение Аносна не возможно",
						"color": 15337994,
				}
				});	}, 3000)
			} else {setTimeout(function() { 
				msg.channel.send({embed: {
					"description": "синтаксис сообщения верный ожидайте анонс",
					"color": 1693449,
			}
			})}, 3000)
			setTimeout(function() {
				if(statick == "1"){
				msg.guild.channels.find("name", "annonsi").send( `@everyone ${statick} статик, Таблица времени рейда ${reidname} сброшена, просьба заполнить данные на эту неделю до среды!!!!
https://docs.google.com/spreadsheets/d/11GKsk5NhqY-QBfOdFLuMsfxJ3WPbce_YWcpr7je0EOs/edit#gid=0`);
				}else if (statick == "2"){
			 msg.guild.channels.find("name", "annonsi").send( `@everyone ${statick} статик, Таблица времени рейда ${reidname} сброшена, просьба заполнить данные на эту неделю до среды!!!!
https://docs.google.com/spreadsheets/d/11GKsk5NhqY-QBfOdFLuMsfxJ3WPbce_YWcpr7je0EOs/edit#gid=2085288476`);
}else if (!reidname == "ворона"){
	msg.channel.send({embed: {
		"description": "Ошибка синтаксита выведение Аносна не возможно",
		"color": 15337994,
}
});	
}
			}, 4000)}
	}
		}  else if (msg.content.startsWith('neko invite')) {

			msg.channel.send({"embed": {
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
		} else if (msg.content.startsWith('neko shutdown')) {
			msg.channel.send({embed: {
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
						"name": "onegai waitu watashi scanunigu perumisionusu",
						"value": "------------------------------------------------"
					},
				],
			}
			});
		if  (msg.author.id == process.env.owner_id) {
			setTimeout(function() {
			msg.channel.send({embed: {
			"description": "------------------------------------------------",
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
					"name": "Kono komando o shiyō suru koto ga dekimasu",
					"value": "------------------------------------------------"
				},
			],
	}
	})
}, 1000)
	setTimeout(function() {
		msg.channel.send({embed: {
		"description": "Shutting down...",
		"title": "Shutdown has been initiated.",
		"color": 15337994
}
})	
}, 2000)
	setTimeout(function() {
		console.log(`Bot is shutdown`)
		client.channels.find("id", process.env.LOG_CHANNALE).send(`**log**: function **shutdown** - Bot is shutdown
-------------------------------------------------------------------`)
		client.destroy()
	}, 2000)
	setTimeout(function() {
		process.exit()
	}, 3000)
		} else {
		setTimeout(function() {
		msg.channel.send({embed: {
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
	})
}, 1000)
	}
} else if (msg.content.startsWith("neko neko")) {
	let neko = await nekoclient.neko();
	msg.channel.send({embed: {
	color: client.getRandomColor(),
	author: {
		name: "Nekos \\o/",
		icon_url: client.user.avatarURL
	},
	image: {
		url: neko.neko
	}
}
});
} else if (msg.content.startsWith("neko msdel")){
	msg.delete();
	const ModerRole = msg.guild.roles.find("name", "Moder");
	const AdminRole = msg.guild.roles.find("name", "Admin");
		if (msg.member.roles.has(AdminRole.id) || msg.member.roles.has(ModerRole.id)){
	async function purge() {

		if(isNaN(args[2])){
			msg.channel.send('Plisu numeru onegai \n Use: neko msdel <amount>');
			return;
		}

		const fefched = await msg.channel.fetchMessages({limit: args[2]});
		console.log(fefched.size + ' mesng found, deleting....');

		msg.channel.bulkDelete(fefched)
		.catch(error => msg.channel.send(`Error: ${error}`));
		msg.channel.send(":wastebasket:" + " " + " | " + " **" + msg.author.username + "**, " + fefched.size + ' messunge deletu onegai');
		setTimeout(function() {
			msg.channel.send("delete");
			msg.channel.bulkDelete(2);
		}, 3000)
	}
	purge();
} else {msg.channel.send({embed: {
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
}); return;}
}else if(msg.content.startsWith("neko say")) {
	msg.delete();
	const ModerRole = msg.guild.roles.find("name", "Moder");
	const AdminRole = msg.guild.roles.find("name", "Admin");
		if (msg.member.roles.has(AdminRole.id) || msg.member.roles.has(ModerRole.id)){
			if (args[2] === undefined) return msg.channel.send({embed: {
				"description": "Ошибка синтаксита",
				"color": 15337994,
		}
		});
		if (args[3] === undefined) return msg.channel.send({embed: {
			"description": "Ошибка синтаксита",
			"color": 15337994,
	}
	});
	var msgSay = msg.cleanContent.replace(`neko say ${args[2]} ${args[3]}`, "");
	let ForsceSay = args[3];
	if (ForsceSay === "ev") return msg.guild.channels.find("name", args[2]).send("@everyone" + msgSay);
	if (ForsceSay === "one") return msg.guild.channels.find("name", args[2]).send(msgSay);
	if ( ForsceSay === "ev" || ForsceSay === "one") {

	}
	else {
		msg.channel.send({embed: {
			"description": "Ошибка синтаксита",
			"color": 15337994,
	}
	});
	}
} else {msg.channel.send({embed: {
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
}); return;}
} else if (msg.content.startsWith("neko -h admin")) {
	msg.delete();
	msg.author.send({embed: {
		color: 16713430,
		author: {
			name: client.user.username,
			icon_url: client.user.avatarURL
		},
		"title": "Neko Bot h- admin info",
		"description": "Тут будет выведена помощь для команд доступных только вам"
	}})
	if (msg.author.id === process.env.owner_id) {
		msg.author.send({embed:{
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
	const ModerRole = msg.guild.roles.find("name", "Moder");
	const AdminRole = msg.guild.roles.find("name", "Admin");
	const AnonsRole = msg.guild.roles.find("name", "Anonser");
	if (msg.member.roles.has(AdminRole.id) || msg.member.roles.has(ModerRole.id)) {
		msg.author.send({embed:{
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
	if (msg.member.roles.has(AnonsRole.id)) {
		msg.author.send({embed:{
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
	if(msg.author.id == process.env.owner_id || msg.member.roles.has(AdminRole.id) || msg.member.roles.has(ModerRole.id) || msg.member.roles.has(AnonsRole.id)){
		msg.author.send({embed: {
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
		msg.author.send({embed: {
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
		msg.author.send({embed: {
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
});

	
async function handleVideo(video, msg, voiceChannel, playlist = false) {
	const serverQueue = queue.get(msg.guild.id);
	console.log(video);
	const song = {
		id: video.id,
		title: Util.escapeMarkdown(video.title),
		url: `https://www.youtube.com/watch?v=${video.id}`
	};
	if (!serverQueue) {
		const queueConstruct = {
			textChannel: msg.channel,
			voiceChannel: voiceChannel,
			connection: null,
			songs: [],
			volume: 5,
			playing: true
		};
		queue.set(msg.guild.id, queueConstruct);

		queueConstruct.songs.push(song);

		try {
			var connection = await voiceChannel.join();
			queueConstruct.connection = connection;
			play(msg.guild, queueConstruct.songs[0]);
		} catch (error) {
			console.error(`I could not join the voice channel: ${error}`);
			queue.delete(msg.guild.id);
			return msg.channel.send(`I could not join the voice channel: ${error}`);
		}
	} else {
		serverQueue.songs.push(song);
		console.log(serverQueue.songs);
		if (playlist) return undefined;
		else return msg.channel.send(`:white_check_mark: **${song.title}** has been added to the queue!`);
	}
	return undefined;
}

function play(guild, song) {
	const serverQueue = queue.get(guild.id);

	if (!song) {
		serverQueue.voiceChannel.leave();
		queue.delete(guild.id);
		return;
	}
	console.log(serverQueue.songs);

	const dispatcher = serverQueue.connection.playStream(ytdl(song.url))
		.on('end', reason => {
			if (reason === 'Stream is not generating quickly enough.') console.log('Song ended.');
			else console.log(reason);
			serverQueue.songs.shift();
			play(guild, serverQueue.songs[0]);
		})
		.on('error', error => console.error(error));
	dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);

	serverQueue.textChannel.send(` :notes: Nya. Starto playito: **${song.title}**`);
}

client.login(process.env.TOKEN);

// Web app (Express + EJS)
const http = require('http');
const express = require('express');
const app = express();
var ejs = require('ejs');

// set the port of our application
// process.env.PORT lets the port be set by Heroku
const port = process.env.PORT || 5000;

// set the view engine to ejs
app.set('views', __dirname + '/public');
app.engine('html', ejs.renderFile);
app.set('view engine', 'html');

// make express look in the `public` directory for assets (css/js/img)
app.use(express.static(__dirname + '/public'));

// set the home page route
app.get('/', (request, response) => {
    // ejs render automatically looks in the views folder
    response.render('public/Index.html');
});

app.listen(port, () => {
    // will echo 'Our app is running on http://localhost:5000 when run locally'
    console.log('Our app is running on http://localhost:' + port);
});

// pings server every 15 minutes to prevent dynos from sleeping
setInterval(() => {
 http.get('http://nekods.herokuapp.com');
}, 900000);
