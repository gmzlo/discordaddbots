const NekoJS = require("nekos.life");

exports.run = (client, message, args) => {
message.channel.send(` **${message.author.username}** Smugu :crown: `)
    const sfw = new NekoJS();
    sfw.getSFWSmug().then(smug => {
    message.channel.send({embed:{
        color: client.getRandomColor(),
        author: {
            icon_url: client.user.avatarURL
        },
        image: {
            url: smug.url
        }
    }
});
});
}