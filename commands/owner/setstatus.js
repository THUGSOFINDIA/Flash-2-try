const { ownerid, prefix } = require("../../botconfig.json"); 
const Discord = require("discord.js");

module.exports = { 
    config: {
        name: "setstatus",
        description: "",
        accessableby: "Bot Owner",
        category: "owner",
        type: "owner",
        usage: `setstatus <status>`
    },
    run: async (bot, message, args) => {
          if(message.author.id == ownerid) {
            var argresult = args.join(' ')
            const embed9 = new Discord.RichEmbed()
            .setColor("GREEN")
            .setDescription("**Status Has Been Setuped**")
            bot.user.setStatus(argresult);
            message.channel.send(embed9)
        } else {
          const embed8 = new Discord.RichEmbed()
          .setColor("RED")
          .setDescription("**You Don't Have The Permission. Creator Of The Bot Only .**<:dnd7:732429451538989158>" )
            message.channel.send(embed8);
        };
    }
}