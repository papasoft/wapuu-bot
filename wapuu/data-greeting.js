/*
Trigger words for (hopefully) fun random responses
*/

var defaultResponses = [
  'Wazzup!',
  'Bienvenidos a Miami',
  'Bruh!',
  'D\u00e1le!',
  'Yo',
  'What up homie?',
  'Word',
  'Oye mi gente!',
  'Sak pase',
  'Irie',
  'Wah gwaan?',
  'Wadup mon',
  'Everyting criss mon, Irie',
  'Ya tu sabes',
  'No es facil',
  'Fu\u00e1cata!',
  'Bonjou',
  'M ap viv',
  'Dasit'
];

var deliveryWords = [
  'D\u00e1le!',
  'Fu\u00e1cata!',
  'No es facil',
  'Aight',
  'Word',
  'Here you go, bro',
  'Everyting criss mon',
  'Irie'
];

var words = [
    {
        hear:   [
            'hi',
            'hello',
            'howdy',
            'what\s up',
            'hey'
        ],
        reply:  [
            'Wazzup!',
            'Bienvenidos a Miami',
            'Bruh',
            'Yo',
            'What up homie?',
            'Word'
        ] 
    },
    { 
        hear:   [
            'sak pase',
            'ou ye',
            'bonjou'
        ],
        reply:  [
            'M\'ap boul\u00e9',
            'M ap viv',
            'Mwen byen'
        ] 
    },
    { 
        hear:   [
            '^yo', 'wazzup', 'boi', 'aight', 'whatup'
        ],
        reply:  [
            'Yo',
            'What up homie?',
            'Word',
            'Lit',
            'Dasit'
        ] 
    },
    { 
        hear:   [
            'hola', 'que tal', 'que pasa', 'como le va', 'como va', 'como est'
        ],
        reply:  [
            'D\u00e1le!',
            'Oye mi gente!',
            'Aqui en la lucha',
            'Ya tu sabes',
            'Fu\u00e1cata!',
            'No es facil'
        ] 
    },
    { 
        hear:   [
            'irie', 'wadup', 'gwaan', 'no problem'
        ],
        reply:  [
            'Irie',
            'Wah gwaan?',
            'Wadup mon',
            'Everyting criss mon. Irie.',
            'Mi deh yah deh chill'
        ] 
    },
    { 
        hear:   [
            'thank', 'gracias', 'awesome', 'yay', 'merci', 'cute', 'adorable'
        ],
        reply:  [
            'Awwww',
            'No es facil',
            'No problem mon, Irie',
            'That was super amazing of you to say',
            'Ay que cute'
        ] 
    },

];

var ambientWords = [
    { 
        hear:   ['pitbull', 'worldwide'],
        reply:  [
            'https://i.imgflip.com/26fu41.jpg' // dale
        ] 
    },
    { 
        hear:   ['305', 'hialeah'],
        reply:  [
            'https://i.imgflip.com/26fvu5.jpg', // yeah no
            'https://i.imgflip.com/26fxsc.jpg', // hialeah
            'https://i.imgflip.com/26fw1k.jpg', //mission
            'https://i.imgflip.com/26fw6h.jpg', // guys
        ] 
    },
    { 
        hear:   ['swag'],
        reply:  [
            'https://i.imgflip.com/26fx1f.jpg', // literally
            'https://i.imgflip.com/26g45n.jpg', // leo
            'https://i.imgflip.com/26g4f5.jpg', // success kid
        ] 
    },
    { 
        hear:   ['word press'],
        reply:  [
            'https://i.imgflip.com/26g4n4.jpg', // one word
        ] 
    },
    { 
        hear:   ['plugin', 'wordpress', 'b2'],
        reply:  [
            'Sometimes I imagine what _It\'s a Wonderful Life_ would have been like with Matt Mullenweg as the main character. Would publishing on the web be a miserable experience. Would I even exist? These things keep me awake at night.',
            'What if WordPress is preventing the singularity from destroying us and a future artificial general intelligence decided to send a killer robot assissin back to 2003 to prevent Matt Mullenweg from forking b2 and creating WordPress? Hmmm.',
            'Do plugins LITERALLY "plug in"',
            'All my boys are like, "Bro, pero like is this bitcoin stuff legit?" and I\'m like "Nah, brah. Not until there\'s a WordPress plugin for it."',
            'Aight. I\'m taking bids to build my wapuu bot plugin. Who\'s in?',
            'Ever since WordPress auto-update came along I LITERALLY have like 20 hours of nothing to do all day.',
            'All my girls are like, "Ay, that Matt dude is super hot. Pero, que cute!"',
            'Supposably I heard that you can run WordPress ON A CLOUD bro!',
            'You guys have to check out ma.tt, bro, how did he get a .tt domain? Is li.tt available?',
            'It\'s 2018 and you are still not using HTTPS? Nah fam.',
            'Dwayne Wade is back in the 305. It\'s like WordCamp Miami 2012 all over again. I still have my Heat logo WCMIA shirt!',
        ] 
    },
];

var miamigifs = [
  'https://i.imgflip.com/26fu41.jpg', // dale
  'https://i.imgflip.com/26fxsc.jpg', // hialeah
  'https://i.imgflip.com/26fvu5.jpg', // yeah no
  'https://i.imgflip.com/26fw1k.jpg', //mission
  'https://i.imgflip.com/26fw6h.jpg', // guys
  'https://i.imgflip.com/26fx1f.jpg' // literally
];

module.exports = {

    defaultResponses: defaultResponses,
    deliveryWords: deliveryWords,
  
    words: words,
  
    ambientWords: ambientWords

};