exports.run = (client, message, args, chala, langu) => {
    message.channel.send({embed: {
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
            name: "invite",
            value: "anata no inuvito Neko Boto"
        },
        {
          name: "neko",
          value: "watashi posto neko imagua"
        },
		{
          name: "avatar",
          value: "watashi posto selecto avataro usero linku ono imago"
        },
		{
          name: "pat",
          value: "anata patu wa selecto useru nemu"
        },
		{
          name: "hug",
          value: "anata hugu wa selecto useru nemu"
		},
		{
          name: "kiss",
          value: "anata kissu wa selecto useru nemu"
        },
		{
          name: "serverinfo",
          value: "watashi wa posto inoforumaru no serveru"
        },
		{
          name: "userinfo",
          value: "watashi wa posto inoforumaru no Useru"
		},
        {
            name: "cat",
            value: "watashi posto neko(Cat) imagua"
        },
        {
            name: "dog",
            value: "watashi posto inu imagua"
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