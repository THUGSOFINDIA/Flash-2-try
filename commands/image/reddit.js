const { RichEmbed } = require("discord.js")
const api = require("imageapi.js");

module.exports = { 
    config: {
        name: "reddit",
        description: "",
        usage: "<subreddit>",
        category: "search",
        accessableby: "Members",
        aliases: ["redditt"]
    },
    run: async (bot, message, args) => {
          let Subreddit = message.content.slice(8);
    if (!Subreddit)
      return message.channel.send(`You did not specify your subreddit!`);
    try {
      let img = await api(Subreddit, true);
      const Embed = new RichEmbed()
        .setTitle(`A random image from r/${Subreddit}`)
        .setColor("RANDOM")
        .setImage(img)
        .setURL(`https://reddit.com/r/${Subreddit}`);
      message.channel.send(Embed);
    } catch (err) {
      message.channel.send(err);
    }
    }
}