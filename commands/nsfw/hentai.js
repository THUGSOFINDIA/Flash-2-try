const discord = require('discord.js');
const superagent = require('superagent')

module.exports= {
    config: {
        name: "hentai",
        description: "",
        usage: "hentai",
        category: "nsfw",
        accessableby: "Members",
        aliases: ["hentaij"]
    },
    run: async (bot, message, args) => {
       if (message.channel.nsfw === true) {
    superagent.get('https://nekobot.xyz/api/image')
    .query({ type: 'hentai_anal'})
    .end((err, response) => {
      message.channel.send({ file: response.body.message });
    });
  } else {
    message.channel.send("Need to be in a nsfw channel to use this command.")
  }
    }
}