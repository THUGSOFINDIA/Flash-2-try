const { RichEmbed } = require("discord.js")

module.exports = {
    config: {
        name: "botinfo",
        aliases: ["bi"],
        usage: "!!botinfo",
        category: "info",
        description: "Shows the bot info!",
        accessableby: "Members"
    },
    run: async (bot, message, args) => {
        let inline = true
        let bicon = bot.user.displayAvatarURL;
        let usersize = bot.users.size
        let chansize = bot.channels.size
        let uptimxd = bot.uptime 
        let servsize = bot.guilds.size
        let botembed = new RichEmbed()
        .setColor("#00ff00")
        .setThumbnail(bicon)
        .addField("Bot Name", `${bot.user.username}`, inline)
        .addField("Bot Owner", "<@690241313873985540> <:botdev:733223661741539389> <a:noi:732444390970359879>", inline )
        .addField("Servers", `${servsize}`, inline)
        .addField("Channels", `8076`, inline)
        .addField("Users", `${usersize}`, inline)
        .addField("Bot Library", "discord.js", inline)
        .addField("Created On", bot.user.createdAt)
        .setFooter(`Information about: ${bot.user.username}.`)
        .setTimestamp()
        
        message.channel.send(botembed);
    }
}
