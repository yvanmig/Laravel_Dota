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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/buttonAnimation.js":
/*!*****************************************!*\
  !*** ./resources/js/buttonAnimation.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var animateButton = function animateButton(e) {
  e.preventDefault;
  currentId = $(e.target).attr('id');
  console.log(currentId);

  if (currentId == "like") {
    $('body').css("background-color", "#a31f35");
  } else if (currentId == "superLike") {
    $('body').css("background-color", "#bc9924");
  } else if (currentId == "dislike") {
    $('body').css("background-color", "#482828");
  } //reset animation


  e.target.classList.remove('animate');
  e.target.classList.add('animate');
  setTimeout(function () {
    e.target.classList.remove('animate');
    $('body').css("background-color", "#36465D");
  }, 850);
}; //Si clic sur l'image contenue dans le bouton, interagir sur le bouton


var animateButtonImg = function animateButtonImg(e) {
  parentId = $(e.target).parent().attr('id'); //Prendre le parent de l'image (le bouton qui contient)

  console.log(parentId);

  if (parentId == "like") {
    $('body').css("background-color", "#a31f35");
  } else if (parentId == "superLike") {
    $('body').css("background-color", "#bc9924");
  } else if (parentId == "dislike") {
    $('body').css("background-color", "#482828");
  }

  document.getElementById(parentId).preventDefault; //reset animation

  document.getElementById(parentId).classList.remove('animate');
  document.getElementById(parentId).classList.add('animate');
  setTimeout(function () {
    document.getElementById(parentId).classList.remove('animate');
    $('body').css("background-color", "#36465D");
  }, 850);
};

var bubblyButtons = document.getElementsByClassName("blocReaction");
var bubblyButtonsImg = document.getElementsByClassName("reactionImg");

for (var i = 0; i < bubblyButtons.length; i++) {
  bubblyButtons[i].addEventListener('click', animateButton, false);
  bubblyButtonsImg[i].addEventListener('click', animateButtonImg, false);
}

/***/ }),

/***/ 1:
/*!***********************************************!*\
  !*** multi ./resources/js/buttonAnimation.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Téléchargements\Cours\MMI2\S4 prog\laravel\Laravel_Dota\resources\js\buttonAnimation.js */"./resources/js/buttonAnimation.js");


/***/ })

/******/ });