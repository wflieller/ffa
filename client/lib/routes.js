Router.configure({

    layoutTemplate: 'layout'

});


Router.map(function() {

    this.route('homepage', {
        path: '/'
    });

    this.route('bio');

    this.route('work');

    this.route('gallery');

    this.route('contact');




});
