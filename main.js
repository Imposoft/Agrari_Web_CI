(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+PYi":
/*!*********************************************!*\
  !*** ./src/views/product/product.view.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".roundButton {\n  --border-radius: 100px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHByb2R1Y3Qudmlldy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUNBQUE7QUFDRiIsImZpbGUiOiJwcm9kdWN0LnZpZXcuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yb3VuZEJ1dHRvbiB7XHJcbiAgLS1ib3JkZXItcmFkaXVzOiAxMDBweCAhaW1wb3J0YW50O1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "/DIm":
/*!********************************************************!*\
  !*** ./src/views/proteccion/proteccion.component.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm90ZWNjaW9uLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "/J/n":
/*!*************************************************************!*\
  !*** ./src/components/date-modal/date-modal.component.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXRlLW1vZGFsLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "/q7d":
/*!***************************************!*\
  !*** ./src/views/cart/cart.view.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXJ0LnZpZXcuc2NzcyJ9 */");

/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Documents\GitHub\Agrari\src\main.ts */"zUnb");


/***/ }),

/***/ "01kN":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/components/register-user/register-user.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form [formGroup]=\"registrationForm\">\r\n  <ion-item>\r\n    <ion-label position=\"floating\" type=\"text\">Nombre *</ion-label>\r\n    <ion-input [required]=\"true\" formControlName=\"name\"></ion-input>\r\n  </ion-item>\r\n  <ion-item>\r\n    <ion-label position=\"floating\" type=\"email\">Email *</ion-label>\r\n    <ion-input [required]=\"true\" formControlName=\"email\"></ion-input>\r\n  </ion-item>\r\n  <ion-item>\r\n    <ion-label position=\"floating\" type=\"password\">Contraseña *</ion-label>\r\n    <ion-input [required]=\"true\" formControlName=\"password\" type=\"password\"></ion-input>\r\n  </ion-item>\r\n  <ion-item>\r\n    <ion-label position=\"floating\" type=\"email\">Telefono</ion-label>\r\n    <ion-input formControlName=\"phoneNumber\"></ion-input>\r\n  </ion-item>\r\n  <ion-item>\r\n    <ion-label position=\"stacked\" type=\"file\">Foto</ion-label>\r\n    <ion-input (click)=\"takePicture()\" readonly formControlName=\"picture\" [value]=\"registrationForm.value.picture\"></ion-input>\r\n  </ion-item>\r\n  <ion-item>\r\n    <ion-label position=\"floating\" type=\"text\">Ubicación</ion-label>\r\n    <ion-input value=\"Valencia\" formControlName=\"location\"></ion-input>\r\n  </ion-item>\r\n  <ion-item>\r\n    <ion-label>Soy Productor/a</ion-label>\r\n    <ion-checkbox slot=\"start\" formControlName=\"isFarmer\"></ion-checkbox>\r\n  </ion-item>\r\n  <ion-item text-wrap>\r\n    <ion-label text-wrap>Acepto recibir comunicaciones de Agrari como newsletters, encuestas o avisos de actualizaciones para ayudar con el desarrollo</ion-label>\r\n    <ion-checkbox slot=\"start\" formControlName=\"newsSub\"></ion-checkbox>\r\n  </ion-item>\r\n</form>\r\n<ion-text>Al crear tu cuenta aceptas la <a (click)=\"presentModal(1)\">Política de privacidad</a> y los <a (click)=\"presentModal(0)\">Términos y condiciones</a></ion-text>\r\n<ion-row class=\"cardfooter\">\r\n  <ion-col>\r\n    <ion-button class=\"ion-float-right\" (click)=\"registerUser()\" style=\"font-family: Montserrat\">Crear cuenta</ion-button>\r\n  </ion-col>\r\n</ion-row>\r\n<!--\r\n<div>\r\n  <form [formGroup]=\"registrationForm\">\r\n    <div class=\"form-check mb-2\">\r\n      <input class=\"form-check-input\" type=\"checkbox\" value=\"\" id=\"defaultCheck1\" formControlName=\"isFarmer\">\r\n      <label class=\"form-check-label\" for=\"defaultCheck1\">Soy agricultor</label>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"formGroupExampleInput\">Nombre</label>\r\n      <input type=\"text\" class=\"form-control\" id=\"formGroupExampleInput\" placeholder=\"Tu nombre\" formControlName=\"name\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"formGroupExampleInput2\">Email</label>\r\n      <input type=\"text\" class=\"form-control\" id=\"formGroupExampleInput2\" placeholder=\"tu_email@gmail.com\" formControlName=\"email\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"formGroupExampleInput2\">Contraseña</label>\r\n      <input type=\"text\" class=\"form-control\" id=\"formGroupExampleInput3\" placeholder=\"Contraseña\" formControlName=\"password\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"formGroupExampleInput2\">Telefono</label>\r\n      <input type=\"text\" class=\"form-control\" id=\"formGroupExampleInput4\" placeholder=\"Numero de telefono\" formControlName=\"phoneNumber\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"formGroupExampleInput2\">Foto</label>\r\n        <ion-button (click)=\"takePicture()\">Gelo</ion-button>\r\n      <input type=\"text\" class=\"form-control\" id=\"formGroupExampleInput5\" placeholder=\"Foto\" formControlName=\"picture\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"formGroupExampleInput2\">Ubicacion</label>\r\n      <input type=\"text\" class=\"form-control\" id=\"formGroupExampleInput6\" placeholder=\"Ubicacion\" formControlName=\"location\">\r\n    </div>\r\n  </form>\r\n  <div class=\"d-flex justify-content-end\">\r\n    <button class=\"d-flex justify-content-end btn btn-outline-primary m-2\" id=\"login\" (click)=\"registerUser()\">Crear cuenta</button>\r\n  </div>\r\n</div>\r\n-->\r\n");

/***/ }),

/***/ "2PRq":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/components/product-list/product-list.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-item (click)=\"openProduct(product)\">\r\n  <!-- Vista si hay stock -->\r\n  <ion-avatar slot=\"start\">\r\n    <img [src]=\"product.picture\" [ngStyle]=\"!product.stock ? { '-webkit-filter': 'grayscale(100%)', 'filter': 'grayscale(100%)'} : {}\">\r\n  </ion-avatar>\r\n  <ion-label>\r\n    <h2 style=\"font-family: Montserrat\">{{product.name}}</h2>\r\n    <h3>{{product.description}}</h3>\r\n    <ion-badge *ngIf=\"!product.stock\" color=\"danger\" slot=\"end\">Sin stock</ion-badge>\r\n  </ion-label>\r\n  <ion-label slot=\"end\">\r\n    {{product.price | currency:'EUR' }} x {{unitsList[product.unit]}}\r\n  </ion-label>\r\n</ion-item>\r\n");

/***/ }),

/***/ "3IWx":
/*!*************************************************!*\
  !*** ./src/views/product-list/products.view.ts ***!
  \*************************************************/
/*! exports provided: ProductsView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsView", function() { return ProductsView; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_products_view_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./products.view.html */ "R8pz");
/* harmony import */ var _products_view_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./products.view.scss */ "Qesr");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/storage */ "Vaw3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_products_product_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/products/product.service */ "TYbz");
/* harmony import */ var _services_auth_auth_service_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/auth/auth-service.service */ "v1tz");









let ProductsView = class ProductsView {
    constructor(firestore, storage, router, route, productService, authService) {
        this.firestore = firestore;
        this.storage = storage;
        this.router = router;
        this.route = route;
        this.productService = productService;
        this.authService = authService;
        this.isSearch = false;
        this.productList = [];
        this.filteredProducts = [];
        this.pathId = null;
    }
    ionViewWillEnter() {
        this.route.params.subscribe(params => {
            if (params.userId) {
                this.pathId = params.userId;
                this.productList = [];
                this.filteredProducts = [];
                this.isSearch = true;
                this.productService.loadProductsByOwnerId(this.pathId).then(value => {
                    this.productList = value;
                    this.filteredProducts = this.productList;
                    this.filteredProducts.sort(compare);
                });
            }
            else {
                this.pathId = null;
                this.isSearch = false;
                this.productService.loadAllProducts().then(value => {
                    this.productList = value;
                    this.filteredProducts = this.productList;
                    this.filteredProducts.sort(compare);
                });
            }
        });
    }
    ngOnInit() {
    }
    openProduct(product) {
        if (product.stock || product.ownerId === this.authService.getCurrentUserId()) {
            this.router.navigate(['/product', product.id]);
        }
    }
    getItems(ev) {
        // Reset items back to all of the items
        this.filteredProducts = this.productList;
        // set val to the value of the searchbar
        const val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() !== '') {
            this.isSearch = true;
            this.filteredProducts = this.productList.filter(value => {
                return (value.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
            // this.items = this.items.filter((item) => {
            //  return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
            //  });
        }
        else {
            if (!this.pathId) {
                this.isSearch = false;
            }
        }
    }
    searchCategory(idNumber) {
        this.isSearch = true;
        this.filteredProducts = this.productList.filter(value => {
            // @ts-ignore
            return value.category === idNumber;
        });
    }
    cancelSearch() {
        this.filteredProducts = this.productList;
        if (!this.pathId) {
            this.isSearch = false;
        }
    }
};
ProductsView.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"] },
    { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_5__["AngularFireStorage"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
    { type: _services_products_product_service__WEBPACK_IMPORTED_MODULE_7__["ProductService"] },
    { type: _services_auth_auth_service_service__WEBPACK_IMPORTED_MODULE_8__["AuthServiceService"] }
];
ProductsView = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-products',
        template: _raw_loader_products_view_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_products_view_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ProductsView);

function compare(a, b) {
    if (a.stock && !b.stock) {
        return -1;
    }
    if (!a.stock && b.stock) {
        return 1;
    }
    return 0;
}


/***/ }),

/***/ "50wC":
/*!*****************************************************!*\
  !*** ./src/views/profile-list/profile-list.view.ts ***!
  \*****************************************************/
/*! exports provided: ProfileListView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileListView", function() { return ProfileListView; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_profile_list_view_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./profile-list.view.html */ "YHzb");
/* harmony import */ var _profile_list_view_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile-list.view.scss */ "dOmc");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/storage */ "Vaw3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _models_user_user_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../models/user/user.model */ "aUIA");
/* harmony import */ var _services_profiles_profiles_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/profiles/profiles.service */ "Wnju");









let ProfileListView = class ProfileListView {
    constructor(firestore, storage, router, route, profileService) {
        this.firestore = firestore;
        this.storage = storage;
        this.router = router;
        this.route = route;
        this.profileService = profileService;
    }
    ionViewWillEnter() {
        this.profileList = [];
        this.profileImages = [];
        this.currentProfile = new _models_user_user_model__WEBPACK_IMPORTED_MODULE_7__["User"]();
        this.profileService.getAllFarmers().then(value => this.profileList = value);
    }
    ngOnInit() {
    }
    loadCurrentPicture(imageUrl, index) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const ref = this.storage.ref(imageUrl);
            ref.getDownloadURL().subscribe(url => {
                this.profileList[index].picture = url;
                return url;
            });
        });
    }
};
ProfileListView.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"] },
    { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_5__["AngularFireStorage"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
    { type: _services_profiles_profiles_service__WEBPACK_IMPORTED_MODULE_8__["ProfilesService"] }
];
ProfileListView = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-profile-list',
        template: _raw_loader_profile_list_view_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_profile_list_view_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ProfileListView);



/***/ }),

/***/ "A/1b":
/*!************************************************************!*\
  !*** ./src/views/product-form/product-form.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9kdWN0LWZvcm0uY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "AihG":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/views/statistics/statistics.view.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\r\n  <ion-card>\r\n    <ion-card-header>\r\n      <ion-card-title style=\"font-family: Montserrat\">Has facturado: {{anything.totalSaleAmount | currency:'EUR'}}</ion-card-title>\r\n      <ion-card-subtitle>Con un total de {{anything.totalOrders}} pedidos</ion-card-subtitle>\r\n    </ion-card-header>\r\n    <ion-card-content style=\"font-family: Montserrat\">\r\n      Tus productos mas vendidos:\r\n      <ion-list>\r\n        <ion-item *ngFor=\"let product of anything.productsOrdered\">\r\n          {{product.name}} x\r\n          {{product.productAmount}}\r\n        </ion-item>\r\n      </ion-list>\r\n    </ion-card-content>\r\n  </ion-card>\r\n</ion-content>\r\n");

/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    firebaseConfig: {
        apiKey: 'AIzaSyDRGAlsyTrq3FLLBXVjQknxiDzRETFsk6U',
        authDomain: 'imposoft-tfg-main.firebaseapp.com',
        databaseURL: 'https://imposoft-tfg-main.firebaseio.com',
        projectId: 'imposoft-tfg-main',
        storageBucket: 'imposoft-tfg-main.appspot.com',
        messagingSenderId: '153205354284',
        appId: '1:153205354284:web:5fe3df85962f94a3fe0689',
        measurementId: 'G-KWJ0HMHZNQ'
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "BfzC":
/*!***************************************!*\
  !*** ./src/views/login/login.view.ts ***!
  \***************************************/
/*! exports provided: LoginView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginView", function() { return LoginView; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_login_view_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./login.view.html */ "oqLW");
/* harmony import */ var _login_view_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.view.sass */ "yemC");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");







let LoginView = class LoginView {
    constructor(afAuth, firestore, router) {
        this.afAuth = afAuth;
        this.firestore = firestore;
        this.router = router;
        this.isLogin = true;
    }
    ngOnInit() {
        this.afAuth.authState.subscribe(user => {
            if (user) {
                this.router.navigate(['/profile']);
            }
        });
    }
};
LoginView.ctorParameters = () => [
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestore"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
LoginView = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-login',
        template: _raw_loader_login_view_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_login_view_sass__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], LoginView);



/***/ }),

/***/ "DPVA":
/*!*************************************************!*\
  !*** ./src/views/order-list/order-list.view.ts ***!
  \*************************************************/
/*! exports provided: OrderListView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderListView", function() { return OrderListView; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_order_list_view_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./order-list.view.html */ "wjYC");
/* harmony import */ var _order_list_view_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./order-list.view.scss */ "gv8C");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_order_order_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/order/order.service */ "uW7w");





let OrderListView = class OrderListView {
    constructor(orderService) {
        this.orderService = orderService;
        this.filterCategory = 'Pendiente';
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.orderList = [];
        this.refreshList();
    }
    updateOrders() {
        // @ts-ignore
        this.orderShown = this.orderList.filter(value => value.status === this.filterCategory);
    }
    refreshList() {
        this.orderService.loadAllOrdersOfCurrentUser().then(value => {
            this.orderList = value;
            this.orderList.sort(compare);
            this.orderShown = this.orderList.filter(value1 => value1.status === this.filterCategory);
        });
    }
};
OrderListView.ctorParameters = () => [
    { type: _services_order_order_service__WEBPACK_IMPORTED_MODULE_4__["OrderService"] }
];
OrderListView = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-order-list',
        template: _raw_loader_order_list_view_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_order_list_view_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], OrderListView);

function compare(a, b) {
    if (a.creationDate.seconds < b.creationDate.seconds) {
        return -1;
    }
    if (a.creationDate.seconds > b.creationDate.seconds) {
        return 1;
    }
    return 0;
}


/***/ }),

/***/ "E9lE":
/*!*************************************************!*\
  !*** ./src/views/statistics/statistics.view.ts ***!
  \*************************************************/
/*! exports provided: StatisticsView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatisticsView", function() { return StatisticsView; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_statistics_view_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./statistics.view.html */ "AihG");
/* harmony import */ var _statistics_view_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./statistics.view.scss */ "XB9S");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_order_order_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/order/order.service */ "uW7w");
/* harmony import */ var _models_statistics_stats__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../models/statistics/stats */ "PcW2");







let StatisticsView = class StatisticsView {
    constructor(router, route, orderService) {
        this.router = router;
        this.route = route;
        this.orderService = orderService;
        this.anything = new _models_statistics_stats__WEBPACK_IMPORTED_MODULE_6__["Stats"]();
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.orderService.loadUserSalesRecord().then(value => this.anything = value);
    }
};
StatisticsView.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _services_order_order_service__WEBPACK_IMPORTED_MODULE_5__["OrderService"] }
];
StatisticsView = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-statistics',
        template: _raw_loader_statistics_view_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_statistics_view_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], StatisticsView);



/***/ }),

/***/ "EzbU":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/components/date-modal/date-modal.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\r\n  Test?\r\n</ion-content>\r\n");

/***/ }),

/***/ "G59Y":
/*!*******************************************!*\
  !*** ./src/views/profile/profile.view.ts ***!
  \*******************************************/
/*! exports provided: ProfileView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileView", function() { return ProfileView; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_profile_view_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./profile.view.html */ "Yh7j");
/* harmony import */ var _profile_view_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile.view.sass */ "O18Q");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _models_user_user_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/user/user.model */ "aUIA");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/storage */ "Vaw3");
/* harmony import */ var _models_user_user_roles_enum__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../models/user/user-roles.enum */ "zOgT");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _services_profiles_profiles_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../services/profiles/profiles.service */ "Wnju");













let ProfileView = class ProfileView {
    constructor(router, route, firestore, afAuth, storage, window, modalCtrl, profileService) {
        this.router = router;
        this.route = route;
        this.firestore = firestore;
        this.afAuth = afAuth;
        this.storage = storage;
        this.window = window;
        this.modalCtrl = modalCtrl;
        this.profileService = profileService;
        this.isFarmer = false;
        this.user = new _models_user_user_model__WEBPACK_IMPORTED_MODULE_4__["User"]();
        const datepipe = new _angular_common__WEBPACK_IMPORTED_MODULE_11__["DatePipe"]('en-US');
        this.today = datepipe.transform(new Date(), 'YYYY-MM-dd');
        this.currentPickUpDate = new Date();
        console.log(this.today);
        this.route.params.subscribe(params => {
            if (params.id) {
                this.pathId = params.id;
                this.userCollection = firestore.doc('profiles/' + this.pathId);
                this.userCollection.valueChanges({ idField: '_id' }).subscribe(user => {
                    this.user = this.user.convertFromDTO(user);
                    if (this.user.pickupDate) {
                        this.currentPickUpDate = this.user.pickupDate;
                    }
                    this.isFarmer = this.user.role === _models_user_user_roles_enum__WEBPACK_IMPORTED_MODULE_9__["UserRoles"].PRODUCER;
                    const ref = this.storage.ref(this.user.picture);
                    ref.getDownloadURL().subscribe(url => {
                        this.profileImage = url;
                    });
                });
            }
            else {
                this.afAuth.authState.subscribe(loggedUser => {
                    if (loggedUser) {
                        this.loggedId = loggedUser.uid;
                        this.pathId = loggedUser.uid;
                        this.userCollection = firestore.doc('profiles/' + this.pathId);
                        this.userCollection.valueChanges({ idField: '_id' }).subscribe(user => {
                            this.user = this.user.convertFromDTO(user);
                            this.isFarmer = this.user.role === _models_user_user_roles_enum__WEBPACK_IMPORTED_MODULE_9__["UserRoles"].PRODUCER;
                            const ref = this.storage.ref(this.user.picture);
                            ref.getDownloadURL().subscribe(url => {
                                this.profileImage = url;
                            });
                        });
                    }
                });
            }
        });
    }
    ngOnInit() {
    }
    logout() {
        this.afAuth.signOut().then(() => {
            this.router.navigate(['/login']);
        });
    }
    changeDate($event) {
        this.profileService.updatePickDate(this.user.id, new Date($event.detail.value));
    }
};
ProfileView.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestore"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__["AngularFireAuth"] },
    { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_8__["AngularFireStorage"] },
    { type: Window },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["ModalController"] },
    { type: _services_profiles_profiles_service__WEBPACK_IMPORTED_MODULE_12__["ProfilesService"] }
];
ProfileView = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-profile',
        template: _raw_loader_profile_view_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_profile_view_sass__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ProfileView);



/***/ }),

/***/ "GNp0":
/*!***************************************************************!*\
  !*** ./src/components/product-list/product-list.component.ts ***!
  \***************************************************************/
/*! exports provided: ProductListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductListComponent", function() { return ProductListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_product_list_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./product-list.component.html */ "2PRq");
/* harmony import */ var _product_list_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product-list.component.scss */ "t3AT");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _models_product_product__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/product/product */ "rHSd");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_products_product_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/products/product.service */ "TYbz");
/* harmony import */ var _services_auth_auth_service_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/auth/auth-service.service */ "v1tz");
/* harmony import */ var _pipes_enum_to_array_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../pipes/enum-to-array.pipe */ "m4/V");









let ProductListComponent = class ProductListComponent {
    constructor(router, route, productService, authService, enumToArrayPipe) {
        this.router = router;
        this.route = route;
        this.productService = productService;
        this.authService = authService;
        this.enumToArrayPipe = enumToArrayPipe;
        this.unitsList = this.enumToArrayPipe.transform(_models_product_product__WEBPACK_IMPORTED_MODULE_4__["UnitTypeEnum"]);
    }
    ngOnInit() { }
    openProduct(product) {
        if (product.stock || product.ownerId === this.authService.getCurrentUserId()) {
            this.router.navigate(['/product', product.id]);
        }
    }
};
ProductListComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _services_products_product_service__WEBPACK_IMPORTED_MODULE_6__["ProductService"] },
    { type: _services_auth_auth_service_service__WEBPACK_IMPORTED_MODULE_7__["AuthServiceService"] },
    { type: _pipes_enum_to_array_pipe__WEBPACK_IMPORTED_MODULE_8__["EnumToArrayPipe"] }
];
ProductListComponent.propDecorators = {
    product: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
ProductListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-product-list',
        template: _raw_loader_product_list_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_product_list_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ProductListComponent);



/***/ }),

/***/ "GV5D":
/*!*********************************************************!*\
  !*** ./src/components/cart-item/cart-item.component.ts ***!
  \*********************************************************/
/*! exports provided: CartItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartItemComponent", function() { return CartItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_cart_item_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./cart-item.component.html */ "rdQJ");
/* harmony import */ var _cart_item_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cart-item.component.scss */ "PdOq");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_order_cart_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/order/cart-service.service */ "LD/N");





let CartItemComponent = class CartItemComponent {
    constructor(cartService) {
        this.cartService = cartService;
        this.productEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
    }
    ngOnInit() {
    }
    removeFromCart() {
        this.cartService.removeProductOrderFromCart(this.product);
        this.productEvent.emit({ operation: 'delete', product: this.product });
    }
};
CartItemComponent.ctorParameters = () => [
    { type: _services_order_cart_service_service__WEBPACK_IMPORTED_MODULE_4__["CartServiceService"] }
];
CartItemComponent.propDecorators = {
    product: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    productEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }]
};
CartItemComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-cart-item',
        template: _raw_loader_cart_item_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_cart_item_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CartItemComponent);



/***/ }),

/***/ "IwNu":
/*!*************************************!*\
  !*** ./src/views/cart/cart.view.ts ***!
  \*************************************/
/*! exports provided: CartView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartView", function() { return CartView; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_cart_view_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./cart.view.html */ "burr");
/* harmony import */ var _cart_view_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cart.view.scss */ "/q7d");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_order_cart_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/order/cart-service.service */ "LD/N");
/* harmony import */ var _services_products_product_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/products/product.service */ "TYbz");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");







let CartView = class CartView {
    constructor(cartService, productService, alertController) {
        this.cartService = cartService;
        this.productService = productService;
        this.alertController = alertController;
        this.cart = [];
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        this.loadItemsOfCart();
    }
    cartItemEvent(event) {
        if (event.operation === 'delete') {
            this.loadItemsOfCart();
        }
    }
    loadItemsOfCart() {
        this.cart = Array.prototype.concat.apply([], this.cartService.getAllProductOrders());
        ;
    }
    checkout() {
        this.cartService.checkoutCart();
        this.cart = [];
        this.presentAlert();
    }
    presentAlert() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Enhorabuena',
                message: 'Tu pedido ha sido generado con exito, dirigete a tus pedidos para revisarlo.',
                buttons: ['Aceptar']
            });
            yield alert.present();
        });
    }
};
CartView.ctorParameters = () => [
    { type: _services_order_cart_service_service__WEBPACK_IMPORTED_MODULE_4__["CartServiceService"] },
    { type: _services_products_product_service__WEBPACK_IMPORTED_MODULE_5__["ProductService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] }
];
CartView = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-cart',
        template: _raw_loader_cart_view_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_cart_view_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CartView);



/***/ }),

/***/ "KwcL":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/pwa-elements/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \*************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./pwa-action-sheet.entry.js": [
		"jDxf",
		43
	],
	"./pwa-camera-modal-instance.entry.js": [
		"37vE",
		44
	],
	"./pwa-camera-modal.entry.js": [
		"cJxf",
		45
	],
	"./pwa-camera.entry.js": [
		"eGHz",
		46
	],
	"./pwa-toast.entry.js": [
		"fHjd",
		47
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "KwcL";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "LD/N":
/*!****************************************************!*\
  !*** ./src/services/order/cart-service.service.ts ***!
  \****************************************************/
/*! exports provided: CartServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartServiceService", function() { return CartServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _models_cart_cart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/cart/cart */ "dDNQ");
/* harmony import */ var _models_order_order__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/order/order */ "ya8d");
/* harmony import */ var _order_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./order.service */ "uW7w");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _auth_auth_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../auth/auth-service.service */ "v1tz");







