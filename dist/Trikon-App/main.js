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

/***/ "./src/app/TS Models/User.ts":
/*!***********************************!*\
  !*** ./src/app/TS Models/User.ts ***!
  \***********************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User(User) {
        this.ID = User.ID;
        this.UserName = User.Username;
        this.Email = User.Email;
        this.FName = User.FName;
        this.LName = User.LName;
        this.Type = User.Type;
        this.Company = User.Company;
        this.Bio = User.Bio;
        this.UploadDate = User.UploadDate;
        this.HashedPassword = User.HashedPassword;
        this.Ledger = User.Ledger;
        this.Documents = User.Documents;
        this.ProfilePicture = User.ProfilePicture;
        this.Delete = User.Delete;
    }
    return User;
}());



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

// todo color change
// todo iphone triangle fix


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

/***/ "./src/app/main/about/about.component.css":
/*!************************************************!*\
  !*** ./src/app/main/about/about.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  .text {\n    position: absolute;\n    width: 63vh;\n    height: 80vh;\n    left: calc((100vw - 63vh)/2);\n    top: 10vh;\n    text-align: center;\n    font-family: \"Rajdhani\", sans-serif;\n    background: url('aboutpage.png') no-repeat;\n    background-size: contain;\n    overflow-y: scroll;\n  }\n\n  ::-webkit-scrollbar {\n    width: 10px;  /* remove scrollbar space */\n    background: transparent;\n    z-index: 1;/* optional: just make scrollbar invisible */\n  }\n\n  /* optional: show position indicator in red */\n\n  ::-webkit-scrollbar-thumb {\n    background: #852731;\n    border-radius: 0;\n    z-index: 1;\n    opacity: 0\n  }\n"

/***/ }),

/***/ "./src/app/main/about/about.component.html":
/*!*************************************************!*\
  !*** ./src/app/main/about/about.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<h4 class=\"text\">\n</h4>\n"

/***/ }),

/***/ "./src/app/main/about/about.component.m.css":
/*!**************************************************!*\
  !*** ./src/app/main/about/about.component.m.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media (max-width: 800px) {\n\n  .text {\n    position: absolute;\n    width: 90vw ;\n    height: 90vw;\n    left: 5%;\n    top: 15%;\n    text-align: center;\n    font-family: \"Rajdhani\", sans-serif;\n    url('../../../assets/aboutpage.png')\n    background-size: cover;\n    background-repeat: no-repeat;\n    overflow-y: scroll;\n  }\n\n\n\n  @media (max-height: 900px) and (min-height: 700px) {\n    .text {\n      height: 40vh;\n      width: 100%;\n      left: 0;\n      top: 20vh;\n      overflow-y: scroll;\n      padding: 24px;\n    }\n  }\n\n}\n\n"

/***/ }),

/***/ "./src/app/main/about/about.component.ts":
/*!***********************************************!*\
  !*** ./src/app/main/about/about.component.ts ***!
  \***********************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
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

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/main/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/main/about/about.component.css"), __webpack_require__(/*! ./about.component.m.css */ "./src/app/main/about/about.component.m.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
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

module.exports = ".background {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  overflow: hidden;\n  z-index: 0;\n  background-image: url('stars.png');\n  background-size: cover;\n}\n\n.Logo {\n  width: 192px;\n  height: 48px;\n  position: absolute;\n  z-index: 2;\n  top: 30px;\n  left: 24px;\n  cursor: pointer;\n  background-image: url('TrikonLogo.jpg');\n  background-size: 10%;\n  border: none;\n  outline: none;\n}\n\n.Red-Button  {\n  height: 36px;\n  width: 36px;\n  border-radius: 18px;\n  position: absolute;\n  top: 30px;\n  right: 24px;\n  color: white;\n  outline: none;\n  z-index: 3;\n  background-image: url('Button1.jpg');\n  background-size: 200%;\n  cursor: pointer;\n  border: 1px solid #363636;\n}\n\n.Tabs {\n  position: absolute;\n  top: 100px;\n  right: 28px;\n  left: 24px;\n  margin :0;\n  width: 40%;\n  z-index: 5;\n  justify-content: flex-start;\n\n}\n\n.tab  {\n  cursor: pointer;\n  padding:0;\n  margin: 0;\n  color: white;\n  font-family: \"Futura PT\", sans-serif;\n  font-size: 36px;\n  font-weight: 200;\n  height: 48px;\n  z-index: 6;\n  text-align: left;\n}\n\n.label  {\n  padding: 6px;\n  transition: .3s ease;\n}\n\n.label:hover  {\n  -webkit-transform: translateX(18%);\n          transform: translateX(18%);\n  text-shadow: 0 0  20px white;\n\n}\n"

/***/ }),

/***/ "./src/app/main/artist/artist-search-page/artist-search-page.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/main/artist/artist-search-page/artist-search-page.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"background\">\n  <!-- TABS -->\n  <div class=\" Tabs\" [@slideInOut]>\n    <div class=\"tab row\" >\n      <h4 class=\"label\" >\n        directors\n      </h4>\n    </div>\n    <div class=\"tab row\" >\n      <h4 class=\"label\">\n        producers\n      </h4>\n    </div>\n    <div class=\"tab row\" >\n      <h4 class=\"label\">\n        cinematographers\n      </h4>\n    </div>\n    <div class=\"tab row\">\n      <h4 class=\"label\">\n        musicians\n      </h4>\n    </div>\n    <div class=\"tab row\">\n      <h4 class=\"label\">\n        editors\n      </h4>\n    </div>\n    <div class=\"tab row\">\n      <h4 class=\"label\">\n        animators\n      </h4>\n    </div>\n  </div>\n</div>\n"

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
/* harmony import */ var _artist_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../artist.service */ "./src/app/main/artist/artist.service.ts");
/* harmony import */ var _TS_Models_User__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../TS Models/User */ "./src/app/TS Models/User.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _artist_search_animation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./artist-search.animation */ "./src/app/main/artist/artist-search-page/artist-search.animation.ts");
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
    function ArtistSearchPageComponent(adminService, router) {
        this.adminService = adminService;
        this.router = router;
    }
    ArtistSearchPageComponent.prototype.ngOnInit = function () {
        var newUser = new _TS_Models_User__WEBPACK_IMPORTED_MODULE_2__["User"]({
            ID: '',
            UserName: 'JHaskell',
            Email: 'JHaskell@trikon.xyz',
            FName: 'John',
            LName: 'Haskell',
            Type: 'Artist',
            Company: 'Trikon',
            Bio: 'I code, film, and chill',
            UploadDate: '',
            HashedPassword: 'SecretPassword',
            Ledger: [],
            Documents: [],
            ProfilePicture: [],
            Delete: false,
        });
        this.adminService.getArtists().subscribe(function (Response) { return console.log(Response); });
    };
    ArtistSearchPageComponent.prototype.navToHome = function () {
        this.router.navigateByUrl('/Landing');
    };
    ArtistSearchPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-artist-search-page',
            template: __webpack_require__(/*! ./artist-search-page.component.html */ "./src/app/main/artist/artist-search-page/artist-search-page.component.html"),
            styles: [__webpack_require__(/*! ./artist-search-page.component.css */ "./src/app/main/artist/artist-search-page/artist-search-page.component.css")],
            animations: [_artist_search_animation__WEBPACK_IMPORTED_MODULE_4__["SlideInOut"]]
        }),
        __metadata("design:paramtypes", [_artist_service__WEBPACK_IMPORTED_MODULE_1__["ArtistService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ArtistSearchPageComponent);
    return ArtistSearchPageComponent;
}());



/***/ }),

/***/ "./src/app/main/artist/artist-search-page/artist-search.animation.ts":
/*!***************************************************************************!*\
  !*** ./src/app/main/artist/artist-search-page/artist-search.animation.ts ***!
  \***************************************************************************/
/*! exports provided: SlideInOut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlideInOut", function() { return SlideInOut; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

//TRIGGER 1
var SlideInOut = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('slideInOut', [
    //going in
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('void => *', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])('.tab', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            transform: 'translateX(-200%)',
            opacity: 0
        })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])('.tab', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["stagger"])('-200ms', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('600ms .1s ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                opacity: 1,
                transform: 'translateY(0%)'
            }))
        ]))
    ]),
    //going out
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('in => void', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])('.tile', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            opacity: 1,
            transform: 'translateY(0%)'
        })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])('.tile', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["stagger"])('-500ms', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('100ms .1s ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                opacity: 0,
                transform: 'translateY(-200%)'
            }))
        ]))
    ])
]);


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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
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
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]
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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/internal/operators */ "./node_modules/rxjs/internal/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2__);
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
    function ArtistService(http) {
        this.http = http;
        this.Base = "http://trikon.xyz/users";
    }
    // CREATE ARTIST
    ArtistService.prototype.createArtist = function (Artist) {
        var _this = this;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpRequest"]('POST', this.Base + '/artist/', Artist);
        return this.http.request(req).pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (Response) { return _this.formatUserArray(Response); }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2__["last"])());
    };
    // GET ARTIST
    ArtistService.prototype.getArtist = function (Artist_ID) {
        var _this = this;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpRequest"]('GET', this.Base + '/artist/' + Artist_ID);
        return this.http.request(req).pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (Response) { return _this.formatUserArray(Response); }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2__["last"])());
    };
    // GET ARTIST
    ArtistService.prototype.getArtists = function () {
        var _this = this;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpRequest"]('GET', this.Base + '/artist/');
        return this.http.request(req).pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (Response) { return _this.formatUserArray(Response); }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2__["last"])());
    };
    // UPDATE ARTIST
    ArtistService.prototype.updateArtist = function (Attribute, NewValue, Artist_ID, Mod_ID) {
        var _this = this;
        var body = {
            Attribute: Attribute, NewValue: NewValue,
            Artist_ID: Artist_ID, Mod_ID: Mod_ID
        };
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpRequest"]('POST', this.Base + '/artist/update', body);
        return this.http.request(req).pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (Response) { return _this.formatUserArray(Response); }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2__["last"])());
    };
    // REMOVE ARTIST
    ArtistService.prototype.removeArtist = function (Artist_ID, Mod_ID) {
        var _this = this;
        var body = {
            Artist_ID: Artist_ID, Mod_ID: Mod_ID
        };
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpRequest"]('POST', this.Base + '/artist/remove', body);
        return this.http.request(req).pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (Response) { return _this.formatUserArray(Response); }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2__["last"])());
    };
    ArtistService.prototype.formatUserArray = function (event) {
        if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpEventType"].Response) {
            var Users = [];
            if (event.body instanceof Array) {
                Users = event.body;
            }
            else {
                return event.body;
            }
            return Users;
        }
    };
    ArtistService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ArtistService);
    return ArtistService;
}());



