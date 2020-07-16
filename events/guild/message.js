const { default_prefix } = require("../../botconfig.json")
const db = require("quick.db")
const { RichEmbed } = require("discord.js")

module.exports = async (bot, message) => {
    if(message.author.bot || message.channel.type === "dm") return;
  
    const mentionRegex = RegExp(`^<@!${bot.user.id}>$`);

    let prefix = db.get(`prefix_${message.guild.id}`)
    if(prefix === null) prefix = default_prefix;
  
    const embed = new RichEmbed()
    .setColor("GREEN")
    .setDescription(`My Prefix For __**${message.guild.name}**__ Is \`${prefix}\``)
    if (message.content.match(mentionRegex)) message.channel.send(embed);
  
    if(!message.content.startsWith(prefix)) return;
    let args = message.content.slice(prefix.length).trim().split(/ +/g)
    let cmd = args.shift().toLowerCase()

    let commandfile = bot.commands.get(cmd) || bot.commands.get(bot.aliases.get(cmd))
    if(commandfile) commandfile.run(bot, message, args)
}