let CartServiceService = class CartServiceService {
    constructor(orderService, firestore, authService) {
        this.orderService = orderService;
        this.firestore = firestore;
        this.authService = authService;
        this.currentCart = new _models_cart_cart__WEBPACK_IMPORTED_MODULE_2__["Cart"]();
    }
    addProductToCart(productOrder) {
        const ownerOrder = this.currentCart.ordersList.find(order => order.ownerId === productOrder.productOwnerId);
        // Recorremos el carrito buscando si este dueño ya tiene un pedido asociado
        if (ownerOrder) {
            const currentOrderedItem = ownerOrder.orderedItems.find(orderedItem => orderedItem.productId === productOrder.productId);
            // Si lo encontramos revisamos si ya tiene ese producto en el carro y actualizamos la cantidad
            if (!currentOrderedItem) {
                ownerOrder.orderedItems.push(productOrder);
            }
        }
        else {
            this.currentCart.ordersList.push(this.generateNewOrderFromProduct(productOrder));
        }
    }
    generateNewOrderFromProduct(productOrder) {
        const newOrderToAdd = new _models_order_order__WEBPACK_IMPORTED_MODULE_3__["Order"]();
        newOrderToAdd.userId = this.authService.getCurrentUserId();
        newOrderToAdd.ownerId = productOrder.productOwnerId;
        newOrderToAdd.orderedItems.push(productOrder);
        return newOrderToAdd;
    }
    getAllProductIds() {
        let allId = [];
        allId = this.currentCart.ordersList.map(value => value.orderedItems.map(value1 => value1.productId));
        return allId;
    }
    getAllProductOrders() {
        let allProductOrders = [];
        allProductOrders = this.currentCart.ordersList.map(value => value.orderedItems);
        return allProductOrders;
    }
    removeProductOrderFromCart(product) {
        const orderToEdit = this.currentCart.ordersList.find(value => value.orderedItems.find(value1 => value1 === product));
        console.log(orderToEdit);
        const productIndex = orderToEdit.orderedItems.indexOf(product);
        if (productIndex > -1) {
            orderToEdit.orderedItems.splice(productIndex, 1);
            if (orderToEdit.orderedItems.length <= 0) {
                const orderIndex = this.currentCart.ordersList.indexOf(orderToEdit);
                this.currentCart.ordersList.splice(orderIndex, 1);
            }
        }
        console.log(this.currentCart.ordersList);
        console.log(orderToEdit);
    }
    removeOrderFromCart(order) {
        const orderIndex = this.currentCart.ordersList.indexOf(order);
        if (orderIndex > -1) {
            this.currentCart.ordersList.splice(orderIndex, 1);
        }
    }
    checkoutCart() {
        console.log(this.currentCart);
        if (this.currentCart.ordersList.length > 0) {
            this.currentCart.ordersList.forEach(value => {
                const newOrder = this.orderService.createOrderEntity(value);
                this.uploadOrder(newOrder).then(value1 => {
                    this.removeOrderFromCart(value);
                });
            });
        }
    }
    uploadOrder(order) {
        return new Promise((resolve, reject) => {
            const orderCollection = this.firestore.collection('orders');
            orderCollection.add(order).then(value => {
                resolve(value);
            });
        });
    }
};
CartServiceService.ctorParameters = () => [
    { type: _order_service__WEBPACK_IMPORTED_MODULE_4__["OrderService"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"] },
    { type: _auth_auth_service_service__WEBPACK_IMPORTED_MODULE_6__["AuthServiceService"] }
];
CartServiceService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CartServiceService);



/***/ }),

/***/ "O18Q":
/*!*********************************************!*\
  !*** ./src/views/profile/profile.view.sass ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9maWxlLnZpZXcuc2FzcyJ9 */");

/***/ }),

/***/ "P3F1":
/*!*******************************************!*\
  !*** ./src/views/product/product.view.ts ***!
  \*******************************************/
/*! exports provided: ProductView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductView", function() { return ProductView; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_product_view_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./product.view.html */ "jX7l");
/* harmony import */ var _product_view_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product.view.scss */ "+PYi");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/storage */ "Vaw3");
/* harmony import */ var _models_product_product__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../models/product/product */ "rHSd");
/* harmony import */ var _models_user_user_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../models/user/user.model */ "aUIA");
/* harmony import */ var _models_cart_product_order__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../models/cart/product-order */ "UU4C");
/* harmony import */ var _services_order_cart_service_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../services/order/cart-service.service */ "LD/N");
/* harmony import */ var _services_products_product_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../services/products/product.service */ "TYbz");
/* harmony import */ var _services_profiles_profiles_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../services/profiles/profiles.service */ "Wnju");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _pipes_enum_to_array_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../pipes/enum-to-array.pipe */ "m4/V");
















let ProductView = class ProductView {
    constructor(router, route, enumToArrayPipe, firestore, afAuth, storage, cartService, productService, profileService, alertController) {
        this.router = router;
        this.route = route;
        this.enumToArrayPipe = enumToArrayPipe;
        this.firestore = firestore;
        this.afAuth = afAuth;
        this.storage = storage;
        this.cartService = cartService;
        this.productService = productService;
        this.profileService = profileService;
        this.alertController = alertController;
        this.isOwner = false;
        this.selectVal = 0;
        this.product = new _models_product_product__WEBPACK_IMPORTED_MODULE_8__["Product"]();
        this.productOrder = new _models_cart_product_order__WEBPACK_IMPORTED_MODULE_10__["ProductOrder"]();
        this.productOwner = new _models_user_user_model__WEBPACK_IMPORTED_MODULE_9__["User"]();
        this.unitsList = this.enumToArrayPipe.transform(_models_product_product__WEBPACK_IMPORTED_MODULE_8__["UnitTypeEnum"]);
    }
    ionViewWillEnter() {
        this.route.params.subscribe(params => {
            if (params.id) {
                if (this.pathId !== params.id) {
                    this.pathId = params.id;
                    this.productService.loadProductById(this.pathId).then(value => {
                        this.product = value;
                        this.productOrder.product = this.product;
                        this.productOrder.priceByEach = this.product.price;
                        this.productOrder.productId = this.product.id;
                        this.productOrder.productOwnerId = this.product.ownerId;
                        this.profileService.loadUserById(this.productOrder.productOwnerId).then(user => {
                            this.productOwner = user;
                        });
                        this.afAuth.authState.subscribe(loggedUser => {
                            if (loggedUser) {
                                this.loggedId = loggedUser.uid;
                                this.loggedId === this.product.ownerId ? this.isOwner = true : this.isOwner = false;
                            }
                        });
                    });
                }
            }
        });
    }
    presentAlert() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Agregado',
                message: 'Tu producto se ha agregado al carrito dirigete a el para revisarlo.',
                buttons: ['Aceptar']
            });
            yield alert.present();
        });
    }
    addToCart() {
        // TODO: Quitar el boton de agregar y poner uno de eliminar del carrito
        this.cartService.addProductToCart(this.productOrder);
        this.presentAlert();
    }
};
ProductView.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _pipes_enum_to_array_pipe__WEBPACK_IMPORTED_MODULE_15__["EnumToArrayPipe"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__["AngularFireAuth"] },
    { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_7__["AngularFireStorage"] },
    { type: _services_order_cart_service_service__WEBPACK_IMPORTED_MODULE_11__["CartServiceService"] },
    { type: _services_products_product_service__WEBPACK_IMPORTED_MODULE_12__["ProductService"] },
    { type: _services_profiles_profiles_service__WEBPACK_IMPORTED_MODULE_13__["ProfilesService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_14__["AlertController"] }
];
ProductView = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-product',
        template: _raw_loader_product_view_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_product_view_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ProductView);



/***/ }),

/***/ "PcW2":
/*!****************************************!*\
  !*** ./src/models/statistics/stats.ts ***!
  \****************************************/
/*! exports provided: Stats, StatsProductOrders */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Stats", function() { return Stats; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatsProductOrders", function() { return StatsProductOrders; });
class Stats {
    constructor() {
        this.productsOrdered = [];
        this.totalOrders = 0;
        this.totalSaleAmount = 0;
    }
}
class StatsProductOrders {
    constructor() {
        this.productAmount = 0;
        this.numberOfOrders = 0;
        this.name = '';
    }
}


/***/ }),

/***/ "PdOq":
/*!***********************************************************!*\
  !*** ./src/components/cart-item/cart-item.component.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXJ0LWl0ZW0uY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "PnrI":
/*!*******************************************************************!*\
  !*** ./src/components/navigation-bar/navigation-bar.component.ts ***!
  \*******************************************************************/
/*! exports provided: NavigationBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationBarComponent", function() { return NavigationBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_navigation_bar_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./navigation-bar.component.html */ "T1WX");
/* harmony import */ var _navigation_bar_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navigation-bar.component.scss */ "ZTTp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _models_user_user_roles_enum__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../models/user/user-roles.enum */ "zOgT");
/* harmony import */ var _services_profiles_profiles_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/profiles/profiles.service */ "Wnju");









let NavigationBarComponent = class NavigationBarComponent {
    constructor(afAuth, router, firestore, profilesService) {
        this.afAuth = afAuth;
        this.router = router;
        this.firestore = firestore;
        this.profilesService = profilesService;
        this.isFarmer = false;
        this.isLogged = false;
        this.afAuth.authState.subscribe(user => {
            if (user) {
                this.isLogged = true;
                this.userId = user.uid;
                this.userCollection = firestore.doc('profiles/' + user.uid);
                this.profilesService.loadUserById(user.uid).then(realUser => {
                    this.isFarmer = realUser.role === _models_user_user_roles_enum__WEBPACK_IMPORTED_MODULE_7__["UserRoles"].PRODUCER;
                });
            }
            else {
                this.isLogged = false;
            }
        });
    }
    ngOnInit() {
    }
};
NavigationBarComponent.ctorParameters = () => [
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestore"] },
    { type: _services_profiles_profiles_service__WEBPACK_IMPORTED_MODULE_8__["ProfilesService"] }
];
NavigationBarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-navigation-bar',
        template: _raw_loader_navigation_bar_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_navigation_bar_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], NavigationBarComponent);



/***/ }),

/***/ "Q/nm":
/*!***********************************************************!*\
  !*** ./src/components/order-item/order-item.component.ts ***!
  \***********************************************************/
/*! exports provided: OrderItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderItemComponent", function() { return OrderItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_order_item_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./order-item.component.html */ "mhRT");
/* harmony import */ var _order_item_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./order-item.component.scss */ "cn8i");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _models_order_order__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/order/order */ "ya8d");
/* harmony import */ var _services_auth_auth_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/auth/auth-service.service */ "v1tz");
/* harmony import */ var _services_profiles_profiles_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/profiles/profiles.service */ "Wnju");
/* harmony import */ var _models_user_user_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../models/user/user.model */ "aUIA");
/* harmony import */ var _services_order_order_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/order/order.service */ "uW7w");









let OrderItemComponent = class OrderItemComponent {
    constructor(authService, profileService, orderService) {
        this.authService = authService;
        this.profileService = profileService;
        this.orderService = orderService;
        this.refreshViewEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.finalPrice = 0;
        this.isFarmer = false;
        this.isFarmer = authService.getIsFarmer();
        this.orderUser = new _models_user_user_model__WEBPACK_IMPORTED_MODULE_7__["User"]();
    }
    ngOnInit() {
        this.finalPrice = this.order.getOrderPrice();
        this.profileService.loadUserById(this.order.userId).then(value => {
            this.orderUser = value;
        });
    }
    cancelOrder() {
        this.orderService.cancelOrderById(this.order.id).then(value => {
            if (value) {
                this.order.status = _models_order_order__WEBPACK_IMPORTED_MODULE_4__["OrderStatusEnum"].Cancelado;
                this.refreshViewEvent.emit(value);
            }
        });
    }
    prepareOrder() {
        this.orderService.markOrderAsPreparedById(this.order.id).then(value => {
            if (value) {
                this.order.status = _models_order_order__WEBPACK_IMPORTED_MODULE_4__["OrderStatusEnum"].Preparado;
                this.refreshViewEvent.emit(value);
            }
        });
    }
    deliveredOrder() {
        this.orderService.markOrderAsDeliveredById(this.order.id).then(value => {
            if (value) {
                this.order.status = _models_order_order__WEBPACK_IMPORTED_MODULE_4__["OrderStatusEnum"].Preparado;
                this.refreshViewEvent.emit(value);
            }
        });
    }
};
OrderItemComponent.ctorParameters = () => [
    { type: _services_auth_auth_service_service__WEBPACK_IMPORTED_MODULE_5__["AuthServiceService"] },
    { type: _services_profiles_profiles_service__WEBPACK_IMPORTED_MODULE_6__["ProfilesService"] },
    { type: _services_order_order_service__WEBPACK_IMPORTED_MODULE_8__["OrderService"] }
];
OrderItemComponent.propDecorators = {
    order: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    refreshViewEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }]
};
OrderItemComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-order-item',
        template: _raw_loader_order_item_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_order_item_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], OrderItemComponent);



/***/ }),

/***/ "Qesr":
/*!***************************************************!*\
  !*** ./src/views/product-list/products.view.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card-background-page ion-card {\n  position: relative;\n  text-align: center;\n  background-color: #00593b;\n  max-width: 420px;\n  max-height: 420px;\n  --border-radius: 12px !important;\n  font-family: Montserrat;\n}\n.card-background-page .card-title {\n  position: absolute;\n  top: 36%;\n  font-size: 1.5em;\n  width: 100%;\n  font-weight: bold;\n  color: #fff;\n}\n.card-background-page .card-subtitle {\n  font-size: 0.8em;\n  position: absolute;\n  top: 52%;\n  width: 100%;\n  color: #fff;\n}\n.search {\n  --border-radius: 12px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHByb2R1Y3RzLnZpZXcuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFRTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQ0FBQTtFQUNBLHVCQUFBO0FBREo7QUFJRTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQUZKO0FBS0U7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FBSEo7QUFRQTtFQUNFLGdDQUFBO0FBTEYiLCJmaWxlIjoicHJvZHVjdHMudmlldy5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQtYmFja2dyb3VuZC1wYWdlIHtcclxuXHJcbiAgaW9uLWNhcmQge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNTkzYjtcclxuICAgIG1heC13aWR0aDogNDIwcHg7XHJcbiAgICBtYXgtaGVpZ2h0OiA0MjBweDtcclxuICAgIC0tYm9yZGVyLXJhZGl1czogMTJweCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQ7XHJcbiAgfVxyXG5cclxuICAuY2FyZC10aXRsZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDM2JTtcclxuICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgfVxyXG5cclxuICAuY2FyZC1zdWJ0aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDAuOGVtO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MiU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbi5zZWFyY2h7XHJcbiAgLS1ib3JkZXItcmFkaXVzOiAxMnB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "R2j2":
/*!***********************************************************!*\
  !*** ./src/components/date-modal/date-modal.component.ts ***!
  \***********************************************************/
/*! exports provided: DateModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateModalComponent", function() { return DateModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_date_modal_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./date-modal.component.html */ "EzbU");
/* harmony import */ var _date_modal_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./date-modal.component.scss */ "/J/n");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let DateModalComponent = class DateModalComponent {
    constructor() { }
    ngOnInit() { }
};
DateModalComponent.ctorParameters = () => [];
DateModalComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-date-modal',
        template: _raw_loader_date_modal_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_date_modal_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], DateModalComponent);



/***/ }),

/***/ "R8pz":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/views/product-list/products.view.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content class=\"card-background-page\">\r\n  <ion-searchbar #mySearchbar [showCancelButton]=\"isSearch\"\r\n                 [value]=\"searchTerms\"\r\n                 class=\"search\"\r\n                 (ionCancel)=\"cancelSearch()\"\r\n                 placeholder=\"Buscar\"\r\n                 (ionInput)=\"getItems($event)\"></ion-searchbar>\r\n  {{searchTerms}}\r\n  <ion-grid *ngIf=\"!isSearch\">\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-card (click)=\"searchCategory(0)\">\r\n          <img src=\"assets/categories/iconFruit.png\"/>\r\n          <div class=\"card-title\">Frutas</div>\r\n          <div class=\"card-subtitle\"></div>\r\n        </ion-card>\r\n      </ion-col>\r\n      <ion-col>\r\n        <ion-card (click)=\"searchCategory(1)\">\r\n          <img src=\"assets/categories/iconVeg.png\"/>\r\n          <div class=\"card-title\">Verduras</div>\r\n          <div class=\"card-subtitle\"></div>\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-card (click)=\"searchCategory(2)\">\r\n          <img src=\"assets/categories/iconLegumbres.png\"/>\r\n          <div class=\"card-title\">Legumbres</div>\r\n          <div class=\"card-subtitle\"></div>\r\n        </ion-card>\r\n      </ion-col>\r\n      <ion-col>\r\n        <ion-card (click)=\"searchCategory(6)\">\r\n          <img src=\"assets/categories/iconHoney.png\"/>\r\n          <div class=\"card-title\">Miel</div>\r\n          <div class=\"card-subtitle\"></div>\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-card (click)=\"searchCategory(3)\">\r\n          <img src=\"assets/categories/iconBread.png\"/>\r\n          <div class=\"card-title\">Panaderia</div>\r\n          <div class=\"card-subtitle\"></div>\r\n        </ion-card>\r\n      </ion-col>\r\n      <ion-col>\r\n        <ion-card (click)=\"searchCategory(4)\">\r\n          <img src=\"assets/categories/iconDairy.png\"/>\r\n          <div class=\"card-title\">Lacteos</div>\r\n          <div class=\"card-subtitle\"></div>\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-card (click)=\"searchCategory(5)\">\r\n          <img src=\"assets/categories/iconEggs.png\"/>\r\n          <div class=\"card-title\">Huevos</div>\r\n          <div class=\"card-subtitle\"></div>\r\n        </ion-card>\r\n      </ion-col>\r\n      <ion-col>\r\n        <ion-card (click)=\"searchCategory(7)\">\r\n          <img src=\"assets/categories/iconOther.png\"/>\r\n          <div class=\"card-title\">Otros</div>\r\n          <div class=\"card-subtitle\"></div>\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n  <ion-list *ngIf=\"isSearch\">\r\n    <ion-list-header *ngIf=\"filteredProducts.length <= 0\">No hemos encontrado productos</ion-list-header>\r\n    <app-product-list *ngFor=\"let inproduct of filteredProducts\" [product]=\"inproduct\"></app-product-list>\r\n  </ion-list>\r\n</ion-content>\r\n");

/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.scss */ "ynWL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");






let AppComponent = class AppComponent {
    constructor(router, afAuth) {
        this.router = router;
        this.afAuth = afAuth;
    }
    ngOnInit() {
        this.afAuth.authState.subscribe(user => {
            if (!user) {
                this.router.navigate(['/login']);
            }
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuth"] }
];
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AppComponent);



/***/ }),

/***/ "T1WX":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/components/navigation-bar/navigation-bar.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- NAV BAR USER -->\r\n<ion-tabs *ngIf=\"!isFarmer && isLogged\">\r\n  <ion-tab-bar slot=\"bottom\">\r\n    <ion-tab-button  [tab]=\"'orders'\">\r\n      <ion-icon name=\"cube-outline\"></ion-icon>\r\n      <ion-label>Pedidos</ion-label>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button [tab]=\"'profiles'\">\r\n      <ion-icon name=\"list-outline\"></ion-icon>\r\n      <ion-label>Productores</ion-label>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button [tab]=\"'products'\">\r\n      <ion-icon name=\"search-outline\"></ion-icon>\r\n      <ion-label>Buscar</ion-label>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button [tab]=\"'cart'\">\r\n      <ion-icon name=\"cart-outline\"></ion-icon>\r\n      <ion-label>Carrito</ion-label>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button [tab]=\"'myProfile'\">\r\n      <ion-icon name=\"person-outline\"></ion-icon>\r\n      <ion-label>Perfil</ion-label>\r\n    </ion-tab-button>\r\n  </ion-tab-bar>\r\n</ion-tabs>\r\n<!-- NAV BAR FARMER -->\r\n<ion-tabs *ngIf=\"isFarmer && isLogged\">\r\n  <ion-tab-bar slot=\"bottom\">\r\n    <ion-tab-button [tab]=\"'products/0'\">\r\n      <ion-icon name=\"list-outline\"></ion-icon>\r\n      <ion-label>Productos</ion-label>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button [tab]=\"'statistics'\">\r\n      <ion-icon name=\"stats-chart-outline\"></ion-icon>\r\n      <ion-label>Estadisticas</ion-label>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button [tab]=\"'productForm'\">\r\n      <ion-icon name=\"add-outline\"></ion-icon>\r\n      <ion-label>Crear</ion-label>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button [tab]=\"'orders'\">\r\n      <ion-icon name=\"cube-outline\"></ion-icon>\r\n      <ion-label>Pedidos</ion-label>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button [tab]=\"'myProfile'\">\r\n      <ion-icon name=\"person-outline\"></ion-icon>\r\n      <ion-label>Perfil</ion-label>\r\n    </ion-tab-button>\r\n  </ion-tab-bar>\r\n</ion-tabs>\r\n");

/***/ }),

/***/ "TYbz":
/*!**************************************************!*\
  !*** ./src/services/products/product.service.ts ***!
  \**************************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var _models_product_product__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/product/product */ "rHSd");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/storage */ "Vaw3");
/* harmony import */ var _auth_auth_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../auth/auth-service.service */ "v1tz");







let ProductService = class ProductService {
    constructor(afAuth, firestore, storage, authService) {
        this.afAuth = afAuth;
        this.firestore = firestore;
        this.storage = storage;
        this.authService = authService;
        this.productCollection = this.firestore.collection('products');
    }
    loadAllProducts() {
        return new Promise((resolve, reject) => {
            let productList = [];
            this.productCollection.valueChanges({ idField: '_id' }).subscribe(productEntities => {
                productList = [];
                productEntities.forEach((value) => {
                    const currentProduct = new _models_product_product__WEBPACK_IMPORTED_MODULE_4__["Product"]().convertFromDTO(value);
                    this.loadProductImage(currentProduct.picture).then(imageUrl => currentProduct.picture = imageUrl);
                    productList.push(currentProduct);
                });
                resolve(productList);
            });
        });
    }
    loadProductsById(productIds) {
        return new Promise((resolve, reject) => {
            if (productIds.length > 0) {
                let productList = [];
                const queryCollection = this.firestore.collection('products', ref => ref.where('_id', 'in', productIds));
                queryCollection.valueChanges({ idField: '_id' }).subscribe(productEntities => {
                    productList = [];
                    productEntities.forEach((value) => {
                        const currentProduct = new _models_product_product__WEBPACK_IMPORTED_MODULE_4__["Product"]().convertFromDTO(value);
                        this.loadProductImage(currentProduct.picture).then(imageUrl => currentProduct.picture = imageUrl);
                        productList.push(currentProduct);
                    });
                    console.log(productList);
                    console.log(productEntities);
                    resolve(productList);
                });
            }
            else {
                reject('No Products in cart');
            }
        });
    }
    loadProductById(productIds) {
        return new Promise((resolve, reject) => {
            let product;
            this.productCollection.doc(productIds).valueChanges().subscribe(productEntity => {
                const currentProduct = new _models_product_product__WEBPACK_IMPORTED_MODULE_4__["Product"]().convertFromDTO(productEntity);
                currentProduct.id = productIds;
                this.loadProductImage(currentProduct.picture).then(imageUrl => currentProduct.picture = imageUrl);
                product = currentProduct;
                resolve(product);
            });
        });
    }
    loadProductsByOwnerId(owenerId) {
        return new Promise((resolve, reject) => {
            let productList = [];
            const queryCollection = this.firestore.collection('products', ref => ref.where('_ownerId', '==', owenerId));
            queryCollection.valueChanges({ idField: '_id' }).subscribe(productEntities => {
                productList = [];
                productEntities.forEach((value) => {
                    const currentProduct = new _models_product_product__WEBPACK_IMPORTED_MODULE_4__["Product"]().convertFromDTO(value);
                    this.loadProductImage(currentProduct.picture).then(imageUrl => currentProduct.picture = imageUrl);
                    productList.push(currentProduct);
                });
                resolve(productList);
            });
        });
    }
    deleteProduct(product) {
        return new Promise((resolve, reject) => {
            if (this.authService.getCurrentUserId() === product.ownerId) {
                this.productCollection.doc(product.id).delete().then(value => {
                    resolve(true);
                });
            }
            else {
                reject(false);
            }
        });
    }
    loadProductImage(imagePath) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const ref = this.storage.ref(imagePath);
            return new Promise((resolve, reject) => {
                ref.getDownloadURL().subscribe(url => {
                    resolve(url);
                });
            });
        });
    }
};
ProductService.ctorParameters = () => [
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] },
    { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_5__["AngularFireStorage"] },
    { type: _auth_auth_service_service__WEBPACK_IMPORTED_MODULE_6__["AuthServiceService"] }
];
ProductService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ProductService);



/***/ }),

/***/ "UMto":
/*!**************************************************!*\
  !*** ./src/views/terminos/terminos.component.ts ***!
  \**************************************************/
