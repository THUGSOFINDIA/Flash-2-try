const Discord = require("discord.js"),
fetch = require("node-fetch");

module.exports = { 
    config: {
        name: "captcha",
        description: "sends a picture of a alpaca!",
        usage: "",
        category: "image",
        accessableby: "Members",
        aliases: ["captchas"]
    },
    run: async (bot, message, args) => {
              let user = await this.bot.resolveUser(args[0]) || message.author;
        let m = await message.channel.send("UTILS".PLEASE_WAIT);
        try {
            let res = await fetch(encodeURI(`https://nekobot.xyz/api/imagegen?type=captcha&username=${user.username}&url=${user.displayAvatarURL({ format: "png", size: 512 })}`));
            let json = await res.json();
            let attachment = new Discord.MessageAttachment(json.message, "captcha.png");
            message.channel.send(attachment);
            m.delete();
        } catch(e){
            console.log(e);
            m.edit("ERR_OCCURENCED");
        }
    }
}