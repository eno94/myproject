webpackJsonp([1,4],{

/***/ 1089:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(523);


/***/ }),

/***/ 253:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(805);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MovieService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MovieService = (function () {
    function MovieService(_jsonp) {
        this._jsonp = _jsonp;
        this.apiKey = '35b7e0a85c93bed68524b2677e7e7ca6';
    }
    MovieService.prototype.getPopular = function () {
        return this._jsonp.get('https://api.themoviedb.org/3/discover/movie?callback=JSONP_CALLBACK&sort_by=popularity.desc&api_key=35b7e0a85c93bed68524b2677e7e7ca6').map(function (res) { return res.json(); });
    };
    MovieService.prototype.getInTheater = function (currentDate, futureDate) {
        return this._jsonp.get('https://api.themoviedb.org/3/discover/movie?callback=JSONP_CALLBACK&primary_release_date.gte=' + currentDate + '&primary_release_date.lte=' + futureDate + '&api_key=35b7e0a85c93bed68524b2677e7e7ca6').map(function (res) { return res.json(); });
    };
    MovieService.prototype.searchMovies = function (searchStr) {
        return this._jsonp.get('https://api.themoviedb.org/3/search/movie?callback=JSONP_CALLBACK&query=' + searchStr + '&sort_by=popularity.desc&api_key=' + this.apiKey).map(function (res) { return res.json(); });
    };
    MovieService.prototype.getMovie = function (id) {
        return this._jsonp.get('https://api.themoviedb.org/3/movie/' + id + '?callback=JSONP_CALLBACK&api_key=' + this.apiKey).map(function (res) { return res.json(); });
    };
    MovieService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Jsonp */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Jsonp */]) === 'function' && _a) || Object])
    ], MovieService);
    return MovieService;
    var _a;
}());
//# sourceMappingURL=D:/Program Files/angular2_projekti/moviefinder-EP/src/movie.service.js.map

/***/ }),

/***/ 382:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(376);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_movie_service__ = __webpack_require__(253);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MovieComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MovieComponent = (function () {
    function MovieComponent(_router, _movieService) {
        this._router = _router;
        this._movieService = _movieService;
    }
    MovieComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._router.params.subscribe(function (params) {
            var id = params['id'];
            _this._movieService.getMovie(id).subscribe(function (movie) {
                _this.movie = movie;
            });
        });
    };
    MovieComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-movie',
            template: __webpack_require__(802),
            styles: [__webpack_require__(799)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_movie_service__["a" /* MovieService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_movie_service__["a" /* MovieService */]) === 'function' && _b) || Object])
    ], MovieComponent);
    return MovieComponent;
    var _a, _b;
}());
//# sourceMappingURL=D:/Program Files/angular2_projekti/moviefinder-EP/src/movie.component.js.map

/***/ }),

/***/ 383:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_movie_service__ = __webpack_require__(253);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MoviesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MoviesComponent = (function () {
    function MoviesComponent(_moviesService) {
        var _this = this;
        this._moviesService = _moviesService;
        this.day = new Date().getUTCDate();
        this.month = new Date().getMonth() + 1;
        this.year = new Date().getFullYear();
        this.today = this.year + "-" + this.month + "-" + this.day;
        if (this.month < 10) {
            this.today = this.year + "-" + this.month + "-" + this.day;
        }
        this.addDays = new Date();
        this.addDays.setDate(this.addDays.getUTCDate() + 30);
        this.addDay = this.addDays.getUTCDate();
        this.addMonth = this.addDays.getMonth() + 1;
        this.addYear = this.addDays.getFullYear();
        this.futureDate = this.addYear + '-' + this.addMonth + '-' + this.addDay;
        if (this.addMonth < 10) {
            this.futureDate = this.addYear + '-' + this.addMonth + '-' + this.addDay;
        }
        this._moviesService.getPopular().subscribe(function (res) {
            _this.popularList = res.results;
        });
        this._moviesService.getInTheater(this.today, this.futureDate).subscribe(function (res) {
            _this.inTheaters = res.results;
        });
    }
    MoviesComponent.prototype.ngOnInit = function () {
    };
    MoviesComponent.prototype.searchMovies = function () {
        var _this = this;
        this._moviesService.searchMovies(this.searchStr).subscribe(function (res) {
            _this.searchResult = res.results;
        });
    };
    MoviesComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'en-movies',
            template: __webpack_require__(803),
            styles: [__webpack_require__(800)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_movie_service__["a" /* MovieService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_movie_service__["a" /* MovieService */]) === 'function' && _a) || Object])
    ], MoviesComponent);
    return MoviesComponent;
    var _a;
}());
//# sourceMappingURL=D:/Program Files/angular2_projekti/moviefinder-EP/src/movies.component.js.map

