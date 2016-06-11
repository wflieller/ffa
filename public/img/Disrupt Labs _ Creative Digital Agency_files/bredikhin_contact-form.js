//////////////////////////////////////////////////////////////////////////
//                                                                      //
// This is a generated file. You can view the original                  //
// source in your browser if your browser supports source maps.         //
// Source maps are supported by all recent versions of Chrome, Safari,  //
// and Firefox, and by Internet Explorer 11.                            //
//                                                                      //
//////////////////////////////////////////////////////////////////////////


(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var Template = Package.templating.Template;
var AutoForm = Package['aldeed:autoform'].AutoForm;
var Blaze = Package.blaze.Blaze;
var UI = Package.blaze.UI;
var Handlebars = Package.blaze.Handlebars;
var Spacebars = Package.spacebars.Spacebars;
var SimpleSchema = Package['aldeed:simple-schema'].SimpleSchema;
var MongoObject = Package['aldeed:simple-schema'].MongoObject;
var HTML = Package.htmljs.HTML;

/* Package-scope variables */
var Schema;

(function(){

////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                        //
// packages/bredikhin_contact-form/packages/bredikhin_contact-form.js                     //
//                                                                                        //
////////////////////////////////////////////////////////////////////////////////////////////
                                                                                          //
(function () {                                                                            // 1
                                                                                          // 2
//////////////////////////////////////////////////////////////////////////////////////    // 3
//                                                                                  //    // 4
// packages/bredikhin:contact-form/contact-form.js                                  //    // 5
//                                                                                  //    // 6
//////////////////////////////////////////////////////////////////////////////////////    // 7
                                                                                    //    // 8
Schema = Schema || {};                                                              // 1  // 9
Schema.contactForm = new SimpleSchema({                                             // 2  // 10
  name: {                                                                           // 3  // 11
    type: String,                                                                   // 4  // 12
    label: 'Your name',                                                             // 5  // 13
    max: 64                                                                         // 6  // 14
  },                                                                                // 7  // 15
  email: {                                                                          // 8  // 16
    type: String,                                                                   // 9  // 17
    regEx: SimpleSchema.RegEx.Email,                                                // 10
    label: "Your e-mail"                                                            // 11
  },                                                                                // 12
  subject: {                                                                        // 13
    type: String,                                                                   // 14
    label: "Subject",                                                               // 15
    max: 256                                                                        // 16
  },                                                                                // 17
  message: {                                                                        // 18
    type: String,                                                                   // 19
    label: "Message",                                                               // 20
    max: 1024                                                                       // 21
  }                                                                                 // 22
});                                                                                 // 23
                                                                                    // 24
//////////////////////////////////////////////////////////////////////////////////////    // 33
                                                                                          // 34
}).call(this);                                                                            // 35
                                                                                          // 36
                                                                                          // 37
                                                                                          // 38
                                                                                          // 39
                                                                                          // 40
                                                                                          // 41
(function () {                                                                            // 42
                                                                                          // 43
//////////////////////////////////////////////////////////////////////////////////////    // 44
//                                                                                  //    // 45
// packages/bredikhin:contact-form/client/views/template.contact-form.js            //    // 46
//                                                                                  //    // 47
//////////////////////////////////////////////////////////////////////////////////////    // 48
                                                                                    //    // 49
                                                                                    // 1  // 50
Template.__checkName("contactForm");                                                // 2  // 51
Template["contactForm"] = new Template("Template.contactForm", (function() {        // 3  // 52
  var view = this;                                                                  // 4  // 53
  return Blaze._TemplateWith(function() {                                           // 5  // 54
    return {                                                                        // 6  // 55
      schema: Spacebars.call(view.lookup("contactFormSchema")),                     // 7  // 56
      id: Spacebars.call("contactForm"),                                            // 8  // 57
      type: Spacebars.call("method"),                                               // 9  // 58
      meteormethod: Spacebars.call("sendEmail")                                     // 10
    };                                                                              // 11
  }, function() {                                                                   // 12
    return Spacebars.include(view.lookupTemplate("autoForm"), function() {          // 13
      return [ "\n    ", HTML.FIELDSET("\n      ", Blaze._TemplateWith(function() { // 14
        return {                                                                    // 15
          name: Spacebars.call("name")                                              // 16
        };                                                                          // 17
      }, function() {                                                               // 18
        return Spacebars.include(view.lookupTemplate("afQuickField"));              // 19
      }), "\n      ", Blaze._TemplateWith(function() {                              // 20
        return {                                                                    // 21
          name: Spacebars.call("email")                                             // 22
        };                                                                          // 23
      }, function() {                                                               // 24
        return Spacebars.include(view.lookupTemplate("afQuickField"));              // 25
      }), "\n      ", Blaze._TemplateWith(function() {                              // 26
        return {                                                                    // 27
          name: Spacebars.call("subject")                                           // 28
        };                                                                          // 29
      }, function() {                                                               // 30
        return Spacebars.include(view.lookupTemplate("afQuickField"));              // 31
      }), "\n      ", Blaze._TemplateWith(function() {                              // 32
        return {                                                                    // 33
          name: Spacebars.call("message"),                                          // 34
          rows: Spacebars.call(10)                                                  // 35
        };                                                                          // 36
      }, function() {                                                               // 37
        return Spacebars.include(view.lookupTemplate("afQuickField"));              // 38
      }), "\n      ", HTML.DIV("\n        ", HTML.BUTTON({                          // 39
        type: "submit",                                                             // 40
        "class": "btn btn-primary"                                                  // 41
      }, "Submit"), "\n        ", HTML.BUTTON({                                     // 42
        type: "reset",                                                              // 43
        "class": "btn btn-default"                                                  // 44
      }, "Reset"), "\n      "), "\n    "), "\n  " ];                                // 45
    });                                                                             // 46
  });                                                                               // 47
}));                                                                                // 48
                                                                                    // 49
//////////////////////////////////////////////////////////////////////////////////////    // 99
                                                                                          // 100
}).call(this);                                                                            // 101
                                                                                          // 102
                                                                                          // 103
                                                                                          // 104
                                                                                          // 105
                                                                                          // 106
                                                                                          // 107
(function () {                                                                            // 108
                                                                                          // 109
//////////////////////////////////////////////////////////////////////////////////////    // 110
//                                                                                  //    // 111
// packages/bredikhin:contact-form/client/views/contact-form.js                     //    // 112
//                                                                                  //    // 113
//////////////////////////////////////////////////////////////////////////////////////    // 114
                                                                                    //    // 115
Template.contactForm.helpers({                                                      // 1  // 116
  contactFormSchema: function() {                                                   // 2  // 117
    return Schema.contactForm;                                                      // 3  // 118
  }                                                                                 // 4  // 119
});                                                                                 // 5  // 120
                                                                                    // 6  // 121
//////////////////////////////////////////////////////////////////////////////////////    // 122
                                                                                          // 123
}).call(this);                                                                            // 124
                                                                                          // 125
////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['bredikhin:contact-form'] = {};

})();