/*! exports provided: TerminosView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TerminosView", function() { return TerminosView; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_terminos_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./terminos.component.html */ "zBet");
/* harmony import */ var _terminos_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./terminos.component.scss */ "eguZ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");





let TerminosView = class TerminosView {
    constructor(modalCtrl) {
        this.modalCtrl = modalCtrl;
    }
    ngOnInit() { }
    dismiss() {
        // using the injected ModalController this page
        // can "dismiss" itself and optionally pass back data
        this.modalCtrl.dismiss({
            'dismissed': true
        });
    }
};
TerminosView.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] }
];
TerminosView = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-terminos',
        template: _raw_loader_terminos_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_terminos_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], TerminosView);



/***/ }),

/***/ "UU4C":
/*!******************************************!*\
  !*** ./src/models/cart/product-order.ts ***!
  \******************************************/
/*! exports provided: ProductOrder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductOrder", function() { return ProductOrder; });
/* harmony import */ var class_transformer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! class-transformer */ "LGct");

class ProductOrder {
    constructor() {
        this._productId = '-1';
        this._productAmount = 0;
        this._priceByEach = 0;
        this._productOwnerId = '-1';
    }
    reduce() {
        // @ts-ignore
        if (this.product.unit === 1) {
            if (this.productAmount > 0) {
                this.productAmount -= 0.250;
            }
            else {
                this.productAmount = 0;
            }
        }
        else {
            if (this.productAmount > 0) {
                this.productAmount--;
            }
            else {
                this.productAmount = 0;
            }
        }
    }
    add() {
        // @ts-ignore
        if (this.product.unit === 1) {
            this.productAmount += 0.250;
        }
        else {
            this.productAmount++;
        }
    }
    convertToDTO() {
        return Object(class_transformer__WEBPACK_IMPORTED_MODULE_0__["classToPlain"])(this);
    }
    convertFromDTO(product) {
        return Object(class_transformer__WEBPACK_IMPORTED_MODULE_0__["plainToClass"])(ProductOrder, product);
    }
    get productAmount() {
        return this._productAmount;
    }
    set productAmount(value) {
        if (value > 0) {
            this._productAmount = value;
        }
        else {
            this._productAmount = 0;
        }
    }
    get productId() {
        return this._productId;
    }
    set productId(value) {
        this._productId = value;
    }
    get priceByEach() {
        return this._priceByEach;
    }
    set priceByEach(value) {
        this._priceByEach = value;
    }
    get productOwnerId() {
        return this._productOwnerId;
    }
    set productOwnerId(value) {
        this._productOwnerId = value;
    }
    get product() {
        return this._product;
    }
    set product(value) {
        this._product = value;
    }
}


/***/ }),

/***/ "UtC6":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/components/login-user/login-user.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\r\n  <form [formGroup]=\"registrationForm\" class=\"mx-auto\">\r\n    <div class=\"form-group\">\r\n      <ion-item>\r\n        <ion-label position=\"floating\" type=\"text\" style=\"font-family: Montserrat\">Email:</ion-label>\r\n        <ion-input\r\n          style=\"font-family: Assistant\"\r\n          type=\"text\"\r\n          class=\"form-control\"\r\n          placeholder=\"miemail@mail.com\"\r\n          formControlName=\"email\"\r\n          id=\"emailInput\"></ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item>\r\n        <ion-label position=\"floating\" type=\"text\" style=\"font-family: Montserrat\">Contraseña:</ion-label>\r\n        <ion-input\r\n          type=\"password\"\r\n          name=\"password\"\r\n          autocomplete=\"on\"\r\n          class=\"form-control\"\r\n          formControlName=\"password\"\r\n          id=\"passwordInput\"\r\n          [type]=\"hide ? 'password' : 'text'\"></ion-input>\r\n      </ion-item>\r\n    </div>\r\n  </form>\r\n  <div class=\"d-flex justify-content-end\">\r\n    <ion-button expand=\"block\" class=\"d-flex justify-content-end btn btn-outline-primary m-2\"\r\n                id=\"login\" (click)=\"logIn()\" style=\"font-family: Montserrat\">Iniciar sesion</ion-button>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-app>\r\n  <ion-header>\r\n    <ion-toolbar class=\"ion-text-center\">\r\n      <img alt=\"logo\" height=\"29\" src=\"assets/logo.png\">\r\n    </ion-toolbar>\r\n  </ion-header>\r\n  <ion-content>\r\n    <ion-router-outlet></ion-router-outlet>\r\n    <app-navigation-bar></app-navigation-bar>\r\n  </ion-content>\r\n</ion-app>\r\n");

/***/ }),

/***/ "Wnju":
/*!***************************************************!*\
  !*** ./src/services/profiles/profiles.service.ts ***!
  \***************************************************/
/*! exports provided: ProfilesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilesService", function() { return ProfilesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _models_user_user_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/user/user.model */ "aUIA");
/* harmony import */ var _models_user_user_roles_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/user/user-roles.enum */ "zOgT");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/storage */ "Vaw3");
/* harmony import */ var _auth_auth_service_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../auth/auth-service.service */ "v1tz");









let ProfilesService = class ProfilesService {
    constructor(afAuth, router, firestore, storage, authService) {
        this.afAuth = afAuth;
        this.router = router;
        this.firestore = firestore;
        this.storage = storage;
        this.authService = authService;
        this.userCollection = this.firestore.collection('profiles');
    }
    loadUserById(userId) {
        return new Promise((resolve, reject) => {
            this.userCollection.doc(userId).valueChanges({ idField: '_id' }).subscribe(userData => {
                const realUser = new _models_user_user_model__WEBPACK_IMPORTED_MODULE_2__["User"]().convertFromDTO(userData);
                resolve(realUser);
            });
        });
    }
    getAllFarmers() {
        const farmerCollection = this.firestore.collection('profiles', ref => ref.where('_role', '==', _models_user_user_roles_enum__WEBPACK_IMPORTED_MODULE_3__["UserRoles"].PRODUCER));
        let farmerList = [];
        return new Promise((resolve, reject) => {
            farmerCollection.valueChanges({ idField: '_id' }).subscribe(farmerEntities => {
                farmerList = [];
                farmerEntities.forEach(currentUser => {
                    const realUser = new _models_user_user_model__WEBPACK_IMPORTED_MODULE_2__["User"]().convertFromDTO(currentUser);
                    this.loadProfileImage(realUser.picture).then(imageUrl => realUser.picture = imageUrl);
                    farmerList.push(realUser);
                });
                resolve(farmerList);
            });
        });
    }
    updatePickDate(userId, newDate) {
        return new Promise((resolve, reject) => {
            if (this.authService.getCurrentUserId() === userId) {
                this.userCollection.doc(userId).update({ _pickupDate: newDate }).then(value => {
                    resolve('Fecha actualizada correctamente');
                });
            }
            else {
                reject('Error al actualizar la fecha');
            }
        });
    }
    loadProfileImage(imagePath) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const ref = this.storage.ref(imagePath);
            return new Promise((resolve, reject) => {
                ref.getDownloadURL().subscribe(url => {
                    resolve(url);
                });
            });
        });
    }
};
ProfilesService.ctorParameters = () => [
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestore"] },
    { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_7__["AngularFireStorage"] },
    { type: _auth_auth_service_service__WEBPACK_IMPORTED_MODULE_8__["AuthServiceService"] }
];
ProfilesService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ProfilesService);



/***/ }),

/***/ "XB9S":
/*!***************************************************!*\
  !*** ./src/views/statistics/statistics.view.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdGF0aXN0aWNzLnZpZXcuc2NzcyJ9 */");

/***/ }),

/***/ "YHzb":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/views/profile-list/profile-list.view.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\r\n  <ion-list>\r\n    <ion-list-header style=\"font-family: Montserrat\">\r\n      Productores:\r\n    </ion-list-header>\r\n\r\n    <ion-item *ngFor=\"let user of profileList\">\r\n      <ion-avatar slot=\"start\">\r\n        <img [src]=\"user.picture\">\r\n      </ion-avatar>\r\n      <ion-label>\r\n        <h2>{{user.name}}</h2>\r\n      </ion-label>\r\n      <ion-button type=\"button\" [routerLink]=\"'/profile/' + user.id\" style=\"font-family: Montserrat\">\r\n        Abrir\r\n      </ion-button>\r\n    </ion-item>\r\n  </ion-list>\r\n</ion-content>\r\n");

/***/ }),

/***/ "Yh7j":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/views/profile/profile.view.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content class=\"ion-padding\">\r\n  <ion-grid>\r\n    <ion-row class=\"ion-align-items-end\">\r\n        <ion-avatar>\r\n          <img [src]=\"this.profileImage\">\r\n        </ion-avatar>\r\n        <ion-text class=\"ion-padding\">\r\n          <h2 class=\"ion-no-margin\" style=\"font-family: Montserrat\">\r\n            {{this.user.name}}\r\n          </h2>\r\n        </ion-text>\r\n      <ion-button [color]=\"'danger'\" (click)=\"logout()\" *ngIf=\"loggedId\"\r\n                  [routerLink]=\"'/login'\" type=\"button\" class=\"btn btn-danger\">Cerrar sesión</ion-button>\r\n      <ion-button *ngIf=\"isFarmer\" [routerLink]=\"['/profileProducts', 0, this.user.id]\">Productos</ion-button>\r\n    </ion-row>\r\n  </ion-grid>\r\n  <div *ngIf=\"!loggedId && user.pickupDate\" style=\"font-family: Montserrat\">\r\n    Fecha de pedidos limite: {{user.pickupDate.toLocaleDateString('es-ES')}}\r\n  </div>\r\n  <div *ngIf=\"loggedId\">\r\n    <ion-list>\r\n      <div *ngIf=\"isFarmer\">\r\n        <ion-item [color]=\"'warning'\" (click)=\"ionDatetime.open()\" *ngIf=\"!user.pickupDate\">\r\n          <ion-icon name=\"alert-circle-outline\" slot=\"start\"></ion-icon>\r\n          <ion-label class=\"ion-text-wrap\">\r\n            Aun no has seleccionado una fecha limite de pedidos, seleccionala para poder crear productos\r\n          </ion-label>\r\n        </ion-item>\r\n        <ion-item >\r\n          <ion-label>Fecha maxima de pedidos</ion-label>\r\n          <ion-datetime #ionDatetime placeholder=\"Fecha maxima de pedidos\"\r\n                        (ionChange)=\"changeDate($event)\" [min]=\"today\" [value]=\"currentPickUpDate.toISOString()\"\r\n                        [doneText]=\"'Aceptar'\" [cancelText]=\"'Cancelar'\"\r\n          [monthShortNames]=\"['Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic']\"></ion-datetime>\r\n        </ion-item>\r\n      </div>\r\n\r\n      <ion-item href=\"mailto:info@agrari.es\" (click)=\"window.open('mailto:info@agrari.es')\">\r\n        <ion-icon name=\"help-circle-outline\" slot=\"start\" ></ion-icon>\r\n        <ion-label class=\"ion-text-wrap\" style=\"font-family: Montserrat\">\r\n          ¿Necesitas ayuda? Mandanos un email a:\r\n          <br>\r\n          info@agrari.es\r\n        </ion-label>\r\n      </ion-item>\r\n    </ion-list>\r\n  </div>\r\n</ion-content>\r\n\r\n");

/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire */ "spgP");
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../environments/environment.prod */ "cxbk");
/* harmony import */ var _angular_fire_analytics__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/analytics */ "h+eY");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_login_user_login_user_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/login-user/login-user.component */ "vFr8");
/* harmony import */ var _views_login_login_view__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../views/login/login.view */ "BfzC");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _components_register_user_register_user_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/register-user/register-user.component */ "bB5R");
/* harmony import */ var _components_navigation_bar_navigation_bar_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/navigation-bar/navigation-bar.component */ "PnrI");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/fire/storage */ "Vaw3");
/* harmony import */ var _views_profile_profile_view__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../views/profile/profile.view */ "G59Y");
/* harmony import */ var _views_product_form_product_form_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../views/product-form/product-form.component */ "wMDc");
/* harmony import */ var _pipes_enum_to_array_pipe__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../pipes/enum-to-array.pipe */ "m4/V");
/* harmony import */ var _views_product_product_view__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../views/product/product.view */ "P3F1");
/* harmony import */ var _views_product_list_products_view__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../views/product-list/products.view */ "3IWx");
/* harmony import */ var _views_profile_list_profile_list_view__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../views/profile-list/profile-list.view */ "50wC");
/* harmony import */ var _views_cart_cart_view__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../views/cart/cart.view */ "IwNu");
/* harmony import */ var _components_cart_item_cart_item_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../components/cart-item/cart-item.component */ "GV5D");
/* harmony import */ var _views_order_list_order_list_view__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../views/order-list/order-list.view */ "DPVA");
/* harmony import */ var _components_order_item_order_item_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../components/order-item/order-item.component */ "Q/nm");
/* harmony import */ var _views_statistics_statistics_view__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../views/statistics/statistics.view */ "E9lE");
/* harmony import */ var _components_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../components/product-list/product-list.component */ "GNp0");
/* harmony import */ var _views_terminos_terminos_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../views/terminos/terminos.component */ "UMto");
/* harmony import */ var _views_proteccion_proteccion_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../views/proteccion/proteccion.component */ "cDKL");
/* harmony import */ var _components_date_modal_date_modal_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../components/date-modal/date-modal.component */ "R2j2");
/* harmony import */ var _angular_common_locales_es__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/common/locales/es */ "2Yyj");
/* harmony import */ var _angular_common_locales_es__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_es__WEBPACK_IMPORTED_MODULE_32__);

































let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            /*  VIEWS */
            _views_login_login_view__WEBPACK_IMPORTED_MODULE_12__["LoginView"],
            _views_profile_profile_view__WEBPACK_IMPORTED_MODULE_17__["ProfileView"],
            _views_product_product_view__WEBPACK_IMPORTED_MODULE_20__["ProductView"],
            _views_product_list_products_view__WEBPACK_IMPORTED_MODULE_21__["ProductsView"],
            _views_cart_cart_view__WEBPACK_IMPORTED_MODULE_23__["CartView"],
            _views_order_list_order_list_view__WEBPACK_IMPORTED_MODULE_25__["OrderListView"],
            _views_statistics_statistics_view__WEBPACK_IMPORTED_MODULE_27__["StatisticsView"],
            _views_terminos_terminos_component__WEBPACK_IMPORTED_MODULE_29__["TerminosView"],
            _views_proteccion_proteccion_component__WEBPACK_IMPORTED_MODULE_30__["ProteccionView"],
            /* COMPONENTS */
            _components_register_user_register_user_component__WEBPACK_IMPORTED_MODULE_14__["RegisterUserComponent"],
            _components_navigation_bar_navigation_bar_component__WEBPACK_IMPORTED_MODULE_15__["NavigationBarComponent"],
            _views_product_form_product_form_component__WEBPACK_IMPORTED_MODULE_18__["ProductFormComponent"],
            _views_profile_list_profile_list_view__WEBPACK_IMPORTED_MODULE_22__["ProfileListView"],
            _components_date_modal_date_modal_component__WEBPACK_IMPORTED_MODULE_31__["DateModalComponent"],
            _components_login_user_login_user_component__WEBPACK_IMPORTED_MODULE_11__["LoginUserComponent"], _components_cart_item_cart_item_component__WEBPACK_IMPORTED_MODULE_24__["CartItemComponent"], _components_order_item_order_item_component__WEBPACK_IMPORTED_MODULE_26__["OrderItemComponent"], _components_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_28__["ProductListComponent"]],
        entryComponents: [],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["CommonModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"].forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_6__["AngularFireModule"].initializeApp(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_7__["environment"].firebaseConfig),
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_9__["AngularFirestoreModule"],
            _angular_fire_analytics__WEBPACK_IMPORTED_MODULE_8__["AngularFireAnalyticsModule"],
            _angular_fire_storage__WEBPACK_IMPORTED_MODULE_16__["AngularFireStorageModule"]],
        providers: [{ provide: _angular_common__WEBPACK_IMPORTED_MODULE_10__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_10__["HashLocationStrategy"] },
            _pipes_enum_to_array_pipe__WEBPACK_IMPORTED_MODULE_19__["EnumToArrayPipe"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
            { provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"], useValue: 'es' },
            { provide: Window, useValue: window }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
    })
], AppModule);

Object(_angular_common__WEBPACK_IMPORTED_MODULE_10__["registerLocaleData"])(_angular_common_locales_es__WEBPACK_IMPORTED_MODULE_32___default.a, 'es');


/***/ }),

/***/ "ZTTp":
/*!*********************************************************************!*\
  !*** ./src/components/navigation-bar/navigation-bar.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuYXZpZ2F0aW9uLWJhci5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "aUIA":
/*!***************************************!*\
  !*** ./src/models/user/user.model.ts ***!
  \***************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var class_transformer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! class-transformer */ "LGct");


class User {
    constructor() {
        this.lastSession = Date.now();
        this.email = '';
        this.name = '';
        this.picture = '';
        this.location = '';
        this.balance = 0;
    }
    getCurrentDate() {
        return Object(_angular_common__WEBPACK_IMPORTED_MODULE_0__["formatDate"])(this.lastSession, 'yyyy-MM-dd', 'es-ES');
    }
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }
    get email() {
        return this._email;
    }
    set email(value) {
        this._email = value;
    }
    get phoneNumber() {
        return this._phoneNumber;
    }
    set phoneNumber(value) {
        this._phoneNumber = value;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get picture() {
        return this._picture;
    }
    set picture(value) {
        this._picture = value;
    }
    get location() {
        return this._location;
    }
    set location(value) {
        this._location = value;
    }
    get balance() {
        return this._balance;
    }
    set balance(value) {
        this._balance = value;
    }
    get role() {
        return this._role;
    }
    set role(value) {
        this._role = value;
    }
    get lastSession() {
        return this._lastSession;
    }
    set lastSession(value) {
        this._lastSession = value;
    }
    get pickupDate() {
        return this._pickupDate;
    }
    set pickupDate(value) {
        this._pickupDate = value;
    }
    get newsSub() {
        return this._newsSub;
    }
    set newsSub(value) {
        this._newsSub = value;
    }
    convertToDTO() {
        return Object(class_transformer__WEBPACK_IMPORTED_MODULE_1__["classToPlain"])(this);
    }
    convertFromDTO(userData) {
        const theUser = Object(class_transformer__WEBPACK_IMPORTED_MODULE_1__["plainToClass"])(User, userData);
        if (userData._pickupDate) {
            theUser.pickupDate = new Date(userData._pickupDate.seconds * 1000);
        }
        return theUser;
    }
}


/***/ }),

