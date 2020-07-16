const { RichEmbed } = require("discord.js")

module.exports= {
    config: {
        name: "banlist",
        description: "",
        usage: "",
        category: "info",
        accessableby: "Members",
        aliases: ["blist", "ban_list"]
    },
    run: async (bot, message, args) => {
      message.guild.fetchBans()
  .then(banned => {
    let list = banned.map(user => user.tag).join(',\n');

    // Make sure if the list is too long to fit in one message, you cut it off appropriately.
    if (list.length >= 1950) list = `${list.slice(0, 1948)}...`;

        const embed = new RichEmbed()
        .setColor("PURPLE")
        .setTitle(`**TOTAL BANS**: ${banned.size}`)
        .setDescription(`\`${list}\``)
    message.channel.send(embed);
  })
  .catch(console.error);
    }
}