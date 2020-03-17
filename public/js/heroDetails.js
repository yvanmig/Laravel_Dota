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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/heroDetails.js":
/*!*************************************!*\
  !*** ./resources/js/heroDetails.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

$(".refresh").click(function () {
  $date = new Date();
  $previousMillis = $date.getTime();
  $(".containerHero").toggleClass('containerAppear'); //Brouiller le personnage tant que toutes les valeurs ne sont pas affichées
  // $("#gifLoading").css("display" , "block").delay(400);

  var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://api.opendota.com/api/heroStats",
    "method": "GET",
    "headers": {
      "cookie": "__cfduid=d5d64367cc61de7f6538056c9126e2eda1582288201"
    }
  };
  $.ajax(settings).done(function (response) {
    if ($previousMillis - $date.getTime() > 50) {
      alert("c'est long");
    }

    $random = Math.floor(Math.random() * response.length);
    $containerResponse = response[$random]; //Vérifier si cette variable ne foire pas tout

    $urlImg = "https://api.opendota.com" + $containerResponse.img;
    $("#bgHero").css("background-image", "url(" + $urlImg + ")");
    $(".heroPhoto").attr("src", $urlImg);
    $("h1").text($containerResponse.localized_name);
    $(".range").text($containerResponse.attack_type);
    console.log($containerResponse.roles.length);
    $(".heroRoles").empty();
    $(".rolesRefresh").empty(); // Spaghetti code
    // Afficher les rôles (au nombre variant entre 2 et 6) dans des nouvelles div, en séparant par des virgules sauf pour le dernier role

    $(".rolesRefresh").prepend(" - ");

    for ($i = 0; $i < $containerResponse.roles.length; $i++) {
      $(".rolesRefresh").append($containerResponse.roles[$i]);

      if ($i < $containerResponse.roles.length - 1) {
        $(".rolesRefresh").append(", ");
      }
    }

    $winRate = Math.floor($containerResponse.pro_win * 100 / $containerResponse.pro_pick);
    $("#winRate").text($winRate);
    $("#statstr").text($containerResponse.base_str);
    $("#statagi").text($containerResponse.base_agi);
    $("#statint").text($containerResponse.base_int);
    $mainStat = $containerResponse.primary_attr; //  if ($mainStat == "str") {
    //    alert("#stat"+$mainStat);
    //    $("#main"+$mainStat+" img").addClass("mainStatBorder");
    //    $("#stat"+$mainStat).toggleClass("mainStatBold");
    //  }

    if ($mainStat == "str") {
      $(".containerHero").css("background-color", "rgba(151, 17, 17, 0.5)");
      $("#heroName h2").text("Strength");
    } else if ($mainStat == "agi") {
      $(".containerHero").css("background-color", "rgba(15, 69, 13, 0.5)");
      $("#heroName h2").text("Agility");
    } else if ($mainStat == "int") {
      $(".containerHero").css("background-color", "rgba(0, 93, 112, 0.5)");
      $("#heroName h2").text("Intelligence");
    }

    $(".containerHero").toggleClass('containerAppear'); //Enlever le flou une fois qu'on a tout chargé

    $(".winFill").css("width", $winRate + "%"); //Mettre à jour la barre de taux de victoire

    console.log($containerResponse);
  });
});

/***/ }),

/***/ 3:
/*!*******************************************!*\
  !*** multi ./resources/js/heroDetails.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\yvang\APIDOTA\dota\resources\js\heroDetails.js */"./resources/js/heroDetails.js");


/***/ })

/******/ });