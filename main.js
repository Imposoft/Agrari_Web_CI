(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+PYi":
/*!*********************************************!*\
  !*** ./src/views/product/product.view.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9kdWN0LnZpZXcuc2NzcyJ9 */");

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

module.exports = __webpack_require__(/*! C:\Users\artur\Documents\GitHub\Agrari\Agrari\src\main.ts */"zUnb");


/***/ }),

/***/ "01kN":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/components/register-user/register-user.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form [formGroup]=\"registrationForm\">\r\n  <ion-item>\r\n    <ion-label position=\"floating\" type=\"text\">Nombre</ion-label>\r\n    <ion-input formControlName=\"name\"></ion-input>\r\n  </ion-item>\r\n  <ion-item>\r\n    <ion-label position=\"floating\" type=\"email\">Email</ion-label>\r\n    <ion-input formControlName=\"email\"></ion-input>\r\n  </ion-item>\r\n  <ion-item>\r\n    <ion-label position=\"floating\" type=\"password\">Contraseña</ion-label>\r\n    <ion-input formControlName=\"password\"></ion-input>\r\n  </ion-item>\r\n  <ion-item>\r\n    <ion-label position=\"floating\" type=\"email\">Telefono</ion-label>\r\n    <ion-input formControlName=\"phoneNumber\"></ion-input>\r\n  </ion-item>\r\n  <ion-item>\r\n    <ion-label position=\"stacked\" type=\"file\">Foto</ion-label>\r\n    <ion-input (click)=\"takePicture()\" readonly formControlName=\"picture\"> {{this.registrationForm.value.picture}} </ion-input>\r\n  </ion-item>\r\n  <ion-item>\r\n    <ion-label position=\"floating\" type=\"file\">Ubicación</ion-label>\r\n    <ion-input value=\"Valencia\" formControlName=\"location\"></ion-input>\r\n  </ion-item>\r\n  <ion-item>\r\n    <ion-checkbox slot=\"start\" formControlName=\"isFarmer\"></ion-checkbox>\r\n    <ion-label>Soy Productor/a</ion-label>\r\n  </ion-item>\r\n</form>\r\n<ion-row class=\"cardfooter\">\r\n  <ion-col>\r\n    <ion-button class=\"ion-float-right\" (click)=\"registerUser()\">Crear cuenta</ion-button>\r\n  </ion-col>\r\n</ion-row>\r\n<!--\r\n<div>\r\n  <form [formGroup]=\"registrationForm\">\r\n    <div class=\"form-check mb-2\">\r\n      <input class=\"form-check-input\" type=\"checkbox\" value=\"\" id=\"defaultCheck1\" formControlName=\"isFarmer\">\r\n      <label class=\"form-check-label\" for=\"defaultCheck1\">Soy agricultor</label>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"formGroupExampleInput\">Nombre</label>\r\n      <input type=\"text\" class=\"form-control\" id=\"formGroupExampleInput\" placeholder=\"Tu nombre\" formControlName=\"name\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"formGroupExampleInput2\">Email</label>\r\n      <input type=\"text\" class=\"form-control\" id=\"formGroupExampleInput2\" placeholder=\"tu_email@gmail.com\" formControlName=\"email\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"formGroupExampleInput2\">Contraseña</label>\r\n      <input type=\"text\" class=\"form-control\" id=\"formGroupExampleInput3\" placeholder=\"Contraseña\" formControlName=\"password\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"formGroupExampleInput2\">Telefono</label>\r\n      <input type=\"text\" class=\"form-control\" id=\"formGroupExampleInput4\" placeholder=\"Numero de telefono\" formControlName=\"phoneNumber\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"formGroupExampleInput2\">Foto</label>\r\n        <ion-button (click)=\"takePicture()\">Gelo</ion-button>\r\n      <input type=\"text\" class=\"form-control\" id=\"formGroupExampleInput5\" placeholder=\"Foto\" formControlName=\"picture\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"formGroupExampleInput2\">Ubicacion</label>\r\n      <input type=\"text\" class=\"form-control\" id=\"formGroupExampleInput6\" placeholder=\"Ubicacion\" formControlName=\"location\">\r\n    </div>\r\n  </form>\r\n  <div class=\"d-flex justify-content-end\">\r\n    <button class=\"d-flex justify-content-end btn btn-outline-primary m-2\" id=\"login\" (click)=\"registerUser()\">Crear cuenta</button>\r\n  </div>\r\n</div>\r\n-->\r\n");

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

/***/ "AM7J":
/*!*****************************************************!*\
  !*** ./src/views/product-list/product-list.view.ts ***!
  \*****************************************************/
/*! exports provided: ProductListView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductListView", function() { return ProductListView; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_product_list_view_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./product-list.view.html */ "qQ2r");
/* harmony import */ var _product_list_view_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product-list.view.scss */ "yyQP");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _models_product_product__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/product/product */ "rHSd");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/storage */ "Vaw3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_products_product_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/products/product.service */ "TYbz");