/***/ "aXdB":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/views/proteccion/proteccion.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title style=\"height: 100%; vertical-align: center\">\r\n      <ion-button fill=\"clear\" size=\"small\" (click)=\"dismiss()\">\r\n        <ion-icon name=\"arrow-back-outline\"></ion-icon>\r\n      </ion-button>\r\n      <div style=\"width: min-content; display: inline; height: 100%; vertical-align: center; font-family: Montserrat\">\r\n      Política de Privacidad\r\n      </div>\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"iub_content legal_pp\">\r\n\r\n\r\n\r\n    <div class=\"iub_header\">\r\n\r\n      <h1>Política de privacidad de <strong>www.agrari.es</strong></h1>\r\n\r\n      <p>Esta Aplicación recoge algunos Datos Personales de sus Usuarios.</p><br>\r\n      <p>Los Usuarios pueden estar sujetos a distintos estándares de protección, por lo que algunos se pueden ver afectados por estándares más elevados. Para más información sobre los criterios de protección, los Usuarios pueden consultar la sección sobre aplicabilidad.</p>\r\n      <p>El presente documento puede imprimirse como referencia utilizando el comando de impresión en las opciones de configuración de cualquier navegador.</p>\r\n    </div> <!-- /header -->\r\n\r\n\r\n\r\n    <div class=\"one_line_col\">\r\n      <h2 id=\"owner_of_the_data\">\r\n        Titular y Responsable del tratamiento de los Datos\r\n      </h2>\r\n      <p>Agrari - España</p>\r\n      <p><strong>Correo electrónico de contacto del Titular:</strong> info@agrari.es</p>\r\n    </div>\r\n\r\n\r\n    <div class=\"one_line_col\">\r\n      <h2 id=\"types_of_data\">\r\n        Clases de Datos recogidos\r\n      </h2>\r\n\r\n\r\n      <p>\r\n        Entre las clases de Datos Personales que recoge esta Aplicación, ya sea directamente o a través de terceros, se encuentran:\r\n        nombre; apellido(s); dirección de correo electrónico; username; password; foto de perfil; Datos de uso; Rastreador; identificadores únicos de dispositivo para publicidad (ID de publicidad de Google o IDFA, por ejemplo); información del dispositivo; región geográfica; cantidad de Usuarios; cantidad de sesiones; duración de la sesión; compras directas desde la Aplicación; cantidad de veces que se abre la Aplicación; actualizaciones de la Aplicación; aperturas de la aplicación; sistemas operativos; número de teléfono; país; código postal; sexo; fecha de nacimiento; ciudad; dirección física; razón social.\r\n      </p>\r\n\r\n      <p>La información completa referente a cada categoría de Datos Personales que se recogen se proporciona en las secciones de la presente política de privacidad dedicadas a tal fin o mediante textos explicativos específicos que se muestran antes de la recogida de dichos Datos.<br>\r\n        Los Datos Personales podrán ser proporcionados libremente por el Usuario o, en caso de los Datos de Uso, serán recogidos automáticamente cuando se utilice esta Aplicación.<br>\r\n        Todos los Datos solicitados por esta Aplicación son obligatorios y la negativa a proporcionarlos podrá imposibilitar  que esta Aplicación pueda proceder a la prestación del Servicio. En los casos en los que esta Aplicación indique específicamente que ciertos Datos no son obligatorios, los Usuarios serán libres de no comunicar tales Datos sin que esto tenga consecuencia alguna sobre la disponibilidad o el funcionamiento del Servicio.\r\n        Los Usuarios que tengan dudas sobre qué Datos son obligatorios pueden contactar con el Titular.<br>\r\n        El uso de Cookies - o de otras herramientas de seguimiento - por parte de esta Aplicación o por los titulares de servicios de terceros utilizados por esta Aplicación tiene como finalidad la prestación del Servicio solicitado por el Usuario, además de cualesquiera otras finalidades que se describan en el presente documento y en la Política de Cookies, en caso de estar disponible. <br></p>\r\n      <p>El Usuario asume la responsabilidad respecto de los Datos Personales de terceros que se obtengan, publiquen o compartan a través de esta Aplicación y declara por la presente que tiene el consentimiento de dichos terceros para proporcionar dichos Datos al Titular.</p>\r\n    </div>\r\n\r\n\r\n    <div class=\"one_line_col\">\r\n      <h2 id=\"place_of_processing\">Modalidad y lugar del tratamiento de los Datos recogidos</h2>\r\n      <h3>Modalidades de Tratamiento</h3>\r\n      <p>El Titular tratará los Datos de los Usuarios de manera adecuada y adoptará las medidas de seguridad apropiadas para impedir el acceso, la revelación, alteración o destrucción no autorizados de los Datos.<br>\r\n        El tratamiento de Datos se realizará mediante ordenadores y/o herramientas informáticas, siguiendo procedimientos y modalidades organizativas estrictamente relacionadas con las finalidades señaladas. Además del Titular, en algunos casos podrán acceder a los Datos ciertas categorías de personas autorizadas, relacionadas con el funcionamiento de esta Aplicación (administración, ventas, marketing, departamento jurídico y de administración de sistemas) o contratistas externos que presten servicios al Titular (tales como proveedores externos de servicios técnicos, empresas de mensajería, empresas de hosting, empresas de informática, agencias de comunicación) que serán nombrados por el Titular como Encargados del Tratamiento, si fuera necesario. Se podrá solicitar al Titular en cualquier momento una lista actualizada de dichas personas.</p>\r\n      <h3>Base jurídica del Tratamiento</h3>\r\n      <p>El Titular podrá tratar los Datos Personales del Usuario,  si se cumple una de las siguientes condiciones:</p>\r\n      <ul>\r\n        <li>Cuando los Usuarios hayan dado su consentimiento para una o más finalidades específicas. Aviso: Al amparo de varias legislaciones diferentes, el Titular podrá estar autorizado a tratar los Datos Personales hasta que el Usuario se oponga a ello (“opción de no participación”), sin necesidad de consentimiento o de cualquier otra base jurídica. Sin embargo, esto no será aplicable cuando el tratamiento de los Datos Personales esté sujeto a la normativa europea en materia de protección de Datos Personales;</li>\r\n        <li>Cuando la obtención de Datos sea necesaria para el cumplimiento de un contrato entre el Usuario y/o cualquier otra obligación precontractual del mismo;</li>\r\n        <li>Cuando el tratamiento sea necesario para el cumplimiento de una obligación legal de obligado cumplimiento por parte del Usuario;</li>\r\n        <li>Cuando el tratamiento esté relacionado con una tarea ejecutada en interés público o en el ejercicio de competencias oficiales otorgadas al Titular;</li>\r\n        <li>Cuando el tratamiento sea necesario con el fin de un interés legítimo perseguido por el Titular o un tercero.</li>\r\n      </ul>\r\n      <p>En cualquier caso, el Titular está  a su disposición para definir las bases jurídicas específicas que se aplican al tratamiento y en particular, si la obtención de los Datos Personales es un requisito contractual o estatutario o un requisito necesario para formalizar un contrato.</p>\r\n      <h3>Lugar</h3>\r\n      <p>Los Datos se tratan en las oficinas del Titular, así como en cualquier otro lugar en el que se encuentren situadas las partes implicadas en dicho proceso de tratamiento.<br>\r\n        Dependiendo de la localización de los Usuarios, las transferencias de Datos pueden implicar la transferencia de los Datos de los Usuarios a otro país diferente al suyo propio. Para más información sobre el lugar de tratamiento de dichos Datos transferidos, los Usuarios podrán consultar la sección que contiene los detalles sobre el tratamiento de los Datos Personales.</p>\r\n      <p>Si son de aplicación estándares de protección más elevados, los Usuarios también tendrán derecho a conocer las bases legales de las transferencias de Datos a otro país fuera de la Unión Europea o a cualquier organismo internacional que se rija por el Derecho Público Internacional o que esté formado por dos o más países, como la. ONU, y además conocer las medidas de seguridad tomadas por el Titular para salvaguardar sus Datos.<br><br>\r\n        En caso de que tuviera lugar dicha transferencia de Datos, los Usuarios podrán obtener más información consultando las secciones relevantes del presente documento o solicitándola al Titular, a través de la información de contacto que aparece en la sección de contacto. </p>\r\n      <h3>Período de conservación</h3>\r\n      <p>Los Datos Personales serán tratados y conservados durante el tiempo necesario y para la finalidad por la que han sido recogidos.</p>\r\n      <p>Por lo tanto:</p>\r\n      <ul>\r\n        <li>Los Datos Personales recogidos para la formalización de un contrato entre el Titular y el Usuario deberán conservarse como tales hasta en tanto dicho contrato se haya formalizado por completo.</li>\r\n        <li>Los Datos Personales recogidos en legítimo interés del Titular deberán conservarse durante el tiempo necesario para cumplir con dicha finalidad. Los Usuarios pueden encontrar información específica relacionada con el interés legítimo del Titular consultando las secciones relevantes del presente documento o contactando con el Titular. </li>\r\n      </ul>\r\n      <p>El Titular podrá conservar los Datos Personales durante un periodo adicional cuando el Usuario preste su consentimiento a tal tratamiento, siempre que dicho consentimiento siga vigente. Además, el Titular estará obligado a conservar Datos Personales durante un periodo adicional siempre que se precise para el cumplimiento de una obligación legal o por orden que proceda de la autoridad.<br><br>\r\n        Una vez terminado el período de conservación, los Datos Personales deberán eliminarse. Por lo tanto, los derechos de acceso, modificación, rectificación y portabilidad de datos no podrán ejercerse una vez haya expirado dicho periodo.</p>\r\n    </div>\r\n\r\n\r\n\r\n    <div class=\"one_line_col\">\r\n      <h2 id=\"use_collected_data\">Finalidad del Tratamiento de los Datos recogidos</h2>\r\n      <p>\r\n        Los Datos relativos al Usuario son recogidos para permitir al Titular prestar su Servicio, cumplir sus obligaciones legales, responder a solicitudes de ejecución, proteger sus derechos e intereses (o los de sus Usuarios o terceros), detectar cualquier actividad maliciosa o fraudulenta, así como para las siguientes finalidades:\r\n        Registro y autenticación, Hosting e infrastructura de backend, Estadísticas, Protección contra SPAM, Visualizar contenidos de plataformas externas, Contactar con el Usuario y Gestión de contactos y envío de mensajes.\r\n      </p>\r\n\r\n      <p>Los Usuarios pueden encontrar información específica los Datos personales utilizados para cada finalidad en la sección “Información detallada del Tratamiento de los Datos Personales”.</p>\r\n    </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n    <div data-locale=\"es\"></div>\r\n\r\n\r\n    <div class=\"one_line_col\">\r\n      <h2 id=\"data_processing_detailed_info\">Información detallada del Tratamiento de los Datos Personales</h2>\r\n      <p>Los Datos Personales se recogen para las siguientes finalidades y utilizando los siguientes servicios:</p>\r\n      <ul class=\"for_boxes\">\r\n\r\n        <li>\r\n          <div class=\"box_primary box_10 expand expanded\">\r\n            <h3 class=\"expand-click w_icon_24 policyicon_purpose_8115667\">Contactar con el Usuario</h3>\r\n            <div class=\"expand-content\" style=\"display: block;\">\r\n\r\n\r\n\r\n              <h4>Lista de correo o newsletter (esta Aplicación)</h4>\r\n              <div class=\"wrap\">\r\n                <p>Al registrarse en la lista de correo o el newsletter, la dirección de correo electrónico del Usuario será incluida automáticamente en una lista de contactos a los que se les podrán remitir mensajes de correo electrónico con información comercial o promocional relativa a esta Aplicación. Su dirección de correo electrónico también podrá ser incluida en esta lista a raíz de registrarse en esta Aplicación o tras realizar una compra.</p>\r\n              </div>\r\n\r\n              <p>Datos Personales tratados: apellido(s); ciudad; código postal; Datos de uso; dirección de correo electrónico; dirección física; fecha de nacimiento; nombre; número de teléfono; país; razón social; sexo.</p>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n            </div>\r\n          </div>\r\n        </li>\r\n\r\n        <li>\r\n          <div class=\"box_primary box_10 expand expanded\">\r\n            <h3 class=\"expand-click w_icon_24 policyicon_purpose_8115658\">Estadísticas</h3>\r\n            <div class=\"expand-content\" style=\"\">\r\n              <p>Los servicios contenidos en esta sección permiten al Titular monitorizar y analizar el tráfico web y pueden ser utilizados para rastrear el comportamiento del Usuario.</p>\r\n\r\n\r\n              <h4>Google Analytics (Google Ireland Limited)</h4>\r\n              <div class=\"wrap\">\r\n                <p>Google Analytics es un servicio de análisis web prestado por Google Ireland Limited (“Google”). Google utiliza los Datos recogidos para rastrear y examinar el uso de esta Aplicación, para preparar informes de sus actividades y compartirlos con otros servicios de Google.<br>\r\n                  Google puede utilizar los Datos recogidos para contextualizar y personalizar los anuncios de su propia red de publicidad.</p>\r\n              </div>\r\n\r\n              <p>Datos Personales tratados: Datos de uso; Rastreador.</p>\r\n\r\n\r\n\r\n\r\n              <p>Lugar de tratamiento:\r\n                Irlanda\r\n                –\r\n                <a href=\"https://policies.google.com/privacy\" target=\"_blank\" rel=\"noopener noreferrer\">Política de privacidad</a> – <a href=\"https://tools.google.com/dlpage/gaoptout?hl=en\" onclick=\"javascript:return tryFunc('tryGaOptOut',{href:'https://tools.google.com/dlpage/gaoptout?hl=en'})\" target=\"_blank\">Opt Out</a>.\r\n              </p>\r\n\r\n\r\n\r\n\r\n\r\n\r\n              <h4>Google Analytics for Firebase (Google Ireland Limited)</h4>\r\n              <div class=\"wrap\">\r\n                <p>Google Analytics for Firebase o Firebase Analytics es un servicio de estadísticas prestado por Google Ireland Limited.<br>\r\n                  <strong>Para saber más sobre cómo usa Google los Datos puede consultar <a href=\"https://www.google.com/intl/es/policies/privacy/partners/\" target=\"_blank\" rel=\"noopener\">la Política de Partners de Google</a></strong>.</p>\r\n\r\n                <p>Firebase Analytics podrá compartir Datos con otras herramientas proporcionadas por Firebase, tales como Crash Reporting, Authentication, Remote Config o Notifications. Los Usuarios pueden revisar la presente política de privacidad para obtener una explicación detallada sobre las demás herramientas que emplea el Titular.</p>\r\n\r\n                <p>Esta Aplicación utiliza identificadores para dispositivos móviles y tecnologías similares a las cookies para hacer funcionar el servicio Firebase Analytics.</p>\r\n\r\n                <p>Los Usuarios podrán optar por no participar en determinadas funcionalidades para targeting de Firebase haciendo los correspondientes cambios en la configuración del dispositivo, como la configuración sobre publicidad del dispositivo para teléfonos móviles o siguiendo las instrucciones que aparecen en otras secciones de la presente Política de Privacidad relativas a Firebase, si las hubiera.</p>\r\n              </div>\r\n\r\n              <p>Datos Personales tratados: actualizaciones de la Aplicación; aperturas de la aplicación; cantidad de sesiones; cantidad de Usuarios; cantidad de veces que se abre la Aplicación; compras directas desde la Aplicación; Datos de uso; duración de la sesión; identificadores únicos de dispositivo para publicidad (ID de publicidad de Google o IDFA, por ejemplo); información del dispositivo; Rastreador; región geográfica; sistemas operativos.</p>\r\n\r\n\r\n\r\n\r\n              <p>Lugar de tratamiento:\r\n                Irlanda\r\n                –\r\n                <a href=\"https://policies.google.com/privacy\" target=\"_blank\" rel=\"noopener noreferrer\">Política de privacidad</a>.\r\n              </p>\r\n\r\n\r\n\r\n\r\n\r\n\r\n            </div>\r\n          </div>\r\n        </li>\r\n\r\n        <li>\r\n          <div class=\"box_primary box_10 expand expanded\">\r\n            <h3 class=\"expand-click w_icon_24 policyicon_purpose_8115671\">Gestión de contactos y envío de mensajes</h3>\r\n            <div class=\"expand-content\" style=\"\">\r\n              <p>Este tipo de servicios permiten gestionar una base de datos de direcciones de correo electrónico, números de teléfono u otra información de contacto para comunicarse con el Usuario.<br>\r\n                También es posible que estos servicios recojan datos relativos a la fecha y la hora en las que el Usuario visualizó el mensaje, así como sobre las interacciones del Usuario con dicho mensaje, tales  como clicar en enlaces insertados en el mensaje.</p>\r\n\r\n\r\n              <h4>Firebase Notifications (Google Ireland Limited)</h4>\r\n              <div class=\"wrap\">\r\n                <p>Firebase Notifications es un servicio de envío de mensajes prestado por Google Ireland Limited. Firebase Notifications puede integrarse con Firebase Analytics para dirigirse a audiencias seleccionadas en base a estadísticas y monitorizar los eventos de apertura y conversión.</p>\r\n              </div>\r\n\r\n              <p>Datos Personales tratados: distintas clases de Datos, según se especifica en la Política de Privacidad del servicio.</p>\r\n\r\n\r\n\r\n\r\n              <p>Lugar de tratamiento:\r\n                Irlanda\r\n                –\r\n                <a href=\"https://policies.google.com/privacy\" target=\"_blank\" rel=\"noopener noreferrer\">Política de privacidad</a>.\r\n              </p>\r\n\r\n\r\n\r\n\r\n\r\n\r\n            </div>\r\n          </div>\r\n        </li>\r\n\r\n        <li>\r\n          <div class=\"box_primary box_10 expand expanded\">\r\n            <h3 class=\"expand-click w_icon_24 policyicon_purpose_8115640\">Hosting e infrastructura de backend</h3>\r\n            <div class=\"expand-content\" style=\"\">\r\n              <p>Este tipo de servicios tienen por finalidad el alojamiento de Datos y archivos para permitir que esta Aplicación funcione y sea distribuida, así como para proporcionar una infrastructura lista para operar que permita poner en marcha diversas funcionalidades o partes de esta Aplicación.</p>\r\n\r\n              <p>Algunos servicios de los enumerados más adelante, en su caso, pueden funcionar mediante servidores geográficamente distribuidos, lo que dificulta la determinación de la localización exacta en la que se almacenan los Datos personales.</p>\r\n\r\n\r\n              <h4>Firebase Cloud Firestore (Google Ireland Limited)</h4>\r\n              <div class=\"wrap\">\r\n                <p>Firebase Cloud Firestore es un servicio de hosting y backend prestado por Google Ireland Limited.</p>\r\n              </div>\r\n\r\n              <p>Datos Personales tratados: Datos de uso; distintas clases de Datos, según se especifica en la Política de Privacidad del servicio.</p>\r\n\r\n\r\n\r\n\r\n              <p>Lugar de tratamiento:\r\n                Irlanda\r\n                –\r\n                <a href=\"https://policies.google.com/privacy\" target=\"_blank\" rel=\"noopener noreferrer\">Política de privacidad</a>.\r\n              </p>\r\n\r\n\r\n\r\n\r\n\r\n\r\n            </div>\r\n          </div>\r\n        </li>\r\n\r\n        <li>\r\n          <div class=\"box_primary box_10 expand expanded\">\r\n            <h3 class=\"expand-click w_icon_24 policyicon_purpose_8115663\">Protección contra SPAM</h3>\r\n            <div class=\"expand-content\" style=\"\">\r\n              <p>Este tipo de servicios analizan el tráfico de esta Aplicación, que potencialmente contiene  Datos Personales del Usuario, con la finalidad de filtrar el tráfico, mensajes y contenido que se reconoce como SPAM.</p>\r\n\r\n\r\n              <h4>Google reCAPTCHA (Google Ireland Limited)</h4>\r\n              <div class=\"wrap\">\r\n                <p>Google reCAPTCHA es un servicio de protección contra SPAM prestado por Google Ireland Limited.<br>\r\n                  El uso de reCAPTCHA está sujeto a la <a href=\"https://www.google.com/intl/es/policies/privacy/\" target=\"_blank\" rel=\"noopener\">política de privacidad</a> y a los <a href=\"https://www.google.com/intl/es/policies/terms/\" target=\"_blank\" rel=\"noopener\">términos de uso</a> de Google.</p>\r\n              </div>\r\n\r\n              <p>Datos Personales tratados: Datos de uso; Rastreador.</p>\r\n\r\n\r\n\r\n\r\n              <p>Lugar de tratamiento:\r\n                Irlanda\r\n                –\r\n                <a href=\"https://policies.google.com/privacy\" target=\"_blank\" rel=\"noopener noreferrer\">Política de privacidad</a>.\r\n              </p>\r\n\r\n\r\n\r\n\r\n\r\n\r\n            </div>\r\n          </div>\r\n        </li>\r\n\r\n        <li>\r\n          <div class=\"box_primary box_10 expand expanded\">\r\n            <h3 class=\"expand-click w_icon_24 policyicon_purpose_8115639\">Registro y autenticación</h3>\r\n            <div class=\"expand-content\" style=\"\">\r\n              <p>Al registrarse o autenticarse, el Usuario permite que esta Aplicación le identifique y le dé acceso a los servicios dedicados.<br>\r\n                Dependiendo de lo indicado a continuación, los servicios de registro y autenticación podrán ser prestados por la asistencia de terceros. En tal caso, esta Aplicación podrá acceder a algunos Datos almacenados por el servicio de terceros utilizado para el registro o autenticación. <br>\r\n                Es posible que algunos de los servicios enumerados a continuación también recojan Datos personales para fines de segmentación y elaboración de perfiles; para obtener más información, le rogamos que consulte la descripción de cada servicio.</p>\r\n\r\n\r\n              <h4>Firebase Authentication (Google Ireland Limited)</h4>\r\n              <div class=\"wrap\">\r\n                <p>Firebase Authentication es un servicio de registro y autenticación prestado por Google Ireland Limited. Para simplificar el proceso de registro y autenticación, Firebase Authentication puede usar proveedores de identidad de terceros y guardar la información en su plataforma.</p>\r\n              </div>\r\n\r\n              <p>Datos Personales tratados: apellido(s); dirección de correo electrónico; foto de perfil; nombre; password; username.</p>\r\n\r\n\r\n\r\n\r\n              <p>Lugar de tratamiento:\r\n                Irlanda\r\n                –\r\n                <a href=\"https://policies.google.com/privacy\" target=\"_blank\" rel=\"noopener noreferrer\">Política de privacidad</a>.\r\n              </p>\r\n\r\n\r\n\r\n\r\n\r\n\r\n            </div>\r\n          </div>\r\n        </li>\r\n\r\n        <li>\r\n          <div class=\"box_primary box_10 expand expanded\">\r\n            <h3 class=\"expand-click w_icon_24 policyicon_purpose_8115664\">Visualizar contenidos de plataformas externas</h3>\r\n            <div class=\"expand-content\" style=\"\">\r\n              <p>Este tipo de servicios permiten visualizar contenidos alojados en plataformas externas directamente desde las páginas de esta Aplicación e interactuar con estos.<br>\r\n                Este tipo de servicios puede recopilar datos de tráfico web para las páginas en las que estén instalados incluso en caso de que el Usuario no los utilice.</p>\r\n\r\n\r\n              <h4>Google Fonts (Google Ireland Limited)</h4>\r\n              <div class=\"wrap\">\r\n                <p>Google Fonts es un servicio de visualización de familias tipográficas prestado por Google Ireland Limited que permite a esta Aplicación incorporar tales contenidos en sus páginas.</p>\r\n              </div>\r\n\r\n              <p>Datos Personales tratados: Datos de uso; distintas clases de Datos, según se especifica en la Política de Privacidad del servicio.</p>\r\n\r\n\r\n\r\n\r\n              <p>Lugar de tratamiento:\r\n                Irlanda\r\n                –\r\n                <a href=\"https://policies.google.com/privacy\" target=\"_blank\" rel=\"noopener noreferrer\">Política de privacidad</a>.\r\n              </p>\r\n\r\n\r\n\r\n\r\n\r\n\r\n            </div>\r\n          </div>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n\r\n\r\n\r\n\r\n    <div data-locale=\"es\"></div>\r\n\r\n\r\n\r\n\r\n    <div class=\"one_line_col\">\r\n      <h2 id=\"rights_subjects\">Los derechos de los Usuarios</h2>\r\n      <p>Los Usuarios podrán ejercer ciertos derechos con respecto al tratamiento de Datos por parte del Titular.</p>\r\n      <p>Los Usuarios con estándares de protección más elevados podrán ejercer cualquiera de los derechos detallados a continuación. En todos los demás supuestos, los Usuarios podrán preguntar al Titular para averiguar qué derechos les son de aplicación.</p>\r\n      <p>Especialmente, los Usuarios tienen derecho a hacer lo siguiente:</p>\r\n\r\n      <ul>\r\n        <li><strong>Retirar su consentimiento en cualquier momento.</strong> Los Usuarios tienen derecho a retirar su consentimiento cuando lo hubieran concedido con anterioridad para el tratamiento de sus Datos Personales.</li>\r\n        <li><strong>Objeción al tratamiento de sus Datos.</strong> Los Usuarios tienen derecho a oponerse al tratamiento de sus Datos si dicho tratamiento se lleva a cabo con arreglo a una base jurídica distinta del consentimiento. Para más información pueden dirigirse a la sección correspondiente más adelante.</li>\r\n        <li><strong>Acceso a sus Datos.</strong> Los Usuarios tienen derecho a conocer si sus Datos serán tratados por el Titular, a obtener información sobre ciertos aspectos del tratamiento, además de obtener una copia de los Datos objeto del tratamiento.</li>\r\n        <li><strong>Verificar y solicitar la modificación.</strong> Los Usuarios tienen derecho a verificar la exactitud de sus Datos y solicitar que los mismos se actualicen o corrijan.</li>\r\n        <li><strong>Restringir el tratamiento de sus Datos.</strong> Los Usuarios tienen derecho, en ciertos supuestos, a restringir el tratamiento de sus Datos. En ese supuesto, el Titular procesará sus Datos con el único propósito de almacenarlos.</li>\r\n        <li><strong>Borrar o eliminar los Datos Personales.</strong> Los Usuarios tienen derecho, en ciertos supuestos, a obtener la eliminación de sus Datos por parte del Titular.</li>\r\n        <li><strong>Recibir sus Datos y transferirlos a otro responsable.</strong> Los Usuarios tienen derecho a recibir sus Datos en un formato estándar, estructurado, mecánicamente legible y, si fuera técnicamente posible, a que se dé traslado de los mismos a otro responsable sin ningún impedimento. Esta provisión será de aplicación siempre que los Datos se hayan tratado a través de medios automatizados y que el tratamiento se base en el consentimiento del Usuario, en un contrato del que el Usuario forme parte o que aparezca en las obligaciones precontractuales del mismo.</li>\r\n        <li><strong>Poner una reclamación.</strong> Los Usuarios tienen derecho a poner una reclamación ante la autoridad competente en materia de protección de datos de carácter personal.</li>\r\n      </ul>\r\n\r\n      <h3>Detalles sobre el derecho de oposición al tratamiento</h3>\r\n      <p>Cuando el tratamiento de los Datos Personales sea de interés público, en el ejercicio de competencias oficiales otorgadas al Titular o con motivo de un interés legítimo del Titular, los Usuarios podrán oponerse a dicho tratamiento explicando un motivo con relación a su situación particular para justificar su objeción.</p>\r\n      <p>Los Usuarios deben saber que, sin embargo, en caso de que sus Datos Personales sean tratados con fines comerciales, pueden oponerse en cualquier momento a tal tratamiento sin necesidad de justificación. Para saber si los Datos Personales de los Usuarios están siendo tratados por parte del Titular para fines comerciales, éstos deberán consultar las secciones relevantes del presente documento.</p>\r\n\r\n      <h3>Cómo ejercer estos derechos</h3>\r\n      <p>Cualquier solicitud para ejercer los derechos del Usuario puede dirigirse al Titular a través de los datos de contacto facilitados en el presente documento. Dichas solicitudes serán tramitadas por el Titular sin coste alguno tan pronto como le sea posible y siempre dentro del plazo de un mes.</p>\r\n    </div>\r\n\r\n\r\n    <div class=\"one_line_col\">\r\n      <h2>Aplicación de estándares de protección más elevados</h2>\r\n      <p>Mientras que todos los Usuarios cuentan con los estándares de protección básicos, algunos Usuarios cuentan con estándares de protección más elevados.</p>\r\n      <p>Dichos estándares de protección más elevados siempre se aplicarán cuando el tratamiento:</p>\r\n\r\n      <ul>\r\n        <li>lo realice un Titular residente en la UE;</li>\r\n        <li>sea relativo a los Datos Personales de Usuarios que se encuentren en la UE y además sea relativo a publicitar bienes y servicios, de pago o gratuitos, a dichos Usuarios.</li>\r\n        <li>sea relativo a los Datos Personales de Usuarios que se encuentren en la UE y además permitan al Titular monitorizar el comportamiento de dichos Usuarios en el territorio de la UE.</li>\r\n      </ul>\r\n    </div>\r\n\r\n\r\n    <div class=\"one_line_col\">\r\n      <h2 id=\"cookie_policy\">Política de Cookies</h2>\r\n      <p>Esta Aplicación utiliza Rastreadores. Para obtener más información, el Usuario puede consultar la <a href=\"//www.iubenda.com/privacy-policy/gdpr/94850531/cookie-policy?an=no\" title=\"Política de Cookies\" class=\"show_comp_link iframe-preserve an-preserve\">Política de Cookies</a>.</p>\r\n    </div>\r\n\r\n\r\n    <div class=\"one_line_col\">\r\n      <h2 id=\"further_data_processing_info\">Información adicional sobre la recogida de Datos y su tratamiento</h2>\r\n      <h3>Defensa jurídica</h3>\r\n      <p>Los Datos Personales del Usuario podrán ser utilizados para la defensa jurídica del Titular ante un tribunal o en las fases judiciales previas a un posible pleito derivado del uso inapropiado de esta Aplicación o de los Servicios relacionados.<br>\r\n        El Usuario declara conocer que el Titular puede ser requerido por las autoridades públicas a fin de revelar Datos Personales.</p>\r\n      <h3>Información adicional acerca de los Datos Personales del Usuario</h3>\r\n      <p>Además de las informaciones contenidas en esta política de privacidad, esta Aplicación podrá proporcionar al Usuario información adicional y contextual relativa a Servicios específicos o a la recogida y tratamiento de los Datos Personales.</p>\r\n      <h3>Log del sistema y mantenimiento</h3>\r\n      <p>Por motivos relativos al funcionamiento y mantenimiento,  esta Aplicación y cualquier otro servicio, proporcionado por terceros, que se utilice, podrá recoger un registro del sistema; es decir, archivos que registren la interacción con esta Aplicación  y que puedan contener Datos Personales, tales como la dirección IP del Usuario.</p>\r\n      <h3>Información no contenida en esta política de privacidad</h3>\r\n      <p>Se podrá solicitar en cualquier momento información adicional sobre la recogida y el tratamiento de los Datos Personales al Titular. La información de contacto se indica al inicio del presente documento.</p>\r\n\r\n      <h3>Cómo se procesan las solicitudes “Do Not Track”</h3>\r\n      <p>Esta Aplicación no permite solicitudes “Do Not Track”.<br>Para determinar si cualquiera de los servicios de terceros que utiliza acepta solicitudes “Do Not Track”, por favor lea sus políticas de privacidad.</p>\r\n\r\n      <h3>Modificación de la presente política de privacidad</h3>\r\n      <p>El Titular se reserva el derecho de modificar esta política de privacidad en cualquier momento, notificándolo a los Usuarios a través de esta página y, a ser posible, a través de esta Aplicación y/o de ser técnica y legalmente posible notificando directamente a los Usuarios, en caso de que el Titular cuente con la información de contacto necesaria a tal fin. Se recomienda encarecidamente que revisen esta página con frecuencia, tomando como referencia la fecha de la última actualización indicada al final de la página.<br><br>En el caso de que los cambios afectasen a las actividades de tratamiento realizadas en base al consentimiento del Usuario, el Titular deberá obtener, si fuera necesario, el nuevo consentimiento del Usuario.</p>\r\n\r\n    </div>\r\n\r\n\r\n\r\n\r\n    <div class=\"one_line_col\">\r\n      <div class=\"box_primary box_10 definitions expand expanded\">\r\n        <h3 id=\"definitions_and_legal_references\" class=\"expand-click w_icon_24 icon_ribbon\">\r\n          Definiciones y referencias legales\r\n        </h3>\r\n        <div class=\"expand-content\" style=\"\">\r\n          <h4>Datos Personales (o Datos)</h4>\r\n          <p>Constituye un dato personal cualquier información que, directa, indirectamente o en relación con otra información – incluyendo un número de identificación personal – permita identificar una persona física.</p>\r\n\r\n          <h4>Datos de Uso</h4>\r\n          <p>Las informaciones recogidas de forma automática por esta Aplicación (o por servicios de terceros utilizados por esta Aplicación), podrán incluir: las direcciones IP o nombres de dominio de los ordenadores utilizados por el Usuario que se conecte a esta Aplicación, las direcciones URI (Uniform Resource Identifier), la hora de la solicitud, el método utilizado para realizar la solicitud al servidor, las dimensiones del archivo obtenido en respuesta, el código numérico indicando el estado de la respuesta del servidor (resultado satisfactorio, error, etc.), el país de origen, las características del navegador y del sistema operativo utilizados por el visitante, las diversas coordenadas temporales de la visita (por ejemplo, el tiempo de permanencia en cada una de las páginas) y los detalles relativos al itinerario seguido dentro de la Aplicación, con especial referencia a la secuencia de páginas consultadas, a los parámetros relativos al sistema operativo y al entorno informático del Usuario.</p>\r\n\r\n          <h4>Usuario</h4>\r\n          <p>El individuo que utilice esta Aplicación, quien, a menos que se indique lo contrario deberá coincidir con el Titular de los Datos.</p>\r\n\r\n          <h4>Titular de los Datos</h4>\r\n          <p>La persona física a la que se refieren los Datos Personales.</p>\r\n\r\n          <h4>Encargado del Tratamiento (o Supervisor de Datos)</h4>\r\n          <p>La persona física o jurídica, administración pública, agencia o cualquier otra institución, que procese los Datos Personales en nombre del Responsable del Tratamiento, descrita en la presente política de privacidad.</p>\r\n\r\n          <h4>Responsable del Tratamiento (o Titular)</h4>\r\n          <p>La persona física o jurídica, administración pública, agencia o cualquier otra institución, que actuando en solitario o conjuntamente con otras, determine las finalidades y las medidas del tratamiento de los Datos Personales, incluyendo las medidas de seguridad relativas al funcionamiento y al uso de esta Aplicación. A menos que se especifique lo contrario, el Responsable del Tratamiento es el Titular de esta Aplicación.</p>\r\n\r\n          <h4>Esta Aplicaci&amp;oacute;n</h4>\r\n          <p>El medio a través del cual se han recogido y tratado los Datos Personales del Usuario.</p>\r\n\r\n          <h4>Servicio</h4>\r\n          <p>El servicio proporcionado por esta Aplicación, tal y como se describe en las definiciones y referencias legales (en caso de estar disponibles) y en esta página o aplicación.</p>\r\n\r\n          <h4>Unión Europea (o UE)</h4>\r\n          <p>A menos que se indique lo contrario, todas las referencias hechas a la Unión Europea en el presente documento incluyen todos los actuales Estados miembros de la Unión Europea y del Espacio Económico Europeo.</p>\r\n\r\n          <h4>Cookie</h4>\r\n          <p>Las Cookies son Rastreadores que consisten en pequeñas cantidades de datos almacenados en el navegador del Usuario.</p>\r\n\r\n          <h4>Rastreador</h4>\r\n          <p>Rastreador designa cualquier tecnología - p.ej. Cookies, identificadores únicos, balizas web, scripts incrustados, etiquetas de entidad y creación de huella digital - que permite rastrear a los Usuarios, por ejemplo, accediendo a información o almacenándola en el dispositivo del Usuario.</p>\r\n          <hr>\r\n          <h4>Información legal</h4>\r\n          <p>Esta política de privacidad se ha redactado en base a las provisiones de múltiples legislaciones, incluyendo los Arts. 13 y14 del Reglamento (UE) 2016/679 (Reglamento general de protección de datos).</p>\r\n          <p>Esta política de privacidad se refiere sólo a esta Aplicación, a menos que se indique lo contrario en el presente documento.</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n\r\n    <div class=\"iub_footer\">\r\n\r\n      <p>\r\n        Última revisión: 17 marzo 2021\r\n      </p>\r\n\r\n    </div> <!-- /footer -->\r\n\r\n    <script type=\"text/javascript\">\r\n      window.tryFunc = function(fName,args){\r\n        if(typeof window[fName]==='function'){\r\n          window[fName](args);\r\n        }else{\r\n          if(args){\r\n            /* default behaviour is link */\r\n            if(args.href){\r\n              /* default link is target='_blank' */\r\n              window.open(args.href)\r\n            }\r\n          }\r\n        }\r\n        return false; /* inhibit default behaviour */\r\n      }\r\n    </script>\r\n\r\n\r\n  </div>\r\n</ion-content>\r\n");

