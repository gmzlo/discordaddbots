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
		name: `socialu 👫`,
		value: `
		**pat**
		anata patu wa selecto useru nemu
		**hug**
		anata hugu wa selecto useru nemu
		**kiss**
		anata kissu wa selecto useru nemu
		**tickle**
		anata tickleu wa selecto useru nemu
		**poke**
		anata pokeu wa selecto useru nemu
		**feed**
		anata feedu wa selecto useru nemu
		**cuddle**
		anata cuddleu wa selecto useru nemu
		**baka**
		anata bakau wa selecto useru nemu
		**slap**
		anata slapu wa selecto useru nemu
		**smug**
		anata wa smug
		`
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
        },
        {
            name: `Modules ⚙️`,
            value: `
            **botinstall**
            anata wa installu Generalu modulu
            **modulinfo**
            anata cecku modulesu installu wa serversu
            **modulinstall class bns**
            anata wa installu modulu givu rolu Bladenu andu Soulu
            `
        },
		{
            name: "say",
            value: "watashi wa say anata messagu (onegai installu - Generalu modulu)"
        },
		{
            name: "msdel",
            value: "anata wa deletu messagu 2 - 100 coine (onegai installu - Generalu modulu)"
        },
        {
            name: "Invitu Linku 🔗",
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