let ProductListView = class ProductListView {
    constructor(firestore, storage, router, route, productService) {
        this.firestore = firestore;
        this.storage = storage;
        this.router = router;
        this.route = route;
        this.productService = productService;
        this.productList = [];
        this.productImages = [];
        this.currentProduct = new _models_product_product__WEBPACK_IMPORTED_MODULE_5__["Product"]();
        this.route.params.subscribe(params => {
            if (params.userId) {
                this.pathId = params.userId;
                this.productList = [];
                this.productService.loadProductsByOwnerId(this.pathId).then(value => {
                    this.productList = value;
                    this.productList.sort(compare);
                });
            }
            else {
                this.productService.loadAllProducts().then(value => {
                    this.productList = value;
                    this.productList.sort(compare);
                });
            }
        });
    }
    ngOnInit() {
    }
};
ProductListView.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"] },
    { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_6__["AngularFireStorage"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] },
    { type: _services_products_product_service__WEBPACK_IMPORTED_MODULE_8__["ProductService"] }
];
ProductListView = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-product-list',
        template: _raw_loader_product_list_view_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_product_list_view_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ProductListView);

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

/***/ "AihG":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/views/statistics/statistics.view.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\r\n  <ion-card>\r\n    <ion-card-header>\r\n      <ion-card-title>Has facturado: {{anything.totalSaleAmount | currency:'EUR'}}</ion-card-title>\r\n      <ion-card-subtitle>Con un total de {{anything.totalOrders}} pedidos</ion-card-subtitle>\r\n    </ion-card-header>\r\n    <ion-card-content>\r\n      Tus productos mas vendidos:\r\n      <ion-list>\r\n        <ion-item *ngFor=\"let product of anything.productsOrdered\">\r\n          {{product.name}} x\r\n          {{product.productAmount}}\r\n        </ion-item>\r\n      </ion-list>\r\n    </ion-card-content>\r\n  </ion-card>\r\n</ion-content>\r\n");

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
    production: false
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
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.orderList = [];
        this.orderService.loadAllOrdersOfCurrentUser().then(value => {
            this.orderList = value;
            console.log(this.orderList);
            this.orderList.sort(compare);
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










let ProfileView = class ProfileView {
    constructor(router, route, firestore, afAuth, storage) {
        this.router = router;
        this.route = route;
        this.firestore = firestore;
        this.afAuth = afAuth;
        this.storage = storage;
        this.isFarmer = false;
        this.user = new _models_user_user_model__WEBPACK_IMPORTED_MODULE_4__["User"]();
        this.route.params.subscribe(params => {
            if (params.id) {
                this.pathId = params.id;
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
            else {
                this.afAuth.authState.subscribe(loggedUser => {
                    if (loggedUser) {
                        this.loggedId = loggedUser.uid;
                        this.pathId = loggedUser.uid;
                        this.userCollection = firestore.doc('profiles/' + this.pathId);
                        this.userCollection.valueChanges({ idField: '_id' }).subscribe(user => {
                            this.user = this.user.convertFromDTO(user);
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
};
ProfileView.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestore"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__["AngularFireAuth"] },
    { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_8__["AngularFireStorage"] }
];
ProfileView = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-profile',
        template: _raw_loader_profile_view_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_profile_view_sass__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ProfileView);



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






let CartView = class CartView {
    constructor(cartService, productService) {
        this.cartService = cartService;
        this.productService = productService;
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
    }
};
CartView.ctorParameters = () => [
    { type: _services_order_cart_service_service__WEBPACK_IMPORTED_MODULE_4__["CartServiceService"] },
    { type: _services_products_product_service__WEBPACK_IMPORTED_MODULE_5__["ProductService"] }
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
    checkoutCart() {
        console.log(this.currentCart);
        if (this.currentCart.ordersList.length > 0) {
            this.currentCart.ordersList.forEach(value => {
                const newOrder = this.orderService.createOrderEntity(value);
                this.uploadOrder(newOrder);
            });
        }
    }
    uploadOrder(order) {
        const orderCollection = this.firestore.collection('orders');
        orderCollection.add(order);
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
/* harmony import */ var _models_cart_product_order__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../models/cart/product-order */ "UU4C");
/* harmony import */ var _services_order_cart_service_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/order/cart-service.service */ "LD/N");
/* harmony import */ var _services_products_product_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../services/products/product.service */ "TYbz");












let ProductView = class ProductView {
    constructor(router, route, firestore, afAuth, storage, cartService, productService) {
        this.router = router;
        this.route = route;
        this.firestore = firestore;
        this.afAuth = afAuth;
        this.storage = storage;
        this.cartService = cartService;
        this.productService = productService;
        this.isOwner = false;
        this.selectVal = 0;
        this.product = new _models_product_product__WEBPACK_IMPORTED_MODULE_8__["Product"]();
        this.productOrder = new _models_cart_product_order__WEBPACK_IMPORTED_MODULE_9__["ProductOrder"]();
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
    ngOnInit() {
    }
    addToCart() {
        // TODO: Quitar el boton de agregar y poner uno de eliminar del carrito
        this.cartService.addProductToCart(this.productOrder);
    }
};
ProductView.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__["AngularFireAuth"] },
    { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_7__["AngularFireStorage"] },
    { type: _services_order_cart_service_service__WEBPACK_IMPORTED_MODULE_10__["CartServiceService"] },
    { type: _services_products_product_service__WEBPACK_IMPORTED_MODULE_11__["ProductService"] }
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
        // @Output()
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
            }
        });
    }
    prepareOrder() {
        this.orderService.markOrderAsPreparedById(this.order.id).then(value => {
            if (value) {
                this.order.status = _models_order_order__WEBPACK_IMPORTED_MODULE_4__["OrderStatusEnum"].Preparado;
            }
        });
    }
    deliveredOrder() {
        this.orderService.markOrderAsDeliveredById(this.order.id).then(value => {
            if (value) {
                this.order.status = _models_order_order__WEBPACK_IMPORTED_MODULE_4__["OrderStatusEnum"].Preparado;
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
    order: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
OrderItemComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-order-item',
        template: _raw_loader_order_item_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_order_item_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], OrderItemComponent);



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
/* harmony default export */ __webpack_exports__["default"] = ("<!-- NAV BAR USER -->\r\n<ion-tabs *ngIf=\"!isFarmer && isLogged\">\r\n  <ion-tab-bar slot=\"bottom\">\r\n    <ion-tab-button [routerLink]=\"'/orders'\">\r\n      <ion-icon name=\"cube-outline\"></ion-icon>\r\n      <ion-label>Pedidos</ion-label>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button [routerLink]=\"'/profiles'\">\r\n      <ion-icon name=\"list-outline\"></ion-icon>\r\n      <ion-label>Productores</ion-label>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button [routerLink]=\"'/products'\">\r\n      <ion-icon name=\"search-outline\"></ion-icon>\r\n      <ion-label>Buscar</ion-label>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button [routerLink]=\"'/cart'\">\r\n      <ion-icon name=\"cart-outline\"></ion-icon>\r\n      <ion-label>Carrito</ion-label>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button [routerLink]=\"'/profile'\">\r\n      <ion-icon name=\"person-outline\"></ion-icon>\r\n      <ion-label>Perfil</ion-label>\r\n    </ion-tab-button>\r\n  </ion-tab-bar>\r\n</ion-tabs>\r\n<!-- NAV BAR FARMER -->\r\n<ion-tabs *ngIf=\"isFarmer && isLogged\">\r\n  <ion-tab-bar slot=\"bottom\">\r\n    <ion-tab-button [routerLink]=\"'/products/' + this.userId\">\r\n      <ion-icon name=\"list-outline\"></ion-icon>\r\n      <ion-label>Productos</ion-label>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button [routerLink]=\"'/statistics/' + this.userId\">\r\n      <ion-icon name=\"stats-chart-outline\"></ion-icon>\r\n      <ion-label>Estadisticas</ion-label>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button [routerLink]=\"'/productForm'\">\r\n      <ion-icon name=\"add-outline\"></ion-icon>\r\n      <ion-label>Crear</ion-label>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button [routerLink]=\"'/orders'\">\r\n      <ion-icon name=\"cube-outline\"></ion-icon>\r\n      <ion-label>Pedidos</ion-label>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button [routerLink]=\"'profile'\">\r\n      <ion-icon name=\"person-outline\"></ion-icon>\r\n      <ion-label>Perfil</ion-label>\r\n    </ion-tab-button>\r\n  </ion-tab-bar>\r\n</ion-tabs>\r\n");

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






let ProductService = class ProductService {
    constructor(afAuth, firestore, storage) {
        this.afAuth = afAuth;
        this.firestore = firestore;
        this.storage = storage;
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
    { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_5__["AngularFireStorage"] }
];
ProductService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ProductService);



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
        if (this.productAmount > 0) {
            this.productAmount--;
        }
        else {
            this.productAmount = 0;
        }
    }
    add() {
        this.productAmount++;
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
/* harmony default export */ __webpack_exports__["default"] = ("<div>\r\n  <form [formGroup]=\"registrationForm\" class=\"mx-auto\">\r\n    <div class=\"form-group\">\r\n      <label>Email:</label>\r\n      <input\r\n        type=\"text\"\r\n        class=\"form-control\"\r\n        placeholder=\"miemail@mail.com\"\r\n        formControlName=\"email\"\r\n        id=\"emailInput\"\r\n      />\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label>Contraseña:</label>\r\n      <div class=\"input-group\">\r\n          <input\r\n            type=\"password\"\r\n            name=\"password\"\r\n            autocomplete=\"on\"\r\n            class=\"form-control\"\r\n            formControlName=\"password\"\r\n            id=\"passwordInput\"\r\n            [type]=\"hide ? 'password' : 'text'\"\r\n          />\r\n        <span class=\"input-group-append\">\r\n          <div class=\"input-group-text\">\r\n          </div>\r\n        </span>\r\n      </div>\r\n    </div>\r\n  </form>\r\n  <div class=\"d-flex justify-content-end\">\r\n    <button class=\"d-flex justify-content-end btn btn-outline-primary m-2\" id=\"login\" (click)=\"logIn()\">Iniciar sesion</button>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-app>\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>AGRARI</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content>\n    <ion-router-outlet></ion-router-outlet>\n    <app-navigation-bar></app-navigation-bar>\n  </ion-content>\n</ion-app>\n");

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








let ProfilesService = class ProfilesService {
    constructor(afAuth, router, firestore, storage) {
        this.afAuth = afAuth;
        this.router = router;
        this.firestore = firestore;
        this.storage = storage;
        this.userCollection = this.firestore.collection('profiles');
    }
    loadUserById(userId) {
        this.userCollection.doc(userId);
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
    { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_7__["AngularFireStorage"] }
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
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <ion-list>\n    <ion-list-header>\n      Productores:\n    </ion-list-header>\n\n    <ion-item *ngFor=\"let user of profileList\">\n      <ion-avatar slot=\"start\">\n        <img [src]=\"user.picture\">\n      </ion-avatar>\n      <ion-label>\n        <h2>{{user.name}}</h2>\n      </ion-label>\n      <ion-button type=\"button\" [routerLink]=\"'/profile/' + user.id\">\n        Abrir\n      </ion-button>\n    </ion-item>\n  </ion-list>\n</ion-content>\n");

/***/ }),

/***/ "Yh7j":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/views/profile/profile.view.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content class=\"ion-padding\">\r\n  <ion-grid>\r\n    <ion-row class=\"ion-align-items-end\">\r\n      <ion-col size=\"3\">\r\n        <ion-avatar>\r\n          <img [src]=\"this.profileImage\">\r\n        </ion-avatar>\r\n      </ion-col>\r\n      <ion-col size=\"9\">\r\n        <ion-text class=\"ion-padding\">\r\n          <h2 class=\"ion-no-margin\">\r\n            {{this.user.name}}\r\n          </h2>\r\n        </ion-text>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n  <ion-button *ngIf=\"isFarmer\" [routerLink]=\"'/products/' + this.user.id\">Productos</ion-button>\r\n\r\n  <button (click)=\"logout()\" [routerLink]=\"'/login'\" type=\"button\" class=\"btn btn-danger\">LOGOUT</button>\r\n</ion-content>\r\n\r\n");

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
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_login_user_login_user_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/login-user/login-user.component */ "vFr8");
/* harmony import */ var _views_login_login_view__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../views/login/login.view */ "BfzC");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _components_register_user_register_user_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/register-user/register-user.component */ "bB5R");
/* harmony import */ var _components_navigation_bar_navigation_bar_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/navigation-bar/navigation-bar.component */ "PnrI");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/fire/storage */ "Vaw3");
/* harmony import */ var _views_profile_profile_view__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../views/profile/profile.view */ "G59Y");
/* harmony import */ var _views_product_form_product_form_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../views/product-form/product-form.component */ "wMDc");
/* harmony import */ var _pipes_enum_to_array_pipe__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../pipes/enum-to-array.pipe */ "m4/V");
/* harmony import */ var _views_product_product_view__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../views/product/product.view */ "P3F1");
/* harmony import */ var _views_product_list_product_list_view__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../views/product-list/product-list.view */ "AM7J");
/* harmony import */ var _views_profile_list_profile_list_view__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../views/profile-list/profile-list.view */ "50wC");
/* harmony import */ var _views_cart_cart_view__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../views/cart/cart.view */ "IwNu");
/* harmony import */ var _components_cart_item_cart_item_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../components/cart-item/cart-item.component */ "GV5D");
/* harmony import */ var _views_order_list_order_list_view__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../views/order-list/order-list.view */ "DPVA");
/* harmony import */ var _components_order_item_order_item_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../components/order-item/order-item.component */ "Q/nm");
/* harmony import */ var _views_statistics_statistics_view__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../views/statistics/statistics.view */ "E9lE");



