/***/ }),

/***/ "./src/app/main/auth.service.ts":
/*!**************************************!*\
  !*** ./src/app/main/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/internal/operators */ "./node_modules/rxjs/internal/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        this.Base = "http://trikon.xyz/users";
    }
    // TODO LOG IN
    // TODO LOG OUT
    // TODO IS LOGGED IN / IN SESSION
    // CREATE ADMIN
    AuthService.prototype.createAdmin = function (Admin) {
        var _this = this;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpRequest"]('POST', this.Base + '/admin/', Admin);
        return this.http.request(req).pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (Response) { return _this.formatUserArray(Response); }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2__["last"])());
    };
    // GET ADMIN
    AuthService.prototype.getAdmin = function (Admin_ID) {
        var _this = this;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpRequest"]('GET', this.Base + '/admin/' + Admin_ID);
        return this.http.request(req).pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (Response) { return _this.formatUserArray(Response); }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2__["last"])());
    };
    // GET ADMINS
    AuthService.prototype.getAdmins = function () {
        var _this = this;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpRequest"]('GET', this.Base + '/admin/');
        return this.http.request(req).pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (Response) { return _this.formatUserArray(Response); }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2__["last"])());
    };
    // UPDATE ADMIN
    AuthService.prototype.updateAdmin = function (Attribute, NewValue, Admin_ID) {
        var _this = this;
        var body = {
            Attribute: Attribute, NewValue: NewValue, Admin_ID: Admin_ID
        };
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpRequest"]('POST', this.Base + '/admin/update', body);
        return this.http.request(req).pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (Response) { return _this.formatUserArray(Response); }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2__["last"])());
    };
    // REMOVE ADMIN
    AuthService.prototype.removeAdmin = function (Admin_ID) {
        var _this = this;
        var body = {
            Admin_ID: Admin_ID
        };
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpRequest"]('POST', this.Base + '/admin/remove', body);
        return this.http.request(req).pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (Response) { return _this.formatUserArray(Response); }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2__["last"])());
    };
    AuthService.prototype.formatUserArray = function (event) {
        if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpEventType"].Response) {
            var Users = [];
            if (event.body instanceof Array) {
                Users = event.body;
            }
            else {
                return event.body;
            }
            return Users;
        }
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AuthService);
    return AuthService;
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
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
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
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/internal/operators */ "./node_modules/rxjs/internal/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
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
    function ClientService(http) {
        this.http = http;
        this.Base = "http://trikon.xyz/users";
    }
    // CREATE CLIENT
    ClientService.prototype.createClient = function (Client) {
        var _this = this;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.Base + '/client/', Client);
        return this.http.request(req).pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (Response) { return _this.formatUserArray(Response); }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_1__["last"])());
    };
    // GET CLIENT
    ClientService.prototype.getClient = function (Client_ID) {
        var _this = this;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.Base + '/client/' + Client_ID);
        return this.http.request(req).pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (Response) { return _this.formatUserArray(Response); }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_1__["last"])());
    };
    // GET CLIENTS
    ClientService.prototype.getClients = function () {
        var _this = this;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.Base + '/client/');
        return this.http.request(req).pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (Response) { return _this.formatUserArray(Response); }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_1__["last"])());
    };
    // UPDATE CLIENT
    ClientService.prototype.updateClient = function (Attribute, NewValue, Client_ID, Mod_ID) {
        var _this = this;
        var body = {
            Attribute: Attribute, NewValue: NewValue,
            Client_ID: Client_ID, Mod_ID: Mod_ID
        };
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.Base + '/client/update', body);
        return this.http.request(req).pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (Response) { return _this.formatUserArray(Response); }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_1__["last"])());
    };
    // REMOVE CLIENT
    ClientService.prototype.removeClient = function (Client_ID, Mod_ID) {
        var _this = this;
        var body = {
            Client_ID: Client_ID, Mod_ID: Mod_ID
        };
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.Base + '/client/remove', body);
        return this.http.request(req).pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (Response) { return _this.formatUserArray(Response); }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_1__["last"])());
    };
    ClientService.prototype.formatUserArray = function (event) {
        if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpEventType"].Response) {
            var Users = [];
            if (event.body instanceof Array) {
                Users = event.body;
            }
            else {
                return event.body;
            }
            return Users;
        }
    };
    ClientService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ClientService);
    return ClientService;
}());



/***/ }),

/***/ "./src/app/main/contact/contact.component.css":
/*!****************************************************!*\
  !*** ./src/app/main/contact/contact.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container  {\n  border: 1px solid #FFE200;\n  width: 70vh;\n  height: 70vh;\n  position: absolute;\n  top: 15vh;\n  left: calc((100vw - 70vh)/2);\n  border-radius: 35vh;\n}\n\n.title {\n  position: absolute;\n  width: 200px;\n  left: calc(50% - 100px);\n  color: #a22e3d;\n  font-size: 24px;\n}\n\n.instructions {\n  color: #FFE200;\n  font-family: \"futura pt\", sans-serif;\n  font-size: 19px;\n  text-align: center;\n  margin-bottom: 0;\n  line-height: 22px;\n  width: 100%;\n  position: absolute;\n  top: calc( 40% + 28px);\n  left: 0;\n}\n\n.contact-title  {\n  font-family: \"futura pt\", sans-serif;\n  font-weight: 700;\n  font-size: 24px;\n  line-height: 24px;\n  width: 100%;\n  text-align: center;\n  color: #FFE200;\n  position: absolute;\n  top: 40%;\n  left: 0;\n\n}\n\n.border {\n  position: absolute;\n  top: 20vh;\n  left:  calc((100% - 60vh)/2);\n  border: 2px solid #FFE200 !important;\n  height: 60vh;\n  width: 60vh;\n  border-radius: 30vh;\n}\n"

/***/ }),

/***/ "./src/app/main/contact/contact.component.html":
/*!*****************************************************!*\
  !*** ./src/app/main/contact/contact.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"border\">\n  <!--<h4 class=\"Contact-Label\" >-->\n  <!--contact-->\n  <!--</h4>-->\n  <h4 class=\"contact-title\">  contact@Trikon.xyz   </h4>\n  <p class=\"instructions\"> +1 (323) 919-9629 </p>\n</div>\n"

/***/ }),

/***/ "./src/app/main/contact/contact.component.m.css":
/*!******************************************************!*\
  !*** ./src/app/main/contact/contact.component.m.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media (max-width: 800px) {\n  .border {\n    position: absolute;\n    top: 10vh !important;\n    left:  calc((100% - 60vw)/2);\n    border: 2px solid #FFE200 !important;\n    height: 60vw;\n    width: 60vw;\n    border-radius: 30vh;\n  }\n  .contact-title{\n    font-size: 16px;\n  }\n  .instructions {\n    font-size: 14px;\n  }\n\n  /* IPHONE X */\n  @media (max-height: 900px) and (min-height: 700px) {\n    .border {\n      position: absolute;\n      top: 25vh;\n      left:  calc((100% - 60vw)/2);\n      border: 2px solid #FFE200 !important;\n      height: 60vw;\n      width: 60vw;\n      border-radius: 30vh;\n    }\n  }\n}\n\n\n"

/***/ }),

/***/ "./src/app/main/contact/contact.component.ts":
/*!***************************************************!*\
  !*** ./src/app/main/contact/contact.component.ts ***!
  \***************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
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

var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/main/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/main/contact/contact.component.css"), __webpack_require__(/*! ./contact.component.m.css */ "./src/app/main/contact/contact.component.m.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/main/content.service.ts":
/*!*****************************************!*\
  !*** ./src/app/main/content.service.ts ***!
  \*****************************************/
/*! exports provided: ContentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentService", function() { return ContentService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/internal/operators */ "./node_modules/rxjs/internal/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContentService = /** @class */ (function () {
    function ContentService(http) {
        this.http = http;
        this.BaseURL = 'http://45.48.226.49/content/';
    }
    ContentService.prototype.postBTS = function (ProjectName, Formdata) {
        var _this = this;
        // DESCRIBE CONTENT
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'content': 'FormData' });
        // SET UP TOKEN
        var token = localStorage.getItem('id_token') ? '?token=' + localStorage.getItem('id_token') : '';
        // SET UP REQUEST
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpRequest"]('POST', this.BaseURL + '/content/' + ProjectName, Formdata, {
            headers: headers,
            reportProgress: true
        });
        // BOMB'S AWAY
        return this.http.request(req).pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (message) { return _this.retrievePercentageUploaded(message); }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2__["last"])());
    };
    ContentService.prototype.retrievePercentageUploaded = function (event) {
        if (event.type === 1) {
            var num = event.loaded / event.total * 100;
            //this.GalleryPercentage.emit(num);
            return num;
        }
    };
    ContentService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ContentService);
    return ContentService;
}());



/***/ }),

/***/ "./src/app/main/demo/demo.component.css":
/*!**********************************************!*\
  !*** ./src/app/main/demo/demo.component.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n\n.Video{\n  position: absolute;\n  left: 10vw;\n  width: 80vw;\n  height: 34vw;\n  top: 15vh;\n}\n"

/***/ }),

/***/ "./src/app/main/demo/demo.component.html":
/*!***********************************************!*\
  !*** ./src/app/main/demo/demo.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- VIDEO -->\n      <!--<source src=\"https://player.vimeo.com/video/268527243\" type=\"video/mp4\"  />-->\n<iframe src=\"https://player.vimeo.com/video/289959294\"  class=\"Video\" frameborder=\"0\"> </iframe>\n\n"

/***/ }),

/***/ "./src/app/main/demo/demo.component.m.css":
/*!************************************************!*\
  !*** ./src/app/main/demo/demo.component.m.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media (max-width: 800px) {\n\n  .Video{\n    position: absolute;\n    left: 0;\n    width: 100vw;\n    height: 34vw;\n    top: 25vh;\n  }\n  @media (max-height: 900px) and (min-height: 700px) {\n\n\n    .Video{\n      position: absolute;\n      left: 0;\n      width: 100vw;\n      height: 34vw;\n      top: 30vh;\n    }\n\n  }\n  @media all and (orientation:landscape) {\n    .Video{\n      position: absolute;\n      left: calc(50vw - 25vw);\n      width: 50vw;\n      height: 34vh;\n      top: 30vh;\n    }\n\n  }\n\n}\n\n\n\n"

/***/ }),

/***/ "./src/app/main/demo/demo.component.ts":
/*!*********************************************!*\
  !*** ./src/app/main/demo/demo.component.ts ***!
  \*********************************************/
