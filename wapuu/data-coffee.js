/*
Trigger words for coffee related responses
*/

var words = [
    {
        hear:   [
            'coffee', 'caffeine', 'cup of joe', 'caffe', 'shot', 'latte'
        ],
        reply:  [
            'The best part of waking up...',
            'Ooo, that smell...'
        ],
        gifs: [
            'https://media.giphy.com/media/7qV3yswT0K8hi/giphy-downsized.gif',
            'https://media.giphy.com/media/Z6vszQ8Mweukw/giphy-downsized.gif',
            'https://media.giphy.com/media/bIoHUGOzzdrzO/giphy-downsized.gif',
            'https://media.giphy.com/media/NHUONhmbo448/giphy-downsized.gif',
            'https://media.giphy.com/media/5Ztn33chuvutW/giphy-downsized.gif',
            'https://media.giphy.com/media/Q6joirtIBHUsw/giphy-downsized.gif',
            'https://media.giphy.com/media/SqP6xkizrTNO8/giphy-downsized.gif',
            'https://media.giphy.com/media/3ohze2v9DClNU2Cdl6/giphy-downsized.gif',
            'https://i.imgflip.com/26fsf3.jpg',
            'https://i.imgflip.com/26ftcz.jpg',
            'https://i.imgflip.com/26ftj4.jpg',
            'https://i.imgflip.com/26fscb.jpg',
            'https://media.giphy.com/media/twZgEl8JoDKFO/giphy-downsized.gif',
            'https://media.giphy.com/media/l46Cbqvg6gxGvh2PS/giphy-downsized.gif',
            'https://media.giphy.com/media/321wKleotdr4puJIvk/giphy-downsized.gif',
            'https://media.giphy.com/media/l0MYv5EjWCxRt7ONy/giphy-downsized.gif',
            'https://media.giphy.com/media/3nbxypT20Ulmo/giphy-downsized.gif',
            'https://media.giphy.com/media/687qS11pXwjCM/giphy-downsized.gif',
            'https://media.giphy.com/media/ES4Vcv8zWfIt2/giphy-downsized.gif',
            'https://media.giphy.com/media/3oFyDpRagf96Uz9rzO/giphy-downsized.gif',
            'https://media.giphy.com/media/3o7qEc1FhfvPMjlSCI/giphy-downsized.gif',
            'https://media.giphy.com/media/3D1v8iexqiPbq/giphy-downsized.gif',
            'https://media.giphy.com/media/3ohhwzCKbM4lLImCVG/giphy-downsized.gif',
            'https://media.giphy.com/media/l1IY8onMgFEotIzew/giphy-downsized.gif',
            'https://media.giphy.com/media/l1Avyqhb8oFhDngZy/giphy-downsized.gif',
            'https://media.giphy.com/media/3Z1b9CkbwtzZrg1HGe/giphy-downsized.gif',
            'https://media.giphy.com/media/Y0jN3XvfZCNWM/giphy-downsized.gif',
            'https://media.giphy.com/media/Vo6xlTxdhpAoU/giphy-downsized.gif',
            'https://media.giphy.com/media/UvicHZkh16kqA/giphy-downsized.gif',
            'https://media.giphy.com/media/AYSPpvHktnVWU/giphy-downsized.gif',
            'https://media.giphy.com/media/1xOOGQp8NHVeXaSuLi/giphy-downsized.gif',
            'https://media.giphy.com/media/dZ9KBEQiWywoD4Rh42/giphy-downsized.gif',
            'https://media.giphy.com/media/KpB7H0EPBWdDW/giphy-downsized.gif',
            'https://media.giphy.com/media/2vrAhwaooPnmquLsmX/giphy-downsized.gif',
            'https://media.giphy.com/media/uS9epqlhBNQOI/giphy-downsized.gif',
            'https://media.giphy.com/media/130a69lNGjRFyo/giphy-downsized.gif',
            'https://media.giphy.com/media/3o6fJcqW4S0kobkNOg/giphy-downsized.gif',
            'https://media.giphy.com/media/8Zef2waxYtviobBI3a/giphy-downsized.gif',
            'https://media.giphy.com/media/IePHSiJUF579e/giphy-downsized.gif',
            'https://media.giphy.com/media/SKjrGSWO9WTxC/giphy-downsized.gif',
            'https://media.giphy.com/media/l2JJLQSMaYe9eVEJ2/giphy.gif',
            'https://media.giphy.com/media/12yjKJaLB7DuG4/giphy-downsized.gif',
            'https://media.giphy.com/media/l0NwMZJpNQHxZwvgQ/giphy-downsized.gif',
            'https://media.giphy.com/media/Iab2WB3S6iQww/giphy-downsized.gif',
            'https://media.giphy.com/media/cvmugq5cuJ4nC/giphy-downsized.gif',
            'https://media.giphy.com/media/9rnJy5BnaN5wER7NRj/giphy-downsized.gif',
            'https://media.giphy.com/media/e4Jyxh9zQjgnC/giphy-downsized.gif',
            'https://media.giphy.com/media/yNr8LdsnuqdnfbgVXN/giphy-downsized.gif',
            'https://media.giphy.com/media/3ornk1yFi5KuWbMUUw/giphy-downsized.gif',
            'https://media.giphy.com/media/wKpR1zaMeFjyoVw7Kf/giphy-downsized.gif',
            'https://media.giphy.com/media/vgzA1vS0cP7rW4oFtJ/giphy-downsized.gif',
            'https://media.giphy.com/media/1mglDLnHR6GfuCzVzS/giphy-downsized.gif',
            'https://media.giphy.com/media/xT5LMT6SSx83oZz464/giphy.gif',
            'https://media.giphy.com/media/yxO7pd4zpTz2/giphy-downsized.gif',
            'https://media.giphy.com/media/l0MYI0yL4jz4k2ELe/giphy-downsized.gif',
        ]
    },
    {
        hear:   [
            'cafe', 
            'caf\u00E9',
            'colada',
            'cortadito',
            'bullet'
        ],
        reply:  [
            'D\u00e1le!',
            'Fu\u00e1cata!'
        ],
        gifs: [
            'https://media1.tenor.com/images/b7d64905edb055859f718601a1b96422/tenor.gif?itemid=11149571',
            'https://media.giphy.com/media/qriH9W51oLsL6/giphy.gif',
            'https://i.imgflip.com/26fsp1.jpg',
            'https://i.imgflip.com/26fssn.jpg',
            'https://i.imgflip.com/26ft1p.jpg',
            'https://img.buzzfeed.com/buzzfeed-static/static/2015-05/6/14/enhanced/webdr14/anigif_enhanced-27379-1430936740-10.gif?downsize=800:*&output-format=auto&output-quality=auto',
            'https://img.buzzfeed.com/buzzfeed-static/static/2015-05/7/14/enhanced/webdr12/anigif_enhanced-12353-1431022330-6.gif?crop=408:270;0,24&downsize=400:*&output-format=auto&output-quality=auto',
        ]
    }

];

module.exports = {

    words: words

};