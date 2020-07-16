
const { RichEmbed } = require("discord.js")
const { redlight } = require("../../colours.json")

module.exports= {
    config: {
        name: "dmuser",
        description: "dms a user in the server",
        usage: "<id>",
        category: "Moderation",
        accessableby: "Moderators",
        aliases: ["dmu", "user"]
    },
    run: async (bot, message, args) => {

    if(!message.member.hasPermission(["MANAGE_ROLES", "ADMINISTRATOR"])) return message.channel.send("You dont have permission to perform this command!")

    if(args.join(" ") !== ""){
        if(args[0].startsWith("<@") || !args[0].startsWith("0") && !args[0].startsWith("1") && !args[0].startsWith("2") && !args[0].startsWith("3") && !args[0].startsWith("4") && !args[0].startsWith("5") && !args[0].startsWith("6") && !args[0].startsWith("7") && !args[0].startsWith("8") && !args[0].startsWith("9")){
          const embed7 = new RichEmbed()
          .setColor("RED")
          .setDescription("**Please Enter A Valid User Id!**")
          return message.channel.send(embed7)
        }
        if(args.length == 1){
          const embed8 = new RichEmbed()
          .setColor("RED")
          .setDescription("**Please Enter A Message!**")
            return message.channel.send(embed8);
        }
        let to = args[0];
        let msg = args[1];
        for(i=1; i<args.length; i++) {
            if(args[1] != args[1])
                msg += " " + args[i];
            else
                msg = args[i];
        }
        try {
            bot.users.get(to).send({embed: {
                color: 1,
                description: msg,
                author: {
                    name: bot.user.tag,
                    icon_url: bot.user.displayAvatarURL
                },
                footer: {
                    text: "ID: " + bot.user.id
                },
            }});
          const embed2 = new RichEmbed()
          .setColor("#0000ff")
          .setDescription(`**Your Message To <@${to}> Has Been Successfully Send**`)
            message.channel.send(embed2)
          
            return;
        }
        catch(err) {
            return message.channel.send(`ERROR: ` + err.message);
        }
    }else{
        return message.channel.send(`Please enter a id and a message!`);
    }
    }
}
