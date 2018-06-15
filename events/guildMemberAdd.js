exports.run = async(client, member) => {
    const Discord = require('discord.js');
    const newUsers = [];	
	let botuser;
	if (member.user.bot === true) botuser = 'Yes'
	else botuser = 'No'
	if (member.guild.roles.find("name", "no-name") === null) {
// Send the message to a designated channel on a server:
	const channel = member.guild.channels.find('name', 'chat');
	// Do nothing if the channel wasn't found on this server
	if (!channel) return;
	// Send the message, mentioning the member
channel.send(`Welcomu to serveru, **${member}** onegai pleito`, {embed: {
color: 16713430,
author: {
name: member.guild.name,
icon_url: member.guild.iconURL
},
thumbnail: {
url: member.user.displayAvatarURL
},
fields: [ {
name: `Welcomu to gildu: ${member.guild.name}`,
value: `nowu memberu **${member.user.username}**
**Serveru inuforumaru**
**Currentu Memeberu Counu:**  ${member.guild.memberCount}`
},
{
name: `Useru inuforumaru`,
value: `nowu memberu **${member.user.username}**
**${member.user.username}'s ID:**  ${member.user.id}
**Nowu Memberu's Name:**  ${member.user.tag}
**Botu accountu:**  ${botuser}`,
inline: true
}]
}});
    // Create an event listener for new guild members		
} else {
	let role = member.guild.roles.find("name", "no-name-t");
	member.addRole(role).catch(console.error);	
	const channel = member.guild.channels.find('name', 'no-name-t')
	if (!channel) return;
channel.send(`Kon'nichiwa, **${member}** anata wa serveru ni hitto suru protectedu **Neko** Starto youru Verificationu Data desu`, {embed: {
color: 16713430,
author: {
name: member.guild.name,
icon_url: member.guild.iconURL
},
thumbnail: {
url: member.user.displayAvatarURL
},
fields: [ {
name: `Welcomu to gildu: ${member.guild.name}`,
value: `nowu memberu **${member.user.username}**
**Serveru inuforumaru**
**Currentu Memeberu Counu:**  ${member.guild.memberCount}`
},
{
name: `Useru inuforumaru`,
value: `nowu memberu **${member.user.username}**
**${member.user.username}'s ID:**  ${member.user.id}
**Nowu Memberu's Name:**  ${member.user.tag}
**Botu accountu:**  ${botuser}`,
inline: true
}]
}});
}	
}