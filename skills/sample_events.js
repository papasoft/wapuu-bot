var wordfilter = require('wordfilter');
var moment = require('moment');
var config = require('../wapuu/data-config.js');
var greeting = require('../wapuu/data-greeting.js');

module.exports = function(controller) {

    controller.on('user_channel_join', function(bot, message) {

        //if (message.channel === config.channelCoffee) {
            bot.reply(message, 'Welcome <@' + message.user + '>. ' 
                  + config.getRandom(greeting.defaultResponses) + ' ' 
                  + config.getRandomEmoji(greeting.emoji));
        //}
        
    });
 
}
