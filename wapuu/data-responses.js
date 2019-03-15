/*
Formatted messages
*/

var moment = require('moment');

var links = {
  fridayBeginners: "https://2019.miami.wordcamp.org/guide-for-friday-march-15th-wordpress-beginners-workshop/",
  fridayFreelancers: "https://2019.miami.wordcamp.org/guide-for-friday-march-15th-freelancers-workshop/",
  fridayDevelopers: "https://2019.miami.wordcamp.org/guide-for-friday-march-15th-developers-workshop/",
  saturdayGuide: "https://2019.miami.wordcamp.org/saturday/",
  sundayGuide: "https://2019.miami.wordcamp.org/sunday/",
  saturdayParty: "https://2019.miami.wordcamp.org/saturday-party/",
  googleMap: "https://goo.gl/maps/erK3PX5p4jo",
  googleMapThursday: "https://goo.gl/maps/wcKrae7Ubg52",
  saturdayVenueMap: "https://2019.miami.wordcamp.org/files/2019/03/venue_map_sat-03-13-18.jpg",
  sundayVenueMap: "https://2019.miami.wordcamp.org/files/2019/03/venuemap_sunday.jpg",
  fridayVenueMap: "https://2019.miami.wordcamp.org/files/2019/03/venue_map_fri-updated-03-13-768x538.jpg",
  kidsVenueMap: "https://2019.miami.wordcamp.org/files/2019/03/venue_map_sun-kids-bothdays-2-1024x663.jpg",
  parking: "https://fiu.nupark.com/events/Events/Register/5de3bf3f-f416-43a8-8d4b-ae3e9a5dddd3",
  kidsGuide: "https://2019.miami.wordcamp.org/kids/",
  codeOfConduct: "https://2019.miami.wordcamp.org/code-of-conduct/",
  schedule: "https://2019.miami.wordcamp.org/schedule/",
  scheduleFriday: "https://2019.miami.wordcamp.org/schedule/#WP101",
  scheduleFridayDev: "https://2019.miami.wordcamp.org/schedule/#devworkshop",
  scheduleFridayFreelancers: "https://2019.miami.wordcamp.org/schedule/#freelanceworkshop",
  scheduleSaturday: "https://2019.miami.wordcamp.org/schedule/#sat",
  scheduleSundayBiz: "https://2019.miami.wordcamp.org/schedule/#sunbiz",
  scheduleSundayUsers: "https://2019.miami.wordcamp.org/schedule/#user",
  scheduleSundayJavascript: "https://2019.miami.wordcamp.org/schedule/#ljd",
  wifi: "https://network.fiu.edu/#visitors",
  food: "https://2019.miami.wordcamp.org/food/",
  livestream: "https://2019.miami.wordcamp.org/live/"
};

function slackLink (link, text) {
    return '<' + link + '|' + text + '>';
}

function isThursday() {
  return (moment().subtract(4, 'hours').day() === 4);
}
function isFriday() {
  return (moment().subtract(4, 'hours').day() === 5);
}
function isSaturday() {
  return (moment().subtract(4, 'hours').day() === 6);
}
function isSunday() {
  return (moment().subtract(4, 'hours').day() === 0);
}

