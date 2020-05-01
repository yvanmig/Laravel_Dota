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
  var numbArray = [];
  var open = 0;
  var cptImg = 0;
  var imageChecked = false;
  var checkTime;
  var myImg;

  for (var a = 1; a < 121; a++) {
    numbArray[a] = a;
  } //Faire apparaître les boutons radio pour choisir l'âge


  $("#buttonAge").click(function () {
    if (open == 0) {
      open = 1;
      numbArray = shuffle(numbArray);
      $.each(numbArray, function (index, value) {
        if (value == undefined) {
          //L'une des valeurs est toujours undefined, raison inconnue
          value = 19;
        }

        $("#hardSelect").append($('<label> <input type="radio" name="age" value="' + value + '" > <p style="transition:opacity ' + value / 20 + 's ease-in-out, transform 0.1s ' + value / 30 + 's;">' + value + '</p> <div class="fillAge" </div></label>'));
      });
      setTimeout(function () {
        $("#hardSelect").addClass("selectOpen");
        $("#hardSelect label p").addClass("selectOpen");
        $("#hardSelect label p").addClass("pOpen");
      }, 1);
    } else if (open == 1) {}
  }); //Informer l'utilisateur que son nom est déjà pris.

  $("#checkName").click(function () {
    if ($("#nameUser").val().length > 0) {
      $("#containerNameValidation ").css({
        "z-index": 5,
        "height": "40px"
      });
      $("#generateName").css("opacity", "1");
      $('#errorName').text("This name is already taken, please generate a new one");
    } else {
      $('#errorName').text("Please enter your name");
    }
  }); //Vérifier l'âge sélectionné

  $("#hardSelect").on("click", "p", function () {
    var age = $(this).text();

    if (age < 18) {
      alert("Do your parents know you're here ?");
    }

    if (age > 100) {
      alert("Yeah... I doubt you're that old");
    }
  }); //Prendre la valeur actuelle de l'input du nom et changer de place chaque lettre de manière aléatoire

  $("#genName").click(function () {
    $("#checkName").find("input").prop("checked", true);
    $('#errorName').empty();
    $name = $("#nameUser").val();

    var arrOrig = _toConsumableArray($name);

    var arrRev = [];
    var arrCheck = [];
    var indexRandom;
    arrOrig.forEach(function (item, index, array) {
      arrCheck[index] = 0;
    });

    for (var i = 0; i < arrOrig.length; i++) {
      do {
        indexRandom = Math.floor(Math.random() * arrOrig.length); //Créer un indexrandom dépendant de la taille du nom
      } while (arrCheck[indexRandom] == 1); //S'assurer que la valeur à l'index n'a pas déjà été touchée


      var indexReverse = arrOrig.length - i - 1; //Index allant de la fin du tableau jusqu'au début

      arrRev[indexRandom] = arrOrig[indexReverse]; //mettre à jour le tableau receveur

      arrCheck[indexRandom] = 1; //Actualiser le tableau de booléens pour confirmer que la valeur à cette index a déjà été changée
    }

    var result = arrRev.join('');
    $('#userNameValidation').text(result);
    $('input[name=nameUser]').val(result); //Changer la valeur de l'input

    $("#checkName img").css("opacity", 1);
  }); //Aggrandir l'image non filtrée, pour signifier qu'on est train de sélectionner l'image

  $("#containerPhotosHard label").click(function (e) {
    e.preventDefault();
    var imageFill = $(this).find(".pictureFill img");

    if (!imageChecked) {
      $("#instruction").text("Click fast !");
      cptImg += 10;

      if (cptImg >= 80) {
        $("#instruction").text("You won !");
        $(this).find("input").prop("checked", true);
        imageChecked = true;
        cptImg = 100;
        stopWidth();
      }

      imageFill.css("width", cptImg + "%");
    }
  }); //Lancer la fonction qui fait rétrécir l'image au fil du temps, tant qu'on hover

  $("#containerPhotosHard label").mouseenter(function (e) {
    e.preventDefault();

    if (!imageChecked) {
      myImg = $(this).find(".pictureFill img");
      setWidth();
    }
  }); //Diminuer la taille de l'image dans le temps

  function setWidth() {
    cptImg -= 10;

    if (cptImg <= 0) {
      cptImg = 0;
    }

    myImg.css("width", cptImg + "%");
    checkTime = setTimeout(setWidth, 800);
  } //Arrêter le timeout qui réduit la taille


  function stopWidth() {
    clearTimeout(checkTime);
  }

  $("#containerPhotosHard label").mouseleave(function () {
    if (!imageChecked) {
      cptImg = 0;
      $(".pictureFill img").css("width", cptImg + "%");
      stopWidth();
    }
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

function shuffle(array) {
  var currentIndex = array.length,
      temporaryValue,
      randomIndex; // While there remain elements to shuffle...

  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1; // And swap it with the current element.

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

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