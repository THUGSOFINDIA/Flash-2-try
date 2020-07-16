const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");

module.exports = {
    config: {
        name: "addmoney",
        aliases: ["amoney"],
        usage: "*addm",
        category: "economy",
        description: "",
        accessableby: "Members"
    },
    run: async (bot, message, args) => {
        if(message.member.hasPermission("ADMINISTRATOR")) return;
        if(!message.member.hasPermission("ADMINISTRATOR")){
        return message.channel.send("You dont have permission to use this command").then(m => m.delete(10000))
        }
        let user = message.mentions.members.first() || message.author;

    if (isNaN(args[1])) return;
    db.add(`money_${message.guild.id}_${user.id}`, args[1])
    let bal = await db.fetch(`money_${message.guild.id}_${user.id}`)

    let moneyEmbed = new Discord.RichEmbed()
    .setColor("#FFFFFF")
    .setDescription(`<a:y1:732261987903471649> Added ${args[1]} coins\n\nNew Balance: ${bal}`);
    message.channel.send(moneyEmbed)
    }
}