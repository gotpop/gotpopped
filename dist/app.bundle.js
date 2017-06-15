/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 35);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/////////////////////////////////////////////////
// Status
/////////////////////////////////////////////////

var Status = function () {
  function Status() {
    _classCallCheck(this, Status);

    this.makeStatus();
    this.getSetLocation();

    this.currentPage;
    this.currentPortfolioPage;
    this.mobile;
    this.menuOpen = false;
  }

  _createClass(Status, [{
    key: 'makeStatus',
    value: function makeStatus() {
      this.currentPage = 'home';
      this.currentPortfolioPage = 'hackett';
      console.log(this);
    }
  }, {
    key: 'getSetLocation',
    value: function getSetLocation() {
      var hashLocation = location.hash.substring(1);
      if (hashLocation.length > 1) {
        this.currentPage = hashLocation;
      }
    }
  }]);

  return Status;
}();

var siteStatus = exports.siteStatus = new Status();

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/////////////////////////////////////////////////
// Html
/////////////////////////////////////////////////

var Html = function () {
  function Html(options) {
    _classCallCheck(this, Html);

    this.options = options;
    this.type = options.type;
    this.text = options.text;
    this.id = options.id;
    this.class = options.class;
    this.dataId = options.dataId;
    this.href = options.href;
    this.html;

    this.build();
  }

  _createClass(Html, [{
    key: 'build',
    value: function build() {

      this.buildThis();
      return this.html;
    }
  }, {
    key: 'buildThis',
    value: function buildThis() {

      if (this.type !== undefined) {
        this.html = document.createElement(this.options.type);
      }

      if (this.text !== undefined) {
        var htmlText = document.createTextNode(this.options.text);
        this.html.appendChild(htmlText);
      }

      if (this.id !== undefined) {
        this.html.setAttribute('id', this.id);
      }

      if (this.class !== undefined) {
        this.html.setAttribute('class', this.class);
      }

      if (this.dataId !== undefined) {
        this.html.setAttribute('data-id', this.dataId);
      }

      if (this.href !== undefined) {
        this.html.setAttribute('href', this.href);
      }
    }
  }]);

  return Html;
}();

exports.default = Html;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _triangle = __webpack_require__(75);

var _triangle2 = _interopRequireDefault(_triangle);

var _circle = __webpack_require__(70);

var _circle2 = _interopRequireDefault(_circle);

var _cube = __webpack_require__(71);

var _cube2 = _interopRequireDefault(_cube);

var _codepen = __webpack_require__(72);

var _codepen2 = _interopRequireDefault(_codepen);

var _github = __webpack_require__(73);

var _github2 = _interopRequireDefault(_github);

var _linkedin = __webpack_require__(74);

