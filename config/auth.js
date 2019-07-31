// config/auth.js Padilla


// expose our config directly to our application using module.exports
module.exports = {

    'facebookAuth' : {
        'clientID'        : 'xxxxxxxxxxxxxxxxxx', // your App ID
        'clientSecret'    : 'xxxxxxxxxxxxxxxxxx', // your App Secret
        'callbackURL'     : 'https://yourserver:8181/auth/facebook/callback'
    },

    'twitterAuth' : {
        'consumerKey'        : 'xxxxxxxxxxxxxxxxxx',
        'consumerSecret'     : 'xxxxxxxxxxxxxxxxxx',
        'callbackURL'        : 'https://uourserver:8181/auth/twitter/callback'
    },

    'linkedinAuth' : {
        'consumerKey'        : 'xxxxxxxxxxxxxxxxxx',
        'consumerSecret'     : 'xxxxxxxxxxxxxxxxxx',
        'callbackURL'        : 'https://yourserver:8181/auth/linkedin/callback'
    },

    'googleAuth' : {
        'clientID'         : '768439847293-8g2t0v9s3840v8crj0g8jbniam7l12v5.apps.googleusercontent.com',
        'clientSecret'     : 'm-Yo5DTS0ZUnnu8Pmbx0RugF',
        'callbackURL'      : 'http://apilink.cl/app/'
    }

};