/*! exports provided: DemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoComponent", function() { return DemoComponent; });
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

var DemoComponent = /** @class */ (function () {
    function DemoComponent() {
    }
    DemoComponent.prototype.ngOnInit = function () {
    };
    DemoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-demo',
            template: __webpack_require__(/*! ./demo.component.html */ "./src/app/main/demo/demo.component.html"),
            styles: [__webpack_require__(/*! ./demo.component.css */ "./src/app/main/demo/demo.component.css"), __webpack_require__(/*! ./demo.component.m.css */ "./src/app/main/demo/demo.component.m.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DemoComponent);
    return DemoComponent;
}());



/***/ }),

/***/ "./src/app/main/landing-page/landing-page.component.css":
/*!**************************************************************!*\
  !*** ./src/app/main/landing-page/landing-page.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* COMPONENTS */\n\n.contact  {\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  width: 100vw;\n  height: 100vh;\n  z-index: -1;\n  transition: .3s ;\n  /*border: 1px solid rgba(255, 226, 0, 1);*/\n}\n\n.Coming_Soon  {\n  font-family: Chromatica-Black;\n  font-size: 40px;\n  font-weight: 700;\n  width: 100%;\n  text-align: center;\n  color: white;\n  position: absolute;\n  left: 0;\n  top: calc(50% - 24px);\n}\n\n.about  {\n  position: absolute;\n  width: calc(100vw);\n  bottom: 0;\n  z-index: 2;\n  height: 100vh;\n  transition: .3s;\n}\n\n.demo{\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  width: 100vw;\n  height: 100vh;\n  z-index: -1;\n  transition: .3s;\n  overflow: hidden;\n  background-image: url('Gray1.jpg');\n  background-size: cover;\n}\n\n/* BACKGROUND GRADIENT */\n\n.background {\n  position: fixed;\n  width: 100vw;\n  height: 100vh;\n  top: 0;\n  left: 0;\n  overflow: hidden !important;\n  z-index: 0;\n  background-image: url('Background.jpg');\n  background-position-x: 100%;\n  background-size: cover;\n  transition: .3s ease;\n\n}\n\n/* DROP DOWN MENU COMPONENTS */\n\napp-sign-in {\n  position: absolute;\n  top: 24px ;\n  right: 24px;\n}\n\n.Tabs {\n      position: absolute;\n      bottom: 84px;\n      right: 28px;\n      left: 24px;\n      margin :0;\n      width: 40%;\n      z-index: 6;\n      justify-content: flex-start;\n\n    }\n\n.tab  {\n          cursor: pointer;\n          padding:0;\n          margin: 0;\n          color: black;\n          font-family: \"Rajdhani\", sans-serif;\n          font-size: 36px;\n          font-weight: 700;\n          height: 48px;\n          z-index: 6;\n          text-align: left;\n        }\n\n.label  {\n              padding: 6px;\n              transition: .3s ease;\n            }\n\n.label:hover  {\n              -webkit-transform: translateX(18%);\n                      transform: translateX(18%);\n              text-shadow: 0 0  20px white;\n\n            }\n\n/*---------------------------- */\n\n/* VIDEO COMPONENTS */\n\n.crop-wrapper  {\n  position: absolute;\n  width: 70vh;\n  left: calc((100vw - 70vh)/2);\n  top: 20vh;\n  height: 70vh;\n  padding: 0;\n  z-index: 1;\n  overflow: hidden;\n  background-color: transparent;\n  -webkit-clip-path: polygon(50% 0%, 0% 86.6%, 100% 86.6%);\n  clip-path: polygon(50% 0%, 0% 86.6%, 100% 86.6%);\n  transition: .5s ease;\n}\n\n.video  {\n        position: absolute;\n        width: 100%;\n        height: 87%;\n        top: -1%;\n        right: 0;\n      }\n\n/* ---------------------*/\n\n/* TRIANGLE */\n\n.Border {\n  position: absolute;\n  width: 72vh;\n  left: calc((100% - 72vh)/2);\n  top: 18.5vh;\n  height: 62vh;\n  padding: 0;\n  z-index: 0;\n  overflow: hidden;\n  background-color: white;\n  opacity: .8;\n  -webkit-clip-path: polygon(50% 0%, 0% 86.6%, 100% 86.6%);\n  clip-path: polygon(50% 0%, 0% 86.6%, 100% 86.6%);\n  box-shadow: 0 3px 1px -2px rgba(0,0,0,.3), 0 2px 2px 0 rgba(0,0,0,.18), 0 1px 5px 0 rgba(0,0,0,.18);\n}\n\n.Contact-Label  {\n  position: absolute;\n  top: 24px;\n  left: 0;\n  font-family: \"Futura PT\", sans-serif;\n  font-size: 48px;\n  font-weight: 700;\n  width: 100%;\n  text-align: center;\n  margin: 0;\n  padding: 0;\n  color: #FFE200;\n  transition: .3s ease;\n  cursor: default;\n}\n\n.back{\n  width: 48px;\n  height: 48px;\n  position: absolute;\n  top: calc(40vh - 24px) ;\n  left: calc(50% - 24px);\n  transition-delay: 2s;\n  transition: .3s ease;\n  cursor: pointer;\n}\n\n.Logo {\n  width: 192px;\n  height: 96px;\n  position: absolute;\n  z-index: 3;\n  bottom: 0;\n  left: 24px;\n  cursor: pointer;\n  border: none;\n  outline: none;\n  background-image: url('LogoBlack.png');\n  background-size: contain;\n  background-repeat: no-repeat;\n}\n\n.Logo1 {\n  width: 165px;\n  height: 96px;\n  position: absolute;\n  z-index: 3;\n  bottom: -28px;\n  left: 28px;\n  cursor: pointer;\n  border: none;\n  outline: none;\n  background-image: url('LogoBlack.png');\n  background-size: contain;\n  background-repeat: no-repeat;\n}\n"

/***/ }),

/***/ "./src/app/main/landing-page/landing-page.component.html":
/*!***************************************************************!*\
  !*** ./src/app/main/landing-page/landing-page.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- BACKGROUND -->\n<div class=\"background\" >\n  <!--&lt;!&ndash; ABOUT PAGE &ndash;&gt;-->\n  <!--<app-about class=\"about\" [ngStyle]=\"!About ? {transform: 'translateX(200vw)'} : {transform: 'translateX(0)'}\" >-->\n\n  <!--</app-about>-->\n  <!--&lt;!&ndash; CONTACT PAGE &ndash;&gt;-->\n  <!--<app-contact class=\"contact\"  [ngStyle]=\"!Contact ? {transform: 'translateY(200vh)'} : {transform: 'translateX(0)'}\" >-->\n\n  <!--</app-contact>-->\n  <!--&lt;!&ndash; DEMO PAGE &ndash;&gt;-->\n  <!--<app-demo class=\"demo\"  [ngStyle]=\"!Demo ? {transform: 'translateX(-200vw)'} : {transform: 'translateX(0)'}\" >-->\n\n  <!--</app-demo>-->\n\n\n  <h3 class=\"Coming_Soon\">Coming Soon January 2019</h3>\n</div>\n\n\n\n\n<!-- TABS -->\n<!--<div class=\" Tabs\" >-->\n  <!--<div class=\"tab row\" [ngStyle]=\"Demo ? {color: '#FFE200' , 'padding-left': '26px'} :{} \">-->\n    <!--<h4 class=\"label\" (click)=\"setDemo()\">-->\n      <!--demo-->\n    <!--</h4>-->\n  <!--</div>-->\n  <!--<div class=\"tab row\" [ngStyle]=\"Contact ? {color: '#FFE200' , 'padding-left': '26px'} : Demo ?  {color: '#FFFFFF'} : {}\">-->\n    <!--<h4 class=\"label\" (click)=\"setContact()\" >-->\n      <!--contact-->\n    <!--</h4>-->\n  <!--</div>-->\n  <!--<div class=\"tab row\" [ngStyle]=\"About ? {color: '#FFE200' , 'padding-left': '26px'} : Demo ?  {color: '#FFFFFF'} : {}\">-->\n    <!--<h4 class=\"label\" (click)=\"setAbout()\">-->\n      <!--about-->\n    <!--</h4>-->\n  <!--</div>-->\n<!--</div>-->\n\n\n\n\n\n<!--&lt;!&ndash; VIDEO &ndash;&gt;-->\n<!--<div class=\"VIDEO\">-->\n  <!--<div class=\"crop-wrapper\"  [ngStyle]=\"Contact ? {transform: 'translateY(-150vh)'} : About ? {transform: 'translateY(-150vw)'} : Demo ? {transform: 'translateY(-150vh)'} : {transform: 'translateX(0)'}\" >-->\n    <!--<iframe src=\"https://player.vimeo.com/video/286718601?background=1\" allow=\"autoplay\" class=\"video\" width=\"90vw\" height=\"45vw\" frameborder=\"0\" #Player > </iframe>-->\n  <!--</div>-->\n<!--</div>-->\n\n\n\n<!--<div (click)=\"removeAll()\" class=\"Logo\" [ngStyle]=\"!Demo ? {opacity: 1} : {opacity: 0}\"></div>-->\n<!--<div (click)=\"removeAll()\" class=\"Logo1\" [ngStyle]=\"Demo ?  {opacity: 1} : {opacity: 0}\"></div>-->\n"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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
    function LandingPageComponent(router) {
        this.router = router;
        this.LogInShow = false;
        this.Contact = false;
        this.About = false;
        this.Demo = false;
        this.isIOS = false;
        this.isIOS = !!navigator.platform && /iPad|iPhone|iPod/i.test(navigator.platform);
    }
    LandingPageComponent.prototype.toggleVideo = function (event) {
    };
    LandingPageComponent.prototype.navHome = function () {
        this.router.navigateByUrl('/Landing');
    };
    LandingPageComponent.prototype.ngAfterViewInit = function () {
    };
    LandingPageComponent.prototype.ngOnInit = function () {
    };
    LandingPageComponent.prototype.toggleLogIn = function () {
        this.LogInShow = !this.LogInShow;
    };
    LandingPageComponent.prototype.setContact = function () {
        this.Contact = !this.Contact;
        if (this.Contact) {
            this.About = false;
            this.Demo = false;
        }
    };
    LandingPageComponent.prototype.setAbout = function () {
        this.About = !this.About;
        if (this.About) {
            this.Contact = false;
            this.Demo = false;
        }
    };
    LandingPageComponent.prototype.setDemo = function () {
        this.Demo = !this.Demo;
        if (this.Demo) {
            this.Contact = false;
            this.About = false;
        }
    };
    LandingPageComponent.prototype.removeAll = function () {
        this.Demo = false;
        this.About = false;
        this.Contact = false;
    };
    LandingPageComponent.prototype.ngOnChanges = function () {
    };
    LandingPageComponent.prototype.ngOnDestroy = function () {
    };
    LandingPageComponent.prototype.hideAddressbar = function () {
        document.body.style.minHeight = '1000px';
        window.scrollTo(0, 1);
        document.body.style.minHeight = window.innerHeight + 'px';
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('Player'),
        __metadata("design:type", Object)
    ], LandingPageComponent.prototype, "Player", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('BACKGROUND'),
        __metadata("design:type", Object)
    ], LandingPageComponent.prototype, "background", void 0);
    LandingPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-landing-page',
            template: __webpack_require__(/*! ./landing-page.component.html */ "./src/app/main/landing-page/landing-page.component.html"),
            styles: [__webpack_require__(/*! ./landing-page.component.css */ "./src/app/main/landing-page/landing-page.component.css"), __webpack_require__(/*! ./landing-page.m.component.css */ "./src/app/main/landing-page/landing-page.m.component.css")],
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], LandingPageComponent);
    return LandingPageComponent;
}());



