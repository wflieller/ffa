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
var $ = Package.jquery.$;
var jQuery = Package.jquery.jQuery;

(function(){

///////////////////////////////////////////////////////////////////////
//                                                                   //
// packages/noorderstorm_stellar/packages/noorderstorm_stellar.js    //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
(function () {                                                       // 1
                                                                     // 2
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/noorderstorm:stellar/stellar/jquery.stellar.js                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
/*!                                                                                                                    // 1
 * Stellar.js v0.6.2                                                                                                   // 2
 * http://markdalgleish.com/projects/stellar.js                                                                        // 3
 *                                                                                                                     // 4
 * Copyright 2013, Mark Dalgleish                                                                                      // 5
 * This content is released under the MIT license                                                                      // 6
 * http://markdalgleish.mit-license.org                                                                                // 7
 */                                                                                                                    // 8
                                                                                                                       // 9
;(function($, window, document, undefined) {                                                                           // 10
                                                                                                                       // 11
	var pluginName = 'stellar',                                                                                           // 12
		defaults = {                                                                                                         // 13
			scrollProperty: 'scroll',                                                                                           // 14
			positionProperty: 'position',                                                                                       // 15
			horizontalScrolling: true,                                                                                          // 16
			verticalScrolling: true,                                                                                            // 17
			horizontalOffset: 0,                                                                                                // 18
			verticalOffset: 0,                                                                                                  // 19
			responsive: false,                                                                                                  // 20
			parallaxBackgrounds: true,                                                                                          // 21
			parallaxElements: true,                                                                                             // 22
			hideDistantElements: true,                                                                                          // 23
			hideElement: function($elem) { $elem.hide(); },                                                                     // 24
			showElement: function($elem) { $elem.show(); }                                                                      // 25
		},                                                                                                                   // 26
                                                                                                                       // 27
		scrollProperty = {                                                                                                   // 28
			scroll: {                                                                                                           // 29
				getLeft: function($elem) { return $elem.scrollLeft(); },                                                           // 30
				setLeft: function($elem, val) { $elem.scrollLeft(val); },                                                          // 31
                                                                                                                       // 32
				getTop: function($elem) { return $elem.scrollTop();	},                                                             // 33
				setTop: function($elem, val) { $elem.scrollTop(val); }                                                             // 34
			},                                                                                                                  // 35
			position: {                                                                                                         // 36
				getLeft: function($elem) { return parseInt($elem.css('left'), 10) * -1; },                                         // 37
				getTop: function($elem) { return parseInt($elem.css('top'), 10) * -1; }                                            // 38
			},                                                                                                                  // 39
			margin: {                                                                                                           // 40
				getLeft: function($elem) { return parseInt($elem.css('margin-left'), 10) * -1; },                                  // 41
				getTop: function($elem) { return parseInt($elem.css('margin-top'), 10) * -1; }                                     // 42
			},                                                                                                                  // 43
			transform: {                                                                                                        // 44
				getLeft: function($elem) {                                                                                         // 45
					var computedTransform = getComputedStyle($elem[0])[prefixedTransform];                                            // 46
					return (computedTransform !== 'none' ? parseInt(computedTransform.match(/(-?[0-9]+)/g)[4], 10) * -1 : 0);         // 47
				},                                                                                                                 // 48
				getTop: function($elem) {                                                                                          // 49
					var computedTransform = getComputedStyle($elem[0])[prefixedTransform];                                            // 50
					return (computedTransform !== 'none' ? parseInt(computedTransform.match(/(-?[0-9]+)/g)[5], 10) * -1 : 0);         // 51
				}                                                                                                                  // 52
			}                                                                                                                   // 53
		},                                                                                                                   // 54
                                                                                                                       // 55
		positionProperty = {                                                                                                 // 56
			position: {                                                                                                         // 57
				setLeft: function($elem, left) { $elem.css('left', left); },                                                       // 58
				setTop: function($elem, top) { $elem.css('top', top); }                                                            // 59
			},                                                                                                                  // 60
			transform: {                                                                                                        // 61
				setPosition: function($elem, left, startingLeft, top, startingTop) {                                               // 62
					$elem[0].style[prefixedTransform] = 'translate3d(' + (left - startingLeft) + 'px, ' + (top - startingTop) + 'px, 0)';
				}                                                                                                                  // 64
			}                                                                                                                   // 65
		},                                                                                                                   // 66
                                                                                                                       // 67
		// Returns a function which adds a vendor prefix to any CSS property name                                            // 68
		vendorPrefix = (function() {                                                                                         // 69
			var prefixes = /^(Moz|Webkit|Khtml|O|ms|Icab)(?=[A-Z])/,                                                            // 70
				style = $('script')[0].style,                                                                                      // 71
				prefix = '',                                                                                                       // 72
				prop;                                                                                                              // 73
                                                                                                                       // 74
			for (prop in style) {                                                                                               // 75
				if (prefixes.test(prop)) {                                                                                         // 76
					prefix = prop.match(prefixes)[0];                                                                                 // 77
					break;                                                                                                            // 78
				}                                                                                                                  // 79
			}                                                                                                                   // 80
                                                                                                                       // 81
			if ('WebkitOpacity' in style) { prefix = 'Webkit'; }                                                                // 82
			if ('KhtmlOpacity' in style) { prefix = 'Khtml'; }                                                                  // 83
                                                                                                                       // 84
			return function(property) {                                                                                         // 85
				return prefix + (prefix.length > 0 ? property.charAt(0).toUpperCase() + property.slice(1) : property);             // 86
			};                                                                                                                  // 87
		}()),                                                                                                                // 88
                                                                                                                       // 89
		prefixedTransform = vendorPrefix('transform'),                                                                       // 90
                                                                                                                       // 91
		supportsBackgroundPositionXY = $('<div />', { style: 'background:#fff' }).css('background-position-x') !== undefined,
                                                                                                                       // 93
		setBackgroundPosition = (supportsBackgroundPositionXY ?                                                              // 94
			function($elem, x, y) {                                                                                             // 95
				$elem.css({                                                                                                        // 96
					'background-position-x': x,                                                                                       // 97
					'background-position-y': y                                                                                        // 98
				});                                                                                                                // 99
			} :                                                                                                                 // 100
			function($elem, x, y) {                                                                                             // 101
				$elem.css('background-position', x + ' ' + y);                                                                     // 102
			}                                                                                                                   // 103
		),                                                                                                                   // 104
                                                                                                                       // 105
		getBackgroundPosition = (supportsBackgroundPositionXY ?                                                              // 106
			function($elem) {                                                                                                   // 107
				return [                                                                                                           // 108
					$elem.css('background-position-x'),                                                                               // 109
					$elem.css('background-position-y')                                                                                // 110
				];                                                                                                                 // 111
			} :                                                                                                                 // 112
			function($elem) {                                                                                                   // 113
				return $elem.css('background-position').split(' ');                                                                // 114
			}                                                                                                                   // 115
		),                                                                                                                   // 116
                                                                                                                       // 117
		requestAnimFrame = (                                                                                                 // 118
			window.requestAnimationFrame       ||                                                                               // 119
			window.webkitRequestAnimationFrame ||                                                                               // 120
			window.mozRequestAnimationFrame    ||                                                                               // 121
			window.oRequestAnimationFrame      ||                                                                               // 122
			window.msRequestAnimationFrame     ||                                                                               // 123
			function(callback) {                                                                                                // 124
				setTimeout(callback, 1000 / 60);                                                                                   // 125
			}                                                                                                                   // 126
		);                                                                                                                   // 127
                                                                                                                       // 128
	function Plugin(element, options) {                                                                                   // 129
		this.element = element;                                                                                              // 130
		this.options = $.extend({}, defaults, options);                                                                      // 131
                                                                                                                       // 132
		this._defaults = defaults;                                                                                           // 133
		this._name = pluginName;                                                                                             // 134
                                                                                                                       // 135
		this.init();                                                                                                         // 136
	}                                                                                                                     // 137
                                                                                                                       // 138
	Plugin.prototype = {                                                                                                  // 139
		init: function() {                                                                                                   // 140
			this.options.name = pluginName + '_' + Math.floor(Math.random() * 1e9);                                             // 141
                                                                                                                       // 142
			this._defineElements();                                                                                             // 143
			this._defineGetters();                                                                                              // 144
			this._defineSetters();                                                                                              // 145
			this._handleWindowLoadAndResize();                                                                                  // 146
			this._detectViewport();                                                                                             // 147
                                                                                                                       // 148
			this.refresh({ firstLoad: true });                                                                                  // 149
                                                                                                                       // 150
			if (this.options.scrollProperty === 'scroll') {                                                                     // 151
				this._handleScrollEvent();                                                                                         // 152
			} else {                                                                                                            // 153
				this._startAnimationLoop();                                                                                        // 154
			}                                                                                                                   // 155
		},                                                                                                                   // 156
		_defineElements: function() {                                                                                        // 157
			if (this.element === document.body) this.element = window;                                                          // 158
			this.$scrollElement = $(this.element);                                                                              // 159
			this.$element = (this.element === window ? $('body') : this.$scrollElement);                                        // 160
			this.$viewportElement = (this.options.viewportElement !== undefined ? $(this.options.viewportElement) : (this.$scrollElement[0] === window || this.options.scrollProperty === 'scroll' ? this.$scrollElement : this.$scrollElement.parent()) );
		},                                                                                                                   // 162
		_defineGetters: function() {                                                                                         // 163
			var self = this,                                                                                                    // 164
				scrollPropertyAdapter = scrollProperty[self.options.scrollProperty];                                               // 165
                                                                                                                       // 166
			this._getScrollLeft = function() {                                                                                  // 167
				return scrollPropertyAdapter.getLeft(self.$scrollElement);                                                         // 168
			};                                                                                                                  // 169
                                                                                                                       // 170
			this._getScrollTop = function() {                                                                                   // 171
				return scrollPropertyAdapter.getTop(self.$scrollElement);                                                          // 172
			};                                                                                                                  // 173
		},                                                                                                                   // 174
		_defineSetters: function() {                                                                                         // 175
			var self = this,                                                                                                    // 176
				scrollPropertyAdapter = scrollProperty[self.options.scrollProperty],                                               // 177
				positionPropertyAdapter = positionProperty[self.options.positionProperty],                                         // 178
				setScrollLeft = scrollPropertyAdapter.setLeft,                                                                     // 179
				setScrollTop = scrollPropertyAdapter.setTop;                                                                       // 180
                                                                                                                       // 181
			this._setScrollLeft = (typeof setScrollLeft === 'function' ? function(val) {                                        // 182
				setScrollLeft(self.$scrollElement, val);                                                                           // 183
			} : $.noop);                                                                                                        // 184
                                                                                                                       // 185
			this._setScrollTop = (typeof setScrollTop === 'function' ? function(val) {                                          // 186
				setScrollTop(self.$scrollElement, val);                                                                            // 187
			} : $.noop);                                                                                                        // 188
                                                                                                                       // 189
			this._setPosition = positionPropertyAdapter.setPosition ||                                                          // 190
				function($elem, left, startingLeft, top, startingTop) {                                                            // 191
					if (self.options.horizontalScrolling) {                                                                           // 192
						positionPropertyAdapter.setLeft($elem, left, startingLeft);                                                      // 193
					}                                                                                                                 // 194
                                                                                                                       // 195
					if (self.options.verticalScrolling) {                                                                             // 196
						positionPropertyAdapter.setTop($elem, top, startingTop);                                                         // 197
					}                                                                                                                 // 198
				};                                                                                                                 // 199
		},                                                                                                                   // 200
		_handleWindowLoadAndResize: function() {                                                                             // 201
			var self = this,                                                                                                    // 202
				$window = $(window);                                                                                               // 203
                                                                                                                       // 204
			if (self.options.responsive) {                                                                                      // 205
				$window.bind('load.' + this.name, function() {                                                                     // 206
					self.refresh();                                                                                                   // 207
				});                                                                                                                // 208
			}                                                                                                                   // 209
                                                                                                                       // 210
			$window.bind('resize.' + this.name, function() {                                                                    // 211
				self._detectViewport();                                                                                            // 212
                                                                                                                       // 213
				if (self.options.responsive) {                                                                                     // 214
					self.refresh();                                                                                                   // 215
				}                                                                                                                  // 216
			});                                                                                                                 // 217
		},                                                                                                                   // 218
		refresh: function(options) {                                                                                         // 219
			var self = this,                                                                                                    // 220
				oldLeft = self._getScrollLeft(),                                                                                   // 221
				oldTop = self._getScrollTop();                                                                                     // 222
                                                                                                                       // 223
			if (!options || !options.firstLoad) {                                                                               // 224
				this._reset();                                                                                                     // 225
			}                                                                                                                   // 226
                                                                                                                       // 227
			this._setScrollLeft(0);                                                                                             // 228
			this._setScrollTop(0);                                                                                              // 229
                                                                                                                       // 230
			this._setOffsets();                                                                                                 // 231
			this._findParticles();                                                                                              // 232
			this._findBackgrounds();                                                                                            // 233
                                                                                                                       // 234
			// Fix for WebKit background rendering bug                                                                          // 235
			if (options && options.firstLoad && /WebKit/.test(navigator.userAgent)) {                                           // 236
				$(window).load(function() {                                                                                        // 237
					var oldLeft = self._getScrollLeft(),                                                                              // 238
						oldTop = self._getScrollTop();                                                                                   // 239
                                                                                                                       // 240
					self._setScrollLeft(oldLeft + 1);                                                                                 // 241
					self._setScrollTop(oldTop + 1);                                                                                   // 242
                                                                                                                       // 243
					self._setScrollLeft(oldLeft);                                                                                     // 244
					self._setScrollTop(oldTop);                                                                                       // 245
				});                                                                                                                // 246
			}                                                                                                                   // 247
                                                                                                                       // 248
			this._setScrollLeft(oldLeft);                                                                                       // 249
			this._setScrollTop(oldTop);                                                                                         // 250
		},                                                                                                                   // 251
		_detectViewport: function() {                                                                                        // 252
			var viewportOffsets = this.$viewportElement.offset(),                                                               // 253
				hasOffsets = viewportOffsets !== null && viewportOffsets !== undefined;                                            // 254
                                                                                                                       // 255
			this.viewportWidth = this.$viewportElement.width();                                                                 // 256
			this.viewportHeight = this.$viewportElement.height();                                                               // 257
                                                                                                                       // 258
			this.viewportOffsetTop = (hasOffsets ? viewportOffsets.top : 0);                                                    // 259
			this.viewportOffsetLeft = (hasOffsets ? viewportOffsets.left : 0);                                                  // 260
		},                                                                                                                   // 261
		_findParticles: function() {                                                                                         // 262
			var self = this,                                                                                                    // 263
				scrollLeft = this._getScrollLeft(),                                                                                // 264
				scrollTop = this._getScrollTop();                                                                                  // 265
                                                                                                                       // 266
			if (this.particles !== undefined) {                                                                                 // 267
				for (var i = this.particles.length - 1; i >= 0; i--) {                                                             // 268
					this.particles[i].$element.data('stellar-elementIsActive', undefined);                                            // 269
				}                                                                                                                  // 270
			}                                                                                                                   // 271
                                                                                                                       // 272
			this.particles = [];                                                                                                // 273
                                                                                                                       // 274
			if (!this.options.parallaxElements) return;                                                                         // 275
                                                                                                                       // 276
			this.$element.find('[data-stellar-ratio]').each(function(i) {                                                       // 277
				var $this = $(this),                                                                                               // 278
					horizontalOffset,                                                                                                 // 279
					verticalOffset,                                                                                                   // 280
					positionLeft,                                                                                                     // 281
					positionTop,                                                                                                      // 282
					marginLeft,                                                                                                       // 283
					marginTop,                                                                                                        // 284
					$offsetParent,                                                                                                    // 285
					offsetLeft,                                                                                                       // 286
					offsetTop,                                                                                                        // 287
					parentOffsetLeft = 0,                                                                                             // 288
					parentOffsetTop = 0,                                                                                              // 289
					tempParentOffsetLeft = 0,                                                                                         // 290
					tempParentOffsetTop = 0;                                                                                          // 291
                                                                                                                       // 292
				// Ensure this element isn't already part of another scrolling element                                             // 293
				if (!$this.data('stellar-elementIsActive')) {                                                                      // 294
					$this.data('stellar-elementIsActive', this);                                                                      // 295
				} else if ($this.data('stellar-elementIsActive') !== this) {                                                       // 296
					return;                                                                                                           // 297
				}                                                                                                                  // 298
                                                                                                                       // 299
				self.options.showElement($this);                                                                                   // 300
                                                                                                                       // 301
				// Save/restore the original top and left CSS values in case we refresh the particles or destroy the instance      // 302
				if (!$this.data('stellar-startingLeft')) {                                                                         // 303
					$this.data('stellar-startingLeft', $this.css('left'));                                                            // 304
					$this.data('stellar-startingTop', $this.css('top'));                                                              // 305
				} else {                                                                                                           // 306
					$this.css('left', $this.data('stellar-startingLeft'));                                                            // 307
					$this.css('top', $this.data('stellar-startingTop'));                                                              // 308
				}                                                                                                                  // 309
                                                                                                                       // 310
				positionLeft = $this.position().left;                                                                              // 311
				positionTop = $this.position().top;                                                                                // 312
                                                                                                                       // 313
				// Catch-all for margin top/left properties (these evaluate to 'auto' in IE7 and IE8)                              // 314
				marginLeft = ($this.css('margin-left') === 'auto') ? 0 : parseInt($this.css('margin-left'), 10);                   // 315
				marginTop = ($this.css('margin-top') === 'auto') ? 0 : parseInt($this.css('margin-top'), 10);                      // 316
                                                                                                                       // 317
				offsetLeft = $this.offset().left - marginLeft;                                                                     // 318
				offsetTop = $this.offset().top - marginTop;                                                                        // 319
                                                                                                                       // 320
				// Calculate the offset parent                                                                                     // 321
				$this.parents().each(function() {                                                                                  // 322
					var $this = $(this);                                                                                              // 323
                                                                                                                       // 324
					if ($this.data('stellar-offset-parent') === true) {                                                               // 325
						parentOffsetLeft = tempParentOffsetLeft;                                                                         // 326
						parentOffsetTop = tempParentOffsetTop;                                                                           // 327
						$offsetParent = $this;                                                                                           // 328
                                                                                                                       // 329
						return false;                                                                                                    // 330
					} else {                                                                                                          // 331
						tempParentOffsetLeft += $this.position().left;                                                                   // 332
						tempParentOffsetTop += $this.position().top;                                                                     // 333
					}                                                                                                                 // 334
				});                                                                                                                // 335
                                                                                                                       // 336
				// Detect the offsets                                                                                              // 337
				horizontalOffset = ($this.data('stellar-horizontal-offset') !== undefined ? $this.data('stellar-horizontal-offset') : ($offsetParent !== undefined && $offsetParent.data('stellar-horizontal-offset') !== undefined ? $offsetParent.data('stellar-horizontal-offset') : self.horizontalOffset));
				verticalOffset = ($this.data('stellar-vertical-offset') !== undefined ? $this.data('stellar-vertical-offset') : ($offsetParent !== undefined && $offsetParent.data('stellar-vertical-offset') !== undefined ? $offsetParent.data('stellar-vertical-offset') : self.verticalOffset));
                                                                                                                       // 340
				// Add our object to the particles collection                                                                      // 341
				self.particles.push({                                                                                              // 342
					$element: $this,                                                                                                  // 343
					$offsetParent: $offsetParent,                                                                                     // 344
					isFixed: $this.css('position') === 'fixed',                                                                       // 345
					horizontalOffset: horizontalOffset,                                                                               // 346
					verticalOffset: verticalOffset,                                                                                   // 347
					startingPositionLeft: positionLeft,                                                                               // 348
					startingPositionTop: positionTop,                                                                                 // 349
					startingOffsetLeft: offsetLeft,                                                                                   // 350
					startingOffsetTop: offsetTop,                                                                                     // 351
					parentOffsetLeft: parentOffsetLeft,                                                                               // 352
					parentOffsetTop: parentOffsetTop,                                                                                 // 353
					stellarRatio: ($this.data('stellar-ratio') !== undefined ? $this.data('stellar-ratio') : 1),                      // 354
					width: $this.outerWidth(true),                                                                                    // 355
					height: $this.outerHeight(true),                                                                                  // 356
					isHidden: false                                                                                                   // 357
				});                                                                                                                // 358
			});                                                                                                                 // 359
		},                                                                                                                   // 360
		_findBackgrounds: function() {                                                                                       // 361
			var self = this,                                                                                                    // 362
				scrollLeft = this._getScrollLeft(),                                                                                // 363
				scrollTop = this._getScrollTop(),                                                                                  // 364
				$backgroundElements;                                                                                               // 365
                                                                                                                       // 366
			this.backgrounds = [];                                                                                              // 367
                                                                                                                       // 368
			if (!this.options.parallaxBackgrounds) return;                                                                      // 369
                                                                                                                       // 370
			$backgroundElements = this.$element.find('[data-stellar-background-ratio]');                                        // 371
                                                                                                                       // 372
			if (this.$element.data('stellar-background-ratio')) {                                                               // 373
                $backgroundElements = $backgroundElements.add(this.$element);                                          // 374
			}                                                                                                                   // 375
                                                                                                                       // 376
			$backgroundElements.each(function() {                                                                               // 377
				var $this = $(this),                                                                                               // 378
					backgroundPosition = getBackgroundPosition($this),                                                                // 379
					horizontalOffset,                                                                                                 // 380
					verticalOffset,                                                                                                   // 381
					positionLeft,                                                                                                     // 382
					positionTop,                                                                                                      // 383
					marginLeft,                                                                                                       // 384
					marginTop,                                                                                                        // 385
					offsetLeft,                                                                                                       // 386
					offsetTop,                                                                                                        // 387
					$offsetParent,                                                                                                    // 388
					parentOffsetLeft = 0,                                                                                             // 389
					parentOffsetTop = 0,                                                                                              // 390
					tempParentOffsetLeft = 0,                                                                                         // 391
					tempParentOffsetTop = 0;                                                                                          // 392
                                                                                                                       // 393
				// Ensure this element isn't already part of another scrolling element                                             // 394
				if (!$this.data('stellar-backgroundIsActive')) {                                                                   // 395
					$this.data('stellar-backgroundIsActive', this);                                                                   // 396
				} else if ($this.data('stellar-backgroundIsActive') !== this) {                                                    // 397
					return;                                                                                                           // 398
				}                                                                                                                  // 399
                                                                                                                       // 400
				// Save/restore the original top and left CSS values in case we destroy the instance                               // 401
				if (!$this.data('stellar-backgroundStartingLeft')) {                                                               // 402
					$this.data('stellar-backgroundStartingLeft', backgroundPosition[0]);                                              // 403
					$this.data('stellar-backgroundStartingTop', backgroundPosition[1]);                                               // 404
				} else {                                                                                                           // 405
					setBackgroundPosition($this, $this.data('stellar-backgroundStartingLeft'), $this.data('stellar-backgroundStartingTop'));
				}                                                                                                                  // 407
                                                                                                                       // 408
				// Catch-all for margin top/left properties (these evaluate to 'auto' in IE7 and IE8)                              // 409
				marginLeft = ($this.css('margin-left') === 'auto') ? 0 : parseInt($this.css('margin-left'), 10);                   // 410
				marginTop = ($this.css('margin-top') === 'auto') ? 0 : parseInt($this.css('margin-top'), 10);                      // 411
                                                                                                                       // 412
				offsetLeft = $this.offset().left - marginLeft - scrollLeft;                                                        // 413
				offsetTop = $this.offset().top - marginTop - scrollTop;                                                            // 414
				                                                                                                                   // 415
				// Calculate the offset parent                                                                                     // 416
				$this.parents().each(function() {                                                                                  // 417
					var $this = $(this);                                                                                              // 418
                                                                                                                       // 419
					if ($this.data('stellar-offset-parent') === true) {                                                               // 420
						parentOffsetLeft = tempParentOffsetLeft;                                                                         // 421
						parentOffsetTop = tempParentOffsetTop;                                                                           // 422
						$offsetParent = $this;                                                                                           // 423
                                                                                                                       // 424
						return false;                                                                                                    // 425
					} else {                                                                                                          // 426
						tempParentOffsetLeft += $this.position().left;                                                                   // 427
						tempParentOffsetTop += $this.position().top;                                                                     // 428
					}                                                                                                                 // 429
				});                                                                                                                // 430
                                                                                                                       // 431
				// Detect the offsets                                                                                              // 432
				horizontalOffset = ($this.data('stellar-horizontal-offset') !== undefined ? $this.data('stellar-horizontal-offset') : ($offsetParent !== undefined && $offsetParent.data('stellar-horizontal-offset') !== undefined ? $offsetParent.data('stellar-horizontal-offset') : self.horizontalOffset));
				verticalOffset = ($this.data('stellar-vertical-offset') !== undefined ? $this.data('stellar-vertical-offset') : ($offsetParent !== undefined && $offsetParent.data('stellar-vertical-offset') !== undefined ? $offsetParent.data('stellar-vertical-offset') : self.verticalOffset));
                                                                                                                       // 435
				self.backgrounds.push({                                                                                            // 436
					$element: $this,                                                                                                  // 437
					$offsetParent: $offsetParent,                                                                                     // 438
					isFixed: $this.css('background-attachment') === 'fixed',                                                          // 439
					horizontalOffset: horizontalOffset,                                                                               // 440
					verticalOffset: verticalOffset,                                                                                   // 441
					startingValueLeft: backgroundPosition[0],                                                                         // 442
					startingValueTop: backgroundPosition[1],                                                                          // 443
					startingBackgroundPositionLeft: (isNaN(parseInt(backgroundPosition[0], 10)) ? 0 : parseInt(backgroundPosition[0], 10)),
					startingBackgroundPositionTop: (isNaN(parseInt(backgroundPosition[1], 10)) ? 0 : parseInt(backgroundPosition[1], 10)),
					startingPositionLeft: $this.position().left,                                                                      // 446
					startingPositionTop: $this.position().top,                                                                        // 447
					startingOffsetLeft: offsetLeft,                                                                                   // 448
					startingOffsetTop: offsetTop,                                                                                     // 449
					parentOffsetLeft: parentOffsetLeft,                                                                               // 450
					parentOffsetTop: parentOffsetTop,                                                                                 // 451
					stellarRatio: ($this.data('stellar-background-ratio') === undefined ? 1 : $this.data('stellar-background-ratio')) // 452
				});                                                                                                                // 453
			});                                                                                                                 // 454
		},                                                                                                                   // 455
		_reset: function() {                                                                                                 // 456
			var particle,                                                                                                       // 457
				startingPositionLeft,                                                                                              // 458
				startingPositionTop,                                                                                               // 459
				background,                                                                                                        // 460
				i;                                                                                                                 // 461
                                                                                                                       // 462
			for (i = this.particles.length - 1; i >= 0; i--) {                                                                  // 463
				particle = this.particles[i];                                                                                      // 464
				startingPositionLeft = particle.$element.data('stellar-startingLeft');                                             // 465
				startingPositionTop = particle.$element.data('stellar-startingTop');                                               // 466
                                                                                                                       // 467
				this._setPosition(particle.$element, startingPositionLeft, startingPositionLeft, startingPositionTop, startingPositionTop);
                                                                                                                       // 469
				this.options.showElement(particle.$element);                                                                       // 470
                                                                                                                       // 471
				particle.$element.data('stellar-startingLeft', null).data('stellar-elementIsActive', null).data('stellar-backgroundIsActive', null);
			}                                                                                                                   // 473
                                                                                                                       // 474
			for (i = this.backgrounds.length - 1; i >= 0; i--) {                                                                // 475
				background = this.backgrounds[i];                                                                                  // 476
                                                                                                                       // 477
				background.$element.data('stellar-backgroundStartingLeft', null).data('stellar-backgroundStartingTop', null);      // 478
                                                                                                                       // 479
				setBackgroundPosition(background.$element, background.startingValueLeft, background.startingValueTop);             // 480
			}                                                                                                                   // 481
		},                                                                                                                   // 482
		destroy: function() {                                                                                                // 483
			this._reset();                                                                                                      // 484
                                                                                                                       // 485
			this.$scrollElement.unbind('resize.' + this.name).unbind('scroll.' + this.name);                                    // 486
			this._animationLoop = $.noop;                                                                                       // 487
                                                                                                                       // 488
			$(window).unbind('load.' + this.name).unbind('resize.' + this.name);                                                // 489
		},                                                                                                                   // 490
		_setOffsets: function() {                                                                                            // 491
			var self = this,                                                                                                    // 492
				$window = $(window);                                                                                               // 493
                                                                                                                       // 494
			$window.unbind('resize.horizontal-' + this.name).unbind('resize.vertical-' + this.name);                            // 495
                                                                                                                       // 496
			if (typeof this.options.horizontalOffset === 'function') {                                                          // 497
				this.horizontalOffset = this.options.horizontalOffset();                                                           // 498
				$window.bind('resize.horizontal-' + this.name, function() {                                                        // 499
					self.horizontalOffset = self.options.horizontalOffset();                                                          // 500
				});                                                                                                                // 501
			} else {                                                                                                            // 502
				this.horizontalOffset = this.options.horizontalOffset;                                                             // 503
			}                                                                                                                   // 504
                                                                                                                       // 505
			if (typeof this.options.verticalOffset === 'function') {                                                            // 506
				this.verticalOffset = this.options.verticalOffset();                                                               // 507
				$window.bind('resize.vertical-' + this.name, function() {                                                          // 508
					self.verticalOffset = self.options.verticalOffset();                                                              // 509
				});                                                                                                                // 510
			} else {                                                                                                            // 511
				this.verticalOffset = this.options.verticalOffset;                                                                 // 512
			}                                                                                                                   // 513
		},                                                                                                                   // 514
		_repositionElements: function() {                                                                                    // 515
			var scrollLeft = this._getScrollLeft(),                                                                             // 516
				scrollTop = this._getScrollTop(),                                                                                  // 517
				horizontalOffset,                                                                                                  // 518
				verticalOffset,                                                                                                    // 519
				particle,                                                                                                          // 520
				fixedRatioOffset,                                                                                                  // 521
				background,                                                                                                        // 522
				bgLeft,                                                                                                            // 523
				bgTop,                                                                                                             // 524
				isVisibleVertical = true,                                                                                          // 525
				isVisibleHorizontal = true,                                                                                        // 526
				newPositionLeft,                                                                                                   // 527
				newPositionTop,                                                                                                    // 528
				newOffsetLeft,                                                                                                     // 529
				newOffsetTop,                                                                                                      // 530
				i;                                                                                                                 // 531
                                                                                                                       // 532
			// First check that the scroll position or container size has changed                                               // 533
			if (this.currentScrollLeft === scrollLeft && this.currentScrollTop === scrollTop && this.currentWidth === this.viewportWidth && this.currentHeight === this.viewportHeight) {
				return;                                                                                                            // 535
			} else {                                                                                                            // 536
				this.currentScrollLeft = scrollLeft;                                                                               // 537
				this.currentScrollTop = scrollTop;                                                                                 // 538
				this.currentWidth = this.viewportWidth;                                                                            // 539
				this.currentHeight = this.viewportHeight;                                                                          // 540
			}                                                                                                                   // 541
                                                                                                                       // 542
			// Reposition elements                                                                                              // 543
			for (i = this.particles.length - 1; i >= 0; i--) {                                                                  // 544
				particle = this.particles[i];                                                                                      // 545
                                                                                                                       // 546
				fixedRatioOffset = (particle.isFixed ? 1 : 0);                                                                     // 547
                                                                                                                       // 548
				// Calculate position, then calculate what the particle's new offset will be (for visibility check)                // 549
				if (this.options.horizontalScrolling) {                                                                            // 550
					newPositionLeft = (scrollLeft + particle.horizontalOffset + this.viewportOffsetLeft + particle.startingPositionLeft - particle.startingOffsetLeft + particle.parentOffsetLeft) * -(particle.stellarRatio + fixedRatioOffset - 1) + particle.startingPositionLeft;
					newOffsetLeft = newPositionLeft - particle.startingPositionLeft + particle.startingOffsetLeft;                    // 552
				} else {                                                                                                           // 553
					newPositionLeft = particle.startingPositionLeft;                                                                  // 554
					newOffsetLeft = particle.startingOffsetLeft;                                                                      // 555
				}                                                                                                                  // 556
                                                                                                                       // 557
				if (this.options.verticalScrolling) {                                                                              // 558
					newPositionTop = (scrollTop + particle.verticalOffset + this.viewportOffsetTop + particle.startingPositionTop - particle.startingOffsetTop + particle.parentOffsetTop) * -(particle.stellarRatio + fixedRatioOffset - 1) + particle.startingPositionTop;
					newOffsetTop = newPositionTop - particle.startingPositionTop + particle.startingOffsetTop;                        // 560
				} else {                                                                                                           // 561
					newPositionTop = particle.startingPositionTop;                                                                    // 562
					newOffsetTop = particle.startingOffsetTop;                                                                        // 563
				}                                                                                                                  // 564
                                                                                                                       // 565
				// Check visibility                                                                                                // 566
				if (this.options.hideDistantElements) {                                                                            // 567
					isVisibleHorizontal = !this.options.horizontalScrolling || newOffsetLeft + particle.width > (particle.isFixed ? 0 : scrollLeft) && newOffsetLeft < (particle.isFixed ? 0 : scrollLeft) + this.viewportWidth + this.viewportOffsetLeft;
					isVisibleVertical = !this.options.verticalScrolling || newOffsetTop + particle.height > (particle.isFixed ? 0 : scrollTop) && newOffsetTop < (particle.isFixed ? 0 : scrollTop) + this.viewportHeight + this.viewportOffsetTop;
				}                                                                                                                  // 570
                                                                                                                       // 571
				if (isVisibleHorizontal && isVisibleVertical) {                                                                    // 572
					if (particle.isHidden) {                                                                                          // 573
						this.options.showElement(particle.$element);                                                                     // 574
						particle.isHidden = false;                                                                                       // 575
					}                                                                                                                 // 576
                                                                                                                       // 577
					this._setPosition(particle.$element, newPositionLeft, particle.startingPositionLeft, newPositionTop, particle.startingPositionTop);
				} else {                                                                                                           // 579
					if (!particle.isHidden) {                                                                                         // 580
						this.options.hideElement(particle.$element);                                                                     // 581
						particle.isHidden = true;                                                                                        // 582
					}                                                                                                                 // 583
				}                                                                                                                  // 584
			}                                                                                                                   // 585
                                                                                                                       // 586
			// Reposition backgrounds                                                                                           // 587
			for (i = this.backgrounds.length - 1; i >= 0; i--) {                                                                // 588
				background = this.backgrounds[i];                                                                                  // 589
                                                                                                                       // 590
				fixedRatioOffset = (background.isFixed ? 0 : 1);                                                                   // 591
				bgLeft = (this.options.horizontalScrolling ? (scrollLeft + background.horizontalOffset - this.viewportOffsetLeft - background.startingOffsetLeft + background.parentOffsetLeft - background.startingBackgroundPositionLeft) * (fixedRatioOffset - background.stellarRatio) + 'px' : background.startingValueLeft);
				bgTop = (this.options.verticalScrolling ? (scrollTop + background.verticalOffset - this.viewportOffsetTop - background.startingOffsetTop + background.parentOffsetTop - background.startingBackgroundPositionTop) * (fixedRatioOffset - background.stellarRatio) + 'px' : background.startingValueTop);
                                                                                                                       // 594
				setBackgroundPosition(background.$element, bgLeft, bgTop);                                                         // 595
			}                                                                                                                   // 596
		},                                                                                                                   // 597
		_handleScrollEvent: function() {                                                                                     // 598
			var self = this,                                                                                                    // 599
				ticking = false;                                                                                                   // 600
                                                                                                                       // 601
			var update = function() {                                                                                           // 602
				self._repositionElements();                                                                                        // 603
				ticking = false;                                                                                                   // 604
			};                                                                                                                  // 605
                                                                                                                       // 606
			var requestTick = function() {                                                                                      // 607
				if (!ticking) {                                                                                                    // 608
					requestAnimFrame(update);                                                                                         // 609
					ticking = true;                                                                                                   // 610
				}                                                                                                                  // 611
			};                                                                                                                  // 612
			                                                                                                                    // 613
			this.$scrollElement.bind('scroll.' + this.name, requestTick);                                                       // 614
			requestTick();                                                                                                      // 615
		},                                                                                                                   // 616
		_startAnimationLoop: function() {                                                                                    // 617
			var self = this;                                                                                                    // 618
                                                                                                                       // 619
			this._animationLoop = function() {                                                                                  // 620
				requestAnimFrame(self._animationLoop);                                                                             // 621
				self._repositionElements();                                                                                        // 622
			};                                                                                                                  // 623
			this._animationLoop();                                                                                              // 624
		}                                                                                                                    // 625
	};                                                                                                                    // 626
                                                                                                                       // 627
	$.fn[pluginName] = function (options) {                                                                               // 628
		var args = arguments;                                                                                                // 629
		if (options === undefined || typeof options === 'object') {                                                          // 630
			return this.each(function () {                                                                                      // 631
				if (!$.data(this, 'plugin_' + pluginName)) {                                                                       // 632
					$.data(this, 'plugin_' + pluginName, new Plugin(this, options));                                                  // 633
				}                                                                                                                  // 634
			});                                                                                                                 // 635
		} else if (typeof options === 'string' && options[0] !== '_' && options !== 'init') {                                // 636
			return this.each(function () {                                                                                      // 637
				var instance = $.data(this, 'plugin_' + pluginName);                                                               // 638
				if (instance instanceof Plugin && typeof instance[options] === 'function') {                                       // 639
					instance[options].apply(instance, Array.prototype.slice.call(args, 1));                                           // 640
				}                                                                                                                  // 641
				if (options === 'destroy') {                                                                                       // 642
					$.data(this, 'plugin_' + pluginName, null);                                                                       // 643
				}                                                                                                                  // 644
			});                                                                                                                 // 645
		}                                                                                                                    // 646
	};                                                                                                                    // 647
                                                                                                                       // 648
	$[pluginName] = function(options) {                                                                                   // 649
		var $window = $(window);                                                                                             // 650
		return $window.stellar.apply($window, Array.prototype.slice.call(arguments, 0));                                     // 651
	};                                                                                                                    // 652
                                                                                                                       // 653
	// Expose the scroll and position property function hashes so they can be extended                                    // 654
	$[pluginName].scrollProperty = scrollProperty;                                                                        // 655
	$[pluginName].positionProperty = positionProperty;                                                                    // 656
                                                                                                                       // 657
	// Expose the plugin class so it can be modified                                                                      // 658
	window.Stellar = Plugin;                                                                                              // 659
}(jQuery, this, document));                                                                                            // 660
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                     // 670
}).call(this);                                                       // 671
                                                                     // 672
///////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['noorderstorm:stellar'] = {};

})();
