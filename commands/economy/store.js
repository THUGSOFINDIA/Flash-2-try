const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");

module.exports = {
    config: {
        name: "store",
        aliases: ["store"],
        usage: "",
        category: "economy",
        description: "",
        accessableby: "Members" 
    },
    run: async (bot, message, args) => {
          let embed = new Discord.RichEmbed()
    .setDescription("**VIP Ranks**\n\nBronze: 3500 Coins [m!buy bronze]\n\n**Lifestyle Items**\n\nFresh Nikes: 600 [m!buy nikes]\nCar: 800 [m!buy car]\nMansion: 1200 [.buy mansion]")
    .setColor("#FFFFFF")
    message.channel.send(embed)
    }
}