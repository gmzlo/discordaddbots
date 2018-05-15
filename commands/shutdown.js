exports.run = (client, message, args) => {

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
            "name": "onegai waitu watashi scanunigu perumisionusu",
            "value": "------------------------------------------------"
        },
    ],
}
});
if  (message.author.id === process.env.owner_id) {
setTimeout(function() {
message.channel.send({embed: {
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
message.channel.send({embed: {
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
        "name": "Gomennasai anata no tokken chīsa sugiru",
        "value": "------------------------------------------------"
    },
],
}
})
}, 1000)
}
}