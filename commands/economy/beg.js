const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");

module.exports = {
    config: {
        name: "beg",
        aliases: ["beeg"],
        usage: "",
        category: "economy",
        description: "",
        accessableby: "Members"
    },
    run: async (bot, message, args) => {
        let user = message.author;

  let timeout = 180000;
  let amount = 10;

  let beg = await db.fetch(`beg_${message.guild.id}_${user.id}`);

  if (beg !== null && timeout - (Date.now() - beg) > 0) {
    let time = ms(timeout - (Date.now() - beg));
  
    let timeEmbed = new Discord.RichEmbed()
    .setColor("#FFFFFF")
    .setDescription(`<a:Crossag:712271469064749066> You've already begged recently\n\nBeg again in ${time.minutes}m ${time.seconds}s `);
    message.channel.send(timeEmbed)
  } else {
    let moneyEmbed = new Discord.RichEmbed()
  .setColor("#FFFFFF")
  .setDescription(`<a:money:732257497951502420> You've begged and received ${amount} coins`);
  message.channel.send(moneyEmbed)
  db.add(`money_${message.guild.id}_${user.id}`, amount)
  db.set(`beg_${message.guild.id}_${user.id}`, Date.now())


  }
    }
}