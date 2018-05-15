const Discord = require('discord.js');

exports.run = (client, message, args) => {
  var request = require('request');
  request.get('http://aws.random.cat/meow', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      var cat = JSON.parse(body);
      message.channel.send({embed: {
		color: client.getRandomColor(),
                title: 'Meow :cat:',
                "image": {
                "url": cat.file,
              },
              footer: {
                icon_url: client.user.avatarURL
              },
            
            }
        });
    }
  })
}
