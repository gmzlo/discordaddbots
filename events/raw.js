exports.run = async(client,event) => {
if (event.t === 'MESSAGE_REACTION_ADD' || event.t == 'MESSAGE_REACTION_REMOVE') {
    const user = client.users.get(event.d.user_id);
    const channel = client.channels.get(event.d.channel_id);
    if (channel.messages.has(event.d.message_id)) return;
    const message = await channel.fetchMessage(event.d.message_id);
     console.log(message.id)
    const emojiKey = (event.d.emoji.id) ? `${event.d.emoji.name}:${event.d.emoji.id}` : event.d.emoji.name;
    const reaction = message.reactions.get(emojiKey);
   
    if (!reaction) {
      const emoji = new Discord.Emoji(client.guilds.get(event.d.guild_id), event.d.emoji);
      reaction = new Discord.MessageReaction(message, emoji, 1, event.d.user_id === client.user.id);
    }
    if (!user.bot && reaction.message.embeds[0] != undefined) {
      if (event.t === 'MESSAGE_REACTION_ADD' ) {      
        for(const comm of client.commands) {
          if (reaction.message.embeds[0].thumbnail.url === comm[1].thumbnail || reaction.message.content === comm[1].Announcement) {
            comm[1].onReactionAdd(reaction, user, client);
          }
        }
      }
      else if (event.t === 'MESSAGE_REACTION_REMOVE')
      for(const comm of client.commands) {
        if (reaction.message.embeds[0].thumbnail.url === comm[1].thumbnail || reaction.message.content === comm[1].Announcement) {
          comm[1].onReactionRemove(reaction, user, client);
        }
      }
    }
  }
};