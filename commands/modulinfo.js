const Discord = require('discord.js');

exports.run = (client, message, args) => {
const modules = args[2];

const ad = message.guild.roles.find("name", "Admin");
const md = message.guild.roles.find("name", "Moder");
const an = message.guild.roles.find("name", "Anonser");
const nn = message.guild.roles.find("name", "no-name");

message.channel.send(`checku startu :repeat:`);
if (ad === null || md === null || an === null ){
message.channel.send(`Modul **General**: :x: notu inustallu`);
} else {
message.channel.send(`Modul **General**: :white_check_mark: inustallu`);	
};
if (nn === null) {
message.channel.send(`Modul **no-name**: :x: notu inustallu`);	
} else {
message.channel.send(`Modul **no-name**: :white_check_mark: inustallu`);	
};

}