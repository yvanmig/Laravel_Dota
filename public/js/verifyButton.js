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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/verifyButton.js":
/*!**************************************!*\
  !*** ./resources/js/verifyButton.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

$(document).ready(function () {
  var maxLength = $("#nameUser").attr("maxlength");
  var limitHeight = 400;
  var buttonWidth = 40;
  var buttonHeight = 25;
  var hitBoxWidth = buttonWidth + 45;
  var hitBoxHeight = buttonHeight + 40;
  var buttonMoveX = Math.floor(Math.random() * 80 + 30);
  var buttonMoveY;
  var cptHit = 30;
  var scoreHit = 0;
  var firstTime = true;
  $("#nameUser").on("keyup", function () {
    var maxLength = $(this).attr("maxlength");

    if (maxLength == $(this).val().length) {
      $("#cptLength").text(maxLength);
      $('.containerLimit').addClass("open");
      $('.containerLimit').css({
        "height": limitHeight,
        "z-index": "10"
      });
      $('.containerLimit div').css("opacity", "1");
      $("#annoyingButton").css({
        "width": buttonWidth + "px",
        "height": buttonHeight + "px"
      });
      $("#annoyingButtonHitBox").css({
        "width": hitBoxWidth + "px",
        "height": hitBoxHeight + "px"
      });
    }
  });
  $("#annoyingButtonHitBox").mouseenter(function () {
    if (cptHit < 4) {
      buttonMoveX = Math.floor(Math.random() * ($(".containerLimit").width() - hitBoxWidth));
      buttonMoveY = Math.floor(Math.random() * ($(".containerLimit").height() - hitBoxHeight));
      $(this).css('top', buttonMoveY);
      $(this).css('left', buttonMoveX);
      $(this).css('transition', cptHit + "s");
      console.log("hahaha");
      cptHit += 0.1;

      if (cptHit == 0.5) {
        cptHit = 3;
      }
    } else if (cptHit >= 3.3) {
      cptHit == 30;
    }
  });
  $("#annoyingButton").click(function () {
    scoreHit++;
    maxLength++;
    limitHeight += 75;

    if (limitHeight > 470) {
      $(".containerLimit div p").text("It's running away !");
    }

    if (limitHeight > 520) {
      $(".containerLimit div p").text("You're good !");
    }

    if (limitHeight > 600) {
      $(".containerLimit div p").text("Too good..");
    }

    if (limitHeight > 650) {
      $(".containerLimit div p").text("Don't you have anything better to do ?");
    }

    if (limitHeight > 700) {
      $(".containerLimit div p").text("You know you can stop anytime");
    }

    if (limitHeight > 750) {
      $(".containerLimit div p").text("You clicked it " + scoreHit + " times");

      if (scoreHit > 7 && firstTime) {
        alert("Can you stop please ? I think you broke the page");
        firstTime = false;
      } else if (scoreHit > 7 && !firstTime) {
        alert("Okay now I'm worried about you");
      }
    }

    $('.containerLimit').css({
      "height": limitHeight
    });
    $("#nameUser").attr('maxlength', maxLength);
    $("#cptLength").text(maxLength);
    cptHit = 0.1;
    buttonMoveX = Math.floor(Math.random() * ($(".containerLimit").width() - hitBoxWidth));
    buttonMoveY = Math.floor(Math.random() * ($(".containerLimit").height() - hitBoxHeight));
    $("#annoyingButtonHitBox").css('top', buttonMoveY);
    $("#annoyingButtonHitBox").css('left', buttonMoveX);
    $("#annoyingButtonHitBox").css('transition', cptHit + "s");
  });
});

/***/ }),

/***/ 6:
/*!********************************************!*\
  !*** multi ./resources/js/verifyButton.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Téléchargements\Cours\MMI2\S4 prog\laravel\Laravel_Dota\resources\js\verifyButton.js */"./resources/js/verifyButton.js");


/***/ })

/******/ });