/***/ }),

/***/ "./src/app/main/landing-page/landing-page.m.component.css":
/*!****************************************************************!*\
  !*** ./src/app/main/landing-page/landing-page.m.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media (max-width: 800px) {\n  /* VIDEO COMPONENTS */\n  .crop-wrapper {\n    position: absolute;\n    width: 80vw;\n    left: calc((100% - 80vw) / 2);\n    top: 10vh;\n    height: 80vw;\n    padding: 0;\n    z-index: 1;\n    overflow: hidden;\n    background-color: transparent;\n    -webkit-clip-path: polygon(50% 0%, 0% 86.6%, 100% 86.6%);\n    clip-path: polygon(50% 0%, 0% 86.6%, 100% 86.6%);\n    transition: .5s ease;\n  }\n  .video  {\n    position: absolute;\n    width: 100%;\n    height: 87%;\n    top: -1%;\n    right: 0;\n  }\n\n  /* ---------------------*/\n  .label:hover  {\n    -webkit-transform: translateX(0);\n            transform: translateX(0);\n    text-shadow: 0 0  20px white;\n\n  }\n  .label  {\n    padding: 6px;\n    transition: .3s ease;\n  }\n}\n\n\n"

/***/ }),

/***/ "./src/app/main/landing-page/navigator/navigator.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/main/landing-page/navigator/navigator.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main/landing-page/navigator/navigator.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/main/landing-page/navigator/navigator.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  navigator works!\n</p>\n"

/***/ }),

/***/ "./src/app/main/landing-page/navigator/navigator.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/main/landing-page/navigator/navigator.component.ts ***!
  \********************************************************************/
/*! exports provided: NavigatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigatorComponent", function() { return NavigatorComponent; });
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

var NavigatorComponent = /** @class */ (function () {
    function NavigatorComponent() {
    }
    NavigatorComponent.prototype.ngOnInit = function () {
    };
    NavigatorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navigator',
            template: __webpack_require__(/*! ./navigator.component.html */ "./src/app/main/landing-page/navigator/navigator.component.html"),
            styles: [__webpack_require__(/*! ./navigator.component.css */ "./src/app/main/landing-page/navigator/navigator.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavigatorComponent);
    return NavigatorComponent;
}());



/***/ }),

/***/ "./src/app/main/main.component.css":
/*!*****************************************!*\
  !*** ./src/app/main/main.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "app-sign-in {\n  position: absolute;\n  top: 30px ;\n  right: 24px;\n}\n.addressbar {\n\n}\n.container {\n  position: fixed;\n  width: 100vw;\n  height: 100%;\n  top: 0;\n  left: 0;\n}\n.background {\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  width: 100vw;\n  height: 100vh;\n  z-index: -1;\n  overflow: hidden;\n  background-image: url('WEBAPP2.jpg');\n  background-size: cover;\n}\n.Pass {\n  position: absolute;\n  left: calc(50% - 100px);\n  background-color: white;\n  width: 200px;\n  height: 30px;\n  bottom: 24px;\n  z-index: 3;\n\n}\n.User {\n  position: absolute;\n  left: calc(50% - 100px);\n  background-color: white;\n  width: 200px;\n  height: 30px;\n  bottom: 82px;\n  z-index: 3;\n\n}\n@media (max-width: 800px) {\n  .Pass {\n    position: absolute;\n    left: 10vw;\n    background-color: white;\n    width: 80vw;\n    height: 30px;\n    bottom: 24px;\n    z-index: 3;\n\n  }\n\n\n  .User {\n    position: absolute;\n    left: 10vw;\n    background-color: white;\n    width: 80vw;\n    height: 30px;\n    bottom: 82px;\n    z-index: 3;\n\n  }\n}\n"

/***/ }),

/***/ "./src/app/main/main.component.html":
/*!******************************************!*\
  !*** ./src/app/main/main.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" [ngStyle]=\"(showLogin && (innerWidth < 800)) ? {transform: 'translateY(-200px)',   transition: '.3s ease-in-out'}: showLogin ? {transform: 'translateY(-136px)', transition: '.3s ease-in-out'} : {transition: '.3s ease-in-out'} \">\n  <router-outlet></router-outlet>\n</div>\n\n<!--<div class=\"background\" *ngIf=\"showBackground\">-->\n  <!--<input type=\"text\" class=\"User\" placeholder=\"Username\">-->\n  <!--<input type=\"password\" class=\"Pass\" placeholder=\"Password\">-->\n<!--</div>-->\n\n<!--<app-sign-in (click)=\"buttonClick()\" > </app-sign-in>-->\n"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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
    function MainComponent(router) {
        this.router = router;
        this.showLogin = false;
        this.showBackground = false;
    }
    MainComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.innerWidth = window.innerWidth;
        console.log(this.innerWidth);
        setTimeout(function () {
            _this.showBackground = true;
        }, 500);
    };
    MainComponent.prototype.buttonClick = function () {
        var _this = this;
        this.showLogin = !this.showLogin;
        setTimeout(function () {
            if (!_this.showBackground) {
                _this.showBackground = false;
            }
        }, 500);
    };
    MainComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/main/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.css */ "./src/app/main/main.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
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
/* harmony import */ var _landing_page_navigator_navigator_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./landing-page/navigator/navigator.component */ "./src/app/main/landing-page/navigator/navigator.component.ts");
/* harmony import */ var _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./sign-in/sign-in.component */ "./src/app/main/sign-in/sign-in.component.ts");
/* harmony import */ var _content_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./content.service */ "./src/app/main/content.service.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./auth.service */ "./src/app/main/auth.service.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./about/about.component */ "./src/app/main/about/about.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/main/contact/contact.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _demo_demo_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./demo/demo.component */ "./src/app/main/demo/demo.component.ts");
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
                _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_10__["LandingPageComponent"],
                _landing_page_navigator_navigator_component__WEBPACK_IMPORTED_MODULE_11__["NavigatorComponent"],
                _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_12__["SignInComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_16__["AboutComponent"],
                _contact_contact_component__WEBPACK_IMPORTED_MODULE_18__["ContactComponent"],
                _demo_demo_component__WEBPACK_IMPORTED_MODULE_20__["DemoComponent"]
            ],
            imports: [
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__["BrowserAnimationsModule"],
                _main_router__WEBPACK_IMPORTED_MODULE_9__["Routing"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_19__["HttpClientModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _project_project_module__WEBPACK_IMPORTED_MODULE_3__["ProjectModule"],
                _artist_artist_module__WEBPACK_IMPORTED_MODULE_4__["ArtistModule"],
                _client_client_module__WEBPACK_IMPORTED_MODULE_5__["ClientModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatButtonModule"]
            ],
            exports: [
                _main_component__WEBPACK_IMPORTED_MODULE_8__["MainComponent"]
            ],
            providers: [
                _project_project_service__WEBPACK_IMPORTED_MODULE_2__["ProjectService"],
                _artist_artist_service__WEBPACK_IMPORTED_MODULE_6__["ArtistService"],
                _client_client_service__WEBPACK_IMPORTED_MODULE_7__["ClientService"],
                _content_service__WEBPACK_IMPORTED_MODULE_13__["ContentService"],
                _auth_service__WEBPACK_IMPORTED_MODULE_14__["AuthService"]
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
    { path: '', pathMatch: 'full', component: _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_1__["LandingPageComponent"] },
    { path: 'Search', component: _project_project_search_page_project_search_page_component__WEBPACK_IMPORTED_MODULE_3__["ProjectSearchPageComponent"] },
    { path: 'Project/:projectname', component: _project_project_search_page_project_profile_page_project_profile_page_component__WEBPACK_IMPORTED_MODULE_5__["ProjectProfilePageComponent"] },
    { path: 'Artists', component: _artist_artist_search_page_artist_search_page_component__WEBPACK_IMPORTED_MODULE_2__["ArtistSearchPageComponent"] },
    { path: 'artistprofile', component: _artist_artist_search_page_artist_profile_page_artist_profile_page_component__WEBPACK_IMPORTED_MODULE_6__["ArtistProfilePageComponent"] },
    { path: 'clientsearch', component: _client_client_search_page_client_search_page_component__WEBPACK_IMPORTED_MODULE_4__["ClientSearchPageComponent"] },
    { path: 'clientprofile', component: _client_client_search_page_client_profile_page_client_profile_page_component__WEBPACK_IMPORTED_MODULE_7__["ClientProfilePageComponent"] },
    { path: 'Landing', component: _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_1__["LandingPageComponent"] }
];
var Routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(MAIN_ROUTES);


/***/ }),

/***/ "./src/app/main/project/project-search-page/hide.pipe.ts":
/*!***************************************************************!*\
  !*** ./src/app/main/project/project-search-page/hide.pipe.ts ***!
  \***************************************************************/
/*! exports provided: HidePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HidePipe", function() { return HidePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HidePipe = /** @class */ (function () {
    function HidePipe() {
    }
    HidePipe.prototype.transform = function (Projects, Type) {
        var NewProjects = [];
        if (Projects) {
            Projects.forEach(function (Project) {
                if (
                // FILTER OUT SOME PROJECTS MANUALLY
                Project.Name !== 'Dead End'
                    && Project.Name !== 'Costco'
                    && Project.Name !== 'ArtFamilia'
                    && Project.Name !== 'Trikon Promo Shorts'
                    && Project.Name !== 'My Beautiful Thing'
                    && Project.Name !== 'Hatch Beauty'
                    // CHECK IF TYPE EXISTS
                    && Project.Type) {
                    if (Type === "all") {
                        console.log("test");
                        NewProjects.push(Project);
                    }
                    if (Type === "narrative") {
                        if (Project.Type.toUpperCase() === "NARRATIVE") {
                            NewProjects.push(Project);
                        }
                    }
                    if (Type === "fashion") {
                        if (Project.Type.toUpperCase() === "FASHION") {
                            NewProjects.push(Project);
                        }
                    }
                    if (Type === "music") {
                        if (Project.Type.toUpperCase() === "MUSIC VIDEO") {
                            NewProjects.push(Project);
                        }
                    }
                }
            });
        }
        return NewProjects;
    };
    HidePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'hide',
            pure: false
        })
    ], HidePipe);
    return HidePipe;
}());



