(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-main></app-main>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _main_main_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main/main.module */ "./src/app/main/main.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _main_main_module__WEBPACK_IMPORTED_MODULE_3__["MainModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/main/artist/artist-search-page/artist-profile-page/artist-profile-page.component.css":
/*!******************************************************************************************************!*\
  !*** ./src/app/main/artist/artist-search-page/artist-profile-page/artist-profile-page.component.css ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main/artist/artist-search-page/artist-profile-page/artist-profile-page.component.html":
/*!*******************************************************************************************************!*\
  !*** ./src/app/main/artist/artist-search-page/artist-profile-page/artist-profile-page.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  artist-profile-page works!\n</p>\n"

/***/ }),

/***/ "./src/app/main/artist/artist-search-page/artist-profile-page/artist-profile-page.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/main/artist/artist-search-page/artist-profile-page/artist-profile-page.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: ArtistProfilePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArtistProfilePageComponent", function() { return ArtistProfilePageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ArtistProfilePageComponent = /** @class */ (function () {
    function ArtistProfilePageComponent() {
    }
    ArtistProfilePageComponent.prototype.ngOnInit = function () {
    };
    ArtistProfilePageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-artist-profile-page',
            template: __webpack_require__(/*! ./artist-profile-page.component.html */ "./src/app/main/artist/artist-search-page/artist-profile-page/artist-profile-page.component.html"),
            styles: [__webpack_require__(/*! ./artist-profile-page.component.css */ "./src/app/main/artist/artist-search-page/artist-profile-page/artist-profile-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ArtistProfilePageComponent);
    return ArtistProfilePageComponent;
}());



/***/ }),

/***/ "./src/app/main/artist/artist-search-page/artist-search-page.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/main/artist/artist-search-page/artist-search-page.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main/artist/artist-search-page/artist-search-page.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/main/artist/artist-search-page/artist-search-page.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  artist-search-page works!\n</p>\n"

/***/ }),

/***/ "./src/app/main/artist/artist-search-page/artist-search-page.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/main/artist/artist-search-page/artist-search-page.component.ts ***!
  \********************************************************************************/
/*! exports provided: ArtistSearchPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArtistSearchPageComponent", function() { return ArtistSearchPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ArtistSearchPageComponent = /** @class */ (function () {
    function ArtistSearchPageComponent() {
    }
    ArtistSearchPageComponent.prototype.ngOnInit = function () {
    };
    ArtistSearchPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-artist-search-page',
            template: __webpack_require__(/*! ./artist-search-page.component.html */ "./src/app/main/artist/artist-search-page/artist-search-page.component.html"),
            styles: [__webpack_require__(/*! ./artist-search-page.component.css */ "./src/app/main/artist/artist-search-page/artist-search-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ArtistSearchPageComponent);
    return ArtistSearchPageComponent;
}());



/***/ }),

/***/ "./src/app/main/artist/artist.module.ts":
/*!**********************************************!*\
  !*** ./src/app/main/artist/artist.module.ts ***!
  \**********************************************/
/*! exports provided: ArtistModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArtistModule", function() { return ArtistModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _artist_search_page_artist_search_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./artist-search-page/artist-search-page.component */ "./src/app/main/artist/artist-search-page/artist-search-page.component.ts");
/* harmony import */ var _artist_search_page_artist_profile_page_artist_profile_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./artist-search-page/artist-profile-page/artist-profile-page.component */ "./src/app/main/artist/artist-search-page/artist-profile-page/artist-profile-page.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ArtistModule = /** @class */ (function () {
    function ArtistModule() {
    }
    ArtistModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            declarations: [
                _artist_search_page_artist_search_page_component__WEBPACK_IMPORTED_MODULE_2__["ArtistSearchPageComponent"],
                _artist_search_page_artist_profile_page_artist_profile_page_component__WEBPACK_IMPORTED_MODULE_3__["ArtistProfilePageComponent"]
            ]
        })
    ], ArtistModule);
    return ArtistModule;
}());



/***/ }),

