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
            name: "botinstall",
            value: "install General bot module"
        },
		{
            name: "modulinfo",
            value: "ceck modules install from servers"
        },
		{
            name: "say",
            value: "bot say your message (neede bot install - General module)"
        },
		{
            name: "msdel",
            value: "delete message 2 - 100 coine (neede bot install - General module)"
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