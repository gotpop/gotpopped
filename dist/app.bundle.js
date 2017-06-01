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
/******/ 	return __webpack_require__(__webpack_require__.s = 13);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = [
	{
		"name": "Home",
		"pageId": "home",
		"title": "male",
		"subtitle": "UTARIAN",
		"link": "floreshardin@utarian.com",
		"phone": "+1 (893) 459-2144",
		"address": "480 Seigel Street, Yardville, Kansas, 2109",
		"about": "Cupidatat aliquip minim labore eu ea officia ea qui cupidatat sit labore fugiat consectetur eu. Irure ipsum anim consequat duis fugiat ipsum dolore consectetur eu cillum voluptate irure cillum ea. Commodo laboris ex commodo pariatur nulla. Officia esse reprehenderit laborum ad. Mollit reprehenderit eiusmod sunt voluptate aute. Anim ad nisi tempor reprehenderit voluptate in laborum ad ut dolore laborum cupidatat nulla."
	},
	{
		"name": "Work",
		"title": "male",
		"pageId": "work",
		"subtitle": "UTARIAN",
		"link": "floreshardin@utarian.com",
		"phone": "+1 (893) 459-2144",
		"address": "480 Seigel Street, Yardville, Kansas, 2109",
		"about": "Cupidatat aliquip minim labore eu ea officia ea qui cupidatat sit labore fugiat consectetur eu. Irure ipsum anim consequat duis fugiat ipsum dolore consectetur eu cillum voluptate irure cillum ea. Commodo laboris ex commodo pariatur nulla. Officia esse reprehenderit laborum ad. Mollit reprehenderit eiusmod sunt voluptate aute. Anim ad nisi tempor reprehenderit voluptate in laborum ad ut dolore laborum cupidatat nulla."
	},
	{
		"name": "Skills",
		"title": "male",
		"pageId": "skills",
		"subtitle": "UTARIAN",
		"link": "floreshardin@utarian.com",
		"phone": "+1 (893) 459-2144",
		"address": "480 Seigel Street, Yardville, Kansas, 2109",
		"about": "Cupidatat aliquip minim labore eu ea officia ea qui cupidatat sit labore fugiat consectetur eu. Irure ipsum anim consequat duis fugiat ipsum dolore consectetur eu cillum voluptate irure cillum ea. Commodo laboris ex commodo pariatur nulla. Officia esse reprehenderit laborum ad. Mollit reprehenderit eiusmod sunt voluptate aute. Anim ad nisi tempor reprehenderit voluptate in laborum ad ut dolore laborum cupidatat nulla."
	}
];

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__status__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_pages_json__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_pages_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__data_pages_json__);
/////////////////////////////////////////////////
// Imports
/////////////////////////////////////////////////




/////////////////////////////////////////////////
// MakePage
/////////////////////////////////////////////////

class MakePage {
  constructor() {
      this.loopPageObjects()
  }

  loopPageObjects() {

    for (let pageObject of __WEBPACK_IMPORTED_MODULE_1__data_pages_json___default.a) {

      if (pageObject.pageId === __WEBPACK_IMPORTED_MODULE_0__status__["a" /* siteStatus */].currentPage) {

        let maView = document.getElementById('view')
        let maSection = document.createElement('section')
        let maH1 = document.createElement('h1')
        let maH1TextNode = document.createTextNode(pageObject.name)

        maH1.appendChild(maH1TextNode)
        maSection.appendChild(maH1)

        let maP = document.createElement('p')
        let maPText = document.createTextNode(pageObject.about)

        maP.appendChild(maPText)
        maSection.appendChild(maP)
        maView.appendChild(maSection)

        this.setIds(maView)
      }

    }

    // let maIcons = new Icons
    // let testDecode = decodeURI(maIcons.triangle)

  }

  buildPage() {

  }