let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            /*  VIEWS */
            _views_login_login_view__WEBPACK_IMPORTED_MODULE_11__["LoginView"],
            _views_profile_profile_view__WEBPACK_IMPORTED_MODULE_16__["ProfileView"],
            _views_product_product_view__WEBPACK_IMPORTED_MODULE_19__["ProductView"],
            _views_product_list_product_list_view__WEBPACK_IMPORTED_MODULE_20__["ProductListView"],
            _views_cart_cart_view__WEBPACK_IMPORTED_MODULE_22__["CartView"],
            _views_order_list_order_list_view__WEBPACK_IMPORTED_MODULE_24__["OrderListView"],
            _views_statistics_statistics_view__WEBPACK_IMPORTED_MODULE_26__["StatisticsView"],
            /* COMPONENTS */
            _components_register_user_register_user_component__WEBPACK_IMPORTED_MODULE_13__["RegisterUserComponent"],
            _components_navigation_bar_navigation_bar_component__WEBPACK_IMPORTED_MODULE_14__["NavigationBarComponent"],
            _views_product_form_product_form_component__WEBPACK_IMPORTED_MODULE_17__["ProductFormComponent"],
            _views_profile_list_profile_list_view__WEBPACK_IMPORTED_MODULE_21__["ProfileListView"],
            _components_login_user_login_user_component__WEBPACK_IMPORTED_MODULE_10__["LoginUserComponent"], _components_cart_item_cart_item_component__WEBPACK_IMPORTED_MODULE_23__["CartItemComponent"], _components_order_item_order_item_component__WEBPACK_IMPORTED_MODULE_25__["OrderItemComponent"]],
        entryComponents: [],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"].forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_6__["AngularFireModule"].initializeApp(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_7__["environment"].firebaseConfig),
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__["AngularFirestoreModule"],
            _angular_fire_storage__WEBPACK_IMPORTED_MODULE_15__["AngularFireStorageModule"]],
        providers: [{ provide: _angular_common__WEBPACK_IMPORTED_MODULE_9__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_9__["HashLocationStrategy"] }, _pipes_enum_to_array_pipe__WEBPACK_IMPORTED_MODULE_18__["EnumToArrayPipe"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
    })
], AppModule);



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
    convertToDTO() {
        return Object(class_transformer__WEBPACK_IMPORTED_MODULE_1__["classToPlain"])(this);
    }
    convertFromDTO(userData) {
        return Object(class_transformer__WEBPACK_IMPORTED_MODULE_1__["plainToClass"])(User, userData);
    }
}


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












