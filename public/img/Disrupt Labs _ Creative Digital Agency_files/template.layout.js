(function(){
Template.__checkName("layout");
Template["layout"] = new Template("Template.layout", (function() {
  var view = this;
  return [ HTML.Raw('<head>\n        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">\n        <meta http-equiv="Content-Type" content="text/html; charset=utf-8">\n        <meta name="viewport" content="width=device-width, initial-scale=1">\n        <link href="img/disruptFav.png" rel="icon" type="image/x-icon">\n        <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet" type="text/css">\n        <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,300" rel="stylesheet" type="text/css">\n        <link href="touchTouch/touchTouch.css" rel="stylesheet" type="text/css">\n    </head>\n    <a name="top" id="top"></a>\n    '), HTML.DIV({
    "class": "homepageBg"
  }, "\n    ", HTML.Raw('<nav class="navbar homepage-intro fadeIn" role="navigation">\n        <div class="container-fluid">\n            <!-- Brand and toggle get grouped for better mobile display -->\n            <div class="navbar-header">\n                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">\n                    <span class="sr-only">Toggle navigation</span>\n                    <span class="icon-bar"></span>\n                    <span class="icon-bar"></span>\n                    <span class="icon-bar"></span>\n                </button>\n                <a class="navbar-brand text-center hvr-grow" href="/"><img src="img/FFAlogo.png"></a>\n                <a class="navbar-brand text-center hvr-grow" href="http://facebook.com/footagefromabove" target="_blank">&nbsp;<i class="fa fa-facebook-official"></i></a>\n                <a class="navbar-brand text-center hvr-grow" href="http://twitter.com/footagefromabove" target="_blank"><i class="fa fa-twitter"></i></a>\n                <a class="navbar-brand text-center hvr-grow" href="http://instagram.com/footagefromabove" target="_blank"><i class="fa fa-instagram"></i></a>\n                \n            </div>\n            <!-- Collect the nav links, forms, and other content for toggling -->\n            <div class="collapse navbar-collapse text-center" id="bs-example-navbar-collapse-1">\n                <ul class="nav navbar-nav navbar-center text-center">\n                    <li class="active"><a class="hvr-overline-from-center" href="/#top">Home<span class="sr-only">(current)</span></a></li>\n                    <li><a class="hvr-overline-from-center" href="/bio#content">About Us</a></li>\n                    \n                    <li><a class="hvr-overline-from-center" href="/work#content">Work</a></li>\n                    <li><a class="hvr-overline-from-center" href="/gallery#content">Gallery</a></li>\n                    <li><a class="hvr-overline-from-center" href="/contact#content">Contact Us</a></li>\n                    <!-- <li><form method="get" action="/pdf/bigslicepizzamenu.pdf"><button type="sibmit" class="btn downloadMenu hvr-float-shadow">Download Our Menu</button></form></li> -->\n                </ul>\n            </div>\n            <!-- /.navbar-collapse -->\n        </div>\n        <!-- /.container-fluid -->\n    </nav>'), "\n    \n    ", HTML.Raw('<div id="startchange"></div>'), "\n    ", HTML.Raw('<a id="content"></a>'), "\n    ", HTML.Raw('<a name="content"></a>'), "\n    ", HTML.Raw('<div id="content"></div>'), "\n\n    \n    \n\n\n    ", Spacebars.include(view.lookupTemplate("yield")), " ", Spacebars.include(view.lookupTemplate("socialSidebar")), "\n    ", Spacebars.include(view.lookupTemplate("footer")), "\n    \n    \n    ", HTML.Raw('<div class="backToTop hvr-bob">\n        <a href="#top" class="fa fa-chevron-up fa-lg "></a>\n    </div>'), "\n\n"), "\n\n    ", HTML.SCRIPT('\n    $(document).ready(function() {\n        var scroll_start = 0;\n        var startchange = $(\'#startchange\');\n        var offset = startchange.offset();\n        if (startchange.length) {\n            $(document).scroll(function() {\n                scroll_start = $(this).scrollTop();\n                if (scroll_start > offset.top) {\n\n                    $(".backToTop a").css({\n                        \'color\': \'#333\',\n                        \'background\': \'rgba(355,355,355,.6)\'\n\n                    });\n                } else {\n                    $(".backToTop a").css({\n                        \'color\': \'rgba(0,0,0,0)\',\n                        \'background\': \'transparent\'\n\n                    });\n\n\n                }\n            });\n        }\n\n        $("#contactForm").submit(function(e) {\n            $("#contactForm").css("display", "none");\n            $("#thankYou").css("display", "");\n        });\n    });\n\n    $(function() {\n        $(window).scroll(function() {\n            var scroll = $(window).scrollTop();\n            if (scroll >= 300) {\n                $(".navbar-header").addClass(\'smaller\');\n                $(".navbar-nav").addClass(\'smaller\');\n                $(".navbar").addClass(\'smaller\');\n                $(".navbar").css(\'position\', \'fixed\');\n\n            } else {\n                $(".navbar-header").removeClass("smaller");\n                $(".navbar-nav").removeClass("smaller");\n                $(".navbar").removeClass(\'smaller\');\n                $(".navbar").css(\'position\', \'absolute\');\n\n            }\n        });\n    });\n\n   \n\n    $(\'.carousel\').carousel();\n\n\n\n    new WOW().init();\n\n\n    '), "\n    ", HTML.SCRIPT({
    type: "text/javascript"
  }, "\n    var $root = $('html, body');\n    $('a').click(function() {\n        var href = $.attr(this, 'href');\n        $root.animate({\n            scrollTop: $(href).offset().top\n        }, 500, function() {\n            window.location.hash = href;\n        });\n        return false;\n    });\n    ") ];
}));

}).call(this);