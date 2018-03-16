var rp = require('request-promise');
var moment = require('moment');
var config = require('../wapuu/data-config.js');

var sessionTrackMap = {
  "1233959": { name: "Business/Micro-MBA Track (CBC 155)" },
  "1225717": { name: "Design & Community Track (RDB 1100)" },
  "5041": { name: "Developer Track (CBC 232)" },
  "1226616": { name: "Developers Workshop (CBC 232)" },
  "1226046": { name: "E-Commerce & Users Track (CBC 232)" },
  "1226240": { name: "E-Commerce Workshop (CBC 155)" },
  "27": { name: "How To Track (CBC 155)" },
  "1225853": { name: "Learn JavaScript Deeply Track (RDB 1100)" },
  "1233947": { name: "WordPress 101 Beginner Course (RB 120)" }
};

var sessionCategoryMap = {
  "1059333": { name: "AMA", emoji: "&#128587;" },
  "1032503": { name: "Breakfast", emoji: "&#9749;" },
  "29716": { name: "Keynote", emoji: "&#128079;" },
  "266263": { name: "Lightning", emoji: "&#9889;" },
  "349": { name: "Lunch", emoji: "&#127828;" },
  "13228": { name: "Panel", emoji: "&#128101;" },
  "57": { name: "Registration", emoji: "&#9889;;" },
  "1233952": { name: "Remarks", emoji: "&#9889;"}
};

var venueMap = [
  {"fri": { speaker: "https://2018.miami.wordcamp.org/files/2018/03/map-1024x450.jpg" } },
  {"fri-101": { speaker: "https://2018.miami.wordcamp.org/files/2018/03/map2.jpg" } },
  {"sat": { speaker: "https://2018.miami.wordcamp.org/files/2018/03/venue_map_sat-2-1024x663.jpg" } },
  {"sun": { map: "https://2018.miami.wordcamp.org/files/2018/03/venue_map_sun-1-1024x663.jpg" } }
];

module.exports = {

  getSessions: function() {
    var options = {
      url: config.sessionApiUrl,
      headers: {
        'User-Agent': 'request'
      },
      json: true
    };

    return new Promise(function (fulfill, reject) {
      rp(options)
        .then(function (response) {
            var sessions = [];
            response.forEach(session=> {
              var speakers = [];
              if (session._embedded.speakers) {
                session._embedded.speakers.forEach(speaker => {
                  speakers.push(speaker.title.rendered);
                });
              }
              var tracks = [];
              if(session.session_track) {
                session.session_track.forEach(t => {
                  tracks.push({id: t, name: sessionTrackMap[t].name});
                });
              }
              var cats = [];
              if(session.session_category) {
                session.session_category.forEach(c => {
                  cats.push({id: c, name: sessionCategoryMap[c].name, emoji: sessionCategoryMap[c].emoji});
                });
              }
              var session_time = '';
              var session_type = '';
              if (session.meta._wcpt_session_time) {
                  session_time = session.meta._wcpt_session_time;
              }
              if (session.meta._wcpt_session_type) {
                  session_type = session.meta._wcpt_session_type;
              }
              var s = {
                id: session.id,
                title: session.title.rendered,
                track: tracks,
                category: cats,
                session_time: session_time,
                session_type: session_type,
                speakers: speakers
              };
              sessions.push(s);
            });
            fulfill(sessions);
        })
        .catch(function (err) {
            console.log(err);
            reject(err); 
        });
      });  
  }

  
};