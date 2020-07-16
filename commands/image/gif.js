const giphy = require('giphy-api')("W8g6R14C0hpH6ZMon9HV9FTqKs4o4rCk");
const { RichEmbed } = require("discord.js")
const { light_blue } = require("../../colours.json");
const fetch = require("node-fetch")

module.exports = {
    config: {
        name: "gif",
        aliases: ["gifsearch"],
        usage: "",
        category: "search",
        description: "",
        accessableby: "Members"
    },
    run: async (bot, message, args) => {
       if (args.length === 0) {
    message.channel.send('No Seacrh terms!')
    return;
  }
  if (args.length === 1) {
    term = args.toString()
  } else {
    term = args.join(" ");
  }
  giphy.search(term).then(function (res) {
    // Res contains gif data!
    let id = res.data[0].id
    let msgurl = `https://media.giphy.com/media/${id}/giphy.gif`
    const embed = {
      "color": 3066993,
      "timestamp": new Date(),
      "footer": {
        "icon_url": bot.user.avatarURL,
        "text": "Powered by FLASH"
      },
      "image": {
        "url": msgurl
      },
      "fields": [
        {
          "name": "Search Term",
          "value": "`" + term + "`",
          "inline": true
        },
        {
          "name": "Page URL",
          "value": "[Giphy](" + res.data[0].url + ")",
          "inline": true
        }
      ]
    };
    message.channel.send({ embed });

  });

  message.delete();
    }
}