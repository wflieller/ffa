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

(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                            //
// packages/jacklam_meteor-wowjs/WOW/dist/wow.js                                                              //
//                                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                              //
(function() {                                                                                                 // 1
  var MutationObserver, Util, WeakMap, getComputedStyle, getComputedStyleRX,                                  // 2
    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },                         // 3
    indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };
                                                                                                              // 5
  Util = (function() {                                                                                        // 6
    function Util() {}                                                                                        // 7
                                                                                                              // 8
    Util.prototype.extend = function(custom, defaults) {                                                      // 9
      var key, value;                                                                                         // 10
      for (key in defaults) {                                                                                 // 11
        value = defaults[key];                                                                                // 12
        if (custom[key] == null) {                                                                            // 13
          custom[key] = value;                                                                                // 14
        }                                                                                                     // 15
      }                                                                                                       // 16
      return custom;                                                                                          // 17
    };                                                                                                        // 18
                                                                                                              // 19
    Util.prototype.isMobile = function(agent) {                                                               // 20
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(agent);                    // 21
    };                                                                                                        // 22
                                                                                                              // 23
    Util.prototype.createEvent = function(event, bubble, cancel, detail) {                                    // 24
      var customEvent;                                                                                        // 25
      if (bubble == null) {                                                                                   // 26
        bubble = false;                                                                                       // 27
      }                                                                                                       // 28
      if (cancel == null) {                                                                                   // 29
        cancel = false;                                                                                       // 30
      }                                                                                                       // 31
      if (detail == null) {                                                                                   // 32
        detail = null;                                                                                        // 33
      }                                                                                                       // 34
      if (document.createEvent != null) {                                                                     // 35
        customEvent = document.createEvent('CustomEvent');                                                    // 36
        customEvent.initCustomEvent(event, bubble, cancel, detail);                                           // 37
      } else if (document.createEventObject != null) {                                                        // 38
        customEvent = document.createEventObject();                                                           // 39
        customEvent.eventType = event;                                                                        // 40
      } else {                                                                                                // 41
        customEvent.eventName = event;                                                                        // 42
      }                                                                                                       // 43
      return customEvent;                                                                                     // 44
    };                                                                                                        // 45
                                                                                                              // 46
    Util.prototype.emitEvent = function(elem, event) {                                                        // 47
      if (elem.dispatchEvent != null) {                                                                       // 48
        return elem.dispatchEvent(event);                                                                     // 49
      } else if (event in (elem != null)) {                                                                   // 50
        return elem[event]();                                                                                 // 51
      } else if (("on" + event) in (elem != null)) {                                                          // 52
        return elem["on" + event]();                                                                          // 53
      }                                                                                                       // 54
    };                                                                                                        // 55
                                                                                                              // 56
    Util.prototype.addEvent = function(elem, event, fn) {                                                     // 57
      if (elem.addEventListener != null) {                                                                    // 58
        return elem.addEventListener(event, fn, false);                                                       // 59
      } else if (elem.attachEvent != null) {                                                                  // 60
        return elem.attachEvent("on" + event, fn);                                                            // 61
      } else {                                                                                                // 62
        return elem[event] = fn;                                                                              // 63
      }                                                                                                       // 64
    };                                                                                                        // 65
                                                                                                              // 66
    Util.prototype.removeEvent = function(elem, event, fn) {                                                  // 67
      if (elem.removeEventListener != null) {                                                                 // 68
        return elem.removeEventListener(event, fn, false);                                                    // 69
      } else if (elem.detachEvent != null) {                                                                  // 70
        return elem.detachEvent("on" + event, fn);                                                            // 71
      } else {                                                                                                // 72
        return delete elem[event];                                                                            // 73
      }                                                                                                       // 74
    };                                                                                                        // 75
                                                                                                              // 76
    Util.prototype.innerHeight = function() {                                                                 // 77
      if ('innerHeight' in window) {                                                                          // 78
        return window.innerHeight;                                                                            // 79
      } else {                                                                                                // 80
        return document.documentElement.clientHeight;                                                         // 81
      }                                                                                                       // 82
    };                                                                                                        // 83
                                                                                                              // 84
    return Util;                                                                                              // 85
                                                                                                              // 86
  })();                                                                                                       // 87
                                                                                                              // 88
  WeakMap = this.WeakMap || this.MozWeakMap || (WeakMap = (function() {                                       // 89
    function WeakMap() {                                                                                      // 90
      this.keys = [];                                                                                         // 91
      this.values = [];                                                                                       // 92
    }                                                                                                         // 93
                                                                                                              // 94
    WeakMap.prototype.get = function(key) {                                                                   // 95
      var i, item, j, len, ref;                                                                               // 96
      ref = this.keys;                                                                                        // 97
      for (i = j = 0, len = ref.length; j < len; i = ++j) {                                                   // 98
        item = ref[i];                                                                                        // 99
        if (item === key) {                                                                                   // 100
          return this.values[i];                                                                              // 101
        }                                                                                                     // 102
      }                                                                                                       // 103
    };                                                                                                        // 104
                                                                                                              // 105
    WeakMap.prototype.set = function(key, value) {                                                            // 106
      var i, item, j, len, ref;                                                                               // 107
      ref = this.keys;                                                                                        // 108
      for (i = j = 0, len = ref.length; j < len; i = ++j) {                                                   // 109
        item = ref[i];                                                                                        // 110
        if (item === key) {                                                                                   // 111
          this.values[i] = value;                                                                             // 112
          return;                                                                                             // 113
        }                                                                                                     // 114
      }                                                                                                       // 115
      this.keys.push(key);                                                                                    // 116
      return this.values.push(value);                                                                         // 117
    };                                                                                                        // 118
                                                                                                              // 119
    return WeakMap;                                                                                           // 120
                                                                                                              // 121
  })());                                                                                                      // 122
                                                                                                              // 123
  MutationObserver = this.MutationObserver || this.WebkitMutationObserver || this.MozMutationObserver || (MutationObserver = (function() {
    function MutationObserver() {                                                                             // 125
      if (typeof console !== "undefined" && console !== null) {                                               // 126
        console.warn('MutationObserver is not supported by your browser.');                                   // 127
      }                                                                                                       // 128
      if (typeof console !== "undefined" && console !== null) {                                               // 129
        console.warn('WOW.js cannot detect dom mutations, please call .sync() after loading new content.');   // 130
      }                                                                                                       // 131
    }                                                                                                         // 132
                                                                                                              // 133
    MutationObserver.notSupported = true;                                                                     // 134
                                                                                                              // 135
    MutationObserver.prototype.observe = function() {};                                                       // 136
                                                                                                              // 137
    return MutationObserver;                                                                                  // 138
                                                                                                              // 139
  })());                                                                                                      // 140
                                                                                                              // 141
  getComputedStyle = this.getComputedStyle || function(el, pseudo) {                                          // 142
    this.getPropertyValue = function(prop) {                                                                  // 143
      var ref;                                                                                                // 144
      if (prop === 'float') {                                                                                 // 145
        prop = 'styleFloat';                                                                                  // 146
      }                                                                                                       // 147
      if (getComputedStyleRX.test(prop)) {                                                                    // 148
        prop.replace(getComputedStyleRX, function(_, _char) {                                                 // 149
          return _char.toUpperCase();                                                                         // 150
        });                                                                                                   // 151
      }                                                                                                       // 152
      return ((ref = el.currentStyle) != null ? ref[prop] : void 0) || null;                                  // 153
    };                                                                                                        // 154
    return this;                                                                                              // 155
  };                                                                                                          // 156
                                                                                                              // 157
  getComputedStyleRX = /(\-([a-z]){1})/g;                                                                     // 158
                                                                                                              // 159
  this.WOW = (function() {                                                                                    // 160
    WOW.prototype.defaults = {                                                                                // 161
      boxClass: 'wow',                                                                                        // 162
      animateClass: 'animated',                                                                               // 163
      offset: 0,                                                                                              // 164
      mobile: true,                                                                                           // 165
      live: true,                                                                                             // 166
      callback: null,                                                                                         // 167
      scrollContainer: null                                                                                   // 168
    };                                                                                                        // 169
                                                                                                              // 170
    function WOW(options) {                                                                                   // 171
      if (options == null) {                                                                                  // 172
        options = {};                                                                                         // 173
      }                                                                                                       // 174
      this.scrollCallback = bind(this.scrollCallback, this);                                                  // 175
      this.scrollHandler = bind(this.scrollHandler, this);                                                    // 176
      this.resetAnimation = bind(this.resetAnimation, this);                                                  // 177
      this.start = bind(this.start, this);                                                                    // 178
      this.scrolled = true;                                                                                   // 179
      this.config = this.util().extend(options, this.defaults);                                               // 180
      if (options.scrollContainer != null) {                                                                  // 181
        this.config.scrollContainer = document.querySelector(options.scrollContainer);                        // 182
      }                                                                                                       // 183
      this.animationNameCache = new WeakMap();                                                                // 184
      this.wowEvent = this.util().createEvent(this.config.boxClass);                                          // 185
    }                                                                                                         // 186
                                                                                                              // 187
    WOW.prototype.init = function() {                                                                         // 188
      var ref;                                                                                                // 189
      this.element = window.document.documentElement;                                                         // 190
      if ((ref = document.readyState) === "interactive" || ref === "complete") {                              // 191
        this.start();                                                                                         // 192
      } else {                                                                                                // 193
        this.util().addEvent(document, 'DOMContentLoaded', this.start);                                       // 194
      }                                                                                                       // 195
      return this.finished = [];                                                                              // 196
    };                                                                                                        // 197
                                                                                                              // 198
    WOW.prototype.start = function() {                                                                        // 199
      var box, j, len, ref;                                                                                   // 200
      this.stopped = false;                                                                                   // 201
      this.boxes = (function() {                                                                              // 202
        var j, len, ref, results;                                                                             // 203
        ref = this.element.querySelectorAll("." + this.config.boxClass);                                      // 204
        results = [];                                                                                         // 205
        for (j = 0, len = ref.length; j < len; j++) {                                                         // 206
          box = ref[j];                                                                                       // 207
          results.push(box);                                                                                  // 208
        }                                                                                                     // 209
        return results;                                                                                       // 210
      }).call(this);                                                                                          // 211
      this.all = (function() {                                                                                // 212
        var j, len, ref, results;                                                                             // 213
        ref = this.boxes;                                                                                     // 214
        results = [];                                                                                         // 215
        for (j = 0, len = ref.length; j < len; j++) {                                                         // 216
          box = ref[j];                                                                                       // 217
          results.push(box);                                                                                  // 218
        }                                                                                                     // 219
        return results;                                                                                       // 220
      }).call(this);                                                                                          // 221
      if (this.boxes.length) {                                                                                // 222
        if (this.disabled()) {                                                                                // 223
          this.resetStyle();                                                                                  // 224
        } else {                                                                                              // 225
          ref = this.boxes;                                                                                   // 226
          for (j = 0, len = ref.length; j < len; j++) {                                                       // 227
            box = ref[j];                                                                                     // 228
            this.applyStyle(box, true);                                                                       // 229
          }                                                                                                   // 230
        }                                                                                                     // 231
      }                                                                                                       // 232
      if (!this.disabled()) {                                                                                 // 233
        this.util().addEvent(this.config.scrollContainer || window, 'scroll', this.scrollHandler);            // 234
        this.util().addEvent(window, 'resize', this.scrollHandler);                                           // 235
        this.interval = setInterval(this.scrollCallback, 50);                                                 // 236
      }                                                                                                       // 237
      if (this.config.live) {                                                                                 // 238
        return new MutationObserver((function(_this) {                                                        // 239
          return function(records) {                                                                          // 240
            var k, len1, node, record, results;                                                               // 241
            results = [];                                                                                     // 242
            for (k = 0, len1 = records.length; k < len1; k++) {                                               // 243
              record = records[k];                                                                            // 244
              results.push((function() {                                                                      // 245
                var l, len2, ref1, results1;                                                                  // 246
                ref1 = record.addedNodes || [];                                                               // 247
                results1 = [];                                                                                // 248
                for (l = 0, len2 = ref1.length; l < len2; l++) {                                              // 249
                  node = ref1[l];                                                                             // 250
                  results1.push(this.doSync(node));                                                           // 251
                }                                                                                             // 252
                return results1;                                                                              // 253
              }).call(_this));                                                                                // 254
            }                                                                                                 // 255
            return results;                                                                                   // 256
          };                                                                                                  // 257
        })(this)).observe(document.body, {                                                                    // 258
          childList: true,                                                                                    // 259
          subtree: true                                                                                       // 260
        });                                                                                                   // 261
      }                                                                                                       // 262
    };                                                                                                        // 263
                                                                                                              // 264
    WOW.prototype.stop = function() {                                                                         // 265
      this.stopped = true;                                                                                    // 266
      this.util().removeEvent(this.config.scrollContainer || window, 'scroll', this.scrollHandler);           // 267
      this.util().removeEvent(window, 'resize', this.scrollHandler);                                          // 268
      if (this.interval != null) {                                                                            // 269
        return clearInterval(this.interval);                                                                  // 270
      }                                                                                                       // 271
    };                                                                                                        // 272
                                                                                                              // 273
    WOW.prototype.sync = function(element) {                                                                  // 274
      if (MutationObserver.notSupported) {                                                                    // 275
        return this.doSync(this.element);                                                                     // 276
      }                                                                                                       // 277
    };                                                                                                        // 278
                                                                                                              // 279
    WOW.prototype.doSync = function(element) {                                                                // 280
      var box, j, len, ref, results;                                                                          // 281
      if (element == null) {                                                                                  // 282
        element = this.element;                                                                               // 283
      }                                                                                                       // 284
      if (element.nodeType !== 1) {                                                                           // 285
        return;                                                                                               // 286
      }                                                                                                       // 287
      element = element.parentNode || element;                                                                // 288
      ref = element.querySelectorAll("." + this.config.boxClass);                                             // 289
      results = [];                                                                                           // 290
      for (j = 0, len = ref.length; j < len; j++) {                                                           // 291
        box = ref[j];                                                                                         // 292
        if (indexOf.call(this.all, box) < 0) {                                                                // 293
          this.boxes.push(box);                                                                               // 294
          this.all.push(box);                                                                                 // 295
          if (this.stopped || this.disabled()) {                                                              // 296
            this.resetStyle();                                                                                // 297
          } else {                                                                                            // 298
            this.applyStyle(box, true);                                                                       // 299
          }                                                                                                   // 300
          results.push(this.scrolled = true);                                                                 // 301
        } else {                                                                                              // 302
          results.push(void 0);                                                                               // 303
        }                                                                                                     // 304
      }                                                                                                       // 305
      return results;                                                                                         // 306
    };                                                                                                        // 307
                                                                                                              // 308
    WOW.prototype.show = function(box) {                                                                      // 309
      this.applyStyle(box);                                                                                   // 310
      box.className = box.className + " " + this.config.animateClass;                                         // 311
      if (this.config.callback != null) {                                                                     // 312
        this.config.callback(box);                                                                            // 313
      }                                                                                                       // 314
      this.util().emitEvent(box, this.wowEvent);                                                              // 315
      this.util().addEvent(box, 'animationend', this.resetAnimation);                                         // 316
      this.util().addEvent(box, 'oanimationend', this.resetAnimation);                                        // 317
      this.util().addEvent(box, 'webkitAnimationEnd', this.resetAnimation);                                   // 318
      this.util().addEvent(box, 'MSAnimationEnd', this.resetAnimation);                                       // 319
      return box;                                                                                             // 320
    };                                                                                                        // 321
                                                                                                              // 322
    WOW.prototype.applyStyle = function(box, hidden) {                                                        // 323
      var delay, duration, iteration;                                                                         // 324
      duration = box.getAttribute('data-wow-duration');                                                       // 325
      delay = box.getAttribute('data-wow-delay');                                                             // 326
      iteration = box.getAttribute('data-wow-iteration');                                                     // 327
      return this.animate((function(_this) {                                                                  // 328
        return function() {                                                                                   // 329
          return _this.customStyle(box, hidden, duration, delay, iteration);                                  // 330
        };                                                                                                    // 331
      })(this));                                                                                              // 332
    };                                                                                                        // 333
                                                                                                              // 334
    WOW.prototype.animate = (function() {                                                                     // 335
      if ('requestAnimationFrame' in window) {                                                                // 336
        return function(callback) {                                                                           // 337
          return window.requestAnimationFrame(callback);                                                      // 338
        };                                                                                                    // 339
      } else {                                                                                                // 340
        return function(callback) {                                                                           // 341
          return callback();                                                                                  // 342
        };                                                                                                    // 343
      }                                                                                                       // 344
    })();                                                                                                     // 345
                                                                                                              // 346
    WOW.prototype.resetStyle = function() {                                                                   // 347
      var box, j, len, ref, results;                                                                          // 348
      ref = this.boxes;                                                                                       // 349
      results = [];                                                                                           // 350
      for (j = 0, len = ref.length; j < len; j++) {                                                           // 351
        box = ref[j];                                                                                         // 352
        results.push(box.style.visibility = 'visible');                                                       // 353
      }                                                                                                       // 354
      return results;                                                                                         // 355
    };                                                                                                        // 356
                                                                                                              // 357
    WOW.prototype.resetAnimation = function(event) {                                                          // 358
      var target;                                                                                             // 359
      if (event.type.toLowerCase().indexOf('animationend') >= 0) {                                            // 360
        target = event.target || event.srcElement;                                                            // 361
        return target.className = target.className.replace(this.config.animateClass, '').trim();              // 362
      }                                                                                                       // 363
    };                                                                                                        // 364
                                                                                                              // 365
    WOW.prototype.customStyle = function(box, hidden, duration, delay, iteration) {                           // 366
      if (hidden) {                                                                                           // 367
        this.cacheAnimationName(box);                                                                         // 368
      }                                                                                                       // 369
      box.style.visibility = hidden ? 'hidden' : 'visible';                                                   // 370
      if (duration) {                                                                                         // 371
        this.vendorSet(box.style, {                                                                           // 372
          animationDuration: duration                                                                         // 373
        });                                                                                                   // 374
      }                                                                                                       // 375
      if (delay) {                                                                                            // 376
        this.vendorSet(box.style, {                                                                           // 377
          animationDelay: delay                                                                               // 378
        });                                                                                                   // 379
      }                                                                                                       // 380
      if (iteration) {                                                                                        // 381
        this.vendorSet(box.style, {                                                                           // 382
          animationIterationCount: iteration                                                                  // 383
        });                                                                                                   // 384
      }                                                                                                       // 385
      this.vendorSet(box.style, {                                                                             // 386
        animationName: hidden ? 'none' : this.cachedAnimationName(box)                                        // 387
      });                                                                                                     // 388
      return box;                                                                                             // 389
    };                                                                                                        // 390
                                                                                                              // 391
    WOW.prototype.vendors = ["moz", "webkit"];                                                                // 392
                                                                                                              // 393
    WOW.prototype.vendorSet = function(elem, properties) {                                                    // 394
      var name, results, value, vendor;                                                                       // 395
      results = [];                                                                                           // 396
      for (name in properties) {                                                                              // 397
        value = properties[name];                                                                             // 398
        elem["" + name] = value;                                                                              // 399
        results.push((function() {                                                                            // 400
          var j, len, ref, results1;                                                                          // 401
          ref = this.vendors;                                                                                 // 402
          results1 = [];                                                                                      // 403
          for (j = 0, len = ref.length; j < len; j++) {                                                       // 404
            vendor = ref[j];                                                                                  // 405
            results1.push(elem["" + vendor + (name.charAt(0).toUpperCase()) + (name.substr(1))] = value);     // 406
          }                                                                                                   // 407
          return results1;                                                                                    // 408
        }).call(this));                                                                                       // 409
      }                                                                                                       // 410
      return results;                                                                                         // 411
    };                                                                                                        // 412
                                                                                                              // 413
    WOW.prototype.vendorCSS = function(elem, property) {                                                      // 414
      var j, len, ref, result, style, vendor;                                                                 // 415
      style = getComputedStyle(elem);                                                                         // 416
      result = style.getPropertyCSSValue(property);                                                           // 417
      ref = this.vendors;                                                                                     // 418
      for (j = 0, len = ref.length; j < len; j++) {                                                           // 419
        vendor = ref[j];                                                                                      // 420
        result = result || style.getPropertyCSSValue("-" + vendor + "-" + property);                          // 421
      }                                                                                                       // 422
      return result;                                                                                          // 423
    };                                                                                                        // 424
                                                                                                              // 425
    WOW.prototype.animationName = function(box) {                                                             // 426
      var animationName;                                                                                      // 427
      try {                                                                                                   // 428
        animationName = this.vendorCSS(box, 'animation-name').cssText;                                        // 429
      } catch (_error) {                                                                                      // 430
        animationName = getComputedStyle(box).getPropertyValue('animation-name');                             // 431
      }                                                                                                       // 432
      if (animationName === 'none') {                                                                         // 433
        return '';                                                                                            // 434
      } else {                                                                                                // 435
        return animationName;                                                                                 // 436
      }                                                                                                       // 437
    };                                                                                                        // 438
                                                                                                              // 439
    WOW.prototype.cacheAnimationName = function(box) {                                                        // 440
      return this.animationNameCache.set(box, this.animationName(box));                                       // 441
    };                                                                                                        // 442
                                                                                                              // 443
    WOW.prototype.cachedAnimationName = function(box) {                                                       // 444
      return this.animationNameCache.get(box);                                                                // 445
    };                                                                                                        // 446
                                                                                                              // 447
    WOW.prototype.scrollHandler = function() {                                                                // 448
      return this.scrolled = true;                                                                            // 449
    };                                                                                                        // 450
                                                                                                              // 451
    WOW.prototype.scrollCallback = function() {                                                               // 452
      var box;                                                                                                // 453
      if (this.scrolled) {                                                                                    // 454
        this.scrolled = false;                                                                                // 455
        this.boxes = (function() {                                                                            // 456
          var j, len, ref, results;                                                                           // 457
          ref = this.boxes;                                                                                   // 458
          results = [];                                                                                       // 459
          for (j = 0, len = ref.length; j < len; j++) {                                                       // 460
            box = ref[j];                                                                                     // 461
            if (!(box)) {                                                                                     // 462
              continue;                                                                                       // 463
            }                                                                                                 // 464
            if (this.isVisible(box)) {                                                                        // 465
              this.show(box);                                                                                 // 466
              continue;                                                                                       // 467
            }                                                                                                 // 468
            results.push(box);                                                                                // 469
          }                                                                                                   // 470
          return results;                                                                                     // 471
        }).call(this);                                                                                        // 472
        if (!(this.boxes.length || this.config.live)) {                                                       // 473
          return this.stop();                                                                                 // 474
        }                                                                                                     // 475
      }                                                                                                       // 476
    };                                                                                                        // 477
                                                                                                              // 478
    WOW.prototype.offsetTop = function(element) {                                                             // 479
      var top;                                                                                                // 480
      while (element.offsetTop === void 0) {                                                                  // 481
        element = element.parentNode;                                                                         // 482
      }                                                                                                       // 483
      top = element.offsetTop;                                                                                // 484
      while (element = element.offsetParent) {                                                                // 485
        top += element.offsetTop;                                                                             // 486
      }                                                                                                       // 487
      return top;                                                                                             // 488
    };                                                                                                        // 489
                                                                                                              // 490
    WOW.prototype.isVisible = function(box) {                                                                 // 491
      var bottom, offset, top, viewBottom, viewTop;                                                           // 492
      offset = box.getAttribute('data-wow-offset') || this.config.offset;                                     // 493
      viewTop = (this.config.scrollContainer && this.config.scrollContainer.scrollTop) || window.pageYOffset;
      viewBottom = viewTop + Math.min(this.element.clientHeight, this.util().innerHeight()) - offset;         // 495
      top = this.offsetTop(box);                                                                              // 496
      bottom = top + box.clientHeight;                                                                        // 497
      return top <= viewBottom && bottom >= viewTop;                                                          // 498
    };                                                                                                        // 499
                                                                                                              // 500
    WOW.prototype.util = function() {                                                                         // 501
      return this._util != null ? this._util : this._util = new Util();                                       // 502
    };                                                                                                        // 503
                                                                                                              // 504
    WOW.prototype.disabled = function() {                                                                     // 505
      return !this.config.mobile && this.util().isMobile(navigator.userAgent);                                // 506
    };                                                                                                        // 507
                                                                                                              // 508
    return WOW;                                                                                               // 509
                                                                                                              // 510
  })();                                                                                                       // 511
                                                                                                              // 512
}).call(this);                                                                                                // 513
                                                                                                              // 514
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['jacklam:meteor-wowjs'] = {};

})();
