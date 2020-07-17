
const { RichEmbed } = require("discord.js");
const { default_prefix } = require("../../botconfig.json");
const { readdirSync } = require("fs")
const { stripIndents } = require("common-tags")
const { green } = require("../../colours.json")
const talkedRecently = new Set();

module.exports = {
    config: {
        name: "help",
        aliases: ["help", "commands", "h"],
        usage: "(command)",
        category: "info",
        description: "Displays all commands that the bot has.",
        accessableby: "Members"
    },
    run: async (bot, message, args) => {
      if(!args[0]) {
        const embed = new RichEmbed()
            .setColor(green)
            .setAuthor(`${message.guild.me.displayName} Help`, message.guild.iconURL)
            .setDescription("To View The Commands Of Each Group Use:\n\`\`\`.help <group>\`\`\`")
            .setTimestamp()
            .addField("<:members7:732429445662769213> **ContactUs:**", "3 Commands", true)//done
            .addField("<:custom7:732429480777220096> **Games:**", "8 Commands", true)//done
            .addField("<:r6:732429439727829154> **Images:**", "8 Commands", true)//done
            .addField("<a:info7:732444404287012925> **Info:**", "13 Commands", true)//done
            .addField("<:rightt:732425891472474146> **Miscellaneous:**", "13 Commands", true)
            .addField("<a:y1:732261987903471649> **Moderation:**", "15 Commands", true)
            .addField("<:18:732429489925259364> **NSFW:**", "8 Commands", true)
            .addField("<a:noi:732444390970359879> **Owner:**", "4 Commands", true)
            .addField("<a:money:732257497951502420> **Economy**", "17 Commands", true)
            .addField("<a:gs7:732422732515639398> **Search**", "6 Commands", true)
            .setFooter("Akiz | *help")
            return message.channel.send(embed)
      } else if(args[0] === `games` || args[0] === "Games") {
        const embedG = new RichEmbed()
        .setColor("RANDOM")
        .setTitle(`${bot.user.username} Games Commands`)
        .setThumbnail(bot.user.avatarURL)
        .setDescription(`Use This Commands By Typing \`.<command>\``)
        .addField("<:custom7:732429480777220096> **Games**", "`8ball`, `ascii`, `flipword`, `kill`, `love`, `reverse`, `rps`, `survey`")
        message.channel.send(embedG)
      } else if(args[0] === `contactus` || args[0] === "ContactUs"){
        const embedG = new RichEmbed()
        .setColor("RANDOM")
        .setTitle(`${bot.user.username} ContactUs Commands`)
        .setThumbnail(bot.user.avatarURL)
        .setDescription(`Use This Commands By Typing \`.<command>\``)
        .addField("<:members7:732429445662769213> **ContactUs**", "`contact`, `report`, `invitation`")
        message.channel.send(embedG)
      } else if(args[0] === "images" || args[0] === "Images") {
        const embedP = new RichEmbed()
        .setColor("RANDOM")
        .setTitle(`${bot.user.username} Images Commands`)
        .setThumbnail(bot.user.avatarURL)
        .setDescription(`Use This Commands By Typing \`.<command>\``)
        .addField("<:r6:732429439727829154> **Images**", "`alpaca`, `captcha`, `cat`, `dog`, `llama`, `meme`, `pepe`, `seal`")
        message.channel.send(embedP)
      } else if(args[0] === "info" || args[0] === "Info"){
                const embedi = new RichEmbed()
        .setColor("RANDOM")
        .setTitle(`${bot.user.username} Info Commands`)
        .setThumbnail(bot.user.avatarURL)
        .setDescription(`Use This Commands By Typing \`.<command>\``)
        .addField("<a:info7:732444404287012925> **Info**", "`serverrole`, `banlist`, `botinfo`, `channelinfo`, `help`, `membercount`, `myinfo`, `roleinfo`, `serveremojis`, `serverinfo`, `stats`")
        message.channel.send(embedi)
      }else if(args[0] === "miscellaneous" || args[0] === "Miscellaneous"){
                const embedM = new RichEmbed()
        .setColor("RANDOM")
        .setTitle(`${bot.user.username} Miscellaneous Commands`)
        .setThumbnail(bot.user.avatarURL)
        .setDescription(`Use This Commands By Typing \`.<command>\``)
        .addField("<:rightt:732425891472474146> **Miscellaneous**", "`advice`, `afk`, `avatar`, `cnjoke`, `hastebin`, `instagram`, `joke`, `ping`, `react-custom`, `reminder`, `uptime`, `shorturl`, `yomamma`")
        message.channel.send(embedM)
      }else if(args[0] === "moderation" || args[0] === "Moderation"){
                const embedm = new RichEmbed()
        .setColor("RANDOM")
        .setTitle(`${bot.user.username} Moderation Commands`)
        .setThumbnail(bot.user.avatarURL)
        .setDescription(`Use This Commands By Typing \`.<command>\``)
        .addField("<a:y1:732261987903471649>  **Moderation**", "`nick`, `addrole`, `ban`, `clear`, `kick`, `lockdown`, `mute`, `poll`, `removerole`, `role`, `say`, `softban`, `unban`, `unmute`, `warn`")
        message.channel.send(embedm)
      }else if(args[0] === "nsfw" || args[0] === "NSFW"){
                const embednsfw = new RichEmbed()
        .setColor("RANDOM")
        .setTitle(`${bot.user.username} NSFW Commands`)
        .setThumbnail(bot.user.avatarURL)
        .setDescription(`Use This Commands By Typing \`.<command>\``)
        .addField("<:18:732429489925259364> **NSFW**", "`4k`, `anal`, `ass`, `funnynsfw`, `hentai`, `holo`, `pussy`, `tits`")
        message.channel.send(embednsfw)
      }else if(args[0] === "owner" || args[0] === "Owner"){
                const embedo = new RichEmbed()
        .setColor("RANDOM")
        .setTitle(`${bot.user.username} Owner Commands`)
        .setThumbnail(bot.user.avatarURL)
        .setDescription(`Use This Commands By Typing \`.<command>\``)
        .addField("<a:noi:732444390970359879> **Owner**", "`eval`, `setgame`, `setstatus`, `shutdown`")
        message.channel.send(embedo)
      }else if(args[0] === "economy" || args[0] === "Economy"){
        const embedE = new RichEmbed()
        .setColor("RANDOM")
        .setTitle(`${bot.user.username} Economy Commands`)
        .setThumbnail(bot.user.avatarURL)
        .setDescription(`Use This Commands By Typing \`.<command>\``)
        .addField("<a:money:732257497951502420> **Economy**", "`addmoney`, `balance`, `beg`, `buy`, `daily`, `deposit`, `pay`, `profile`, `removemoney`, `rob`, `roulette`, `sell`, `slot`, `store`, `weekly`, `withdraw`, `work`")
       message.channel.send(embedE)
        }else if(args[0] === "search" || args[0] === "Search"){
        const embedE = new RichEmbed()
        .setColor("RANDOM")
        .setTitle(`${bot.user.username} Search Commands`)
        .setThumbnail(bot.user.avatarURL)
        .setDescription(`Use This Commands By Typing \`.<command>\``)
        .addField("<a:gs7:732422732515639398> **Search**", "`anime`, `gif`, `reddit`, `wiki`, `ytsearch`, `weather`")
       message.channel.send(embedE)
        }
         
    }
}

    
