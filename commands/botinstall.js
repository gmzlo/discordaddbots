exports.run = async(client, message, member) => {
			if (message.guild.roles.find("name", "Admin") === null || message.guild.roles.find("name", "Moder") === null || message.guild.roles.find("name", "Anonser") === null ) {
			message.guild.createRole({
  name: 'Admin',
  color: '#f00000',
})
  .then(role => console.log(`Created new role with name ${role.name} and color ${role.color}`))
  .catch(console.error)
 message.guild.createRole({
  name: 'Moder',
  color: '#810505',
})
  .then(role => console.log(`Created new role with name ${role.name} and color ${role.color}`))
  .catch(console.error)
 message.guild.createRole({
  name: 'Anonser',
  color: '#308ce6',
})
  .then(role => console.log(`Created new role with name ${role.name} and color ${role.color}`))
  .catch(console.error)
message.channel.send({embed:{
			
    "description": ":white_check_mark:  основные модули бота установлены",
    "color": 1693449,
        }
        });
	}   



	const ModerRole = message.guild.roles.find("name", "Moder");
	const AdminRole = message.guild.roles.find("name", "Admin");
	const AnonsRole = message.guild.roles.find("name", "Anonser");
	if (message.member.roles.has(AdminRole.id) || message.member.roles.has(ModerRole.id) || message.member.roles.has(AnonsRole.id)){
	message.channel.send({embed:{
			
    "description": ":x: основные модули бота установлены, установка не требуется",
    "color": 15337994,
        }
        });
	} 
}