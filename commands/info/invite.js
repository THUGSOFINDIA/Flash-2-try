const { RichEmbed } = require("discord.js")

module.exports = {
    config: {
        name: "invitation",
        aliases: ["inv", "invite"],
        usage: ".inv",
        category: "contactUs",
        description: "Invite Bot To You Server",
        accessableby: "Members"
    },
    run: async (bot, message, args) => {
const embed = new RichEmbed()
  .setColor("RED")
.setTitle("Invite Links")
.setURL("https://discord.gg/")
  .setDescription(`> <a:y1:732261987903471649> **[Invite Me](https://discord.com/api/oauth2/authorize?client_id=725015229640998963&permissions=8&scope=bot)**
> <a:y1:732261987903471649> **[Support Server](https://discord.gg/T3kKDPm)**`)
  message.channel.send(embed)
    }
}
