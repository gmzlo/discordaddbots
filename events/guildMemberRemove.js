exports.run = async(client, member) => {
    const Discord = require('discord.js');
	let botuser;
	if (member.user.bot === true) botuser = 'Yes'
	else botuser = 'No'
	if (member.guild.roles.find("name", "no-name") === null) {
	const channel = member.guild.channels.find('name', 'chat');
	if (!channel) return;
    channel.send(`ohh, **${member.user}** leftu wa seruveru :crying_cat_face: `, {embed: {
color: 16713430,
author: {
name: member.guild.name,
icon_url: member.guild.iconURL
},
thumbnail: {
url: member.user.displayAvatarURL
},
fields: [ {
name: `${member.user.username} leftu wa  ${member.guild.name}`,
value: `oldu memberu **${member.user.username}**
**Serveru inuforumaru**
**Currentu Memeberu Counu:**  ${member.guild.memberCount}`
},
{
name: `Useru inuforumaru`,
value: `oldu memberu **${member.user.username}**
**${member.user.username}'s ID:**  ${member.user.id}
**oldu Memberu's Name:**  ${member.user.tag}
**Botu accountu:**  ${botuser}`,
inline: true
}]
}});
}
	else
{
	const channel = member.guild.channels.find('name', 'no-name-t')
	if (!channel) return;	
    channel.send(`ohh, **${member.user}** leftu wa seruveru :crying_cat_face: `, {embed: {
color: 16713430,
author: {
name: member.guild.name,
icon_url: member.guild.iconURL
},
thumbnail: {
url: member.user.displayAvatarURL
},
fields: [ {
name: `${member.user.username} leftu wa  ${member.guild.name}`,
value: `oldu memberu **${member.user.username}**
**Serveru inuforumaru**
**Currentu Memeberu Counu:**  ${member.guild.memberCount}`
},
{
name: `Useru inuforumaru`,
value: `oldu memberu **${member.user.username}**
**${member.user.username}'s ID:**  ${member.user.id}
**oldu Memberu's Name:**  ${member.user.tag}
**Botu accountu:**  ${botuser}`,
inline: true
}]
}});
}	
}