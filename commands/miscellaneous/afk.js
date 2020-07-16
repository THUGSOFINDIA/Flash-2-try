const { RichEmbed } = require("discord.js")
const isAFK = new Set();

module.exports= {
    config: {
        name: "afk",
        description: "",
        usage: "<reason>",
        category: "miscellaneous",
        accessableby: "Members",
        aliases: ["afk"]
    },
    run: async (bot, message, args) => {
      if (isAFK.has(message.author.id + message.guild.id)) {
        const embed = new RichEmbed()
        .setAuthor(message.author.username, message.author.displayAvatarURL)
        .setColor("RED")
        .setDescription("**You Are Already AFK!**")
        .setFooter(`${bot.user.username} AFK Setup`, bot.user.avatarURL)
      return message.channel.send(embed);
      }
    let reason;
    if (!args[0]) reason = "None";
    else reason = args.slice(0).join(" ");

    isAFK.add(message.author.id + message.guild.id);
      const embed2 = new RichEmbed()
      .setAuthor(message.author.username, message.author.displayAvatarURL)
      .setColor("GREEN")
      .setDescription(`**You Are Now AFK For The Reason Of** ${reason}`)
      .setFooter(`${bot.user.username} AFK Setup`, bot.user.avatarURL)
    message.channel
      .send(embed2)
      .then(m => m.delete(200 * 200).catch());

    const filter = m =>
      (m.mentions.users.has(message.author.id) ||
        m.author.id === message.author.id) &&
      !m.author.bot;
    const collector = message.channel.createMessageCollector(filter);

    collector.on("collect", msg => {
      if (msg.author.id === message.author.id) {
        collector.stop();
        isAFK.delete(message.author.id + message.guild.id);
        const embed3 = new RichEmbed()
        .setAuthor(message.author.username, message.author.displayAvatarURL)
        .setColor("GREEN")
        .setDescription(`${message.author.tag}, **Welcome Back!**`)
        .setFooter(`${bot.user.username} AFK Setup`, bot.user.avatarURL)
        return message.channel
          .send(embed3)
          .then(m => m.delete(200 * 200));
      } else {
        const embed4 = new RichEmbed()
        .setColor("GREEN")
        .setAuthor(message.author.username, message.author.displayAvatarURL)
        .setDescription(`${message.member} **Is Currently AFK For** ${reason}.`)
        .setFooter(`${bot.user.username} AFK Setup`, bot.user.avatarURL)
        return message.channel
          .send(embed4)
          .then(m => m.delete(200 * 200));
      }
    });
    }
}