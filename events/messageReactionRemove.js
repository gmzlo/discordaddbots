exports.run = async(client,reaction, user,) => {
    const Discord = require('discord.js');
    if (user.id === client.user.id)
        return;

    if (user.bot && user.id !== client.user.id)
return;
let member = await reaction.message.guild.fetchMember(user);
console.log(`${user.username} remove reation: ${reaction.emoji.name}`)
let rolWL = reaction.message.guild.roles.find("name", "WL");
let rolLSM = reaction.message.guild.roles.find("name", "LSM");
let rolBM = reaction.message.guild.roles.find("name", "BM");
let rolSIN = reaction.message.guild.roles.find("name", "SIN");
let rolSF = reaction.message.guild.roles.find("name", "SF");
let rolFOR = reaction.message.guild.roles.find("name", "FOR");
let rolSUM = reaction.message.guild.roles.find("name", "SUM");
let rolWAR = reaction.message.guild.roles.find("name", "WAR");
let rolKFM = reaction.message.guild.roles.find("name", "KFM");
let rolDM = reaction.message.guild.roles.find("name", "DM");
let rolGUN = reaction.message.guild.roles.find("name", "GUN");
if(reaction.emoji.name === "WL"){
    member.removeRole(rolWL)
} else if(reaction.emoji.name === "LSM"){
    member.removeRole(rolLSM)
} else if(reaction.emoji.name === "BM"){
    member.removeRole(rolBM)
} else if(reaction.emoji.name === "SIN"){
    member.removeRole(rolSIN)
} else if(reaction.emoji.name === "SF"){
    member.removeRole(rolSF)
} else if(reaction.emoji.name === "FOR"){
    member.removeRole(rolFOR)
} else if(reaction.emoji.name === "SUM"){
    member.removeRole(rolSUM)
} else if(reaction.emoji.name === "WAR"){
    member.removeRole(rolWAR)
} else if(reaction.emoji.name === "KFM"){
    member.removeRole(rolKFM)
} else if(reaction.emoji.name === "DM"){
    member.removeRole(rolDM)
} else if(reaction.emoji.name === "GUN"){
    member.removeRole(rolGUN)
}
}