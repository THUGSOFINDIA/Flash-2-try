const Discord = require("discord.js");
const { green } = require("../../colours.json")
module.exports= {
    config: {
        name: "serveremojis",
        description: "",
        usage: "",
        category: "info",
        accessableby: "Members",
        aliases: ["serveremoji", "semoji"]
    },
    run: async (bot, message, args) => {
   let Emojis = "";
    let EmojisAnimated = "";
    let EmojiCount = 0;
    let Animated = 0;
    let OverallEmojis = 0;
    function Emoji(id) {
      return bot.emojis.get(id).toString();
    }
    message.guild.emojis.forEach((emoji) => {
      OverallEmojis++;
      if (emoji.animated) {
        Animated++;
        EmojisAnimated += Emoji(emoji.id);
      } else {
        EmojiCount++
        Emojis += Emoji(emoji.id);
      }
    });
    let Embed = new Discord.RichEmbed()
      .setTitle(`Emojis in ${message.guild.name}.`)
      .setDescription(
        `**Animated [${Animated}]**:\n${EmojisAnimated}\n\n**Standard [${EmojiCount}]**:\n${Emojis}\n\n**Over all emojis [${OverallEmojis}]**`
      )
      .setColor(`RANDOM`);
    message.channel.send(Embed);
    }
}