/***/ "./src/app/main/artist/artist.service.ts":
/*!***********************************************!*\
  !*** ./src/app/main/artist/artist.service.ts ***!
  \***********************************************/
/*! exports provided: ArtistService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArtistService", function() { return ArtistService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ArtistService = /** @class */ (function () {
    function ArtistService() {
    }
    ArtistService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ArtistService);
    return ArtistService;
}());



/***/ }),

/***/ "./src/app/main/client/client-search-page/client-profile-page/client-profile-page.component.css":
/*!******************************************************************************************************!*\
  !*** ./src/app/main/client/client-search-page/client-profile-page/client-profile-page.component.css ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main/client/client-search-page/client-profile-page/client-profile-page.component.html":
/*!*******************************************************************************************************!*\
  !*** ./src/app/main/client/client-search-page/client-profile-page/client-profile-page.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  client-profile-page works!\n</p>\n"

/***/ }),

/***/ "./src/app/main/client/client-search-page/client-profile-page/client-profile-page.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/main/client/client-search-page/client-profile-page/client-profile-page.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: ClientProfilePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientProfilePageComponent", function() { return ClientProfilePageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ClientProfilePageComponent = /** @class */ (function () {
    function ClientProfilePageComponent() {
    }
    ClientProfilePageComponent.prototype.ngOnInit = function () {
    };
    ClientProfilePageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-client-profile-page',
            template: __webpack_require__(/*! ./client-profile-page.component.html */ "./src/app/main/client/client-search-page/client-profile-page/client-profile-page.component.html"),
            styles: [__webpack_require__(/*! ./client-profile-page.component.css */ "./src/app/main/client/client-search-page/client-profile-page/client-profile-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ClientProfilePageComponent);
    return ClientProfilePageComponent;
}());



/***/ }),

/***/ "./src/app/main/client/client-search-page/client-search-page.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/main/client/client-search-page/client-search-page.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main/client/client-search-page/client-search-page.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/main/client/client-search-page/client-search-page.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  client-search-page works!\n</p>\n"

/***/ }),

/***/ "./src/app/main/client/client-search-page/client-search-page.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/main/client/client-search-page/client-search-page.component.ts ***!
  \********************************************************************************/
/*! exports provided: ClientSearchPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientSearchPageComponent", function() { return ClientSearchPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ClientSearchPageComponent = /** @class */ (function () {
    function ClientSearchPageComponent() {
    }
    ClientSearchPageComponent.prototype.ngOnInit = function () {
    };
    ClientSearchPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-client-search-page',
            template: __webpack_require__(/*! ./client-search-page.component.html */ "./src/app/main/client/client-search-page/client-search-page.component.html"),
            styles: [__webpack_require__(/*! ./client-search-page.component.css */ "./src/app/main/client/client-search-page/client-search-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ClientSearchPageComponent);
    return ClientSearchPageComponent;
}());



/***/ }),

/***/ "./src/app/main/client/client.module.ts":
/*!**********************************************!*\
  !*** ./src/app/main/client/client.module.ts ***!
  \**********************************************/
/*! exports provided: ClientModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientModule", function() { return ClientModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _client_search_page_client_search_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./client-search-page/client-search-page.component */ "./src/app/main/client/client-search-page/client-search-page.component.ts");
/* harmony import */ var _client_search_page_client_profile_page_client_profile_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./client-search-page/client-profile-page/client-profile-page.component */ "./src/app/main/client/client-search-page/client-profile-page/client-profile-page.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ClientModule = /** @class */ (function () {
    function ClientModule() {
    }
    ClientModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            declarations: [
                _client_search_page_client_profile_page_client_profile_page_component__WEBPACK_IMPORTED_MODULE_3__["ClientProfilePageComponent"],
                _client_search_page_client_search_page_component__WEBPACK_IMPORTED_MODULE_2__["ClientSearchPageComponent"]
            ]
        })
    ], ClientModule);
    return ClientModule;
}());



/***/ }),

/***/ "./src/app/main/client/client.service.ts":
/*!***********************************************!*\
  !*** ./src/app/main/client/client.service.ts ***!
  \***********************************************/
