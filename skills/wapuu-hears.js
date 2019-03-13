/*

Respond to trigger words for (hopefully) fun random responses

*/

var wordfilter = require('wordfilter');
var moment = require('moment');
var config = require('../wapuu/data-config.js');
var greeting = require('../wapuu/data-greeting.js');
var coffee = require('../wapuu/data-coffee.js');
var responses = require('../wapuu/data-responses.js');
var monk = require('monk');
var db = monk(process.env.MONGO_URI);

module.exports = function(controller) {
/*
    controller.hears(['^find (.*)'], ['direct_message','direct_mention','mention'], function(bot, message) {

          var term = message.match[1];           //var termPattern = new RegExp('.*' + term + '.*', 'i');
          var termPattern = ".*" + term + ".*";

          var results = [];
          db.get('sessions').find(
            
              { $or: [ 
                { title: {$regex: termPattern, $options: 'i'} },
                { speakers: {$regex: termPattern, $options: 'i'} } 
                ]
              },
              {sort: {session_time: 1}}
              
          ).then((sessions) => {
            
             sessions.forEach(s => {
               
                 var track = s.track[0] ? s.track[0].name.replace('&amp;', '&').replace('&#8217;', "'") : '';
               
                 if (s.track[0] && s.track.length > 1) {
                   track = 'All Tracks'
                 }
               
                 var attachment = {
                   title: s.title.replace('&amp;', '&').replace('&#8217;', "'"),
                   author_name: s.speakers.join(', '),
                   text: track,
                   footer: moment.unix(s.session_time).format('ddd h:mm A')
                 };
                 results.push(attachment);

             });
            
              bot.reply(message, {
                  text: config.getRandom(greeting.deliveryWords) + '...',
                  attachments: results
              });

          });     
                
      
    });
*/
        // admin-announce 
    // allow an admin to send a message to main channel from a DM with the bot
    // message comes as if from the bot in the announceChannel

    controller.hears(['admin-announce (.*)'], 'direct_message', function(bot, message) {
      /*
        if (config.adminUsers.indexOf(message.user) === -1) {
            return;
        }
        */
        var msg = message.match[1];

        // announceChannel is the channel to make announcement in, i.e., #general
        bot.say({channel: config.channelAnnounce, text: msg});
    });

    controller.hears(['kids'], ['direct_message','direct_mention','mention','ambient'], function(bot, message) {
        bot.reply(message, responses.kidsReply());
        
    });

    controller.hears(['directions', 'lost', 'map to f', 'map to c'], ['direct_message','direct_mention','mention','ambient'], function(bot, message) {
        bot.reply(message, responses.helpDirections);
        
    });

    controller.hears(['wifi', 'wi-fi'], ['direct_message','direct_mention','mention','ambient'], function(bot, message) {
        bot.reply(message, responses.wifiReply() );
        
    });

    controller.hears(['slides', 'slideshare', 'slide link'], ['direct_message','direct_mention','mention','ambient'], function(bot, message) {
        bot.reply(message, responses.slidesReply() );
        
    });

    controller.hears(['registration','register','check in'], ['direct_message','direct_mention','mention','ambient'], function(bot, message) {
        bot.reply(message, responses.registrationReply());
        
    });
/*
    controller.hears(['ticket','refund'], ['direct_message','direct_mention','mention','ambient'], function(bot, message) {
        bot.reply(message, responses.ticketsReply());
        
    });
*/
    controller.hears(['food','breakfast', 'lunch', 'snack'], ['direct_message','direct_mention','mention'], function(bot, message) {
        bot.reply(message, responses.helpFood);
        
    });

    controller.hears(['help'], ['direct_message','direct_mention','mention'], function(bot, message) {
        bot.reply(message, responses.helpUsage);
        
    });

    controller.hears(['links', 'info'], ['direct_message','direct_mention','mention'], function(bot, message) {
        bot.reply(message, responses.helpLinks);
        
    });

    controller.hears(['schedule'], ['direct_message','direct_mention','mention'], function(bot, message) {
        bot.reply(message, responses.helpSchedule);
        
    });
/*
    controller.hears(['live', 'video'], ['direct_message','direct_mention','mention'], function(bot, message) {
        bot.reply(message, responses.liveStreamReply);
        
    });
*/
  
    coffee.words.forEach(g => {
        controller.hears(g.hear, ['direct_message','direct_mention','mention','ambient'], function(bot, message) {

            if (message.type !== 'ambient' || message.channel === config.channelCoffee) {
              bot.reply(message, 
              {
                text: config.getRandom(g.reply) + '\n\n' + config.getRandom(g.gifs),
                unfurl_links: true
              });
            } else {
              bot.api.reactions.add({
                  name: 'coffee',
                  channel: message.channel,
                  timestamp: message.ts
              });
            }
        });
    });

    greeting.words.forEach(g => {
        controller.hears(g.hear, ['direct_message','direct_mention','mention'], function(bot, message) {
            bot.reply(message, config.getRandom(g.reply) + ' ' + config.getRandomEmoji(greeting.emoji));
              console.log(message);
        });
    });

    greeting.ambientWords.forEach(g => {
        controller.hears(g.hear, ['ambient'], function(bot, message) {
            bot.reply(message, config.getRandom(g.reply) + ' ' + config.getRandomEmoji(greeting.emoji));
        });
    });

    controller.hears(['thank', 'gracias', 'awesome', 'yay', 'merci', 'cute', 'adorable', 'good', 'nice'], ['direct_message','direct_mention','mention'], function(bot, message) {
        bot.api.reactions.add({
            name: 'heart',
            channel: message.channel,
            timestamp: message.ts
        });
    });

    // default mention
    controller.on(['direct_mention','mention'], function(bot, message) {
      bot.reply(message, config.getRandom(greeting.defaultResponses) + ' ' + config.getRandomEmoji(greeting.emoji));
    });

};
