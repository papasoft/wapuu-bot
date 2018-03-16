/*
timestamps

Fri: 1521158400 - 1521237600
Sat: 1521270000 - 1521324000
Sun: 1521356400 - 1521410400
*/
var rp = require('request-promise');
var moment = require('moment');

var replies = [
  'Wazzup!',
  'Bienvenidos a Miami',
  'frfr bruh',
  'D\u00e1le!',
  'Yo',
  'What up homie?',
  'Word',
  'Oye mi gente!',
  'Got my chanx and ready to go',
  'Aqui en la lucha',
  'Siempre con el tiki tiki',
  'Sak pase',
  'Irie...No problem mon',
  'Wah gwaan?',
  'Wadup mon',
  'Everyting criss mon. Irie.',
  'Ya tu sabes',
  'Fu\u00e1cata!'
];

var questions = [
  'No comprendo...try again',
  'Not feeling it bro. What\'re you trying to say?',
  'Wut?',
  'Wait, wut?',
  'Mr. Worldwide is unavailable at the moment, maybe ask another way',
  'Bro you are being misunderstood'
];



var miamiwords = [
  {
    word: 'mission',
    usage: 'Anything that takes a really long time. "Ay, going to Hialeah is such a *mission*."'
  },
  {
    word: 'pero like',
    usage: 'The Spanish word "pero" is the conjunction "but". Combine it with a sprinkle of valley girl and you get, "That guy is such a loser, *pero like*, he is super hot bro."'
  },
  {
    word: 'bro',
    usage: 'Like the word "guys" this friendly address is gender inclusive, usually at the end of a sentence. "Bruh" also works. "You\'re eyebrows are on point today *bro*."'
  },
  {
    word: 'guys',
    usage: 'In Miami, this term is gender inclusive and socially acceptable. Deal with it. "*Guys*, that was literally the best movie ever."'
  },
  {
    word: 'supposably',
    usage: 'Miami\'s version of "supposedly", but with more attitude. "So *supposably*, you couldn\'t answer you phone or even have the respect to call me back. Bruh?"'
  },
  {
    word: 'irregardless',
    usage: 'Miami\'s version of "regardless". "Look, *irregardless* of what you think, Pitbull is not running for president. Wait? He is? For real? Bro."'
  },
  {
    word: 'yeah, no, for sure',
    usage: '"Yeah, no" = "no"\n"No, yeah" = "yes"\n"Yeah, no, for sure" = "most definitely"'
  },
  {
    word: 'chanx',
    usage: 'Short for "chancleta", the Cuban-Spanish word for "sandals" as in "grab your *chanx* we are going to the beach."'
  },
  {
    word: 'D\u00e1le!',
    usage: 'Pitbull uses this phrase a lot. It literally means "give it" in Spanish but is used to mean "hit it", "let\'s go", "do it" as in "Bro, stop talking about it and do something. *D\u00e1le!*"'
  },
  {
    word: 'literally',
    usage: 'People use this adverb all over the country but in Miami you need to double or triple the usage and hold on to the "L" for more emphasis as in "Those were *literally* the most disgusting chanx I have ever seen bro."'
  },
  {
    word: 'porfa',
    usage: 'Short for "por favor" the Spanish phrase for "please" as in "Guys, I need some help with my homework. *Porfa!*"'
  },
  {
    word: 'que cute, que nice',
    usage: 'Spanglish for "how cute" or "how nice" as in "Pero, *que cute!* I love your new haircut."'
  },
  {
    word: 'super',
    usage: 'An adverb, not an adjective. Use it twice to make something even better. "Bro, that churro was *super* delicious!"'
  }

];

module.exports = {

  getRandom: function(words) {
    return words[Math.floor(Math.random() * words.length)];
  },
         
  getStandardReply: function() {
    return replies[Math.floor(Math.random() * replies.length)];
  },
  
  getQuestionReply: function() {
    return questions[Math.floor(Math.random() * questions.length)];
  },
  
  getMiamiWordReply: function() {
    return miamiwords[Math.floor(Math.random() * miamiwords.length)];
  },

   
};