let RegisterUserComponent = class RegisterUserComponent {
    constructor(formBuilder, firestore, router, fireauth, storage) {
        this.formBuilder = formBuilder;
        this.firestore = firestore;
        this.router = router;
        this.fireauth = fireauth;
        this.storage = storage;
        this.userProfileCollection = firestore.collection('profiles');
    }
    ngOnInit() {
        this.registrationForm = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            phoneNumber: ['', []],
            picture: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            location: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            isFarmer: ['', []],
        });
    }
    registerUser() {
        const userToCreate = new _models_user_user_model__WEBPACK_IMPORTED_MODULE_8__["User"]();
        userToCreate.name = this.registrationForm.value.name;
        userToCreate.email = this.registrationForm.value.email;
        userToCreate.location = this.registrationForm.value.location;
        userToCreate.phoneNumber = this.registrationForm.value.phoneNumber;
        userToCreate.role = this.registrationForm.value.isFarmer ? _models_user_user_roles_enum__WEBPACK_IMPORTED_MODULE_10__["UserRoles"].PRODUCER : _models_user_user_roles_enum__WEBPACK_IMPORTED_MODULE_10__["UserRoles"].USER;
        this.fireauth.createUserWithEmailAndPassword(userToCreate.email, this.registrationForm.value.password)
            .then((user) => {
            this.uploadPictureToProfile(this.profilePicture, user.user.uid).then(a => {
                userToCreate.picture = this.registrationForm.value.picture;
                user.user.updateProfile({ photoURL: userToCreate.picture });
                this.userProfileCollection.doc(user.user.uid)
                    .set(userToCreate.convertToDTO())
                    .catch(error => {
                    console.log('Something went wrong with added user to firestore: ', error);
                }).then(value => this.changeView(user.user.uid));
            });
        });
    }
    changeView(uid) {
        this.router.navigate(['profile', uid]);
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
                quality: 90,
                allowEditing: true,
                resultType: _capacitor_core__WEBPACK_IMPORTED_MODULE_9__["CameraResultType"].Base64,
                webUseInput: true,
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
    { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_11__["AngularFireStorage"] }
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
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\r\n  <app-cart-item *ngFor=\"let product of cart\" [product]=\"product\" (productEvent)=\"cartItemEvent($event)\"></app-cart-item>\r\n  <ion-button *ngIf=\"cart.length > 0\" (click)=\"checkout()\">\r\n    Comprar\r\n  </ion-button>\r\n  <ion-text *ngIf=\"cart.length <= 0\">\r\n    Tu carrito esta vacio, añade un producto para comprar.\r\n  </ion-text>\r\n</ion-content>\r\n");

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
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content class=\"ion-padding\">\r\n  <ion-grid>\r\n    <ion-row class=\"ion-align-items-end\">\r\n      <ion-col size=\"3\">\r\n        <ion-img [src]=\"this.product.picture\"></ion-img>\r\n      </ion-col>\r\n      <ion-col size=\"9\">\r\n        <ion-text class=\"ion-padding\">\r\n          <h2 class=\"ion-no-margin\">\r\n            {{this.product.name}}\r\n            {{this.product.description}}\r\n          </h2>\r\n          <ion-button type=\"button\" *ngIf=\"isOwner\" [routerLink]=\"'/productForm/' + product.id\">\r\n            Modificar\r\n          </ion-button>\r\n        </ion-text>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row style=\"width: fit-content\">\r\n      <ion-button type=\"button\" [color]=\"'danger'\" (click)=\"productOrder.reduce()\">-</ion-button>\r\n      <ion-input type=\"number\" readonly=\"true\" [value]=\"productOrder.productAmount\" style=\"width: 50px\"[min]=\"0\"></ion-input>\r\n      <ion-button type=\"button\" [color]=\"'success'\" (click)=\"productOrder.add()\">+</ion-button>\r\n    </ion-row>\r\n    {{productOrder.productAmount * productOrder.priceByEach | currency:'EUR'}}\r\n    <ion-button type=\"button\" (click)=\"addToCart()\">\r\n      <ion-icon name=\"bag-add-outline\"></ion-icon>\r\n    </ion-button>\r\n  </ion-grid>\r\n</ion-content>\r\n");

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
/* harmony default export */ __webpack_exports__["default"] = ("<ion-card>\r\n  <ion-card-header>\r\n    <ion-card-title *ngIf=\"isFarmer\">\r\n      Pedido de: {{orderUser.name}}\r\n    </ion-card-title>\r\n    <ion-card-subtitle>\r\n      Fecha: {{order.creationDate.seconds * 1000 | date:'yyyy/MM/dd h:mm:ss a'}}\r\n    </ion-card-subtitle>\r\n  </ion-card-header>\r\n  <ion-card-content style=\"padding-bottom: 0px !important;\">\r\n    <ion-label>\r\n      Productos pedidos:\r\n    </ion-label>\r\n    <ion-list>\r\n      <ion-item *ngFor=\"let product of order.orderedItems\"> {{product?.product?.name}} x {{product.productAmount}} </ion-item>\r\n      <!-- <div *ngFor=\"let product of order.orderedItems\"> {{product.product.name}}</div>-->\r\n    </ion-list>\r\n  </ion-card-content>\r\n  <ion-row>\r\n    <ion-col class=\"ion-padding-bottom\">\r\n      <div>Precio final: {{finalPrice | currency:'EUR'}}</div>\r\n\r\n      <div *ngIf=\"order.status == 'Preparado'\">✔️Pedido preparado | Recogida el DD/MM a partir de las HH:MM en UPV?</div>\r\n      <div *ngIf=\"order.status == 'Cancelado'\">❌️Pedido cancelado</div>\r\n      <div *ngIf=\"order.status == 'Entregado'\">📦 Pedido entregado</div>\r\n      <!-- Farmer Options -->\r\n      <div *ngIf=\"isFarmer\">\r\n        <ion-button *ngIf=\"order.status !== 'Preparado' && order.status !== 'Cancelado' && order.status !== 'Entregado'\" (click)=\"prepareOrder()\">Marcar como preparado</ion-button>\r\n        <ion-button *ngIf=\"order.status == 'Preparado'\" (click)=\"deliveredOrder()\">Marcar como entregado</ion-button>\r\n        <ion-button *ngIf=\"order.status !== 'Cancelado' && order.status !== 'Entregado'\" (click)=\"cancelOrder()\">Cancelar</ion-button>\r\n      </div>\r\n      <!-- User Options -->\r\n      <div *ngIf=\"!isFarmer\">\r\n        <ion-button *ngIf=\"order.status !== 'Cancelado' && order.status !=='Preparado' && order.status !== 'Entregado'\" (click)=\"cancelOrder()\">Cancelar</ion-button>\r\n      </div>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-card>\r\n");

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
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content fullscreen>\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title *ngIf=\"isLogin\">Iniciar Sesión</ion-card-title>\n      <ion-card-title *ngIf=\"!isLogin\">Registrarse</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <app-login-user *ngIf=\"isLogin\"></app-login-user>\n      <app-register-user *ngIf=\"!isLogin\"></app-register-user>\n    </ion-card-content>\n  </ion-card>\n  <ion-button *ngIf=\"isLogin\" (click)=\"isLogin=!isLogin\" class=\"ion-float-right\">No tengo cuenta</ion-button>\n  <ion-button *ngIf=\"!isLogin\" (click)=\"isLogin=!isLogin\" class=\"ion-float-right\">Ya tengo cuenta</ion-button>\n</ion-content>\n");

