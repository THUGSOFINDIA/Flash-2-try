const commando = require('discord.js-commando');
var emoji = require("emojilib") // A JSON file containing emoji and their English meanings.
emoji = emoji.lib;
const { youtube_api_key } = require("../../botconfig.json")//i am coming with th yt api key hold on okay

module.exports = {
    config: {
        name: "ytsearch",
        aliases: ["yt"],
        usage: "<search>",
        category: "search",
        description: "",
        accessableby: "Members"
    },
    run: async (bot, message, args) => {
         var search_query = args;
        console.log(search_query);
        if (args.length < 1 ) {
            message.reply("Make sure to add some search terms so I know what YouTube video to get you :eyes:\nEg: `-yt Swedish House Mafia greyhound`");
        }

        else {
            console.log("SEARCH QUERY", search_query);

            const { google } = require('googleapis');
    
            const youtube = google.youtube({
                version: 'v3',
                auth: youtube_api_key
            });
    
            // Function is placed here, because I may require calling this function in the future.
            async function searchYouTube(msg, search_term) {
                const res = await youtube.search.list({
                    part: 'id,snippet',
                    q: search_term,
                    type: 'video'
                });

                if (res.data.pageInfo.totalResults === 0) {
                    msg.reply("No results found :( Try another search maybe?")
                }
                else {
                    var video_id = res.data.items[0].id.videoId;
                    var video_url = `https://www.youtube.com/watch?v=${video_id}`
                    console.log(video_url)
                    msg.reply(video_url)
                }
            }
            searchYouTube(message, search_query);
    
        }
        function getRandomNumber(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
    }
}