/*! exports provided: ClientService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientService", function() { return ClientService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ClientService = /** @class */ (function () {
    function ClientService() {
    }
    ClientService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ClientService);
    return ClientService;
}());



/***/ }),

/***/ "./src/app/main/landing-page/landing-page.component.css":
/*!**************************************************************!*\
  !*** ./src/app/main/landing-page/landing-page.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main/landing-page/landing-page.component.html":
/*!***************************************************************!*\
  !*** ./src/app/main/landing-page/landing-page.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  landing-page works!\n</p>\n"

/***/ }),

/***/ "./src/app/main/landing-page/landing-page.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/main/landing-page/landing-page.component.ts ***!
  \*************************************************************/
/*! exports provided: LandingPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingPageComponent", function() { return LandingPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LandingPageComponent = /** @class */ (function () {
    function LandingPageComponent() {
    }
    LandingPageComponent.prototype.ngOnInit = function () {
    };
    LandingPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-landing-page',
            template: __webpack_require__(/*! ./landing-page.component.html */ "./src/app/main/landing-page/landing-page.component.html"),
            styles: [__webpack_require__(/*! ./landing-page.component.css */ "./src/app/main/landing-page/landing-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LandingPageComponent);
    return LandingPageComponent;
}());



/***/ }),

/***/ "./src/app/main/main.component.css":
/*!*****************************************!*\
  !*** ./src/app/main/main.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main/main.component.html":
/*!******************************************!*\
  !*** ./src/app/main/main.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-3\" [routerLink]=\"'/landing'\">\n    Landing Page\n  </div>\n  <hr>\n  <div class=\"col-md-3\" [routerLink]=\"'/artistsearch'\">\n    Artist Search\n  </div>\n  <hr>\n  <div class=\"col-md-3\" [routerLink]=\"'/artistprofile'\">\n    Artist Profile\n  </div>\n  <hr>\n  <div class=\"col-md-3\" [routerLink]=\"'/projectsearch'\">\n    Project Search\n  </div>\n  <hr>\n  <div class=\"col-md-3\" [routerLink]=\"'/projectprofile'\">\n    Project Profile\n  </div>\n  <hr>\n  <div class=\"col-md-3\" [routerLink]=\"'/clientsearch'\">\n    Client Search\n  </div>\n  <hr>\n  <div class=\"col-md-3\" [routerLink]=\"'/clientprofile'\">\n    Client Profile\n  </div>\n  <hr>\n\n</div>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/main/main.component.ts":
/*!****************************************!*\
  !*** ./src/app/main/main.component.ts ***!
  \****************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
///<reference path="../../../node_modules/@angular/core/src/metadata/directives.d.ts"/>

var MainComponent = /** @class */ (function () {
    function MainComponent() {
    }
    MainComponent.prototype.ngOnInit = function () {
    };
    MainComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/main/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.css */ "./src/app/main/main.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/main/main.module.ts":
/*!*************************************!*\
  !*** ./src/app/main/main.module.ts ***!
  \*************************************/
/*! exports provided: MainModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainModule", function() { return MainModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _project_project_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project/project.service */ "./src/app/main/project/project.service.ts");
/* harmony import */ var _project_project_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./project/project.module */ "./src/app/main/project/project.module.ts");
/* harmony import */ var _artist_artist_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./artist/artist.module */ "./src/app/main/artist/artist.module.ts");
/* harmony import */ var _client_client_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./client/client.module */ "./src/app/main/client/client.module.ts");
/* harmony import */ var _artist_artist_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./artist/artist.service */ "./src/app/main/artist/artist.service.ts");
/* harmony import */ var _client_client_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./client/client.service */ "./src/app/main/client/client.service.ts");
/* harmony import */ var _main_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _main_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./main.router */ "./src/app/main/main.router.ts");
/* harmony import */ var _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./landing-page/landing-page.component */ "./src/app/main/landing-page/landing-page.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var MainModule = /** @class */ (function () {
    function MainModule() {
    }
    MainModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _main_component__WEBPACK_IMPORTED_MODULE_8__["MainComponent"],
                _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_10__["LandingPageComponent"]
            ],
            imports: [
                _main_router__WEBPACK_IMPORTED_MODULE_9__["Routing"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _project_project_module__WEBPACK_IMPORTED_MODULE_3__["ProjectModule"],
                _artist_artist_module__WEBPACK_IMPORTED_MODULE_4__["ArtistModule"],
                _client_client_module__WEBPACK_IMPORTED_MODULE_5__["ClientModule"]
            ],
            exports: [
                _main_component__WEBPACK_IMPORTED_MODULE_8__["MainComponent"]
            ],
            providers: [
                _project_project_service__WEBPACK_IMPORTED_MODULE_2__["ProjectService"],
                _artist_artist_service__WEBPACK_IMPORTED_MODULE_6__["ArtistService"],
                _client_client_service__WEBPACK_IMPORTED_MODULE_7__["ClientService"]
            ]
        })
    ], MainModule);
    return MainModule;
}());



