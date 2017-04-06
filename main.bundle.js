webpackJsonp([1,4],{

/***/ 143:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 143;


/***/ }),

/***/ 144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(157);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(150);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [
    {
        path: '',
        children: []
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Book Rating';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* Component */])({
        selector: 'br-root',
        template: __webpack_require__(316),
        styles: [__webpack_require__(311)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_book_store_service__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing_module__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__dashboard_dashboard_component__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__book_book_component__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__create_book_create_book_component__ = __webpack_require__(155);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_8__book_book_component__["a" /* BookComponent */],
            __WEBPACK_IMPORTED_MODULE_9__create_book_create_book_component__["a" /* CreateBookComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_5__app_routing_module__["a" /* AppRoutingModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_0__shared_book_store_service__["a" /* BookStoreService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_book__ = __webpack_require__(59);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BookComponent = (function () {
    function BookComponent() {
        this.rated = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* EventEmitter */]();
    }
    BookComponent.prototype.rateDown = function () {
        this.book.rateDown();
        this.rated.emit(this.book);
    };
    BookComponent.prototype.rateUp = function () {
        this.book.rateUp();
        this.rated.emit(this.book);
    };
    BookComponent.prototype.ngOnInit = function () {
    };
    return BookComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_book__["a" /* Book */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_book__["a" /* Book */]) === "function" && _a || Object)
], BookComponent.prototype, "book", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Output */])(),
    __metadata("design:type", Object)
], BookComponent.prototype, "rated", void 0);
BookComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* Component */])({
        selector: 'br-book',
        template: __webpack_require__(317),
        styles: [__webpack_require__(312)]
    }),
    __metadata("design:paramtypes", [])
], BookComponent);

var _a;
//# sourceMappingURL=book.component.js.map

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_book__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(87);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateBookComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CreateBookComponent = (function () {
    function CreateBookComponent() {
        this.bookCreated = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* EventEmitter */]();
    }
    CreateBookComponent.prototype.ngOnInit = function () {
        this.book = __WEBPACK_IMPORTED_MODULE_1__shared_book__["a" /* Book */].empty();
    };
    CreateBookComponent.prototype.add = function () {
        this.bookCreated.emit(this.book);
        this.book = __WEBPACK_IMPORTED_MODULE_1__shared_book__["a" /* Book */].empty();
        this.myForm.reset(this.book);
    };
    return CreateBookComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Output */])(),
    __metadata("design:type", Object)
], CreateBookComponent.prototype, "bookCreated", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* NgForm */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* NgForm */]) === "function" && _a || Object)
], CreateBookComponent.prototype, "myForm", void 0);
CreateBookComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* Component */])({
        selector: 'br-create-book',
        template: __webpack_require__(318),
        styles: [__webpack_require__(310)]
    })
], CreateBookComponent);

var _a;
//# sourceMappingURL=create-book.component.js.map

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_book_store_service__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DashboardComponent = (function () {
    function DashboardComponent(bs) {
        this.bs = bs;
        this.books = [];
    }
    DashboardComponent.prototype.add = function (book) {
        this.books.push(book);
        this.reorderBooks();
    };
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.bs.getAll()
            .subscribe(function (books) {
            _this.books = books;
            _this.reorderBooks();
        }, function (e) { console.log('FEHLER', e); });
    };
    DashboardComponent.prototype.reorderBooks = function () {
        this.books.sort(function (a, b) { return b.rating - a.rating; });
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_15" /* Component */])({
        selector: 'br-dashboard',
        template: __webpack_require__(319),
        styles: [__webpack_require__(313)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__shared_book_store_service__["a" /* BookStoreService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__shared_book_store_service__["a" /* BookStoreService */]) === "function" && _a || Object])
], DashboardComponent);

var _a;
//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 310:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(31)();
// imports