/***/ }),

/***/ "pJeZ":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/views/product-form/product-form.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content fullscreen>\n  <form [formGroup]=\"productForm\" (submit)=\"updateProduct()\">\n    <ion-item>\n      <ion-label position=\"floating\" type=\"text\">Nombre del producto</ion-label>\n      <ion-input formControlName=\"name\" placeholder=\"Patata\" [value]=\"product.name\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\" type=\"text\">Descripcion</ion-label>\n      <ion-input formControlName=\"description\" placeholder=\"La mas fuerte del campo\" [value]=\"product.description\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\" type=\"number\">Precio €</ion-label>\n      <ion-input formControlName=\"price\" placeholder=\"10\" [value]=\"product.price\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Tipo de Unidad</ion-label>\n      <ion-select value=\"0\" ok-text=\"Aceptar\" cancel-text=\"Cancelar\" formControlName=\"unit\" [value]=\"product.unit\">\n        <ion-select-option *ngFor=\"let unit of optionslist; let i = index\" [value]=\"i\"> {{unit}} </ion-select-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label>Categoria</ion-label>\n      <ion-select value=\"0\" ok-text=\"Aceptar\" cancel-text=\"Cancelar\" formControlName=\"category\" [value]=\"product.category\">\n        <ion-select-option *ngFor=\"let category of categorylist; let i = index\" [value]=\"i\"> {{category}} </ion-select-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"stacked\" type=\"file\">Foto</ion-label>\n      <ion-input (click)=\"takePicture()\" readonly formControlName=\"picture\" [value]=\"product.picture\"></ion-input>\n    </ion-item>\n    <ion-item *ngIf=\"product.id\">\n      <ion-checkbox slot=\"start\" formControlName=\"stock\" [checked]=\"product.stock\"></ion-checkbox>\n      <ion-label>En stock</ion-label>\n    </ion-item>\n  </form>\n  <ion-row class=\"cardfooter\">\n    <ion-col>\n      <ion-button *ngIf=\"!product.id\" class=\"ion-float-right\" (click)=\"createProduct()\" type=\"button\">\n        <div>Crear</div>\n      </ion-button>\n      <ion-button *ngIf=\"product.id\" class=\"ion-float-right\" (click)=\"updateProduct()\" type=\"button\">\n        <div *ngIf=\"product.id\">Modificar</div>\n      </ion-button>\n    </ion-col>\n  </ion-row>\n</ion-content>\n");

