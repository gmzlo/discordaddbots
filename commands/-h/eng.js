exports.run = (client, message, args, chala, langu) => {
    message.channel.send({embed: {
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
            name: "invite",
            value: "ivite neko bot for your server."
        },
        {
          name: "neko",
          value: "post random neko image"
        },
		{
          name: "avatar",
          value: "post avatar from select from u user link and image"
        },
		{
		name: `social 👫`,
		value: `
		**pat**
		you pat select user name
		**hug**
		you hug select user name
		**kiss**
		you kiss select user name
		**tickle**
		you tickle select user name
		**poke**
		you poke select user name
		**feed**
		you feed select user name
		**cuddle**
		you cuddle select user name
		**baka**
		you baka select user name
		**slap**
		you slap select user name
		**smug**
		you smug for you
		`
		},	
		{
          name: "serverinfo",
          value: "post inoformation on server"
        },
		{
          name: "userinfo",
          value: "post inoformation on User"
		},
        {
            name: "cat",
            value: "post random Cat image"
        },
        {
            name: "dog",
            value: "post random dog image"
        },
        {
            name: `Modules ⚙️`,
            value: `
            **botinstall**
            install General bot module
            **modulinfo**
            ceck modules install from servers
            **modulinstall class bns**
            install modul give roles Blade and Soul
            `
        },
		{
            name: "say",
            value: "bot say your message (neede bot install - General module)"
        },
		{
            name: "msdel",
            value: "delete message 2 - 100 coine (neede bot install - General module)"
        },
        {
            name: "Invite Link 🔗",
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