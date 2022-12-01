/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _consulta__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./consulta */ \"./src/consulta.js\");\n\nvar rick = new _consulta__WEBPACK_IMPORTED_MODULE_0__.Consulta();\nrick.personajes();\nrick.capitulos();\nrick.localizacion();\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/consulta.js":
/*!*************************!*\
  !*** ./src/consulta.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Consulta\": () => (/* binding */ Consulta)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nvar Consulta = /*#__PURE__*/function () {\n  function Consulta() {\n    _classCallCheck(this, Consulta);\n\n    this.url = \"https://rickandmortyapi.com/api\";\n  }\n\n  _createClass(Consulta, [{\n    key: \"personajes\",\n    value: function personajes() {\n      // fetch(`https://rickandmortyapi.com/api/character`)\n      fetch(\"\".concat(this.url, \"/character\")).then(function (respuesta) {\n        return respuesta.json();\n      }).then(function (respuesta) {\n        // console.log(respuesta);\n        var results = respuesta.results;\n        var personajes = \"\";\n        var contador = 0;\n        results.map(function (personaje) {\n          var created = personaje.created,\n              gender = personaje.gender,\n              id = personaje.id,\n              image = personaje.image,\n              location = personaje.location,\n              name = personaje.name,\n              origin = personaje.origin,\n              species = personaje.species,\n              status = personaje.status,\n              url = personaje.url;\n          if (contador < 10) personajes += \"\\n\\n\\n    <div class=\\\"card mb-2 text-light\\\" style=\\\"max-width: 1500px; background: rgb(73,157,52);\\n    background: radial-gradient(circle, rgba(73,157,52,1) 0%, rgba(0,0,0,1) 100%);\\\">\\n  <div class=\\\"row g-0\\\">\\n    <div class=\\\"col-md-4\\\">\\n    <br>\\n    <img class=\\\"img-fluid\\\" src=\\\"\".concat(image, \"\\\" alt=\\\"\\\">\\n    </div>\\n    <div class=\\\"col-md-8\\\">  \\n        <h1 class=\\\"card-title\\\" >\").concat(name, \" | No. \").concat(id, \"</h1>\\n        <p class=\\\"card-text\\\">                    \\n        <div class=\\\"card-body\\\">\\n            <p><b>Creacion: </b>\").concat(created, \"</p>\\n            <p><b>Genero: </b>\").concat(gender, \"</p>\\n            <p><b>Localizacion: </b>\").concat(location.name, \"</p>\\n            <p><b>Origen: </b>\").concat(origin.name, \"</p>\\n            <p><b>Especie: </b>\").concat(species, \"</p>\\n            <p><b>Estado: </b>\").concat(status, \"</p></p>\\n      </div>\\n    </div>\\n  </div>\\n</div>\\n                <br>\\n                \");\n          contador++;\n        });\n        $(\"#personajes\").html(personajes);\n      })[\"catch\"](function (error) {\n        console.log(\"\".concat(error));\n      });\n    }\n  }, {\n    key: \"capitulos\",\n    value: function capitulos() {\n      fetch(\"\".concat(this.url, \"/episode\")).then(function (respuesta) {\n        return respuesta.json();\n      }).then(function (respuesta) {\n        // console.log('capitulos',respuesta);\n        var results = respuesta.results; // console.log(results);\n\n        var capitulos = \"\";\n        var contador = 0;\n        results.map(function (capitulo) {\n          var id = capitulo.id,\n              name = capitulo.name,\n              air_date = capitulo.air_date,\n              episode = capitulo.episode,\n              url = capitulo.url,\n              created = capitulo.created;\n          if (contador < 10) capitulos += \"\\n                <div class=\\\"card text-center text-light\\\" style=\\\"max-width: 1500px; background: rgb(73,157,52);\\n                background: radial-gradient(circle, rgba(73,157,52,1) 0%, rgba(0,0,0,1) 100%);\\\">\\n                <div class=\\\"card-header\\\">\\n                        <h1>\".concat(name, \" | No. \").concat(id, \"</h1>\\n                    </div>\\n                    <div class=\\\"card-body\\\">\\n                    <p><b>Genero: </b>\").concat(air_date, \"</p>\\n                    <p><b>Genero: </b>\").concat(episode, \"</p>\\n                        <p><b>Creacion: </b>\").concat(created, \"</p>\\n                    </div>\\n                </div>\\n                <br>\\n                \");\n          contador++;\n        });\n        $(\"#capitulos\").html(capitulos);\n      })[\"catch\"](function (error) {\n        console.log(\"\".concat(error));\n      });\n    }\n  }, {\n    key: \"localizacion\",\n    value: function localizacion() {\n      fetch(\"\".concat(this.url, \"/location\")).then(function (respuesta) {\n        return respuesta.json();\n      }).then(function (respuesta) {\n        // console.log('capitulos',respuesta);\n        var results = respuesta.results;\n        console.log(results);\n        var localizacion = \"\";\n        var contador = 0;\n        results.map(function (ubicacion) {\n          var id = ubicacion.id,\n              name = ubicacion.name,\n              type = ubicacion.type,\n              dimension = ubicacion.dimension,\n              url = ubicacion.url,\n              created = ubicacion.created;\n          if (contador < 10) localizacion += \"\\n                <div class=\\\"card text-center text-light\\\" style=\\\"max-width: 1500px; background: rgb(73,157,52);\\n                background: radial-gradient(circle, rgba(73,157,52,1) 0%, rgba(0,0,0,1) 100%);\\\">\\n                <div class=\\\"card-header\\\">\\n                        <h1>\".concat(name, \" | No. \").concat(id, \"</h1>\\n                    </div>\\n                    <div class=\\\"card-body\\\">\\n                    <p><b>Genero: </b>\").concat(type, \"</p>\\n                    <p><b>Genero: </b>\").concat(dimension, \"</p>\\n                        <p><b>Creacion: </b>\").concat(created, \"</p>\\n                    </div>\\n                </div>\\n                <br>\\n                \");\n          contador++;\n        });\n        $(\"#localizacion\").html(localizacion);\n      })[\"catch\"](function (error) {\n        console.log(\"\".concat(error));\n      });\n    }\n  }]);\n\n  return Consulta;\n}();\n\n//# sourceURL=webpack:///./src/consulta.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.js");
/******/ 	
/******/ })()
;