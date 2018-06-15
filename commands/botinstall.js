exports.run = async(client, message, member) => {
const ad = message.guild.roles.find("name", "Admin");
const md = message.guild.roles.find("name", "Moder");
const an = message.guild.roles.find("name", "Anonser");
var mdn = null;
var admn = null;
var mdrn = null;
var anonn = null;

message.channel.send(`checku startu :repeat:`);
if (ad === null){
message.channel.send(`Modul **Admin**: :x: notu inustallu`);
mdn = 0;
admn += 1;	
} else {
message.channel.send(`Modul **Admin**: :white_check_mark: inustallu`);
mdn += 1;
admn = 0;
};
if (md === null){
message.channel.send(`Modul **Moder**: :x: notu inustallu`);
mdn += 0;
mdrn += 1;	
} else {
message.channel.send(`Modul **Moder**: :white_check_mark: inustallu`);
mdn += 1;
mdrn = 0;	
};
if (an === null){
message.channel.send(`Modul **Anonser**: :x: notu inustallu`);
mdn += 0;
anonn += 1;	
} else {
message.channel.send(`Modul **Anonser**: :white_check_mark: inustallu`);
mdn += 1;
anonn = 0;	
};
console.log(`inustallu coinu: ${mdn}
Admin coinu: ${admn}
Moder coinu: ${mdrn}
Anonser coinu: ${anonn}`);
if (mdn === 0) {
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
			
    "description": ":white_check_mark:  Generalu modulu botu installu",
    "color": 1693449,
        }
        });
};
if (mdn === 1 || mdn === 2)	{
message.channel.send(`notu allu modulesu installu, inustallu startu :repeat:`);
if (admn === 1){
message.guild.createRole({
  name: 'Admin',
  color: '#f00000',
})
  .then(role => console.log(`Created new role with name ${role.name} and color ${role.color}`))
  .catch(console.error)
message.channel.send({embed:{
			
    "description": ":white_check_mark:  Adminu modulu botu installu",
    "color": 1693449,
        }
        }).then(msg => msg.delete(1000));  
message.channel.send(`.`);  
} else {
message.channel.send(`.`);	
};
if (mdrn  === 1){
 message.guild.createRole({
  name: 'Moder',
  color: '#810505',
})
  .then(role => console.log(`Created new role with name ${role.name} and color ${role.color}`))
  .catch(console.error)
  message.channel.send({embed:{
			
    "description": ":white_check_mark:  Moderu modulu botu installu",
    "color": 1693449,
        }
        }).then(msg => msg.delete(1000));
message.channel.send(`..`);  
} else {
message.channel.send(`..`);	
};
if (anonn  === 1){
 message.guild.createRole({
  name: 'Anonser',
  color: '#308ce6',
})
  .then(role => console.log(`Created new role with name ${role.name} and color ${role.color}`))
  .catch(console.error)
    message.channel.send({embed:{
			
    "description": ":white_check_mark:  Anonseru modulu botu installu",
    "color": 1693449,
        }
        }).then(msg => msg.delete(1000));
message.channel.send(`...`);  
} else {
message.channel.send(`...`)
message.channel.send({embed:{
			
    "description": ":white_check_mark:  Generalu modulu botu installu",
    "color": 1693449,
        }
        });	
};	
	}; 
	if ( mdn === 3){
	message.channel.send({embed:{
			
    "description": ":x: Generalu modulu botu installu, installu notu startu",
    "color": 15337994,
        }
        });
	} 
}