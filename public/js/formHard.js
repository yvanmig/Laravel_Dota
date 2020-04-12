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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/formHard.js":
/*!**********************************!*\
  !*** ./resources/js/formHard.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

$(document).ready(function () {
  $("#generateName").click(function () {
    $('#errorName').empty();
    $name = $("#nameUser").val();

    var arrOrig = _toConsumableArray($name);

    var arrRev = [];
    var arrCheck = [];
    var indexRandom; // $name = $name.split("");

    arrOrig.forEach(function (item, index, array) {
      arrCheck[index] = 0;
    });

    for (var i = 0; i < arrOrig.length; i++) {
      do {
        indexRandom = Math.floor(Math.random() * arrOrig.length);
      } while (arrCheck[indexRandom] == 1);

      var indexReverse = arrOrig.length - i - 1;
      arrRev[indexRandom] = arrOrig[indexReverse];
      arrCheck[indexRandom] = 1;
    }

    var result = arrRev.join('');
    $('#userNameValidation').text(result);
  });
  $("#nameUser").on("keyup", function () {
    var maxLength = $(this).attr("maxlength");

    if (maxLength == $(this).val().length) {
      // alert("You can't write more than " + maxLength +" characters")
      //Faire apparaitre une popup où on propose à l'utilisateur de monter la limite de caractères. Le bouton + se déplace aléatoirement après chaque clic
      //Mettre un gros bouton vert "Annuler" et un petit gris "Confirmer" pour changer ou non la valeur et fermer le popup
      $('.containerLimit').addClass("open");
      $('.containerLimit').css("opacity", "1");
      $('.containerLimit div').css("opacity", "1");
    }
  });
  $("#checkName").click(function () {
    $('#errorName').text("This name is already taken, please generate a new one");
  });
});

function reverseString() {
  for (var i = 0; i < arrOrig.length; i++) {
    var indexReverse = arrOrig.length - i - 1;
    arrRev[i] = arrOrig[indexReverse];
  }
}

$(document).keypress(function (event) {
  if (event.which == '13') {
    alert("The 'Enter' key was temporarily disabled, please contact our Customer Service");
    event.preventDefault();
  }
});

/***/ }),

/***/ 5:
/*!****************************************!*\
  !*** multi ./resources/js/formHard.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Téléchargements\Cours\MMI2\S4 prog\laravel\Laravel_Dota\resources\js\formHard.js */"./resources/js/formHard.js");


/***/ })

/******/ });