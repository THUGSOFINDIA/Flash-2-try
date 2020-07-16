const { ownerid, prefix } = require("../../botconfig.json");
const { inspect } = require("util")
const { RichEmbed } = require("discord.js")
module.exports = { 
    config: {
        name: "eval",
        description: "Evaluates code",
        accessableby: "Bot Owner",
        category: "owner",
        type: "owner",
        usage: `${prefix}eval <input>`
    },
    run: async (bot, message, args) => {
    if(message.author.id == ownerid) {
        try {
            let toEval = args.join(" ")
			let evaluated = inspect(eval(toEval, { depth: 0 }));
            
            if (!toEval) {
              const embed4 = new RichEmbed()
              .setColor("RED")
              .setTitle("Error")
              .setDescription(`Error While Evaluating : \`air\``);
                return message.channel.send(embed4)
            } else {
                let hrStart = process.hrtime()
                let hrDiff;
                hrDiff = process.hrtime(hrStart);
                return message.channel.send(`*Executed in ${hrDiff[0] > 0 ? `${hrDiff[0]}s ` : ''}${hrDiff[1] / 1000000}ms.*\n\`\`\`javascript\n${evaluated}\n\`\`\``, { maxLength: 1900 })
            }
            
        } catch (e) {
            return message.channel.send(`Error while evaluating: \`${e.message}\``);
        }

      } else {
return message.channel.send("Only Owner Use This Command").then(msg => msg.delete(5000))
      }
    }
}