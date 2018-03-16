/*

WHAT IS THIS?

This module demonstrates simple uses of Botkit's `hears` handler functions.

In these examples, Botkit is configured to listen for certain phrases, and then
respond immediately with a single line response.

*/

var wordfilter = require('wordfilter');
var moment = require('moment');
var wcmia_data = require('../wapuu/data.js');
var monk = require('monk');
var db = monk(process.env.MONGO_URI);

module.exports = function(controller) {

    /* Collect some very simple runtime stats for use in the uptime/debug command */
    var stats = {
        triggers: 0,
        convos: 0,
    }

    controller.on('heard_trigger', function() {
        stats.triggers++;
    });

    controller.on('conversationStarted', function() {
        stats.convos++;
    });

  controller.hears('zzzsc', 'direct_message', function(bot, message) {

    bot.reply(message, {
        attachments:[
            {
                title: 'Would you like a',
                callback_id: 'wcmia-sc',
                attachment_type: 'default',
                actions: [
                    {
                        "name":"gmap",
                        "text": "Google Map to FIU",
                        "value": "map",
                        "type": "button",
                        "url" : "https://www.google.com/maps/d/viewer?mid=1CbyOAm0y609EqfxwKoEm6J1WjZjzwoBr&ll=25.757860553775803%2C-80.37813575000001&z=16"
                    },
                    {
                        "name":"vmap",
                        "text": "Venue Map",
                        "value": "vmap",
                        "type": "button",
                        "url" : "https://2018.miami.wordcamp.org/files/2018/03/venue_map_sat-1-1024x663.jpg"
                    },
                    {
                        "name":"parking",
                        "text": "Parking Info",
                        "value": "parking",
                        "type": "button",
                        "url" : "https://2018.miami.wordcamp.org/guide-for-saturday-march-17th/"
                    }

                ]
            }
        ]
    });
});

controller.hears('interactive', 'direct_message', function(bot, message) {

    bot.reply(message, {
        attachments:[
            {
                title: 'Do you want to interact with my buttons?',
                callback_id: '123',
                attachment_type: 'default',
                actions: [
                    {
                        "name":"yes",
                        "text": "Yes",
                        "value": "yes",
                        "type": "button",
                    },
                    {
                        "name":"no",
                        "text": "No",
                        "value": "no",
                        "type": "button",
                    }
                ]
            }
        ]
    });
});
  
    controller.hears(['^tr '], 'direct_message', function(bot, message) {
        db.get('sessions').find({ 
                  "track" : 27
              }, {sort: {session_time: 1}, fields: { title: 1 }}
                               )
          .then((sessions) => {
           console.log(sessions);
          });
      // G8WJFAR44 channel
        bot.say({channel: 'G8WJFAR44', text: "Hi"});
    });
        
    controller.hears(['^uptime','^debug'], 'direct_message,direct_mention', function(bot, message) {

        bot.createConversation(message, function(err, convo) {
            if (!err) {
                convo.setVar('uptime', formatUptime(process.uptime()));
                convo.setVar('convos', stats.convos);
                convo.setVar('triggers', stats.triggers);

                convo.say('My main process has been online for {{vars.uptime}}. Since booting, I have heard {{vars.triggers}} triggers, and conducted {{vars.convos}} conversations.');
                convo.activate();
            }
        });

    });

    controller.hears(['^say (.*)','^say'], 'direct_message,direct_mention', function(bot, message) {
        if (message.match[1]) {

            if (!wordfilter.blacklisted(message.match[1])) {
                bot.reply(message, message.match[1]);
            } else {
                bot.reply(message, '_sigh_');
            }
        } else {
            bot.reply(message, 'I will repeat whatever you say.')
        }
    });


    /* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
    /* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
    /* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
    /* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
    /* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
    /* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
    /* Utility function to format uptime */
    function formatUptime(uptime) {
        var unit = 'second';
        if (uptime > 60) {
            uptime = uptime / 60;
            unit = 'minute';
        }
        if (uptime > 60) {
            uptime = uptime / 60;
            unit = 'hour';
        }
        if (uptime != 1) {
            unit = unit + 's';
        }

        uptime = parseInt(uptime) + ' ' + unit;
        return uptime;
    }

};