/***/ }),

/***/ "./src/app/main/main.router.ts":
/*!*************************************!*\
  !*** ./src/app/main/main.router.ts ***!
  \*************************************/
/*! exports provided: MAIN_ROUTES, Routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAIN_ROUTES", function() { return MAIN_ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Routing", function() { return Routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./landing-page/landing-page.component */ "./src/app/main/landing-page/landing-page.component.ts");
/* harmony import */ var _artist_artist_search_page_artist_search_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./artist/artist-search-page/artist-search-page.component */ "./src/app/main/artist/artist-search-page/artist-search-page.component.ts");
/* harmony import */ var _project_project_search_page_project_search_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./project/project-search-page/project-search-page.component */ "./src/app/main/project/project-search-page/project-search-page.component.ts");
/* harmony import */ var _client_client_search_page_client_search_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./client/client-search-page/client-search-page.component */ "./src/app/main/client/client-search-page/client-search-page.component.ts");
/* harmony import */ var _project_project_search_page_project_profile_page_project_profile_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./project/project-search-page/project-profile-page/project-profile-page.component */ "./src/app/main/project/project-search-page/project-profile-page/project-profile-page.component.ts");
/* harmony import */ var _artist_artist_search_page_artist_profile_page_artist_profile_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./artist/artist-search-page/artist-profile-page/artist-profile-page.component */ "./src/app/main/artist/artist-search-page/artist-profile-page/artist-profile-page.component.ts");
/* harmony import */ var _client_client_search_page_client_profile_page_client_profile_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./client/client-search-page/client-profile-page/client-profile-page.component */ "./src/app/main/client/client-search-page/client-profile-page/client-profile-page.component.ts");








var MAIN_ROUTES = [
    // Home Page Routes
    { path: '', redirectTo: '/landing', pathMatch: 'full' },
    { path: 'projectsearch', component: _project_project_search_page_project_search_page_component__WEBPACK_IMPORTED_MODULE_3__["ProjectSearchPageComponent"] },
    { path: 'projectprofile', component: _project_project_search_page_project_profile_page_project_profile_page_component__WEBPACK_IMPORTED_MODULE_5__["ProjectProfilePageComponent"] },
    { path: 'artistsearch', component: _artist_artist_search_page_artist_search_page_component__WEBPACK_IMPORTED_MODULE_2__["ArtistSearchPageComponent"] },
    { path: 'artistprofile', component: _artist_artist_search_page_artist_profile_page_artist_profile_page_component__WEBPACK_IMPORTED_MODULE_6__["ArtistProfilePageComponent"] },
    { path: 'clientsearch', component: _client_client_search_page_client_search_page_component__WEBPACK_IMPORTED_MODULE_4__["ClientSearchPageComponent"] },
    { path: 'clientprofile', component: _client_client_search_page_client_profile_page_client_profile_page_component__WEBPACK_IMPORTED_MODULE_7__["ClientProfilePageComponent"] },
    { path: 'landing', component: _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_1__["LandingPageComponent"] }
];
var Routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(MAIN_ROUTES);


