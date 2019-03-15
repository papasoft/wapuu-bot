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
  'Dasit',
  'Yeet!'
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
            'hey',
            'greetings'
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
            'sak pase', 'sak passe', 'bon jou', 'ou ye', 'bonjou'
        ],
        reply:  [
            'M\'ap boul\u00e9',
            'M ap viv',
            'Mwen byen'
        ] 
    },
    { 
        hear:   [
            '^yo', 'wazzup', 'boi', 'aight', 'whatup', 'boy'
        ],
        reply:  [
            'Yo',
            'What up homie?',
            'Word',
            'Lit',
            'Dasit',
            'Yeet!'
        ] 
    },
    { 
        hear:   [
            'hola', 'que tal', 'que pasa', 'como le va', 'como va', 'como est', 'pasando'
        ],
        reply:  [
            'D\u00e1le!',
            'Oye mi gente!',
            'Aqui en la lucha',
            'Ya tu sabes',
            'Fu\u00e1cata!',
            'No es facil',
            'Az\u00facar!'
        ] 
    },
    { 
        hear:   [
            'irie', 'wadup', 'gwaan', 'no problem', 'gwon'
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
            'https://i.imgflip.com/26fu41.jpg', // dale
            'https://media.giphy.com/media/frXACoBiUyJDiEMxq7/giphy.gif',
        ] 
    },
    { 
        hear:   ['305', 'hialeah'],
        reply:  [
            'https://i.imgflip.com/26fvu5.jpg', // yeah no
            'https://i.imgflip.com/26fxsc.jpg', // hialeah
            'https://i.imgflip.com/26fw6h.jpg', // guys
            'https://i.imgflip.com/26fu41.jpg', // dale
            'https://media.giphy.com/media/frXACoBiUyJDiEMxq7/giphy.gif',
        ] 
    },
    { 
        hear:   ['swag'],
        reply:  [
            'https://i.imgflip.com/26fx1f.jpg', // literally
            'https://i.imgflip.com/26g45n.jpg', // leo
            'https://i.imgflip.com/26mtb8.jpg',
            'https://i.imgflip.com/26mtme.jpg',
            'https://media.giphy.com/media/6aucUmKuDjJjq/giphy.gif',
            'https://img.buzzfeed.com/buzzfeed-static/static/2015-05/6/13/enhanced/webdr12/anigif_enhanced-16249-1430933695-22.gif?downsize=800:*&output-format=auto&output-quality=auto',
            'https://img.buzzfeed.com/buzzfeed-static/static/2015-05/6/16/enhanced/webdr10/anigif_enhanced-9957-1430943090-3.gif?downsize=800:*&output-format=auto&output-quality=auto',
            'https://media.giphy.com/media/qMk38BQzfTKRq/giphy.gif'

        ] 
    },
    { 
        hear:   ['word press'],
        reply:  [
            'https://i.imgflip.com/26g4n4.jpg', // one word
        ] 
    },
    { 
        hear:   ['organizer', 'volunteer'],
        reply:  [
            'https://i.imgflip.com/26ms0u.jpg', 
        ] 
    },
    { 
        hear:   ['awesome'],
        reply:  [
            'https://i.imgflip.com/26mt7k.jpg',
            'https://i.imgflip.com/26mtfl.jpg'
        ] 
    },  
    { 
        hear:   ['react','javascript'],
        reply:  [
            'https://i.imgflip.com/2vyica.jpg', // yavascript
        ] 
    },
    { 
        hear:   ['theme', 'html', 'css'],
        reply:  [
            'https://i.imgflip.com/2vygu7.jpg',  // visual vs code
            'https://i.imgflip.com/2vyl87.jpg', // 960px
            'https://i.imgflip.com/2vyn2s.jpg', // tables
            'https://i.imgflip.com/26fw1k.jpg', //mission
        ] 
    },
    { 
        hear:   ['plugin', 'plug-in', 'b2', 'cms', 'wordpress'],
        reply:  [
            'https://i.imgflip.com/2vyhxy.jpg', // passwords
            'https://i.imgflip.com/2vykuf.jpg', // wordpress all universes
            'https://i.imgflip.com/2vyl87.jpg', // 960px
            'https://i.imgflip.com/2vyllw.jpg', // speed
            'https://i.imgflip.com/2vymmz.jpg', // clear cache
            'https://i.imgflip.com/2vynbl.jpg', // splain        
        ] 
    },
    { 
        hear:   ['gutenberg', 'editor'],
        reply:  [
            'https://i.imgflip.com/2vyhmx.jpg',  // zuckerberg vader
            'https://i.imgflip.com/2vyn5b.jpg', // chosen one
        ] 
    },
    { 
        hear:   ['beginner', 'newbie', 'noob'],
        reply:  [
            'https://i.imgflip.com/2vyhsf.jpg',  // plug it in
            'https://i.imgflip.com/2vyp7y.jpg',  // wait that easy?
            'https://i.imgflip.com/2vypo7.jpg',  // success beginners workshop
        ] 
    },
];

var miamigifs = [
  'https://i.imgflip.com/26fu41.jpg', // dale
  'https://i.imgflip.com/26fxsc.jpg', // hialeah
  'https://i.imgflip.com/26fvu5.jpg', // yeah no
  'https://i.imgflip.com/26fw1k.jpg', //mission
  'https://i.imgflip.com/26fw6h.jpg', // guys
  'https://i.imgflip.com/26fx1f.jpg', // literally
  'https://media.giphy.com/media/zOpXgAWgeaTcI/giphy.gif', // scarface
  'https://media.giphy.com/media/3oEjHQhBrpF92MyUrC/giphy.gif', //dwade
  
];

var emoji = [
  'heart',
  'sunglasses',
  'heart_eyes',
  'wink',
  'clap',
  'coffee',
  'tada',
  'star-struck',
  'spock-hand'
];

module.exports = {

    defaultResponses: defaultResponses,
    deliveryWords: deliveryWords,
  
    words: words,
    emoji: emoji,
    ambientWords: ambientWords

};