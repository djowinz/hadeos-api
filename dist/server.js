/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var apollo_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-server */ "apollo-server");
/* harmony import */ var apollo_server__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(apollo_server__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/environment */ "./src/utils/environment.ts");
/* harmony import */ var _type_defs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./type-defs */ "./src/type-defs.ts");



const server = new apollo_server__WEBPACK_IMPORTED_MODULE_0__.ApolloServer({
    resolvers: {},
    typeDefs: _type_defs__WEBPACK_IMPORTED_MODULE_2__.default,
    playground: _utils_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apollo.playground,
    cacheControl: {
        defaultMaxAge: 0,
    },
});
server.listen(_utils_environment__WEBPACK_IMPORTED_MODULE_1__.environment.port)
    .then(({ url }) => {
    console.log(`Server ready at ${url}. `);
});
if (false) {}


/***/ }),

/***/ "./src/type-defs.ts":
/*!**************************!*\
  !*** ./src/type-defs.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var apollo_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-server */ "apollo-server");
/* harmony import */ var apollo_server__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(apollo_server__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (apollo_server__WEBPACK_IMPORTED_MODULE_0__.gql `
  type User {
      id: String!
      accountType: String
      email: String!
      createdAt: Int!
      updatedAt: Int
      devices: [Device]
      scripts: [Script]
  }
  type Device {
      id: String!
      deviceId: String!
      ownerId: String!
      owner: User
      lastActivity: Int
      createdAt: Int
      updatedAt: Int
  }
  type Script {
      id: String!
      ownerId: String!
      owner: User
      name: String!
      description: String
      functionBody: String!
      createdAt: Int!
      updatedAt: Int
      sharable: Boolean
      favorites: Int
  }
  type ScriptExecution {
      id: String!
      scriptId: String!
      script: Script
      state: String
      createdAt: Int!
      deviceId: String
      device: Device
  }
  type Query {
    user(id: String!): User
    users: [User]
    admins: [User]
    script(id: String!): Script
    scripts(ownerId: String!): [Script]
    device(id: String!): Device
    devices(ownerId: String!): [Device]
    executions(scriptId: String!): [ScriptExecution]
  }
`);


/***/ }),

/***/ "./src/utils/environment.ts":
/*!**********************************!*\
  !*** ./src/utils/environment.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => /* binding */ environment,
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
__webpack_require__(/*! dotenv */ "dotenv").config();
const defaultPort = 4000;
const environment = {
    apollo: {
        introspection: process.env.APOLLO_INTROSPECTION === 'true',
        playground: process.env.APOLLO_PLAYGROUND === 'true'
    },
    postgres: {
        host: process.env.PGHOST || 'localhost',
        user: process.env.PGUSER || '',
        password: process.env.PGPASSWORD || '',
        database: process.env.PGDATABSE || 'public',
        port: Number(process.env.PGPORT) || 5432,
    },
    migrate: process.env.MIGRATE === 'true',
    port: process.env.PORT || defaultPort
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (environment);


/***/ }),

/***/ "apollo-server":
/*!********************************!*\
  !*** external "apollo-server" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("apollo-server");;

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("dotenv");;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/main.ts");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=server.js.map