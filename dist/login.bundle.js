/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/login.js":
/*!**********************!*\
  !*** ./src/login.js ***!
  \**********************/
/***/ (() => {

eval("// src/login.js\r\ndocument.getElementById('loginForm').addEventListener('submit', function (e) {\r\n    console.log('test2');\r\n    \r\n    e.preventDefault(); // หยุดการส่งฟอร์ม\r\n\r\n    const username = document.getElementById('username').value;\r\n    const password = document.getElementById('password').value;\r\n\r\n    // เพิ่มการตรวจสอบชื่อผู้ใช้และรหัสผ่านที่นี่\r\n    if (username === 'admin' && password === 'password') {\r\n        document.getElementById('message').innerText = 'Login successful!';\r\n    } else {\r\n        document.getElementById('message').innerText = 'Invalid username or password.';\r\n    }\r\n});\r\n\n\n//# sourceURL=webpack://webpack/./src/login.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/login.js"]();
/******/ 	
/******/ })()
;