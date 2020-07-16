const { RichEmbed } = require("discord.js")
const { pink } = require("../../colours.json");
const fetch = require("node-fetch")

module.exports = { 
    config: {
        name: "contact",
        aliases: ["helpline"],
        usage: "<reason>",
        category: "contactUs",
        description: "Please fell free to submit the bug occured in the bot!",
        accessableby: "Members"
    },
    run: async (bot, message, args) => {
        if(args[0] == "help"){
            let helpembxd = new RichEmbed()
            .setColor(pink)
            .addField("Contact Command", "Usage: !!Contact <reason>")
        
            message.channel.send(helpembxd);
            return;
          } 
        
            let Invite = await message.guild.channels.find((c) => c.type === 'text').createInvite()
            let Sender = message.author;
            const sayMessage = args.join(" ");
            if(!sayMessage) return message.channel.send("Please give us reason for contacting").then(msg => {msg.delete(5000)});
        
           let contact = new RichEmbed()
           .setColor(pink)
           .setThumbnail(Sender.displayAvatarURL)
           .setDescription(`Contact message from [${message.guild.name}](${Invite.url})`)
           .setTitle("Message from contact command!")
           .addField("User", Sender, true)
           .addField("User ID: ", Sender.id, true)
           .addField("Message: ", sayMessage)
           .setTimestamp()
        
            bot.channels.get("727052825762201631").send(contact);
        
            let embed = new RichEmbed()
            .setColor(pink)
            .setTitle("Message Sent!")
            .setDescription("Your contact message has been sent!")
            .addField("Reqested by ", Sender)
            .addField("Message: ", sayMessage)
            .setFooter("Thanks You For Contacting")
        
            message.channel.send(embed).then(i => i.react("⏳"))
        
                message.delete();
    }
}