var moment = require('moment');


module.exports = {

  adminUsers: ['U7L5CAX32'],
  
  channelAnnounce:  'G8WJFAR44', // #general: C7FRX8DE2, #test: G8WJFAR44
  channelCoffee:    'C9AEQNYJH',
  
  sessionApiUrl: 'https://2018.miami.wordcamp.org/wp-json/wp/v2/sessions?_embed&per_page=100',

  getRandom: function(words) {
    return words[Math.floor(Math.random() * words.length)];
  }
    
};