module.exports = {

    links: links,
  
    kidsReply: function () {
        return {
          text: 
            "Read the " 
            + slackLink(links.kidsGuide,  'Kids Camp Guide') 
            + " for general info and schedule. "
            + "All Kids Camp activities including registration are in PG6 Tech Station Building shown on this "
            + slackLink(links.kidsVenueMap,  'Venue Map') + ".",
          unfurl_links: false,
          unfurl_media: false
        };
    },

    registrationReply: function () {
        var regText = "Registration on Friday is at each workshop. "
        var mapText = "See the " 
                + slackLink(links.fridayVenueMap, 'Friday Workshops Venue Map')
                + " and register at your workshop location. ";
      
        if (isSunday()) {
          // Sunday
          regText = "Starting at 8:00am, bring your Photo ID and register at the Help/Registration Desk - Green star on this ";
          mapText = slackLink(links.sundayVenueMap, 'Venue Map')
              + ".\n_Sunday registration only required for those who did not register on Saturday_.";
        } else if (isSaturday()) {
          // Saturday
          regText = "Starting at 8:00am, bring your Photo ID and register at the Help/Registration Desk - Green star on this ";
          mapText = slackLink(links.saturdayVenueMap, 'Venue Map');
        }

      return {
            text: regText + mapText,
            unfurl_links: false,
            unfurl_media: false
        };
    },

    helpDirections: {
        "attachments": [
            {
                "fallback": "WordCamp Miami Directions, Parking and Maps",
                "pretext": "Ya tu sabes\n\nWordCamp Miami Location Info",
                "title": "Google Map",
                "title_link": links.googleMap,
                "text": "Google Map to FIU with directions",
                "color": "#0000ff"
            },
            {
                "title": "Parking Registration",
                "title_link": links.parking,
                "text": "Register your vehicle here (once for the whole weekend)",
                "color": "#32CD32"
            },
            {
                "title": "Venue Map - Friday",
                "title_link": links.fridayVenueMap,
                "text": "Campus map with workshop locations",
                "color": "#3CB371"
            },
            {
                "title": "Venue Map - Saturday",
                "title_link": links.saturdayVenueMap,
                "text": "Campus map with Saturday registration and track locations",
                "color": "#808000"
            },
            {
                "title": "Venue Map - Sunday",
                "title_link": links.sundayVenueMap,
                "text": "Campus map with Sunday track locations",
                "color": "#ffa500"
            },
            {
                "title": "Venue Map - Kids Camp",
                "title_link": links.kidsVenueMap,
                "text": "Campus map with Kids Camp highlighted",
                "color": "#D2691E"
            },

        ]
    },

    helpSlash: function () {
        var reply = "Try using the /wapuu slash command to get help personal from me, Wapuu!" +
            "\nTry `/wapuu help` or `/wapuu links` or `/wapuu schedule` or `/wapuu directions`"
      
      return {
            text: reply,
            unfurl_links: false,
            unfurl_media: false
        };
    },


    ticketsReply: function () {
        var reply = "If you purchased a ticket, all you need to register is a Photo ID."
                + "\n\n*Tickets are SOLD OUT for all of WordCamp Miami 2019 and refunds are no longer being issued.*"
      
      return {
            text: reply,
            unfurl_links: false,
            unfurl_media: false
        };
    },

    slidesReply: function () {
        var reply = "Session slides will become available as we receive them from speakers and a *View Session Slides* link will appear on the page for that session " 
            + slackLink(links.schedule, 'on our schedule.') + 
            "\nAnother really good idea is to check the speaker's twitter feed. "
      
      return {
            text: reply,
            unfurl_links: false,
            unfurl_media: false
        };
    },

    wifiReply: function () {
        var reply = "FIU has provided us access to their " + slackLink(links.wifi, 'Visitor WiFi network.') + " Follow those instructions, accept the terms and your are good for the whole day."
              + '  D\u00e1le!';
      
      return {
            text: reply,
            unfurl_links: false,
            unfurl_media: false
        };
    },

    liveStreamReply: function () {
        var reply = "Here are the " + slackLink(links.livestream, 'LIVE stream links.')
              + '  D\u00e1le!';
      
      return {
            text: reply,
            unfurl_links: false,
            unfurl_media: false
        };
    },


    helpUsage: {
        "attachments": [
            {
                "fallback": "Hey WordCamp Miami, what's up. I'm Wapuu Bot and I'm here to help you...supposably...or at least entertain you.",
                "pretext": "Hey WordCamp Miami, what's up. I'm Wapuu Bot and I'm here to help you...supposably...or at least entertain you.",
                "title": "I'll be in the following channels",
                "text": "#general - responding to @wapuu mentions and ambient remarks\n" + 
              "<https://wcmiami.slack.com/messages/CGY59U78B|#holawapuu> - I am hyper-caffeinated in this channel",
                "color": "#7CD197"
            },
            {
                "title": "/wapuu help",
                "text": "this help page",
                "color": "#800000"
            },
            {
                "title": "/wapuu friday  /wapuu saturday   /wapuu sunday",
                "text": "Get help links relevant to a particular day",
                "color": "#32CD32"
            },
            {
                "title": "/wapuu food",
                "text": "Get info on meals for the weekend",
                "color": "#ffa500"
            },
            {
                "title": "/wapuu schedule",
                "text": "Links to Track Schedules",
                "color": "#ff00ff"
            },
          /*
            {
                "title": "/wapuu find [text]",
                "text": "Basic search of schedule sessions and speakers. Strict search of the exact text you type.",
                "color": "#800080"
            },
          */
            {
                "title": "/wapuu links",
                "text": "Get helpful links for the conference including maps, directions and guides",
                "color": "#808000"
            }

        ]
    },

    helpSchedule: {
        "attachments": [
            {
                "fallback": "WordCamp Miami Schedule Links",
                "pretext": "Ya tu sabes\n\nWordCamp Miami Schedule Links (click the title)",
                "title": "Full Schedule",
                "title_link": links.schedule,
                "text": "WordCamp Miami Full Schedule",
                "color": "#0000ff"
            },
            {
                "title": "Friday Beginners Workshop",
                "title_link": links.scheduleFriday,
                "text": "WordPress 101 Beginners Workshop (RB 120)",
                "color": "#32CD32"
            },
            {
                "title": "Friday Developers Workshop",
                "title_link": links.scheduleFridayDev,
                "text": "WordPress Freelancers Workshop (CBC 155)",
                "color": "#3CB371"
            },
            {
                "title": "Friday Freelancers Workshop",
                "title_link": links.scheduleFridayFreelancers,
                "text": "WordPress 101 Beginners Workshop (RB 120)",
                "color": "#808000"
            },
            {
                "title": "Saturday",
                "title_link": links.scheduleSaturday,
                "text": "WordPress & The Web (CBC 155)\nDesign & Community (CBC 233)\nDeveloper (ZEB 120)",
                "color": "#ffa500"
            },
            {
                "title": "Sunday - Business",
                "title_link": links.scheduleSundayBiz,
                "text": "Business Track (CBC 1155)",
                "color": "#ffa500"
            },
            {
                "title": "Sunday - WordPress Skills",
                "title_link": links.scheduleSundayUsers,
                "text": "Building WordPress Skills (RDB 1100)",
                "color": "#D2691E"
            },
            {
                "title": "Sunday - Javascript",
                "title_link": links.scheduleSundayJavascript,
                "text": "Learn Javascript Deeply (ZEB 120)",
                "color": "#ff00ff"
            },

        ]
    },
  
    helpFood: {
        "attachments": [
            {
                "fallback": "WordCamp Miami Food Info",
                "pretext": "Food. Pero que rrrrrico",
                "title": "WordCamp Miami Food Info",
                "text": "Food info and menu options",
                "title_link": links.food,
                "color": "#ff00ff"
            },
        ]
    },
    helpFriday: {
        "attachments": [
            {
                "fallback": "WordCamp Miami Friday Links",
                "pretext": "D\u00e1le!\n\nWordCamp Miami Friday Links",
                "title": "Friday Beginners Workshop Guide",
                "title_link": links.fridayBeginners,
                "color": "#A52A2A"
            },
            {
                "title": "Friday Developers Workshop Guide",
                "title_link": links.fridayDevelopers,
                "color": "#1E90FF"
            },
            {
                "title": "Friday Freelancers Workshop Guide",
                "title_link": links.fridayFreelancers,
                "color": "#9370DB"
            },
            {
                "title": "Google Map with Directions",
                "title_link": links.googleMap,
                "color": "#0000ff"
            },
            {
                "title": "Parking - Register Your Vehicle",
                "title_link": links.parking,
                "color": "#008B8B"
            },
            {
                "title": "Venue Map - Friday",
                "title_link": links.fridayVenueMap,
                "color": "#f08080"
            },
        ]
    },  
    helpSaturday: {
        "attachments": [
            {
                "fallback": "WordCamp Miami Saturday Links",
                "pretext": "D\u00e1le!\n\nWordCamp Miami Saturday Links",
                "title": "Saturday Guide",
                "title_link": links.saturdayGuide,
                "color": "#ffa500"
            },
            {
                "title": "Google Map with Directions",
                "title_link": links.googleMap,
                "color": "#0000ff"
            },
            {
                "title": "Parking - Register Your Vehicle",
                "title_link": links.parking,
                "color": "#008B8B"
            },
            {
                "title": "Venue Map - Saturday",
                "title_link": links.saturdayVenueMap,
                "color": "#f08080"
            },
            {
                "title": "Kids Camp Guide",
                "title_link": links.kidsGuide,
                "color": "#00ffff"
            },
            {
                "title": "Live Video Stream",
                "title_link": links.livestream,
                "color": "#9370DB"
            },
            {
                "title": "Saturday Party",
                "title_link": links.saturdayParty,
                "color": "#DB7093"
            },
        ]
    },  
    helpSunday: {
        "attachments": [
            {
                "fallback": "WordCamp Miami Sunday Links",
                "pretext": "D\u00e1le!\n\nWordCamp Miami Sunday Links",
                "title": "Sunday Guide",
                "title_link": links.sundayGuide,
                "color": "#daa520"
            },
            {
                "title": "Google Map with Directions",
                "title_link": links.googleMap,
                "color": "#0000ff"
            },
            {
                "title": "Parking - Register Your Vehicle",
                "title_link": links.parking,
                "color": "#008B8B"
            },
            {
                "title": "Venue Map - Sunday",
                "title_link": links.sundayVenueMap,
                "color": "#bc8f8f"
            },
            {
                "title": "Live Video Stream",
                "title_link": links.livestream,
                "color": "#9370DB"
            },
        ]
    },  
    helpLinks: {
        "attachments": [
            {
                "fallback": "WordCamp Miami Links",
                "pretext": "Ya tu sabes\n\nWordCamp Miami Links",
                "title": "Complete Schedule",
                "title_link": links.schedule,
                "color": "#7CD197"
            },
            {
                "title": "Friday Beginners Workshop Guide",
                "title_link": links.fridayBeginners,
                "color": "#A52A2A"
            },
            {
                "title": "Friday Developers Workshop Guide",
                "title_link": links.fridayDevelopers,
                "color": "#1E90FF"
            },
            {
                "title": "Friday Freelancers Workshop Guide",
                "title_link": links.fridayFreelancers,
                "color": "#9370DB"
            },
            {
                "title": "Saturday Guide",
                "title_link": links.saturdayGuide,
                "color": "#ffa500"
            },
            {
                "title": "Saturday Party",
                "title_link": links.saturdayParty,
                "color": "#DB7093"
            },
            {
                "title": "Sunday Guide",
                "title_link": links.sundayGuide,
                "color": "#daa520"
            },
            {
                "title": "Google Map with Directions",
                "title_link": links.googleMap,
                "color": "#0000ff"
            },
            {
                "title": "Parking - Register Your Vehicle",
                "title_link": links.parking,
                "color": "#008B8B"
            },
            {
                "title": "Venue Map - Saturday",
                "title_link": links.saturdayVenueMap,
                "color": "#f08080"
            },
            {
                "title": "Venue Map - Sunday",
                "title_link": links.sundayVenueMap,
                "color": "#bc8f8f"
            },
            {
                "title": "Kids Camp Guide",
                "title_link": links.kidsGuide,
                "color": "#00ffff"
            },
            {
                "title": "Live Video Stream",
                "title_link": links.livestream,
                "color": "#00ffcc"
            },
        ]
    }};