/***/ }),

/***/ 522:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 522;


/***/ }),

/***/ 523:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(610);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(643);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(641);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=D:/Program Files/angular2_projekti/moviefinder-EP/src/main.js.map

/***/ }),

/***/ 640:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(801),
            styles: [__webpack_require__(798)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=D:/Program Files/angular2_projekti/moviefinder-EP/src/app.component.js.map

/***/ }),

/***/ 641:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(601);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(640);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__movies_movies_component__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_movie_service__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_routes__ = __webpack_require__(642);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__movie_movie_component__ = __webpack_require__(382);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__movies_movies_component__["a" /* MoviesComponent */],
                __WEBPACK_IMPORTED_MODULE_8__movie_movie_component__["a" /* MovieComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* JsonpModule */],
                __WEBPACK_IMPORTED_MODULE_7__app_routes__["a" /* routing */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_6__services_movie_service__["a" /* MovieService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=D:/Program Files/angular2_projekti/moviefinder-EP/src/app.module.js.map

/***/ }),

/***/ 642:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(376);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__movies_movies_component__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__movie_movie_component__ = __webpack_require__(382);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });



var APP_ROUTES = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__movies_movies_component__["a" /* MoviesComponent */] },
    { path: 'movie/:id', component: __WEBPACK_IMPORTED_MODULE_2__movie_movie_component__["a" /* MovieComponent */] }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(APP_ROUTES);
//# sourceMappingURL=D:/Program Files/angular2_projekti/moviefinder-EP/src/app.routes.js.map

/***/ }),

/***/ 643:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=D:/Program Files/angular2_projekti/moviefinder-EP/src/environment.js.map

/***/ }),

/***/ 798:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 799:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 800:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 801:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-dark  bg-dark\">\n  <a class=\"navbar-brand\" routerLink=\"/\">Movie Finder</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarsExampleDefault\" aria-controls=\"navbarsExampleDefault\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div id=\"navbar\" class=\"navbar-collaps collaps\">\n      <ul class=\"nav navbar-nav \">\n        <li><a routerLink=\"/\">Home</a></li>\n      </ul>\n  </div>\n\n</nav>\n\n<main role=\"main\">\n\n  <div class=\"container\">\n    <router-outlet></router-outlet>\n\n    <hr>\n\n  </div>"

/***/ }),

/***/ 802:
/***/ (function(module, exports) {

module.exports = "\n<br>\n<br>\n\n<div *ngIf=\"movie\">\n    <div class=\"card\">\n        <div class=\"card-body\">\n        <h3 class=\"card-title\">{{movie.title}}</h3>      \n            <div class=\"row\">\n                <div class=\"col-md-5\">\n                  <img class=\"thumbnail\" src=\"http://image.tmdb.org/t/p/w500/{{movie.poster_path}}\"> \n                </div>\n                <div class=\"col-md-7\">\n                    <ul class=\"list-group\">\n                        <li class=\"list-group-item\">Genres:  <span *ngFor=\"let genre of movie.genres\">{{genre.name}}  </span></li>\n                        <br>\n                        <li class=\"list-group-item\">Release Date: {{movie.release_date}} </li>\n                        <br>\n                        <li class=\"list-group-item\">Rating: {{movie.vote_average}} / 10 </li>\n                        <br>\n                        <li class=\"list-group-item\">Runtime: {{movie.runtime}} min </li>\n                        <br>\n                        <li class=\"list-group-item\">Company:   <span *ngFor=\"let i of movie.production_companies\">{{i.name}},  </span></li>\n                        <br>\n                        <li class=\"list-group-item\">Overview: {{movie.overview}} </li>                        \n                    </ul>\n                    <br>\n                    <a *ngIf=\"movie.homepage\" href=\"{{movie.homepage}}\" target=\"_blank\" class=\"btn btn-default\" >Visit movie website</a>  \n\n                  </div>\n              </div>\n        </div>\n    </div> \n</div>\n"

/***/ }),