/***/ }),

/***/ "qQ2r":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/views/product-list/product-list.view.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\r\n  <ion-list>\r\n    <ion-list-header>\r\n      Productos:\r\n    </ion-list-header>\r\n\r\n    <ion-item *ngFor=\"let product of productList\">\r\n      <!-- Vista si hay stock -->\r\n      <div *ngIf=\"product.stock\" [routerLink]=\"'/product/' + product.id\" style=\"width: 100%;\">\r\n        <ion-avatar slot=\"start\">\r\n          <img [src]=\"product.picture\" [ngStyle]=\"!product.stock ? { '-webkit-filter': 'grayscale(100%)', 'filter': 'grayscale(100%)'} : {}\">\r\n        </ion-avatar>\r\n        <ion-label>\r\n          <h2>{{product.name}}</h2>\r\n          <h3>{{product.description}}</h3>\r\n        </ion-label>\r\n        <ion-label *ngIf=\"!product.stock\" color=\"light\">Sin stock</ion-label>\r\n      </div>\r\n\r\n      <!-- Vista si no hay stock -->\r\n      <div *ngIf=\"!product.stock\" style=\"width: 100%;\">\r\n        <ion-avatar slot=\"start\">\r\n          <img [src]=\"product.picture\" [ngStyle]=\"{ '-webkit-filter': 'grayscale(100%)', 'filter': 'grayscale(100%)'}\">\r\n        </ion-avatar>\r\n        <ion-label>\r\n          <h2>{{product.name}}</h2>\r\n          <h3>{{product.description}}</h3>\r\n        </ion-label>\r\n        <ion-badge color=\"danger\" slot=\"end\">Sin stock</ion-badge>\r\n      </div>\r\n    </ion-item>\r\n  </ion-list>\r\n</ion-content>\r\n");

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
/* harmony default export */ __webpack_exports__["default"] = ("<ion-item>\r\n  <ion-label>\r\n    {{product.product.name}} x{{product.productAmount}}\r\n  </ion-label>\r\n  <ion-button type=\"button\" [color]=\"'danger'\" (click)=\"product.reduce()\">-</ion-button>\r\n  <ion-button type=\"button\" [color]=\"'success'\" (click)=\"product.add()\">+</ion-button>\r\n  <ion-button (click)=\"removeFromCart()\">\r\n    <ion-icon name=\"trash-outline\"></ion-icon>\r\n  </ion-button>\r\n</ion-item>\r\n");

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









