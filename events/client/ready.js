const discord = require("discord.js")
const { token, prefix, ownerid } = require("../../botconfig.json")
const db = require("quick.db")


module.exports = (bot, message) => {
      console.log(" __________________________________________");
      console.log("|                BOT PAGE                  |");
      console.log("|             BOT NOW ACTIVE            .  |");
      console.log("|------------------------------------------|");
      console.log("|      Logging Wizard Now Start...         |");
      console.log("|__________________________________________|");
     const FF = new discord.RichEmbed()
  .setAuthor(bot.user.username, bot.user.displayAvatarURL)
  .setColor("RANDOM")
  .setDescription(`<a:noi:732444390970359879> | **${bot.user.username}** is online on \`${bot.guilds.size}\` servers!`)
  .setTimestamp()
  bot.channels.get("729210248379891725").send(FF)
 
  bot.on("guildCreate", guild => {
      const gdgdgd = new discord.RichEmbed()
    .setColor("RANDOM")
    .setDescription(`**New guild joined: ${ guild.name }. This guild has ${ guild.memberCount } members!**`)
    .setTimestamp()
    bot.channels.get('729210248379891725').send(gdgdgd)
})

  bot.on('guildDelete', guild => {
    const ffffff = new discord.RichEmbed()
    .setColor("RANDOM")
    .setDescription(`**I have been kicked out from ${ guild.name }. that guild has ${ guild.memberCount } members!**`)
    .setTimestamp()
    bot.channels.get('729210248379891725').send(ffffff)
  })
  
  bot.on("guildMemberAdd", async member => {
  let chx = db.get(`welchannel_${member.guild.id}`);
  
  if(chx === null) {
    return; 
  }

  let wembed = new discord.RichEmbed()
  .setAuthor(member.user.username, member.user.avatarURL)
  .setColor("#0032FF")
  .setTitle("Welcome",)
  .setImage("https://cdn.discordapp.com/attachments/727088758071099432/728221648469229618/giphy.gif")
  .addField(":page_facing_up: Name:", member.user)
   .addField(":detective: User ID:", member.id)
   .addField(":chart_with_upwards_trend:  Member Count:", member.guild.memberCount)
   .setFooter(member.guild.name)
   .setTimestamp(member.guild.createdAt)
  .setThumbnail(member.user.avatarURL)
  .setDescription("Welcome <a:noi:732444390970359879> Have Fun!");
  
  bot.channels.get(chx).send(wembed)
     const serverstats = new db.table('ServerStats');
  let sguildid = await serverstats.fetch(`Stats_${member.guild.id}`, { target: '.guildid' })
  let tusers = await serverstats.fetch(`Stats_${member.guild.id}`, { target: '.totusers' })
  let membs = await serverstats.fetch(`Stats_${member.guild.id}`, { target: '.membcount' })
  let bots = await serverstats.fetch(`Stats_${member.guild.id}`, { target: '.botcount' })
  
	const totalsize = member.guild.memberCount;
	const botsize = member.guild.members.filter(m => m.user.bot).size;
	const humansize = totalsize - botsize;
  
  if(member.guild.id === sguildid) { 
		member.guild.channels.get(tusers).setName("Total Users : " + member.guild.memberCount);
		member.guild.channels.get(membs).setName("Human Users : " + humansize);
		member.guild.channels.get(bots).setName("Bot Users : " + member.guild.members.filter(m => m.user.bot).size);
	}
})

bot.on("guildMemberRemove", async member => {
  let chx = db.get(`leavechannel_${member.guild.id}`);
  
  if(chx === null) {
    return;
  }

  let wembed = new discord.RichEmbed()
  .setAuthor(member.user.username, member.user.avatarURL)
  .setColor("#FF2D00")
  .setTitle("Goodbye",)
  .setImage("https://cdn.discordapp.com/attachments/727088758071099432/728221658409861150/tenor.gif")
    .addField(":page_facing_up: Name:", member.user)
   .addField(":detective: User ID:", member.id)
   .addField(":chart_with_upwards_trend:  Member Count:", member.guild.memberCount)
   .setFooter(member.guild.name)
   .setTimestamp(member.guild.createdAt)
  .setThumbnail(member.user.avatarURL)
  .setDescription("Goodbye <:670589305831424000:708589548317442068>", member.user);
  
  bot.channels.get(chx).send(wembed)
  
    const serverstats = new db.table('ServerStats');
  let sguildid = await serverstats.fetch(`Stats_${member.guild.id}`, { target: '.guildid' })
  let tusers = await serverstats.fetch(`Stats_${member.guild.id}`, { target: '.totusers' })
  let membs = await serverstats.fetch(`Stats_${member.guild.id}`, { target: '.membcount' })
  let bots = await serverstats.fetch(`Stats_${member.guild.id}`, { target: '.botcount' })
  
	const totalsize = member.guild.memberCount;
	const botsize = member.guild.members.filter(m => m.user.bot).size;
	const humansize = totalsize - botsize;
  
  if(member.guild.id === sguildid) { 
		member.guild.channels.get(tusers).setName("Total Users : " + member.guild.memberCount);
		member.guild.channels.get(membs).setName("Human Users : " + humansize);
		member.guild.channels.get(bots).setName("Bot Users : " + member.guild.members.filter(m => m.user.bot).size);
	}
})
  
  bot.on('message', async message => {
	if (message.content === '!!join') {
		bot.emit('guildMemberAdd', message.member || await message.guild.fetchMember(message.author));
	}
    	if (message.content === '!!leave') {
		bot.emit('guildMemberRemove', message.member || await message.guild.fetchMember(message.author));
	}
    if(message.content === `!!reboot`) {
   	if (message.author.id !== "690241313873985540") {
      const embedg = new discord.RichEmbed()
      .setColor("RED")
      .setDescription("**Your Are Not The Bot Owner**")
      return message.channel.send(embedg);
    }
  
      const embef = new discord.RichEmbed()
      .setColor("RANDOM")
      .setDescription("**Restarted** 729210248379891725")
      message.channel.send(embef).then(m => {
        bot.destroy().then(() => {
          bot.login(token);
        });
      });
    }
});

    bot.user.setActivity(`*help in ${bot.guilds.size} Servers!`, {type: "WATCHING"})
    bot.user.setStatus("online")
};
