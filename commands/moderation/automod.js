const Discord = require("discord.js");
const { green } = require("../../colours.json")
module.exports= {
    config: {
        name: "serverrole",
        description: "",
        usage: "",
        category: "info",
        accessableby: "Members",
        aliases: ["automod"]
    },
    run: async (bot, message, args) => {
            const role = message.guild.roles;
  const embed = new Discord.RichEmbed()//onaibana raha huu
  .setColor("RANDOM")
  .setImage("https://cdn.discordapp.com/attachments/725740131855761438/731080109360152606/download.jpeg")
  message.channel.send(embed) 
    }
}