/***/ }),

/***/ "./src/app/main/project/project-search-page/project-profile-page-guest/project-profile-page-guest.component.css":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/main/project/project-search-page/project-profile-page-guest/project-profile-page-guest.component.css ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".Container  {\n  width: 100%;\n  height: 100vh;\n  position: fixed;\n}\n.Background {\n  background-size: cover;\n  position: absolute;\n  width: 100%;\n  height: 100vh;\n  background-image: url('data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/7QB8UGhvdG9zaG9wIDMuMAA4QklNBAQAAAAAAF8cAigAWkZCTUQyMzAwMDk2MjAxMDAwMGY4MGYwMDAwMWExMDAwMDA2MTEwMDAwMGUyMTQwMDAwMmIxNjAwMDBlNzE3MDAwMDRhMTkwMDAwN2UxYTAwMDBiOTFiMDAwMAD/2wBDAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/2wBDAQoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/wgARCAQ4BDgDASIAAhEBAxEB/8QAGwABAQADAQEBAAAAAAAAAAAAAAYBBQcEAwL/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAADkwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH7/AB0s5oqpUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAoP1Q88OgQP2siFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAsZS3JPXAtonJ6/H0LnoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANmVkJVyAABTebRdEOdgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAdD0HxNCAABtNWK+Q6BBH4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALU9nPvb4gAAAD7W0HZkY9/gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPRZ/WBPyAAAAADoXPaETwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAG31HQzUSYAAAAAAOh882Br1lGgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAyVGvqOfAAAAAAAAF7Efm7IAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC6kK0kPMAAAAAAAACvkBs9Z0PngAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAN2U/PqaYAAAAAAAAAAN99pvoJz4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADomp0xqgAAAAAAAAAAPZ4xbRN1GnnAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/f4uz6QH3+AAAAAAAAAAAAB+r/n1WSjcacAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA91N7uegAAAAAAAAAAAAAHQ+ebnYEsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQT/QyenQAAAAAAAAAAAAAAdB596T4fm6hQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAfUrNBWQIAAAAAAAAAAAAAAABbynk6Cc9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAvpTqRx/wCV2IRdiEXYhF2IRdiEXYhF2IRdiEXYhF2IRdiEXYhF2IRdiEXYhF2IRdiEptqNBo+ucjAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGMjDIwyMMjDIwyMMjDIwyMMjDIwyMMjDIwyMMjDIwyMMjGQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA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');\n}\n.Logo {\n  width: 192px;\n  height: 48px;\n  position: absolute;\n  z-index: 2;\n  top: 24px;\n  left: 24px;\n  cursor: pointer;\n  background-size: 10%;\n  border: none;\n  outline: none;\n}\n.Project-Title  {\n  width: 60vh;\n  left: 20vw;\n  top: calc(20vh - 52pt);\n  text-align: left;\n  font-family: \"Rajdhani\", sans-serif;\n  font-size: 48pt;\n  padding: 0;\n\n  color: white;\n}\n.description  {\n  width: 100%;\n  left: 20vw;\n  top: calc(20vh);\n  text-align: left;\n  font-family: \"Rajdhani\", sans-serif;\n  font-size: 20pt;\n  line-height: 24px;\n  color: white;\n}\n.Red-Button  {\n  height: 40px;\n  width: 40px;\n  border-radius: 20px;\n  position: absolute;\n  top: 24px;\n  right: 24px;\n  color: white;\n  outline: none;\n  z-index: 3;\n  background-image: url('Button1.jpg');\n  background-size: 200%;\n  cursor: pointer;\n  border: 1px solid #363636;\n}\n.Left-Panel {\n  position: absolute !important;\n  top: 158px;\n  left: 2%;\n  height: calc(100vh - 208px);\n  width: 22%;\n  background-color: rgba(255,255,255,.2);\n}\n.Center-Panel {\n  position: absolute !important;\n  top: 110px;\n  left: 25%;\n  height: calc(100vh - 160px);\n  width: 50%;\n  background-color: rgba(255,255,255,.2);\n}\n.Head-Board {\n  position:absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 48px;\n  background-color: rgba(0,0,0,.5);\n}\n.Tab-Group  {\n  position:absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n}\n.mat-tab-label .mat-tab-label-content {\n  color: white;\n}\n.Draft-List {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: calc(100vh - 208px);\n}\n.Draft-Tile  {\n\n}\n.RoughCut-Footer  {\n  background-color: #1e1e1e;\n  height: 24px;\n  position: absolute;\n  width: 100%;\n  bottom: 0;\n  left: 0;\n  z-index: 2;\n}\n.RoughCut-Name  {\n  color: white;\n  font-familY: \"Rajdhani\", sans-serif;\n  font-size: 14px;\n  margin: 4px;\n}\n.Right-Panel  {\n  position: absolute !important;\n  top: 158px;\n  right: 2%;\n  height: calc(100vh - 208px);\n  width: 22%;\n  background-color: rgba(255,255,255,.2);\n}\n.video  {\n  width: 100%;\n  margin-bottom: 0;\n}\n.Info-Bar {\n  height: 48px;\n  width: 100%;\n  text-align: center;\n  color: white;\n  margin: 0;\n  font-family: \"Rajdhani\", sans-serif;\n  background-color: rgba(133, 39, 49, 0.4);\n\n}\nh5  {\n  margin-bottom: 0;\n}\n.Slate  {\n  width: 62vw;\n  top: calc(10vh);\n  height: calc( 80vh);\n  left: 19vw;\n  background-color: rgba(30,30,30,.3);\n  overflow-y: scroll;\n  position: absolute;\n}\n.Stills {\n  width: 100%;\n  margin-top: 12px;\n}\n.tile {\n  background-color: white;\n}\n.Photo  {\n  min-width: 100%;\n  max-height: 100%;\n  position: absolute;\n}\n::-webkit-scrollbar {\n  width: 10px;  /* remove scrollbar space */\n  background: transparent;\n  z-index: 1;/* optional: just make scrollbar invisible */\n}\n/* optional: show position indicator in red */\n::-webkit-scrollbar-thumb {\n  background: #852731;\n  border-radius: 0;\n  z-index: 1;\n  opacity: .4\n}\n"

/***/ }),

/***/ "./src/app/main/project/project-search-page/project-profile-page-guest/project-profile-page-guest.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/main/project/project-search-page/project-profile-page-guest/project-profile-page-guest.component.html ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"Container\">\n\n  <div\n    class=\"Background\"\n    *ngIf=\"Project && Project.Stills[1]\"\n    [ngStyle]=\"Project ? {'background-image' : 'url(' + 'http://www.trikon.xyz/content/Stills/' + toWebString(Project.Fullname) + '/' + toWebString(Project.Stills[1].Filename) + ')' } : {}\">\n  </div>\n\n  <mat-card class=\"Slate\">\n    <!-- PROJECT TITLE -->\n    <h1 class=\"Project-Title\" *ngIf=\"(Project && Project.Name)\">\n      {{Project.Name}}\n    </h1>\n    <p class=\"description\">{{Project?.Description}}</p>\n\n\n    <video #videoPlayer class=\"video\"  controls  *ngIf=\"Project  && Project.FinalCuts\">\n      <source  *ngIf=\"Project  && Project.FinalCuts[0]\" src=\"http://www.trikon.xyz/content/FinalCuts/{{Project.Fullname}}/{{Project.FinalCuts[0].Filename}}\" type=\"video/mp4\"  />\n      Browser not supported\n    </video>\n    <div class=\"Info-Bar row\">\n      <div class=\"col-md-3\">\n        <h5>Director</h5>\n        {{Project?.Director}}\n      </div>\n      <div class=\"col-md-3\">\n        <h5>Cinematographer</h5>\n        {{Project?.Cinematographer}}\n      </div>\n      <div class=\"col-md-3\">\n        <h5>Editor</h5>\n        {{Project?.Editor}}\n      </div>\n      <div class=\"col-md-3\">\n        <h5>Producer</h5>\n         {{Project?.Producer}}\n      </div>\n    </div>\n    <mat-grid-list class=\"Stills\" [cols]=\"4\" rowHeight=\"1:1\" gutterSize=\"6px\" *ngIf=\"Project\">\n      <mat-grid-tile *ngFor=\"let Still of Project.Stills\" class=\"tile\" >\n        <img class=\"Photo\" src=\"http://www.trikon.xyz/content/Stills/{{(Project.Fullname)}}/{{(Still.Filename)}}\">\n      </mat-grid-tile>\n    </mat-grid-list>\n  </mat-card>\n\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/main/project/project-search-page/project-profile-page-guest/project-profile-page-guest.component.ts":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/main/project/project-search-page/project-profile-page-guest/project-profile-page-guest.component.ts ***!
  \*********************************************************************************************************************/
/*! exports provided: ProjectProfilePageGuestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectProfilePageGuestComponent", function() { return ProjectProfilePageGuestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _project_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../project.service */ "./src/app/main/project/project.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProjectProfilePageGuestComponent = /** @class */ (function () {
    function ProjectProfilePageGuestComponent(projectService, router, _router) {
        this.projectService = projectService;
        this.router = router;
        this._router = _router;
        this.Col = 6;
    }
    ProjectProfilePageGuestComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.Sub = this.router.params.subscribe(function (params) {
            _this.projectService.getProject(params['projectname'].split(' ').join('-')).subscribe(function (Project) {
                _this.Project = Project;
                console.log(Project);
            });
        });
    };
    ProjectProfilePageGuestComponent.prototype.navToHome = function () {
        this._router.navigateByUrl('/');
    };
    ProjectProfilePageGuestComponent.prototype.ngOnDestroy = function () {
        this.Sub.unsubscribe();
    };
    ProjectProfilePageGuestComponent.prototype.toWebString = function (string) {
        return string.split(' ').join('%20');
    };
    ProjectProfilePageGuestComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-project-profile-page-guest',
            template: __webpack_require__(/*! ./project-profile-page-guest.component.html */ "./src/app/main/project/project-search-page/project-profile-page-guest/project-profile-page-guest.component.html"),
            styles: [__webpack_require__(/*! ./project-profile-page-guest.component.css */ "./src/app/main/project/project-search-page/project-profile-page-guest/project-profile-page-guest.component.css")]
        }),
        __metadata("design:paramtypes", [_project_service__WEBPACK_IMPORTED_MODULE_1__["ProjectService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ProjectProfilePageGuestComponent);
    return ProjectProfilePageGuestComponent;
}());



/***/ }),