/***/ }),

/***/ "bB5R":
/*!*****************************************************************!*\
  !*** ./src/components/register-user/register-user.component.ts ***!
  \*****************************************************************/
/*! exports provided: RegisterUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterUserComponent", function() { return RegisterUserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_register_user_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./register-user.component.html */ "01kN");
/* harmony import */ var _register_user_component_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register-user.component.sass */ "uy1C");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var _models_user_user_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../models/user/user.model */ "aUIA");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @capacitor/core */ "gcOT");
/* harmony import */ var _models_user_user_roles_enum__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../models/user/user-roles.enum */ "zOgT");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/fire/storage */ "Vaw3");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _views_terminos_terminos_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../views/terminos/terminos.component */ "UMto");
/* harmony import */ var _views_proteccion_proteccion_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../views/proteccion/proteccion.component */ "cDKL");















let RegisterUserComponent = class RegisterUserComponent {
    constructor(formBuilder, firestore, router, fireauth, storage, modalCtrl) {
        this.formBuilder = formBuilder;
        this.firestore = firestore;
        this.router = router;
        this.fireauth = fireauth;
        this.storage = storage;
        this.modalCtrl = modalCtrl;
        this.userProfileCollection = firestore.collection('profiles');
    }
    presentModal(modalToDisplay) {
        if (modalToDisplay == 0) {
            this.modalCtrl.create({
                component: _views_terminos_terminos_component__WEBPACK_IMPORTED_MODULE_13__["TerminosView"]
            }).then(value => {
                value.present();
            });
        }
        else {
            this.modalCtrl.create({
                component: _views_proteccion_proteccion_component__WEBPACK_IMPORTED_MODULE_14__["ProteccionView"]
            }).then(value => {
                value.present();
            });
        }
    }
    ngOnInit() {
        this.registrationForm = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email]],
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            phoneNumber: ['', []],
            picture: ['',],
            location: ['',],
            isFarmer: [false, []],
            newsSub: [false, []],
        });
    }
    registerUser() {
        if (this.registrationForm.valid) {
            const userToCreate = new _models_user_user_model__WEBPACK_IMPORTED_MODULE_8__["User"]();
            userToCreate.name = this.registrationForm.value.name;
            userToCreate.email = this.registrationForm.value.email;
            userToCreate.location = this.registrationForm.value.location;
            userToCreate.phoneNumber = this.registrationForm.value.phoneNumber;
            userToCreate.role = this.registrationForm.value.isFarmer ? _models_user_user_roles_enum__WEBPACK_IMPORTED_MODULE_10__["UserRoles"].PRODUCER : _models_user_user_roles_enum__WEBPACK_IMPORTED_MODULE_10__["UserRoles"].USER;
            userToCreate.newsSub = this.registrationForm.value.newsSub;
            this.fireauth.createUserWithEmailAndPassword(userToCreate.email, this.registrationForm.value.password)
                .then((user) => {
                if (this.profilePicture) {
                    this.uploadPictureToProfile(this.profilePicture, user.user.uid).then(a => {
                        userToCreate.picture = this.registrationForm.value.picture;
                        user.user.updateProfile({ photoURL: userToCreate.picture });
                        this.userProfileCollection.doc(user.user.uid)
                            .set(userToCreate.convertToDTO())
                            .catch(error => {
                            console.log('Something went wrong with added user to firestore: ', error);
                        }).then(value => this.changeView(user.user.uid));
                    });
                }
                else {
                    userToCreate.picture = '/userProfilePics/default/favicon.png';
                    this.userProfileCollection.doc(user.user.uid)
                        .set(userToCreate.convertToDTO())
                        .catch(error => {
                        console.log('Something went wrong with added user to firestore: ', error);
                    }).then(value => this.changeView(user.user.uid));
                }
            });
        }
        else {
            this.registrationForm.markAllAsTouched();
        }
    }
    changeView(uid) {
        this.router.navigate(['profile']);
    }
    uploadPictureToProfile(picture, userID) {
        const file = picture;
        const filePath = '/userProfilePics/' + userID + '/' + 'myPicture.png';
        this.registrationForm.value.picture = filePath;
        const ref = this.storage.ref(filePath);
        return ref.putString(file, 'base64');
    }
    takePicture() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield _capacitor_core__WEBPACK_IMPORTED_MODULE_9__["Camera"].getPhoto({
                quality: 50,
                allowEditing: true,
                resultType: _capacitor_core__WEBPACK_IMPORTED_MODULE_9__["CameraResultType"].Base64,
                webUseInput: true,
                source: _capacitor_core__WEBPACK_IMPORTED_MODULE_9__["CameraSource"].Prompt
            }).then(value => {
                this.registrationForm.value.picture = 'Foto cargada';
                this.profilePicture = value.base64String;
            });
        });
    }
};
RegisterUserComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__["AngularFireAuth"] },
    { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_11__["AngularFireStorage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__["ModalController"] }
];
RegisterUserComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-register-user',
        template: _raw_loader_register_user_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_register_user_component_sass__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], RegisterUserComponent);



/***/ }),

/***/ "burr":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/views/cart/cart.view.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\r\n  <app-cart-item *ngFor=\"let product of cart\" [product]=\"product\" (productEvent)=\"cartItemEvent($event)\"></app-cart-item>\r\n  <ion-button *ngIf=\"cart.length > 0\" (click)=\"checkout()\" style=\"font-family: Montserrat\">\r\n    Comprar\r\n  </ion-button>\r\n  <ion-text *ngIf=\"cart.length <= 0\" class=\"ion-margin\">\r\n    Tu carrito esta vacio, añade un producto para comprar.\r\n  </ion-text>\r\n</ion-content>\r\n");

/***/ }),

/***/ "cDKL":
/*!******************************************************!*\
  !*** ./src/views/proteccion/proteccion.component.ts ***!
  \******************************************************/
/*! exports provided: ProteccionView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProteccionView", function() { return ProteccionView; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_proteccion_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./proteccion.component.html */ "aXdB");
/* harmony import */ var _proteccion_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./proteccion.component.scss */ "/DIm");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");





let ProteccionView = class ProteccionView {
    constructor(modalCtrl) {
        this.modalCtrl = modalCtrl;
    }
    ngOnInit() { }
    dismiss() {
        // using the injected ModalController this page
        // can "dismiss" itself and optionally pass back data
        this.modalCtrl.dismiss({
            'dismissed': true
        });
    }
};
ProteccionView.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] }
];
ProteccionView = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-proteccion',
        template: _raw_loader_proteccion_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_proteccion_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ProteccionView);



/***/ }),

/***/ "cn8i":
/*!*************************************************************!*\
  !*** ./src/components/order-item/order-item.component.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvcmRlci1pdGVtLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "cxbk":
/*!**********************************************!*\
  !*** ./src/environments/environment.prod.ts ***!
  \**********************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
const environment = {
    production: true,
    firebaseConfig: {
        apiKey: 'AIzaSyCyBcfhNv3xmNGkGkFLtNGC25N7n3p7KwY',
        authDomain: 'imposoft-tfg-dev.firebaseapp.com',
        projectId: 'imposoft-tfg-dev',
        storageBucket: 'imposoft-tfg-dev.appspot.com',
        messagingSenderId: '931446286253',
        appId: '1:931446286253:web:fd6a9507fc5e24221e2324',
        measurementId: 'G-XPRZ071ECM'
    }
};


/***/ }),

/***/ "dDNQ":
/*!*********************************!*\
  !*** ./src/models/cart/cart.ts ***!
  \*********************************/
/*! exports provided: Cart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cart", function() { return Cart; });
class Cart {
    constructor() {
        this.ordersList = [];
    }
    getAllIds() {
        return [];
    }
}


/***/ }),

/***/ "dOmc":
/*!*******************************************************!*\
  !*** ./src/views/profile-list/profile-list.view.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9maWxlLWxpc3Qudmlldy5zY3NzIn0= */");

/***/ }),

/***/ "eguZ":
/*!****************************************************!*\
  !*** ./src/views/terminos/terminos.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0ZXJtaW5vcy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "gv8C":
/*!***************************************************!*\
  !*** ./src/views/order-list/order-list.view.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvcmRlci1saXN0LnZpZXcuc2NzcyJ9 */");

/***/ }),

/***/ "jX7l":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/views/product/product.view.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content class=\"ion-padding\">\r\n  <ion-grid>\r\n    <ion-row class=\"ion-align-items-end ion-justify-content-center\">\r\n      <ion-col size=\"6\">\r\n        <ion-img class=\"profile-photo\" [src]=\"this.product.picture\"></ion-img>\r\n      </ion-col>\r\n      <ion-col size=\"12\">\r\n        <ion-text class=\"ion-padding\">\r\n          <h2 class=\"ion-no-margin\" style=\"font-family: Montserrat\">\r\n            {{this.product.name}}\r\n          </h2>\r\n          <h3>\r\n            {{this.product.price | currency:'EUR'}} / {{unitsList[product.unit]}}\r\n          </h3>\r\n          <h5>\r\n            {{this.product.description}}\r\n          </h5>\r\n          <ion-button type=\"button\" *ngIf=\"isOwner\" [routerLink]=\"'/productForm/' + product.id\" expand=\"block\">\r\n            Modificar\r\n          </ion-button>\r\n        </ion-text>\r\n      </ion-col>\r\n    </ion-row>\r\n    <div *ngIf=\"!isOwner\" style=\"text-align: center\">\r\n      <ion-grid>\r\n        <ion-row class=\"ion-justify-content-center\">\r\n          <ion-button type=\"button\" class=\"roundButton\" (click)=\"productOrder.reduce()\">-</ion-button>\r\n          <ion-col size=\"3\">\r\n            <ion-input type=\"number\" readonly=\"true\" [value]=\"productOrder.productAmount\" class=\"ion-\" [min]=\"0\"></ion-input>\r\n          </ion-col>\r\n          <ion-button type=\"button\" class=\"roundButton\" (click)=\"productOrder.add()\">+</ion-button>\r\n        </ion-row>\r\n      </ion-grid>\r\n\r\n      <ion-button type=\"button\" [color]=\"'success'\" (click)=\"addToCart()\" style=\"font-family: Montserrat\">\r\n        Añadir a la cesta - {{productOrder.productAmount * productOrder.priceByEach | currency:'EUR'}}\r\n      </ion-button>\r\n    </div>\r\n    <div>\r\n      La fecha limite de pedidos es: {{productOwner.pickupDate | date}}\r\n    </div>\r\n  </ion-grid>\r\n</ion-content>\r\n");

/***/ }),

/***/ "kLfG":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ion-action-sheet.entry.js": [
		"dUtr",
		"common",
		0
	],
	"./ion-alert.entry.js": [
		"Q8AI",
		"common",
		1
	],
	"./ion-app_8.entry.js": [
		"hgI1",
		"common",
		2
	],
	"./ion-avatar_3.entry.js": [
		"CfoV",
		"common",
		3
	],
	"./ion-back-button.entry.js": [
		"Nt02",
		"common",
		4
	],
	"./ion-backdrop.entry.js": [
		"Q2Bp",
		5
	],
	"./ion-button_2.entry.js": [
		"0Pbj",
		"common",
		6
	],
	"./ion-card_5.entry.js": [
		"ydQj",
		"common",
		7
	],
	"./ion-checkbox.entry.js": [
		"4fMi",
		"common",
		8
	],
	"./ion-chip.entry.js": [
		"czK9",
		"common",
		9
	],
	"./ion-col_3.entry.js": [
		"/CAe",
		10
	],
	"./ion-datetime_3.entry.js": [
		"WgF3",
		"common",
		11
	],
	"./ion-fab_3.entry.js": [
		"uQcF",
		"common",
		12
	],
	"./ion-img.entry.js": [
		"wHD8",
		13
	],
	"./ion-infinite-scroll_2.entry.js": [
		"2lz6",
		14
	],
	"./ion-input.entry.js": [
		"ercB",
		"common",
		15
	],
	"./ion-item-option_3.entry.js": [
		"MGMP",
		"common",
		16
	],
	"./ion-item_8.entry.js": [
		"9bur",
		"common",
		17
	],
	"./ion-loading.entry.js": [
		"cABk",
		"common",
		18
	],
	"./ion-menu_3.entry.js": [
		"kyFE",
		"common",
		19
	],
	"./ion-modal.entry.js": [
		"TvZU",
		"common",
		20
	],
	"./ion-nav_2.entry.js": [
		"vnES",
		"common",
		21
	],
	"./ion-popover.entry.js": [
		"qCuA",
		"common",
		22
	],
	"./ion-progress-bar.entry.js": [
		"0tOe",
		"common",
		23
	],
	"./ion-radio_2.entry.js": [
		"h11V",
		"common",
		24
	],
	"./ion-range.entry.js": [
		"XGij",
		"common",
		25
	],
	"./ion-refresher_2.entry.js": [
		"nYbb",
		"common",
		26
	],
	"./ion-reorder_2.entry.js": [
		"smMY",
		"common",
		27
	],
	"./ion-ripple-effect.entry.js": [
		"STjf",
		28
	],
	"./ion-route_4.entry.js": [
		"k5eQ",
		"common",
		29
	],
	"./ion-searchbar.entry.js": [
		"OR5t",
		"common",
		30
	],
	"./ion-segment_2.entry.js": [
		"fSgp",
		"common",
		31
	],
	"./ion-select_3.entry.js": [
		"lfGF",
		"common",
		32
	],
	"./ion-slide_2.entry.js": [
		"5xYT",
		33
	],
	"./ion-spinner.entry.js": [
		"nI0H",
		"common",
		34
	],
	"./ion-split-pane.entry.js": [
		"NAQR",
		35
	],
	"./ion-tab-bar_2.entry.js": [
		"knkW",
		"common",
		36
	],
	"./ion-tab_2.entry.js": [
		"TpdJ",
		"common",
		37
	],
	"./ion-text.entry.js": [
		"ISmu",
		"common",
		38
	],
	"./ion-textarea.entry.js": [
		"U7LX",
		"common",
		39
	],
	"./ion-toast.entry.js": [
		"L3sA",
		"common",
		40
	],
	"./ion-toggle.entry.js": [
		"IUOf",
		"common",
		41
	],
	"./ion-virtual-scroll.entry.js": [
		"8Mb5",
		42
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "kLfG";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "m4/V":
/*!*****************************************!*\
  !*** ./src/pipes/enum-to-array.pipe.ts ***!
  \*****************************************/
/*! exports provided: EnumToArrayPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnumToArrayPipe", function() { return EnumToArrayPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


let EnumToArrayPipe = class EnumToArrayPipe {
    transform(data) {
        const keys = Object.keys(data);
        return keys;
    }
};
EnumToArrayPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'enumToArray'
    })
], EnumToArrayPipe);



/***/ }),

/***/ "mhRT":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/components/order-item/order-item.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-card>\r\n  <ion-card-header>\r\n    <ion-card-title *ngIf=\"isFarmer\" style=\"font-family: Montserrat\">\r\n      Pedido de: {{orderUser.name}}\r\n    </ion-card-title>\r\n    <ion-card-subtitle>\r\n      Fecha: {{order.creationDate.seconds * 1000 | date:'yyyy/MM/dd h:mm:ss a'}}\r\n    </ion-card-subtitle>\r\n  </ion-card-header>\r\n  <ion-card-content style=\"padding-bottom: 0px !important;\">\r\n    <ion-label>\r\n      Productos pedidos:\r\n    </ion-label>\r\n    <ion-list>\r\n      <ion-item *ngFor=\"let product of order.orderedItems\"> {{product?.product?.name}} x {{product.productAmount}} </ion-item>\r\n      <!-- <div *ngFor=\"let product of order.orderedItems\"> {{product.product.name}}</div>-->\r\n    </ion-list>\r\n  </ion-card-content>\r\n  <ion-row>\r\n    <ion-col class=\"ion-padding-bottom\">\r\n      <div>Precio final: {{finalPrice | currency:'EUR'}}</div>\r\n\r\n      <div *ngIf=\"order.status == 'Preparado'\">✔️Pedido preparado | Recogida el 25/03 a partir de las en el mercado de la UPV?</div>\r\n      <div *ngIf=\"order.status == 'Cancelado'\">❌️Pedido cancelado</div>\r\n      <div *ngIf=\"order.status == 'Entregado'\">📦 Pedido entregado</div>\r\n      <!-- Farmer Options -->\r\n      <div *ngIf=\"isFarmer\">\r\n        <ion-button *ngIf=\"order.status !== 'Preparado' && order.status !== 'Cancelado' && order.status !== 'Entregado'\" (click)=\"prepareOrder()\">Marcar como preparado</ion-button>\r\n        <ion-button *ngIf=\"order.status == 'Preparado'\" (click)=\"deliveredOrder()\">Marcar como entregado</ion-button>\r\n        <ion-button *ngIf=\"order.status !== 'Cancelado' && order.status !== 'Entregado'\" (click)=\"cancelOrder()\">Cancelar</ion-button>\r\n      </div>\r\n      <!-- User Options -->\r\n      <div *ngIf=\"!isFarmer\">\r\n        <ion-button *ngIf=\"order.status !== 'Cancelado' && order.status !=='Preparado' && order.status !== 'Entregado'\" (click)=\"cancelOrder()\">Cancelar</ion-button>\r\n      </div>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-card>\r\n");

/***/ }),

/***/ "oO95":
/*!*************************************************************!*\
  !*** ./src/components/login-user/login-user.component.sass ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi11c2VyLmNvbXBvbmVudC5zYXNzIn0= */");

/***/ }),

/***/ "oqLW":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/views/login/login.view.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content fullscreen>\r\n  <ion-card>\r\n    <ion-card-header>\r\n      <ion-card-title style=\"font-family: Montserrat\" *ngIf=\"isLogin\">Iniciar Sesión</ion-card-title>\r\n      <ion-card-title style=\"font-family: Montserrat\" *ngIf=\"!isLogin\">Registrarse</ion-card-title>\r\n    </ion-card-header>\r\n    <ion-card-content>\r\n      <app-login-user *ngIf=\"isLogin\"></app-login-user>\r\n      <app-register-user *ngIf=\"!isLogin\"></app-register-user>\r\n    </ion-card-content>\r\n    <ion-button expand=\"block\" fill=\"clear\" size=\"small\" *ngIf=\"isLogin\" (click)=\"isLogin=!isLogin\">\r\n      ¿No tienes cuenta? ¡Create una!\r\n    </ion-button>\r\n    <ion-button expand=\"block\" fill=\"clear\" size=\"small\" *ngIf=\"!isLogin\" (click)=\"isLogin=!isLogin\">\r\n      ¿Ya tienes cuenta? ¡Inicia sesion!\r\n    </ion-button>\r\n  </ion-card>\r\n</ion-content>\r\n");

/***/ }),