var _linkedin2 = _interopRequireDefault(_linkedin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /////////////////////////////////////////////////
// Icons
/////////////////////////////////////////////////

/////////////////////////////////////////////////
// Soocial Icons
/////////////////////////////////////////////////

/////////////////////////////////////////////////
// Class
/////////////////////////////////////////////////

var IconsSrc = function IconsSrc() {
  _classCallCheck(this, IconsSrc);

  this.triangle = _triangle2.default;
  this.circle = _circle2.default;
  this.cube = _cube2.default;
  this.codepen = _codepen2.default;
  this.github = _github2.default;
  this.linkedin = _linkedin2.default;
};

var Icon = function () {
  function Icon(iconType, className) {
    _classCallCheck(this, Icon);

    this.iconType = iconType;
    this.className = className;
    this.currentSvg;
    this.loopObject();
  }

  _createClass(Icon, [{
    key: 'loopObject',
    value: function loopObject() {

      var iconsObject = new IconsSrc();

      for (var key in iconsObject) {
        if (key === this.iconType) {
          var decode = iconsObject[key];
          this.currentSvg = decodeURI(decode);
        }
      }
    }
  }, {
    key: 'removeTextNode',
    value: function removeTextNode(wrap) {

      var check = wrap.childNodes[0];
      check.remove();
    }
  }, {
    key: 'build',
    value: function build() {
      var wrap = document.createElement('span');
      wrap.setAttribute('class', this.className);
      wrap.innerHTML = this.currentSvg;

      this.removeTextNode(wrap);

      return wrap;
    }
  }]);

  return Icon;
}();

exports.default = Icon;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /////////////////////////////////////////////////
// Imports
/////////////////////////////////////////////////

var _status = __webpack_require__(0);

var _pages = __webpack_require__(5);

var _pages2 = _interopRequireDefault(_pages);

var _home = __webpack_require__(28);

var _home2 = _interopRequireDefault(_home);

var _portfolio = __webpack_require__(30);

var _portfolio2 = _interopRequireDefault(_portfolio);

var _skills = __webpack_require__(32);

var _skills2 = _interopRequireDefault(_skills);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/////////////////////////////////////////////////
// MakePage
/////////////////////////////////////////////////

var MakePage = function () {
  function MakePage() {
    _classCallCheck(this, MakePage);

    this.loopPageObjects();
  }

  _createClass(MakePage, [{
    key: 'loopPageObjects',
    value: function loopPageObjects() {
      var maView = document.getElementById('view');

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = _pages2.default[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var pageObject = _step.value;


          if (pageObject.pageId === _status.siteStatus.currentPage) {

            if (pageObject.template === 'home') {
              var maHome = new _home2.default(pageObject);
            }

            if (pageObject.template === 'work') {

              var portfolioWrap = document.getElementById('portfolioWrap');
              if (portfolioWrap !== null) {
                portfolioWrap.remove();
              }
              var maWork = new _portfolio2.default(pageObject);
            }

            if (pageObject.template === 'skills') {
              var maSkills = new _skills2.default(pageObject);
            }
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      this.setPageIds(maView);
    }
  }, {
    key: 'setPageIds',
    value: function setPageIds(maView) {

      maView.firstChild.setAttribute('id', 'first');
      maView.firstChild.classList.remove('last');
      maView.firstChild.classList.add('view-item', 'first', 'solo');

      if (maView.childNodes.length > 1) {

        maView.firstChild.remove();
        if (maView.childNodes.length > 2) {}

        maView.firstChild.setAttribute('id', 'first');
        maView.firstChild.classList.remove('last', 'solo');
        maView.firstChild.classList.add('view-item', 'first');

        maView.lastChild.setAttribute('id', 'last');
        maView.lastChild.classList.remove('first', 'solo');
        maView.lastChild.classList.add('view-item', 'last');
      }
    }
  }]);

  return MakePage;
}();

exports.default = MakePage;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = [
	{
		"name": "Columbus",
		"title": "Columbus",
		"ID": "columbus",
		"subtitle": "Insurance",
		"link": "columbusdirect.com",
		"image": {
			"src": "columbus.jpg",
			"alt": "Columbus",
			"width": "200",
			"height": "200"
		},
		"about": "Columbus Direct is one of the UK's largest insurance providers. They recently embarked on a full rebrand including making both the brochureware and purchase process responsive from end to end.",
		"skills": [
			"HTML, SASS & Javascript",
			"Implementation of Material design UI",
			"Angular 2"
		]
	},
	{
		"name": "Hackett",
		"title": "Hackett",
		"ID": "hackett",
		"subtitle": "Insurance",
		"link": "columbusdirect.com",
		"image": {
			"src": "hackett.jpg",
			"alt": "Columbus",
			"width": "200",
			"height": "200"
		},
		"about": "Hackett is an iconic British menswear company. We were briefed with creating an in store loyalty application that tracks user purchases and preferences. The app is used by staff on both iPads and iPhones.",
		"skills": [
			"HTML, SASS & Javascript",
			"Implementation of Material design UI",
			"Angular 2"
		]
	},
	{
		"name": "Offers",
		"title": "Offers",
		"ID": "offers",
		"subtitle": "Insurance",
		"link": "columbusdirect.com",
		"image": {
			"src": "offers.jpg",
			"alt": "Columbus",
			"width": "200",
			"height": "200"
		},
		"about": "Collinson group is one of the UK's largest insurance providers. They built an internal offers application in Angular 2. I worked with backend developers in Singapore to implement Material design and build the UI in Angular 2. The application is responsive.",
		"skills": [
			"HTML, SASS & Javascript",
			"Implementation of Material design UI",
			"Angular 2"
		]
	}
];

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = [
	{
		"name": "Home",
		"pageId": "home",
		"template": "home",
		"title": "Hello, my name's Liam.",
		"subtitle": "UTARIAN",
		"link": "floreshardin@utarian.com",
		"phone": "+1 (893) 459-2144",
		"address": "480 Seigel Street, Yardville, Kansas, 2109",
		"about": "I build enterprise websites that perform well on all devices, focusing on responsive design, aesthetics, clean code & page speed."
	},
	{
		"name": "Work",
		"pageId": "work",
		"template": "work",
		"title": "Work",
		"subtitle": "UTARIAN",
		"link": "floreshardin@utarian.com",
		"phone": "+1 (893) 459-2144",
		"address": "480 Seigel Street, Yardville, Kansas, 2109",
		"about": "Cupidatat aliquip minim labore eu ea officia ea qui cupidatat sit labore fugiat consectetur eu. Irure ipsum anim consequat duis fugiat ipsum dolore consectetur eu cillum voluptate irure cillum ea. Commodo laboris ex commodo pariatur nulla. Officia esse reprehenderit laborum ad. Mollit reprehenderit eiusmod sunt voluptate aute. Anim ad nisi tempor reprehenderit voluptate in laborum ad ut dolore laborum cupidatat nulla."
	},
	{
		"name": "Skills",
		"pageId": "skills",
		"template": "skills",
		"title": "Skills",
		"subtitle": "UTARIAN",
		"link": "floreshardin@utarian.com",
		"phone": "+1 (893) 459-2144",
		"address": "480 Seigel Street, Yardville, Kansas, 2109",
		"about": "Here's a quick overview of my skillset."
	}
];

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = {
	"siteTitle": "GotPop",
	"copyright": "© Copyright GotPop 2016"
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fcce17a8b47440da27c0f03a1171fc3c.eot";

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "57988d66b044543709b9387b7a2f0b8c.eot";

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "a96deaf701d91985877bd184db460637.eot";

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "10128eb0e6893236d347d30b17edd566.eot";

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "e7179ee33eac5f3102e5e122f8fb08a3.eot";

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "33dda38598ba10d3bcc9d48d48afedf6.eot";

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "02c212e7ffa19b4da98c7c2027397771.eot";

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "3eb0ff423439ec130091efd1ae475c19.eot";

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "e58a8a84b849299d77b5ccb112517088.eot";

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "4468b2dde802568629010f4613902786.eot";

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _header = __webpack_require__(27);

var _header2 = _interopRequireDefault(_header);

var _footer = __webpack_require__(26);

var _footer2 = _interopRequireDefault(_footer);

var _canvas = __webpack_require__(25);

var _canvas2 = _interopRequireDefault(_canvas);

var _github = __webpack_require__(34);

var _github2 = _interopRequireDefault(_github);

var _page = __webpack_require__(3);

var _page2 = _interopRequireDefault(_page);

var _view = __webpack_require__(31);

var _view2 = _interopRequireDefault(_view);

var _icons = __webpack_require__(2);

var _icons2 = _interopRequireDefault(_icons);

var _status = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/////////////////////////////////////////////////
// DOMContentLoaded
/////////////////////////////////////////////////

/////////////////////////////////////////////////
// Imports
/////////////////////////////////////////////////

document.addEventListener("DOMContentLoaded", function () {

  var maView = new _view2.default();
  // let makeGitHub = new Github
  var maHeader = new _header2.default();
  var maPage = new _page2.default();
  var maFooter = new _footer2.default();
  // let maCanvas = new Canvas

  // console.log(siteStatus);
});

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "columbus.jpg";

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "hackett.jpg";

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "offers.jpg";

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(36);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(68)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js!./index.scss", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js!./index.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = [
	{
		"skill": "Html 5",
		"link": ""
	},
	{
		"skill": "CSS3",
		"link": ""
	},
	{
		"skill": "Vannila JavaScript ES6",
		"link": ""
	},
	{
		"skill": "Single page applications",
		"link": ""
	},
	{
		"skill": "Rich media web",
		"link": ""
	},
	{
		"skill": "Git",
		"link": ""
	},
	{
		"skill": "Webpack",
		"link": ""
	},
	{
		"skill": "UI Design",
		"link": ""
	}
];

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = [
	{
		"name": "codepen",
		"title": "Codepen",
		"link": "http://codepen.io/gotpop/",
		"subtitle": "click"
	},
	{
		"name": "linkedin",
		"title": "LinkedIn",
		"link": "http://uk.linkedin.com/in/gotpop",
		"subtitle": "click"
	},
	{
		"name": "github",
		"title": "GitHub",
		"link": "https://github.com/gotpop",
		"subtitle": "click"
	}
];

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/////////////////////////////////////////////////
// The View
/////////////////////////////////////////////////


var Gradient = function () {
  function Gradient() {
    _classCallCheck(this, Gradient);

    this.ctx = document.getElementById('canvas').getContext('2d');
  }

  _createClass(Gradient, [{
    key: 'build',
    value: function build() {

      var grad = this.ctx.createLinearGradient(0, 50, 0, 995);
      grad.addColorStop(0.5, '#000');
      grad.addColorStop(1, 'rgba(0,0,0,0)');

      this.ctx.fillStyle = grad;
      this.ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
    }
  }]);

  return Gradient;
}();

exports.default = Gradient;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /////////////////////////////////////////////////
// The View
/////////////////////////////////////////////////

var _gradients = __webpack_require__(24);

var _gradients2 = _interopRequireDefault(_gradients);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Canvas = function () {
    function Canvas() {
        _classCallCheck(this, Canvas);

        this.winWidth = window.innerWidth;
        this.winHeight = window.innerHeight;
        this.makeCanvas();
        this.redraw();
    }

    _createClass(Canvas, [{
        key: 'makeCanvas',
        value: function makeCanvas() {

            if (this.mainCanvas) {
                this.mainCanvas.remove();
            }

            this.myCanvas = document.createElement("canvas");
            this.myCanvas.setAttribute('id', 'canvas');

            this.myCanvas.width = this.winWidth;
            this.myCanvas.height = this.winHeight;

            document.body.appendChild(this.myCanvas);

            this.mainCanvas = document.getElementById("canvas");
            this.mainContext = this.mainCanvas.getContext('2d');

            this.mainContext.clearRect(0, 0, this.winWidth, this.winHeight);

            this.drawGrad
            // this.drawCircle()

            ();this.mainContext.fillRect(0, 0, this.winWidth, this.winHeight);
            this.mainContext.fill();
        }
    }, {
        key: 'drawGrad',
        value: function drawGrad() {

            this.grad = this.mainContext.createLinearGradient(0, 0, 0, 900);

            this.grad.addColorStop(0, 'rgba(200,200,200,0)');
            this.grad.addColorStop(0.45, '#000');
            this.grad.addColorStop(0.5, '#000');
            this.grad.addColorStop(0.75, '#000');
            this.grad.addColorStop(1, 'rgba(200,200,200,0)');

            this.mainContext.fillStyle = this.grad;
        }
    }, {
        key: 'drawCircle',
        value: function drawCircle() {

            this.angle = 0;
            this.requestAnimationFrame = window.requestAnimationFrame;

            function drawCircle() {

                this.mainContext.clearRect(0, 0, this.winWidth, this.winHeight);

                // color in the background
                this.mainContext.fillStyle = this.grad;
                this.mainContext.fillRect(0, 0, this.winWidth, this.winHeight);

                // draw the circle
                this.mainContext.beginPath();

                var radius = 25 + 150 * Math.abs(Math.cos(this.angle));
                this.mainContext.arc(225, 225, radius, 0, Math.PI * 2, false);
                this.mainContext.closePath();

                // color in the circle
                this.mainContext.fillStyle = "#006699";
                this.mainContext.fill();

                this.angle += Math.PI / 64;

                requestAnimationFrame(boundFunction);
            }

            var boundFunction = drawCircle.bind(this);

            boundFunction();
        }
    }, {
        key: 'redraw',
        value: function redraw() {

            function listenForResize() {

                this.winWidth = window.innerWidth;
                this.winHeight = window.innerHeight;
                this.makeCanvas();
                this.drawGrad();
            }

            window.addEventListener('resize', listenForResize.bind(this));
        }
    }]);

    return Canvas;
}();

exports.default = Canvas;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _site = __webpack_require__(6);

var _site2 = _interopRequireDefault(_site);

var _social = __webpack_require__(33);

var _social2 = _interopRequireDefault(_social);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/////////////////////////////////////////////////
// Footer
/////////////////////////////////////////////////

var Footer = function () {
    function Footer() {
        _classCallCheck(this, Footer);

        this.makeFooter();
    }

    _createClass(Footer, [{
        key: 'makeFooter',
        value: function makeFooter() {

            var view = document.getElementById('view');
            var footer = document.createElement('footer');
            var siteTitleH1 = document.createElement('small');
            var siteTitleH1Text = document.createTextNode(_site2.default.copyright);

            var footerSocial = new _social2.default(footer);
            siteTitleH1.appendChild(siteTitleH1Text);
            footer.appendChild(siteTitleH1);

            var maWrap = document.getElementById('site');

            maWrap.appendChild(footer);
        }
    }]);

    return Footer;
}();

exports.default = Footer;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /////////////////////////////////////////////////
// Header
/////////////////////////////////////////////////

var _pages = __webpack_require__(5);

var _pages2 = _interopRequireDefault(_pages);

var _site = __webpack_require__(6);

var _site2 = _interopRequireDefault(_site);

var _status = __webpack_require__(0);

var _page = __webpack_require__(3);

var _page2 = _interopRequireDefault(_page);

var _icons = __webpack_require__(2);

var _icons2 = _interopRequireDefault(_icons);

var _utils = __webpack_require__(1);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/////////////////////////////////////////////////
// Header
/////////////////////////////////////////////////

var Header = function () {
  function Header(siteStatus) {
    _classCallCheck(this, Header);

    this.siteStatus = siteStatus;
    this.makeHeader();
    this.addListenerToMenuToggle();
  }

  _createClass(Header, [{
    key: 'makeHeader',
    value: function makeHeader() {

      var header = new _utils2.default({ type: 'header', class: 'header' }).build();
      var logoWrap = new _utils2.default({ type: 'section', class: 'header-logo-wrap' }).build();
      var makeIcon = new _icons2.default('triangle', 'icon-class').build();
      var headline = new _utils2.default({ type: 'h1', class: 'header-title', text: _site2.default.siteTitle }).build();
      var headerNav = new _utils2.default({ type: 'nav', class: 'header-nav' }).build();
      var menuUl = new _utils2.default({ type: 'ul', id: 'headerMenu', class: 'header-menu' }).build();
      var makeAWrap = new _utils2.default({ type: 'a', href: '#' }).build();
      var makeA = new _utils2.default({ type: 'a', id: 'mobileMenuTrigger', class: 'mobile-menu-trigger' }).build();

      var makeASpan = new _utils2.default({ type: 'span', class: 'mobile-menu-trigger-burger' }).build();
      var makeASpanText = new _utils2.default({ type: 'span', class: 'mobile-menu-trigger-text', text: 'Menu' }).build();

      makeA.appendChild(makeASpan);
      makeA.appendChild(makeASpanText);

      header.appendChild(makeAWrap);
      makeAWrap.appendChild(logoWrap);

      logoWrap.appendChild(makeIcon);
      logoWrap.appendChild(headline);

      header.appendChild(headerNav);
      headerNav.appendChild(menuUl);
      header.appendChild(makeA);
      this.loopPagesData(menuUl);

      var maWrap = document.getElementById('wrap-site');
      var theFirstChild = maWrap.firstChild;
      maWrap.insertBefore(header, theFirstChild);
    }
  }, {
    key: 'loopPagesData',
    value: function loopPagesData(menuUl) {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = _pages2.default[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var pageItem = _step.value;

          this.makeList(menuUl, pageItem);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }
  }, {
    key: 'makeList',
    value: function makeList(menuUl, pageItem) {

      var makeA = new _utils2.default({
        type: 'a',
        dataId: pageItem.pageId,
        href: '#' + pageItem.pageId,
        text: pageItem.name
      }).build();

      var makeLi = new _utils2.default({ type: 'li', class: 'header-menu-list' }).build();

      makeLi.appendChild(makeA);

      function listenToThis(event) {
        event.preventDefault();
        event.stopPropagation();
        _status.siteStatus.currentPage = makeA.getAttribute('data-id');
        new _page2.default();

        document.body.classList.remove('menu-open'

        // alert(siteStatus.currentPage)

        );var thumbClassArray = document.getElementsByClassName('header-menu-list');

        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = thumbClassArray[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var thumb = _step2.value;

            thumb.classList.remove('active');
            if (_status.siteStatus.currentPage === makeA.getAttribute('data-id')) {
              makeLi.classList.add('active');
            }
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2.return) {
              _iterator2.return();
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
          }
        }
      }

      makeLi.addEventListener('click', listenToThis);

      menuUl.appendChild(makeLi);

      if (_status.siteStatus.currentPage === makeA.getAttribute('data-id')) {
        makeLi.classList.add('active');
      }
    }
  }, {
    key: 'addListenerToMenuToggle',
    value: function addListenerToMenuToggle() {
      var triggered = document.getElementById('mobileMenuTrigger');
      var site = document.getElementById('site');

      triggered.addEventListener('click', function () {
        document.body.classList.toggle('menu-open');
        function clickListener() {
          document.body.classList.remove('menu-open');
          site.removeEventListener('click', clickListener);
        }
        site.addEventListener('click', clickListener);
      });
    }
  }]);

  return Header;
}();

exports.default = Header;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /////////////////////////////////////////////////
// Import
/////////////////////////////////////////////////

var _status = __webpack_require__(0);

var _page = __webpack_require__(3);

var _page2 = _interopRequireDefault(_page);

var _utils = __webpack_require__(1);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/////////////////////////////////////////////////
// Home
/////////////////////////////////////////////////

var Home = function () {
  function Home(pageObject) {
    _classCallCheck(this, Home);

    this.pageObject = pageObject;
    this.makeHome();
  }

  _createClass(Home, [{
    key: 'makeHome',
    value: function makeHome() {

      var maView = document.getElementById('view');
      var maSection = document.createElement('section');

      var maH1 = new _utils2.default({ type: 'h2', text: this.pageObject.title }).build();
      var maP = new _utils2.default({ type: 'p', text: this.pageObject.about }).build();
      var makeA = new _utils2.default({
        type: 'a',
        href: '#work',
        class: 'btn',
        text: 'Veiw'
      }).build();

      function listenToThis(event) {
        event.preventDefault();
        event.stopPropagation();
        _status.siteStatus.currentPage = 'work';
        new _page2.default();
      }
      makeA.addEventListener('click', listenToThis);

      maSection.appendChild(maH1);
      maSection.appendChild(maP);
      maSection.appendChild(makeA);
      maView.appendChild(maSection);
    }
  }]);

  return Home;
}();

exports.default = Home;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /////////////////////////////////////////////////
// MakePage
/////////////////////////////////////////////////

var _status = __webpack_require__(0);

var _portfolio = __webpack_require__(4);

var _portfolio2 = _interopRequireDefault(_portfolio);

var _utils = __webpack_require__(1);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/////////////////////////////////////////////////
// MakePage
/////////////////////////////////////////////////

var MakePortfolioPage = function () {
  function MakePortfolioPage() {
    _classCallCheck(this, MakePortfolioPage);

    this.maView = document.getElementById('portfolioWrap');
    this.loopPageObjects();
  }

  _createClass(MakePortfolioPage, [{
    key: 'loopPageObjects',
    value: function loopPageObjects() {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {

        for (var _iterator = _portfolio2.default[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var portfolioObject = _step.value;


          if (portfolioObject.ID === _status.siteStatus.currentPortfolioPage) {

            var mawrap = document.createElement('section');
            var maTitle = new _utils2.default({ type: 'h2', text: portfolioObject.title }).build();
            var maP = new _utils2.default({ type: 'p', text: portfolioObject.about }).build();

            var maImage = new Image('1001', '569');
            maImage.src = portfolioObject.image.src;

            mawrap.appendChild(maTitle);
            mawrap.appendChild(maP);
            mawrap.appendChild(maImage);
            this.maView.appendChild(mawrap);
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      this.setPageIds();
    }
  }, {
    key: 'setPageIds',
    value: function setPageIds() {

      this.maView.firstChild.setAttribute('id', 'first-item');
      this.maView.firstChild.classList.remove('last-item');
      this.maView.firstChild.classList.add('view-item-portfolio', 'first-item', 'solo');

      if (this.maView.childNodes.length > 1) {

        this.maView.firstChild.remove();
        if (this.maView.childNodes.length > 2) {}

        this.maView.firstChild.setAttribute('id', 'first-item');
        this.maView.firstChild.classList.remove('last-item', 'solo');
        this.maView.firstChild.classList.add('view-item-portfolio', 'first-item');

        this.maView.lastChild.setAttribute('id', 'last-item');
        this.maView.lastChild.classList.remove('first-item', 'solo');
        this.maView.lastChild.classList.add('view-item-portfolio', 'last-item');
      }
    }
  }]);

  return MakePortfolioPage;
}();

exports.default = MakePortfolioPage;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /////////////////////////////////////////////////
// Imports
/////////////////////////////////////////////////

var _portfolio = __webpack_require__(4);

var _portfolio2 = _interopRequireDefault(_portfolio);

var _PortfolioItem = __webpack_require__(29);

var _PortfolioItem2 = _interopRequireDefault(_PortfolioItem);

var _status = __webpack_require__(0);

var _utils = __webpack_require__(1);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/////////////////////////////////////////////////
// Work
/////////////////////////////////////////////////

var Work = function () {
  function Work(pageObject) {
    _classCallCheck(this, Work);

    this.pageObject = pageObject;
    this.maView = document.getElementById('view');
    this.maSection = document.createElement('section');
    this.maThumbnailWrap = document.createElement('div');
    this.portfolioWrap = document.createElement('div');
    this.makeWrap();
  }

  _createClass(Work, [{
    key: 'makeWrap',
    value: function makeWrap() {

      this.maThumbnailWrap.setAttribute('class', 'portfolio-thumbnails');
      this.maSection.appendChild(this.maThumbnailWrap);

      this.portfolioWrap.setAttribute('id', 'portfolioWrap');
      this.portfolioWrap.setAttribute('class', 'portfolio-wrap');
      this.maSection.appendChild(this.portfolioWrap);

      this.loopPortfolioData();

      this.maView.appendChild(this.maSection);

      var maMakePortfolioPage = new _PortfolioItem2.default();
    }
  }, {
    key: 'loopPortfolioData',
    value: function loopPortfolioData() {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = _portfolio2.default[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var PortfolioObject = _step.value;

          this.makeThumbnails(PortfolioObject);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }
  }, {
    key: 'makeThumbnails',
    value: function makeThumbnails(PortfolioObject) {

      var maDiv = new _utils2.default({
        type: 'div',
        class: 'portfolio-thumbnail',
        dataId: PortfolioObject.ID,
        text: PortfolioObject.name
      }).build();
      this.maThumbnailWrap.appendChild(maDiv);

      function listenToThis(event) {
        // event.preventDefault()
        event.stopPropagation();
        _status.siteStatus.currentPortfolioPage = maDiv.getAttribute('data-id');
        new _PortfolioItem2.default();

        var thumbClassArray = document.getElementsByClassName('portfolio-thumbnail');

        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = thumbClassArray[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var thumb = _step2.value;

            thumb.classList.remove('active');
            if (_status.siteStatus.currentPortfolioPage == maDiv.getAttribute('data-id')) {
              // alert(maDiv)
              maDiv.classList.add('active');
            }
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2.return) {
              _iterator2.return();
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
          }
        }
      }

      maDiv.addEventListener('click', listenToThis);

      if (_status.siteStatus.currentPortfolioPage === maDiv.getAttribute('data-id')) {
        maDiv.classList.add('active');
      }
    }
  }, {
    key: 'addListeners',
    value: function addListeners() {}
  }]);

  return Work;
}();

exports.default = Work;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /////////////////////////////////////////////////
// Header
/////////////////////////////////////////////////

var _utils = __webpack_require__(1);

var _utils2 = _interopRequireDefault(_utils);

var _status = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/////////////////////////////////////////////////
// The View
/////////////////////////////////////////////////

var View = function () {
  function View() {
    _classCallCheck(this, View);

    this.makeView();
    this.checkMobileOrDesktop();
  }

  _createClass(View, [{
    key: 'makeView',
    value: function makeView() {
      var wrapSite = new _utils2.default({ type: 'div', id: 'wrap-site', class: 'wrap-site' }).build();
      var site = new _utils2.default({ type: 'div', id: 'site', class: 'site' }).build();
      var wrapView = new _utils2.default({ type: 'div', id: 'wrap-view', class: 'wrap-view' }).build();
      var view = new _utils2.default({ type: 'div', id: 'view', class: 'view' }).build();

      wrapView.appendChild(view);
      site.appendChild(wrapView);
      wrapSite.appendChild(site);
      document.body.appendChild(wrapSite);
    }
  }, {
    key: 'checkMobileOrDesktop',
    value: function checkMobileOrDesktop() {

      var mediaQueryList = window.matchMedia('(max-width: 600px)');

      document.body.classList.remove('mobile');
      document.body.classList.remove('mobile');
      if (mediaQueryList.matches) {
        document.body.classList.add('mobile');
      }

      console.log(mediaQueryList);
      function handleMediaChange(event) {
        this.mobile = event.matches;
        document.body.classList.remove('mobile');
        if (event.matches) {
          document.body.classList.add('mobile');
        } else {
          document.body.classList.remove('mobile');
        }
      }
      mediaQueryList.addListener(handleMediaChange.bind(this));
      handleMediaChange.bind(this);
    }
  }]);

  return View;
}();

exports.default = View;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /////////////////////////////////////////////////
// Imports
/////////////////////////////////////////////////

var _skills = __webpack_require__(22);

var _skills2 = _interopRequireDefault(_skills);

var _status = __webpack_require__(0);

var _utils = __webpack_require__(1);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/////////////////////////////////////////////////
// Skills
/////////////////////////////////////////////////

var Skills = function () {
    function Skills(pageObject) {
        _classCallCheck(this, Skills);

        this.pageObject = pageObject;
        this.skillsUl;
        this.makeSkills();
    }

    _createClass(Skills, [{
        key: 'makeSkills',
        value: function makeSkills() {

            var maView = document.getElementById('view');
            var maSection = document.createElement('section');

            var maH1 = new _utils2.default({ type: 'h2', text: this.pageObject.title }).build();
            var skillsP = new _utils2.default({ type: 'p', text: this.pageObject.about }).build();
            var skillsUl = new _utils2.default({ type: 'ul', class: 'skills-list' }).build();
            var skillsIntro = new _utils2.default({ type: 'section', class: 'skills-intro' }).build();

            skillsIntro.appendChild(maH1);
            skillsIntro.appendChild(skillsP);

            maSection.appendChild(skillsIntro);

            this.loopSkillsData(skillsUl);

            maSection.appendChild(skillsUl);
            maView.appendChild(maSection);
        }
    }, {
        key: 'loopSkillsData',
        value: function loopSkillsData(skillsUl) {
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = _skills2.default[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var SKillsObject = _step.value;

                    var thisSkill = new _utils2.default({ type: 'li', text: SKillsObject.skill }).build();
                    skillsUl.appendChild(thisSkill);
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
        }
    }]);

    return Skills;
}();

exports.default = Skills;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /////////////////////////////////////////////////
// Social
/////////////////////////////////////////////////

var _utils = __webpack_require__(1);

var _utils2 = _interopRequireDefault(_utils);

var _social = __webpack_require__(23);

var _social2 = _interopRequireDefault(_social);

var _icons = __webpack_require__(2);

var _icons2 = _interopRequireDefault(_icons);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/////////////////////////////////////////////////
// Social
/////////////////////////////////////////////////

var Social = function () {
    function Social(appendHere) {
        _classCallCheck(this, Social);

        this.appendHere = appendHere;
        this.makeSocial();
    }

    _createClass(Social, [{
        key: 'makeSocial',
        value: function makeSocial() {

            var linksWrap = new _utils2.default({ type: 'div', id: 'social', class: 'social' }).build();
            var nav = new _utils2.default({ type: 'nav', class: 'social-nav' }).build();

            linksWrap.appendChild(nav);

            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = _social2.default[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var socialObject = _step.value;


                    var links = new _utils2.default({ type: 'a', class: 'social-link', href: socialObject.link }).build();
                    var makeIcon = new _icons2.default(socialObject.name, 'icon-class').build();
                    links.appendChild(makeIcon);
                    nav.appendChild(links);
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            this.appendHere.appendChild(linksWrap);
        }
    }]);

    return Social;
}();

exports.default = Social;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/////////////////////////////////////////////////
// Github
/////////////////////////////////////////////////

var Github = function () {
  function Github() {
    _classCallCheck(this, Github);

    this.githubUrl = 'https://api.github.com/users/gotpop';
    this.getGithubUrl();
  }

  _createClass(Github, [{
    key: 'getGithubUrl',
    value: function getGithubUrl() {

      fetch(this.githubUrl).then(function (response) {
        console.log(response);
        return response;
      });
    }
  }]);

  return Github;
}();

exports.default = Github;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(21);

__webpack_require__(17);

/////////////////////////////////////////////////
// Webpack entry point
// Require site files here
/////////////////////////////////////////////////

// Require static files
__webpack_require__(18);
__webpack_require__(19);
__webpack_require__(20);

// Imports


// // Import JS

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(37)(undefined);
// imports


// module
exports.push([module.i, "/* http://meyerweb.com/eric/tools/css/reset/\r\n   v2.0 | 20110126\r\n   License: none (public domain)\r\n*/\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline; }\n\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n  display: block; }\n\nbody {\n  line-height: 1; }\n\nol, ul {\n  list-style: none; }\n\nblockquote, q {\n  quotes: none; }\n\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: '';\n  content: none; }\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n\n* {\n  box-sizing: border-box; }\n\nhtml {\n  overflow-y: scroll;\n  overflow-x: hidden; }\n\nbody {\n  min-height: 100vh;\n  display: flex;\n  justify-content: start;\n  align-items: center;\n  flex-direction: row;\n  flex-wrap: wrap;\n  background: #eee;\n  max-width: 100%;\n  overflow-x: hidden; }\n\n.site {\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  align-items: start;\n  min-width: 100%; }\n\n.menu-open .site {\n  filter: blur(2px);\n  transition: all .6s ease;\n  transition-delay: .6s; }\n\nimg {\n  margin-top: 2rem;\n  max-width: 100%;\n  height: auto; }\n\n.wrap-site {\n  max-width: 100%;\n  flex: 1 1 auto; }\n  .mobile .wrap-site {\n    max-width: 100%;\n    display: flex;\n    transform: translateX(-200px);\n    transition: all .5s ease; }\n  .mobile.menu-open .wrap-site {\n    transform: translateX(0px); }\n\n@font-face {\n  font-family: 'Code-Pro-Black-LC';\n  src: url(" + __webpack_require__(7) + ");\n  src: url(" + __webpack_require__(7) + "?#iefix) format(\"embedded-opentype\"), url(" + __webpack_require__(40) + ") format(\"woff2\"), url(" + __webpack_require__(39) + ") format(\"woff\"), url(" + __webpack_require__(38) + ") format(\"truetype\"); }\n\n@font-face {\n  font-family: 'Code-Pro-Black';\n  src: url(" + __webpack_require__(8) + ");\n  src: url(" + __webpack_require__(8) + "?#iefix) format(\"embedded-opentype\"), url(" + __webpack_require__(43) + ") format(\"woff2\"), url(" + __webpack_require__(42) + ") format(\"woff\"), url(" + __webpack_require__(41) + ") format(\"truetype\"); }\n\n@font-face {\n  font-family: 'Code-Pro-Demo';\n  src: url(" + __webpack_require__(9) + ");\n  src: url(" + __webpack_require__(9) + "?#iefix) format(\"embedded-opentype\"), url(" + __webpack_require__(46) + ") format(\"woff2\"), url(" + __webpack_require__(45) + ") format(\"woff\"), url(" + __webpack_require__(44) + ") format(\"truetype\"); }\n\n@font-face {\n  font-family: 'Code-Pro-Bold-LC';\n  src: url(" + __webpack_require__(10) + ");\n  src: url(" + __webpack_require__(10) + "?#iefix) format(\"embedded-opentype\"), url(" + __webpack_require__(49) + ") format(\"woff2\"), url(" + __webpack_require__(48) + ") format(\"woff\"), url(" + __webpack_require__(47) + ") format(\"truetype\"); }\n\n@font-face {\n  font-family: 'Code-Pro-Light-LC';\n  src: url(" + __webpack_require__(11) + ");\n  src: url(" + __webpack_require__(11) + "?#iefix) format(\"embedded-opentype\"), url(" + __webpack_require__(52) + ") format(\"woff2\"), url(" + __webpack_require__(51) + ") format(\"woff\"), url(" + __webpack_require__(50) + ") format(\"truetype\"); }\n\n@font-face {\n  font-family: 'Code-Pro-Light-Demo';\n  src: url(" + __webpack_require__(12) + ");\n  src: url(" + __webpack_require__(12) + "?#iefix) format(\"embedded-opentype\"), url(" + __webpack_require__(55) + ") format(\"woff2\"), url(" + __webpack_require__(54) + ") format(\"woff\"), url(" + __webpack_require__(53) + ") format(\"truetype\"); }\n\n@font-face {\n  font-family: 'Code-Pro-LC';\n  src: url(" + __webpack_require__(13) + ");\n  src: url(" + __webpack_require__(13) + "?#iefix) format(\"embedded-opentype\"), url(" + __webpack_require__(58) + ") format(\"woff2\"), url(" + __webpack_require__(57) + ") format(\"woff\"), url(" + __webpack_require__(56) + ") format(\"truetype\"); }\n\n@font-face {\n  font-family: 'Code-Pro-Light';\n  src: url(" + __webpack_require__(14) + ");\n  src: url(" + __webpack_require__(14) + "?#iefix) format(\"embedded-opentype\"), url(" + __webpack_require__(61) + ") format(\"woff2\"), url(" + __webpack_require__(60) + ") format(\"woff\"), url(" + __webpack_require__(59) + ") format(\"truetype\"); }\n\n@font-face {\n  font-family: 'Code-Pro-Bold';\n  src: url(" + __webpack_require__(15) + ");\n  src: url(" + __webpack_require__(15) + "?#iefix) format(\"embedded-opentype\"), url(" + __webpack_require__(64) + ") format(\"woff2\"), url(" + __webpack_require__(63) + ") format(\"woff\"), url(" + __webpack_require__(62) + ") format(\"truetype\"); }\n\n@font-face {\n  font-family: 'Code-Pro';\n  src: url(" + __webpack_require__(16) + ");\n  src: url(" + __webpack_require__(16) + "?#iefix) format(\"embedded-opentype\"), url(" + __webpack_require__(67) + ") format(\"woff2\"), url(" + __webpack_require__(66) + ") format(\"woff\"), url(" + __webpack_require__(65) + ") format(\"truetype\"); }\n\na {\n  text-decoration: none; }\n\nhtml {\n  font-family: 'Code-Pro-LC';\n  font-size: 16px; }\n\nh1 {\n  font-family: 'Code-Pro-Light';\n  font-size: 2rem;\n  line-height: 1.5em; }\n\nh2 {\n  font-family: 'Code-Pro-Light';\n  line-height: 1.5em;\n  font-size: 2rem; }\n\nh1, h2, h3, h4, h5, h6 {\n  margin-bottom: 1em; }\n\np {\n  line-height: 1.5em; }\n\nli {\n  line-height: 1.5em; }\n\n.btn {\n  padding: 1rem 2rem;\n  background: red;\n  display: flex;\n  margin: 1rem 0;\n  transition: all .6s ease;\n  color: #fff;\n  max-width: 300px; }\n  .mobile .btn {\n    max-width: 100%; }\n\n.header {\n  flex: 1 1 80%;\n  padding: 2rem;\n  background: rgba(255, 255, 255, 0.5);\n  color: #999;\n  text-align: center;\n  display: flex;\n  justify-content: space-between;\n  position: relative;\n  z-index: 9999;\n  align-items: center; }\n  .mobile .header {\n    justify-content: flex-start;\n    min-height: 100vh;\n    display: flex;\n    flex-direction: column;\n    width: 200px;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start; }\n\n.header-logo-wrap {\n  display: flex; }\n  .mobile .header-logo-wrap {\n    flex-direction: column;\n    align-items: center; }\n\n.mobile .header-title {\n  margin-bottom: 1rem; }\n\n.header-menu {\n  display: flex;\n  margin: 1rem; }\n  .mobile .header-menu {\n    flex-direction: column; }\n\n.header-menu-list {\n  display: flex;\n  margin: 0; }\n  .mobile .header-menu-list {\n    margin-bottom: 1rem; }\n  .header-menu-list a {\n    flex: 1 1 auto;\n    padding: 1rem 2rem;\n    cursor: pointer;\n    color: #3d3d3d; }\n    .header-menu-list a:hover {\n      transition: all 0.5s ease;\n      background: #999; }\n  .header-menu-list.active a {\n    color: #fff;\n    background: red; }\n\n.header .icon-class {\n  max-height: 50px;\n  max-width: 50px; }\n  .header .icon-class svg {\n    width: 100%; }\n  .header .icon-class:hover svg {\n    fill: red; }\n\n.mobile-menu-trigger {\n  display: none;\n  background: #fff;\n  padding: 1rem;\n  position: absolute;\n  top: 0;\n  right: -124px; }\n  .mobile .mobile-menu-trigger {\n    display: flex; }\n\n.mobile-menu-trigger-burger, .mobile-menu-trigger-burger:before, .mobile-menu-trigger-burger:after {\n  cursor: pointer;\n  border-radius: 1px;\n  height: 5px;\n  width: 30px;\n  background: #999;\n  position: absolute;\n  top: 20px;\n  display: block;\n  content: \"\";\n  transition: all 300ms ease-in-out; }\n\n.mobile-menu-trigger-burger:before {\n  top: -10px; }\n\n.mobile-menu-trigger-burger:after {\n  top: 10px; }\n\n.menu-open .mobile-menu-trigger-burger {\n  background-color: transparent; }\n\n.menu-open .mobile-menu-trigger-burger:before, .menu-open .mobile-menu-trigger-burger:after {\n  top: 0; }\n\n.menu-open .mobile-menu-trigger-burger:before {\n  -ms-transform: rotate(45deg);\n  transform: rotate(45deg); }\n\n.menu-open .mobile-menu-trigger-burger:after {\n  -ms-transform: rotate(-45deg);\n  transform: rotate(-45deg); }\n\n.mobile-menu-trigger-text {\n  display: block;\n  margin-left: 3rem; }\n\nfooter {\n  flex: 1 1 100%;\n  padding: 2rem;\n  background: white;\n  color: #999;\n  text-align: center;\n  align-self: flex-end; }\n\ncanvas {\n  background: white;\n  position: fixed;\n  left: 0;\n  top: 0;\n  z-index: -1; }\n\n.wrap-view {\n  min-width: 100vw;\n  min-height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n\n.view {\n  display: flex;\n  max-width: 800px; }\n\n.view-item {\n  margin: 2rem; }\n\n.skills-intro {\n  margin: .5rem; }\n\n.skills-list {\n  display: flex;\n  flex-wrap: wrap;\n  color: #999;\n  margin-top: 2rem; }\n  .skills-list li {\n    font-size: 1rem;\n    padding: 1em;\n    background: #fff;\n    flex: 1 1 40%;\n    margin: .5rem; }\n    .skills-list li:hover {\n      background: #eee;\n      transition: all .5s ease; }\n\n.social svg {\n  max-width: 100px;\n  fill: #999; }\n\n.social {\n  margin: 2rem; }\n\n.social-link {\n  margin: 1rem; }\n\n.portfolio-thumbnails {\n  display: flex;\n  flex-wrap: wrap; }\n\n.portfolio-thumbnail {\n  background: #fff;\n  padding: 1em 2em;\n  margin: .5rem;\n  cursor: pointer;\n  flex: 1 1 auto;\n  text-align: center;\n  transition: all .5s ease; }\n  .portfolio-thumbnail.active {\n    color: red; }\n\n.portfolio-wrap {\n  padding: .5rem;\n  display: flex;\n  min-height: 60vh; }\n", ""]);

// exports


/***/ }),
/* 37 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "cefac823a3bcc9fb7708a752585a3493.ttf";

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "e750cae68691b58dc6e3841d08e55bab.woff";

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "189ebc16023ca03e303b8027ba536be8.woff2";

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "a938b8719f8a8e7efb9ae8b925553c0e.ttf";

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "2b3a0cfd3a0cdfca6c3b5edcc5d5677c.woff";

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "c8d4b58f6490e02cb48da405a07d6286.woff2";

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "473033ca98ef6ff948b83a324a33a310.ttf";

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "69a48a6fe15efa1392b8f07441343ecb.woff";

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "7cdf361814cf6cd866a83d576105e2e7.woff2";

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "016a0d097a1de742bb8fcdc82c6e7b92.ttf";

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "7921b5a1b623576b76c1c6472a144a00.woff";

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "76a995b19bc117956d183992d515a7b9.woff2";

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "0aa9b56e4d799dc938a8114cea6ee0ae.ttf";

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "f681b78c5af78963752c242b4ef7d9a1.woff";

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "60341e5d5a9fed64f2620b24a67be61f.woff2";

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "a4954681eb455b2e36aa03462bf888f5.ttf";

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "493209fe1c2e776090b1c41764d98da0.woff";

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "6f6803f6404448ddb2f18efc4d4eeb44.woff2";

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "9a36be08686d77c009bff987b477e6ab.ttf";

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "a47e8aee76a67f1c9ac63575f37959c7.woff";

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "b227d508199b2e45d6b326e17fbfaf03.woff2";

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "f8653f40a1dddd10ebc92ca2eccb009e.ttf";

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "663c8dc148f77ad35fdf267d3406b86e.woff";

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "c00fe940d5b2b137b959fab62e0f42e6.woff2";

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "f3ca95f58b6add22407734870f0ae82f.ttf";

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "6a1f8ed70c16e2408180aa2a31666153.woff";

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ff6971bd967dc1339c11ffb8141547e6.woff2";

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "2cbd3d717b1de26774ec2bf7a4b2b7ce.ttf";

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "441defac9709d17d89547d7aa57d9257.woff";

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "7dd5e306c10181a8c611ea9b903e2935.woff2";

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		// Test for IE <= 9 as proposed by Browserhacks
		// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
		// Tests for existence of standard globals is to allow style-loader 
		// to operate correctly into non-standard environments
		// @see https://github.com/webpack-contrib/style-loader/issues/177
		return window && document && document.all && !window.atob;
	}),
	getElement = (function(fn) {
		var memo = {};
		return function(selector) {
			if (typeof memo[selector] === "undefined") {
				memo[selector] = fn.call(this, selector);
			}
			return memo[selector]
		};
	})(function (styleTarget) {
		return document.querySelector(styleTarget)
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [],
	fixUrls = __webpack_require__(69);

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (typeof options.insertInto === "undefined") options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list, options);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list, options) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var styleTarget = getElement(options.insertInto)
	if (!styleTarget) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			styleTarget.insertBefore(styleElement, styleTarget.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			styleTarget.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			styleTarget.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		styleTarget.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	options.attrs.type = "text/css";

	attachTagAttrs(styleElement, options.attrs);
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	attachTagAttrs(linkElement, options.attrs);
	insertStyleElement(options, linkElement);
	return linkElement;
}

function attachTagAttrs(element, attrs) {
	Object.keys(attrs).forEach(function (key) {
		element.setAttribute(key, attrs[key]);
	});
}

function addStyle(obj, options) {
	var styleElement, update, remove, transformResult;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    transformResult = options.transform(obj.css);
	    
	    if (transformResult) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = transformResult;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css. 
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement, options);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/* If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
	and there is no publicPath defined then lets turn convertToAbsoluteUrls
	on by default.  Otherwise default to the convertToAbsoluteUrls option
	directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls){
		css = fixUrls(css);
	}

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 69 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 70 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' version='1.1' x='0px' y='0px' viewBox='0 0 100 125' enable-background='new 0 0 100 100' xml:space='preserve'%3E%3Cg%3E%3Cg%3E%3Cg%3E%3Cpath d='M35.344,74.126c-16.173,0-29.33-13.158-29.33-29.33s13.158-29.33,29.33-29.33c16.173,0,29.33,13.158,29.33,29.33 S51.517,74.126,35.344,74.126z M35.344,15.942c-15.909,0-28.853,12.943-28.853,28.853s12.943,28.853,28.853,28.853 s28.853-12.943,28.853-28.853S51.253,15.942,35.344,15.942z'/%3E%3C/g%3E%3Cg%3E%3Cpath d='M64.003,74.126c-16.173,0-29.33-13.158-29.33-29.33s13.158-29.33,29.33-29.33s29.33,13.158,29.33,29.33 S80.176,74.126,64.003,74.126z M64.003,15.942c-15.909,0-28.853,12.943-28.853,28.853s12.943,28.853,28.853,28.853 s28.853-12.943,28.853-28.853S79.912,15.942,64.003,15.942z'/%3E%3C/g%3E%3C/g%3E%3C/g%3E%3Ctext x='0' y='115' fill='%23000000' font-size='5px' font-weight='bold' font-family=''Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif'%3ECreated by Cecilia Morales%3C/text%3E%3Ctext x='0' y='120' fill='%23000000' font-size='5px' font-weight='bold' font-family=''Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif'%3Efrom the Noun Project%3C/text%3E%3C/svg%3E"

/***/ }),
/* 71 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' version='1.1' x='0px' y='0px' viewBox='0 0 100 125' enable-background='new 0 0 100 100' xml:space='preserve'%3E%3Cg%3E%3Cg%3E%3Cg%3E%3Cpath d='M50.367,6.228c-0.075,0-0.149-0.032-0.204-0.083c-0.052-0.055-0.083-0.129-0.083-0.204c0-0.078,0.032-0.15,0.086-0.204 c0.103-0.106,0.296-0.106,0.405,0c0.055,0.055,0.083,0.126,0.083,0.204c0,0.075-0.029,0.15-0.083,0.204 C50.516,6.196,50.442,6.228,50.367,6.228z'/%3E%3C/g%3E%3Cg%3E%3Cpath d='M50.079,48.772c0-0.158,0.129-0.288,0.288-0.288l0,0c0.158,0,0.288,0.129,0.288,0.288l0,0 c0,0.158-0.129,0.288-0.288,0.288l0,0C50.209,49.06,50.079,48.93,50.079,48.772z M50.079,47.617c0-0.161,0.129-0.288,0.288-0.288 l0,0c0.158,0,0.288,0.126,0.288,0.288l0,0c0,0.158-0.129,0.288-0.288,0.288l0,0C50.209,47.904,50.079,47.775,50.079,47.617z M50.079,46.458c0-0.158,0.129-0.288,0.288-0.288l0,0c0.158,0,0.288,0.129,0.288,0.288l0,0c0,0.158-0.129,0.288-0.288,0.288l0,0 C50.209,46.745,50.079,46.616,50.079,46.458z M50.079,45.299c0-0.158,0.129-0.285,0.288-0.285l0,0 c0.158,0,0.288,0.126,0.288,0.285l0,0c0,0.161-0.129,0.288-0.288,0.288l0,0C50.209,45.587,50.079,45.46,50.079,45.299z M50.079,44.143c0-0.158,0.129-0.288,0.288-0.288l0,0c0.158,0,0.288,0.129,0.288,0.288l0,0c0,0.158-0.129,0.288-0.288,0.288l0,0 C50.209,44.431,50.079,44.301,50.079,44.143z M50.079,42.985c0-0.158,0.129-0.288,0.288-0.288l0,0 c0.158,0,0.288,0.129,0.288,0.288l0,0c0,0.158-0.129,0.288-0.288,0.288l0,0C50.209,43.272,50.079,43.143,50.079,42.985z M50.079,41.829c0-0.161,0.129-0.288,0.288-0.288l0,0c0.158,0,0.288,0.126,0.288,0.288l0,0c0,0.158-0.129,0.285-0.288,0.285l0,0 C50.209,42.113,50.079,41.987,50.079,41.829z M50.079,40.67c0-0.158,0.129-0.288,0.288-0.288l0,0 c0.158,0,0.288,0.129,0.288,0.288l0,0c0,0.158-0.129,0.288-0.288,0.288l0,0C50.209,40.958,50.079,40.828,50.079,40.67z M50.079,39.511c0-0.158,0.129-0.288,0.288-0.288l0,0c0.158,0,0.288,0.129,0.288,0.288l0,0c0,0.161-0.129,0.288-0.288,0.288l0,0 C50.209,39.799,50.079,39.672,50.079,39.511z M50.079,38.355c0-0.161,0.129-0.288,0.288-0.288l0,0 c0.158,0,0.288,0.126,0.288,0.288l0,0c0,0.158-0.129,0.288-0.288,0.288l0,0C50.209,38.643,50.079,38.514,50.079,38.355z M50.079,37.197c0-0.158,0.129-0.288,0.288-0.288l0,0c0.158,0,0.288,0.129,0.288,0.288l0,0c0,0.158-0.129,0.288-0.288,0.288l0,0 C50.209,37.484,50.079,37.355,50.079,37.197z M50.079,36.041c0-0.161,0.129-0.29,0.288-0.29l0,0c0.158,0,0.288,0.129,0.288,0.29 l0,0c0,0.158-0.129,0.285-0.288,0.285l0,0C50.209,36.325,50.079,36.199,50.079,36.041z M50.079,34.882 c0-0.158,0.129-0.288,0.288-0.288l0,0c0.158,0,0.288,0.129,0.288,0.288l0,0c0,0.158-0.129,0.288-0.288,0.288l0,0 C50.209,35.17,50.079,35.04,50.079,34.882z M50.079,33.723c0-0.158,0.129-0.288,0.288-0.288l0,0c0.158,0,0.288,0.129,0.288,0.288 l0,0c0,0.158-0.129,0.288-0.288,0.288l0,0C50.209,34.011,50.079,33.882,50.079,33.723z M50.079,32.568 c0-0.161,0.129-0.29,0.288-0.29l0,0c0.158,0,0.288,0.129,0.288,0.29l0,0c0,0.158-0.129,0.288-0.288,0.288l0,0 C50.209,32.855,50.079,32.726,50.079,32.568z M50.079,31.409c0-0.158,0.129-0.288,0.288-0.288l0,0 c0.158,0,0.288,0.129,0.288,0.288l0,0c0,0.158-0.129,0.288-0.288,0.288l0,0C50.209,31.696,50.079,31.567,50.079,31.409z M50.079,30.25c0-0.158,0.129-0.288,0.288-0.288l0,0c0.158,0,0.288,0.129,0.288,0.288l0,0c0,0.161-0.129,0.288-0.288,0.288l0,0 C50.209,30.538,50.079,30.411,50.079,30.25z M50.079,29.094c0-0.161,0.129-0.288,0.288-0.288l0,0 c0.158,0,0.288,0.126,0.288,0.288l0,0c0,0.158-0.129,0.288-0.288,0.288l0,0C50.209,29.382,50.079,29.252,50.079,29.094z M50.079,27.936c0-0.158,0.129-0.288,0.288-0.288l0,0c0.158,0,0.288,0.129,0.288,0.288l0,0c0,0.158-0.129,0.288-0.288,0.288l0,0 C50.209,28.223,50.079,28.094,50.079,27.936z M50.079,26.777c0-0.158,0.129-0.288,0.288-0.288l0,0 c0.158,0,0.288,0.129,0.288,0.288l0,0c0,0.161-0.129,0.288-0.288,0.288l0,0C50.209,27.064,50.079,26.938,50.079,26.777z M50.079,25.621c0-0.161,0.129-0.288,0.288-0.288l0,0c0.158,0,0.288,0.126,0.288,0.288l0,0c0,0.158-0.129,0.288-0.288,0.288l0,0 C50.209,25.909,50.079,25.779,50.079,25.621z M50.079,24.462c0-0.158,0.129-0.288,0.288-0.288l0,0 c0.158,0,0.288,0.129,0.288,0.288l0,0c0,0.158-0.129,0.288-0.288,0.288l0,0C50.209,24.75,50.079,24.62,50.079,24.462z M50.079,23.306c0-0.161,0.129-0.29,0.288-0.29l0,0c0.158,0,0.288,0.129,0.288,0.29l0,0c0,0.158-0.129,0.288-0.288,0.288l0,0 C50.209,23.594,50.079,23.465,50.079,23.306z M50.079,22.148c0-0.161,0.129-0.288,0.288-0.288l0,0 c0.158,0,0.288,0.127,0.288,0.288l0,0c0,0.158-0.129,0.288-0.288,0.288l0,0C50.209,22.435,50.079,22.306,50.079,22.148z M50.079,20.989c0-0.158,0.129-0.288,0.288-0.288l0,0c0.158,0,0.288,0.129,0.288,0.288l0,0c0,0.161-0.129,0.288-0.288,0.288l0,0 C50.209,21.277,50.079,21.15,50.079,20.989z M50.079,19.83c0-0.158,0.129-0.285,0.288-0.285l0,0c0.158,0,0.288,0.126,0.288,0.285 l0,0c0,0.161-0.129,0.29-0.288,0.29l0,0C50.209,20.121,50.079,19.991,50.079,19.83z M50.079,18.675 c0-0.158,0.129-0.288,0.288-0.288l0,0c0.158,0,0.288,0.129,0.288,0.288l0,0c0,0.158-0.129,0.288-0.288,0.288l0,0 C50.209,18.962,50.079,18.833,50.079,18.675z M50.079,17.516c0-0.158,0.129-0.288,0.288-0.288l0,0 c0.158,0,0.288,0.129,0.288,0.288l0,0c0,0.158-0.129,0.288-0.288,0.288l0,0C50.209,17.803,50.079,17.674,50.079,17.516z M50.079,16.36c0-0.161,0.129-0.288,0.288-0.288l0,0c0.158,0,0.288,0.126,0.288,0.288l0,0c0,0.158-0.129,0.288-0.288,0.288l0,0 C50.209,16.647,50.079,16.518,50.079,16.36z M50.079,15.201c0-0.158,0.129-0.288,0.288-0.288l0,0 c0.158,0,0.288,0.129,0.288,0.288l0,0c0,0.158-0.129,0.288-0.288,0.288l0,0C50.209,15.489,50.079,15.359,50.079,15.201z M50.079,14.042c0-0.158,0.129-0.288,0.288-0.288l0,0c0.158,0,0.288,0.129,0.288,0.288l0,0c0,0.161-0.129,0.288-0.288,0.288l0,0 C50.209,14.33,50.079,14.203,50.079,14.042z M50.079,12.887c0-0.161,0.129-0.288,0.288-0.288l0,0 c0.158,0,0.288,0.126,0.288,0.288l0,0c0,0.158-0.129,0.288-0.288,0.288l0,0C50.209,13.174,50.079,13.045,50.079,12.887z M50.079,11.728c0-0.158,0.129-0.288,0.288-0.288l0,0c0.158,0,0.288,0.129,0.288,0.288l0,0c0,0.158-0.129,0.288-0.288,0.288l0,0 C50.209,12.015,50.079,11.886,50.079,11.728z M50.079,10.569c0-0.158,0.129-0.285,0.288-0.285l0,0 c0.158,0,0.288,0.126,0.288,0.285l0,0c0,0.161-0.129,0.288-0.288,0.288l0,0C50.209,10.857,50.079,10.73,50.079,10.569z M50.079,9.413c0-0.158,0.129-0.288,0.288-0.288l0,0c0.158,0,0.288,0.129,0.288,0.288l0,0c0,0.158-0.129,0.288-0.288,0.288l0,0 C50.209,9.701,50.079,9.572,50.079,9.413z M50.079,8.255c0-0.158,0.129-0.288,0.288-0.288l0,0c0.158,0,0.288,0.129,0.288,0.288 l0,0c0,0.158-0.129,0.288-0.288,0.288l0,0C50.209,8.542,50.079,8.413,50.079,8.255z M50.079,7.099 c0-0.161,0.129-0.288,0.288-0.288l0,0c0.158,0,0.288,0.126,0.288,0.288l0,0c0,0.158-0.129,0.288-0.288,0.288l0,0 C50.209,7.386,50.079,7.257,50.079,7.099z'/%3E%3C/g%3E%3Cg%3E%3Cpath d='M50.367,50.219c-0.075,0-0.149-0.032-0.201-0.083c-0.055-0.055-0.086-0.129-0.086-0.204c0-0.078,0.032-0.15,0.086-0.204 c0.103-0.106,0.296-0.106,0.405,0c0.055,0.054,0.083,0.129,0.083,0.204s-0.029,0.149-0.083,0.204 C50.516,50.187,50.442,50.219,50.367,50.219z'/%3E%3C/g%3E%3C/g%3E%3Cg%3E%3Cg%3E%3Cpath d='M12.147,72.07c-0.075,0-0.149-0.029-0.204-0.083c-0.054-0.055-0.083-0.129-0.083-0.204c0-0.075,0.029-0.15,0.083-0.204 c0.106-0.106,0.302-0.106,0.408,0c0.052,0.054,0.083,0.126,0.083,0.204c0,0.075-0.032,0.149-0.086,0.204 C12.296,72.039,12.221,72.07,12.147,72.07z'/%3E%3C/g%3E%3Cg%3E%3Cpath d='M12.903,71.352c-0.08-0.138-0.031-0.313,0.106-0.394l0,0c0.138-0.078,0.313-0.032,0.391,0.106l0,0 c0.08,0.138,0.031,0.313-0.106,0.394l0,0c-0.046,0.026-0.095,0.037-0.144,0.037l0,0C13.052,71.495,12.955,71.443,12.903,71.352z M13.909,70.776c-0.08-0.138-0.031-0.316,0.106-0.394l0,0c0.138-0.078,0.313-0.032,0.391,0.106l0,0 c0.077,0.138,0.031,0.313-0.106,0.394l0,0c-0.046,0.026-0.095,0.037-0.144,0.037l0,0C14.059,70.92,13.961,70.868,13.909,70.776z M14.913,70.201c-0.077-0.138-0.029-0.316,0.109-0.394l0,0c0.135-0.078,0.313-0.032,0.391,0.106l0,0 c0.077,0.138,0.031,0.313-0.106,0.394l0,0c-0.046,0.026-0.095,0.037-0.144,0.037l0,0C15.065,70.345,14.967,70.293,14.913,70.201z M15.919,69.624c-0.077-0.135-0.032-0.311,0.106-0.391l0,0c0.138-0.078,0.313-0.032,0.394,0.106l0,0 c0.077,0.138,0.031,0.313-0.106,0.394l0,0c-0.046,0.026-0.095,0.037-0.144,0.037l0,0C16.068,69.77,15.974,69.718,15.919,69.624z M16.925,69.051c-0.081-0.138-0.032-0.313,0.106-0.394l0,0c0.138-0.078,0.313-0.032,0.394,0.106l0,0 c0.077,0.138,0.029,0.313-0.109,0.394l0,0c-0.043,0.026-0.092,0.037-0.141,0.037l0,0C17.075,69.195,16.977,69.143,16.925,69.051z M17.932,68.476c-0.081-0.138-0.032-0.316,0.106-0.394l0,0c0.138-0.078,0.313-0.032,0.391,0.106l0,0 c0.08,0.138,0.031,0.313-0.106,0.394l0,0c-0.043,0.026-0.092,0.037-0.141,0.037l0,0C18.081,68.62,17.983,68.568,17.932,68.476z M18.938,67.901c-0.081-0.138-0.032-0.316,0.106-0.394l0,0c0.138-0.078,0.313-0.032,0.391,0.106l0,0 c0.08,0.138,0.031,0.313-0.106,0.394l0,0c-0.046,0.026-0.095,0.037-0.144,0.037l0,0C19.087,68.045,18.99,67.993,18.938,67.901z M19.944,67.326c-0.081-0.138-0.032-0.313,0.106-0.394l0,0c0.138-0.078,0.313-0.032,0.391,0.106l0,0 c0.077,0.138,0.031,0.313-0.106,0.394l0,0c-0.046,0.026-0.095,0.037-0.144,0.037l0,0C20.094,67.47,19.996,67.418,19.944,67.326z M20.948,66.751c-0.078-0.138-0.029-0.316,0.106-0.394l0,0c0.138-0.078,0.316-0.032,0.394,0.106l0,0 c0.077,0.138,0.031,0.313-0.106,0.394l0,0c-0.046,0.026-0.095,0.037-0.144,0.037l0,0C21.097,66.895,21.002,66.843,20.948,66.751z M21.954,66.176c-0.078-0.138-0.032-0.316,0.106-0.394l0,0c0.138-0.078,0.313-0.032,0.394,0.106l0,0 c0.077,0.138,0.031,0.313-0.106,0.394l0,0c-0.046,0.026-0.095,0.037-0.144,0.037l0,0C22.103,66.32,22.009,66.268,21.954,66.176z M22.96,65.601c-0.078-0.138-0.032-0.313,0.106-0.394l0,0c0.138-0.078,0.313-0.032,0.394,0.106l0,0 c0.077,0.138,0.029,0.313-0.11,0.394l0,0c-0.043,0.026-0.092,0.037-0.141,0.037l0,0C23.11,65.745,23.012,65.693,22.96,65.601z M23.967,65.026c-0.081-0.138-0.032-0.313,0.106-0.394l0,0c0.138-0.078,0.313-0.032,0.391,0.106l0,0 c0.081,0.138,0.032,0.313-0.106,0.394l0,0c-0.043,0.026-0.095,0.037-0.141,0.037l0,0C24.116,65.17,24.018,65.118,23.967,65.026z M24.973,64.451c-0.081-0.138-0.032-0.316,0.106-0.394l0,0c0.138-0.078,0.313-0.032,0.391,0.106l0,0 c0.081,0.138,0.032,0.313-0.106,0.394l0,0c-0.046,0.026-0.095,0.037-0.144,0.037l0,0C25.122,64.595,25.025,64.543,24.973,64.451z M25.977,63.876c-0.078-0.138-0.029-0.313,0.109-0.394l0,0c0.138-0.078,0.313-0.032,0.391,0.106l0,0 c0.081,0.138,0.032,0.313-0.106,0.394l0,0c-0.046,0.026-0.095,0.037-0.144,0.037l0,0C26.129,64.02,26.031,63.968,25.977,63.876z M26.983,63.301c-0.078-0.138-0.032-0.313,0.106-0.394l0,0c0.138-0.078,0.314-0.032,0.394,0.106l0,0 c0.078,0.138,0.032,0.313-0.106,0.394l0,0c-0.046,0.026-0.095,0.037-0.144,0.037l0,0C27.132,63.445,27.037,63.393,26.983,63.301z M27.989,62.726c-0.078-0.138-0.032-0.316,0.106-0.394l0,0c0.138-0.078,0.314-0.032,0.394,0.106l0,0 c0.078,0.138,0.032,0.313-0.106,0.394l0,0c-0.046,0.026-0.095,0.037-0.144,0.037l0,0C28.139,62.87,28.044,62.818,27.989,62.726z M28.996,62.151c-0.078-0.138-0.032-0.316,0.106-0.394l0,0c0.138-0.078,0.314-0.032,0.394,0.106l0,0 c0.078,0.138,0.029,0.316-0.109,0.394l0,0c-0.043,0.026-0.092,0.037-0.141,0.037l0,0C29.145,62.295,29.047,62.243,28.996,62.151z M30.002,61.576c-0.081-0.138-0.032-0.313,0.106-0.394l0,0c0.138-0.078,0.314-0.032,0.391,0.106l0,0 c0.081,0.138,0.032,0.313-0.106,0.394l0,0c-0.043,0.026-0.095,0.037-0.141,0.037l0,0C30.151,61.72,30.054,61.668,30.002,61.576z M31.008,61.001c-0.081-0.138-0.032-0.316,0.106-0.394l0,0c0.138-0.078,0.314-0.032,0.391,0.106l0,0 c0.078,0.138,0.032,0.313-0.106,0.394l0,0c-0.046,0.026-0.095,0.037-0.141,0.037l0,0C31.158,61.144,31.06,61.093,31.008,61.001z M32.011,60.426c-0.077-0.138-0.029-0.316,0.109-0.394l0,0c0.135-0.078,0.314-0.032,0.391,0.106l0,0 c0.081,0.138,0.032,0.313-0.106,0.394l0,0c-0.046,0.026-0.095,0.037-0.144,0.037l0,0C32.164,60.569,32.066,60.517,32.011,60.426z M33.018,59.848c-0.077-0.135-0.031-0.311,0.106-0.391l0,0c0.138-0.078,0.313-0.032,0.394,0.106l0,0 c0.078,0.138,0.032,0.313-0.106,0.394l0,0c-0.046,0.026-0.095,0.037-0.144,0.037l0,0C33.167,59.994,33.073,59.942,33.018,59.848z M34.024,59.276c-0.077-0.138-0.031-0.313,0.106-0.394l0,0c0.138-0.078,0.313-0.032,0.394,0.106l0,0 c0.078,0.138,0.029,0.313-0.106,0.394l0,0c-0.046,0.026-0.095,0.037-0.144,0.037l0,0C34.174,59.419,34.076,59.367,34.024,59.276z M35.03,58.701c-0.077-0.138-0.031-0.316,0.106-0.394l0,0c0.138-0.078,0.313-0.032,0.391,0.106l0,0 c0.081,0.138,0.031,0.313-0.106,0.394l0,0c-0.043,0.026-0.092,0.037-0.141,0.037l0,0C35.18,58.844,35.082,58.792,35.03,58.701z M36.037,58.126c-0.08-0.138-0.031-0.316,0.106-0.394l0,0c0.138-0.078,0.313-0.032,0.391,0.106l0,0 c0.081,0.138,0.031,0.313-0.106,0.394l0,0c-0.043,0.026-0.092,0.037-0.141,0.037l0,0C36.186,58.269,36.089,58.217,36.037,58.126z M37.043,57.55c-0.08-0.138-0.031-0.313,0.106-0.394l0,0c0.138-0.078,0.313-0.032,0.391,0.106l0,0 c0.077,0.138,0.031,0.313-0.106,0.394l0,0c-0.046,0.026-0.095,0.037-0.144,0.037l0,0C37.193,57.694,37.095,57.642,37.043,57.55z M38.049,56.975c-0.08-0.138-0.031-0.316,0.104-0.394l0,0c0.138-0.078,0.316-0.032,0.394,0.106l0,0 c0.077,0.138,0.031,0.313-0.106,0.394l0,0c-0.046,0.026-0.095,0.037-0.144,0.037l0,0C38.199,57.119,38.101,57.067,38.049,56.975z M39.053,56.4c-0.077-0.138-0.032-0.316,0.106-0.394l0,0c0.138-0.078,0.313-0.032,0.394,0.106l0,0 c0.077,0.138,0.031,0.313-0.106,0.394l0,0c-0.046,0.026-0.095,0.037-0.144,0.037l0,0C39.203,56.544,39.108,56.492,39.053,56.4z M40.059,55.825c-0.077-0.138-0.032-0.313,0.106-0.394l0,0c0.138-0.078,0.313-0.032,0.394,0.106l0,0 c0.077,0.138,0.029,0.313-0.109,0.394l0,0c-0.043,0.026-0.092,0.037-0.141,0.037l0,0C40.209,55.969,40.111,55.917,40.059,55.825z M41.066,55.25c-0.081-0.138-0.032-0.313,0.106-0.394l0,0c0.138-0.078,0.313-0.032,0.391,0.106l0,0 c0.08,0.138,0.031,0.313-0.106,0.394l0,0c-0.043,0.026-0.092,0.037-0.141,0.037l0,0C41.215,55.394,41.117,55.342,41.066,55.25z M42.072,54.675c-0.081-0.138-0.032-0.316,0.106-0.394l0,0c0.138-0.078,0.313-0.032,0.391,0.106l0,0 c0.08,0.138,0.031,0.313-0.106,0.394l0,0c-0.043,0.026-0.095,0.037-0.141,0.037l0,0C42.222,54.819,42.124,54.767,42.072,54.675z M43.078,54.1c-0.081-0.138-0.032-0.313,0.106-0.394l0,0c0.138-0.078,0.313-0.032,0.391,0.106l0,0 c0.08,0.138,0.031,0.313-0.106,0.394l0,0c-0.046,0.026-0.095,0.037-0.144,0.037l0,0C43.228,54.244,43.13,54.192,43.078,54.1z M44.082,53.525c-0.078-0.138-0.032-0.313,0.106-0.394l0,0c0.138-0.078,0.316-0.032,0.394,0.106l0,0 c0.077,0.138,0.031,0.313-0.106,0.394l0,0c-0.046,0.026-0.095,0.037-0.144,0.037l0,0C44.231,53.669,44.136,53.617,44.082,53.525z M45.088,52.95c-0.078-0.138-0.032-0.316,0.106-0.394l0,0c0.138-0.078,0.313-0.032,0.394,0.106l0,0 c0.077,0.138,0.031,0.313-0.106,0.394l0,0c-0.046,0.026-0.095,0.037-0.144,0.037l0,0C45.237,53.094,45.143,53.042,45.088,52.95z M46.094,52.375c-0.078-0.138-0.032-0.316,0.106-0.394l0,0c0.138-0.078,0.313-0.032,0.391,0.106l0,0 c0.081,0.138,0.035,0.316-0.103,0.394l0,0c-0.046,0.026-0.095,0.037-0.144,0.037l0,0C46.244,52.519,46.149,52.467,46.094,52.375z M47.101,51.8c-0.081-0.138-0.032-0.313,0.106-0.394l0,0c0.138-0.078,0.313-0.032,0.391,0.106l0,0 c0.081,0.138,0.032,0.313-0.106,0.394l0,0c-0.043,0.026-0.095,0.037-0.141,0.037l0,0C47.25,51.944,47.152,51.892,47.101,51.8z M48.107,51.225c-0.081-0.138-0.032-0.316,0.106-0.394l0,0c0.138-0.078,0.313-0.032,0.391,0.106l0,0 c0.081,0.138,0.032,0.313-0.106,0.394l0,0c-0.046,0.026-0.095,0.037-0.141,0.037l0,0C48.256,51.369,48.159,51.317,48.107,51.225z M49.113,50.65c-0.081-0.138-0.032-0.316,0.106-0.394l0,0c0.138-0.078,0.313-0.032,0.391,0.106l0,0 c0.081,0.138,0.032,0.313-0.106,0.394l0,0c-0.046,0.026-0.095,0.037-0.144,0.037l0,0C49.263,50.794,49.165,50.742,49.113,50.65z'/%3E%3C/g%3E%3Cg%3E%3Cpath d='M50.367,50.219c-0.075,0-0.149-0.032-0.201-0.083c-0.055-0.055-0.086-0.129-0.086-0.204c0-0.078,0.032-0.15,0.086-0.204 c0.103-0.106,0.296-0.106,0.405,0c0.055,0.054,0.083,0.129,0.083,0.204s-0.029,0.149-0.083,0.204 C50.516,50.187,50.442,50.219,50.367,50.219z'/%3E%3C/g%3E%3C/g%3E%3Cg%3E%3Cg%3E%3Cpath d='M88.435,71.783c-0.077,0-0.149-0.032-0.204-0.083c-0.055-0.055-0.083-0.129-0.083-0.204c0-0.075,0.029-0.15,0.083-0.204 c0.106-0.106,0.302-0.106,0.405,0c0.054,0.054,0.086,0.129,0.086,0.204c0,0.075-0.032,0.149-0.086,0.204 C88.585,71.751,88.51,71.783,88.435,71.783z'/%3E%3C/g%3E%3Cg%3E%3Cpath d='M87.288,71.17c-0.138-0.081-0.184-0.256-0.106-0.394l0,0c0.081-0.138,0.256-0.184,0.394-0.106l0,0 c0.138,0.081,0.184,0.256,0.106,0.394l0,0c-0.054,0.092-0.149,0.144-0.25,0.144l0,0C87.383,71.208,87.334,71.196,87.288,71.17z M86.287,70.595c-0.138-0.081-0.184-0.256-0.106-0.394l0,0c0.077-0.138,0.256-0.184,0.391-0.106l0,0 c0.141,0.081,0.187,0.256,0.109,0.394l0,0c-0.055,0.092-0.152,0.144-0.25,0.144l0,0C86.382,70.633,86.333,70.621,86.287,70.595z M85.287,70.02c-0.138-0.081-0.187-0.256-0.106-0.394l0,0c0.078-0.138,0.253-0.184,0.391-0.106l0,0 c0.138,0.081,0.187,0.256,0.106,0.394l0,0c-0.052,0.092-0.15,0.144-0.25,0.144l0,0C85.379,70.058,85.33,70.046,85.287,70.02z M84.283,69.445c-0.138-0.081-0.184-0.256-0.106-0.394l0,0c0.08-0.138,0.256-0.184,0.394-0.106l0,0 c0.138,0.081,0.184,0.256,0.106,0.394l0,0c-0.054,0.092-0.152,0.144-0.25,0.144l0,0C84.378,69.483,84.329,69.471,84.283,69.445z M83.283,68.87c-0.138-0.081-0.187-0.256-0.106-0.394l0,0c0.078-0.138,0.253-0.184,0.391-0.106l0,0 c0.138,0.081,0.187,0.256,0.106,0.394l0,0c-0.052,0.092-0.15,0.144-0.25,0.144l0,0C83.377,68.908,83.326,68.896,83.283,68.87z M82.279,68.295c-0.138-0.081-0.184-0.256-0.106-0.394l0,0c0.081-0.138,0.256-0.184,0.394-0.106l0,0 c0.138,0.081,0.184,0.256,0.106,0.394l0,0c-0.054,0.092-0.149,0.144-0.25,0.144l0,0C82.374,68.333,82.325,68.321,82.279,68.295z M81.279,67.72c-0.138-0.081-0.184-0.256-0.106-0.394l0,0c0.077-0.138,0.256-0.184,0.391-0.106l0,0 c0.138,0.081,0.187,0.256,0.106,0.394l0,0c-0.052,0.092-0.149,0.144-0.247,0.144l0,0C81.374,67.758,81.325,67.746,81.279,67.72z M80.278,67.145c-0.138-0.081-0.187-0.256-0.106-0.394l0,0c0.078-0.138,0.253-0.184,0.391-0.106l0,0 c0.138,0.081,0.184,0.256,0.106,0.394l0,0c-0.055,0.092-0.15,0.144-0.25,0.144l0,0C80.37,67.182,80.321,67.171,80.278,67.145z M79.274,66.57c-0.138-0.081-0.184-0.256-0.106-0.394l0,0c0.08-0.138,0.256-0.184,0.394-0.106l0,0 c0.135,0.081,0.184,0.256,0.106,0.394l0,0c-0.054,0.092-0.152,0.144-0.25,0.144l0,0C79.369,66.607,79.32,66.596,79.274,66.57z M78.274,65.995c-0.138-0.081-0.187-0.256-0.106-0.394l0,0c0.077-0.138,0.253-0.184,0.391-0.106l0,0 c0.138,0.081,0.187,0.256,0.106,0.394l0,0c-0.052,0.092-0.15,0.144-0.25,0.144l0,0C78.366,66.032,78.317,66.021,78.274,65.995z M77.27,65.42c-0.135-0.081-0.184-0.256-0.106-0.394l0,0c0.081-0.138,0.256-0.184,0.394-0.106l0,0 c0.138,0.081,0.184,0.256,0.106,0.394l0,0c-0.055,0.092-0.149,0.144-0.25,0.144l0,0C77.365,65.457,77.316,65.446,77.27,65.42z M76.27,64.845c-0.138-0.081-0.184-0.256-0.106-0.394l0,0c0.077-0.138,0.256-0.184,0.391-0.106l0,0 c0.138,0.081,0.187,0.256,0.106,0.394l0,0c-0.052,0.092-0.149,0.144-0.247,0.144l0,0C76.365,64.882,76.316,64.871,76.27,64.845z M75.266,64.27c-0.135-0.081-0.184-0.256-0.104-0.394l0,0c0.078-0.138,0.253-0.184,0.391-0.106l0,0 c0.138,0.081,0.184,0.256,0.106,0.394l0,0c-0.052,0.092-0.15,0.144-0.25,0.144l0,0C75.361,64.307,75.313,64.296,75.266,64.27z M74.266,63.695c-0.138-0.081-0.184-0.256-0.106-0.394l0,0c0.081-0.138,0.256-0.184,0.394-0.106l0,0 c0.138,0.081,0.184,0.256,0.106,0.394l0,0c-0.054,0.092-0.152,0.144-0.25,0.144l0,0C74.361,63.732,74.312,63.721,74.266,63.695z M73.265,63.12c-0.138-0.081-0.187-0.256-0.106-0.394l0,0c0.077-0.138,0.253-0.184,0.391-0.106l0,0 c0.138,0.081,0.187,0.256,0.106,0.394l0,0c-0.052,0.092-0.149,0.144-0.25,0.144l0,0C73.357,63.157,73.308,63.146,73.265,63.12z M72.262,62.545c-0.138-0.081-0.184-0.256-0.106-0.394l0,0c0.081-0.138,0.256-0.184,0.394-0.106l0,0 c0.138,0.081,0.184,0.256,0.106,0.394l0,0c-0.055,0.092-0.15,0.144-0.25,0.144l0,0C72.357,62.582,72.308,62.571,72.262,62.545z M71.261,61.97c-0.138-0.081-0.187-0.256-0.106-0.394l0,0c0.08-0.138,0.256-0.184,0.391-0.106l0,0 c0.138,0.081,0.187,0.256,0.106,0.394l0,0c-0.052,0.092-0.149,0.144-0.247,0.144l0,0C71.356,62.007,71.307,61.996,71.261,61.97z M70.261,61.395c-0.141-0.081-0.187-0.256-0.106-0.394l0,0c0.078-0.138,0.253-0.184,0.391-0.106l0,0 c0.138,0.081,0.184,0.256,0.106,0.394l0,0c-0.052,0.092-0.15,0.144-0.25,0.144l0,0C70.353,61.432,70.304,61.421,70.261,61.395z M69.257,60.82c-0.138-0.081-0.184-0.256-0.106-0.394l0,0c0.081-0.138,0.256-0.184,0.394-0.106l0,0 c0.138,0.081,0.184,0.256,0.106,0.394l0,0c-0.054,0.092-0.152,0.144-0.25,0.144l0,0C69.352,60.857,69.303,60.845,69.257,60.82z M68.257,60.245c-0.138-0.081-0.187-0.256-0.106-0.394l0,0c0.077-0.138,0.253-0.184,0.391-0.106l0,0 c0.138,0.081,0.187,0.256,0.106,0.394l0,0c-0.052,0.092-0.149,0.144-0.25,0.144l0,0C68.352,60.282,68.3,60.27,68.257,60.245z M67.253,59.67c-0.138-0.081-0.184-0.256-0.106-0.394l0,0c0.081-0.138,0.256-0.184,0.394-0.106l0,0 c0.138,0.081,0.184,0.256,0.106,0.394l0,0c-0.055,0.092-0.15,0.144-0.25,0.144l0,0C67.348,59.707,67.299,59.695,67.253,59.67z M66.252,59.094c-0.138-0.081-0.187-0.256-0.106-0.394l0,0c0.077-0.138,0.253-0.184,0.391-0.106l0,0 c0.138,0.081,0.187,0.256,0.106,0.394l0,0c-0.052,0.092-0.149,0.144-0.25,0.144l0,0C66.347,59.132,66.299,59.12,66.252,59.094z M65.252,58.519c-0.138-0.081-0.187-0.256-0.109-0.394l0,0c0.081-0.138,0.256-0.184,0.394-0.106l0,0 c0.138,0.081,0.184,0.256,0.106,0.394l0,0c-0.052,0.092-0.15,0.144-0.25,0.144l0,0C65.344,58.557,65.295,58.545,65.252,58.519z M64.249,57.944c-0.138-0.081-0.184-0.256-0.106-0.394l0,0c0.078-0.138,0.256-0.184,0.394-0.106l0,0 c0.138,0.081,0.184,0.256,0.106,0.394l0,0c-0.055,0.092-0.152,0.144-0.25,0.144l0,0C64.343,57.982,64.295,57.97,64.249,57.944z M63.248,57.369c-0.138-0.081-0.187-0.256-0.106-0.394l0,0c0.077-0.138,0.253-0.184,0.391-0.106l0,0 c0.138,0.081,0.187,0.256,0.106,0.394l0,0c-0.052,0.092-0.149,0.144-0.25,0.144l0,0C63.34,57.407,63.291,57.395,63.248,57.369z M62.245,56.794c-0.138-0.081-0.184-0.256-0.106-0.394l0,0c0.081-0.138,0.256-0.184,0.394-0.106l0,0 c0.138,0.081,0.184,0.256,0.106,0.394l0,0c-0.055,0.092-0.15,0.144-0.25,0.144l0,0C62.339,56.832,62.291,56.82,62.245,56.794z M61.244,56.219c-0.138-0.081-0.187-0.256-0.106-0.394l0,0c0.078-0.138,0.256-0.184,0.391-0.106l0,0 c0.138,0.081,0.187,0.256,0.106,0.394l0,0c-0.052,0.092-0.149,0.144-0.247,0.144l0,0C61.339,56.257,61.29,56.245,61.244,56.219z M60.241,55.644c-0.138-0.081-0.184-0.256-0.106-0.394l0,0c0.08-0.138,0.256-0.184,0.394-0.106l0,0 c0.138,0.081,0.184,0.256,0.106,0.394l0,0c-0.054,0.092-0.149,0.144-0.25,0.144l0,0C60.336,55.682,60.286,55.67,60.241,55.644z M59.24,55.069c-0.138-0.081-0.184-0.256-0.106-0.394l0,0c0.081-0.138,0.256-0.184,0.394-0.106l0,0 c0.135,0.081,0.184,0.256,0.106,0.394l0,0c-0.055,0.092-0.152,0.144-0.25,0.144l0,0C59.335,55.107,59.286,55.095,59.24,55.069z M58.239,54.494c-0.138-0.081-0.187-0.256-0.106-0.394l0,0c0.077-0.138,0.253-0.184,0.391-0.106l0,0 c0.138,0.081,0.187,0.256,0.106,0.394l0,0c-0.052,0.092-0.149,0.144-0.25,0.144l0,0C58.331,54.531,58.282,54.52,58.239,54.494z M57.236,53.919c-0.138-0.081-0.184-0.256-0.106-0.394l0,0c0.081-0.138,0.256-0.184,0.394-0.106l0,0 c0.138,0.081,0.184,0.256,0.106,0.394l0,0c-0.055,0.092-0.15,0.144-0.25,0.144l0,0C57.331,53.956,57.282,53.945,57.236,53.919z M56.235,53.344c-0.138-0.081-0.187-0.256-0.106-0.394l0,0c0.078-0.138,0.256-0.184,0.391-0.106l0,0 c0.138,0.081,0.187,0.256,0.106,0.394l0,0c-0.052,0.092-0.15,0.144-0.247,0.144l0,0C56.33,53.381,56.281,53.37,56.235,53.344z M55.232,52.769c-0.135-0.081-0.184-0.256-0.106-0.394l0,0c0.08-0.138,0.256-0.184,0.394-0.106l0,0 c0.138,0.081,0.184,0.256,0.106,0.394l0,0c-0.054,0.092-0.149,0.144-0.25,0.144l0,0C55.327,52.806,55.278,52.795,55.232,52.769z M54.231,52.194c-0.138-0.081-0.184-0.256-0.106-0.394l0,0c0.081-0.138,0.256-0.184,0.391-0.106l0,0 c0.138,0.081,0.187,0.256,0.106,0.394l0,0c-0.052,0.092-0.15,0.144-0.247,0.144l0,0C54.326,52.231,54.277,52.22,54.231,52.194z M53.231,51.619c-0.138-0.081-0.187-0.256-0.106-0.394l0,0c0.077-0.138,0.253-0.184,0.391-0.106l0,0 c0.138,0.081,0.187,0.256,0.106,0.394l0,0c-0.052,0.092-0.149,0.144-0.25,0.144l0,0C53.323,51.656,53.274,51.645,53.231,51.619z M52.227,51.044c-0.138-0.081-0.184-0.256-0.106-0.394l0,0c0.081-0.138,0.256-0.184,0.394-0.106l0,0 c0.138,0.081,0.184,0.256,0.106,0.394l0,0c-0.055,0.092-0.15,0.144-0.25,0.144l0,0C52.322,51.081,52.273,51.07,52.227,51.044z M51.227,50.469c-0.138-0.081-0.187-0.256-0.106-0.394l0,0c0.078-0.138,0.253-0.184,0.391-0.106l0,0 c0.138,0.081,0.187,0.256,0.106,0.394l0,0c-0.052,0.092-0.15,0.144-0.25,0.144l0,0C51.322,50.506,51.27,50.495,51.227,50.469z'/%3E%3C/g%3E%3Cg%3E%3Cpath d='M50.367,49.931c-0.075,0-0.149-0.029-0.201-0.083c-0.055-0.055-0.086-0.129-0.086-0.204c0-0.078,0.032-0.15,0.086-0.204 c0.103-0.106,0.296-0.106,0.405,0c0.055,0.054,0.083,0.129,0.083,0.204c0,0.075-0.029,0.149-0.083,0.204 C50.516,49.902,50.442,49.931,50.367,49.931z'/%3E%3C/g%3E%3C/g%3E%3Cg%3E%3Crect x='50.212' y='49.644' width='0.575' height='43.991'/%3E%3C/g%3E%3Cg%3E%3Crect x='47.578' y='38.43' transform='matrix(0.8665 -0.4992 0.4992 0.8665 -10.0532 39.846)' width='43.778' height='0.575'/%3E%3C/g%3E%3Cg%3E%3Crect x='31.047' y='16.772' transform='matrix(0.4978 -0.8673 0.8673 0.4978 -17.8438 46.6175)' width='0.575' height='43.892'/%3E%3C/g%3E%3Cg%3E%3Cpath d='M50.368,93.966l-0.144-0.083l-38.365-22.15V27.267l0.144-0.083l38.365-22.15l38.509,22.233v44.467l-0.144,0.083 L50.368,93.966z M12.434,71.401l37.934,21.901l37.934-21.901V27.598L50.368,5.697L12.434,27.598V71.401z'/%3E%3C/g%3E%3C/g%3E%3Ctext x='0' y='115' fill='%23000000' font-size='5px' font-weight='bold' font-family=''Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif'%3ECreated by Cecilia Morales%3C/text%3E%3Ctext x='0' y='120' fill='%23000000' font-size='5px' font-weight='bold' font-family=''Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif'%3Efrom the Noun Project%3C/text%3E%3C/svg%3E"

/***/ }),
/* 72 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml,%3Csvg id='icon-codepen' x='0px' y='0px' width='50px' height='50px' viewBox='0 0 50 50'%3E %3Cpath id='circle' fill='%231D1D1B' d='M25,0C11.2,0,0,11.2,0,25s11.2,25,25,25c13.8,0,25-11.2,25-25S38.8,0,25,0z M25,45.9 C13.5,45.9,4.1,36.5,4.1,25S13.5,4.1,25,4.1c11.5,0,20.9,9.4,20.9,20.9S36.5,45.9,25,45.9z'%3E%3C/path%3E %3Cpath id='box' fill='%231D1D1B' d='M40.4,20.1C40.4,20.1,40.4,20.1,40.4,20.1c0-0.1,0-0.1,0-0.2c0,0,0,0,0-0.1c0,0,0-0.1,0-0.1 c0,0,0,0,0-0.1c0,0,0-0.1,0-0.1c0,0,0,0,0-0.1c0,0,0-0.1-0.1-0.1c0,0,0,0,0-0.1c0,0,0,0-0.1-0.1c0,0,0,0-0.1-0.1c0,0,0,0-0.1-0.1 c0,0,0,0-0.1,0c0,0,0,0,0,0L25.7,9.8c-0.4-0.3-1-0.3-1.5,0l-14.1,9.4c0,0,0,0,0,0c0,0,0,0-0.1,0c0,0-0.1,0-0.1,0.1c0,0,0,0-0.1,0.1 c0,0,0,0-0.1,0.1c0,0,0,0,0,0.1c0,0,0,0.1-0.1,0.1c0,0,0,0,0,0.1c0,0,0,0.1,0,0.1c0,0,0,0,0,0.1c0,0,0,0.1,0,0.1c0,0,0,0,0,0.1 c0,0,0,0.1,0,0.1c0,0,0,0,0,0.1c0,0.1,0,0.1,0,0.2v9.4c0,0.1,0,0.1,0,0.2c0,0,0,0,0,0.1c0,0,0,0.1,0,0.1c0,0,0,0,0,0.1 c0,0,0,0.1,0,0.1c0,0,0,0,0,0.1c0,0,0,0.1,0,0.1c0,0,0,0,0,0.1c0,0,0,0.1,0.1,0.1c0,0,0,0,0,0.1c0,0,0,0,0.1,0.1c0,0,0,0,0.1,0.1 c0,0,0,0,0.1,0.1c0,0,0,0,0.1,0c0,0,0,0,0,0l14.1,9.4c0.2,0.1,0.5,0.2,0.7,0.2c0.3,0,0.5-0.1,0.7-0.2l14.1-9.4c0,0,0,0,0,0 c0,0,0,0,0.1,0c0,0,0.1,0,0.1-0.1c0,0,0,0,0.1-0.1c0,0,0,0,0.1-0.1c0,0,0,0,0-0.1c0,0,0-0.1,0.1-0.1c0,0,0,0,0-0.1c0,0,0-0.1,0-0.1 c0,0,0,0,0-0.1c0,0,0-0.1,0-0.1c0,0,0,0,0-0.1c0,0,0-0.1,0-0.1c0,0,0,0,0-0.1c0-0.1,0-0.1,0-0.2v-9.4 C40.5,20.2,40.5,20.2,40.4,20.1z M26.3,13.4l10.4,6.9l-4.6,3.1l-5.8-3.9V13.4z M23.7,13.4v6.2l-5.8,3.9l-4.6-3.1L23.7,13.4z M12.2,22.8l3.3,2.2l-3.3,2.2V22.8z M23.7,36.6l-10.4-6.9l4.6-3.1l5.8,3.9V36.6z M25,28.1L20.3,25l4.7-3.1l4.7,3.1L25,28.1z M26.3,36.6v-6.2l5.8-3.9l4.6,3.1L26.3,36.6z M37.8,27.2L34.5,25l3.3-2.2V27.2z'%3E%3C/path%3E %3C/svg%3E"

/***/ }),
/* 73 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml,%3Csvg id='icon-github' x='0px' y='0px' width='50px' height='50px' viewBox='0 0 50 50'%3E %3Cpath id='github_1_' fill-rule='evenodd' clip-rule='evenodd' fill='%231D1D1B' d='M25,0C11.2,0,0,11.5,0,25.6C0,37,7.2,46.6,17.1,50 c1.2,0.2,1.7-0.6,1.7-1.2c0-0.6,0-2.6,0-4.8c-7,1.6-8.4-3-8.4-3c-1.1-3-2.8-3.8-2.8-3.8c-2.3-1.6,0.2-1.6,0.2-1.6 c2.5,0.2,3.8,2.6,3.8,2.6c2.2,3.9,5.8,2.8,7.3,2.1c0.2-1.7,0.9-2.8,1.6-3.4C14.9,36.3,9,34.1,9,24.3c0-2.8,1-5.1,2.6-6.9 c-0.3-0.6-1.1-3.3,0.2-6.8c0,0,2.1-0.7,6.9,2.6c2-0.6,4.1-0.9,6.3-0.9c2.1,0,4.3,0.3,6.3,0.9c4.8-3.3,6.9-2.6,6.9-2.6 c1.4,3.5,0.5,6.1,0.2,6.8c1.6,1.8,2.6,4.1,2.6,6.9c0,9.8-5.8,12-11.4,12.6c0.9,0.8,1.7,2.4,1.7,4.7c0,3.4,0,6.2,0,7 c0,0.7,0.4,1.5,1.7,1.2C42.8,46.6,50,37,50,25.6C50,11.5,38.8,0,25,0z'%3E%3C/path%3E %3C/svg%3E"

/***/ }),
/* 74 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml,%3Csvg id='icon-linkedin' x='0px' y='0px' width='50px' height='50px' viewBox='0 0 50 50'%3E %3Cpath id='linkedin' fill='%231D1D1B' d='M46.3,0H3.7C1.7,0,0,1.6,0,3.6v42.8c0,2,1.7,3.6,3.7,3.6h42.6c2,0,3.7-1.6,3.7-3.6V3.6 C50,1.6,48.3,0,46.3,0z M14.8,42.6H7.4V18.7h7.4V42.6z M11.1,15.5c-2.4,0-4.3-1.9-4.3-4.3c0-2.4,1.9-4.3,4.3-4.3 c2.4,0,4.3,1.9,4.3,4.3C15.4,13.6,13.5,15.5,11.1,15.5z M42.6,42.6h-7.4V31c0-2.8-0.1-6.3-3.9-6.3c-3.9,0-4.5,3-4.5,6.1v11.8h-7.4 V18.7h7.1V22h0.1c1-1.9,3.4-3.9,7-3.9c7.5,0,8.9,4.9,8.9,11.4V42.6z'%3E%3C/path%3E %3C/svg%3E"

/***/ }),
/* 75 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' version='1.1' x='0px' y='0px' viewBox='0 0 100 125' enable-background='new 0 0 100 100' xml:space='preserve'%3E%3Cg%3E%3Cpath d='M82.578,68.869l-31.427-51.02c-0.493-0.799-1.808-0.799-2.302,0l-31.426,51.02c-0.212,0.344-0.26,0.764-0.129,1.146 c0.131,0.381,0.426,0.685,0.803,0.828l31.426,11.822c0.155,0.057,0.316,0.086,0.477,0.086c0.162,0,0.322-0.029,0.477-0.086 l31.427-11.822c0.378-0.143,0.672-0.446,0.803-0.828C82.836,69.633,82.789,69.212,82.578,68.869z M79.383,68.901h-28.03V23.329 L79.415,68.89L79.383,68.901z M48.648,79.447l-24.438-9.193h24.438V79.447z M51.353,70.253H75.79l-24.438,9.193V70.253z M48.648,23.329v45.572H20.617l-0.031-0.012L48.648,23.329z'/%3E%3C/g%3E%3C/svg%3E"

/***/ })
/******/ ]);