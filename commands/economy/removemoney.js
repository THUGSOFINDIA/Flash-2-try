const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");

module.exports = {
    config: {
        name: "removemoney",
        aliases: ["rm"],
        usage: "",
        category: "economy",
        description: "",
        accessableby: "Members"
    },
    run: async (bot, message, args) => {
              if(message.author.hasPermission("ADMINISTRATOR")) return;
        return message.channel.send("You dont have permission to use this command").then(m => m.delete(10000))
        let user = message.mentions.members.first() || message.author;

    if (isNaN(args[1])) return;
    db.subtract(`money_${message.guild.id}_${user.id}`, args[1])
    let bal = await db.fetch(`money_${message.guild.id}_${user.id}`)

    let moneyEmbed = new Discord.RichEmbed()
    .setColor("#FFFFFF")
    .setDescription(`<a:money:732257497951502420> Removed ${args[1]} coins\n\nNew Balance: ${bal}`);
    message.channel.send(moneyEmbed)
    }
}