/***/ "pJeZ":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/views/product-form/product-form.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content fullscreen>\r\n  <form [formGroup]=\"productForm\" (submit)=\"updateProduct()\">\r\n    <ion-item>\r\n      <ion-label position=\"floating\" type=\"text\">Nombre del producto</ion-label>\r\n      <ion-input formControlName=\"name\" placeholder=\"Patata\" [value]=\"product.name\"></ion-input>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label position=\"floating\" type=\"text\">Descripcion</ion-label>\r\n      <ion-input formControlName=\"description\" placeholder=\"La mas fuerte del campo\" [value]=\"product.description\"></ion-input>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label position=\"floating\" type=\"number\">Precio €</ion-label>\r\n      <ion-input formControlName=\"price\" placeholder=\"10\" type=\"number\" [value]=\"product.price\"></ion-input>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>Tipo de Unidad</ion-label>\r\n      <ion-select value=\"0\" interface=\"popover\" formControlName=\"unit\" [value]=\"product.unit\">\r\n        <ion-select-option *ngFor=\"let unit of optionslist; let i = index\" [value]=\"i\"> {{unit}} </ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>Categoria</ion-label>\r\n      <ion-select value=\"0\" interface=\"popover\" formControlName=\"category\" [value]=\"product.category\">\r\n        <ion-select-option *ngFor=\"let category of categorylist; let i = index\" [value]=\"i\"> {{category}} </ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label position=\"stacked\" type=\"file\">Foto</ion-label>\r\n      <ion-input (click)=\"takePicture()\" readonly formControlName=\"picture\" [value]=\"product.picture\"></ion-input>\r\n    </ion-item>\r\n    <ion-item >\r\n      <ion-checkbox slot=\"start\" formControlName=\"stock\" [checked]=\"product.stock\" [value]=\"'off'\"></ion-checkbox>\r\n      <ion-label>En stock</ion-label>\r\n    </ion-item>\r\n  </form>\r\n  <ion-row class=\"cardfooter\">\r\n    <ion-col>\r\n      <ion-button *ngIf=\"!product.id\" class=\"ion-float-right\" (click)=\"createProduct()\" type=\"button\">\r\n        <div>Crear</div>\r\n      </ion-button>\r\n      <ion-button *ngIf=\"product.id\" class=\"ion-float-right\" (click)=\"updateProduct()\" type=\"button\">\r\n        <div *ngIf=\"product.id\">Modificar</div>\r\n      </ion-button>\r\n      <ion-button *ngIf=\"product.id\" class=\"ion-float-right\" (click)=\"deleteProduct()\" type=\"button\" color=\"danger\">\r\n        <div *ngIf=\"product.id\">Eliminar</div>\r\n      </ion-button>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-content>\r\n");

/***/ }),

/***/ "rHSd":
/*!***************************************!*\
  !*** ./src/models/product/product.ts ***!
  \***************************************/
/*! exports provided: Product, UnitTypeEnum, CategoryEnum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Product", function() { return Product; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnitTypeEnum", function() { return UnitTypeEnum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryEnum", function() { return CategoryEnum; });
/* harmony import */ var class_transformer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! class-transformer */ "LGct");

class Product {
    constructor() {
        this._name = '';
        this._description = '';
        this._price = -1;
        this._unit = UnitTypeEnum.Kilogramo;
        this._stock = true;
    }
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get description() {
        return this._description;
    }
    set description(value) {
        this._description = value;
    }
    get price() {
        return this._price;
    }
    set price(value) {
        this._price = value;
    }
    get picture() {
        return this._picture;
    }
    set picture(value) {
        this._picture = value;
    }
    get unit() {
        return this._unit;
    }
    set unit(value) {
        this._unit = value;
    }
    get color() {
        return this._color;
    }
    set color(value) {
        this._color = value;
    }
    get stock() {
        return this._stock;
    }
    set stock(value) {
        this._stock = value;
    }
    get ownerId() {
        return this._ownerId;
    }
    set ownerId(value) {
        this._ownerId = value;
    }
    get category() {
        return this._category;
    }
    set category(value) {
        this._category = value;
    }
    convertToDTO() {
        return Object(class_transformer__WEBPACK_IMPORTED_MODULE_0__["classToPlain"])(this);
    }
    convertFromDTO(product) {
        return Object(class_transformer__WEBPACK_IMPORTED_MODULE_0__["plainToClass"])(Product, product);
    }
}
var UnitTypeEnum;
(function (UnitTypeEnum) {
    UnitTypeEnum["Manojo"] = "Manojo";
    UnitTypeEnum["Kilogramo"] = "Kilogramo";
    UnitTypeEnum["Unidad"] = "Unidad";
})(UnitTypeEnum || (UnitTypeEnum = {}));
var CategoryEnum;
(function (CategoryEnum) {
    CategoryEnum["Fruta"] = "Fruta";
    CategoryEnum["Verdura"] = " Verdura";
    CategoryEnum["Legumbres"] = "Legumbres";
    CategoryEnum["Panaderia"] = "Panaderia";
    CategoryEnum["Lacteos"] = "Lacteos";
    CategoryEnum["Huevos"] = "Huevos";
    CategoryEnum["Miel"] = "Miel";
    CategoryEnum["Otros"] = "Otros";
})(CategoryEnum || (CategoryEnum = {}));


/***/ }),

/***/ "rdQJ":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/components/cart-item/cart-item.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-item>\r\n  <ion-label style=\"font-family: Montserrat\">\r\n    {{product.product.name}} x{{product.productAmount}}\r\n  </ion-label>\r\n  <ion-button type=\"button\" [color]=\"'danger'\" (click)=\"product.reduce()\">-</ion-button>\r\n  <ion-button type=\"button\" [color]=\"'success'\" (click)=\"product.add()\">+</ion-button>\r\n  <ion-button (click)=\"removeFromCart()\">\r\n    <ion-icon name=\"trash-outline\"></ion-icon>\r\n  </ion-button>\r\n</ion-item>\r\n");

/***/ }),

/***/ "t3AT":
/*!*****************************************************************!*\
  !*** ./src/components/product-list/product-list.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9kdWN0LWxpc3QuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "uW7w":
/*!*********************************************!*\
  !*** ./src/services/order/order.service.ts ***!
  \*********************************************/
/*! exports provided: OrderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderService", function() { return OrderService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/storage */ "Vaw3");
/* harmony import */ var _models_order_order__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/order/order */ "ya8d");
/* harmony import */ var _products_product_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../products/product.service */ "TYbz");
/* harmony import */ var class_transformer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! class-transformer */ "LGct");
/* harmony import */ var _auth_auth_service_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../auth/auth-service.service */ "v1tz");
/* harmony import */ var _models_statistics_stats__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../models/statistics/stats */ "PcW2");










let OrderService = class OrderService {
    constructor(afAuth, firestore, storage, productService, authService) {
        this.afAuth = afAuth;
        this.firestore = firestore;
        this.storage = storage;
        this.productService = productService;
        this.authService = authService;
        this.orderCollection = this.firestore.collection('orders');
    }
    createOrderEntity(order) {
        const orderEntity = Object(class_transformer__WEBPACK_IMPORTED_MODULE_7__["classToPlain"])(order);
        orderEntity._orderedItems.forEach(product => {
            delete product._product;
        });
        return orderEntity;
    }
    loadAllOrders() {
        let orderList = [];
        return new Promise((resolve, reject) => {
            this.orderCollection.valueChanges({ idField: '_id' }).subscribe(orderEntities => {
                orderList = [];
                orderEntities.forEach((orderEntity) => {
                    const orderModel = new _models_order_order__WEBPACK_IMPORTED_MODULE_5__["Order"]().convertFromDTO(orderEntity);
                    orderModel.orderedItems.forEach((product, index) => {
                        this.productService.loadProductById(product.productId).then(value => {
                            orderModel.orderedItems[index].product = value;
                        });
                    });
                    orderList.push(orderModel);
                });
                resolve(orderList);
            });
        });
    }
    loadAllOrdersOfCurrentUser() {
        let orderList = [];
        let orderCollection;
        if (this.authService.getIsFarmer()) {
            orderCollection = this.firestore.collection('orders', ref => ref.where('_ownerId', '==', this.authService.getCurrentUserId()));
        }
        else {
            orderCollection = this.firestore.collection('orders', ref => ref.where('_userId', '==', this.authService.getCurrentUserId()));
        }
        return new Promise((resolve, reject) => {
            orderCollection.valueChanges({ idField: '_id' }).subscribe(orderEntities => {
                orderList = [];
                orderEntities.forEach((orderEntity) => {
                    const orderModel = new _models_order_order__WEBPACK_IMPORTED_MODULE_5__["Order"]().convertFromDTO(orderEntity);
                    orderModel.orderedItems.forEach((product, index) => {
                        this.productService.loadProductById(product.productId).then(value => {
                            orderModel.orderedItems[index].product = value;
                        });
                    });
                    orderList.push(orderModel);
                });
                resolve(orderList);
            });
        });
    }
    loadUserSalesRecord() {
        const currentStats = new _models_statistics_stats__WEBPACK_IMPORTED_MODULE_9__["Stats"]();
        return new Promise((resolve, reject) => {
            this.loadAllOrdersOfCurrentUser().then(orderList => {
                currentStats.totalOrders = orderList.length;
                orderList.forEach(order => {
                    order.orderedItems.forEach(product => {
                        console.log(product);
                        currentStats.totalSaleAmount += product.priceByEach * product.productAmount;
                        let productStats = currentStats.productsOrdered.find(x => x.productId === product.productId);
                        // Todo map product to get the id and name
                        if (productStats) {
                            productStats.productId = product.productId;
                            productStats.productAmount += product.productAmount;
                        }
                        else {
                            productStats = new _models_statistics_stats__WEBPACK_IMPORTED_MODULE_9__["StatsProductOrders"]();
                            productStats.productId = product.productId;
                            productStats.productAmount += product.productAmount;
                            currentStats.productsOrdered.push(productStats);
                        }
                    });
                });
                currentStats.productsOrdered.forEach(value => {
                    this.productService.loadProductById(value.productId).then(productEntity => {
                        value.name = productEntity._name;
                    });
                });
                resolve(currentStats);
            });
        });
    }
    cancelOrderById(orderId) {
        return new Promise((resolve, reject) => {
            this.orderCollection.doc(orderId).update({ _status: _models_order_order__WEBPACK_IMPORTED_MODULE_5__["OrderStatusEnum"].Cancelado }).then(r => {
                resolve(true);
            });
        });
    }
    markOrderAsPreparedById(orderId) {
        return new Promise((resolve, reject) => {
            this.orderCollection.doc(orderId).update({ _status: _models_order_order__WEBPACK_IMPORTED_MODULE_5__["OrderStatusEnum"].Preparado }).then(r => {
                resolve(true);
            });
        });
    }
    markOrderAsDeliveredById(orderId) {
        return new Promise((resolve, reject) => {
            this.orderCollection.doc(orderId).update({ _status: _models_order_order__WEBPACK_IMPORTED_MODULE_5__["OrderStatusEnum"].Entregado }).then(r => {
                resolve(true);
            });
        });
    }
    loadProductImage(imagePath) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const ref = this.storage.ref(imagePath);
            return new Promise((resolve, reject) => {
                ref.getDownloadURL().subscribe(url => {
                    resolve(url);
                });
            });
        });
    }
};
OrderService.ctorParameters = () => [
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"] },
    { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__["AngularFireStorage"] },
    { type: _products_product_service__WEBPACK_IMPORTED_MODULE_6__["ProductService"] },
    { type: _auth_auth_service_service__WEBPACK_IMPORTED_MODULE_8__["AuthServiceService"] }
];
OrderService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], OrderService);



/***/ }),

/***/ "uy1C":
/*!*******************************************************************!*\
  !*** ./src/components/register-user/register-user.component.sass ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWdpc3Rlci11c2VyLmNvbXBvbmVudC5zYXNzIn0= */");

/***/ }),

/***/ "v1tz":
/*!***************************************************!*\
  !*** ./src/services/auth/auth-service.service.ts ***!
  \***************************************************/
/*! exports provided: AuthServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthServiceService", function() { return AuthServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _models_user_user_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/user/user.model */ "aUIA");
/* harmony import */ var _models_user_user_roles_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../models/user/user-roles.enum */ "zOgT");







let AuthServiceService = class AuthServiceService {
    constructor(afAuth, router, firestore) {
        this.afAuth = afAuth;
        this.router = router;
        this.firestore = firestore;
        this.afAuth.authState.subscribe(user => {
            if (user) {
                this.userId = user.uid;
                this.isLogged = true;
                this.userCollection = firestore.doc('profiles/' + user.uid);
                this.userCollection.valueChanges().subscribe(userData => {
                    console.log(userData);
                    const realUser = new _models_user_user_model__WEBPACK_IMPORTED_MODULE_5__["User"]().convertFromDTO(userData);
                    this.isFarmer = realUser.role === _models_user_user_roles_enum__WEBPACK_IMPORTED_MODULE_6__["UserRoles"].PRODUCER;
                });
            }
            else {
                this.isLogged = false;
            }
        });
    }
    getCurrentUserId() {
        return this.userId ? this.userId : 'test';
    }
    getIsFarmer() {
        return this.isFarmer;
    }
    ngOnDestroy() {
    }
};
AuthServiceService.ctorParameters = () => [
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"] }
];
AuthServiceService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthServiceService);



/***/ }),

/***/ "vFr8":
/*!***********************************************************!*\
  !*** ./src/components/login-user/login-user.component.ts ***!
  \***********************************************************/
/*! exports provided: LoginUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginUserComponent", function() { return LoginUserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_login_user_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./login-user.component.html */ "UtC6");
/* harmony import */ var _login_user_component_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login-user.component.sass */ "oO95");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ "TEn/");










let LoginUserComponent = class LoginUserComponent {
    constructor(fb, auth, router, route, toastController) {
        this.fb = fb;
        this.auth = auth;
        this.router = router;
        this.route = route;
        this.toastController = toastController;
        this._error = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        this.errorMessage = '';
        this.hide = true;
    }
    presentToast() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: 'Error al iniciar sesion. Email y/o contraseña incorrecto/s.',
                duration: 2000,
                color: 'danger'
            });
            toast.present();
        });
    }
    ngOnInit() {
        this.registrationForm = this.fb.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email]],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
        });
        this._error.subscribe(message => this.errorMessage = message);
        this._error.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["debounceTime"])(3500)).subscribe(() => this.errorMessage = '');
    }
    logIn() {
        this.auth
            .signInWithEmailAndPassword(this.registrationForm.value.email, this.registrationForm.value.password)
            .then(value => {
            this.changeView(value.user.uid);
        })
            .catch(err => {
            console.log('Something went wrong:', err.message);
            this.presentToast();
            this._error.next('Error al iniciar sesion. Email y/o contraseña incorrecto/s ');
        });
    }
    changeView(uid) {
        this.router.navigate(['profile', uid]);
    }
    toggleFieldTextType() {
        this.hide = !this.hide;
    }
};
LoginUserComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuth"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["ToastController"] }
];
LoginUserComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-login-user',
        template: _raw_loader_login_user_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_login_user_component_sass__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], LoginUserComponent);



/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _views_login_login_view__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../views/login/login.view */ "BfzC");
/* harmony import */ var _views_profile_profile_view__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../views/profile/profile.view */ "G59Y");
/* harmony import */ var _views_product_form_product_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../views/product-form/product-form.component */ "wMDc");
/* harmony import */ var _views_product_product_view__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../views/product/product.view */ "P3F1");
/* harmony import */ var _views_product_list_products_view__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../views/product-list/products.view */ "3IWx");
/* harmony import */ var _views_profile_list_profile_list_view__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../views/profile-list/profile-list.view */ "50wC");
/* harmony import */ var _views_cart_cart_view__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../views/cart/cart.view */ "IwNu");
/* harmony import */ var _views_order_list_order_list_view__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../views/order-list/order-list.view */ "DPVA");
/* harmony import */ var _views_statistics_statistics_view__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../views/statistics/statistics.view */ "E9lE");
/* harmony import */ var _views_proteccion_proteccion_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../views/proteccion/proteccion.component */ "cDKL");
/* harmony import */ var _views_terminos_terminos_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../views/terminos/terminos.component */ "UMto");














const routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: _views_login_login_view__WEBPACK_IMPORTED_MODULE_3__["LoginView"] },
    { path: 'profile', component: _views_profile_profile_view__WEBPACK_IMPORTED_MODULE_4__["ProfileView"] },
    { path: 'myProfile', component: _views_profile_profile_view__WEBPACK_IMPORTED_MODULE_4__["ProfileView"] },
    { path: 'profile/:id', component: _views_profile_profile_view__WEBPACK_IMPORTED_MODULE_4__["ProfileView"] },
    { path: 'profiles', component: _views_profile_list_profile_list_view__WEBPACK_IMPORTED_MODULE_8__["ProfileListView"] },
    { path: 'profiles/:isFarmer', component: _views_profile_list_profile_list_view__WEBPACK_IMPORTED_MODULE_8__["ProfileListView"] },
    { path: 'productForm', component: _views_product_form_product_form_component__WEBPACK_IMPORTED_MODULE_5__["ProductFormComponent"] },
    { path: 'productForm/:id', component: _views_product_form_product_form_component__WEBPACK_IMPORTED_MODULE_5__["ProductFormComponent"] },
    { path: 'products', component: _views_product_list_products_view__WEBPACK_IMPORTED_MODULE_7__["ProductsView"] },
    { path: 'products/:category', component: _views_product_list_products_view__WEBPACK_IMPORTED_MODULE_7__["ProductsView"] },
    { path: 'products/:category/:userId', component: _views_product_list_products_view__WEBPACK_IMPORTED_MODULE_7__["ProductsView"] },
    { path: 'products/:category/:userId/:searchText', component: _views_product_list_products_view__WEBPACK_IMPORTED_MODULE_7__["ProductsView"] },
    { path: 'profileProducts/:category', component: _views_product_list_products_view__WEBPACK_IMPORTED_MODULE_7__["ProductsView"] },
    { path: 'profileProducts/:category/:userId', component: _views_product_list_products_view__WEBPACK_IMPORTED_MODULE_7__["ProductsView"] },
    { path: 'product/:id', component: _views_product_product_view__WEBPACK_IMPORTED_MODULE_6__["ProductView"] },
    { path: 'cart', component: _views_cart_cart_view__WEBPACK_IMPORTED_MODULE_9__["CartView"] },
    { path: 'orders', component: _views_order_list_order_list_view__WEBPACK_IMPORTED_MODULE_10__["OrderListView"] },
    { path: 'statistics', component: _views_statistics_statistics_view__WEBPACK_IMPORTED_MODULE_11__["StatisticsView"] },
    { path: 'politicas', component: _views_proteccion_proteccion_component__WEBPACK_IMPORTED_MODULE_12__["ProteccionView"] },
    { path: 'condiciones', component: _views_terminos_terminos_component__WEBPACK_IMPORTED_MODULE_13__["TerminosView"] },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"] })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "wMDc":
/*!**********************************************************!*\
  !*** ./src/views/product-form/product-form.component.ts ***!
  \**********************************************************/
/*! exports provided: ProductFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductFormComponent", function() { return ProductFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_product_form_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./product-form.component.html */ "pJeZ");
/* harmony import */ var _product_form_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product-form.component.scss */ "A/1b");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _models_product_product__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/product/product */ "rHSd");
/* harmony import */ var _pipes_enum_to_array_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../pipes/enum-to-array.pipe */ "m4/V");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @capacitor/core */ "gcOT");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/fire/storage */ "Vaw3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_products_product_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../services/products/product.service */ "TYbz");













let ProductFormComponent = class ProductFormComponent {
    constructor(enumToArrayPipe, formBuilder, router, route, fireauth, firestore, storage, productService) {
        this.enumToArrayPipe = enumToArrayPipe;
        this.formBuilder = formBuilder;
        this.router = router;
        this.route = route;
        this.fireauth = fireauth;
        this.firestore = firestore;
        this.storage = storage;
        this.productService = productService;
        this.optionslist = this.enumToArrayPipe.transform(_models_product_product__WEBPACK_IMPORTED_MODULE_4__["UnitTypeEnum"]);
        this.categorylist = this.enumToArrayPipe.transform(_models_product_product__WEBPACK_IMPORTED_MODULE_4__["CategoryEnum"]);
    }
    fillAllValues() {
        this.productForm.value.name = this.product.name;
        this.productForm.value.description = this.product.description;
        this.productForm.value.price = this.product.price;
        this.productForm.value.unit = this.product.unit;
        this.productForm.value.picture = this.product.picture;
        this.productForm.value.stock = this.product.stock;
        this.productForm.value.category = this.product.category;
    }
    ngOnDestroy() {
        this.subParams.unsubscribe();
    }
    ionViewWillEnter() {
        this.productsCollection = this.firestore.collection('products');
        this.subParams = this.route.params.subscribe(params => {
            if (params.id) {
                this.pathId = params.id;
                this.productsCollection.doc(this.pathId).valueChanges({ idField: '_id' }).subscribe(productEntity => {
                    this.product = this.product.convertFromDTO(productEntity);
                    this.fillAllValues();
                });
            }
        });
        this.fillAllValues();
    }
    ngOnInit() {
        this.optionslist = this.enumToArrayPipe.transform(_models_product_product__WEBPACK_IMPORTED_MODULE_4__["UnitTypeEnum"]);
        this.product = new _models_product_product__WEBPACK_IMPORTED_MODULE_4__["Product"]();
        this.productForm = this.formBuilder.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]],
            description: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]],
            price: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]],
            unit: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]],
            picture: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]],
            stock: ['',],
            category: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]],
        });
    }
    takePicture() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield _capacitor_core__WEBPACK_IMPORTED_MODULE_6__["Camera"].getPhoto({
                quality: 50,
                allowEditing: true,
                resultType: _capacitor_core__WEBPACK_IMPORTED_MODULE_6__["CameraResultType"].Base64,
                webUseInput: true,
                source: _capacitor_core__WEBPACK_IMPORTED_MODULE_6__["CameraSource"].Prompt
            }).then(value => {
                this.productForm.value.picture = 'Foto cargada';
                this.productPicture = value.base64String;
                this.product.picture = 'Foto cargada';
            });
        });
    }
    createProduct() {
        if (this.productForm.valid) {
            if (this.productForm.value.stock === '') {
                this.productForm.value.stock = true;
            }
            this.product.name = this.productForm.value.name;
            this.product.description = this.productForm.value.description;
            this.product.price = this.productForm.value.price;
            this.product.unit = this.productForm.value.unit;
            this.product.picture = this.productForm.value.picture;
            this.product.stock = this.productForm.value.stock;
            this.product.category = this.productForm.value.category;
            this.productsCollection.add(this.product.convertToDTO()).then(productCreated => {
                this.fireauth.user.subscribe(value => {
                    this.product.ownerId = value.uid;
                    this.uploadPictureToProduct(this.productPicture, value.uid, productCreated.id).then(a => {
                        this.product.picture = this.productForm.value.picture;
                        this.productsCollection.doc(productCreated.id).update(this.product.convertToDTO()).then(b => {
                            this.changeView(productCreated.id);
                        });
                    });
                });
            });
        }
        else {
            this.productForm.markAllAsTouched();
        }
    }
    updateProduct() {
        this.product.name = this.productForm.value.name;
        this.product.description = this.productForm.value.description;
        this.product.price = this.productForm.value.price;
        this.product.unit = this.productForm.value.unit;
        this.product.category = this.productForm.value.category;
        this.product.stock = this.productForm.value.stock;
        if (this.product.picture !== this.productForm.value.picture) {
            this.fireauth.user.subscribe(value => {
                this.product.ownerId = value.uid;
                this.uploadPictureToProduct(this.productPicture, value.uid, this.product.id).then(a => {
                    this.product.picture = this.productForm.value.picture;
                    this.productsCollection.doc(this.product.id).set(this.product.convertToDTO()).then(b => {
                        this.changeView(this.product.id);
                    });
                });
            });
        }
        else {
            // Modificamos el producto ya creado
            this.productsCollection.doc(this.product.id).set(this.product.convertToDTO()).then(value => this.changeView(this.product.id));
        }
    }
    uploadPictureToProduct(picture, userID, productID) {
        const file = picture;
        const filePath = '/products/' + userID + '/' + productID + '/image.png';
        this.productForm.value.picture = filePath;
        const ref = this.storage.ref(filePath);
        return ref.putString(file, 'base64');
    }
    changeView(id) {
        this.router.navigate(['/product', id]);
    }
    deleteProduct() {
        this.productService.deleteProduct(this.product).then(value => {
            this.router.navigate(['/profile']);
        });
    }
};
ProductFormComponent.ctorParameters = () => [
    { type: _pipes_enum_to_array_pipe__WEBPACK_IMPORTED_MODULE_5__["EnumToArrayPipe"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__["ActivatedRoute"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__["AngularFireAuth"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_9__["AngularFirestore"] },
    { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_10__["AngularFireStorage"] },
    { type: _services_products_product_service__WEBPACK_IMPORTED_MODULE_12__["ProductService"] }
];
ProductFormComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-product-form',
        template: _raw_loader_product_form_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_product_form_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ProductFormComponent);



/***/ }),

/***/ "wjYC":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/views/order-list/order-list.view.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\r\n  <div padding>\r\n    <ion-segment [(ngModel)]=\"filterCategory\" (ngModelChange)=\"updateOrders()\" [scrollable]=\"true\">\r\n      <ion-segment-button value=\"Pendiente\" style=\"font-family: Montserrat\">\r\n        Nuevos\r\n      </ion-segment-button>\r\n      <ion-segment-button value=\"Preparado\" style=\"font-family: Montserrat\">\r\n        Preparado\r\n      </ion-segment-button>\r\n      <ion-segment-button value=\"Entregado\" style=\"font-family: Montserrat\">\r\n        Entregado\r\n      </ion-segment-button>\r\n      <ion-segment-button value=\"Cancelado\" style=\"font-family: Montserrat\">\r\n        Cancelado\r\n      </ion-segment-button>\r\n    </ion-segment>\r\n  </div>\r\n\r\n  <app-order-item *ngFor=\"let order of orderShown\" [order]=\"order\" (refreshViewEvent)=\"refreshList()\"></app-order-item>\r\n</ion-content>\r\n\r\n");

/***/ }),

/***/ "ya8d":
/*!***********************************!*\
  !*** ./src/models/order/order.ts ***!
  \***********************************/
