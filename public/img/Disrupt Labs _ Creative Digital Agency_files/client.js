(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// client/lib/client.js                                                //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
Meteor.startup(function () {                                           // 1
    if (Meteor.isClient) {                                             // 2
        return SEO.config({                                            // 3
            'title': 'Disrupt Labs | Creative Digital Agency',         // 4
            'meta': {                                                  // 5
                'fragment': '!',                                       // 6
                'description': 'Disrupt Labs is a data-driven creative digital design agency located in Austin, TX that builds custom engaging digital presences for individuals and companies alike. Our mission is to deliver disruptive digital products and marketing campaigns that increase and engage our clients customer base.',
                'copyright': 'All rights reserved, Disrupt Labs LLC.',
                'keywords': 'custom websites, custom apps, custom applications, seo targeting, customer reviews management, social media management, emerging technology, disrupt, disruptive tehchnology, disrupt labs, software development, email marketing, data analytics, digital marketing, digital, digital design, digital design agency, design agency, creative agency, custom designs, custom branding, custom, website, app, application, seo, online marketing, digital marketers, digital design, digital presence, analytics, data, custom analytics, online, online success, online presence, austin texas',
                'viewport': 'width=device-width, initial-scale=1',     // 10
                'site_name': 'Disrupt Labs',                           // 11
                'url': 'http://disruptlabs.io',                        // 12
                'viewport': 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no',
                'X-UA-Compatible': 'IE=edge,chrome=1',                 // 14
                'HandheldFriendly': 'true',                            // 15
                'apple-mobile-web-app-capable': 'yes',                 // 16
                'apple-mobile-web-app-status-bar-style': 'black',      // 17
                'referrer': 'never',                                   // 18
                'locale': 'en_us'                                      // 19
                                                                       //
            },                                                         //
                                                                       //
            'og': {                                                    // 23
                                                                       //
                'title': 'Disrupt Labs | Creative Digital Agency',     // 25
                'description': 'Disrupt Labs is a data-driven creative digital design agency located in Austin, TX that builds custom engaging digital presences for individuals and companies alike. Our mission is to deliver disruptive digital products and marketing campaigns that increase and engage our clients customer base.',
                'image': 'img/disruptlabsnamelogo.png',                // 27
                'image:width': '555',                                  // 28
                'image:height': '720',                                 // 29
                'type': 'website',                                     // 30
                'locale': 'en_us',                                     // 31
                'site_name': 'Disrupt Labs',                           // 32
                'url': 'http://disruptlabs.io'                         // 33
            }                                                          //
        });                                                            //
    }                                                                  //
});                                                                    //
/////////////////////////////////////////////////////////////////////////

}).call(this);