// module
exports.push([module.i, "input.ng-dirty.ng-valid,\ntextarea.ng-dirty.ng-valid {\n  border-left: 4px solid greenyellow;\n}\ninput.ng-dirty.ng-invalid,\ntextarea.ng-dirty.ng-invalid {\n  border-left: 4px solid orangered;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 311:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(31)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 312:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(31)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 313:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(31)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 316:
/***/ (function(module, exports) {

module.exports = "<h1>\n  <svg height=\"120\" style=\"vertical-align: middle;margin-left:-20px;margin-bottom:10px;\" xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" x=\"0\" y=\"0\" viewBox=\"0 0 230 250\" xml:space=\"preserve\"><style type=\"text/css\">.st0{fill:#DD0031;} .st1{fill:#C3002F;} .st2{fill:#FFFFFF;}</style><polygon class=\"st0\" points=\"125 30 125 30 125 30 31.9 63.2 46.1 186.3 125 230 125 230 125 230 203.9 186.3 218.1 63.2 \"/><polygon class=\"st1\" points=\"125 30 125 52.2 125 52.1 125 153.4 125 153.4 125 230 125 230 203.9 186.3 218.1 63.2 125 30 \"/><path class=\"st2\" d=\"M125 52.1L66.8 182.6h0 21.7 0l11.7-29.2h49.4l11.7 29.2h0 21.7 0L125 52.1 125 52.1 125 52.1 125 52.1 125 52.1zM142 135.4H108l17-40.9L142 135.4z\"/></svg>\n  {{title}}\n</h1>\n\n<br-dashboard></br-dashboard>\n\n<!--<router-outlet></router-outlet>-->\n"

/***/ }),

/***/ 317:
/***/ (function(module, exports) {

module.exports = "<div class=\"well\">\n  <div class=\"thumbnail pull-right\">\n     <img src=\"//ng-buch.de/avatar/{{book.rating}}\" />\n  </div>\n\n  <h2>{{ book.title }} <small>Stars {{ book.rating }}</small></h2>\n  <p>{{ book.description }}</p>\n\n  <button (click)=\"rateDown()\"\n          class=\"btn btn-default glyphicon glyphicon-thumbs-down\"\n          [disabled]=\"book.rating < 1\"\n          [ngClass]=\"{ cool: book.rating == 2,\n                       superCool: book.rating == 3 }\">\n  </button>\n\n  <button (click)=\"rateUp()\"\n          class=\"btn btn-danger glyphicon glyphicon-thumbs-up\"\n          [disabled]=\"book.rating > 4\">\n    </button>\n</div>\n"

/***/ }),

/***/ 318:
/***/ (function(module, exports) {

module.exports = "<form #myForm=\"ngForm\" (ngSubmit)=\"add()\">\n  <div class=\"form-group\">\n    ISBN:\n    <input class=\"form-control\" name=\"isbn\"\n    [(ngModel)]=\"book.isbn\"\n    required\n    minlength=\"3\"\n    #isbn=\"ngModel\">\n\n    <div [hidden]=\"isbn.valid || isbn.pristine\" class=\"alert alert-danger\">\n      Bitte geben Sie eine gültige ISBN an!\n    </div>\n  </div>\n  <div class=\"form-group\">\n    Title:\n    <input class=\"form-control\" name=\"title\"\n    [(ngModel)]=\"book.title\"\n    required>\n  </div>\n\n  <div class=\"form-group\">\n    Description:\n    <textarea name=\"description\" class=\"form-control\"\n    [(ngModel)]=\"book.description\"></textarea>\n  </div>\n\n  <button type=\"submit\"\n     class=\"btn btn-danger\"\n    [disabled]=\"myForm.invalid\"\n    >Save</button>\n</form>\n"

/***/ }),

/***/ 319:
/***/ (function(module, exports) {

module.exports = "<br-create-book (bookCreated)=\"add($event)\"></br-create-book>\n<hr>\n\n<br-book\n  *ngFor=\"let b of books; let i = index\"\n  [book]=\"b\"\n  (rated)=\"reorderBooks()\"\n  ></br-book>\n\nAnzahl der Bücher: {{ books.length + 1}}\n"

/***/ }),

/***/ 355:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(144);


/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Book; });
var Book = (function () {
    function Book(isbn, title, description, rating) {
        if (rating === void 0) { rating = 0; }
        this.isbn = isbn;
        this.title = title;
        this.description = description;
        this.rating = rating;
    }
    // Book-Factory
    Book.empty = function () {
        return new Book('000', '', '');
    };
    Book.prototype.rateUp = function () {
        if (this.rating < 5) {
            this.rating++;
        }
    };
    Book.prototype.rateDown = function () {
        if (this.rating > 0) {
            this.rating--;
        }
    };
    return Book;
}());

//# sourceMappingURL=book.js.map

/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_shared_book__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_retry__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_retry___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_retry__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookStoreService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BookStoreService = (function () {
    function BookStoreService(http) {
        this.http = http;
    }
    BookStoreService.prototype.getAll = function () {
        return this.http
            .get('https://book-monkey2-api.angular-buch.com/books')
            .map(function (r) { return r.json(); })
            .map(function (rawBookArray) { return rawBookArray
            .map(function (rawBook) { return new __WEBPACK_IMPORTED_MODULE_2_app_shared_book__["a" /* Book */](rawBook.isbn, rawBook.title, rawBook.description, rawBook.rating); }); })
            .retry(3);
        // retryWhen
    };
    return BookStoreService;
}());
BookStoreService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], BookStoreService);

var _a;
//# sourceMappingURL=book-store.service.js.map

/***/ })

},[355]);
//# sourceMappingURL=main.bundle.js.map