/***/ "./src/app/main/project/project-search-page/project-profile-page/project-profile-page.component.css":
/*!**********************************************************************************************************!*\
  !*** ./src/app/main/project/project-search-page/project-profile-page/project-profile-page.component.css ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".Container  {\n  width: 100%;\n  height: 100vh;\n  position: fixed;\n}\n    .Background {\n      background-size: cover;\n      position: absolute;\n      width: 100%;\n      height: 100vh;\n      background-image: url('data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/7QB8UGhvdG9zaG9wIDMuMAA4QklNBAQAAAAAAF8cAigAWkZCTUQyMzAwMDk2MjAxMDAwMGY4MGYwMDAwMWExMDAwMDA2MTEwMDAwMGUyMTQwMDAwMmIxNjAwMDBlNzE3MDAwMDRhMTkwMDAwN2UxYTAwMDBiOTFiMDAwMAD/2wBDAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/2wBDAQoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/wgARCAQ4BDgDASIAAhEBAxEB/8QAGwABAQADAQEBAAAAAAAAAAAAAAYBBQcEAwL/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAADkwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH7/AB0s5oqpUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAoP1Q88OgQP2siFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAsZS3JPXAtonJ6/H0LnoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANmVkJVyAABTebRdEOdgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAdD0HxNCAABtNWK+Q6BBH4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALU9nPvb4gAAAD7W0HZkY9/gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPRZ/WBPyAAAAADoXPaETwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAG31HQzUSYAAAAAAOh882Br1lGgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAyVGvqOfAAAAAAAAF7Efm7IAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC6kK0kPMAAAAAAAACvkBs9Z0PngAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAN2U/PqaYAAAAAAAAAAN99pvoJz4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADomp0xqgAAAAAAAAAAPZ4xbRN1GnnAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/f4uz6QH3+AAAAAAAAAAAAB+r/n1WSjcacAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA91N7uegAAAAAAAAAAAAAHQ+ebnYEsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQT/QyenQAAAAAAAAAAAAAAdB596T4fm6hQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAfUrNBWQIAAAAAAAAAAAAAAABbynk6Cc9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAvpTqRx/wCV2IRdiEXYhF2IRdiEXYhF2IRdiEXYhF2IRdiEXYhF2IRdiEXYhF2IRdiEptqNBo+ucjAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGMjDIwyMMjDIwyMMjDIwyMMjDIwyMMjDIwyMMjDIwyMMjGQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA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');\n    }\n    .Logo {\n      width: 192px;\n      height: 48px;\n      position: absolute;\n      z-index: 2;\n      top: 24px;\n      left: 24px;\n      cursor: pointer;\n      background-size: 10%;\n      border: none;\n      outline: none;\n    }\n    .Project-Title  {\n      width: 100%;\n      position: absolute;\n      left: 0;\n      top: 20px;\n      text-align: center;\n      font-family: \"Rajdhani\", sans-serif;\n      font-size: 48px;\n      color: white;\n    }\n    .Red-Button  {\n      height: 40px;\n      width: 40px;\n      border-radius: 20px;\n      position: absolute;\n      top: 24px;\n      right: 24px;\n      color: white;\n      outline: none;\n      z-index: 3;\n      background-image: url('Button1.jpg');\n      background-size: 200%;\n      cursor: pointer;\n      border: 1px solid #363636;\n    }\n    .Left-Panel {\n      position: absolute !important;\n      top: 158px;\n      left: 2%;\n      height: calc(100vh - 208px);\n      width: 22%;\n      background-color: rgba(255,255,255,.2);\n    }\n    .Center-Panel {\n      position: absolute !important;\n      top: 110px;\n      left: 25%;\n      height: calc(100vh - 160px);\n      width: 50%;\n      background-color: rgba(255,255,255,.2);\n    }\n    .Head-Board {\n          position:absolute;\n          left: 0;\n          top: 0;\n          width: 100%;\n          height: 48px;\n          background-color: rgba(0,0,0,.5);\n        }\n    .Tab-Group  {\n          position:absolute;\n          left: 0;\n          top: 0;\n          width: 100%;\n        }\n    .mat-tab-label .mat-tab-label-content {\n              color: white;\n            }\n    .Draft-List {\n              position: absolute;\n              top: 0;\n              left: 0;\n              width: 100%;\n              height: calc(100vh - 208px);\n            }\n    .Draft-Tile  {\n\n                }\n    .RoughCut-Footer  {\n                      background-color: #1e1e1e;\n                      height: 24px;\n                      position: absolute;\n                      width: 100%;\n                      bottom: 0;\n                      left: 0;\n                      z-index: 2;\n                    }\n    .RoughCut-Name  {\n                        color: white;\n                        font-familY: \"Rajdhani\", sans-serif;\n                        font-size: 14px;\n                        margin: 4px;\n                      }\n    .Right-Panel  {\n      position: absolute !important;\n      top: 158px;\n      right: 2%;\n      height: calc(100vh - 208px);\n      width: 22%;\n      background-color: rgba(255,255,255,.2);\n    }\n    ::-webkit-scrollbar {\n  width: 10px;  /* remove scrollbar space */\n  margin-left: 2px;\n  height: calc(100vh - 110px);\n  margin-top: 110px;\n  display: block;\n  background: transparent;\n  z-index: 1;/* optional: just make scrollbar invisible */\n}\n    /* optional: show position indicator in red */\n    ::-webkit-scrollbar-thumb {\n  background: #852731;\n  border-radius: 0;\n  z-index: 1;\n  display: block;\n\n}\n"

/***/ }),

/***/ "./src/app/main/project/project-search-page/project-profile-page/project-profile-page.component.html":
/*!***********************************************************************************************************!*\
  !*** ./src/app/main/project/project-search-page/project-profile-page/project-profile-page.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"Container\">\n\n  <div\n    class=\"Background\"\n    [ngStyle]=\"Project ? {'background-image' : 'url(' + 'http://www.trikon.xyz/content/Stills/' + toWebString(Project.Fullname) + '/' + toWebString(Project.Stills[1].Filename) + ')' } : {}\">\n\n\n  </div>\n\n  <!-- PROJECT TITLE -->\n  <h1 class=\"Project-Title\" *ngIf=\"(Project && Project.Name)\">\n    {{Project.Name}}\n  </h1>\n  <!-- LOGO -->\n  <img class=\"Logo\" src=\"../../../../../assets/TrikonLogo.png\" (click)=\"navToHome()\">\n  <!-- RED BUTTON -->\n  <button  class=\"Red-Button\"></button>\n  <!-- LEFT PANEL -->\n  <mat-card class=\"Left-Panel\">\n\n  </mat-card>\n  <!-- CENTER PANEL -->\n  <mat-card class=\"Center-Panel\">\n    <div class=\"Head-Board\"></div>\n    <mat-tab-group class=\"Tab-Group\">\n      <mat-tab label=\"Finals\">\n\n      </mat-tab>\n      <mat-tab label=\"Drafts\">\n        <mat-grid-list class=\"Draft-List\" *ngIf=\"Project && Project.RoughCuts\"  [cols]=\"3\" rowHeight=\"16:9\" gutterSize=\"6px\">\n          <mat-grid-tile class=\"Draft-Tile\" *ngFor=\"let RoughCut of Project.RoughCuts\">\n            <video #videoPlayer class=\"video\"  controls>\n              <source src=\"http://www.trikon.xyz/content/RoughCuts/{{Project.Fullname}}/{{RoughCut.Filename}}\" type=\"video/mp4\"  />\n              Browser not supported\n            </video>\n            <div class=\"RoughCut-Footer\">\n              <h4 class=\"RoughCut-Name\">\n                {{RoughCut.Filename}}\n              </h4>\n            </div>\n          </mat-grid-tile>\n        </mat-grid-list>\n\n\n\n      </mat-tab>\n      <mat-tab label=\"Dailies\">\n\n      </mat-tab>\n      <mat-tab label=\"Stills\">\n\n      </mat-tab>\n      <mat-tab label=\"BTS\">\n\n      </mat-tab>\n      <mat-tab label=\"Documents\">\n\n      </mat-tab>\n    </mat-tab-group>\n  </mat-card>\n\n  <mat-card class=\"Right-Panel\">\n\n</mat-card>\n\n</div>\n"

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
/* harmony import */ var _project_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../project.service */ "./src/app/main/project/project.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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
    function ProjectProfilePageComponent(projectService, router, _router) {
        this.projectService = projectService;
        this.router = router;
        this._router = _router;
        this.Col = 6;
    }
    ProjectProfilePageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.Sub = this.router.params.subscribe(function (params) {
            _this.projectService.getProject(params['projectname'].split(' ').join('-')).subscribe(function (Project) {
                _this.Project = Project;
            });
        });
    };
    ProjectProfilePageComponent.prototype.navToHome = function () {
        this._router.navigateByUrl('/');
    };
    ProjectProfilePageComponent.prototype.ngOnDestroy = function () {
        this.Sub.unsubscribe();
    };
    ProjectProfilePageComponent.prototype.toWebString = function (string) {
        return string.split(' ').join('-');
    };
    ProjectProfilePageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-project-profile-page',
            template: __webpack_require__(/*! ./project-profile-page.component.html */ "./src/app/main/project/project-search-page/project-profile-page/project-profile-page.component.html"),
            styles: [__webpack_require__(/*! ./project-profile-page.component.css */ "./src/app/main/project/project-search-page/project-profile-page/project-profile-page.component.css"), __webpack_require__(/*! ./project-profile-page.m.component.css */ "./src/app/main/project/project-search-page/project-profile-page/project-profile-page.m.component.css")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        }),
        __metadata("design:paramtypes", [_project_service__WEBPACK_IMPORTED_MODULE_1__["ProjectService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ProjectProfilePageComponent);
    return ProjectProfilePageComponent;
}());



/***/ }),

