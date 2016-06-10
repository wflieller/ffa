if (Meteor.isServer) {
    Meteor.startup(function() {
        // code to run on server at startup
        process.env.MAIL_URL = 'smtp://postmaster@sandbox0a9e7bbf98944944be695236fd0e8881.mailgun.org:ed4d5594981f7a34d32988e085f8fe05@smtp.mailgun.org:587'
        return



    });


    Meteor.settings.contactForm = {
        emailTo: 'walker@disruptlabs.io'
    };

}