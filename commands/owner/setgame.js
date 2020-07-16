const { ownerid, prefix } = require("../../botconfig.json"); 
const Discord = require("discord.js");

module.exports = { 
    config: {
        name: "setgame",
        description: "",
        accessableby: "Bot Owner",
        category: "owner",
        type: "owner",
        usage: `setgame <game>`
    },
    run: async (bot, message, args) => {
          if(message.author.id == ownerid) {
                var gametoset = args.join(' ');
            if (!gametoset) gametoset = null;
            const embed6 = new Discord.RichEmbed()
            .setColor("GREEN")
            .setDescription("**THE NEW GAME HAS BEEN SETUPED**")
            bot.user.setActivity(gametoset);
            message.channel.send(embed6)
            } else {
              const embed = new Discord.RichEmbed()
              .setColor("RANDOM")
              .setDescription("You do not have the substancial permissions. Creator of the bot only. <:dnd7:732429451538989158>")
              message.channel.send(embed);
            }
    }
}