/***/ "./src/app/main/project/project-search-page/project-profile-page/project-profile-page.m.component.css":
/*!************************************************************************************************************!*\
  !*** ./src/app/main/project/project-search-page/project-profile-page/project-profile-page.m.component.css ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media only screen and (max-width: 500px) {\n\n  .Left-Panel, .Right-Panel {\n    display: none;\n  }\n\n  .Project-Title {\n    top: 75px;\n  }\n\n  .Tab-Group  {\n    width: 100%;\n    top: 150px;\n    left: 0;\n    height: calc(100vh - 150px);\n  }\n\n  .Red-Button  {\n    display: none;\n  }\n\n  .Back-Arrow {\n    position: absolute;\n    display: block;\n    top: 20px;\n    right: 20px;\n    height: 40px;\n    width: 48px;\n    -webkit-transform: rotate(-90deg);\n            transform: rotate(-90deg);\n    z-index: 4;\n  }\n\n\n\n}\n"

/***/ }),

/***/ "./src/app/main/project/project-search-page/project-search-page.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/main/project/project-search-page/project-search-page.component.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".Photo  {\n  height: 100px;\n  width: 100px;\n}\n\n.Container  {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.background {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  overflow: hidden;\n  z-index: 0;\n  background-image: url('stars.png');\n  background-size: cover;\n}\n\n.info-button  {\n  height: 36px;\n  width: 36px;\n  border-radius: 18px;\n  position: absolute;\n  top: 30px;\n  right: 24px;\n  color: white;\n  outline: none;\n  z-index: 3;\n  background-image: url('Button1.jpg');\n  background-size: 200%;\n  cursor: pointer;\n  border: 1px solid #363636;\n}\n\n.logo {\n  width: 192px;\n  height: 48px;\n  position: absolute;\n  z-index: 2;\n  top: 30px;\n  left: 24px;\n  cursor: pointer;\n  background-image: url('TrikonLogo.jpg');\n  background-size: 10%;\n  border: none;\n  outline: none;\n\n}\n\n.Projects-Label {\n  position: absolute;\n  left: 234px;\n  top: 30px;\n  text-align: right;\n  margin: 0;\n  font-family: 'Futura PT', sans-serif;\n  font-weight: 100;\n  font-size: 42px;\n  color: #d1d1d1;\n}\n\n.main {\n  position: absolute;\n  width: 80vw;\n  height: calc(100vh - 100px);\n  top: 84px;\n  left: 20vw;\n  overflow-y: scroll;\n}\n\n.Status-Tag {\n  position: absolute;\n  top: 4px;\n  right: 4px;\n  color: red;\n  z-index: 4;\n}\n\n.list {\n  width:100%;\n}\n\n.tile {\n  overflow: hidden;\n}\n\n.Project_Name {\n  font-family: 'Futura PT', sans-serif;\n  z-index: 2;\n  position: absolute;\n  bottom: 4px;\n  left: 4px;\n  color: white;\n  width: 100%;\n  text-align: center;\n  padding: 0;\n  margin: 0;\n}\n\n.Project_Type {\n  font-family: 'Rajdhani', sans-serif;\n  font-size: 14px;\n  z-index: 2;\n  position: absolute;\n  top: 2px;\n  left: 2px;\n  color: white;\n  margin: 0;\n  background-color: rgba(36, 82, 148, 0.8);\n  padding: 4px;\n  width: auto;\n  white-space: nowrap;\n  border-radius: 4px;\n}\n\n.Main-Still {\n  position: absolute;\n  left: 0;\n  top: 0;\n  height: 100%;\n}\n\n.Type-Title {\n   text-align: center;\n   font-family: \"Rajdhani\", sans-serif;\n   color: white;\n  font-size: 12pt;\n   cursor: pointer;\n  transition: .3s ease;\n }\n\n.Type-Title:hover {\n  -webkit-transform: translateY(-2px);\n          transform: translateY(-2px);\n  text-shadow: 0 0  20px white;\n}\n\n::-webkit-scrollbar {\n  width: 10px;  /* remove scrollbar space */\n  margin-left: 2px;\n  height: calc(100vh - 110px);\n  margin-top: 110px;\n  display: none;\n  background: transparent;\n  z-index: 1;/* optional: just make scrollbar invisible */\n}\n\n/* optional: show position indicator in red */\n\n::-webkit-scrollbar-thumb {\n  background: #852731;\n  border-radius: 0;\n  z-index: 1;\n  display: block;\n}\n\n.header {\n  position: absolute;\n  height: 14px;\n  left: 2px;\n  top: 2px;\n  z-index: 3;\n  text-align: center;\n}\n\n.footer {\n  position: absolute;\n  height: 36px;\n  width: 100%;\n  left: 0;\n  bottom: 0;\n  background-color: rgba(60, 63, 65, .5);\n  opacity: 1;\n\n}\n\n.dir {\n  position: absolute;\n  height: 24px;\n  width: 80%;\n  left: 10%;\n  top: 64px;\n  background-color: rgba(105, 31, 41, 0);\n  color: white;\n  text-align: left;\n  z-index:4;\n  opacity: 0;\n}\n\n.DirName {\n  opacity: 0;\n\n  text-align: right;\n  font-size: 18px;\n  font-weight: 100;\n  color: white;\n   position: absolute;\n   height: 24px;\n   width: 80%;\n   left: 10%;\n   top: 72px;\n  z-index: 3;\n   background-color: rgba(105, 31, 41, 1);\n }\n\n.drawer {\n  width: 100%;\n  height: 24px;\n  padding-top: 2px;\n  background-color: rgb(65, 61, 64);\n  z-index: 4;\n  margin: 0 0 6px 0;\n}\n\n.Tabs {\n  position: absolute;\n  top: 100px;\n  right: 28px;\n  left: 24px;\n  margin :0;\n  width: 100px;\n  z-index: 5;\n  justify-content: flex-start;\n\n}\n\n.tab  {\n  cursor: pointer;\n  padding:0;\n  margin: 0;\n  color: white;\n  font-family: \"Futura PT\", sans-serif;\n  font-size: 36px;\n  font-weight: 200;\n  height: 48px;\n  z-index: 6;\n  text-align: left;\n}\n\n.label  {\n  padding: 6px;\n  transition: .3s ease;\n}\n\n.label:hover  {\n  padding-left: 26px;\n  text-shadow: 0 0  20px white;\n  color: yellow;\n}\n\n.label:active  {\n  padding-left: 330px;\n  text-shadow: 0 0  20px white;\n  color: yellow;\n  transition: 1s ease-in-out\n}\n"

/***/ }),

/***/ "./src/app/main/project/project-search-page/project-search-page.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/main/project/project-search-page/project-search-page.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"background\" [@slideInOut]>\n  <!-- INFO BUTTON -->\n  <!-- LOGO -->\n  <h4 class=\"Projects-Label\">\n    Projects\n  </h4>\n  <!-- TABS -->\n  <div class=\" Tabs\" [@slideInOut]>\n    <div class=\"tab row\" routerLink=\"/Search\" (click)=\"selectType('narrative')\" [ngStyle]=\"Type === 'narrative' ? { transform: 'translateX(26px)',  'text-shadow': ' 0 0  20px white', color: 'yellow'}  : null\">\n      <h4 class=\"label\" >\n        narrative\n      </h4>\n    </div>\n    <div class=\"tab row\" (click)=\"selectType('fashion')\" [ngStyle]=\"Type === 'fashion' ? { transform: 'translateX(26px)',  'text-shadow': ' 0 0  20px white', color: 'yellow'}  : null\">\n      <h4 class=\"label\">\n        fashion\n      </h4>\n    </div>\n    <div class=\"tab row\" (click)=\"selectType('music')\" [ngStyle]=\"Type === 'music' ? { transform: 'translateX(26px)',  'text-shadow': ' 0 0  20px white', color: 'yellow'} : null\" >\n      <h4 class=\"label\">\n        music\n      </h4>\n    </div>\n  </div>\n\n  <div class=\"main\">\n    <mat-grid-list *ngIf=\"Projects\" class=\"list\" [cols]=\"Col\" rowHeight=\"1:1\" gutterSize=\"4px\" [@typeinout]=\"Type\">\n      <mat-grid-tile class=\"tile\" *ngFor=\"let Project of Projects | hide:Type\" (click)=\"selectProject(Project)\" >\n        <!--<div class=\"header\">-->\n          <!--<h4 class=\"Project_Type\">-->\n            <!--{{Project.Type}}-->\n          <!--</h4>-->\n        <!--</div>-->\n        <div *ngFor=\"let Still of Project.Stills; let i = index\">\n          <img *ngIf=\"i === 0\" src=\"http://www.trikon.xyz/content/Stills/{{Project.Fullname}}/{{Project.Stills[0].Filename}}\" class=\"Main-Still\">\n        </div>\n        <img *ngIf=\"!Project.Stills[0]\" src=\"../../../../assets/Placeholder.jpg\" class=\"Main-Still\">\n        <div class=\"footer\">\n          <h4 class=\"Project_Name\">\n            {{Project.Name}}\n          </h4>\n        </div>\n        <div class=\"dir\">\n          <h4 class=\"Dir\">\n            Dir.\n          </h4>\n        </div>\n        <div class=\"dirname\">\n          <h4 class=\"DirName\">\n            {{Project.Director}}\n          </h4>\n        </div>\n      </mat-grid-tile>\n    </mat-grid-list>\n  </div>\n</div>\n"

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
/* harmony import */ var _project_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../project.service */ "./src/app/main/project/project.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _project_search_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./project-search.animations */ "./src/app/main/project/project-search-page/project-search.animations.ts");
/* harmony import */ var _type_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./type.animations */ "./src/app/main/project/project-search-page/type.animations.ts");
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
    function ProjectSearchPageComponent(projectService, router) {
        this.projectService = projectService;
        this.router = router;
        this.PageState = 'in';
        this.Col = 4;
        this.Type = "all";
    }
    ProjectSearchPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (window.screen.width < 500) {
            this.Col = 1;
        }
        this.projectService.getProjects().subscribe(function (_Projects) {
            _this.Projects = _Projects;
            _this.CurrProject = _this.Projects[0];
            _this.Projects.forEach(function (Project) {
                if (Project.Stills[0]) {
                }
            });
        });
    };
    ProjectSearchPageComponent.prototype.navToHome = function () {
        this.router.navigateByUrl('/');
    };
    ProjectSearchPageComponent.prototype.selectProject = function (Project) {
        this.projectService.CurrentProject = Project;
        this.CurrProject = this.projectService.CurrentProject;
        this.router.navigateByUrl('/Project/' + this.CurrProject.Name.split(' ').join('-'));
    };
    ProjectSearchPageComponent.prototype.toggle = function () {
        this.PageState === 'in' ? this.PageState = 'out'
            : this.PageState = 'in';
    };
    ProjectSearchPageComponent.prototype.selectType = function (type) {
        if (this.Type === type) {
            this.Type = 'all';
        }
        else {
            this.Type = type;
        }
    };
    ProjectSearchPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-project-search-page',
            template: __webpack_require__(/*! ./project-search-page.component.html */ "./src/app/main/project/project-search-page/project-search-page.component.html"),
            styles: [__webpack_require__(/*! ./project-search-page.component.css */ "./src/app/main/project/project-search-page/project-search-page.component.css"), __webpack_require__(/*! ./project-search-page.m.component.css */ "./src/app/main/project/project-search-page/project-search-page.m.component.css")],
            animations: [
                _type_animations__WEBPACK_IMPORTED_MODULE_4__["TypeInOut"],
                _project_search_animations__WEBPACK_IMPORTED_MODULE_3__["SlideInOut"]
            ]
        }),
        __metadata("design:paramtypes", [_project_service__WEBPACK_IMPORTED_MODULE_1__["ProjectService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ProjectSearchPageComponent);
    return ProjectSearchPageComponent;
}());



/***/ }),

