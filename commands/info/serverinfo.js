const { RichEmbed } = require("discord.js")
const botconfig = require("../../botconfig.json");
const colours = require("../../colours.json");
const moment = require('moment');

const filterLevels = {
	DISABLED: 'Off',
	MEMBERS_WITHOUT_ROLES: 'No Role',
	ALL_MEMBERS: 'Everyone'
};

const verificationLevels = {
	NONE: 'None',
	LOW: 'Low',
	MEDIUM: 'Medium',
	HIGH: '(╯°□°）╯︵ ┻━┻',
	VERY_HIGH: '┻━┻ ﾐヽ(ಠ益ಠ)ノ彡┻━┻'
};

const regions = {
	brazil: 'Brazil :flag_br:',
	europe: 'Europe :flag_eu:',
	hongkong: 'Hong Kong :flag_hk:',
	india: 'India :flag_in:',
	japan: 'Japan :flag_jp:',
	russia: 'Russia :flag_ru:',
	singapore: 'Singapore :flag_sg:',
	southafrica: 'South Africa :icons8southafrica48:',
	sydeny: 'Sydeny',
	'us-central': 'US Central :flag_us:',
	'us-east': 'US East :flag_us:',
	'us-west': 'US West :flag_us:',
	'us-south': 'US South :flag_us:'
};



module.exports.run = async (bot, message, args) => {
		const roles = message.guild.roles.sort((a, b) => b.position - a.position).map(role => role.toString());
		const members = message.guild.members;
		const channels = message.guild.channels;
		const emojis = message.guild.emojis;
  

		const embed = new RichEmbed()
    .setTitle(message.guild.name)
			.setDescription(`Created On **${moment(message.guild.createdTimestamp).format('LL')}**. That's Over **${moment(message.guild.createdTimestamp).fromNow()}**`)
			.setColor('BLUE')
			.setThumbnail(message.guild.iconURL)
			.addField('**__Members:__**', [
        `\`Total Users:\` **${message.guild.memberCount}**`,
				`\`Humans:\` **${members.filter(member => !member.user.bot).size}** • \`Bots:\` **${members.filter(member => member.user.bot).size}**`,
				` <a:Inf7:732262697042837575> \`ONLINE\` **${members.filter(member => member.presence.status === 'online').size} **`,
				` <:idle7:732429457465278595> \`IDLE\` **${members.filter(member => member.presence.status === 'idle').size} **`,
				` <:dnd7:732429451538989158> \`DND\` **${members.filter(member => member.presence.status === 'dnd').size} **`,
				` <:offline7:732429460196032512> \`OFFLINE\` **${members.filter(member => member.presence.status === 'offline').size} **`,
        '\u200b'
			], true)
    //
			.addField('**__Channels:__**', [
				` <:r6:732429439727829154> \`TEXT:\` **${channels.filter(channel => channel.type === 'text').size}**`,
				` <:voice:732429462934913027> \`VOICE:\` **${channels.filter(channel => channel.type === 'voice').size}**`,
				'\u200b'
			], true)
			.addField('**__Utility:__**', [
				`**<a:53:732902356852801646>\`OWNER:\` ${message.guild.owner.user.tag}**`,
				`**<:voice:732429462934913027>\`VOICE REGION:\` ${regions[message.guild.region]}**`,
				`**<a:noi:732444390970359879>\`VERIFICATION LEVEL:\` ${message.guild.verificationLevel}`,
				`**<:Info7:732429449341173820>\`SERVER ID:\` **${message.guild.id}**`,
				'\u200b'
			])
    .addField("**__Misc:__**", [
				`**<:custom7:732429480777220096>\`AFK Channel:\` ${message.guild.afkChannelID === null ? 'No AFK Channel' : bot.channels.get(message.guild.afkChannelID).name} ${message.guild.afkChannelID === null ? '' :     message.guild.afkChannel}**`,
				`**<:custom7:732429480777220096>\`AFK Timeout:\` ${message.guild.afkTimeout / 60} minutes**`,
				`**<a:blobw7:732426804304019496>\`Custom Emoji:\` ${emojis.size}`,
				`**<a:r2:732425120521519144>\`Roles:\` **${roles.length}**`,
				'\u200b'
			])
         .setFooter(`${bot.user.username} Joined This Server On ${moment.utc(message.member.joinedAt).format('DD/MM/YY')}`)
		message.channel.send(embed);
}


module.exports.config = {
    name: "serverinfo",
    aliases: ["serverinfo", "si" ],
    usage: "!!serverinfo",
    category: "info",
    description: "Shows about the server information!",
    accessableby: "Members"
}