/*! exports provided: Order, OrderStatusEnum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Order", function() { return Order; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderStatusEnum", function() { return OrderStatusEnum; });
/* harmony import */ var _cart_product_order__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../cart/product-order */ "UU4C");
/* harmony import */ var class_transformer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! class-transformer */ "LGct");


class Order {
    constructor() {
        this._userId = 'TODO';
        this._creationDate = new Date();
        this._status = OrderStatusEnum.Pendiente;
        this._orderedItems = [];
    }
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }
    get userId() {
        return this._userId;
    }
    set userId(value) {
        this._userId = value;
    }
    get ownerId() {
        return this._ownerId;
    }
    set ownerId(value) {
        this._ownerId = value;
    }
    get creationDate() {
        return this._creationDate;
    }
    set creationDate(value) {
        this._creationDate = value;
    }
    get status() {
        return this._status;
    }
    set status(value) {
        this._status = value;
    }
    get orderedItems() {
        return this._orderedItems;
    }
    set orderedItems(value) {
        this._orderedItems = value;
    }
    convertToDTO() {
        return Object(class_transformer__WEBPACK_IMPORTED_MODULE_1__["classToPlain"])(this);
    }
    convertFromDTO(order) {
        const productOrder = new _cart_product_order__WEBPACK_IMPORTED_MODULE_0__["ProductOrder"]();
        const newOrder = Object(class_transformer__WEBPACK_IMPORTED_MODULE_1__["plainToClass"])(Order, order);
        newOrder.orderedItems.forEach((value, index) => {
            newOrder.orderedItems[index] = productOrder.convertFromDTO(value);
        });
        return Object(class_transformer__WEBPACK_IMPORTED_MODULE_1__["plainToClass"])(Order, newOrder);
    }
    getOrderPrice() {
        let finalPrice = 0;
        this.orderedItems.forEach(value => {
            finalPrice += value.priceByEach * value.productAmount;
        });
        return finalPrice;
    }
}
var OrderStatusEnum;
(function (OrderStatusEnum) {
    OrderStatusEnum["Pendiente"] = "Pendiente";
    OrderStatusEnum["Preparado"] = "Preparado";
    OrderStatusEnum["Entregado"] = "Entregado";
    OrderStatusEnum["Cancelado"] = "Cancelado";
})(OrderStatusEnum || (OrderStatusEnum = {}));


/***/ }),

/***/ "yemC":
/*!*****************************************!*\
  !*** ./src/views/login/login.view.sass ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi52aWV3LnNhc3MifQ== */");

/***/ }),

