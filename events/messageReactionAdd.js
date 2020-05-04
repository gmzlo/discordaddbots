exports.run = async(client,reaction, user,) => {
    const Discord = require('discord.js');
    if (user.id === client.user.id)
        return;

    if (user.bot && user.id !== client.user.id)
return;
let member = await reaction.message.guild.fetchMember(user);
console.log(`${user.username} add reation: ${reaction.emoji.name}`)
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
let rolARH = reaction.message.guild.roles.find("name", "ARH");
if(reaction.emoji.name === "WL"){
    member.addRole(rolWL)
} else if(reaction.emoji.name === "LSM"){
    member.addRole(rolLSM)
} else if(reaction.emoji.name === "BM"){
    member.addRole(rolBM)
} else if(reaction.emoji.name === "SIN"){
    member.addRole(rolSIN)
} else if(reaction.emoji.name === "SF"){
    member.addRole(rolSF)
} else if(reaction.emoji.name === "FOR"){
    member.addRole(rolFOR)
} else if(reaction.emoji.name === "SUM"){
    member.addRole(rolSUM)
} else if(reaction.emoji.name === "WAR"){
    member.addRole(rolWAR)
} else if(reaction.emoji.name === "KFM"){
    member.addRole(rolKFM)
} else if(reaction.emoji.name === "DM"){
    member.addRole(rolDM)
} else if(reaction.emoji.name === "GUN"){
    member.addRole(rolGUN)
} else if(reaction.emoji.name === "ARH"){
    member.addRole(rolARH)
}
}
