
module.exports = {

  adminUsers: ['U7L5CAX32'],
  
  channelAnnounce:  'CEV50NMEC', // #general: CEV50NMEC, #coffee: CGY59U78B
  channelCoffee:    'CGY59U78B',
  
  sessionApiUrl: 'https://2018.miami.wordcamp.org/wp-json/wp/v2/sessions?_embed&per_page=100',

  getRandom: function(words) {
    return words[Math.floor(Math.random() * words.length)];
  },

  getRandomEmoji: function(words) {
    return ':' + words[Math.floor(Math.random() * words.length)] + '::skin-tone-4:';
  }

};