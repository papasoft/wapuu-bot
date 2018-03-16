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
                 var attachment = {
                   title: s.title.replace('&amp;', '&').replace('&#8217;', "'"),
                   author_name: s.speakers.join(', '),
                   text: s.track[0] ? s.track[0].name.replace('&amp;', '&').replace('&#8217;', "'") : '',
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

    controller.hears(['kids'], ['direct_message','direct_mention','mention','ambient'], function(bot, message) {
        bot.reply(message, responses.kidsReply());
        
    });

    controller.hears(['wifi', 'wi-fi'], ['direct_message','direct_mention','mention','ambient'], function(bot, message) {
        bot.reply(message, responses.wifiReply() );
        
    });
    
    controller.hears(['directions', 'lost', 'map to f', 'map to c'], ['direct_message','direct_mention','mention','ambient'], function(bot, message) {
        bot.reply(message, responses.directionsReply());
        
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
        bot.reply(message, responses.helpFood());
        
    });

    greeting.words.forEach(g => {
        controller.hears(g.hear, ['direct_message','direct_mention','mention'], function(bot, message) {
            bot.reply(message, config.getRandom(g.reply));
        });
    });

  /*

    greeting.ambientWords.forEach(g => {
        controller.hears(g.hear, ['ambient'], function(bot, message) {
            bot.reply(message, config.getRandom(g.reply));
        });
    });
*/  
    coffee.words.forEach(g => {
        controller.hears(g.hear, ['direct_message','direct_mention','mention','ambient'], function(bot, message) {

            if (message.channel === config.channelCoffee) {
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

    controller.hears(['thank', 'gracias', 'awesome', 'yay', 'merci', 'cute', 'adorable'], ['direct_message','direct_mention','mention'], function(bot, message) {
        bot.api.reactions.add({
            name: 'heart',
            channel: message.channel,
            timestamp: message.ts
        });
    });

    // default mention
    controller.on(['direct_mention','mention'], function(bot, message) {
      bot.reply(message, config.getRandom(greeting.defaultResponses));
    });

};
