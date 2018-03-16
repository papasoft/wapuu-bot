/*

Responsd to messages from an admin user in a DM session

Need to assign at least one adminUser and one main channel to announce in
 
*/

var wordfilter = require('wordfilter');
var moment = require('moment');
var config = require('../wapuu/data-config.js');
var schedule = require('../wapuu/data-schedule.js');
var monk = require('monk');
var db = monk(process.env.MONGO_URI);

var sessionTrackMap = {
  "1233959": { name: "Business/Micro-MBA (CBC 155)" },
  "122576": { name: "Design & Community (RDB 1100)" },
  "5041": { name: "Developer (CBC 232)" },
  "1226616": { name: "Developers Workshop" },
  "1226046": { name: "E-Commerce & Users" },
  "1226240": { name: "E-Commerce Workshop" },
  "27": { name: "How To" },
  "1225853": { name: "Learn JavaScript Deeply" },
  "1233947": { name: "WordPress 101 Beginner Course" }
};

module.exports = function(controller) {

    controller.hears(['test'], 'direct_message', function(bot, message) {
      console.log(sessionTrackMap['5041'].name);
    });
  
    // admin-announce 
    // allow an admin to send a message to main channel from a DM with the bot
    // message comes as if from the bot in the announceChannel

    controller.hears(['admin-announce (.*)'], 'direct_message', function(bot, message) {
        if (config.adminUsers.indexOf(message.user) === -1) {
            return;
        }
        var msg = message.match[1];

        // announceChannel is the channel to make announcement in, i.e., #general
        bot.say({channel: config.channelAnnounce, text: msg});
    });
        
    // admin-reset-schedule
    // fetch sessions from WP API and store in mongo db

    controller.hears(['^admin-reset-schedule'], 'direct_message', function(bot, message) {

        //if (!config.adminUsers.includes(message.event.user)) {
        //    return;
        //}

        // remove all sessions
        db.get('sessions').remove({});

        var ok = true;
        var s = schedule.getSessions()
          .then(function (response) {
              var schedule = [];
              response.forEach(session => {
                  controller.storage.sessions.save(session, function(err,saved) {

                      if (err) {
                          bot.reply(message, 'Error saving session: ' + err);
                      }
                      else {
                        ok = false;
                      }

                  });

              });
            }, 
            function (err) {
              throw err;
            }
          );
      
          if (ok) {
              bot.api.reactions.add({
                  name: 'thumbsup',
                  channel: message.channel,
                  timestamp: message.ts
              });
          }
      
    });
    
};