/***/ }),

/***/ "./src/app/main/project/project-search-page/project-profile-page/project-profile-page.component.css":
/*!**********************************************************************************************************!*\
  !*** ./src/app/main/project/project-search-page/project-profile-page/project-profile-page.component.css ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main/project/project-search-page/project-profile-page/project-profile-page.component.html":
/*!***********************************************************************************************************!*\
  !*** ./src/app/main/project/project-search-page/project-profile-page/project-profile-page.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  project-profile-page works!\n</p>\n"

/***/ }),

/***/ "./src/app/main/project/project-search-page/project-profile-page/project-profile-page.component.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/main/project/project-search-page/project-profile-page/project-profile-page.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: ProjectProfilePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectProfilePageComponent", function() { return ProjectProfilePageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProjectProfilePageComponent = /** @class */ (function () {
    function ProjectProfilePageComponent() {
    }
    ProjectProfilePageComponent.prototype.ngOnInit = function () {
    };
    ProjectProfilePageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-project-profile-page',
            template: __webpack_require__(/*! ./project-profile-page.component.html */ "./src/app/main/project/project-search-page/project-profile-page/project-profile-page.component.html"),
            styles: [__webpack_require__(/*! ./project-profile-page.component.css */ "./src/app/main/project/project-search-page/project-profile-page/project-profile-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProjectProfilePageComponent);
    return ProjectProfilePageComponent;
}());



/***/ }),

/***/ "./src/app/main/project/project-search-page/project-search-page.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/main/project/project-search-page/project-search-page.component.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main/project/project-search-page/project-search-page.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/main/project/project-search-page/project-search-page.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  project-search-page works!\n</p>\n"

/***/ }),

/***/ "./src/app/main/project/project-search-page/project-search-page.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/main/project/project-search-page/project-search-page.component.ts ***!
  \***********************************************************************************/
/*! exports provided: ProjectSearchPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectSearchPageComponent", function() { return ProjectSearchPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProjectSearchPageComponent = /** @class */ (function () {
    function ProjectSearchPageComponent() {
    }
    ProjectSearchPageComponent.prototype.ngOnInit = function () {
    };
    ProjectSearchPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-project-search-page',
            template: __webpack_require__(/*! ./project-search-page.component.html */ "./src/app/main/project/project-search-page/project-search-page.component.html"),
            styles: [__webpack_require__(/*! ./project-search-page.component.css */ "./src/app/main/project/project-search-page/project-search-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProjectSearchPageComponent);
    return ProjectSearchPageComponent;
}());



/***/ }),

/***/ "./src/app/main/project/project.module.ts":
/*!************************************************!*\
  !*** ./src/app/main/project/project.module.ts ***!
  \************************************************/
/*! exports provided: ProjectModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectModule", function() { return ProjectModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _project_search_page_project_search_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project-search-page/project-search-page.component */ "./src/app/main/project/project-search-page/project-search-page.component.ts");
/* harmony import */ var _project_search_page_project_profile_page_project_profile_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./project-search-page/project-profile-page/project-profile-page.component */ "./src/app/main/project/project-search-page/project-profile-page/project-profile-page.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ProjectModule = /** @class */ (function () {
    function ProjectModule() {
    }
    ProjectModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            declarations: [
                _project_search_page_project_search_page_component__WEBPACK_IMPORTED_MODULE_2__["ProjectSearchPageComponent"],
                _project_search_page_project_profile_page_project_profile_page_component__WEBPACK_IMPORTED_MODULE_3__["ProjectProfilePageComponent"]
            ]
        })
    ], ProjectModule);
    return ProjectModule;
}());



/***/ }),

/***/ "./src/app/main/project/project.service.ts":
/*!*************************************************!*\
  !*** ./src/app/main/project/project.service.ts ***!
  \*************************************************/
/*! exports provided: ProjectService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectService", function() { return ProjectService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProjectService = /** @class */ (function () {
    function ProjectService() {
    }
    ProjectService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ProjectService);
    return ProjectService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/jeff/TRIKONCMS/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map