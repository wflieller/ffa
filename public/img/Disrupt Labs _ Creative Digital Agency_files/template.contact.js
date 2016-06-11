(function(){
Template.__checkName("contact");
Template["contact"] = new Template("Template.contact", (function() {
  var view = this;
  return HTML.DIV({
    "class": "container-fluid content",
    id: "content"
  }, HTML.Raw('\n        <div class="row">\n            <div class="col-sm-12 text-center">\n                <h1 class="pageTitle">Contact Us</h1>\n            </div>\n        </div>\n        <div class="row contentP">\n        <div class="col-sm-6 col-sm-offset-3 text-center">\n        <h3>Direct Booking</h3>\n        <h5>Estefan Garcia</h5>\n        <p><i class="fa fa-phone"></i> &nbsp;<a href="tel:1-210-342-1230">(210) 416-6086</a></p>\n        <p><i class="fa fa-envelope-o"></i> &nbsp;<a href="mailto:admin@disruptlabs.io">email@ffa.com</a></p>\n \n        </div>\n        </div>\n        \n        '), HTML.DIV({
    "class": "row contentP"
  }, "\n            ", HTML.Raw('<div class="col-sm-6 col-sm-offset-3 text-center ">\n                <p>If you\'re looking to get a quote contact us below.</p>\n                <hr>\n            </div>'), "\n            ", HTML.DIV({
    "class": "col-sm-10 col-sm-offset-1 wow fadeIn",
    "data-wow-delay": ".3s"
  }, "\n                ", Spacebars.include(view.lookupTemplate("contactForm")), "\n            "), "\n            ", HTML.Raw('<div class="col-sm-10 col-sm-offset-1 thankYou text-center fadeIn homepage-intro" id="thankYou" style="display:none">\n                <i class="fa fa-check fa-large"></i>\n                <p>Thank you for contacting us, we\'ll be in touch shortly!</p>\n            </div>'), "\n        "), "\n    ");
}));

}).call(this);
