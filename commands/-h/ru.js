const Discord = require('discord.js');

exports.run = (client, message, args, chala, langu) => {
    message.channel.send({embed: {
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
            name: "invite",
            value: "вы можете добавить Неко бота к себе на сервер"
          },
          {
            name: "neko",
            value: "выдаёт рандомную картинку некочек"
          },
          {
            name: "avatar",
            value: "постит аватар выбраного вами пользователя как ссылку так и картинку"
        },
		{
          name: "pat",
          value: "ты гладишь выбраного пользователя"
        },
		{
          name: "hug",
          value: "ты обнимаешь выбраного пользователя"
		},
		{
          name: "kiss",
          value: "ты целуешь выбраного пользователя"
        },
		{
          name: "serverinfo",
          value: "выводит в чат информыцию о сервере"
        },
		{
          name: "userinfo",
          value: "выводит в чат информыцию о пользователе"
		},
        {
            name: "cat",
            value: "выдаёт рандомную картинку кошечек"
        },
        {
            name: "dog",
            value: "выдаёт рандомную картинку собачек"
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