/***/ "./src/app/main/project/project-search-page/project-search-page.m.component.css":
/*!**************************************************************************************!*\
  !*** ./src/app/main/project/project-search-page/project-search-page.m.component.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media only screen and (max-width: 500px) {\n\n  .info-button  {\n    display: none;\n  }\n\n\n  .logo {\n    width: 144px;\n    height: 36px;\n    position: absolute;\n    z-index: 2;\n    top: 24px;\n    left: 2vw;\n    cursor: pointer;\n    background-size: 10%;\n    border: none;\n    outline: none;\n    margin: 0;\n\n  }\n\n\n  .Projects-Label {\n    width: 144px;\n    height: 36px;\n    position: absolute;\n    z-index: 2;\n    top: 18px;\n    left: calc(150px);\n    cursor: pointer;\n    background-size: 10%;\n    border: none;\n    outline: none;\n    margin: 0;\n\n  }\n}\n"

/***/ }),

/***/ "./src/app/main/project/project-search-page/project-search.animations.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/main/project/project-search-page/project-search.animations.ts ***!
  \*******************************************************************************/
/*! exports provided: SlideInOut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlideInOut", function() { return SlideInOut; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

var SlideInOut = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('slideInOut', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('void => *', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])('.tab', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            transform: 'translateX(-200%)',
            opacity: 0
        })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])('.tab', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["stagger"])('-200ms', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('600ms .1s ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                opacity: 1,
                transform: 'translateY(0%)'
            })),
        ]))
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => void', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])('.tab', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            transform: 'translateX(0)',
            opacity: 1
        })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])('.tab', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["stagger"])('-200ms', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('600ms .1s ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                opacity: 0,
                transform: 'translateY(-200%)'
            })),
        ]))
    ])
]);


/***/ }),

/***/ "./src/app/main/project/project-search-page/type.animations.ts":
/*!*********************************************************************!*\
  !*** ./src/app/main/project/project-search-page/type.animations.ts ***!
  \*********************************************************************/
/*! exports provided: TypeInOut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypeInOut", function() { return TypeInOut; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

var TypeInOut = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('typeinout', [
    // ANYTHING TO ALL SLIDES IN FROM THE BOTTOM
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('void => *', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])('.tile', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            transform: 'translateY(200%)',
            opacity: 0
        })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])('.tile', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["stagger"])('200ms', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('600ms .1s ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                opacity: 1,
                transform: 'translateY(0%)'
            }))
        ]))
    ])
]);


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
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _project_search_page_hide_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./project-search-page/hide.pipe */ "./src/app/main/project/project-search-page/hide.pipe.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _project_search_page_project_profile_page_guest_project_profile_page_guest_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./project-search-page/project-profile-page-guest/project-profile-page-guest.component */ "./src/app/main/project/project-search-page/project-profile-page-guest/project-profile-page-guest.component.ts");
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
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTabsModule"]
            ],
            declarations: [
                _project_search_page_project_search_page_component__WEBPACK_IMPORTED_MODULE_2__["ProjectSearchPageComponent"],
                _project_search_page_project_profile_page_project_profile_page_component__WEBPACK_IMPORTED_MODULE_3__["ProjectProfilePageComponent"],
                _project_search_page_hide_pipe__WEBPACK_IMPORTED_MODULE_5__["HidePipe"],
                _project_search_page_project_profile_page_guest_project_profile_page_guest_component__WEBPACK_IMPORTED_MODULE_7__["ProjectProfilePageGuestComponent"]
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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/internal/operators */ "./node_modules/rxjs/internal/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2__);
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
    function ProjectService(http) {
        this.http = http;
        this.BaseURL = 'http://trikon.xyz/api/project';
    }
    ProjectService.prototype.getProject = function (ProjectName) {
        var _this = this;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpRequest"]('GET', this.BaseURL + '/' + ProjectName);
        return this.http.request(req).pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) { return _this.formatProjectArray(response); }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2__["last"])());
    };
    ProjectService.prototype.getProjects = function () {
        var _this = this;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpRequest"]('GET', this.BaseURL + '/all');
        return this.http.request(req).pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) { return _this.formatProjectArray(response); }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2__["last"])());
    };
    // HELPER FUNCTIONS
    ProjectService.prototype.formatProjectArray = function (event) {
        if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpEventType"].Response) {
            var Projects = [];
            if (!event['body']['obj']) {
                return event['body'];
            }
            for (var _i = 0, _a = event['body']['obj']; _i < _a.length; _i++) {
                var Project_1 = _a[_i];
                Projects.push(Project_1);
            }
            return Projects;
        }
    };
    ProjectService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ProjectService);
    return ProjectService;
}());



/***/ }),

/***/ "./src/app/main/sign-in/sign-in.animations.ts":
/*!****************************************************!*\
  !*** ./src/app/main/sign-in/sign-in.animations.ts ***!
  \****************************************************/
/*! exports provided: FlipInOut, SpinInOut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlipInOut", function() { return FlipInOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinInOut", function() { return SpinInOut; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

//TRIGGER 1
var FlipInOut = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('FlipInOut', [
    //going in
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('false => true', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])('.background', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            width: '36px',
            height: '36px',
            transform: 'translateX(-24px) rotate(-90deg)',
            borderTopLeftRadius: '24px',
            borderBottomRightRadius: '24px'
        }), { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])('.User, .Pass', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            opacity: 0,
            transform: 'translateY(200%)'
        }), { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])('.background', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('.4s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            width: '300px',
            height: '96px',
            transform: 'translateX(0) rotate(0deg)',
            borderTopLeftRadius: '1px',
            borderBottomRightRadius: '1px'
        })), { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])('.User, .Pass', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('.2s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            opacity: 1,
            transform: 'translateY(0)'
        })), { optional: true })
    ]),
    // GOING OUT
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('true => false', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])('.User, .Pass', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('.3s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            opacity: 0
        })), { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])('.background', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('.3s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            width: '36px',
            height: '36px',
            transform: 'translateX(-36px) rotate(-90deg)',
            borderTopLeftRadius: '24px',
            borderBottomRightRadius: '24px'
        })), { optional: true }),
    ])
]);
var SpinInOut = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('SpinInOut', [
    // GOING IN
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('false => true', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])('.info-button', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            transform: 'rotate(-1000deg)',
        }), { optional: false }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])('.info-button', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('1s .9s ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            transform: 'rotate(0deg)'
        })), { optional: false }),
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('true => false', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])('.info-button', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            transform: 'rotate(1000deg)',
        }), { optional: false }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])('.info-button', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('1.5s .5s ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            transform: 'rotate(0deg)'
        })), { optional: false }),
    ])
]);


/***/ }),

/***/ "./src/app/main/sign-in/sign-in.component.css":
/*!****************************************************!*\
  !*** ./src/app/main/sign-in/sign-in.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".background {\n  background-color: rgba(105, 31, 41, 0.2);\n  width: 300px;\n  height: 96px;\n  border-top-right-radius: 24px;\n  border: 2px solid rgba(197, 187, 195, 0.2);\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n  overflow: hidden;\n  font-family: \"futura pt\", sans-serif;\n}\n.User {\n  background-color: transparent;\n  position: absolute;\n  top: 16px;\n  left: 12px;\n  width: 240px;\n  padding-left: 12px;\n  border: none;\n  border-bottom: 1px ridge #b3b3b3;\n  outline: 0;\n  color: white;\n}\n.Pass {\n  background-color: transparent;\n  position: absolute;\n  bottom: 16px;\n  left: 12px;\n  width: 240px;\n  padding-left: 12px;\n  border: none;\n  outline: 0;\n  color: white;\n  border-bottom: 1px groove #b3b3b3;\n\n}\n.info-button  {\n  position: fixed;\n  top: 24px;\n  right: 24px;\n  height: 36px;\n  width: 36px;\n  outline: 0;\n  z-index: 3;\n  cursor: pointer;\n  border-radius: 18px;\nborder: none;\n  background-color: #a22e3d;\n  background-size: cover;\n  padding: 0;\n  margin: 0;\n}\n"

/***/ }),

/***/ "./src/app/main/sign-in/sign-in.component.html":
/*!*****************************************************!*\
  !*** ./src/app/main/sign-in/sign-in.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"animatecontainer\"   >\n  <div class=\"info-button\" >\n\n  </div>\n  <!--<div class=\"background\"  *ngIf=\"Show\" >-->\n    <!--<input type=\"text\" class=\"User\" placeholder=\"Username\">-->\n    <!--<input type=\"password\" class=\"Pass\" placeholder=\"Password\">-->\n\n  <!--</div>-->\n\n</div>\n"

/***/ }),

/***/ "./src/app/main/sign-in/sign-in.component.ts":
/*!***************************************************!*\
  !*** ./src/app/main/sign-in/sign-in.component.ts ***!
  \***************************************************/
/*! exports provided: SignInComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInComponent", function() { return SignInComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _sign_in_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sign-in.animations */ "./src/app/main/sign-in/sign-in.animations.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SignInComponent = /** @class */ (function () {
    function SignInComponent() {
    }
    SignInComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SignInComponent.prototype, "Show", void 0);
    SignInComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sign-in',
            template: __webpack_require__(/*! ./sign-in.component.html */ "./src/app/main/sign-in/sign-in.component.html"),
            styles: [__webpack_require__(/*! ./sign-in.component.css */ "./src/app/main/sign-in/sign-in.component.css")],
            animations: [
                _sign_in_animations__WEBPACK_IMPORTED_MODULE_1__["FlipInOut"],
                _sign_in_animations__WEBPACK_IMPORTED_MODULE_1__["SpinInOut"]
            ]
        }),
        __metadata("design:paramtypes", [])
    ], SignInComponent);
    return SignInComponent;
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

module.exports = __webpack_require__(/*! /Users/jeff/Trikoncms/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map