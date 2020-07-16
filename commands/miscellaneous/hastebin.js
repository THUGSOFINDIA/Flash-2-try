const { RichEmbed } = require("discord.js")
const { pink } = require("../../colours.json");
const hastebin = require('hastebin-gen');

module.exports = {
    config: {
        name: "hastebin",
        aliases: ["hb"],
        usage: "",
        category: "miscellaneous",
        description: "",
        accessableby: "Members"
    },
    run: async (bot, message, args) => {
           let haste = args.slice(0).join(" ")

        let type = args.slice(1).join(" ")
const embed = new RichEmbed()
.setColor("RANDOM")
.setDescription("**What do you want to post in Hastebin**")
        if (!args[0]) { return message.channel.send(embed) }

        hastebin(haste).then(r => {

            message.channel.send("`Posted to Hastebin at this URL:`  " + r);

        }).catch(console.error);

        message.delete();

    }
}