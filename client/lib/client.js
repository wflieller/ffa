Meteor.startup(function() {
    if (Meteor.isClient) {
       return SEO.config({
            'title': 'Disrupt Labs | Creative Digital Agency',
            'meta': {
                'fragment': '!',
                'description': 'Disrupt Labs is a data-driven creative digital design agency located in Austin, TX that builds custom engaging digital presences for individuals and companies alike. Our mission is to deliver disruptive digital products and marketing campaigns that increase and engage our clients customer base.',
                'copyright': 'All rights reserved, Disrupt Labs LLC.',
                'keywords': 'custom websites, custom apps, custom applications, seo targeting, customer reviews management, social media management, emerging technology, disrupt, disruptive tehchnology, disrupt labs, software development, email marketing, data analytics, digital marketing, digital, digital design, digital design agency, design agency, creative agency, custom designs, custom branding, custom, website, app, application, seo, online marketing, digital marketers, digital design, digital presence, analytics, data, custom analytics, online, online success, online presence, austin texas',
                'viewport': 'width=device-width, initial-scale=1',
                'site_name': 'Disrupt Labs',
                'url': 'http://disruptlabs.io',
                'viewport': 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no',
                'X-UA-Compatible': 'IE=edge,chrome=1',
                'HandheldFriendly': 'true',
                'apple-mobile-web-app-capable': 'yes',
                'apple-mobile-web-app-status-bar-style': 'black',
                'referrer': 'never',
                'locale': 'en_us'

            },

            'og': {

                'title': 'Disrupt Labs | Creative Digital Agency',
                'description': 'Disrupt Labs is a data-driven creative digital design agency located in Austin, TX that builds custom engaging digital presences for individuals and companies alike. Our mission is to deliver disruptive digital products and marketing campaigns that increase and engage our clients customer base.',
                'image': 'img/disruptlabsnamelogo.png',
                'image:width': '555',
                'image:height': '720',
                'type': 'website',
                'locale': 'en_us',
                'site_name': 'Disrupt Labs',
                'url': 'http://disruptlabs.io'
            }
        });


    }
    
    

});
