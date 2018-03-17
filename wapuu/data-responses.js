/*
Formatted messages
*/

var moment = require('moment');

var links = {
  fridayBeginners: "https://2018.miami.wordcamp.org/friday-beginners/",
  fridayEcommerce: "https://2018.miami.wordcamp.org/friday-e-commerce/",
  fridayDevelopers: "https://2018.miami.wordcamp.org/friday-developers/",
  saturdayGuide: "https://2018.miami.wordcamp.org/saturday/",
  sundayGuide: "https://2018.miami.wordcamp.org/sunday/",
  saturdayParty: "https://2018.miami.wordcamp.org/saturday-party/",
  googleMap: "https://goo.gl/maps/erK3PX5p4jo",
  googleMapThursday: "https://goo.gl/maps/wcKrae7Ubg52",
  saturdayVenueMap: "https://2018.miami.wordcamp.org/files/2018/03/venue_map_sat-2-768x497.jpg",
  sundayVenueMap: "https://2018.miami.wordcamp.org/files/2018/03/venue_map_sun-1-768x497.jpg",
  fridayVenueMapBeginners: "https://2018.miami.wordcamp.org/files/2018/03/map2.jpg",
  fridayVenueMap: "https://2018.miami.wordcamp.org/files/2018/03/map-1024x450.jpg",
  parking: "http://go.fiu.edu/WCMIA-Parking",
  kidsGuide: "https://2018.miami.wordcamp.org/kids/",
  codeOfConduct: "https://2018.miami.wordcamp.org/code-of-conduct/",
  schedule: "https://2018.miami.wordcamp.org/schedule/",
  scheduleFriday: "https://2018.miami.wordcamp.org/schedule/#WP101",
  scheduleSaturday: "https://2018.miami.wordcamp.org/schedule/#sat",
  scheduleSundayBiz: "https://2018.miami.wordcamp.org/schedule/#sunbiz",
  scheduleSundayUsers: "https://2018.miami.wordcamp.org/schedule/#user",
  scheduleSundayJavascript: "https://2018.miami.wordcamp.org/schedule/#ljd",
  wifi: "https://2018.miami.wordcamp.org/wifi/"
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

var emergencyNotice = "*Due to Thursday’s bridge collapse, some entrances to FIU have been closed. "
      + "Please view our " + slackLink('https://2018.miami.wordcamp.org/fiu-update/', 'FIU Update page ') + " for the latest directions on how to enter the campus. We will keep that page updated with the latest info.*\n\n";

module.exports = {

    links: links,
  
    kidsReply: function () {
        var mapLink = links.saturdayVenueMap;
        if (isSunday()) {
          mapLink = links.sundayVenueMap;
        }  

        return {
          text: 
            "Read the " 
            + slackLink(links.kidsGuide,  'Kids Camp Guide') 
            + " for general info and schedule. "
            + "Registration for Kids Camp is in the RB 120 Building shown on this "
            + slackLink(mapLink,  'Venue Map') + ".",
          unfurl_links: false,
          unfurl_media: false
        };
    },

    registrationReply: function () {
        var regText = "Registration on Friday is at each workshop. "
        var mapText = "See the venue maps for " 
                + slackLink(links.fridayVenueMapBeginners, 'Beginners Workshop (RB 120)')
                + "or "
                + slackLink(links.fridayVenueMap, 'E-commerce (CBC 155) and Developers Workshop (CBC 232)')
                + "\nSat/Sun Registration is at the Help/Registration Desk. Green star on this "
                + slackLink(links.saturdayVenueMap, 'Venue Map');

        if (isSunday()) {
          // Sunday
          regText = "Registration is at the Help/Registration Desk. Bring you Photo ID. Green star on this ";
          mapText = slackLink(links.sundayVenueMap, 'Venue Map')
        } else if (isSaturday()) {
          // Saturday
          regText = "Registration is at the Help/Registration Desk. Bring you Photo ID. Green star on this ";
          mapText = slackLink(links.saturdayVenueMap, 'Venue Map')
              + ". _Sunday registration only required for those who did not register on Saturday_.";
        }

      return {
            text: regText + mapText,
            unfurl_links: false,
            unfurl_media: false
        };
    },

    directionsReply: function () {
            
      var reply = "Here is a "
        + slackLink(links.googleMap, 'Google map to FIU with directions')
        + ". Remember to "
        + slackLink(links.parking, 'register your vehicle here')
        + " before coming to campus. ";

      return {
            text: reply,
            unfurl_links: false,
            unfurl_media: false
        };
    },

    ticketsReply: function () {
        var reply = "If you purchased a ticket, all you need to register is a Photo ID."
                + "\n\n*Tickets are SOLD OUT for all of WordCamp Miami 2018 and refunds are no longer being issued.*"
      
      return {
            text: reply,
            unfurl_links: false,
            unfurl_media: false
        };
    },

    wifiReply: function () {
        var reply = "Here are " + slackLink(links.wifi, 'WiFi instructions.')
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
                "text": "#general - responding to @wapuu mentions and ambient remarks\n#coffee - serving up caffeine-related gifs",
                "color": "#7CD197"
            },
            {
                "title": "/wapuu help",
                "text": "this help page",
                "color": "#800000"
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
                "title": "Saturday",
                "title_link": links.scheduleSaturday,
                "text": "How To (CBC 155)\nDesign & Community (RDB 1100)/nDeveloper (CBC 232)",
                "color": "#800000"
            },
            {
                "title": "Sunday - Business",
                "title_link": links.scheduleSundayBiz,
                "text": "Business/Micro-MBA (CBC 155)",
                "color": "#ffa500"
            },
            {
                "title": "Sunday - E-commerce & Users",
                "title_link": links.scheduleSundayUsers,
                "text": "E-Commerce & Users (CBC 232)",
                "color": "#D2691E"
            },
            {
                "title": "Sunday - Javascript",
                "title_link": links.scheduleSundayJavascript,
                "text": "Learn Javascript Deeply (RDB 1100)",
                "color": "#ff00ff"
            },

        ]
    },
  
    helpFood: {
        "attachments": [
            {
                "fallback": "WordCamp Miami 2018 Food Schedule",
                "pretext": "Food. Pero que rrrrrico",
                "title": "Saturday",
                "text": "Morning - bagels, coffee, some fruit\n11:45am Lunch - BBQ chicken/ribs, salad, veg options\nAfternoon - CHURROS boi! + coffee\nAfter Party at Chili's",
                "color": "#ff00ff"
            },
            {
                "title": "Sunday",
                "text": "Morning - bagels, coffee, some fruit\n12:30pm Lunch - Pollo Tropical chicken/pork/veg, Nitro Ice cream after lunch\nAfternoon - coffee",
                "color": "#ffa500"
            },
        ]
    },
    helpLinks: {
        "attachments": [
            {
                "fallback": "WordCamp Miami 2018 Links",
                "pretext": "Ya tu sabes\n\nWordCamp Miami 2018 Links",
                "title": "Complete Schedule",
                "title_link": links.schedule,
                "color": "#7CD197"
            },
            {
                "title": "Saturday Guide",
                "title_link": links.saturdayGuide,
                "color": "#ffa500"
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
                "title": "Code of Conduct",
                "title_link": links.codeOfConduct,
                "color": "#DA70D6"
            },
        ]
    }};