  setIds(maView) {
    maView.firstChild.setAttribute('id', 'first')
    maView.firstChild.classList.remove('last')
    maView.firstChild.classList.add('view-item', 'first', 'solo')

    if (maView.childNodes.length > 1) {

      if (maView.childNodes.length > 2) {
        maView.firstChild.remove()
      }

      maView.firstChild.setAttribute('id', 'first')
      maView.firstChild.classList.remove('last', 'solo')
      maView.firstChild.classList.add('view-item', 'first')

      maView.lastChild.setAttribute('id', 'last')
      maView.lastChild.classList.remove('first', 'solo')
      maView.lastChild.classList.add('view-item', 'last')

    }


  }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = MakePage;



/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return siteStatus; });
/////////////////////////////////////////////////
// Status
/////////////////////////////////////////////////

class Status {
  constructor() {
    this.makeStatus()
    this.currentPage
  }
  makeStatus() {
    this.currentPage = 'home'
  }
}

let siteStatus = new Status
console.log(siteStatus)


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' version='1.1' x='0px' y='0px' viewBox='0 0 100 125' enable-background='new 0 0 100 100' xml:space='preserve'%3E%3Cg%3E%3Cpath d='M82.578,68.869l-31.427-51.02c-0.493-0.799-1.808-0.799-2.302,0l-31.426,51.02c-0.212,0.344-0.26,0.764-0.129,1.146 c0.131,0.381,0.426,0.685,0.803,0.828l31.426,11.822c0.155,0.057,0.316,0.086,0.477,0.086c0.162,0,0.322-0.029,0.477-0.086 l31.427-11.822c0.378-0.143,0.672-0.446,0.803-0.828C82.836,69.633,82.789,69.212,82.578,68.869z M79.383,68.901h-28.03V23.329 L79.415,68.89L79.383,68.901z M48.648,79.447l-24.438-9.193h24.438V79.447z M51.353,70.253H75.79l-24.438,9.193V70.253z M48.648,23.329v45.572H20.617l-0.031-0.012L48.648,23.329z'/%3E%3C/g%3E%3C/svg%3E"

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = [
	{
		"name": "Home",
		"title": "male",
		"subtitle": "UTARIAN",
		"link": "floreshardin@utarian.com",
		"phone": "+1 (893) 459-2144",
		"address": "480 Seigel Street, Yardville, Kansas, 2109",
		"about": "Cupidatat aliquip minim labore eu ea officia ea qui cupidatat sit labore fugiat consectetur eu. Irure ipsum anim consequat duis fugiat ipsum dolore consectetur eu cillum voluptate irure cillum ea. Commodo laboris ex commodo pariatur nulla. Officia esse reprehenderit laborum ad. Mollit reprehenderit eiusmod sunt voluptate aute. Anim ad nisi tempor reprehenderit voluptate in laborum ad ut dolore laborum cupidatat nulla."
	},
	{
		"name": "Work",
		"title": "male",
		"subtitle": "UTARIAN",
		"link": "floreshardin@utarian.com",
		"phone": "+1 (893) 459-2144",
		"address": "480 Seigel Street, Yardville, Kansas, 2109",
		"about": "Cupidatat aliquip minim labore eu ea officia ea qui cupidatat sit labore fugiat consectetur eu. Irure ipsum anim consequat duis fugiat ipsum dolore consectetur eu cillum voluptate irure cillum ea. Commodo laboris ex commodo pariatur nulla. Officia esse reprehenderit laborum ad. Mollit reprehenderit eiusmod sunt voluptate aute. Anim ad nisi tempor reprehenderit voluptate in laborum ad ut dolore laborum cupidatat nulla."
	},
	{
		"name": "Skills",
		"title": "male",
		"subtitle": "UTARIAN",
		"link": "floreshardin@utarian.com",
		"phone": "+1 (893) 459-2144",
		"address": "480 Seigel Street, Yardville, Kansas, 2109",
		"about": "Cupidatat aliquip minim labore eu ea officia ea qui cupidatat sit labore fugiat consectetur eu. Irure ipsum anim consequat duis fugiat ipsum dolore consectetur eu cillum voluptate irure cillum ea. Commodo laboris ex commodo pariatur nulla. Officia esse reprehenderit laborum ad. Mollit reprehenderit eiusmod sunt voluptate aute. Anim ad nisi tempor reprehenderit voluptate in laborum ad ut dolore laborum cupidatat nulla."
	}
];

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = [
	{
		"name": "Home",
		"title": "male",
		"subtitle": "UTARIAN",
		"link": "floreshardin@utarian.com",
		"phone": "+1 (893) 459-2144",
		"address": "480 Seigel Street, Yardville, Kansas, 2109",
		"about": "Cupidatat aliquip minim labore eu ea officia ea qui cupidatat sit labore fugiat consectetur eu. Irure ipsum anim consequat duis fugiat ipsum dolore consectetur eu cillum voluptate irure cillum ea. Commodo laboris ex commodo pariatur nulla. Officia esse reprehenderit laborum ad. Mollit reprehenderit eiusmod sunt voluptate aute. Anim ad nisi tempor reprehenderit voluptate in laborum ad ut dolore laborum cupidatat nulla."
	},
	{
		"name": "Work",
		"title": "male",
		"subtitle": "UTARIAN",
		"link": "floreshardin@utarian.com",
		"phone": "+1 (893) 459-2144",
		"address": "480 Seigel Street, Yardville, Kansas, 2109",
		"about": "Cupidatat aliquip minim labore eu ea officia ea qui cupidatat sit labore fugiat consectetur eu. Irure ipsum anim consequat duis fugiat ipsum dolore consectetur eu cillum voluptate irure cillum ea. Commodo laboris ex commodo pariatur nulla. Officia esse reprehenderit laborum ad. Mollit reprehenderit eiusmod sunt voluptate aute. Anim ad nisi tempor reprehenderit voluptate in laborum ad ut dolore laborum cupidatat nulla."
	},
	{
		"name": "Skills",
		"title": "male",
		"subtitle": "UTARIAN",
		"link": "floreshardin@utarian.com",
		"phone": "+1 (893) 459-2144",
		"address": "480 Seigel Street, Yardville, Kansas, 2109",
		"about": "Cupidatat aliquip minim labore eu ea officia ea qui cupidatat sit labore fugiat consectetur eu. Irure ipsum anim consequat duis fugiat ipsum dolore consectetur eu cillum voluptate irure cillum ea. Commodo laboris ex commodo pariatur nulla. Officia esse reprehenderit laborum ad. Mollit reprehenderit eiusmod sunt voluptate aute. Anim ad nisi tempor reprehenderit voluptate in laborum ad ut dolore laborum cupidatat nulla."
	}
];

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = [
	{
		"name": "Home",
		"title": "male",
		"subtitle": "UTARIAN",
		"link": "floreshardin@utarian.com",
		"phone": "+1 (893) 459-2144",
		"address": "480 Seigel Street, Yardville, Kansas, 2109",
		"about": "Cupidatat aliquip minim labore eu ea officia ea qui cupidatat sit labore fugiat consectetur eu. Irure ipsum anim consequat duis fugiat ipsum dolore consectetur eu cillum voluptate irure cillum ea. Commodo laboris ex commodo pariatur nulla. Officia esse reprehenderit laborum ad. Mollit reprehenderit eiusmod sunt voluptate aute. Anim ad nisi tempor reprehenderit voluptate in laborum ad ut dolore laborum cupidatat nulla."
	},
	{
		"name": "Work",
		"title": "male",
		"subtitle": "UTARIAN",
		"link": "floreshardin@utarian.com",
		"phone": "+1 (893) 459-2144",
		"address": "480 Seigel Street, Yardville, Kansas, 2109",
		"about": "Cupidatat aliquip minim labore eu ea officia ea qui cupidatat sit labore fugiat consectetur eu. Irure ipsum anim consequat duis fugiat ipsum dolore consectetur eu cillum voluptate irure cillum ea. Commodo laboris ex commodo pariatur nulla. Officia esse reprehenderit laborum ad. Mollit reprehenderit eiusmod sunt voluptate aute. Anim ad nisi tempor reprehenderit voluptate in laborum ad ut dolore laborum cupidatat nulla."
	},
	{
		"name": "Skills",
		"title": "male",
		"subtitle": "UTARIAN",
		"link": "floreshardin@utarian.com",
		"phone": "+1 (893) 459-2144",
		"address": "480 Seigel Street, Yardville, Kansas, 2109",
		"about": "Cupidatat aliquip minim labore eu ea officia ea qui cupidatat sit labore fugiat consectetur eu. Irure ipsum anim consequat duis fugiat ipsum dolore consectetur eu cillum voluptate irure cillum ea. Commodo laboris ex commodo pariatur nulla. Officia esse reprehenderit laborum ad. Mollit reprehenderit eiusmod sunt voluptate aute. Anim ad nisi tempor reprehenderit voluptate in laborum ad ut dolore laborum cupidatat nulla."
	}
];

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__header_js__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__view_js__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__footer_js__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__canvas_index_js__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__github_js__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__page_js__ = __webpack_require__(1);
/////////////////////////////////////////////////
// Imports
/////////////////////////////////////////////////








