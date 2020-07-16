const { RichEmbed } = require("discord.js")
const { light_blue } = require("../../colours.json");
const fetch = require("node-fetch")

module.exports = {
    config: {
        name: "shorturl",
        aliases: ["urlshortner", "url_shortner"],
        usage: "<url>",
        category: "miscellaneous",
        description: "",
        accessableby: "Members"
    },
    run: async (bot, message, args) => {
             let url = args[0];
        if(!url){
          const embed3 = new RichEmbed()
          .setColor("RED")
          .setDescription("**Please Provide A URL To Be Short**")
            return message.channel.send(embed3);
        }

        let res = await fetch(`https://is.gd/create.php?format=simple&url=${encodeURI(url)}`);
        let body = await res.text();

        if(body === "Error: Please enter a valid URL to shorten"){
          const embed6 = new RichEmbed()
          .setColor("RED")
          .setDescription("**Please Enter A Valid URL!!**")
            return message.channel.send(embed6);
        }

        let embed = new RichEmbed()
            .setColor("GREEN")
            .setFooter(`Flash URL Shortner!`)
            .setDescription(body);
        message.channel.send(embed);
    }
}