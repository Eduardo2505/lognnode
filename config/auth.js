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
        'clientID'         : '329789439298-ep9so89fe0c9rkkhjaiddligb334bq01.apps.googleusercontent.com',
        'clientSecret'     : 'YIFxAqUIYqUy6BD3OnChFo50',
        'callbackURL'      : 'http://login.pvessy.com/successSignOn'
    }

};
