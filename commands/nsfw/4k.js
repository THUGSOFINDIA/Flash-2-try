const discord = require('discord.js');
const superagent = require('superagent')

module.exports= {
    config: {
        name: "4k",
        description: "",
        usage: "4k",
        category: "nsfw",
        accessableby: "Members",
        aliases: ["4k"]
    },
    run: async (bot, message, args) => {
        if (message.channel.nsfw === true) {
    superagent.get('https://nekobot.xyz/api/image')
    .query({ type: '4k'})
    .end((err, response) => {
      message.channel.send({ file: response.body.message });
    });
  } else {
    message.channel.send("Need to be in a nsfw channel to use this command.")
  }
    }
}