let LoginUserComponent = class LoginUserComponent {
    constructor(fb, auth, router, route) {
        this.fb = fb;
        this.auth = auth;
        this.router = router;
        this.route = route;
        this._error = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        this.errorMessage = '';
        this.hide = true;
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
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] }
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
/* harmony import */ var _views_product_list_product_list_view__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../views/product-list/product-list.view */ "AM7J");
/* harmony import */ var _views_profile_list_profile_list_view__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../views/profile-list/profile-list.view */ "50wC");
/* harmony import */ var _views_cart_cart_view__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../views/cart/cart.view */ "IwNu");
/* harmony import */ var _views_order_list_order_list_view__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../views/order-list/order-list.view */ "DPVA");
/* harmony import */ var _views_statistics_statistics_view__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../views/statistics/statistics.view */ "E9lE");












const routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: _views_login_login_view__WEBPACK_IMPORTED_MODULE_3__["LoginView"] },
    { path: 'profile', component: _views_profile_profile_view__WEBPACK_IMPORTED_MODULE_4__["ProfileView"] },
    { path: 'profile/:id', component: _views_profile_profile_view__WEBPACK_IMPORTED_MODULE_4__["ProfileView"] },
    { path: 'profiles', component: _views_profile_list_profile_list_view__WEBPACK_IMPORTED_MODULE_8__["ProfileListView"] },
    { path: 'profiles/:isFarmer', component: _views_profile_list_profile_list_view__WEBPACK_IMPORTED_MODULE_8__["ProfileListView"] },
    { path: 'productForm', component: _views_product_form_product_form_component__WEBPACK_IMPORTED_MODULE_5__["ProductFormComponent"] },
    { path: 'productForm/:id', component: _views_product_form_product_form_component__WEBPACK_IMPORTED_MODULE_5__["ProductFormComponent"] },
    { path: 'products', component: _views_product_list_product_list_view__WEBPACK_IMPORTED_MODULE_7__["ProductListView"] },
    { path: 'products/:userId', component: _views_product_list_product_list_view__WEBPACK_IMPORTED_MODULE_7__["ProductListView"] },
    { path: 'product/:id', component: _views_product_product_view__WEBPACK_IMPORTED_MODULE_6__["ProductView"] },
    { path: 'cart', component: _views_cart_cart_view__WEBPACK_IMPORTED_MODULE_9__["CartView"] },
    { path: 'orders', component: _views_order_list_order_list_view__WEBPACK_IMPORTED_MODULE_10__["OrderListView"] },
    { path: 'statistics', component: _views_statistics_statistics_view__WEBPACK_IMPORTED_MODULE_11__["StatisticsView"] },
    { path: 'statistics/:id', component: _views_statistics_statistics_view__WEBPACK_IMPORTED_MODULE_11__["StatisticsView"] },
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












