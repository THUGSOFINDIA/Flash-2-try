module.exports= {
    config: {
        name: "ass",
        description: "Shows sexy pics of ass",
        usage: "ass",
        category: "nsfw",
        accessableby: "Members",
        aliases: ["butts"]
    },
    run: async (bot, message, args) => {
       if (!message.guild.member(bot.user).hasPermission('ATTACH_FILES')) return message.reply('Sorry, i dont have the perms to do this cmd i need ATTACH_FILES. :x:')
     const rp = require('request-promise-native')
    return rp.get('http://api.obutts.ru/butts/0/1/random').then(JSON.parse).then(function(res)  {
        return rp.get({
            url:'http://media.obutts.ru/' + res[0].preview,
            encoding: null
        });
    }).then(function(res)   {
       if (message.channel.nsfw) return message.channel.send({ files: [{ attachment: res, name: 'ass.png' }] }).catch(console.error);
      if(!message.channel.nsfw) return message.channel.send("Need to be in a nsfw channel to use this command.")
    });
    }
}