/***/ "ynWL":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "zBet":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/views/terminos/terminos.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title style=\"height: 100%; vertical-align: center\">\r\n      <ion-button fill=\"clear\" size=\"small\" (click)=\"dismiss()\">\r\n        <ion-icon name=\"arrow-back-outline\"></ion-icon>\r\n      </ion-button>\r\n      <div style=\"width: min-content; display: inline; height: 100%; vertical-align: center; font-family: Montserrat\">\r\n        Términos y condiciones\r\n      </div>\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div id=\"wbars\">\r\n    <div class=\"iub_content legal_pp\">\r\n      <div class=\"iub_header\">\r\n        <h1>Condiciones Generales de <strong>www.agrari.es</strong>\r\n        </h1>\r\n        <p>Las presentes Condiciones regulan</p>\r\n        <ul>\r\n          <li>el uso de esta Aplicación, y,</li>\r\n          <li>cualquier otro Contrato o relación jurídica conexos celebrados con el Titular</li>\r\n        </ul>\r\n        <p>de forma jurídicamente vinculante. Las palabras en mayúsculas se definen en la sección correspondiente específica del presente documento.</p>\r\n        <br>\r\n        <p>Los Usuarios deben leer atentamente el presente documento.</p>\r\n      </div>\r\n\r\n\r\n      <p>Cualquier otro contrato o acuerdo celebrado entre el Titular y los Vendedores prevalecerá en todo caso sobre las presentes Condiciones. Por consiguiente, las presentes Condiciones se aplicarán únicamente de forma supletoria y de conformidad con las disposiciones aplicables de dichos acuerdos o contratos.</p>\r\n      <p>Aunque la relación contractual relativa a estos Productos en su totalidad se establece únicamente entre el Titular y los Usuarios, los Usuarios reconocen y aceptan que, cuando esta Aplicación se les haya facilitado a través de la Apple App Store, Apple podrá exigir el cumplimiento de las presentes Condiciones como tercero beneficiario.</p>\r\n      <p>Esta Aplicación es ofrecida por:</p>\r\n\r\n      <p>\r\n        Agrari - España</p>\r\n\r\n      <p><b>Correo electrónico de contacto del Titular:</b> info@agrari.es\r\n      </p>\r\n\r\n\r\n\r\n\r\n      <h2 id=\"lo-que-el-usuario-deberia-saber-de-un-vistazo\">Lo que el Usuario debería saber de un vistazo</h2><ul>\r\n      <li>Por favor tenga en cuenta que algunas disposiciones de las presentes Condiciones solo son aplicables a determinadas categorías de Usuarios. En particular, ciertas disposiciones solo serán de aplicación a los Consumidores o a aquellos Usuarios que no entren en la categoría de Consumidores. Tales limitaciones se mencionan siempre de forma expresa en cada una de las cláusulas a las que se refieren. En ausencia de una mención de este tipo, las cláusulas serán aplicables a todos los Usuarios.</li>\r\n    </ul>\r\n\r\n      <hr>\r\n      <h2 id=\"como-funciona-this_application\">Cómo funciona esta Aplicación</h2><p>El Titular no controla, supervisa, modera ni inspecciona ninguno de los Productos ofrecidos por los Vendedores a través de esta Aplicación. Esto significa que el Titular no asume ninguna responsabilidad en relación con dichos Productos, incluyendo, con carácter enunciativo y no limitativo, su calidad, seguridad, exactitud o la capacidad de los Vendedores de proporcionarlos.<br>\r\n      Del mismo modo, el Titular no controla, modera ni inspecciona a los Compradores que utilizan esta Aplicación. Por lo tanto, el Titular no asume ninguna responsabilidad en relación con tal actividad de dichos Compradores en esta Aplicación, incluyendo, con carácter enunciativo y no limitativo, su capacidad jurídica o disposición para completar la transacción y abonar los costes asociados a esta.</p>\r\n      <p>Esta Aplicación simplemente proporciona una infraestructura o plataforma técnica que permite a los Usuarios interactuar entre sí. Por lo tanto, el Titular no participa directamente en dichas interacciones entre los Usuarios.</p>\r\n      <p>Las presentes Condiciones son aplicables al uso descrito de esta Aplicación como plataforma.<br>\r\n        Salvo que se indique lo contrario, las presentes Condiciones también serán aplicables a las transacciones entre Compradores y Vendedores. Esto no implica la intervención del Titular en dichas transacciones.</p>\r\n\r\n      <h2 id=\"condiciones-de-uso\">CONDICIONES DE USO</h2><p>Salvo que se establezca lo contrario, las condiciones de uso detalladas en esta sección se aplicarán de forma general al uso de esta Aplicación.</p>\r\n\r\n      <p>En situaciones concretas pueden aplicarse condiciones de uso o de acceso individuales o adicionales y en tales supuestos se indicarán de forma adicional en el presente documento.</p>\r\n\r\n      <p>Al utilizar esta Aplicación, los Usuarios confirman que cumplen los siguientes requisitos.</p>\r\n      <ul>\r\n        <li>No existen restricciones referidas a los Usuarios en el sentido de que estos sean Consumidores o Usuarios Profesionales;</li>\r\n      </ul>\r\n\r\n      <ul>\r\n        <li>Los Usuarios no deberán estar situados en un país que esté sometido a un embargo decretado por el Gobierno de los EE. UU. o que haya sido calificado por el Gobierno de los EE. UU. como un país “que apoya el terrorismo»;</li>\r\n        <li>Los Usuarios no deberán estar incluidos en ninguna lista de partes prohibidas o restringidas elaborada por el Gobierno de EE. UU.;</li>\r\n      </ul>\r\n\r\n      <h3 id=\"registro-de-la-cuenta\">Registro de la cuenta</h3>\r\n      <p>Para utilizar el Servicio los Usuarios deberán registrar o crear una cuenta de Usuario, facilitando todos los datos o la información exigidos de forma completa y fidedigna.<br>\r\n        En caso de no hacerlo el Servicio no estará disponible.</p>\r\n\r\n      <p>Los Usuarios son responsables de la custodia de sus credenciales de acceso con garantías de confidencialidad y seguridad. Por este motivo, los Usuarios también deberán escoger contraseñas que cumplan los más altos estándares de fortaleza permitidos por esta Aplicación.</p>\r\n\r\n      <p>Al registrarse, los Usuarios acuerdan asumir plena responsabilidad por todas las actividades que tengan lugar bajo su nombre de usuario y su contraseña.<br>\r\n        Los Usuarios deberán informar al Titular de forma inmediata y sin ambigüedades, usando para ello los datos de contacto indicados en el presente documento, en caso de que crean que su información personal, incluyendo, con carácter enunciativo y no limitativo, las cuentas de Usuario, las credenciales de acceso o los datos personales, han sido vulnerados, revelados de forma indebida o robados.</p>\r\n      <h4 id=\"condiciones-para-el-registro-de-cuentas\">Condiciones para el registro de cuentas</h4>\r\n      <p>El registro de cuentas de Usuario en esta Aplicación está sometido a las condiciones establecidas a continuación. Al registrarse, los Usuarios consienten en cumplir tales condiciones.</p>\r\n      <ul>\r\n        <li>No se permiten las cuentas registradas por bots o por cualquier otro método automatizado.</li>\r\n      </ul>\r\n\r\n      <ul>\r\n        <li>Salvo que se especifique lo contrario, cada Usuario deberá registrar solo una cuenta.</li>\r\n      </ul>\r\n\r\n      <ul>\r\n        <li>Salvo que se autorice de forma expresa, las cuentas de Usuario no podrán compartirse con otras personas.</li>\r\n      </ul>\r\n\r\n      <h4 id=\"cancelacion-de-la-cuenta\">Cancelación de la cuenta</h4>\r\n      <p>Los Usuarios podrán cancelar sus cuentas y dejar de utilizar el Servicio en cualquier momento de la siguiente forma:</p>\r\n      <ul>\r\n        <li>Contactando directamente con el Titular a través de los datos de contacto facilitados en el presente documento.</li>\r\n      </ul>\r\n\r\n      <h4 id=\"suspension-y-eliminacion-de-la-cuenta\">Suspensión y eliminación de la cuenta</h4>\r\n      <p>El Titular se reserva el derecho, a su entera discreción, de suspender o eliminar las cuentas de Usuarios en cualquier momento y sin preaviso, si las considera inapropiadas, ofensivas o entiende que incumplen las presentes Condiciones.</p>\r\n\r\n      <p>La suspensión o eliminación de cuentas de Usuario no dará derecho a los Usuarios a exigir ninguna compensación, indemnización por daños y perjuicios o reembolso.</p>\r\n\r\n      <p>La suspensión o eliminación de cuentas debido a causas imputables al Usuario no eximirá a dicho Usuario de abonar las tarifas o los precios que sean de aplicación.</p>\r\n      <h3 id=\"contenido-en-this_application\">Contenido en esta Aplicación</h3>\r\n      <p>Salvo que se especifique lo contrario o se pueda reconocer de forma clara, todos los contenidos disponibles en esta Aplicación son propiedad del Titular o son proporcionados por este o sus licenciantes.</p>\r\n\r\n      <p>El Titular se compromete a actuar con la máxima diligencia para velar por que los contenidos proporcionados en esta Aplicación no infrinjan ninguna disposición legal ni vulneren los derechos de terceros. Sin embargo, no siempre será posible conseguir dicho objetivo.<br>\r\n        En tales supuestos, sin perjuicio de las prerrogativas legales de que dispongan los Usuarios para hacer cumplir sus derechos, se ruega a los Usuarios que comuniquen las quejas en este sentido utilizando los datos de contacto facilitados en el presente documento.</p>\r\n      <h4 id=\"derechos-relativos-a-los-contenidos-en-this_application\">Derechos relativos a los contenidos en esta Aplicación</h4>\r\n      <p>El Titular se reserva todos los derechos de propiedad intelectual sobre la totalidad de dichos contenidos.</p>\r\n\r\n      <p>Por consiguiente, los Usuarios no podrán utilizar esos contenidos de formas que no sean necesarias o estén implícitas en el uso adecuado del Servicio.</p>\r\n      <p>En particular, pero sin limitaciones, los Usuarios no podrán copiar, descargar, compartir (más allá de los límites establecidos más adelante), modificar, traducir, transformar, publicar, transmitir, vender, sublicenciar, editar, transferir/ceder a terceros o crear obras derivadas de los contenidos disponibles en esta Aplicación, ni permitir a ningún tercero hacerlo a través del Usuario o de su dispositivo, incluso sin el conocimiento del Usuario.</p>\r\n\r\n      <p>En los casos en que se establezca de forma expresa en esta Aplicación, el Usuario podrá descargar, copiar y/o compartir cualquier contenido disponible a través de esta Aplicación únicamente para su uso personal y no comercial y siempre y cuando se efectúen correctamente los reconocimientos de derechos de autor y todos los demás reconocimientos solicitados por el Titular.</p>\r\n\r\n      <p>Las limitaciones o excepciones de los derechos de autor establecidas por ley no se verán afectadas.</p>\r\n      <h3 id=\"contenidos-proporcionados-por-los-usuarios\">Contenidos proporcionados por los Usuarios</h3>\r\n      <p>El Titular permite a los Usuarios subir, compartir o proporcionar sus propios contenidos a esta Aplicación.</p>\r\n\r\n      <p>Al proporcionar contenidos a esta Aplicación, los Usuarios confirman que están legitimados para hacerlo y que no están infringiendo ninguna disposición legal y/o vulnerando los derechos de terceros.</p>\r\n      <p>Podrá encontrarse información adicional sobre los contenidos aceptables en la sección de las presentes Condiciones que detalla los usos aceptables.</p>\r\n      <h4 id=\"derechos-relativos-a-los-contenidos-proporcionados-por-los-usuarios\">Derechos relativos a los contenidos proporcionados por los Usuarios</h4>\r\n      <p>Los Usuarios reconocen y aceptan que al proporcionar sus contenidos propios en esta Aplicación conceden al Titular una licencia no exclusiva, completamente pagada y libre de cánones para tratar dichos contenidos únicamente para la explotación y el mantenimiento de esta Aplicación, según lo exigido en el contrato.</p>\r\n\r\n      <p>En la medida en que lo permitan las leyes aplicables, los Usuarios renuncian a todos los derechos morales en relación con el contenido que proporcionen a esta Aplicación.</p>\r\n      <p>Los Usuarios reconocen, aceptan y confirman que todos los contenidos que proporcionen a través de esta Aplicación serán facilitados de conformidad con las mismas condiciones generales establecidas para los contenidos en esta Aplicación.</p>\r\n      <h4 id=\"responsabilidad-por-los-contenidos-proporcionados\">Responsabilidad por los contenidos proporcionados</h4>\r\n      <p>Los Usuarios serán los únicos responsables de los contenidos que suban, publiquen, compartan o proporcionen a través de esta Aplicación. Los Usuarios reconocen y aceptan que <strong>el Titular no filtra ni modera dichos contenidos</strong>.</p>\r\n\r\n      <p>Sin embargo, el Titular se reserva el derecho a retirar, eliminar, bloquear o rectificar dichos contenidos a su total discreción y a denegar, sin previo aviso, el acceso a esta Aplicación por parte del Usuario que los haya subido:</p>\r\n\r\n      <ul>\r\n        <li>Si se recibe cualquier queja basada en dichos contenidos;</li>\r\n        <li>Si se recibe una notificación de vulneración de derechos de propiedad intelectual;</li>\r\n        <li>Siguiendo una orden emitida por una autoridad pública; o</li>\r\n        <li>Cuando se comunique al Titular que los contenidos, mientras sigan siendo accesibles a través de esta Aplicación, pueden suponer un riesgo para los Usuarios, para terceros y/o para la disponibilidad del Servicio.</li>\r\n      </ul>\r\n\r\n\r\n      <p>La retirada, la eliminación, el bloqueo o la rectificación de los contenidos no darán derecho a los Usuarios que hayan proporcionado dichos contenidos o que sean responsables de ellos a reclamar ninguna compensación, indemnización por daños y perjuicios o reembolso.</p>\r\n\r\n      <p>Los Usuarios acuerdan que liberarán al Titular de toda responsabilidad derivada de cualquier reclamación que se formule y/o de los daños y perjuicios que se puedan causar debido a los contenidos que hayan proporcionado a esta Aplicación o a través de esta.</p>\r\n      <h4 id=\"retirada-de-contenidos-de-partes-de-this_application-que-esten-disponibles-a-traves-de-app-store\">Retirada de contenidos de partes de esta Aplicación que estén disponibles a través de App Store</h4>\r\n      <p>Si el contenido denunciado se considera censurable, será retirado dentro de un plazo de 24 horas y se prohibirá al Usuario que proporcionó dicho contenido utilizar el Servicio.</p>\r\n      <h4 id=\"acceso-a-los-contenidos-proporcionados\">Acceso a los contenidos proporcionados</h4>\r\n      <p>Los contenidos proporcionados por los Usuarios a esta Aplicación se facilitan de conformidad con los criterios detallados en la presente sección.</p>\r\n      <h5 id=\"contenidos-para-determinados-publicos\">Contenidos para determinados públicos</h5>\r\n      <p>Los contenidos que estén destinados a ser puestos a disposición de determinados públicos solo podrán ser compartidos con dichos terceros según lo determinado por los Usuarios.</p>\r\n      <p>Los datos personales o cualquier otra información que los Usuarios suban en relación con dichos contenidos (como una identificación de Usuario, un avatar o un apodo, etc.) aparecerán también relacionados con los contenidos.</p>\r\n      <p>Los Usuarios podrán dirigirse a esta Aplicación (y se recomienda que lo hagan) para obtener detalles sobre quién puede acceder a los contenidos que proporcionen.</p>\r\n      <h3 id=\"acceso-a-recursos-externos\">Acceso a recursos externos</h3>\r\n      <p>A través de esta Aplicación los Usuarios podrán acceder a recursos externos proporcionados por terceros. Los Usuarios reconocen y aceptan que el Titular no tiene ningún control sobre dichos recursos y que, por tanto, no es responsable de sus contenidos y disponibilidad.</p>\r\n\r\n      <p>Las condiciones aplicables a los recursos proporcionados por terceros, incluidas las aplicables a cualquier posible concesión de derechos sobre el contenido, se derivan de los términos y condiciones de dichos terceros o, a falta de estos, de las leyes aplicables.</p>\r\n      <h3 id=\"usos-aceptables\">Usos aceptables</h3>\r\n      <p>Esta Aplicación y el Servicio solo podrán utilizarse dentro del ámbito para el cual se proporcionan, con arreglo a las presentes Condiciones y a la legislación aplicable.</p>\r\n\r\n      <p>Los Usuarios serán los únicos responsables de asegurarse de que su utilización de esta Aplicación y/o del Servicio no infringe ninguna ley o reglamento ni vulnera derechos de terceros.</p>\r\n      <p>Por consiguiente, el Titular se reserva el derecho a adoptar las medidas oportunas para proteger sus intereses legítimos, incluyendo denegar a los Usuarios el acceso a esta Aplicación o al Servicio, resolver contratos, denunciar conductas inadecuadas llevadas a cabo a través de esta Aplicación o del Servicio a las autoridades competentes - tales como las autoridades judiciales o administrativas - siempre que los Usuarios realicen o se sospechen que han realizado cualquiera de las siguientes actividades:</p>\r\n\r\n      <ul>\r\n        <li>Infracciones de las leyes, los reglamentos y/o de las presentes Condiciones;</li>\r\n        <li>Vulneración de los derechos de terceros;</li>\r\n        <li>Causar un perjuicio considerable a los intereses legítimos del Titular;</li>\r\n        <li>Ofender al Titular o a algún tercero.</li>\r\n      </ul>\r\n\r\n\r\n      <h2 id=\"terminos-y-condiciones-de-venta\">TÉRMINOS Y CONDICIONES DE VENTA</h2><h3 id=\"productos-pagados\">Productos pagados</h3>\r\n      <p>Algunos de los Productos proporcionados en esta Aplicación, como parte del Servicio, se facilitan a cambio de una contraprestación.</p>\r\n\r\n      <p>Las tarifas, la duración y las condiciones aplicables a la compra de dichos Productos se describen más adelante y en las secciones específicas de esta Aplicación.</p>\r\n      <h3 id=\"descripcion-del-producto\">Descripción del producto</h3>\r\n      <p>Los precios, las descripciones o la disponibilidad de los Productos se detallan en las secciones correspondientes de esta Aplicación y podrán sufrir cambios sin preaviso.</p>\r\n\r\n      <p>Aunque los Productos en esta Aplicación se presentan con la máxima fidelidad posible desde un punto de vista técnico, la representación en esta Aplicación a través de cualquier medio (incluyendo, según corresponda, materiales gráficos, imágenes, colores o sonidos) únicamente pretenden servir como referencia y no implican ninguna garantía de las características del Producto adquirido.</p>\r\n\r\n      <p>Las características del Producto escogido se describirán durante el proceso de compra.</p>\r\n      <h3 id=\"proceso-de-compra\">Proceso de compra</h3>\r\n      <p>Todos los pasos dados desde la elección de un Producto hasta el envío del pedido forman parte del proceso de compra.</p>\r\n\r\n      <p>El proceso de compra incluye los siguientes pasos:</p>\r\n\r\n      <ul>\r\n        <li>Los Usuarios deben escoger el Producto que quieren y comprobar su selección de compra.</li>\r\n        <li>Después de haber revisado la información mostrada en la selección de compra, los Usuarios podrán realizar el pedido enviándolo.</li>\r\n      </ul>\r\n\r\n      <h3 id=\"envio-del-pedido\">Envío del pedido </h3>\r\n      <p>Cuando los Usuarios realizan un pedido, son de aplicación las siguientes cláusulas:</p>\r\n\r\n      <ul>\r\n        <li>La realización de un pedido determina la celebración del contrato y, por tanto, obliga al Usuario a abonar el precio, los impuestos y todas las posibles comisiones y gastos adicionales, según lo indicado en la página de pedido.</li>\r\n        <li>En caso de que el Producto adquirido exija una intervención activa por parte del Usuario, como aportar información o datos personales, especificaciones o deseos especiales, la realización del pedido obligará al Usuario a cooperar en este sentido.</li>\r\n        <li>Una vez que se haya realizado el pedido, los Usuarios recibirán un comprobante confirmando la recepción del pedido.</li>\r\n      </ul>\r\n\r\n      <p>Todas las notificaciones relativas al proceso de compra descrito se enviarán a la dirección de correo electrónico facilitada por el Usuario a tal fin.</p>\r\n      <h3 id=\"precios\">Precios</h3>\r\n      <p>Se informará a los Usuarios, durante el proceso de compra y antes del envío del pedido, de todas las comisiones, tarifas y costes (incluidos, en su caso, los costes de envío) que deban abonarse.</p>\r\n\r\n      <p>Los precios en esta Aplicación se muestran:</p>\r\n      <ul>\r\n        <li>ya sea incluyendo o excluyendo todas las comisiones, tarifas y costes aplicables, dependiendo de la sección que esté consultando el Usuario.</li>\r\n      </ul>\r\n\r\n      <h3 id=\"metodos-de-pago\">Métodos de pago</h3>\r\n      <p>Se facilitará la información relativa a los métodos de pago aceptados durante el proceso de compra.</p>\r\n\r\n      <p>Algunos métodos de pago solo estarán disponibles sujetos a condiciones o comisiones adicionales. En esos casos, la información relativa a estos podrá encontrarse en la sección específica de esta Aplicación.</p>\r\n      <p>Todos los pagos se tramitan de forma independiente a través de servicios de terceros. Por consiguiente, esta Aplicación no recoge ninguna información de pago - como datos de tarjetas de crédito - sino que únicamente recibe una notificación una vez que se ha completado satisfactoriamente el pago.</p>\r\n\r\n      <p>Si falla el pago a través de los métodos disponibles o bien es denegado por el proveedor de servicios de pago, el Titular no tendrá ninguna obligación de ejecutar el pedido de compra.  Todos los posibles costes o comisiones resultantes del pago fallido o denegado serán por cuenta del Usuario.</p>\r\n      <h3 id=\"compra-a-traves-de-la-tienda-de-aplicaciones\">Compra a través de la tienda de aplicaciones</h3>\r\n      <p> o Productos específicos a la venta en esta Aplicación deben adquirirse a través de una tienda de aplicaciones de terceros. Para acceder a dichas compras, los Usuarios deberán seguir las instrucciones facilitadas en la tienda virtual correspondiente (como la «Apple App Store» o «Google Play»), que pueden variar dependiendo del dispositivo en concreto que se utilice.</p>\r\n\r\n      <p>Salvo que se especifique lo contrario, las compras efectuadas a través de tiendas virtuales de terceros también estarán sujetas a los términos y condiciones de esos terceros que, en caso de cualquier incompatibilidad o conflicto, siempre prevalecerán sobre las presentes Condiciones.</p>\r\n\r\n      <p>Por lo tanto, los Usuarios que realicen compras a través de dichas tiendas virtuales de terceros deberán leer esos términos y condiciones de venta y aceptarlos.</p>\r\n\r\n      <h2 id=\"derechos-de-los-usuarios\">Derechos de los Usuarios</h2><h3 id=\"derecho-de-desistimiento\">Derecho de desistimiento</h3>\r\n      <p>Salvo en caso de que sea aplicable alguna excepción, los Usuarios podrán desistir del contrato en el plazo señalado a continuación (por lo general, 14 días), por cualquier motivo y sin necesidad de justificación. Los Usuarios pueden obtener más información sobre las condiciones de desistimiento en esta sección.</p>\r\n      <p>El derecho de desistimiento no se aplica a los contratos que se hayan celebrado con el Titular. Sin embargo, es posible que se aplique a los contratos celebrados con los Vendedores.<br>\r\n        Si resulta aplicable, el derecho a desistir de contratos celebrados con los Vendedores a través de esta Aplicación estará sujeto a las condiciones y especificaciones facilitadas por cada Vendedor en esta Aplicación.</p>\r\n\r\n\r\n      <h2 id=\"responsabilidad-y-exencion-de-responsabilidad\">Responsabilidad y exención de responsabilidad</h2><h3 id=\"usuarios-de-la-union-europea\">Usuarios de la Unión Europea</h3><h4 id=\"exencion-de-responsabilidad\">Exención de responsabilidad</h4>\r\n      <p>Los Usuarios acuerdan indemnizar y eximir de toda responsabilidad al Titular y a sus filiales, sociedades afiliadas, directivos, administradores, agentes, cotitulares de marcas, socios y empleados frente a cualquier reclamación o demanda - incluyendo, con carácter enunciativo y no limitativo, los honorarios de abogados y las costas - formuladas por cualquier tercero debido a o en relación con un uso negligente o conexión con el Servicio, una violación de las presentes Condiciones, una vulneración de los derechos de terceros o infracción de disposiciones establecidas por ley por parte del Usuario o de sus sociedades afiliadas, directivos, administradores, agentes, cotitulares de marcas, socios y empleados hasta la máxima extensión permitida por la ley aplicable.</p>\r\n      <h4 id=\"limitacion-de-responsabilidad-por-las-actividades-de-los-usuarios-en-this_application\">Limitación de responsabilidad por las actividades de los Usuarios en esta Aplicación</h4>\r\n      <p>Los Usuarios reconocen y aceptan que el Titular únicamente proporciona a los Usuarios la infraestructura técnica y las funcionalidades incorporadas en esta Aplicación.</p>\r\n\r\n      <p>El Titular no intermedia, modera, promueve ni interviene en las interacciones, acuerdos o transacciones que tienen lugar entre los Usuarios y por lo tanto no asume ninguna responsabilidad por dichas interacciones entre Usuarios, incluido por el cumplimiento de las obligaciones de los Usuarios.</p>\r\n      <p>En particular, los Usuarios reconocen y aceptan que el Titular no interviene en las ventas ni en las compras de los Usuarios que entren en la categoría de Compradores o Vendedores, respectivamente, efectuadas a través de esta Aplicación.</p>\r\n\r\n      <p>Esto significa que los Vendedores y los Compradores serán los únicos responsables, respectivamente, por ofrecer o comprar a través de esta Aplicación y por las obligaciones resultantes de dichas actividades.</p>\r\n\r\n      <p>En particular, el Titular no asumirá responsabilidad alguna por:</p>\r\n\r\n      <ul>\r\n        <li>Cualquier declaración, afirmación o descripción precontractuales de los Productos ofertados a través deesta Aplicación;</li>\r\n        <li>La existencia de cualquier licencia, autorización, cualificación o cualquier otro permiso oficial que sean aplicables y que permitan a los Vendedores ofrecer bienes o servicios específicos, según lo exigido por la ley aplicable;</li>\r\n        <li>La capacidad de los Compradores (p.ej. en lo referente a su edad, solvencia, etc.) para comprar con arreglo a la ley aplicable;</li>\r\n        <li>Cualquier obligación establecida por los Usuarios a través de esta Aplicación, incluyendo, con carácter enunciativo y no limitativo, las garantías de los productos y la seguridad de los mismos;</li>\r\n        <li>Cualquier reclamación basada en la ejecución parcial, incorrecta o fallida de acuerdos vinculantes celebrados en esta Aplicación.</li>\r\n      </ul>\r\n\r\n      <h4 id=\"limitacion-de-responsabilidad\">Limitación de responsabilidad</h4>\r\n      <p>Salvo que se establezca expresamente lo contrario y sin perjuicio de las disposiciones relativas a la responsabilidad civil derivada de los productos establecidas por ley, los Usuarios no podrán reclamar daños y perjuicios contra el Titular (ni contra ninguna persona física o jurídica que actúe en su nombre).</p>\r\n\r\n      <p>Lo anterior no será aplicable a los daños que afecten a la vida, la salud o la integridad física, los daños y perjuicios resultantes del incumplimiento de una obligación contractual esencial, como cualquier obligación que sea estrictamente necesaria para lograr el objetivo del contrato, y/o a los daños y perjuicios resultantes del dolo o la negligencia grave, siempre y cuando el Usuario haya utilizado esta Aplicación de forma apropiada y correcta.</p>\r\n\r\n      <p>Salvo que los daños hayan sido causados mediante dolo o negligencia grave, o afecten a la vida, la salud o la integridad física, el Titular solo será responsable en la medida de los daños que fueran típicos y previsibles en el momento en el que se celebró el contrato.</p>\r\n\r\n      <h2 id=\"disposiciones-comunes\">Disposiciones comunes</h2><h3 id=\"no-renuncia\">No renuncia</h3>\r\n      <p>La falta de ejercicio de cualquier derecho o el hecho de no invocar una disposición en virtud de las presentes Condiciones no constituirán una renuncia a dicho derecho o dicha disposición. No se considerará que ninguna renuncia constituya a su vez una renuncia adicional o continuada a dicho término o a cualquier otro término.</p>\r\n      <h3 id=\"interrupcion-del-servicio\">Interrupción del servicio </h3>\r\n      <p>Para garantizar el mejor nivel de servicio posible, el Titular se reserva el derecho a interrumpir el Servicio para labores de mantenimiento, actualizaciones del sistema o cualesquiera otros cambios, informando adecuadamente a los Usuarios.</p>\r\n\r\n      <p>Dentro de los límites de la ley, el Titular también podrá decidir suspender o cancelar por completo el Servicio. Si el Servicio se cancela, el Titular cooperará con los Usuarios para permitirles retirar Datos personales o información de conformidad con la ley aplicable.</p>\r\n\r\n      <p>Asimismo, el Servicio podrá no estar disponible debido a motivos fuera del control razonable del Titular, como la «fuerza mayor» (p.ej. protestas laborales, averías en las infraestructuras o apagones, etc.).</p>\r\n      <h3 id=\"reventa-del-servicio\">Reventa del Servicio</h3>\r\n      <p>Los Usuarios no reproducirán, duplicarán, copiarán, venderán, revenderán o explotarán ninguna parte de esta Aplicación y de su Servicio sin la autorización previa, expresa y por escrito del Titular, concedida ya sea directamente o a través de un programa de reventa legítimo.</p>\r\n      <h3 id=\"politica-de-privacidad\">Política de privacidad</h3>\r\n      <p>Para obtener más información sobre la utilización de sus Datos personales, los Usuarios podrán referirse a la política de privacidad de esta Aplicación.</p>\r\n      <h3 id=\"derechos-de-propiedad-intelectual\">Derechos de propiedad intelectual</h3>\r\n      <p>Sin perjuicio de cualesquiera disposiciones más específicas de las presentes Condiciones, los derechos de propiedad intelectual, tales como los derechos de autor, derechos derivados de marcas registradas, derechos de patentes y derechos de diseños relativos a esta Aplicación son propiedad exclusiva del Titular o de sus licenciantes y están protegidos por las leyes en vigor en materia de marcas y los tratados internacionales relacionados.</p>\r\n\r\n      <p>Todas las marcas registradas - sean denominativas o gráficas - y cualesquiera otras marcas, nombres comerciales, marcas de servicio, signos denominativos, ilustraciones, imágenes o logotipos que aparezcan en relación con esta Aplicación son y seguirán siendo propiedad exclusiva del Titular o de sus licenciantes y están protegidos por las leyes en vigor en materia de marcas y los tratados internacionales relacionados.</p>\r\n      <h3 id=\"cambios-de-las-presentes-condiciones\">Cambios de las presentes Condiciones</h3>\r\n      <p>El Titular se reserva el derecho a cambiar o modificar de cualquier otro modo las presentes Condiciones en cualquier momento. En tales casos, el Titular informará adecuadamente a los Usuarios de esos cambios.</p>\r\n\r\n      <p>Dichos cambios solo afectarán a la relación con los Usuarios de cara al futuro.</p>\r\n\r\n      <p>La continuidad en el uso del Servicio indicará la aceptación por parte de los Usuarios de las Condiciones modificadas. Si los Usuarios no desean quedar vinculados por estos cambios, deberán dejar de usar el Servicio. El hecho de no aceptar las Condiciones modificadas dará derecho a cualquiera de las dos partes a resolver el Contrato.</p>\r\n\r\n      <p>La versión aplicable previa regulará la relación antes de la aceptación del Usuario. Los Usuarios podrán obtener cualquier versión previa del Titular.</p>\r\n      <p>Si la ley aplicable lo exige, el Titular especificará la fecha a partir de la cual entrarán en vigor las Condiciones modificadas.</p>\r\n      <h3 id=\"cesion-del-contrato\">Cesión del contrato</h3>\r\n      <p>El Titular se reserva el derecho a transferir, ceder, disponer mediante novación o subcontratar cualquiera de los derechos o las obligaciones establecidos con arreglo a las presentes Condiciones, teniendo en cuenta los intereses legítimos de los Usuarios.</p>\r\n\r\n      <p>Las disposiciones relativas a los cambios de las presentes Condiciones se aplicarán mutatis mutandis.</p>\r\n\r\n      <p>Los Usuarios no podrán ceder ni transferir sus derechos u obligaciones con arreglo a las presentes Condiciones en modo alguno, salvo con el permiso por escrito del Titular.</p>\r\n      <h3 id=\"contacto\">Contacto</h3>\r\n      <p>Todas las comunicaciones relativas a la utilización de esta Aplicación deberán remitirse utilizando los datos de contacto señalados en el presente documento.</p>\r\n      <h3 id=\"posibilidad-de-separar-una-disposicion\">Posibilidad de separar una disposición</h3>\r\n      <p>En el caso de que cualquier disposición de las presentes Condiciones fuera declarada o se convirtiera en inválida o inejecutable con arreglo a la ley aplicable, la invalidez o inejecutabilidad de dicha disposición no afectarán a la validez de las disposiciones restantes, que continuarán gozando de plena vigencia y efectividad.</p>\r\n      <h4 id=\"usuarios-de-ee-uu\">Usuarios de EE.UU.</h4>\r\n      <p>Cualquiera de esas disposiciones inválidas o inejecutables se interpretará y modificará en la medida en que sea razonablemente necesario para hacer que sea válida, ejecutable y coherente con la intención original.<br>\r\n        Las presentes Condiciones constituyen el Contrato completo entre los Usuarios y el Titular con respecto al objeto del presente documento y sustituyen a cualquier otra comunicación, incluyendo, con carácter enunciativo y no limitativo, todos los contratos anteriores entre las partes referidos al mismo objeto.<br>\r\n        Las presentes Condiciones se ejecutarán en la máxima medida de lo permitido por la ley.</p>\r\n      <h4 id=\"usuarios-de-la-union-europea\">Usuarios de la Unión Europea</h4>\r\n      <p>En el caso de que cualquiera de las disposiciones de las presentes Condiciones fuera nula, inválida o inejecutable, o se declarara como tal, las partes actuarán con la máxima diligencia para acordar de forma amistosa unas disposiciones válidas y ejecutables que sustituyan a las partes nulas, inválidas o inejecutables.<br>\r\n        En caso de que no se lograra llegar a dicho acuerdo, las disposiciones nulas, inválidas o inejecutables serán sustituidas por las disposiciones aplicables establecidas por la ley, si la normativa aplicable lo permite o establece de este modo.<br>\r\n        Sin perjuicio de lo anterior, la nulidad, invalidez o la imposibilidad de ejecutar una disposición concreta de las presentes Condiciones no anularán el Contrato en su conjunto, salvo que las disposiciones que sean separadas sean esenciales para el Contrato, o tengan una importancia tal que las partes no hubieran celebrado el contrato si hubieran sabido que esas disposiciones no serían válidas, o bien en supuestos en los que las disposiciones restantes darían lugar a dificultades inaceptables para cualquiera de las partes.</p>\r\n      <h3 id=\"ley-aplicable\">Ley aplicable</h3>\r\n      <p>Las presentes Condiciones se rigen por las leyes del lugar en el que tenga su sede el Titular, según lo declarado en la sección correspondiente del presente documento, sin tener en cuenta los principios sobre conflictos de leyes.</p>\r\n      <h4 id=\"excepcion-para-consumidores-europeos\">Excepción para Consumidores europeos</h4>\r\n      <p>No obstante, sin perjuicio de lo anterior, si el Usuario entra en la categoría de Consumidor europeo y tiene su residencia habitual en un país cuyo Derecho establezca unos estándares de protección al consumidor más elevados, prevalecerán dichos estándares más elevados.</p>\r\n      <h3 id=\"fuero-jurisdiccional\">Fuero jurisdiccional</h3>\r\n      <p>La competencia exclusiva para resolver cualquier controversia resultante de las presentes Condiciones o relacionada con estas corresponde a los tribunales del lugar en el que se encuentre el domicilio social del Titular, como se indica en la sección correspondiente del presente documento.</p>\r\n      <h4 id=\"excepcion-para-consumidores-europeos\">Excepción para Consumidores europeos</h4>\r\n      <p>Las disposiciones anteriores no serán aplicables a los Usuarios que entren en la categoría de Consumidores europeos, ni a los Consumidores residentes en Suiza, Noruega o Islandia.</p>\r\n\r\n      <h2 id=\"resolucion-de-conflictos\">Resolución de conflictos</h2><h3 id=\"resolucion-amistosa-de-conflictos\">Resolución amistosa de conflictos </h3>\r\n      <p>Los Usuarios podrán plantear cualquier conflicto al Titular, que tratará de resolverlo de forma amistosa.</p>\r\n\r\n      <p>Aunque el derecho de los Usuarios a emprender acciones legales no se verá afectado en ningún momento, en caso de producirse una controversia relativa a la utilización de esta Aplicación o del Servicio, se ruega a los Usuarios que contacten con el Titular mediante los datos de contacto indicados en el presente documento.</p>\r\n      <p>El Usuario podrá formular su queja incluyendo una breve descripción y, si es relevante, los datos del pedido, la compra o la cuenta a los que se refiere, enviándolos a la dirección de correo electrónico del Titular especificada en el presente documento.</p>\r\n\r\n      <p>El Titular tramitará la queja sin demoras indebidas y en el plazo de 30 días desde su recepción.</p>\r\n      <h3 id=\"resolucion-de-conflictos-en-linea-para-consumidores\">Resolución de conflictos en línea para Consumidores</h3>\r\n      <p>La Comisión Europea ha establecido una plataforma en línea para la resolución alternativa de conflictos que facilita un método extrajudicial para resolver cualquier conflicto relacionado con las ventas en línea y los contratos de servicios, o resultante de estos.</p>\r\n\r\n      <p>En consecuencia, cualquier Consumidor europeo podrá utilizar dicha plataforma para resolver los conflictos resultantes de contratos celebrados en línea. La plataforma es <a href=\"http://ec.europa.eu/consumers/odr/\" target=\"_blank\" rel=\"noopener\">accesible a través del siguiente enlace</a>.</p>\r\n\r\n      <div class=\"one_line_col\">\r\n        <div class=\"box_primary box_10 definitions expand collapsed\">\r\n          <h3 class=\"expand-click w_icon_24 icon_ribbon\">\r\n            Definiciones y referencias legales\r\n          </h3>\r\n          <div class=\"expand-content\" style=\"display: none;\">\r\n            <h4>Esta Aplicación (o esta Aplicación)</h4>\r\n            <p>La propiedad que permite la prestación del Servicio.</p>\r\n            <h4>Contrato</h4>\r\n            <p>Cualquier relación jurídica o contractualmente vinculante establecida entre el Titular y el Usuario, regulada por las presentes Condiciones.</p>\r\n            <h4>Usuario profesional</h4>\r\n            <p>Cualquier Usuario que no entre en la categoría de Consumidor.</p>\r\n            <h4>Comprador</h4>\r\n            <p>Designa a cualquier Usuario que adquiera bienes o contrate servicios de los Vendedores a través de esta Aplicación, con independencia de si la transacción efectivamente se produce o no a través de esta Aplicación.</p>\r\n            <h4>Europeo (o Europa)</h4>\r\n            <p>Es aplicable cuando un Usuario se encuentra físicamente presente o tiene su domicilio social dentro del territorio de la Unión Europea, con independencia de su nacionalidad.</p>\r\n            <h4>Formulario modelo de desistimiento</h4>\r\n            <p><em>*A la atención de:</em></p>\r\n\r\n            <p><em>Agrari - España</em><br>\r\n              <em>info@agrari.es</em></p>\r\n\r\n            <p><em>Yo/Nosotros comunico/comunicamos mi/nuestra intención de desistir de mi/nuestro contrato de compraventa de los siguientes bienes/para la prestación del siguiente servicio:</em>.</p>\r\n\r\n            <p><em>_____________________________________________ (insertar una descripción de los bienes/servicios a los que se refiere el desistimiento correspondiente)</em></p>\r\n\r\n            <ul>\r\n              <li><em>Pedido el: _____________________________________________ (inserte la fecha)</em></li>\r\n              <li><em>Recibido el: _____________________________________________ (inserte la fecha)</em></li>\r\n              <li><em>Nombre del/de los consumidor(es):_____________________________________________</em></li>\r\n              <li><em>Dirección del/de los consumidor(es):_____________________________________________</em></li>\r\n              <li><em>Fecha: _____________________________________________</em></li>\r\n            </ul>\r\n\r\n\r\n            <p><em>(firmar si se comunica este formulario en formato impreso)</em></p>\r\n            <h4>Titular (o Nosotros)</h4>\r\n            <p>Designa a la persona física o jurídica que proporciona esta Aplicación y/o el Servicio a los Usuarios.</p>\r\n            <h4>Producto</h4>\r\n            <p>Un bien o servicio disponibles para su compra o contratación a través de esta Aplicación, como por ejemplo bienes tangibles, archivos digitales, software, servicios de reservas, etc.</p>\r\n\r\n            <p>La venta de Productos puede formar parte del Servicio, según se define más arriba.</p>\r\n            <h4>Vendedor</h4>\r\n            <p>Designa a cualquier Usuario que venda bienes o preste servicios a los Compradores a través de esta Aplicación, con independencia de si la transacción efectivamente se produce o no a través de esta Aplicación.</p>\r\n            <h4>Servicio</h4>\r\n            <p>El servicio prestado por esta Aplicación según lo descrito en las presentes Condiciones y en esta Aplicación.</p>\r\n            <h4>Condiciones</h4>\r\n            <p>Todas las disposiciones aplicables a la utilización de esta Aplicación y/o del Servicio según lo descrito en el presente documento, incluyendo todos los demás documentos o acuerdos conexos y en sus versiones actualizadas vigentes en cada momento.</p>\r\n            <h4>Usuario (o Usted)</h4>\r\n            <p>Designa a cualquier persona física o jurídica que utilice esta Aplicación.</p>\r\n            <h4>Consumidor</h4>\r\n            <p>Cualquier Usuario que, siendo persona física, acceda a bienes o servicios para su uso personal, o de forma más general, que actúe con fines ajenos a su actividad económica, negocio, oficio o profesión.</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"expand-content\" style=\"display: block;\">\r\n        <h4>Esta Aplicación (o esta Aplicación)</h4>\r\n        <p>La propiedad que permite la prestación del Servicio.</p>\r\n        <h4>Contrato</h4>\r\n        <p>Cualquier relación jurídica o contractualmente vinculante establecida entre el Titular y el Usuario, regulada por las presentes Condiciones.</p>\r\n        <h4>Usuario profesional</h4>\r\n        <p>Cualquier Usuario que no entre en la categoría de Consumidor.</p>\r\n        <h4>Comprador</h4>\r\n        <p>Designa a cualquier Usuario que adquiera bienes o contrate servicios de los Vendedores a través de esta Aplicación, con independencia de si la transacción efectivamente se produce o no a través de esta Aplicación.</p>\r\n        <h4>Europeo (o Europa)</h4>\r\n        <p>Es aplicable cuando un Usuario se encuentra físicamente presente o tiene su domicilio social dentro del territorio de la Unión Europea, con independencia de su nacionalidad.</p>\r\n        <h4>Formulario modelo de desistimiento</h4>\r\n        <p><em>*A la atención de:</em></p>\r\n\r\n        <p><em>Agrari - España</em><br>\r\n          <em>info@agrari.es</em></p>\r\n\r\n        <p><em>Yo/Nosotros comunico/comunicamos mi/nuestra intención de desistir de mi/nuestro contrato de compraventa de los siguientes bienes/para la prestación del siguiente servicio:</em>.</p>\r\n\r\n        <p><em>_____________________________________________ (insertar una descripción de los bienes/servicios a los que se refiere el desistimiento correspondiente)</em></p>\r\n\r\n        <ul>\r\n          <li><em>Pedido el: _____________________________________________ (inserte la fecha)</em></li>\r\n          <li><em>Recibido el: _____________________________________________ (inserte la fecha)</em></li>\r\n          <li><em>Nombre del/de los consumidor(es):_____________________________________________</em></li>\r\n          <li><em>Dirección del/de los consumidor(es):_____________________________________________</em></li>\r\n          <li><em>Fecha: _____________________________________________</em></li>\r\n        </ul>\r\n\r\n\r\n        <p><em>(firmar si se comunica este formulario en formato impreso)</em></p>\r\n        <h4>Titular (o Nosotros)</h4>\r\n        <p>Designa a la persona física o jurídica que proporciona esta Aplicación y/o el Servicio a los Usuarios.</p>\r\n        <h4>Producto</h4>\r\n        <p>Un bien o servicio disponibles para su compra o contratación a través de esta Aplicación, como por ejemplo bienes tangibles, archivos digitales, software, servicios de reservas, etc.</p>\r\n\r\n        <p>La venta de Productos puede formar parte del Servicio, según se define más arriba.</p>\r\n        <h4>Vendedor</h4>\r\n        <p>Designa a cualquier Usuario que venda bienes o preste servicios a los Compradores a través de esta Aplicación, con independencia de si la transacción efectivamente se produce o no a través de esta Aplicación.</p>\r\n        <h4>Servicio</h4>\r\n        <p>El servicio prestado por esta Aplicación según lo descrito en las presentes Condiciones y en esta Aplicación.</p>\r\n        <h4>Condiciones</h4>\r\n        <p>Todas las disposiciones aplicables a la utilización de esta Aplicación y/o del Servicio según lo descrito en el presente documento, incluyendo todos los demás documentos o acuerdos conexos y en sus versiones actualizadas vigentes en cada momento.</p>\r\n        <h4>Usuario (o Usted)</h4>\r\n        <p>Designa a cualquier persona física o jurídica que utilice esta Aplicación.</p>\r\n        <h4>Consumidor</h4>\r\n        <p>Cualquier Usuario que, siendo persona física, acceda a bienes o servicios para su uso personal, o de forma más general, que actúe con fines ajenos a su actividad económica, negocio, oficio o profesión.</p>\r\n      </div>\r\n\r\n      <div class=\"iub_footer\">\r\n\r\n        <p>\r\n          Última revisión: 17 marzo 2021\r\n        </p>\r\n\r\n      </div> <!-- /footer -->\r\n\r\n    </div> <!-- /content -->\r\n  </div>\r\n</ion-content>\r\n");

/***/ }),

/***/ "zOgT":
/*!********************************************!*\
  !*** ./src/models/user/user-roles.enum.ts ***!
  \********************************************/
/*! exports provided: UserRoles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRoles", function() { return UserRoles; });
var UserRoles;
(function (UserRoles) {
    UserRoles[UserRoles["PRODUCER"] = 0] = "PRODUCER";
    UserRoles[UserRoles["USER"] = 1] = "USER";
    UserRoles[UserRoles["ADMIN"] = 2] = "ADMIN";
})(UserRoles || (UserRoles = {}));
/*export class UserRoleTools {
  getRouteFromRole(userRole: UserRoles): string{
    switch (userRole) {
      case UserRoles.FARMER:
        return
        break;
      case UserRoles.USER:
        break;
      default:

        break;
    }
  }
}*/


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var reflect_metadata__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reflect-metadata */ "mNvP");
/* harmony import */ var reflect_metadata__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(reflect_metadata__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ionic_pwa_elements_loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/pwa-elements/loader */ "2Zi2");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.log(err));
Object(_ionic_pwa_elements_loader__WEBPACK_IMPORTED_MODULE_5__["defineCustomElements"])(window);


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map