let ProductFormComponent = class ProductFormComponent {
    constructor(enumToArrayPipe, formBuilder, router, route, fireauth, firestore, storage) {
        this.enumToArrayPipe = enumToArrayPipe;
        this.formBuilder = formBuilder;
        this.router = router;
        this.route = route;
        this.fireauth = fireauth;
        this.firestore = firestore;
        this.storage = storage;
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
            unit: ['', []],
            picture: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]],
            stock: ['',],
            category: ['',],
        });
    }
    takePicture() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield _capacitor_core__WEBPACK_IMPORTED_MODULE_6__["Camera"].getPhoto({
                quality: 90,
                allowEditing: true,
                resultType: _capacitor_core__WEBPACK_IMPORTED_MODULE_6__["CameraResultType"].Base64,
                webUseInput: true,
            }).then(value => {
                this.productForm.value.picture = 'Foto cargada';
                this.productPicture = value.base64String;
            });
        });
    }
    createProduct() {
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
    updateProduct() {
        this.product.name = this.productForm.value.name;
        this.product.description = this.productForm.value.description;
        this.product.price = this.productForm.value.price;
        this.product.unit = this.productForm.value.unit;
        this.product.category = this.productForm.value.category;
        this.product.stock = this.productForm.value.stock ? true : false;
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
};
ProductFormComponent.ctorParameters = () => [
    { type: _pipes_enum_to_array_pipe__WEBPACK_IMPORTED_MODULE_5__["EnumToArrayPipe"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__["ActivatedRoute"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__["AngularFireAuth"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_9__["AngularFirestore"] },
    { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_10__["AngularFireStorage"] }
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
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\r\n  <app-order-item *ngFor=\"let order of orderList\" [order]=\"order\"></app-order-item>\r\n</ion-content>\r\n\r\n");

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

/***/ "yyQP":
/*!*******************************************************!*\
  !*** ./src/views/product-list/product-list.view.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9kdWN0LWxpc3Qudmlldy5zY3NzIn0= */");

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