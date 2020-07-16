const discord = require('discord.js');
const superagent = require('superagent')

module.exports= {
    config: {
        name: "anal",
        description: "",
        usage: "anal",
        category: "nsfw",
        accessableby: "Members",
        aliases: ["anall"]
    },
    run: async (bot, message, args) => {
        if (message.channel.nsfw === true) {
    superagent.get('https://nekobot.xyz/api/image')
    .query({ type: 'anal'})
    .end((err, response) => {
      message.channel.send({ file: response.body.message });
    });
  } else {
    message.channel.send("Need to be in a nsfw channel to use this command.")
  }
    }
}