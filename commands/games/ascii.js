const figlet = require("figlet");
const { promisify } = require("util");
const figletAsync = promisify(figlet);
module.exports = {
    config: {
        name: "ascii",
        aliases: ["ascii"],
        usage: "",
        category: "games",
        description: "",
        accessableby: "Members"
    },
    run: async (bot, message, args) => {
              let text = args.join(" ");
        if(!text || text.length > 20){
            return message.channel.send("Please Input A Text");
        }
    
        let rendered = await figletAsync(text);
        message.channel.send("```"+rendered+"```");
            message.delete()
    }
}