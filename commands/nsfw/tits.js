const discord = require('discord.js');
const superagent = require('superagent')

module.exports= {
    config: {
        name: "tits",
        description: "",
        usage: "tits",
        category: "nsfw",
        accessableby: "Members",
        aliases: ["boobs"]
    },
    run: async (bot, message, args) => {
       if (!message.guild.member(bot.user).hasPermission('ATTACH_FILES')) return message.reply('Sorry, i dont have the perms to do this cmd i need ATTACH_FILES. <a:Crossag:712271469064749066>')
  const rp = require('request-promise-native')
    return rp.get('http://api.oboobs.ru/boobs/0/1/random').then(JSON.parse).then(function(res)  {
        return rp.get({
            url:'http://media.oboobs.ru/' + res[0].preview,
            encoding: null
        });
      }).then(function(res)   {
        if (message.channel.nsfw) return message.channel.send({ files: [{ attachment: res, name: 'tits.png' }] }).catch(console.error);
            if(!message.channel.nsfw) return message.channel.send("Need to be in a nsfw channel to use this command.")
    });
    }
}