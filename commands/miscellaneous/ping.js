const Discord = require("discord.js")
const botconfig = require("../../botconfig.json");
const colours = require("../../colours.json");
const prefix = botconfig.prefix
const cooldowns = new Discord.Collection();

module.exports.run = async (bot, message, args) => {

    message.channel.send("Pinging...").then(m => {
        let ping = m.createdTimestamp - message.createdTimestamp
        let choices = ["**:ping_pong: Is this really my ping**", "**:ping_pong: Is it okay? I cant look**", "**:ping_pong: I hope it isnt bad**"]
        let response = choices[Math.floor(Math.random() * choices.length)]
                        let hrStart = process.hrtime()
                let hrDiff;
                hrDiff = process.hrtime(hrStart);

        const embed = new Discord.RichEmbed()
        .setColor(colours.green)
        .setTitle("**Packet Internet Groper:**")
        .addField("**DISCORD API:**", `\`\`\`${Math.round(bot.ping)} MS\`\`\``, true)
        .addField("**MESSAGE (RESPONS):**", `\`\`\`${hrDiff[0] > 0 ? `${hrDiff[0]}s ` : ''}${hrDiff[1] / 1000000} MS\`\`\``, true)
        .addField("**SHARDS:**", `\`\`\`${Math.round(bot.ping)} MS\`\`\``)
        m.edit(embed)
    })

}


module.exports.config = {
    name: "ping",
    description: "PONG! Displays the api & latency",
    usage: "!!ping",
    category: "miscellaneous",
    accessableby: "Members",
    aliases: ["latency"]
}
