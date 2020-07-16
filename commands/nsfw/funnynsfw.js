const Discord = require("discord.js");
const snekfetch = require('snekfetch');
const { promisifyAll } = require('tsubaki');
const xml = promisifyAll(require('xml2js'));

module.exports= {
    config: {
        name: "funnynsfw",
        description: "Shows funny NSFW",
        usage: "funnynsfw",
        category: "nsfw",
        accessableby: "Members",
        aliases: ["funnyNSFW"]
    },
    run: async (bot, message, args) => {
         if (!message.channel.nsfw) return message.channel.send("Need to be in a nsfw channel to use this command.")
        const { body } = await snekfetch
            .get('https://www.reddit.com/r/NSFWfunny.json?sort=top&t=week')
            .query({ limit: 800 });
    const allowed = !message.channel.nsfw ? body.data.children : body.data.children.filter(post => post.data.over_18);
    if (!allowed.length) return message.channel.send('It seems we are out of fresh images for you!, Try again later.');
    const randomnumber = Math.floor(Math.random() * allowed.length)
    const embed = new Discord.RichEmbed()
        .setColor(0x00A2E8)
        .setTitle(allowed[randomnumber].data.title)
        .setImage(allowed[randomnumber].data.url)
    message.channel.send(embed)
    }
}