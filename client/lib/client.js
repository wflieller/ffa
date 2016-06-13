Meteor.startup(function() {
    if (Meteor.isClient) {
       return SEO.config({
            'title': 'Footage From Above',
            'meta': {
                'fragment': '!',
                'description': 'Footage From Above ',
                'copyright': 'All rights reserved, Footage From Above',
                'keywords': '',
                'viewport': 'width=device-width, initial-scale=1',
                'site_name': 'Footage From Above',
                'url': 'http://footagefromabove.com',
                'viewport': 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no',
                'X-UA-Compatible': 'IE=edge,chrome=1',
                'HandheldFriendly': 'true',
                'apple-mobile-web-app-capable': 'yes',
                'apple-mobile-web-app-status-bar-style': 'black',
                'referrer': 'never',
                'locale': 'en_us'

            },

            'og': {

                'title': 'Footage From Above',
                'description': 'Footage From Above.',
                'image': 'img/FFAlogo.png',
                'image:width': '555',
                'image:height': '720',
                'type': 'website',
                'locale': 'en_us',
                'site_name': 'Footage From Above',
                'url': 'http://footagefromabove.com'
            }
        });


    }
    
    

});
