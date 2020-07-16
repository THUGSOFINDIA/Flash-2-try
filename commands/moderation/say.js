const Discord = require("discord.js")
const botconfig = require("../../botconfig.json");
const colours = require("../../colours.json");
const prefix = botconfig.prefix


module.exports.run = async (bot, message, args) => {
  if(!message.member.hasPermission(["MANAGE_MESSAGES", "ADMINISTRATOR"])){
   const embed5 = new Discord.RichEmbed()
   .setColor("#0000ff")
   .setDescription("**You Can Not Use This Command**")
  return message.channel.send(embed5)
  }

    let argsresult;
    let mChannel = message.mentions.channels.first()

    message.delete()
    if(mChannel) {
        argsresult = args.slice(1).join(" ")
      const embed2 = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setImage("")
      .setDescription(argsresult)
      mChannel.send(embed2)
    } else {
        argsresult = args.join(" ")
      const embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setImage("")
      .setDescription(argsresult)
        message.channel.send(embed)
    }
}



module.exports.config = {
    name: "say",
    description: "Sends a message message that was inputted to a channel!",
    usage: "!!say",
    category: "moderation",
    accessableby: "Staff",
    aliases: ["acc", "announcement"]
}
