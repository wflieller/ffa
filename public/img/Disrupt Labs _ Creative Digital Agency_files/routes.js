(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// client/lib/routes.js                                                //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
Router.configure({                                                     // 1
                                                                       //
    layoutTemplate: 'layout'                                           // 3
                                                                       //
});                                                                    //
                                                                       //
Router.map(function () {                                               // 8
                                                                       //
    this.route('homepage', {                                           // 10
        path: '/'                                                      // 11
    });                                                                //
                                                                       //
    this.route('bio');                                                 // 14
                                                                       //
    this.route('work');                                                // 16
                                                                       //
    this.route('gallery');                                             // 18
                                                                       //
    this.route('contact');                                             // 20
});                                                                    //
/////////////////////////////////////////////////////////////////////////

}).call(this);
