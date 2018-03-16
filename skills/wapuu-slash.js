/*
  Slash command /wapuu 
*/
var responses = require('../wapuu/data-responses.js');

module.exports = function(controller) {

    var greetings = [];
  
    controller.on('slash_command',function(bot,message) {

        if (message.text === 'help') {
          bot.replyPrivate(message, responses.helpUsage);
        } else if (message.text === 'food') {
          bot.replyPrivate(message, responses.helpFood);
        } else if (message.text === 'links') {
          bot.replyPrivate(message, responses.helpLinks);
        } else if (message.text === 'schedule') {
          bot.replyPrivate(message, responses.helpSchedule);
        } else if (message.text === 'find') {

        } else {
          bot.replyPrivate(message, responses.helpUsage);
        }              

    })
}