/***/ 803:
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\n    <div class=\"container\">\n      <h1 class=\"display-3\">Find a Movie</h1>\n      <p>Search for a movie</p>\n       <form (submit)=\"searchMovies()\">\n           <input type=\"text\" class=\"form-control\" [(ngModel)]=\"searchStr\" name=\"searchStr\">\n           <hr>\n            <button class=\"btn btn-primary btn-lg\">Find</button>\n       </form> \n    </div>\n  </div>\n\n\n  <div *ngIf=\"searchResult\" class=\"card\">\n    <div class=\"card-body\">\n    <h3 class=\"card-title\">Search results</h3>  \n        <div *ngIf=\"searchResult ==''\">\n       <label>No movies found</label> \n        </div>\n        <div class=\"row \">\n            <div *ngFor = \"let movie of searchResult; let i = index\" class=\"col-md-2\">\n              <div *ngIf=\"i < 18\">\n              <img *ngIf=\"movie.poster_path\" class=\"thumbnail text-center\" src=\"http://image.tmdb.org/t/p/w500/{{movie.poster_path}}\">\n              <hr>\n              <p class=\"text-center text-justify\">{{movie.title}}</p>\n              <hr>\n              <p class=\"text-center text-justify\">{{movie.release_date}} </p>\n              <p class=\"text-center text-justify\"><a class=\"btn btn-secondary\" routerLink=\"/movie/{{movie.id}}\">View details &raquo;</a></p>\n              </div>\n            </div>\n          </div>\n    </div>\n</div> \n\n<hr>\n<hr>\n\n<div class=\"card\">\n    <div class=\"card-body\">\n    <h3 class=\"card-title\">Popular</h3>      \n        <div class=\"row\">\n            <div *ngFor = \"let movie of popularList; let i = index\" class=\"col-md-2\">\n              <div *ngIf=\"i < 6\">\n              <img *ngIf=\"movie.poster_path\" class=\"thumbnail text-center\"  src=\"http://image.tmdb.org/t/p/w500/{{movie.poster_path}}\">\n              <hr>\n              <p class=\"text-center text-justify\">{{movie.title}}</p>          \n              <hr>\n              <p class=\"text-center text-justify\">{{movie.release_date}} </p>\n              <p class=\"text-center text-justify\"><a class=\"btn btn-secondary\" routerLink=\"/movie/{{movie.id}}\">View details &raquo;</a></p>  \n              </div>\n            </div>\n          </div>\n    </div>\n</div> \n\n<hr>\n<hr>\n\n<div class=\"card\">\n    <div class=\"card-body\">\n    <h3 class=\"card-title\">In Theaters</h3>      \n        <div class=\"row\">\n            <div *ngFor = \"let movie of inTheaters; let i = index\" class=\"col-md-2\">\n              <div *ngIf=\"i < 6\">\n              <img *ngIf=\"movie.poster_path\" class=\"thumbnail text-center\" src=\"http://image.tmdb.org/t/p/w500/{{movie.poster_path}}\">\n              <hr>\n              <p class=\"text-center text-justify\">{{movie.title}}</p>\n              <hr>\n              <p class=\"text-center text-justify\">{{movie.release_date}} </p>\n              <p class=\"text-center text-justify\"><a class=\"btn btn-secondary\" routerLink=\"/movie/{{movie.id}}\">View details &raquo;</a></p>\n              </div>\n            </div>\n          </div>\n    </div>\n</div> "

/***/ })

},[1089]);
//# sourceMappingURL=main.bundle.map