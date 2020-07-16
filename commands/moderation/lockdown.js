const { RichEmbed } = require("discord.js")
const { redlight } = require("../../colours.json")
const colours = require("../../colours.json")
const ms = require("ms");

module.exports= {
    config: {
        name: "lockdown",
        description: "Locks the channel!",
        usage: "<duration>",
        category: "moderation",
        accessableby: "Moderators",
        aliases: ["lock", "ld"]
    },
    run: async (bot, message, args) => {
       if(message.member.hasPermission("MANAGE_GUILD")) {

    if (!bot.lockit) bot.lockit = [];
  
    let time = args.join(' ')
    let validUnlocks = ['release', 'unlock'];
    var notimeembed = new RichEmbed()
    .setTitle('Error')
    .setDescription("**👾 You must set a duration for the lockdown in either hours, minutes or seconds**")  
    .setColor('393949')
    if (!time) return message.channel.send(notimeembed);

    if (validUnlocks.includes(time)) {
      message.channel.overwritePermissions(message.guild.id, {
        SEND_MESSAGES: null
      }).then(() => {
        var liftedembed = new RichEmbed()
        .setTitle('🔒 **Lockdown**')
        .setDescription("🔓 **Loockdown Lifted**.")  
        .setColor('36393e')
        message.channel.send(liftedembed);
        clearTimeout(bot.lockit[message.channel.id]);
        delete bot.lockit[message.channel.id];
      }).catch(error => {
        console.log(error);
      });
    } else {
      message.channel.overwritePermissions(message.guild.id, {
        SEND_MESSAGES: false
      }).then(() => {
        var lockdownembed = new RichEmbed()
        .setTitle("**<a:right5:701755206433636412> Channel Locked**")
        .addField("➢Locked by", `${message.author}`, true)
        .addField("➢Locked for", `${ms(ms(time), { long:true })}`, true)
        .setColor('36393e')
        message.channel.send(lockdownembed).then(() => {

          bot.lockit[message.channel.id] = setTimeout(() => {
            var liftedembed = new RichEmbed()
            .setTitle('🔒** Lockdown**')
            .setDescription("**<a:right5:701755206433636412> Loockdown lifted**.")  
            .setColor('36393e') 
            message.channel.overwritePermissions(message.guild.id, {
              SEND_MESSAGES: null
            }).then( 
               
              message.channel.send(liftedembed)).catch(console.error);
            delete bot.lockit[message.channel.id];
          }, ms(time));

        }).catch(error => {
          console.log(error);
        });
      });
    }

    } else {
        var nopermsembed = new RichEmbed()
        .setTitle('Error')
        .setDescription("👾 Missing Permissions :: MANAGE_SERVER")  
        .setColor('36393e')
        message.channel.send(nopermsembed)
    }

    }
}