/////////////////////////////////////////////////
// Header
/////////////////////////////////////////////////

document.addEventListener("DOMContentLoaded", function() {

  let maHeader = new __WEBPACK_IMPORTED_MODULE_0__header_js__["a" /* default */]
  let maView = new __WEBPACK_IMPORTED_MODULE_1__view_js__["a" /* default */]
  let maPage = new __WEBPACK_IMPORTED_MODULE_5__page_js__["a" /* default */]
  let maFooter = new __WEBPACK_IMPORTED_MODULE_2__footer_js__["a" /* default */]
  let maCanvas = new __WEBPACK_IMPORTED_MODULE_3__canvas_index_js__["a" /* default */]
  let makeGitHub = new __WEBPACK_IMPORTED_MODULE_4__github_js__["a" /* default */]

})


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "columbus.jpg";

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "hackett.jpg";

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "offers.jpg";

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(19);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(22)(content, options);
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
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__triangle_svg__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__triangle_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__triangle_svg__);


class Icons {
  constructor() {
      this.triangle = __WEBPACK_IMPORTED_MODULE_0__triangle_svg___default.a
      this.makeIcons()
  }
  makeIcons() {
    // console.log('Ma Icon: ', triangle)
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Icons;



/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__data_site_json__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__data_site_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__data_site_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_portfolio_json__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_portfolio_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__data_portfolio_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_social_json__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_social_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__data_social_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__scss_index_scss__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__scss_index_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__scss_index_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__js_site_js__ = __webpack_require__(7);
// Require static files
__webpack_require__(8);
__webpack_require__(9);
__webpack_require__(10);



// Import data




// Imports


// // Import JS



/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Canvas {
  constructor() {
    this.earth = new Image()
    this.winWidth = window.innerWidth
    this.winHeight = window.innerHeight
    this.earth.src = "http://upload.wikimedia.org/wikipedia/commons/d/d2/Svg_example_square.svg"
    this.makeCanvas()
  }
  makeCanvas() {

    var earth = new Image()
    let winWidth = window.innerWidth
    let winHeight = window.innerHeight
    let myCanvas = document.createElement("canvas")
    myCanvas.width = winWidth
    myCanvas.height = winHeight
    myCanvas.setAttribute('id', 'canvas')
    document.body.appendChild(myCanvas)
    var ctx = document.getElementById('canvas').getContext('2d')

    let radgrad = ctx.createRadialGradient(245, 245, 50, 252, 250, 200);
    radgrad.addColorStop(0, '#A7D30C');
    radgrad.addColorStop(0.9, '#019F62');
    ctx.fillStyle = radgrad;

    function init() {
      window.requestAnimationFrame(draw)
    }

    function draw() {

      ctx.clearRect(0, 0, winWidth, winHeight) // clear canvas
      ctx.save()
      // ctx.translate(100, 300)

      ctx.fillRect(0, 0, winWidth, winHeight);

      var time = new Date()
      ctx.rotate(((2 * Math.PI) / 60) * time.getSeconds() + ((2 * Math.PI) / 600) * time.getMilliseconds())
      ctx.drawImage(earth, 300, 300);
      ctx.restore();
      window.requestAnimationFrame(draw)
    }

    init()

  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Canvas;



/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/////////////////////////////////////////////////
// Footer
/////////////////////////////////////////////////

class Footer {
  constructor() {
    this.makeFooter()
  }
  makeFooter() {
    let view = document.getElementById('view')
    let header = document.createElement('footer')
    let siteTitleH1 = document.createElement('small')
    let siteTitleH1Text = document.createTextNode('GotPop footer')

    siteTitleH1.appendChild(siteTitleH1Text)
    header.appendChild(siteTitleH1)
    document.body.appendChild(header)

  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Footer;



/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/////////////////////////////////////////////////
// Github
/////////////////////////////////////////////////

class Github {
  constructor() {
    this.githubUrl = 'https://api.github.com/users/gotpop'
    this.getGithubUrl()
  }
  getGithubUrl() {

    fetch(this.githubUrl).then(function(response) {
      console.log(response)
      return response
    })

  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Github;



/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__data_pages_json__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__data_pages_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__data_pages_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__status__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__page_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__icons__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__icons_triangle_svg__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__icons_triangle_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__icons_triangle_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__html_footer_html__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__html_footer_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__html_footer_html__);
/////////////////////////////////////////////////
// Header
/////////////////////////////////////////////////










/////////////////////////////////////////////////
// Header
/////////////////////////////////////////////////

class Header {
  constructor() {
    this.makeHeader()
  }

  makeHeader() {

    let header = document.createElement('header')
    let siteTitleH1 = document.createElement('h1')
    let siteTitleH1Text = document.createTextNode('GotPop')
    let menuUl = document.createElement('ul')

    menuUl.setAttribute('id', 'menu')
    menuUl.setAttribute('class', 'ma-menu')
    siteTitleH1.appendChild(siteTitleH1Text)
    header.appendChild(siteTitleH1)
    header.appendChild(menuUl)

    this.loopPagesData(menuUl)



    let maIcons = new __WEBPACK_IMPORTED_MODULE_3__icons__["a" /* default */]
    let testDecode = decodeURI(__WEBPACK_IMPORTED_MODULE_5__html_footer_html___default.a)
    console.log(testDecode, 'testDecode')
// console.log(te)



    let maDiv = document.createElement('div')
    maDiv.innerHTML = testDecode
    header.appendChild(maDiv)

    document.body.appendChild(header)

  }

  loopPagesData(menuUl) {
    for (let pageItem of __WEBPACK_IMPORTED_MODULE_0__data_pages_json___default.a) {
      this.makeList(menuUl, pageItem)
    }

  }

  makeList(menuUl, pageItem) {

    let makeLi = document.createElement('li')
    let makeA = document.createElement('a')
    let makeText = document.createTextNode(pageItem.name)

    makeA.setAttribute('href', '#')
    makeA.setAttribute('data-id', pageItem.pageId)

    function listenToThis() {
      __WEBPACK_IMPORTED_MODULE_1__status__["a" /* siteStatus */].currentPage = makeA.getAttribute('data-id')
      let maNewPage = new __WEBPACK_IMPORTED_MODULE_2__page_js__["a" /* default */]
      console.log(__WEBPACK_IMPORTED_MODULE_1__status__["a" /* siteStatus */])
    }

    makeA.addEventListener('click', listenToThis)
    makeLi.setAttribute('class', 'ma-class')

    makeA.appendChild(makeText)
    makeLi.appendChild(makeA)
    menuUl.appendChild(makeLi)

  }

  addListener() {}

}
/* harmony export (immutable) */ __webpack_exports__["a"] = Header;



/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/////////////////////////////////////////////////
// The View
/////////////////////////////////////////////////

class View {

  constructor() {
    this.makeView()
  }

  makeView() {

    let view = document.createElement('div')
    view.setAttribute('id', 'view')
    view.setAttribute('class', 'view')

    let site = document.createElement('div')
    site.appendChild(view)
    site.setAttribute('id', 'site')
    site.setAttribute('class', 'site')


    document.body.appendChild(site)

    // let maIcons = new Icons
    // let testDecode = decodeURI(maIcons.triangle)

  }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = View;



/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(20)(undefined);
// imports


// module
exports.push([module.i, "/* http://meyerweb.com/eric/tools/css/reset/\r\n   v2.0 | 20110126\r\n   License: none (public domain)\r\n*/\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline; }\n\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n  display: block; }\n\nbody {\n  line-height: 1; }\n\nol, ul {\n  list-style: none; }\n\nblockquote, q {\n  quotes: none; }\n\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: '';\n  content: none; }\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n\n* {\n  box-sizing: border-box; }\n\nhtml {\n  overflow-y: scroll;\n  overflow-x: hidden; }\n\nbody {\n  min-height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: row;\n  flex-wrap: wrap; }\n\n.column {\n  display: flex;\n  justify-content: center; }\n\nbody {\n  background: yellow;\n  color: rgba(0, 0, 0, 0.6);\n  font-family: sans-serif; }\n\n.site {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 80vh;\n  width: 100%; }\n\nsection {\n  background: rgba(0, 0, 0, 0.6);\n  padding: 2rem;\n  flex: 1 1 auto;\n  box-sizing: border-box;\n  color: rgba(255, 255, 255, 0.5); }\n\nheader {\n  flex: 1 1 80%;\n  padding: 2rem;\n  background: white;\n  color: #999;\n  text-align: center;\n  align-self: flex-start;\n  display: flex;\n  justify-content: space-between; }\n\nheader .ma-menu {\n  display: flex;\n  margin: 1rem; }\n  header .ma-menu .ma-class a {\n    padding: 1rem 2rem;\n    margin-left: 1rem; }\n    header .ma-menu .ma-class a:hover {\n      transition: all .5s ease;\n      background: yellow; }\n\nfooter {\n  flex: 1 1 100%;\n  padding: 2rem;\n  background: white;\n  color: #999;\n  text-align: center;\n  align-self: flex-end; }\n\ncanvas {\n  background: white;\n  position: fixed;\n  left: 0;\n  top: 0;\n  z-index: -1; }\n\n.view {\n  position: relative;\n  width: 100%;\n  background: rgba(255, 0, 0, 0.2); }\n\n.view::before {\n  content: \"\";\n  display: table;\n  clear: both; }\n\n.view-item {\n  float: left;\n  top: 0;\n  left: 0;\n  margin: 2rem; }\n\n.first {\n  float: left;\n  background: rgba(255, 255, 0, 0.2);\n  transform: translateX(0%);\n  animation-duration: 1s;\n  animation-name: slideout;\n  animation-fill-mode: forwards; }\n\n.last {\n  float: left;\n  background: rgba(255, 255, 0, 0.2);\n  transform: translateX(100%);\n  animation-duration: 1s;\n  animation-name: slidein;\n  animation-fill-mode: forwards; }\n\n.solo {\n  transform: translateX(0%);\n  animation-name: none; }\n\n@keyframes slidein {\n  from {\n    transform: translateX(100%);\n    opacity: 0; }\n  to {\n    transform: translateX(0%);\n    opacity: 1; } }\n\n@keyframes slideout {\n  from {\n    transform: translateX(0%);\n    opacity: 1; }\n  to {\n    transform: translateX(-100%);\n    opacity: 0; } }\n", ""]);

// exports


/***/ }),
/* 20 */
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
/* 21 */
/***/ (function(module, exports) {

module.exports = "<footer>\n    <ul>\n        <li>1</li>\n        <li>2</li>\n        <li>3</li>\n    </ul>\n</footer>\n";

/***/ }),
/* 22 */
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
	fixUrls = __webpack_require__(23);

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
/* 23 */
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


/***/ })
/******/ ]);