const { RichEmbed } = require("discord.js")
const EmbedColor = "RANDOM";
const ErrorMessage = `Error In Getting Information | Please Try Again Later!`;
const ErrorEmbedColor = "RED";

module.exports = {
    config: {
        name: "channelinfo",
        aliases: ["ci"],
        usage: "",
        category: "info",
        description: "Shows the channel info!",
        accessableby: "Members"
    },
    run: async (bot, message, args) => {
          try {

    let nsfw = message.channel.nsfw ? 'Yes' : 'No';
    let parent = message.channel.parent ? message.channel.parent : 'No Category';
    let topic = message.channel.topic ? message.channel.topic : 'None';
    let embed = new RichEmbed()
		.setColor("RANDOM")
    .setDescription(`**THIS CHANNL INFO**`)
        .addField('**Channel Name**' , message.channel.name, true)
        .addField('**Channel Topic**' , topic, true)
        .addField('**Channel NSFW Type**', nsfw, true)
        .addField("**Channel Category**", parent, true)
        .addField('**Channel Position**', message.channel.position, true)
        .addField("**Channel Created At**", `${message.channel.createdAt.toDateString()}`, true)
        .setFooter(`Requested By : ${message.author.username}`)

    message.channel.send(embed);

      await message.delete();
    } catch (error) {
      console.log(error);
      message.channel.send(
        new RichEmbed()
          .setColor(`${ErrorEmbedColor}`)
          .setDescription(`${ErrorMessage}`)
          .setFooter(`Sorry For Error!`)
          .setTimestamp()
      );
    }
    }
}