(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// lib/collections.js                                                  //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
SeoCollection = new Mongo.Collection('SeoCollection');                 // 1
Posts = new Mongo.Collection('posts');                                 // 2
Quotes = new Mongo.Collection('quotes');                               // 3
/////////////////////////////////////////////////////////////////////////

}).call(this);
