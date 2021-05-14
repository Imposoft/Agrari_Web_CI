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
/* harmony default export */ __webpack_exports__["default"] = ("<form [formGroup]=\"registrationForm\">\r\n  <ion-item>\r\n    <ion-label position=\"floating\" type=\"text\">Nombre *</ion-label>\r\n    <ion-input [required]=\"true\" formControlName=\"name\"></ion-input>\r\n  </ion-item>\r\n  <ion-item>\r\n    <ion-label position=\"floating\" type=\"email\">Email *</ion-label>\r\n    <ion-input [required]=\"true\" formControlName=\"email\"></ion-input>\r\n  </ion-item>\r\n  <ion-item>\r\n    <ion-label position=\"floating\" type=\"password\">Contraseña *</ion-label>\r\n    <ion-input [required]=\"true\" formControlName=\"password\" type=\"password\"></ion-input>\r\n  </ion-item>\r\n  <ion-item>\r\n    <ion-label position=\"floating\" type=\"email\">Telefono</ion-label>\r\n    <ion-input formControlName=\"phoneNumber\"></ion-input>\r\n  </ion-item>\r\n  <ion-item>\r\n    <ion-label position=\"stacked\" type=\"file\">Foto</ion-label>\r\n    <ion-input (click)=\"takePicture()\" readonly formControlName=\"picture\" [value]=\"registrationForm.value.picture\"></ion-input>\r\n  </ion-item>\r\n  <ion-item>\r\n    <ion-label position=\"floating\" type=\"text\">Ubicación</ion-label>\r\n    <ion-input value=\"Valencia\" formControlName=\"location\"></ion-input>\r\n  </ion-item>\r\n  <ion-item>\r\n    <ion-label>Soy Productor/a</ion-label>\r\n    <ion-checkbox slot=\"start\" formControlName=\"isFarmer\"></ion-checkbox>\r\n  </ion-item>\r\n  <ion-item text-wrap>\r\n    <ion-label text-wrap>Acepto recibir comunicaciones de Agrari como newsletters, encuestas o avisos de actualizaciones para ayudar con el desarrollo</ion-label>\r\n    <ion-checkbox slot=\"start\" formControlName=\"newsSub\"></ion-checkbox>\r\n  </ion-item>\r\n</form>\r\n<ion-text>Al crear tu cuenta aceptas la <a (click)=\"presentModal(1)\">Política de privacidad</a> y los <a (click)=\"presentModal(0)\">Términos y condiciones</a></ion-text>\r\n<ion-row class=\"cardfooter\">\r\n  <ion-col>\r\n    <ion-button class=\"ion-float-right\" (click)=\"registerUser()\" style=\"font-family: Montserrat\">Crear cuenta</ion-button>\r\n  </ion-col>\r\n</ion-row>\r\n<!--\r\n<div>\r\n  <form [formGroup]=\"registrationForm\">\r\n    <div class=\"form-check mb-2\">\r\n      <input class=\"form-check-input\" type=\"checkbox\" value=\"\" id=\"defaultCheck1\" formControlName=\"isFarmer\">\r\n      <label class=\"form-check-label\" for=\"defaultCheck1\">Soy agricultor</label>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"formGroupExampleInput\">Nombre</label>\r\n      <input type=\"text\" class=\"form-control\" id=\"formGroupExampleInput\" placeholder=\"Tu nombre\" formControlName=\"name\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"formGroupExampleInput2\">Email</label>\r\n      <input type=\"text\" class=\"form-control\" id=\"formGroupExampleInput2\" placeholder=\"tu_email@gmail.com\" formControlName=\"email\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"formGroupExampleInput2\">Contraseña</label>\r\n      <input type=\"text\" class=\"form-control\" id=\"formGroupExampleInput3\" placeholder=\"Contraseña\" formControlName=\"password\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"formGroupExampleInput2\">Telefono</label>\r\n      <input type=\"text\" class=\"form-control\" id=\"formGroupExampleInput4\" placeholder=\"Numero de telefono\" formControlName=\"phoneNumber\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"formGroupExampleInput2\">Foto</label>\r\n        <ion-button (click)=\"takePicture()\">Gelo</ion-button>\r\n      <input type=\"text\" class=\"form-control\" id=\"formGroupExampleInput5\" placeholder=\"Foto\" formControlName=\"picture\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"formGroupExampleInput2\">Ubicacion</label>\r\n      <input type=\"text\" class=\"form-control\" id=\"formGroupExampleInput6\" placeholder=\"Ubicacion\" formControlName=\"location\">\r\n    </div>\r\n  </form>\r\n  <div class=\"d-flex justify-content-end\">\r\n    <button class=\"d-flex justify-content-end btn btn-outline-primary m-2\" id=\"login\" (click)=\"registerUser()\">Crear cuenta</button>\r\n  </div>\r\n</div>\r\n-->\r\n");

/***/ }),

/***/ "1j7d":
/*!*************************************************!*\
  !*** ./src/models/chat/message/chat-message.ts ***!
  \*************************************************/
/*! exports provided: ChatMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatMessage", function() { return ChatMessage; });
/* harmony import */ var class_transformer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! class-transformer */ "LGct");

class ChatMessage {
    constructor() {
        this.creationDate = new Date();
    }
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }
    get creationDate() {
        return this._creationDate;
    }
    set creationDate(value) {
        this._creationDate = value;
    }
    get message() {
        return this._message;
    }
    set message(value) {
        this._message = value;
    }
    get ownerId() {
        return this._ownerId;
    }
    set ownerId(value) {
        this._ownerId = value;
    }
    get isRead() {
        return this._isRead;
    }
    set isRead(value) {
        this._isRead = value;
    }
    convertToDTO() {
        return Object(class_transformer__WEBPACK_IMPORTED_MODULE_0__["classToPlain"])(this);
    }
    convertFromDTO(message) {
        const messageEntity = Object(class_transformer__WEBPACK_IMPORTED_MODULE_0__["plainToClass"])(ChatMessage, message);
        // Se convierte de Timestamp (firebase) a Date la fecha
        messageEntity.creationDate = message._creationDate.toDate();
        return messageEntity;
    }
}


/***/ }),

/***/ "1oXC":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/components/reviewer/reviewer.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header translucent>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button (click)=\"dismiss()\">\r\n        <ion-icon name=\"arrow-back-outline\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title>Producido por: <ion-text color=\"secondary\">{{orderUser.name}}</ion-text></ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<div class=\"inner-content\">\r\n  <form [formGroup]=\"reviewForm\" class=\"mx-auto\">\r\n    <div class=\"form-group\">\r\n      <!-- Titulo de la review -->\r\n      <ion-item >\r\n        <ion-label position=\"floating\" type=\"text\" style=\"font-family: Montserrat\">Titulo</ion-label>\r\n        <ion-input\r\n          style=\"font-family: Assistant\"\r\n          type=\"text\"\r\n          class=\"form-control\"\r\n          placeholder=\"Titulo de la review\"\r\n          formControlName=\"title\"\r\n          id=\"titleInput\"></ion-input>\r\n      </ion-item>\r\n\r\n      <!-- Descripcion de la review -->\r\n      <ion-item class=\"ion-padding-top\">\r\n        <ion-label position=\"floating\" type=\"text\" style=\"font-family: Montserrat\">Reseña</ion-label>\r\n        <ion-input\r\n          type=\"text\"\r\n          class=\"form-control\"\r\n          formControlName=\"description\"\r\n          id=\"descriptionInput\"></ion-input>\r\n      </ion-item>\r\n\r\n      <!-- Estrellas -->\r\n      <ion-item class=\"ion-padding-vertical\">\r\n        <ion-label style=\"font-family: Montserrat\">Valoracion:</ion-label>\r\n        <ionic-rating-component #rating\r\n                                activeIcon = \"star\"\r\n                                defaultIcon = \"star-outline\"\r\n                                activeColor = \"#00f29b\"\r\n                                defaultColor = \"#9d9fa6\"\r\n                                readonly=\"false\"\r\n                                rating=\"5\"\r\n                                fontSize = \"32px\"\r\n                                formControlName=\"value\">\r\n        </ionic-rating-component>\r\n      </ion-item>\r\n\r\n      <ion-button expand=\"block\" (click)=\"enviarReview()\">Enviar Reseña</ion-button>\r\n    </div>\r\n  </form>\r\n</div>\r\n");

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

/***/ "2qT8":
/*!*********************************!*\
  !*** ./src/models/chat/chat.ts ***!
  \*********************************/
/*! exports provided: Chat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Chat", function() { return Chat; });
/* harmony import */ var class_transformer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! class-transformer */ "LGct");

class Chat {
    constructor() {
        this.members = [];
        this.messages = [];
        this.creationDate = new Date();
    }
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }
    get members() {
        return this._members;
    }
    set members(value) {
        this._members = value;
    }
    get messages() {
        return this._messages;
    }
    set messages(value) {
        this._messages = value;
    }
    get creationDate() {
        return this._creationDate;
    }
    set creationDate(value) {
        this._creationDate = value;
    }
    convertToDTO() {
        return Object(class_transformer__WEBPACK_IMPORTED_MODULE_0__["classToPlain"])(this);
    }
    convertFromDTO(chat) {
        const chatEntity = Object(class_transformer__WEBPACK_IMPORTED_MODULE_0__["plainToClass"])(Chat, chat);
        // Se convierte de Timestamp (firebase) a Date la fecha
        chatEntity.creationDate = chat._creationDate.toDate();
        return chatEntity;
    }
}


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
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _product_search_product_search_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../product-search/product-search.component */ "zvlA");











let ProductsView = class ProductsView {
    constructor(firestore, storage, router, route, productService, authService, modalController) {
        this.firestore = firestore;
        this.storage = storage;
        this.router = router;
        this.route = route;
        this.productService = productService;
        this.authService = authService;
        this.modalController = modalController;
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
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.filteredProducts = this.productList.filter(value => {
                // @ts-ignore
                return value.category === idNumber;
            });
            const modal = yield this.modalController.create({
                component: _product_search_product_search_component__WEBPACK_IMPORTED_MODULE_10__["ProductSearchComponent"],
                cssClass: 'my-custom-class',
                componentProps: {
                    productList: this.filteredProducts
                }
            });
            return yield modal.present();
        });
    }
    openSearchModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _product_search_product_search_component__WEBPACK_IMPORTED_MODULE_10__["ProductSearchComponent"],
                cssClass: 'my-custom-class',
                componentProps: {
                    productList: this.productList
                }
            });
            return yield modal.present();
        });
    }
};
ProductsView.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"] },
    { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_5__["AngularFireStorage"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
    { type: _services_products_product_service__WEBPACK_IMPORTED_MODULE_7__["ProductService"] },
    { type: _services_auth_auth_service_service__WEBPACK_IMPORTED_MODULE_8__["AuthServiceService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["ModalController"] }
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

/***/ "3vaY":
/*!*******************************************************************************!*\
  !*** ./src/components/review-list/review-detail/review-detail.component.scss ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXZpZXctZGV0YWlsLmNvbXBvbmVudC5zY3NzIn0= */");

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

/***/ "6Aiu":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/components/review-list/review-list.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header translucent>\r\n  <ion-toolbar>\r\n    <ion-title>Opiniones</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button (click)=\"dismiss()\">\r\n        <ion-icon name=\"close\" [color]=\"'danger'\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n  <app-review-detail *ngFor=\"let review of reviewList\" [review]=\"review\"></app-review-detail>\r\n</ion-content>\r\n");

/***/ }),

/***/ "6PPj":
/*!*************************************!*\
  !*** ./src/models/review/review.ts ***!
  \*************************************/
/*! exports provided: Review */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Review", function() { return Review; });
/* harmony import */ var class_transformer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! class-transformer */ "LGct");
/* harmony import */ var _user_user_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../user/user.model */ "aUIA");


class Review {
    constructor() {
        this._reviewer = new _user_user_model__WEBPACK_IMPORTED_MODULE_1__["User"]();
        this.creationDate = new Date();
    }
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }
    get title() {
        return this._title;
    }
    set title(value) {
        this._title = value;
    }
    get description() {
        return this._description;
    }
    set description(value) {
        if (value || value.length > 0) {
            this._description = value;
        }
    }
    get valuation() {
        return this._valuation;
    }
    set valuation(value) {
        this._valuation = value;
    }
    get creationDate() {
        return this._creationDate;
    }
    set creationDate(value) {
        this._creationDate = value;
    }
    get orderId() {
        return this._orderId;
    }
    set orderId(value) {
        this._orderId = value;
    }
    get reviewerId() {
        return this._reviewerId;
    }
    set reviewerId(value) {
        this._reviewerId = value;
    }
    get reviewer() {
        return this._reviewer;
    }
    set reviewer(value) {
        this._reviewer = value;
    }
    convertToDTO() {
        return Object(class_transformer__WEBPACK_IMPORTED_MODULE_0__["classToPlain"])(this);
    }
    convertFromDTO(review) {
        const reviewEntity = Object(class_transformer__WEBPACK_IMPORTED_MODULE_0__["plainToClass"])(Review, review);
        // Se convierte de Timestamp (firebase) a Date la fecha
        reviewEntity.creationDate = review._creationDate.toDate();
        return reviewEntity;
    }
}


/***/ }),

/***/ "6k9V":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/views/chat/chat.view.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title style=\"height: 100%; vertical-align: center\">\r\n      <ion-button fill=\"clear\" size=\"small\" (click)=\"dismiss()\">\r\n        <ion-icon name=\"arrow-back-outline\"></ion-icon>\r\n      </ion-button>\r\n      <div style=\"width: min-content; display: inline; height: 100%; vertical-align: center; font-family: Montserrat\">\r\n        Chat:\r\n      </div>\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <app-chat-message *ngFor=\"let chatMessage of currentChat.messages\" [message]=\"chatMessage\"\r\n                    [isMe]=\"isMessageMine(chatMessage.ownerId)\" [userToPrint]=\"getMessageOwner(chatMessage.ownerId)\"></app-chat-message>\r\n</ion-content>\r\n\r\n<ion-footer>\r\n  <ion-row>\r\n    <ion-col size=\"9\">\r\n      <form [formGroup]=\"messageForm\">\r\n        <ion-textarea [formControlName]=\"'message'\" style=\"border: solid 1px #92949c;\" color=\"dark\"></ion-textarea>\r\n      </form>\r\n    </ion-col>\r\n    <ion-col class=\"ion-text-right ion-align-self-end\">\r\n      <ion-button (click)=\"sendMessage()\">\r\n        <ion-icon slot=\"icon-only\" name=\"send\"></ion-icon>\r\n      </ion-button>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-footer>\r\n");

/***/ }),

/***/ "8vj/":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/components/chat-detail/chat-detail.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-item>\r\n  <ion-label>ChatDetail1</ion-label>\r\n</ion-item>\r\n");

/***/ }),

/***/ "9CDY":
/*!*****************************************************************!*\
  !*** ./src/components/chat-message/chat-message.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaGF0LW1lc3NhZ2UuY29tcG9uZW50LnNjc3MifQ== */");

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
        apiKey: 'AIzaSyCyBcfhNv3xmNGkGkFLtNGC25N7n3p7KwY',
        authDomain: 'imposoft-tfg-dev.firebaseapp.com',
        projectId: 'imposoft-tfg-dev',
        storageBucket: 'imposoft-tfg-dev.appspot.com',
        messagingSenderId: '931446286253',
        appId: '1:931446286253:web:fd6a9507fc5e24221e2324',
        measurementId: 'G-XPRZ071ECM'
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

/***/ "B728":
/*!*****************************************************************!*\
  !*** ./src/components/review-score/review-score.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXZpZXctc2NvcmUuY29tcG9uZW50LnNjc3MifQ== */");

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
                this.router.navigate(['/myProfile']);
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

/***/ "DQaF":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/components/image-zoom/image-zoom.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-img [src]=\"imageUrl\"></ion-img>\r\n");

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

/***/ "ETZz":
/*!***************************************************************!*\
  !*** ./src/components/chat-message/chat-message.component.ts ***!
  \***************************************************************/
/*! exports provided: ChatMessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatMessageComponent", function() { return ChatMessageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_chat_message_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./chat-message.component.html */ "THat");
/* harmony import */ var _chat_message_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chat-message.component.scss */ "9CDY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let ChatMessageComponent = class ChatMessageComponent {
    constructor() { }
    ngOnInit() { }
};
ChatMessageComponent.ctorParameters = () => [];
ChatMessageComponent.propDecorators = {
    message: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    userToPrint: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    isMe: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
ChatMessageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-chat-message',
        template: _raw_loader_chat_message_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_chat_message_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ChatMessageComponent);



/***/ }),

/***/ "EvEP":
/*!***********************************************************!*\
  !*** ./src/components/image-zoom/image-zoom.component.ts ***!
  \***********************************************************/
/*! exports provided: ImageZoomComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageZoomComponent", function() { return ImageZoomComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_image_zoom_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./image-zoom.component.html */ "DQaF");
/* harmony import */ var _image_zoom_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./image-zoom.component.scss */ "uc5p");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");





let ImageZoomComponent = class ImageZoomComponent {
    constructor(modalController) {
        this.modalController = modalController;
    }
    ngOnInit() { }
    dismiss() {
        this.modalController.dismiss({
            dismissed: true
        });
    }
};
ImageZoomComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] }
];
ImageZoomComponent.propDecorators = {
    imageUrl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
ImageZoomComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-image-zoom',
        template: _raw_loader_image_zoom_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_image_zoom_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ImageZoomComponent);



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

/***/ "FgMv":
/*!***************************************************************!*\
  !*** ./src/components/pickup-alert/pickup-alert.component.ts ***!
  \***************************************************************/
/*! exports provided: PickupAlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PickupAlertComponent", function() { return PickupAlertComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_pickup_alert_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./pickup-alert.component.html */ "UMpn");
/* harmony import */ var _pickup_alert_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pickup-alert.component.scss */ "c9PS");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_market_market_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/market/market.service */ "pI2Q");
/* harmony import */ var _models_market_market__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/market/market */ "Umsj");
/* harmony import */ var date_fns_esm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! date-fns/esm */ "b/SL");









let PickupAlertComponent = class PickupAlertComponent {
    constructor(marketService) {
        this.marketService = marketService;
        this.marketInfo = new _models_market_market__WEBPACK_IMPORTED_MODULE_5__["Market"]();
    }
    ngOnInit() {
        this.marketService.getCurrentMarket().then(value => {
            this.marketInfo = value;
            let today = new Date();
            let nextMarketDay;
            if (this.pickupDate) {
                nextMarketDay = this.pickupDate;
            }
            else {
                nextMarketDay = Object(date_fns_esm__WEBPACK_IMPORTED_MODULE_6__["nextDay"])(today, this.marketInfo.marketDay);
                let invalidDays = this.marketInfo.excludedDays.filter((day) => {
                    return Object(date_fns_esm__WEBPACK_IMPORTED_MODULE_6__["isSameDay"])(day, nextMarketDay);
                });
                while (invalidDays.length > 0) {
                    today = Object(date_fns_esm__WEBPACK_IMPORTED_MODULE_6__["add"])(today, { weeks: 1 });
                    nextMarketDay = Object(date_fns_esm__WEBPACK_IMPORTED_MODULE_6__["nextDay"])(today, this.marketInfo.marketDay);
                    invalidDays = this.marketInfo.excludedDays.filter((day) => {
                        return Object(date_fns_esm__WEBPACK_IMPORTED_MODULE_6__["isSameDay"])(day, nextMarketDay);
                    });
                }
            }
            this.nextAvailableDay = nextMarketDay;
        });
    }
    openMarketUrl() {
        window.open(this.marketInfo.getLocationUrl(), '_blank');
    }
};
PickupAlertComponent.ctorParameters = () => [
    { type: _services_market_market_service__WEBPACK_IMPORTED_MODULE_4__["MarketService"] }
];
PickupAlertComponent.propDecorators = {
    pickupDate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
PickupAlertComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-pickup-alert',
        template: _raw_loader_pickup_alert_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_pickup_alert_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], PickupAlertComponent);



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
/* harmony import */ var _services_market_market_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../services/market/market.service */ "pI2Q");
/* harmony import */ var _models_market_market__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../models/market/market */ "Umsj");
/* harmony import */ var _components_profile_modify_modal_profile_modify_modal_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../components/profile-modify-modal/profile-modify-modal.component */ "OMNY");
/* harmony import */ var _services_chat_chats_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../services/chat/chats.service */ "qFaY");
/* harmony import */ var _services_auth_auth_service_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../services/auth/auth-service.service */ "v1tz");
/* harmony import */ var _components_image_zoom_image_zoom_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../components/image-zoom/image-zoom.component */ "EvEP");
/* harmony import */ var _product_search_product_search_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../product-search/product-search.component */ "zvlA");
/* harmony import */ var _services_products_product_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../services/products/product.service */ "TYbz");





















let ProfileView = class ProfileView {
    constructor(router, route, firestore, afAuth, storage, window, modalCtrl, profileService, marketService, chatService, authService, productsService) {
        this.router = router;
        this.route = route;
        this.firestore = firestore;
        this.afAuth = afAuth;
        this.storage = storage;
        this.window = window;
        this.modalCtrl = modalCtrl;
        this.profileService = profileService;
        this.marketService = marketService;
        this.chatService = chatService;
        this.authService = authService;
        this.productsService = productsService;
        this.isFarmer = false;
        this.isMyProfile = false;
        this.user = new _models_user_user_model__WEBPACK_IMPORTED_MODULE_4__["User"]();
        this.market = new _models_market_market__WEBPACK_IMPORTED_MODULE_14__["Market"]();
        const datepipe = new _angular_common__WEBPACK_IMPORTED_MODULE_11__["DatePipe"]('en-US');
        this.today = datepipe.transform(new Date(), 'YYYY-MM-dd');
        this.currentPickUpDate = new Date();
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
                        this.isMyProfile = true;
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
        this.authService.logout().then(value => {
            console.log(value);
        });
    }
    changeDate($event) {
        this.profileService.updatePickDate(this.user.id, new Date($event.detail.value));
    }
    getMarket() {
        this.marketService.getCurrentMarket().then(value => {
            this.market = value;
        });
    }
    modifyProfile() {
        this.modalCtrl.create({
            component: _components_profile_modify_modal_profile_modify_modal_component__WEBPACK_IMPORTED_MODULE_15__["ProfileModifyModalComponent"],
            componentProps: {
                user: this.user,
            }
        }).then(value => {
            value.present();
        });
    }
    openOrCreateChat() {
        this.chatService.createChatOrOpen(this.pathId, this.authService.getCurrentUserId());
    }
    zoomImage() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _components_image_zoom_image_zoom_component__WEBPACK_IMPORTED_MODULE_18__["ImageZoomComponent"],
                cssClass: 'image-zoom',
                componentProps: {
                    imageUrl: this.profileImage
                }
            });
            return yield modal.present();
        });
    }
    openProfileProducts() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let productList = [];
            this.productsService.loadProductsByOwnerId(this.pathId).then((value) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                productList = value.sort(compare);
                const modal = yield this.modalCtrl.create({
                    component: _product_search_product_search_component__WEBPACK_IMPORTED_MODULE_19__["ProductSearchComponent"],
                    cssClass: 'my-custom-class',
                    componentProps: {
                        productList
                    }
                });
                return yield modal.present();
            }));
        });
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
    { type: _services_profiles_profiles_service__WEBPACK_IMPORTED_MODULE_12__["ProfilesService"] },
    { type: _services_market_market_service__WEBPACK_IMPORTED_MODULE_13__["MarketService"] },
    { type: _services_chat_chats_service__WEBPACK_IMPORTED_MODULE_16__["ChatsService"] },
    { type: _services_auth_auth_service_service__WEBPACK_IMPORTED_MODULE_17__["AuthServiceService"] },
    { type: _services_products_product_service__WEBPACK_IMPORTED_MODULE_20__["ProductService"] }
];
ProfileView = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-profile',
        template: _raw_loader_profile_view_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_profile_view_sass__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ProfileView);

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
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ "TEn/");










let ProductListComponent = class ProductListComponent {
    constructor(router, route, productService, authService, enumToArrayPipe, modalCtrl) {
        this.router = router;
        this.route = route;
        this.productService = productService;
        this.authService = authService;
        this.enumToArrayPipe = enumToArrayPipe;
        this.modalCtrl = modalCtrl;
        this.unitsList = this.enumToArrayPipe.transform(_models_product_product__WEBPACK_IMPORTED_MODULE_4__["UnitTypeEnum"]);
    }
    ngOnInit() { }
    openProduct(product) {
        if (product.stock || product.ownerId === this.authService.getCurrentUserId()) {
            this.router.navigate(['/product', product.id]).then(value => {
                this.dismiss();
            });
        }
    }
    dismiss() {
        // using the injected ModalController this page
        // can "dismiss" itself and optionally pass back data
        this.modalCtrl.dismiss({
            dismissed: true
        });
    }
};
ProductListComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _services_products_product_service__WEBPACK_IMPORTED_MODULE_6__["ProductService"] },
    { type: _services_auth_auth_service_service__WEBPACK_IMPORTED_MODULE_7__["AuthServiceService"] },
    { type: _pipes_enum_to_array_pipe__WEBPACK_IMPORTED_MODULE_8__["EnumToArrayPipe"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["ModalController"] }
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

/***/ "Isfz":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/components/review-score/review-score.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Estrellas -->\r\n<ion-item (click)=\"openReviewListModal()\" style=\"--padding-start: 0px\" [lines]=\"'none'\">\r\n  <ionic-rating-component #rating\r\n                          activeIcon = \"star\"\r\n                          defaultIcon = \"star-outline\"\r\n                          halfIcon=\"star-half-outline\"\r\n                          halfStar=\"true\"\r\n                          activeColor = \"#00f29b\"\r\n                          defaultColor = \"#9d9fa6\"\r\n                          readonly=\"true\"\r\n                          [rating]=\"scoreStars\"\r\n                          fontSize = \"20px\"\r\n                          >\r\n  </ionic-rating-component>\r\n  <ion-label style=\"font-family: Montserrat; font-size: 10px\">Ver reseñas ></ion-label>\r\n  <!--ion-button size=\"small\" color=\"primary\" fill=\"clear\">\r\n    <ion-icon name=\"chevron-forward-outline\"></ion-icon>\r\n  </ion-button-->\r\n</ion-item>\r\n");

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
/* harmony import */ var _market_market_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../market/market.service */ "pI2Q");








let CartServiceService = class CartServiceService {
    constructor(orderService, firestore, authService, marketService) {
        this.orderService = orderService;
        this.firestore = firestore;
        this.authService = authService;
        this.marketService = marketService;
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
        const productIndex = orderToEdit.orderedItems.indexOf(product);
        if (productIndex > -1) {
            orderToEdit.orderedItems.splice(productIndex, 1);
            if (orderToEdit.orderedItems.length <= 0) {
                const orderIndex = this.currentCart.ordersList.indexOf(orderToEdit);
                this.currentCart.ordersList.splice(orderIndex, 1);
            }
        }
    }
    removeOrderFromCart(order) {
        const orderIndex = this.currentCart.ordersList.indexOf(order);
        if (orderIndex > -1) {
            this.currentCart.ordersList.splice(orderIndex, 1);
        }
    }
    checkoutCart() {
        if (this.currentCart.ordersList.length > 0) {
            this.currentCart.ordersList.forEach(value => {
                const newOrder = this.orderService.createOrderEntity(value);
                this.marketService.getNextMarketDayFromDate(new Date()).then(value1 => {
                    newOrder._pickupDate = value1;
                    this.uploadOrder(newOrder).then(value2 => {
                        this.removeOrderFromCart(value);
                    });
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
    { type: _auth_auth_service_service__WEBPACK_IMPORTED_MODULE_6__["AuthServiceService"] },
    { type: _market_market_service__WEBPACK_IMPORTED_MODULE_7__["MarketService"] }
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

/***/ "OMNY":
/*!*******************************************************************************!*\
  !*** ./src/components/profile-modify-modal/profile-modify-modal.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ProfileModifyModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileModifyModalComponent", function() { return ProfileModifyModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_profile_modify_modal_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./profile-modify-modal.component.html */ "Uo3j");
/* harmony import */ var _profile_modify_modal_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile-modify-modal.component.scss */ "Py3Y");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @capacitor/core */ "gcOT");
/* harmony import */ var _services_auth_auth_service_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/auth/auth-service.service */ "v1tz");
/* harmony import */ var _services_profiles_profiles_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/profiles/profiles.service */ "Wnju");









let ProfileModifyModalComponent = class ProfileModifyModalComponent {
    constructor(modalController, formBuilder, authService, profileService, toastController) {
        this.modalController = modalController;
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.profileService = profileService;
        this.toastController = toastController;
        this.newUserPicture = '';
    }
    ngOnInit() {
        this.buildForm();
    }
    ionViewWillEnter() {
    }
    dismiss() {
        // using the injected ModalController this page
        // can "dismiss" itself and optionally pass back data
        this.modalController.dismiss({
            'dismissed': true
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
                this.updateProfileForm.value.picture = 'Foto cargada';
                this.newUserPicture = value.base64String;
                this.user.picture = 'Foto cargada';
            });
        });
    }
    buildForm() {
        this.updateProfileForm = this.formBuilder.group({
            name: [this.user.name,],
            phoneNumber: [this.user.phoneNumber,],
            picture: [this.user.picture,],
            location: [this.user.location,],
            description: [this.user.description,],
        });
    }
    updateProfile() {
        if (this.updateProfileForm.valid) {
            this.fillUserToForm();
            this.profileService.updateUserInfo(this.user, this.newUserPicture).then(value => {
                this.presentToast();
                this.dismiss();
            }).catch(reason => {
                console.log(reason);
                this.presentErrorToast();
            });
        }
        else {
            return;
        }
    }
    fillUserToForm() {
        this.user.name = this.updateProfileForm.value.name;
        this.user.description = this.updateProfileForm.value.description;
        this.user.phoneNumber = this.updateProfileForm.value.phoneNumber;
        this.user.location = this.updateProfileForm.value.location;
        this.user.description = this.updateProfileForm.value.description;
    }
    presentToast() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: 'Informacion actualizada.',
                color: 'success',
                duration: 2000
            });
            toast.present();
        });
    }
    presentErrorToast() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: 'Ha sucedido un error, vuelve a intentarlo.',
                color: 'danger',
                duration: 2000
            });
            toast.present();
        });
    }
};
ProfileModifyModalComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: _services_auth_auth_service_service__WEBPACK_IMPORTED_MODULE_7__["AuthServiceService"] },
    { type: _services_profiles_profiles_service__WEBPACK_IMPORTED_MODULE_8__["ProfilesService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] }
];
ProfileModifyModalComponent.propDecorators = {
    user: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
ProfileModifyModalComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-profile-modify-modal',
        template: _raw_loader_profile_modify_modal_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_profile_modify_modal_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ProfileModifyModalComponent);



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
    openOwnerProfile() {
        this.router.navigate(['profile', this.productOwner.id]);
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

/***/ "PUyY":
/*!*************************************!*\
  !*** ./src/views/chat/chat.view.ts ***!
  \*************************************/
/*! exports provided: ChatView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatView", function() { return ChatView; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_chat_view_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./chat.view.html */ "6k9V");
/* harmony import */ var _chat_view_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chat.view.scss */ "f1dN");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_chat_chats_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/chat/chats.service */ "qFaY");
/* harmony import */ var _models_chat_chat__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../models/chat/chat */ "2qT8");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _models_chat_message_chat_message__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../models/chat/message/chat-message */ "1j7d");
/* harmony import */ var _services_auth_auth_service_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/auth/auth-service.service */ "v1tz");
/* harmony import */ var _services_profiles_profiles_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/profiles/profiles.service */ "Wnju");











let ChatView = class ChatView {
    constructor(modalController, chatService, fb, authService, profileService) {
        this.modalController = modalController;
        this.chatService = chatService;
        this.fb = fb;
        this.authService = authService;
        this.profileService = profileService;
        this.currentChat = new _models_chat_chat__WEBPACK_IMPORTED_MODULE_6__["Chat"]();
        this.messageForm = this.fb.group({
            message: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]]
        });
    }
    ionViewWillEnter() {
        this.chatService.getChatById(this.id).then(value => {
            this.currentChat = value;
            const currentUserId = this.authService.getCurrentUserId();
            if (currentUserId === this.currentChat.members[0]) {
                this.profileService.loadUserById(this.currentChat.members[0]).then(user => {
                    this.me = user;
                });
                this.profileService.loadUserById(this.currentChat.members[1]).then(user => {
                    this.other = user;
                });
            }
            else {
                this.profileService.loadUserById(this.currentChat.members[0]).then(user => {
                    this.other = user;
                });
                this.profileService.loadUserById(this.currentChat.members[1]).then(user => {
                    this.me = user;
                });
            }
        });
    }
    ngOnInit() {
    }
    dismiss() {
        // using the injected ModalController this page
        // can "dismiss" itself and optionally pass back data
        this.modalController.dismiss({
            dismissed: true
        });
    }
    sendMessage() {
        if (this.messageForm.valid) {
            const chatMessage = new _models_chat_message_chat_message__WEBPACK_IMPORTED_MODULE_8__["ChatMessage"]();
            chatMessage.message = this.messageForm.value.message;
            chatMessage.ownerId = this.authService.getCurrentUserId();
            this.chatService.addMessageToChat(chatMessage, this.id);
        }
    }
    isMessageMine(ownerId) {
        return ownerId === this.me.id;
    }
    getMessageOwner(ownerId) {
        return ownerId === this.me.id ? this.me : this.other;
    }
};
ChatView.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _services_chat_chats_service__WEBPACK_IMPORTED_MODULE_5__["ChatsService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"] },
    { type: _services_auth_auth_service_service__WEBPACK_IMPORTED_MODULE_9__["AuthServiceService"] },
    { type: _services_profiles_profiles_service__WEBPACK_IMPORTED_MODULE_10__["ProfilesService"] }
];
ChatView.propDecorators = {
    id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
ChatView = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-chat',
        template: _raw_loader_chat_view_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_chat_view_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ChatView);



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
/* harmony import */ var _services_order_cart_service_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/order/cart-service.service */ "LD/N");










let NavigationBarComponent = class NavigationBarComponent {
    constructor(afAuth, router, firestore, cartService, profilesService) {
        this.afAuth = afAuth;
        this.router = router;
        this.firestore = firestore;
        this.cartService = cartService;
        this.profilesService = profilesService;
        this.isFarmer = false;
        this.isLogged = false;
        this.orderItems = 0;
        this.loadNavBar();
    }
    ngOnInit() {
        this.loadNavBar();
    }
    ionViewWillEnter() {
    }
    loadNavBar() {
        this.afAuth.authState.subscribe(user => {
            if (user) {
                this.isLogged = true;
                this.userId = user.uid;
                this.userCollection = this.firestore.doc('profiles/' + user.uid);
                this.profilesService.loadUserById(user.uid).then(realUser => {
                    this.isFarmer = realUser.role === _models_user_user_roles_enum__WEBPACK_IMPORTED_MODULE_7__["UserRoles"].PRODUCER;
                });
            }
            else {
                this.isLogged = false;
            }
        });
    }
};
NavigationBarComponent.ctorParameters = () => [
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestore"] },
    { type: _services_order_cart_service_service__WEBPACK_IMPORTED_MODULE_9__["CartServiceService"] },
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

/***/ "Py3Y":
/*!*********************************************************************************!*\
  !*** ./src/components/profile-modify-modal/profile-modify-modal.component.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9maWxlLW1vZGlmeS1tb2RhbC5jb21wb25lbnQuc2NzcyJ9 */");

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
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _reviewer_reviewer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../reviewer/reviewer.component */ "UNGU");











let OrderItemComponent = class OrderItemComponent {
    constructor(authService, profileService, orderService, modalController) {
        this.authService = authService;
        this.profileService = profileService;
        this.orderService = orderService;
        this.modalController = modalController;
        this.refreshViewEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.finalPrice = 0;
        this.isFarmer = false;
        this.isFarmer = authService.getIsFarmer();
        this.orderUser = new _models_user_user_model__WEBPACK_IMPORTED_MODULE_7__["User"]();
    }
    ngOnInit() {
        this.finalPrice = this.order.getOrderPrice();
        if (this.authService.getIsFarmer()) {
            this.profileService.loadUserById(this.order.userId).then(value => {
                this.orderUser = value;
            });
        }
        else {
            this.profileService.loadUserById(this.order.ownerId).then(value => {
                this.orderUser = value;
            });
        }
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
    openReviewPopup(id, owner) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _reviewer_reviewer_component__WEBPACK_IMPORTED_MODULE_10__["ReviewerComponent"],
                cssClass: 'auto-height',
                componentProps: {
                    orderId: id,
                    ownerId: owner,
                    orderUser: this.orderUser
                }
            });
            modal.present();
            const { data } = yield modal.onWillDismiss();
            if (data.hasUploaded) {
                this.order.hasReview = true;
            }
            return true;
        });
    }
};
OrderItemComponent.ctorParameters = () => [
    { type: _services_auth_auth_service_service__WEBPACK_IMPORTED_MODULE_5__["AuthServiceService"] },
    { type: _services_profiles_profiles_service__WEBPACK_IMPORTED_MODULE_6__["ProfilesService"] },
    { type: _services_order_order_service__WEBPACK_IMPORTED_MODULE_8__["OrderService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["ModalController"] }
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

/***/ "QSNc":
/*!*****************************************!*\
  !*** ./src/views/chats/chats.view.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaGF0cy52aWV3LnNjc3MifQ== */");

/***/ }),

/***/ "Qesr":
/*!***************************************************!*\
  !*** ./src/views/product-list/products.view.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card-container ion-card {\n  position: relative;\n  text-align: center;\n  background-color: #00593b;\n  max-width: 420px;\n  max-height: 420px;\n  --border-radius: 12px !important;\n  font-family: Montserrat;\n}\n.card-container .card-title {\n  position: absolute;\n  top: 36%;\n  font-size: 1.5em;\n  width: 100%;\n  font-weight: bold;\n  color: #fff;\n}\n.card-container .card-subtitle {\n  font-size: 0.8em;\n  position: absolute;\n  top: 52%;\n  width: 100%;\n  color: #fff;\n}\n.container {\n  position: relative;\n}\n.overlay {\n  position: absolute;\n  z-index: 1;\n}\n.content {\n  position: absolute;\n  transform: translateY(6%);\n}\n.content-list {\n  --border-radius: 12px !important;\n}\n.card-container {\n  background-color: #F2F2F2 !important;\n  --border-radius: 12px !important;\n  font-family: Montserrat;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n}\n.search {\n  --border-radius: 12px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHByb2R1Y3RzLnZpZXcuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFRTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQ0FBQTtFQUNBLHVCQUFBO0FBREo7QUFJRTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQUZKO0FBS0U7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FBSEo7QUFPQTtFQUNFLGtCQUFBO0FBSkY7QUFPQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtBQUpGO0FBT0E7RUFDRSxrQkFBQTtFQUNBLHlCQUFBO0FBSkY7QUFPQTtFQUNFLGdDQUFBO0FBSkY7QUFPQTtFQUNFLG9DQUFBO0VBQ0EsZ0NBQUE7RUFDQSx1QkFBQTtFQUNBLDJCQUFBO0VBQUEsd0JBQUE7RUFBQSxtQkFBQTtBQUpGO0FBT0E7RUFDRSxnQ0FBQTtBQUpGIiwiZmlsZSI6InByb2R1Y3RzLnZpZXcuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkLWNvbnRhaW5lciB7XHJcblxyXG4gIGlvbi1jYXJkIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDU5M2I7XHJcbiAgICBtYXgtd2lkdGg6IDQyMHB4O1xyXG4gICAgbWF4LWhlaWdodDogNDIwcHg7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDEycHggIWltcG9ydGFudDtcclxuICAgIGZvbnQtZmFtaWx5OiBNb250c2VycmF0O1xyXG4gIH1cclxuXHJcbiAgLmNhcmQtdGl0bGUge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAzNiU7XHJcbiAgICBmb250LXNpemU6IDEuNWVtO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gIH1cclxuXHJcbiAgLmNhcmQtc3VidGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAwLjhlbTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTIlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICB9XHJcblxyXG59XHJcbi5jb250YWluZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLm92ZXJsYXkge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB6LWluZGV4OiAxO1xyXG59XHJcblxyXG4uY29udGVudHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDYlKTtcclxufVxyXG5cclxuLmNvbnRlbnQtbGlzdHtcclxuICAtLWJvcmRlci1yYWRpdXM6IDEycHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmNhcmQtY29udGFpbmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjJGMkYyICFpbXBvcnRhbnQ7XHJcbiAgLS1ib3JkZXItcmFkaXVzOiAxMnB4ICFpbXBvcnRhbnQ7XHJcbiAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQ7XHJcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxufVxyXG5cclxuLnNlYXJjaHtcclxuICAtLWJvcmRlci1yYWRpdXM6IDEycHggIWltcG9ydGFudDtcclxufVxyXG4iXX0= */");

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
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content class=\"card-background-page background\">\r\n  <ion-text color=\"light\">\r\n    <h2 class=\"ion-margin\" style=\"font-family: Montserrat; font-weight: bold;\r\n    font-style: normal; letter-spacing: 2px\">Buscador</h2>\r\n  </ion-text>\r\n  <div class=\"container\">\r\n    <ion-searchbar #mySearchbar\r\n                   (click)=\"openSearchModal()\"\r\n                   class=\"search overlay\"\r\n                   placeholder=\"Buscar\"></ion-searchbar>\r\n    <ion-card class=\"ion-no-padding ion-no-margin content card-container\">\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-card (click)=\"searchCategory(0)\">\r\n              <img src=\"assets/categories/iconFruit.png\"/>\r\n              <div class=\"card-title\">Frutas</div>\r\n              <div class=\"card-subtitle\"></div>\r\n            </ion-card>\r\n          </ion-col>\r\n          <ion-col>\r\n            <ion-card (click)=\"searchCategory(1)\">\r\n              <img src=\"assets/categories/iconVeg.png\"/>\r\n              <div class=\"card-title\">Verduras</div>\r\n              <div class=\"card-subtitle\"></div>\r\n            </ion-card>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-card (click)=\"searchCategory(2)\">\r\n              <img src=\"assets/categories/iconLegumbres.png\"/>\r\n              <div class=\"card-title\">Legumbres</div>\r\n              <div class=\"card-subtitle\"></div>\r\n            </ion-card>\r\n          </ion-col>\r\n          <ion-col>\r\n            <ion-card (click)=\"searchCategory(6)\">\r\n              <img src=\"assets/categories/iconHoney.png\"/>\r\n              <div class=\"card-title\">Miel</div>\r\n              <div class=\"card-subtitle\"></div>\r\n            </ion-card>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-card (click)=\"searchCategory(3)\">\r\n              <img src=\"assets/categories/iconBread.png\"/>\r\n              <div class=\"card-title\">Panaderia</div>\r\n              <div class=\"card-subtitle\"></div>\r\n            </ion-card>\r\n          </ion-col>\r\n          <ion-col>\r\n            <ion-card (click)=\"searchCategory(4)\">\r\n              <img src=\"assets/categories/iconDairy.png\"/>\r\n              <div class=\"card-title\">Lacteos</div>\r\n              <div class=\"card-subtitle\"></div>\r\n            </ion-card>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-card (click)=\"searchCategory(5)\">\r\n              <img src=\"assets/categories/iconEggs.png\"/>\r\n              <div class=\"card-title\">Huevos</div>\r\n              <div class=\"card-subtitle\"></div>\r\n            </ion-card>\r\n          </ion-col>\r\n          <ion-col>\r\n            <ion-card (click)=\"searchCategory(7)\">\r\n              <img src=\"assets/categories/iconOther.png\"/>\r\n              <div class=\"card-title\">Otros</div>\r\n              <div class=\"card-subtitle\"></div>\r\n            </ion-card>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </ion-card>\r\n  </div>\r\n</ion-content>\r\n");

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
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _views_chats_chats_view__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../views/chats/chats.view */ "cZKm");








let AppComponent = class AppComponent {
    constructor(router, afAuth, modalController) {
        this.router = router;
        this.afAuth = afAuth;
        this.modalController = modalController;
        this.isLoggedIn = false;
    }
    ngOnInit() {
        this.afAuth.authState.subscribe(user => {
            if (!user) {
                this.router.navigate(['/login']);
            }
            else {
                this.isLoggedIn = true;
            }
        });
    }
    openChatsView() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _views_chats_chats_view__WEBPACK_IMPORTED_MODULE_7__["ChatsView"],
                componentProps: {
                // reviewList: this.reviewList
                }
            });
            return yield modal.present();
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuth"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"] }
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
/* harmony default export */ __webpack_exports__["default"] = ("<!-- NAV BAR USER -->\r\n<ion-tabs *ngIf=\"!isFarmer && isLogged\">\r\n  <ion-tab-bar slot=\"bottom\">\r\n    <ion-tab-button  [tab]=\"'orders'\">\r\n      <ion-icon name=\"cube-outline\"></ion-icon>\r\n      <ion-label class=\"navButton\">Pedidos</ion-label>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button [tab]=\"'profiles'\">\r\n      <ion-icon name=\"list-outline\"></ion-icon>\r\n      <ion-label class=\"navButton\">Agris</ion-label>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button [tab]=\"'products'\">\r\n      <ion-icon name=\"search-outline\"></ion-icon>\r\n      <ion-label class=\"navButton\">Buscar</ion-label>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button [tab]=\"'cart'\">\r\n      <ion-icon name=\"cart-outline\"></ion-icon>\r\n      <ion-badge color=\"secondary\" *ngIf=\"cartService.currentCart.ordersList.length>0\">\r\n        {{cartService.currentCart.getAllItemLength()}}\r\n      </ion-badge>\r\n      <ion-label class=\"navButton\">Carrito</ion-label>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button [tab]=\"'myProfile'\">\r\n      <ion-icon name=\"person-outline\"></ion-icon>\r\n      <ion-label class=\"navButton\">Perfil</ion-label>\r\n    </ion-tab-button>\r\n  </ion-tab-bar>\r\n</ion-tabs>\r\n<!-- NAV BAR FARMER -->\r\n<ion-tabs *ngIf=\"isFarmer && isLogged\">\r\n  <ion-tab-bar slot=\"bottom\">\r\n    <ion-tab-button [tab]=\"'products/0'\">\r\n      <ion-icon name=\"list-outline\"></ion-icon>\r\n      <ion-label class=\"navButtonAgri\">Productos</ion-label>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button [tab]=\"'statistics'\">\r\n      <ion-icon name=\"stats-chart-outline\"></ion-icon>\r\n      <ion-label class=\"navButtonAgri\">Estadisticas</ion-label>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button [tab]=\"'newProductForm'\">\r\n      <ion-icon name=\"add-outline\"></ion-icon>\r\n      <ion-label class=\"navButtonAgri\">Crear</ion-label>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button [tab]=\"'orders'\">\r\n      <ion-icon name=\"cube-outline\"></ion-icon>\r\n      <ion-label class=\"navButtonAgri\">Pedidos</ion-label>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button [tab]=\"'myProfile'\">\r\n      <ion-icon name=\"person-outline\"></ion-icon>\r\n      <ion-label class=\"navButtonAgri\">Perfil</ion-label>\r\n    </ion-tab-button>\r\n  </ion-tab-bar>\r\n</ion-tabs>\r\n");

/***/ }),

/***/ "THat":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/components/chat-message/chat-message.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-item color=\"danger\" *ngIf=\"isMe\">\r\n  {{message.message}}\r\n  {{userToPrint.name}}\r\n</ion-item>\r\n<ion-item *ngIf=\"!isMe\">\r\n  {{message.message}}\r\n  {{userToPrint.name}}\r\n</ion-item>\r\n");

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

/***/ "UMpn":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/components/pickup-alert/pickup-alert.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-card>\r\n  <ion-item>\r\n    Recogida el: {{nextAvailableDay | date:'dd/MM'}}\r\n    de {{marketInfo.hourStart | date:'h:mm'}}\r\n    a {{marketInfo.hourFinish | date:'h:mm'}}\r\n    en {{marketInfo.name}}\r\n    <ion-button fill=\"outline\" slot=\"end\" (click)=\"openMarketUrl()\">Abrir en Maps</ion-button>\r\n  </ion-item>\r\n</ion-card>\r\n");

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

/***/ "UNGU":
/*!*******************************************************!*\
  !*** ./src/components/reviewer/reviewer.component.ts ***!
  \*******************************************************/
/*! exports provided: ReviewerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewerComponent", function() { return ReviewerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_reviewer_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./reviewer.component.html */ "1oXC");
/* harmony import */ var _reviewer_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reviewer.component.scss */ "Y+mS");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_profiles_profiles_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/profiles/profiles.service */ "Wnju");
/* harmony import */ var _models_review_review__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../models/review/review */ "6PPj");
/* harmony import */ var _services_order_order_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/order/order.service */ "uW7w");
/* harmony import */ var _services_auth_auth_service_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/auth/auth-service.service */ "v1tz");










let ReviewerComponent = class ReviewerComponent {
    constructor(fb, modalCtrl, authService, profileService, orderService) {
        this.fb = fb;
        this.modalCtrl = modalCtrl;
        this.authService = authService;
        this.profileService = profileService;
        this.orderService = orderService;
        this.reviewForm = this.fb.group({
            title: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            description: [''],
            value: [4],
        });
    }
    ngOnInit() {
    }
    dismiss() {
        // using the injected ModalController this page
        // can "dismiss" itself and optionally pass back data
        this.modalCtrl.dismiss({
            dismissed: true
        });
    }
    dismissUploaded() {
        // using the injected ModalController this page
        // can "dismiss" itself and optionally pass back data
        this.modalCtrl.dismiss({
            dismissed: true,
            hasUploaded: true
        });
    }
    enviarReview() {
        const reviewToUpload = new _models_review_review__WEBPACK_IMPORTED_MODULE_7__["Review"]();
        if (this.reviewForm.invalid) {
            return;
        }
        reviewToUpload.orderId = this.orderId;
        reviewToUpload.title = this.reviewForm.value.title;
        reviewToUpload.description = this.reviewForm.value.description;
        reviewToUpload.valuation = this.reviewForm.value.value;
        reviewToUpload.reviewerId = this.authService.getCurrentUserId();
        this.orderService.uploadReviewToProfile(this.ownerId, reviewToUpload).then(r => {
            this.dismissUploaded();
        });
    }
};
ReviewerComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: _services_auth_auth_service_service__WEBPACK_IMPORTED_MODULE_9__["AuthServiceService"] },
    { type: _services_profiles_profiles_service__WEBPACK_IMPORTED_MODULE_6__["ProfilesService"] },
    { type: _services_order_order_service__WEBPACK_IMPORTED_MODULE_8__["OrderService"] }
];
ReviewerComponent.propDecorators = {
    orderId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    ownerId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    orderUser: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
ReviewerComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-reviewer',
        template: _raw_loader_reviewer_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_reviewer_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ReviewerComponent);



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
        let reduceUnit = 0;
        // Diferenciamos en funcion del tipo de unidad cuanto se ha de restar
        // @ts-ignore
        if (this.product.unit === 1) {
            reduceUnit = 0.250;
        }
        else {
            reduceUnit = 1;
        }
        // Se resta la cantidad correcta
        if (this.productAmount > reduceUnit) {
            this.productAmount -= reduceUnit;
        }
        else {
            this.productAmount = reduceUnit;
        }
    }
    add() {
        // TODO: Añadir un maximo al pedido
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

/***/ "Umsj":
/*!*************************************!*\
  !*** ./src/models/market/market.ts ***!
  \*************************************/
/*! exports provided: Market */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Market", function() { return Market; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase */ "JZFu");
/* harmony import */ var class_transformer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! class-transformer */ "LGct");


var GeoPoint = firebase__WEBPACK_IMPORTED_MODULE_1__["default"].firestore.GeoPoint;

class Market {
    constructor() {
        this._excludedDays = [];
        this.name = 'Mercat Agroecologic UPV';
        this.description = 'Test';
        this.marketDay = 4;
        this.addExcludedDays(new Date(2021, 4, 29));
        this.isActive = true;
        this.location = new GeoPoint(39.48151487502771, -0.343266787040054);
        this.hourStart = new Date(2021, 4, 5, 9, 0);
        this.hourFinish = new Date(2021, 4, 5, 13, 30);
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
    get picture() {
        return this._picture;
    }
    set picture(value) {
        this._picture = value;
    }
    get marketDay() {
        return this._marketDay;
    }
    set marketDay(value) {
        this._marketDay = value;
    }
    get excludedDays() {
        return this._excludedDays;
    }
    set excludedDays(value) {
        this._excludedDays = value;
    }
    addExcludedDays(value) {
        if (this.excludedDays != null) {
            this.excludedDays.push(value);
        }
        else {
            this.excludedDays = [value];
        }
    }
    get isActive() {
        return this._isActive;
    }
    set isActive(value) {
        this._isActive = value;
    }
    get location() {
        return this._location;
    }
    set location(value) {
        this._location = value;
    }
    getLocationUrl() {
        return 'https://www.google.com/maps/search/?api=1&query='
            + this.location.latitude + ','
            + this.location.longitude;
    }
    get hourStart() {
        return this._hourStart;
    }
    set hourStart(value) {
        this._hourStart = value;
    }
    get hourFinish() {
        return this._hourFinish;
    }
    set hourFinish(value) {
        this._hourFinish = value;
    }
    convertToDTO() {
        const objectEntity = Object(class_transformer__WEBPACK_IMPORTED_MODULE_2__["classToPlain"])(this);
        objectEntity._location = this.location;
        return objectEntity;
    }
    convertFromDTO(marketEntity) {
        const marketModel = Object(class_transformer__WEBPACK_IMPORTED_MODULE_2__["plainToClass"])(Market, marketEntity);
        marketModel.location = marketEntity._location;
        marketModel.excludedDays = [];
        marketEntity._excludedDays.forEach(day => {
            marketModel.excludedDays.push(new Date(day.seconds * 1000));
        });
        marketModel.hourFinish = new Date(marketEntity._hourFinish.seconds * 1000);
        marketModel.hourStart = new Date(marketEntity._hourStart.seconds * 1000);
        return marketModel;
    }
}
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(class_transformer__WEBPACK_IMPORTED_MODULE_2__["Exclude"])({ toClassOnly: true })
], Market.prototype, "_location", void 0);


/***/ }),

/***/ "Uo3j":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/components/profile-modify-modal/profile-modify-modal.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title style=\"height: 100%; vertical-align: center\">\r\n      <ion-button fill=\"clear\" size=\"small\" (click)=\"dismiss()\">\r\n        <ion-icon name=\"arrow-back-outline\"></ion-icon>\r\n      </ion-button>\r\n      <div style=\"width: min-content; display: inline; height: 100%; vertical-align: center; font-family: Montserrat\">\r\n        Modificar perfil\r\n      </div>\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [formGroup]=\"updateProfileForm\">\r\n  <ion-item>\r\n    <ion-label position=\"floating\" type=\"text\">Nombre</ion-label>\r\n    <ion-input formControlName=\"name\" placeholder=\"\" [value]=\"user.name\"></ion-input>\r\n  </ion-item>\r\n  <ion-item>\r\n    <ion-label position=\"floating\" type=\"text\">Descripcion</ion-label>\r\n    <ion-input formControlName=\"description\" placeholder=\"¡Date a conocer!\" [value]=\"user.description\"></ion-input>\r\n  </ion-item>\r\n  <ion-item>\r\n    <ion-label position=\"floating\" type=\"text\">Telefono</ion-label>\r\n    <ion-input formControlName=\"phoneNumber\" placeholder=\"\" [value]=\"user.phoneNumber\"></ion-input>\r\n  </ion-item>\r\n  <ion-item>\r\n    <ion-label position=\"floating\" type=\"text\">Direccion</ion-label>\r\n    <ion-input formControlName=\"location\" placeholder=\"\" [value]=\"user.location\"></ion-input>\r\n  </ion-item>\r\n  <ion-item>\r\n    <ion-label position=\"stacked\" type=\"file\">Foto</ion-label>\r\n    <ion-input (click)=\"takePicture()\" readonly formControlName=\"picture\" [value]=\"user.picture\"></ion-input>\r\n  </ion-item>\r\n\r\n  <ion-row class=\"cardfooter\">\r\n    <ion-col>\r\n      <ion-button class=\"ion-float-right\" (click)=\"updateProfile()\" type=\"button\">\r\n        <div>Guardar</div>\r\n      </ion-button>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-content>\r\n");

/***/ }),

/***/ "UtC6":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/components/login-user/login-user.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\r\n  <form [formGroup]=\"registrationForm\" class=\"mx-auto\">\r\n    <div class=\"form-group\">\r\n      <ion-item>\r\n        <ion-label position=\"floating\" type=\"text\" style=\"font-family: Montserrat\">Email:</ion-label>\r\n        <ion-input\r\n          style=\"font-family: Assistant\"\r\n          type=\"text\"\r\n          class=\"form-control\"\r\n          placeholder=\"miemail@mail.com\"\r\n          formControlName=\"email\"\r\n          id=\"emailInput\"></ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item>\r\n        <ion-label position=\"floating\" type=\"text\" style=\"font-family: Montserrat\">Contraseña:</ion-label>\r\n        <ion-input\r\n          type=\"password\"\r\n          name=\"password\"\r\n          autocomplete=\"on\"\r\n          class=\"form-control\"\r\n          formControlName=\"password\"\r\n          id=\"passwordInput\"\r\n          [type]=\"hide ? 'password' : 'text'\"></ion-input>\r\n      </ion-item>\r\n    </div>\r\n  </form>\r\n  <div class=\"d-flex justify-content-end\">\r\n    <ion-button expand=\"block\" class=\"d-flex justify-content-end btn btn-outline-primary m-2\"\r\n                id=\"login\" (click)=\"logIn()\" style=\"font-family: Montserrat\">Iniciar sesion</ion-button>\r\n    <ion-button expand=\"block\" fill=\"clear\" size=\"small\" *ngIf=\"!lostPassword\" (click)=\"lostPassword = true\">\r\n      He olvidado mi contraseña\r\n    </ion-button>\r\n    <form [formGroup]=\"recoverForm\" *ngIf=\"lostPassword\" class=\"mx-auto\">\r\n      <div class=\"form-group\">\r\n        <ion-item>\r\n          <ion-label position=\"floating\" type=\"text\" style=\"font-family: Montserrat\">Email:</ion-label>\r\n          <ion-input\r\n            style=\"font-family: Assistant\"\r\n            type=\"text\"\r\n            class=\"form-control\"\r\n            placeholder=\"miemail@mail.com\"\r\n            formControlName=\"emailRec\"\r\n            id=\"emailRecInput\"></ion-input>\r\n        </ion-item>\r\n      </div>\r\n    </form>\r\n    <ion-button expand=\"block\" fill=\"clear\" size=\"small\" *ngIf=\"lostPassword\" (click)=\"recoverAccount()\">\r\n      Recuperar\r\n    </ion-button>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-app>\r\n  <!--\r\n  <ion-header>\r\n    <ion-toolbar class=\"ion-text-center\">\r\n      <img alt=\"logo\" height=\"29\" src=\"assets/logo.png\">\r\n    </ion-toolbar>\r\n  </ion-header> -->\r\n  <!-- fab placed to the top end -->\r\n  <ion-fab vertical=\"top\" horizontal=\"end\" slot=\"fixed\" *ngIf=\"isLoggedIn\">\r\n    <!--<ion-badge color=\"secondary\" style=\"left: -5px; z-index: 3; position: absolute;\">11</ion-badge>-->\r\n\r\n    <ion-fab-button (click)=\"openChatsView()\">\r\n      <ion-icon name=\"send\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n  <!-- </ion-header> -->\r\n  <ion-content>\r\n    <ion-router-outlet></ion-router-outlet>\r\n    <app-navigation-bar></app-navigation-bar>\r\n  </ion-content>\r\n</ion-app>\r\n");

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
/* harmony import */ var _models_review_review__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../models/review/review */ "6PPj");










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
                this.loadProfileImage(realUser.picture).then(imageUrl => realUser.picture = imageUrl);
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
    loadReviewsByOwnerId(ownerId) {
        return new Promise((resolve, reject) => {
            this.userCollection.doc(ownerId).collection('reviews').valueChanges().subscribe(value => {
                const reviewList = [];
                value.forEach(reviewEntity => {
                    const reviewModel = new _models_review_review__WEBPACK_IMPORTED_MODULE_9__["Review"]().convertFromDTO(reviewEntity);
                    reviewList.push(reviewModel);
                });
                resolve(reviewList);
            });
        });
    }
    uploadReviewToProfile(ownerId, review) {
        return new Promise((resolve, reject) => {
            this.userCollection.doc(ownerId).collection('reviews')
                .add(review.convertToDTO())
                .then(value => {
                resolve('Review creada con exito');
            });
            // reject('Error al crear la review');
        });
    }
    updateUserInfo(user, pictureBase64) {
        return new Promise((resolve, reject) => {
            if (this.authService.validateIsCurrentUser(user.id)) {
                let photoUrl = user.picture;
                if (pictureBase64 !== '') {
                    photoUrl = this.uploadPictureToProfile(pictureBase64, user.id);
                }
                this.userCollection.doc(user.id).update({
                    _name: user.name,
                    _phoneNumber: user.phoneNumber,
                    _picture: photoUrl,
                    _description: user.description
                }).then(value => {
                    resolve('Nuevos datos guardados con exito');
                }).catch(reason => reject('Error al guardar los datos'));
            }
        });
    }
    uploadPictureToProfile(picture, userID) {
        const file = picture;
        const filePath = '/userProfilePics/' + userID + '/' + 'myPicture.png';
        const ref = this.storage.ref(filePath);
        ref.putString(file, 'base64');
        return filePath;
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

/***/ "XKHb":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/components/review-list/review-detail/review-detail.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-item>\r\n  <ion-avatar slot=\"start\">\r\n    <img [src]=\"review.reviewer.picture\">\r\n  </ion-avatar>\r\n  <ion-label>\r\n    <h2>\r\n      {{review.reviewer.name}}\r\n    </h2>\r\n    <h3>{{review.title}}</h3>\r\n    <p *ngIf=\"review.description\">{{review.description}}</p>\r\n    <ionic-rating-component #rating\r\n                            activeIcon = \"star\"\r\n                            defaultIcon = \"star-outline\"\r\n                            halfIcon=\"star-half-outline\"\r\n                            halfStar=\"true\"\r\n                            activeColor = \"#00f29b\"\r\n                            defaultColor = \"#9d9fa6\"\r\n                            readonly=\"true\"\r\n                            [rating]=\"review.valuation\"\r\n                            fontSize = \"16px\"\r\n    >\r\n    </ionic-rating-component>\r\n  </ion-label>\r\n</ion-item>\r\n");

/***/ }),

/***/ "XhLM":
/*!*********************************************************************!*\
  !*** ./src/components/chat-list-item/chat-list-item.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaGF0LWxpc3QtaXRlbS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "Y+mS":
/*!*********************************************************!*\
  !*** ./src/components/reviewer/reviewer.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-modal.auto-height {\n  --height: auto;\n}\nion-modal.auto-height.bottom {\n  align-items: flex-end;\n}\nion-modal.auto-height .ion-page {\n  position: relative;\n  display: block;\n  contain: content;\n}\nion-modal.auto-height .ion-page .inner-content {\n  max-height: 80vh;\n  overflow: auto;\n  padding: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHJldmlld2VyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBS0UsY0FBQTtBQUhGO0FBREU7RUFDRSxxQkFBQTtBQUdKO0FBRUU7RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQUFKO0FBRUk7RUFDRSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0FBQU4iLCJmaWxlIjoicmV2aWV3ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tbW9kYWwuYXV0by1oZWlnaHQge1xyXG4gICYuYm90dG9tIHtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICB9XHJcblxyXG4gIC0taGVpZ2h0OiBhdXRvO1xyXG5cclxuICAuaW9uLXBhZ2Uge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBjb250YWluOiBjb250ZW50O1xyXG5cclxuICAgIC5pbm5lci1jb250ZW50IHtcclxuICAgICAgbWF4LWhlaWdodDogODB2aDtcclxuICAgICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "YHzb":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/views/profile-list/profile-list.view.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\r\n  <ion-text color=\"tertiary\">\r\n    <h2 class=\"ion-margin\" style=\"font-family: Montserrat; font-weight: bold;\r\n     font-style: normal; letter-spacing: 2px\">Productores</h2>\r\n  </ion-text>\r\n\r\n  <ion-list>\r\n    <ion-item *ngFor=\"let user of profileList\" [routerLink]=\"'/profile/' + user.id\">\r\n      <ion-avatar slot=\"start\">\r\n        <img [src]=\"user.picture\">\r\n      </ion-avatar>\r\n      <ion-label>\r\n        <h2>{{user.name}}</h2>\r\n      </ion-label>\r\n      <ion-button type=\"button\" style=\"font-family: Montserrat\">\r\n        Abrir\r\n      </ion-button>\r\n    </ion-item>\r\n  </ion-list>\r\n</ion-content>\r\n");

/***/ }),

/***/ "Yh7j":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/views/profile/profile.view.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content class=\"ion-padding\">\r\n  <ion-grid>\r\n    <ion-row class=\"ion-align-items-end\">\r\n      <ion-col size=\"4\">\r\n        <ion-avatar style=\"width: 95px;height: 95px;\" (click)=\"zoomImage()\">\r\n          <img [src]=\"this.profileImage\">\r\n        </ion-avatar>\r\n      </ion-col>\r\n      <ion-col size=\"8\">\r\n        <ion-text>\r\n          <h2 style=\"font-family: Montserrat\">\r\n            {{this.user.name}}\r\n          </h2>\r\n        </ion-text>\r\n        <app-review-score *ngIf=\"isFarmer\" [ownerId]=\"this.pathId\"></app-review-score>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-text *ngIf=\"user.description\">\r\n        <h4>Sobre mi:</h4>\r\n        {{user.description}}\r\n      </ion-text>\r\n    </ion-row>\r\n    <ion-button expand=\"block\" *ngIf=\"isFarmer && !isMyProfile\" (click)=\"openOrCreateChat()\">Chat</ion-button>\r\n  </ion-grid>\r\n  <div *ngIf=\"!loggedId && user.pickupDate\" style=\"font-family: Montserrat\" class=\"ion-padding-top\">\r\n    Fecha de pedidos limite: {{user.pickupDate.toLocaleDateString('es-ES', { hour: '2-digit', minute:'2-digit'})}}\r\n  </div>\r\n  <ion-button expand=\"block\" *ngIf=\"isFarmer\" (click)=\"openProfileProducts()\">Productos</ion-button>\r\n  <div>\r\n    <ion-list>\r\n      <div *ngIf=\"isFarmer && isMyProfile\">\r\n        <ion-item [color]=\"'warning'\" (click)=\"ionDatetime.open()\" *ngIf=\"!user.pickupDate\">\r\n          <ion-icon name=\"alert-circle-outline\" slot=\"start\"></ion-icon>\r\n          <ion-label class=\"ion-text-wrap\">\r\n            Aun no has seleccionado una fecha limite de pedidos, seleccionala para poder crear productos\r\n          </ion-label>\r\n        </ion-item>\r\n        <ion-item >\r\n          <ion-label>Fecha maxima de pedidoss</ion-label>\r\n          <ion-datetime #ionDatetime placeholder=\"Fecha maxima de pedidos\"\r\n                        (ionChange)=\"changeDate($event)\" [min]=\"today\" [value]=\"currentPickUpDate.toISOString()\"\r\n                        [doneText]=\"'Aceptar'\" [cancelText]=\"'Cancelar'\" [displayFormat]=\"'DD/MMM HH:mm'\"\r\n                        [pickerFormat]=\"'DD/MMM HH:mm'\"\r\n          [monthShortNames]=\"['Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic']\"></ion-datetime>\r\n        </ion-item>\r\n      </div>\r\n\r\n      <ion-item *ngIf=\"isMyProfile\" href=\"mailto:info@agrari.es\" (click)=\"window.open('mailto:info@agrari.es')\">\r\n        <ion-icon name=\"help-circle-outline\" slot=\"start\" ></ion-icon>\r\n        <ion-label class=\"ion-text-wrap\" style=\"font-family: Montserrat\">\r\n          ¿Necesitas ayuda? Mandanos un email a:\r\n          <br>\r\n          info@agrari.es\r\n        </ion-label>\r\n      </ion-item>\r\n\r\n      <ion-item *ngIf=\"isFarmer && isMyProfile\" (click)=\"modifyProfile()\">\r\n        <ion-icon name=\"settings-outline\" slot=\"start\"></ion-icon>\r\n        <ion-label class=\"ion-text-wrap\" style=\"font-family: Montserrat\">\r\n          Modificar perfil\r\n        </ion-label>\r\n      </ion-item>\r\n\r\n      <ion-item *ngIf=\"isMyProfile\" (click)=\"logout()\">\r\n        <ion-icon name=\"log-out-outline\" slot=\"start\"></ion-icon>\r\n        <ion-label class=\"ion-text-wrap\" style=\"font-family: Montserrat\">\r\n          Cerrar sesion\r\n        </ion-label>\r\n      </ion-item>\r\n    </ion-list>\r\n  </div>\r\n</ion-content>\r\n\r\n");

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
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../environments/environment */ "AytR");
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
/* harmony import */ var _components_pickup_alert_pickup_alert_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../components/pickup-alert/pickup-alert.component */ "FgMv");
/* harmony import */ var _components_reviewer_reviewer_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../components/reviewer/reviewer.component */ "UNGU");
/* harmony import */ var ionic_rating_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ionic-rating-component */ "1Nz/");
/* harmony import */ var _components_review_score_review_score_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ../components/review-score/review-score.component */ "wXBW");
/* harmony import */ var _components_review_list_review_detail_review_detail_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ../components/review-list/review-detail/review-detail.component */ "y/F2");
/* harmony import */ var _components_review_list_review_list_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ../components/review-list/review-list.component */ "u9JG");
/* harmony import */ var _components_profile_modify_modal_profile_modify_modal_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ../components/profile-modify-modal/profile-modify-modal.component */ "OMNY");
/* harmony import */ var _components_chat_list_item_chat_list_item_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ../components/chat-list-item/chat-list-item.component */ "e+5S");
/* harmony import */ var _views_chats_chats_view__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ../views/chats/chats.view */ "cZKm");
/* harmony import */ var _views_chat_chat_view__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ../views/chat/chat.view */ "PUyY");
/* harmony import */ var _components_chat_detail_chat_detail_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ../components/chat-detail/chat-detail.component */ "yPN1");
/* harmony import */ var ngx_autosize__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ngx-autosize */ "5eqV");
/* harmony import */ var _components_chat_message_chat_message_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ../components/chat-message/chat-message.component */ "ETZz");
/* harmony import */ var _views_product_search_product_search_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ../views/product-search/product-search.component */ "zvlA");















































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
            _views_chats_chats_view__WEBPACK_IMPORTED_MODULE_41__["ChatsView"],
            _views_chat_chat_view__WEBPACK_IMPORTED_MODULE_42__["ChatView"],
            /* COMPONENTS */
            _components_register_user_register_user_component__WEBPACK_IMPORTED_MODULE_14__["RegisterUserComponent"],
            _components_pickup_alert_pickup_alert_component__WEBPACK_IMPORTED_MODULE_33__["PickupAlertComponent"],
            _components_navigation_bar_navigation_bar_component__WEBPACK_IMPORTED_MODULE_15__["NavigationBarComponent"],
            _views_product_form_product_form_component__WEBPACK_IMPORTED_MODULE_18__["ProductFormComponent"],
            _views_profile_list_profile_list_view__WEBPACK_IMPORTED_MODULE_22__["ProfileListView"],
            _components_date_modal_date_modal_component__WEBPACK_IMPORTED_MODULE_31__["DateModalComponent"],
            _components_profile_modify_modal_profile_modify_modal_component__WEBPACK_IMPORTED_MODULE_39__["ProfileModifyModalComponent"],
            _components_login_user_login_user_component__WEBPACK_IMPORTED_MODULE_11__["LoginUserComponent"],
            _components_cart_item_cart_item_component__WEBPACK_IMPORTED_MODULE_24__["CartItemComponent"],
            _components_order_item_order_item_component__WEBPACK_IMPORTED_MODULE_26__["OrderItemComponent"],
            _components_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_28__["ProductListComponent"],
            _components_reviewer_reviewer_component__WEBPACK_IMPORTED_MODULE_34__["ReviewerComponent"],
            _views_product_search_product_search_component__WEBPACK_IMPORTED_MODULE_46__["ProductSearchComponent"],
            _components_review_score_review_score_component__WEBPACK_IMPORTED_MODULE_36__["ReviewScoreComponent"],
            _components_review_list_review_detail_review_detail_component__WEBPACK_IMPORTED_MODULE_37__["ReviewDetailComponent"],
            _components_review_list_review_list_component__WEBPACK_IMPORTED_MODULE_38__["ReviewListComponent"],
            _components_chat_list_item_chat_list_item_component__WEBPACK_IMPORTED_MODULE_40__["ChatListItemComponent"], _components_chat_detail_chat_detail_component__WEBPACK_IMPORTED_MODULE_43__["ChatDetailComponent"], _components_chat_message_chat_message_component__WEBPACK_IMPORTED_MODULE_45__["ChatMessageComponent"]],
        entryComponents: [],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["CommonModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"].forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_6__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].firebaseConfig),
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_9__["AngularFirestoreModule"],
            _angular_fire_analytics__WEBPACK_IMPORTED_MODULE_8__["AngularFireAnalyticsModule"],
            _angular_fire_storage__WEBPACK_IMPORTED_MODULE_16__["AngularFireStorageModule"],
            ionic_rating_component__WEBPACK_IMPORTED_MODULE_35__["IonicRatingComponentModule"],
            ngx_autosize__WEBPACK_IMPORTED_MODULE_44__["AutosizeModule"]],
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
/* harmony default export */ __webpack_exports__["default"] = (".navButtonAgri {\n  font-size: 15px !important;\n}\n\n.navButton {\n  font-size: 15px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXG5hdmlnYXRpb24tYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMEJBQUE7QUFDRjs7QUFFQTtFQUNFLDBCQUFBO0FBQ0YiLCJmaWxlIjoibmF2aWdhdGlvbi1iYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2QnV0dG9uQWdyaXtcclxuICBmb250LXNpemU6IDE1cHghaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubmF2QnV0dG9ue1xyXG4gIGZvbnQtc2l6ZTogMTVweCFpbXBvcnRhbnQ7XHJcbn1cclxuIl19 */");

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
        this._reviews = [];
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
    get reviews() {
        return this._reviews;
    }
    set reviews(value) {
        this._reviews = value;
    }
    addReview(review) {
        this.reviews.push(review);
    }
    get description() {
        return this._description;
    }
    set description(value) {
        this._description = value;
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

/***/ "apl3":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/components/chat-list-item/chat-list-item.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\r\n  chat-list-item works!\r\n</ion-content>\r\n");

/***/ }),

/***/ "b6mC":
/*!***************************************************************!*\
  !*** ./src/components/chat-detail/chat-detail.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaGF0LWRldGFpbC5jb21wb25lbnQuc2NzcyJ9 */");

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
        this.router.navigate(['myProfile']);
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
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\r\n  <ion-text color=\"tertiary\">\r\n    <h2 class=\"ion-margin\" style=\"font-family: Montserrat; font-weight: bold;\r\n     font-style: normal; letter-spacing: 2px\">Carrito</h2>\r\n  </ion-text>\r\n\r\n  <app-pickup-alert></app-pickup-alert>\r\n  <app-cart-item *ngFor=\"let product of cart\" [product]=\"product\" (productEvent)=\"cartItemEvent($event)\"></app-cart-item>\r\n  <ion-button *ngIf=\"cart.length > 0\" (click)=\"checkout()\" style=\"font-family: Montserrat\">\r\n    Comprar\r\n  </ion-button>\r\n  <div *ngIf=\"cart.length <= 0\" class=\"ion-margin\">\r\n    <ion-text>\r\n      Tu carrito esta vacio, añade un producto para comprar.\r\n    </ion-text>\r\n  </div>\r\n</ion-content>\r\n");

/***/ }),

/***/ "c9PS":
/*!*****************************************************************!*\
  !*** ./src/components/pickup-alert/pickup-alert.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwaWNrdXAtYWxlcnQuY29tcG9uZW50LnNjc3MifQ== */");

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

/***/ "cZKm":
/*!***************************************!*\
  !*** ./src/views/chats/chats.view.ts ***!
  \***************************************/
/*! exports provided: ChatsView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatsView", function() { return ChatsView; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_chats_view_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./chats.view.html */ "dHdU");
/* harmony import */ var _chats_view_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chats.view.scss */ "QSNc");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_chat_chats_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/chat/chats.service */ "qFaY");
/* harmony import */ var _services_auth_auth_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/auth/auth-service.service */ "v1tz");
/* harmony import */ var _chat_chat_view__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../chat/chat.view */ "PUyY");








let ChatsView = class ChatsView {
    constructor(modalController, chatService, authService, modalCtrl) {
        this.modalController = modalController;
        this.chatService = chatService;
        this.authService = authService;
        this.modalCtrl = modalCtrl;
    }
    ionViewWillEnter() {
        this.chatService.getAllUserChats(this.authService.getCurrentUserId()).then(value => {
            this.chatList = value;
        });
    }
    ngOnInit() { }
    dismiss() {
        // using the injected ModalController this page
        // can "dismiss" itself and optionally pass back data
        this.modalController.dismiss({
            dismissed: true
        });
    }
    openChatModal(chatId) {
        this.modalCtrl.create({
            component: _chat_chat_view__WEBPACK_IMPORTED_MODULE_7__["ChatView"],
            componentProps: {
                id: chatId,
            }
        }).then(value => {
            value.present().then(r => {
                return true;
            });
        });
    }
};
ChatsView.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _services_chat_chats_service__WEBPACK_IMPORTED_MODULE_5__["ChatsService"] },
    { type: _services_auth_auth_service_service__WEBPACK_IMPORTED_MODULE_6__["AuthServiceService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] }
];
ChatsView = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-chats',
        template: _raw_loader_chats_view_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_chats_view_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ChatsView);



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
    getAllItemLength() {
        let orderedItems = 0;
        this.ordersList.forEach(value => {
            orderedItems += value.orderedItems.length;
        });
        return orderedItems;
    }
}


/***/ }),

/***/ "dHdU":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/views/chats/chats.view.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header translucent>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button (click)=\"dismiss()\">\r\n        <ion-icon name=\"arrow-back-outline\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title>Conversaciones</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <app-chat-detail *ngFor=\"let chat of chatList\" (click)=\"openChatModal(chat.id)\"></app-chat-detail>\r\n</ion-content>\r\n");

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

/***/ "e+5S":
/*!*******************************************************************!*\
  !*** ./src/components/chat-list-item/chat-list-item.component.ts ***!
  \*******************************************************************/
/*! exports provided: ChatListItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatListItemComponent", function() { return ChatListItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_chat_list_item_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./chat-list-item.component.html */ "apl3");
/* harmony import */ var _chat_list_item_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chat-list-item.component.scss */ "XhLM");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let ChatListItemComponent = class ChatListItemComponent {
    constructor() { }
    ngOnInit() { }
};
ChatListItemComponent.ctorParameters = () => [];
ChatListItemComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-chat-list-item',
        template: _raw_loader_chat_list_item_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_chat_list_item_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ChatListItemComponent);



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

/***/ "f1dN":
/*!***************************************!*\
  !*** ./src/views/chat/chat.view.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaGF0LnZpZXcuc2NzcyJ9 */");

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
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content class=\"ion-padding\">\r\n  <ion-grid>\r\n    <ion-row class=\"ion-align-items-end ion-justify-content-center\">\r\n      <ion-col size=\"6\">\r\n        <ion-img class=\"profile-photo\" [src]=\"this.product.picture\"></ion-img>\r\n      </ion-col>\r\n      <ion-col size=\"12\">\r\n        <ion-text class=\"ion-padding\">\r\n          <h2 class=\"ion-no-margin\" style=\"font-family: Montserrat\">\r\n            {{this.product.name}}\r\n          </h2>\r\n          <h3>\r\n            {{this.product.price | currency:'EUR'}} / {{unitsList[product.unit]}}\r\n          </h3>\r\n          <h5>\r\n            {{this.product.description}}\r\n          </h5>\r\n          <ion-button type=\"button\" *ngIf=\"isOwner\" [routerLink]=\"'/productForm/' + product.id\" expand=\"block\">\r\n            Modificar\r\n          </ion-button>\r\n        </ion-text>\r\n      </ion-col>\r\n    </ion-row>\r\n    <div *ngIf=\"!isOwner\" style=\"text-align: center\">\r\n      <app-pickup-alert></app-pickup-alert>\r\n\r\n      <ion-grid>\r\n        <ion-row class=\"ion-justify-content-center\">\r\n          <ion-button type=\"button\" class=\"roundButton\" (click)=\"productOrder.reduce()\">-</ion-button>\r\n          <ion-col size=\"3\">\r\n            <ion-input type=\"number\" readonly=\"true\" [value]=\"productOrder.productAmount\" class=\"ion-\" [min]=\"0\"></ion-input>\r\n          </ion-col>\r\n          <ion-button type=\"button\" class=\"roundButton\" (click)=\"productOrder.add()\">+</ion-button>\r\n        </ion-row>\r\n      </ion-grid>\r\n\r\n      <ion-button [disabled]=\"productOrder.productAmount <= 0\" type=\"button\" [color]=\"'success'\" (click)=\"addToCart()\" style=\"font-family: Montserrat\">\r\n        Añadir a la cesta - {{productOrder.productAmount * productOrder.priceByEach | currency:'EUR'}}\r\n      </ion-button>\r\n    </div>\r\n    <ion-card>\r\n      <ion-item>\r\n        <ion-avatar slot=\"start\">\r\n          <img [src]=\"productOwner.picture\">\r\n        </ion-avatar>\r\n        <ion-label>{{productOwner.name}}</ion-label>\r\n        <ion-button fill=\"outline\" slot=\"end\" (click)=\"openOwnerProfile()\">Ver perfil</ion-button>\r\n      </ion-item>\r\n    </ion-card>\r\n    <div>\r\n      La fecha limite de pedidos es: {{productOwner.pickupDate | date}}\r\n    </div>\r\n  </ion-grid>\r\n</ion-content>\r\n");

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

/***/ "kmbO":
/*!****************************************************************!*\
  !*** ./src/views/product-search/product-search.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/*\n * App Global CSS\n * ----------------------------------------------------------------------------\n * Put style rules here that you want to apply globally. These styles are for\n * the entire app and not just one component. Additionally, this file can be\n * used as an entry point to import other CSS/Sass files to be included in the\n * output CSS.\n * For more information on global stylesheets, visit the documentation:\n * https://ionicframework.com/docs/layout/global-stylesheets\n */\n/* Core CSS required for Ionic components to work properly */\nhtml.ios {\n  --ion-default-font: -apple-system, BlinkMacSystemFont, \"Helvetica Neue\", \"Roboto\", sans-serif;\n}\nhtml.md {\n  --ion-default-font: \"Roboto\", \"Helvetica Neue\", sans-serif;\n}\nhtml {\n  --ion-font-family: var(--ion-default-font);\n}\nbody {\n  background: var(--ion-background-color);\n}\nbody.backdrop-no-scroll {\n  overflow: hidden;\n}\nhtml.ios ion-modal.modal-card .ion-page > ion-header > ion-toolbar:first-of-type {\n  padding-top: 0px;\n}\nhtml.ios ion-modal .ion-page {\n  border-radius: inherit;\n}\n.ion-color-primary {\n  --ion-color-base: var(--ion-color-primary, #3880ff) !important;\n  --ion-color-base-rgb: var(--ion-color-primary-rgb, 56, 128, 255) !important;\n  --ion-color-contrast: var(--ion-color-primary-contrast, #fff) !important;\n  --ion-color-contrast-rgb: var(--ion-color-primary-contrast-rgb, 255, 255, 255) !important;\n  --ion-color-shade: var(--ion-color-primary-shade, #3171e0) !important;\n  --ion-color-tint: var(--ion-color-primary-tint, #4c8dff) !important;\n}\n.ion-color-secondary {\n  --ion-color-base: var(--ion-color-secondary, #3dc2ff) !important;\n  --ion-color-base-rgb: var(--ion-color-secondary-rgb, 61, 194, 255) !important;\n  --ion-color-contrast: var(--ion-color-secondary-contrast, #fff) !important;\n  --ion-color-contrast-rgb: var(--ion-color-secondary-contrast-rgb, 255, 255, 255) !important;\n  --ion-color-shade: var(--ion-color-secondary-shade, #36abe0) !important;\n  --ion-color-tint: var(--ion-color-secondary-tint, #50c8ff) !important;\n}\n.ion-color-tertiary {\n  --ion-color-base: var(--ion-color-tertiary, #5260ff) !important;\n  --ion-color-base-rgb: var(--ion-color-tertiary-rgb, 82, 96, 255) !important;\n  --ion-color-contrast: var(--ion-color-tertiary-contrast, #fff) !important;\n  --ion-color-contrast-rgb: var(--ion-color-tertiary-contrast-rgb, 255, 255, 255) !important;\n  --ion-color-shade: var(--ion-color-tertiary-shade, #4854e0) !important;\n  --ion-color-tint: var(--ion-color-tertiary-tint, #6370ff) !important;\n}\n.ion-color-success {\n  --ion-color-base: var(--ion-color-success, #2dd36f) !important;\n  --ion-color-base-rgb: var(--ion-color-success-rgb, 45, 211, 111) !important;\n  --ion-color-contrast: var(--ion-color-success-contrast, #fff) !important;\n  --ion-color-contrast-rgb: var(--ion-color-success-contrast-rgb, 255, 255, 255) !important;\n  --ion-color-shade: var(--ion-color-success-shade, #28ba62) !important;\n  --ion-color-tint: var(--ion-color-success-tint, #42d77d) !important;\n}\n.ion-color-warning {\n  --ion-color-base: var(--ion-color-warning, #ffc409) !important;\n  --ion-color-base-rgb: var(--ion-color-warning-rgb, 255, 196, 9) !important;\n  --ion-color-contrast: var(--ion-color-warning-contrast, #000) !important;\n  --ion-color-contrast-rgb: var(--ion-color-warning-contrast-rgb, 0, 0, 0) !important;\n  --ion-color-shade: var(--ion-color-warning-shade, #e0ac08) !important;\n  --ion-color-tint: var(--ion-color-warning-tint, #ffca22) !important;\n}\n.ion-color-danger {\n  --ion-color-base: var(--ion-color-danger, #eb445a) !important;\n  --ion-color-base-rgb: var(--ion-color-danger-rgb, 235, 68, 90) !important;\n  --ion-color-contrast: var(--ion-color-danger-contrast, #fff) !important;\n  --ion-color-contrast-rgb: var(--ion-color-danger-contrast-rgb, 255, 255, 255) !important;\n  --ion-color-shade: var(--ion-color-danger-shade, #cf3c4f) !important;\n  --ion-color-tint: var(--ion-color-danger-tint, #ed576b) !important;\n}\n.ion-color-light {\n  --ion-color-base: var(--ion-color-light, #f4f5f8) !important;\n  --ion-color-base-rgb: var(--ion-color-light-rgb, 244, 245, 248) !important;\n  --ion-color-contrast: var(--ion-color-light-contrast, #000) !important;\n  --ion-color-contrast-rgb: var(--ion-color-light-contrast-rgb, 0, 0, 0) !important;\n  --ion-color-shade: var(--ion-color-light-shade, #d7d8da) !important;\n  --ion-color-tint: var(--ion-color-light-tint, #f5f6f9) !important;\n}\n.ion-color-medium {\n  --ion-color-base: var(--ion-color-medium, #92949c) !important;\n  --ion-color-base-rgb: var(--ion-color-medium-rgb, 146, 148, 156) !important;\n  --ion-color-contrast: var(--ion-color-medium-contrast, #fff) !important;\n  --ion-color-contrast-rgb: var(--ion-color-medium-contrast-rgb, 255, 255, 255) !important;\n  --ion-color-shade: var(--ion-color-medium-shade, #808289) !important;\n  --ion-color-tint: var(--ion-color-medium-tint, #9d9fa6) !important;\n}\n.ion-color-dark {\n  --ion-color-base: var(--ion-color-dark, #222428) !important;\n  --ion-color-base-rgb: var(--ion-color-dark-rgb, 34, 36, 40) !important;\n  --ion-color-contrast: var(--ion-color-dark-contrast, #fff) !important;\n  --ion-color-contrast-rgb: var(--ion-color-dark-contrast-rgb, 255, 255, 255) !important;\n  --ion-color-shade: var(--ion-color-dark-shade, #1e2023) !important;\n  --ion-color-tint: var(--ion-color-dark-tint, #383a3e) !important;\n}\n.ion-page {\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  display: flex;\n  position: absolute;\n  flex-direction: column;\n  justify-content: space-between;\n  contain: layout size style;\n  overflow: hidden;\n  z-index: 0;\n}\n.split-pane-visible > .ion-page.split-pane-main {\n  position: relative;\n}\nion-route,\nion-route-redirect,\nion-router,\nion-select-option,\nion-nav-controller,\nion-menu-controller,\nion-action-sheet-controller,\nion-alert-controller,\nion-loading-controller,\nion-modal-controller,\nion-picker-controller,\nion-popover-controller,\nion-toast-controller,\n.ion-page-hidden,\n[hidden] {\n  /* stylelint-disable-next-line declaration-no-important */\n  display: none !important;\n}\n.ion-page-invisible {\n  opacity: 0;\n}\n.can-go-back > ion-header ion-back-button {\n  display: block;\n}\nhtml.plt-ios.plt-hybrid, html.plt-ios.plt-pwa {\n  --ion-statusbar-padding: 20px;\n}\n@supports (padding-top: 20px) {\n  html {\n    --ion-safe-area-top: var(--ion-statusbar-padding);\n  }\n}\n@supports (padding-top: constant(safe-area-inset-top)) {\n  html {\n    --ion-safe-area-top: constant(safe-area-inset-top);\n    --ion-safe-area-bottom: constant(safe-area-inset-bottom);\n    --ion-safe-area-left: constant(safe-area-inset-left);\n    --ion-safe-area-right: constant(safe-area-inset-right);\n  }\n}\n@supports (padding-top: env(safe-area-inset-top)) {\n  html {\n    --ion-safe-area-top: env(safe-area-inset-top);\n    --ion-safe-area-bottom: env(safe-area-inset-bottom);\n    --ion-safe-area-left: env(safe-area-inset-left);\n    --ion-safe-area-right: env(safe-area-inset-right);\n  }\n}\nion-card.ion-color .ion-inherit-color,\nion-card-header.ion-color .ion-inherit-color {\n  color: inherit;\n}\n.menu-content {\n  transform: translate3d(0,  0,  0);\n}\n.menu-content-open {\n  cursor: pointer;\n  touch-action: manipulation;\n  pointer-events: none;\n}\n.ios .menu-content-reveal {\n  box-shadow: -8px 0 42px rgba(0, 0, 0, 0.08);\n}\n[dir=rtl].ios .menu-content-reveal {\n  box-shadow: 8px 0 42px rgba(0, 0, 0, 0.08);\n}\n.md .menu-content-reveal {\n  box-shadow: 4px 0px 16px rgba(0, 0, 0, 0.18);\n}\n.md .menu-content-push {\n  box-shadow: 4px 0px 16px rgba(0, 0, 0, 0.18);\n}\n/* Basic CSS for apps built with Ionic */\naudio,\ncanvas,\nprogress,\nvideo {\n  vertical-align: baseline;\n}\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\nb,\nstrong {\n  font-weight: bold;\n}\nimg {\n  max-width: 100%;\n  border: 0;\n}\nsvg:not(:root) {\n  overflow: hidden;\n}\nfigure {\n  margin: 1em 40px;\n}\nhr {\n  height: 1px;\n  border-width: 0;\n  box-sizing: content-box;\n}\npre {\n  overflow: auto;\n}\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace;\n  font-size: 1em;\n}\nlabel,\ninput,\nselect,\ntextarea {\n  font-family: inherit;\n  line-height: normal;\n}\ntextarea {\n  overflow: auto;\n  height: auto;\n  font: inherit;\n  color: inherit;\n}\ntextarea::placeholder {\n  padding-left: 2px;\n}\nform,\ninput,\noptgroup,\nselect {\n  margin: 0;\n  font: inherit;\n  color: inherit;\n}\nhtml input[type=button],\ninput[type=reset],\ninput[type=submit] {\n  cursor: pointer;\n  -webkit-appearance: button;\n}\na,\na div,\na span,\na ion-icon,\na ion-label,\nbutton,\nbutton div,\nbutton span,\nbutton ion-icon,\nbutton ion-label,\n.ion-tappable,\n[tappable],\n[tappable] div,\n[tappable] span,\n[tappable] ion-icon,\n[tappable] ion-label,\ninput,\ntextarea {\n  touch-action: manipulation;\n}\na ion-label,\nbutton ion-label {\n  pointer-events: none;\n}\nbutton {\n  border: 0;\n  border-radius: 0;\n  font-family: inherit;\n  font-style: inherit;\n  font-variant: inherit;\n  line-height: 1;\n  text-transform: none;\n  cursor: pointer;\n  -webkit-appearance: button;\n}\n[tappable] {\n  cursor: pointer;\n}\na[disabled],\nbutton[disabled],\nhtml input[disabled] {\n  cursor: default;\n}\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  padding: 0;\n  border: 0;\n}\ninput[type=checkbox],\ninput[type=radio] {\n  padding: 0;\n  box-sizing: border-box;\n}\ninput[type=number]::-webkit-inner-spin-button,\ninput[type=number]::-webkit-outer-spin-button {\n  height: auto;\n}\ninput[type=search]::-webkit-search-cancel-button,\ninput[type=search]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\ntd,\nth {\n  padding: 0;\n}\n* {\n  box-sizing: border-box;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  -webkit-tap-highlight-color: transparent;\n  -webkit-touch-callout: none;\n}\nhtml {\n  width: 100%;\n  height: 100%;\n  -webkit-text-size-adjust: 100%;\n          text-size-adjust: 100%;\n}\nhtml:not(.hydrated) body {\n  display: none;\n}\nhtml.plt-pwa {\n  height: 100vh;\n}\nbody {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding-left: 0;\n  padding-right: 0;\n  padding-top: 0;\n  padding-bottom: 0;\n  position: fixed;\n  width: 100%;\n  max-width: 100%;\n  height: 100%;\n  max-height: 100%;\n  text-rendering: optimizeLegibility;\n  overflow: hidden;\n  touch-action: manipulation;\n  -webkit-user-drag: none;\n  -ms-content-zooming: none;\n  word-wrap: break-word;\n  overscroll-behavior-y: none;\n  -webkit-text-size-adjust: none;\n          text-size-adjust: none;\n}\nhtml {\n  font-family: var(--ion-font-family);\n}\na {\n  background-color: transparent;\n  color: var(--ion-color-primary, #3880ff);\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  margin-top: 16px;\n  margin-bottom: 10px;\n  font-weight: 500;\n  line-height: 1.2;\n}\nh1 {\n  margin-top: 20px;\n  font-size: 26px;\n}\nh2 {\n  margin-top: 18px;\n  font-size: 24px;\n}\nh3 {\n  font-size: 22px;\n}\nh4 {\n  font-size: 20px;\n}\nh5 {\n  font-size: 18px;\n}\nh6 {\n  font-size: 16px;\n}\nsmall {\n  font-size: 75%;\n}\nsub,\nsup {\n  position: relative;\n  font-size: 75%;\n  line-height: 0;\n  vertical-align: baseline;\n}\nsup {\n  top: -0.5em;\n}\nsub {\n  bottom: -0.25em;\n}\n.ion-hide {\n  display: none !important;\n}\n.ion-hide-up {\n  display: none !important;\n}\n.ion-hide-down {\n  display: none !important;\n}\n@media (min-width: 576px) {\n  .ion-hide-sm-up {\n    display: none !important;\n  }\n}\n@media (max-width: 575.98px) {\n  .ion-hide-sm-down {\n    display: none !important;\n  }\n}\n@media (min-width: 768px) {\n  .ion-hide-md-up {\n    display: none !important;\n  }\n}\n@media (max-width: 767.98px) {\n  .ion-hide-md-down {\n    display: none !important;\n  }\n}\n@media (min-width: 992px) {\n  .ion-hide-lg-up {\n    display: none !important;\n  }\n}\n@media (max-width: 991.98px) {\n  .ion-hide-lg-down {\n    display: none !important;\n  }\n}\n@media (min-width: 1200px) {\n  .ion-hide-xl-up {\n    display: none !important;\n  }\n}\n@media (max-width: 1199.98px) {\n  .ion-hide-xl-down {\n    display: none !important;\n  }\n}\n/* Optional CSS utils that can be commented out */\n.ion-no-padding {\n  --padding-start: 0;\n  --padding-end: 0;\n  --padding-top: 0;\n  --padding-bottom: 0;\n  padding-left: 0;\n  padding-right: 0;\n  padding-top: 0;\n  padding-bottom: 0;\n}\n.ion-padding {\n  --padding-start: var(--ion-padding, 16px);\n  --padding-end: var(--ion-padding, 16px);\n  --padding-top: var(--ion-padding, 16px);\n  --padding-bottom: var(--ion-padding, 16px);\n  padding-left: var(--ion-padding, 16px);\n  padding-right: var(--ion-padding, 16px);\n  padding-top: var(--ion-padding, 16px);\n  padding-bottom: var(--ion-padding, 16px);\n}\n@supports (margin-inline-start: 0) or (-webkit-margin-start: 0) {\n  .ion-padding {\n    padding-left: unset;\n    padding-right: unset;\n    padding-inline-start: var(--ion-padding, 16px);\n    padding-inline-end: var(--ion-padding, 16px);\n  }\n}\n.ion-padding-top {\n  --padding-top: var(--ion-padding, 16px);\n  padding-top: var(--ion-padding, 16px);\n}\n.ion-padding-start {\n  --padding-start: var(--ion-padding, 16px);\n  padding-left: var(--ion-padding, 16px);\n}\n@supports (margin-inline-start: 0) or (-webkit-margin-start: 0) {\n  .ion-padding-start {\n    padding-left: unset;\n    padding-inline-start: var(--ion-padding, 16px);\n  }\n}\n.ion-padding-end {\n  --padding-end: var(--ion-padding, 16px);\n  padding-right: var(--ion-padding, 16px);\n}\n@supports (margin-inline-start: 0) or (-webkit-margin-start: 0) {\n  .ion-padding-end {\n    padding-right: unset;\n    padding-inline-end: var(--ion-padding, 16px);\n  }\n}\n.ion-padding-bottom {\n  --padding-bottom: var(--ion-padding, 16px);\n  padding-bottom: var(--ion-padding, 16px);\n}\n.ion-padding-vertical {\n  --padding-top: var(--ion-padding, 16px);\n  --padding-bottom: var(--ion-padding, 16px);\n  padding-top: var(--ion-padding, 16px);\n  padding-bottom: var(--ion-padding, 16px);\n}\n.ion-padding-horizontal {\n  --padding-start: var(--ion-padding, 16px);\n  --padding-end: var(--ion-padding, 16px);\n  padding-left: var(--ion-padding, 16px);\n  padding-right: var(--ion-padding, 16px);\n}\n@supports (margin-inline-start: 0) or (-webkit-margin-start: 0) {\n  .ion-padding-horizontal {\n    padding-left: unset;\n    padding-right: unset;\n    padding-inline-start: var(--ion-padding, 16px);\n    padding-inline-end: var(--ion-padding, 16px);\n  }\n}\n.ion-no-margin {\n  --margin-start: 0;\n  --margin-end: 0;\n  --margin-top: 0;\n  --margin-bottom: 0;\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.ion-margin {\n  --margin-start: var(--ion-margin, 16px);\n  --margin-end: var(--ion-margin, 16px);\n  --margin-top: var(--ion-margin, 16px);\n  --margin-bottom: var(--ion-margin, 16px);\n  margin-left: var(--ion-margin, 16px);\n  margin-right: var(--ion-margin, 16px);\n  margin-top: var(--ion-margin, 16px);\n  margin-bottom: var(--ion-margin, 16px);\n}\n@supports (margin-inline-start: 0) or (-webkit-margin-start: 0) {\n  .ion-margin {\n    margin-left: unset;\n    margin-right: unset;\n    margin-inline-start: var(--ion-margin, 16px);\n    margin-inline-end: var(--ion-margin, 16px);\n  }\n}\n.ion-margin-top {\n  --margin-top: var(--ion-margin, 16px);\n  margin-top: var(--ion-margin, 16px);\n}\n.ion-margin-start {\n  --margin-start: var(--ion-margin, 16px);\n  margin-left: var(--ion-margin, 16px);\n}\n@supports (margin-inline-start: 0) or (-webkit-margin-start: 0) {\n  .ion-margin-start {\n    margin-left: unset;\n    margin-inline-start: var(--ion-margin, 16px);\n  }\n}\n.ion-margin-end {\n  --margin-end: var(--ion-margin, 16px);\n  margin-right: var(--ion-margin, 16px);\n}\n@supports (margin-inline-start: 0) or (-webkit-margin-start: 0) {\n  .ion-margin-end {\n    margin-right: unset;\n    margin-inline-end: var(--ion-margin, 16px);\n  }\n}\n.ion-margin-bottom {\n  --margin-bottom: var(--ion-margin, 16px);\n  margin-bottom: var(--ion-margin, 16px);\n}\n.ion-margin-vertical {\n  --margin-top: var(--ion-margin, 16px);\n  --margin-bottom: var(--ion-margin, 16px);\n  margin-top: var(--ion-margin, 16px);\n  margin-bottom: var(--ion-margin, 16px);\n}\n.ion-margin-horizontal {\n  --margin-start: var(--ion-margin, 16px);\n  --margin-end: var(--ion-margin, 16px);\n  margin-left: var(--ion-margin, 16px);\n  margin-right: var(--ion-margin, 16px);\n}\n@supports (margin-inline-start: 0) or (-webkit-margin-start: 0) {\n  .ion-margin-horizontal {\n    margin-left: unset;\n    margin-right: unset;\n    margin-inline-start: var(--ion-margin, 16px);\n    margin-inline-end: var(--ion-margin, 16px);\n  }\n}\n.ion-float-left {\n  float: left !important;\n}\n.ion-float-right {\n  float: right !important;\n}\n.ion-float-start {\n  float: left !important;\n}\n[dir=rtl] .ion-float-start, :host-context([dir=rtl]) .ion-float-start {\n  float: right !important;\n}\n.ion-float-end {\n  float: right !important;\n}\n[dir=rtl] .ion-float-end, :host-context([dir=rtl]) .ion-float-end {\n  float: left !important;\n}\n@media (min-width: 576px) {\n  .ion-float-sm-left {\n    float: left !important;\n  }\n\n  .ion-float-sm-right {\n    float: right !important;\n  }\n\n  .ion-float-sm-start {\n    float: left !important;\n  }\n  [dir=rtl] .ion-float-sm-start, :host-context([dir=rtl]) .ion-float-sm-start {\n    float: right !important;\n  }\n\n  .ion-float-sm-end {\n    float: right !important;\n  }\n  [dir=rtl] .ion-float-sm-end, :host-context([dir=rtl]) .ion-float-sm-end {\n    float: left !important;\n  }\n}\n@media (min-width: 768px) {\n  .ion-float-md-left {\n    float: left !important;\n  }\n\n  .ion-float-md-right {\n    float: right !important;\n  }\n\n  .ion-float-md-start {\n    float: left !important;\n  }\n  [dir=rtl] .ion-float-md-start, :host-context([dir=rtl]) .ion-float-md-start {\n    float: right !important;\n  }\n\n  .ion-float-md-end {\n    float: right !important;\n  }\n  [dir=rtl] .ion-float-md-end, :host-context([dir=rtl]) .ion-float-md-end {\n    float: left !important;\n  }\n}\n@media (min-width: 992px) {\n  .ion-float-lg-left {\n    float: left !important;\n  }\n\n  .ion-float-lg-right {\n    float: right !important;\n  }\n\n  .ion-float-lg-start {\n    float: left !important;\n  }\n  [dir=rtl] .ion-float-lg-start, :host-context([dir=rtl]) .ion-float-lg-start {\n    float: right !important;\n  }\n\n  .ion-float-lg-end {\n    float: right !important;\n  }\n  [dir=rtl] .ion-float-lg-end, :host-context([dir=rtl]) .ion-float-lg-end {\n    float: left !important;\n  }\n}\n@media (min-width: 1200px) {\n  .ion-float-xl-left {\n    float: left !important;\n  }\n\n  .ion-float-xl-right {\n    float: right !important;\n  }\n\n  .ion-float-xl-start {\n    float: left !important;\n  }\n  [dir=rtl] .ion-float-xl-start, :host-context([dir=rtl]) .ion-float-xl-start {\n    float: right !important;\n  }\n\n  .ion-float-xl-end {\n    float: right !important;\n  }\n  [dir=rtl] .ion-float-xl-end, :host-context([dir=rtl]) .ion-float-xl-end {\n    float: left !important;\n  }\n}\n.ion-text-center {\n  text-align: center !important;\n}\n.ion-text-justify {\n  text-align: justify !important;\n}\n.ion-text-start {\n  text-align: start !important;\n}\n.ion-text-end {\n  text-align: end !important;\n}\n.ion-text-left {\n  text-align: left !important;\n}\n.ion-text-right {\n  text-align: right !important;\n}\n.ion-text-nowrap {\n  white-space: nowrap !important;\n}\n.ion-text-wrap {\n  white-space: normal !important;\n}\n@media (min-width: 576px) {\n  .ion-text-sm-center {\n    text-align: center !important;\n  }\n\n  .ion-text-sm-justify {\n    text-align: justify !important;\n  }\n\n  .ion-text-sm-start {\n    text-align: start !important;\n  }\n\n  .ion-text-sm-end {\n    text-align: end !important;\n  }\n\n  .ion-text-sm-left {\n    text-align: left !important;\n  }\n\n  .ion-text-sm-right {\n    text-align: right !important;\n  }\n\n  .ion-text-sm-nowrap {\n    white-space: nowrap !important;\n  }\n\n  .ion-text-sm-wrap {\n    white-space: normal !important;\n  }\n}\n@media (min-width: 768px) {\n  .ion-text-md-center {\n    text-align: center !important;\n  }\n\n  .ion-text-md-justify {\n    text-align: justify !important;\n  }\n\n  .ion-text-md-start {\n    text-align: start !important;\n  }\n\n  .ion-text-md-end {\n    text-align: end !important;\n  }\n\n  .ion-text-md-left {\n    text-align: left !important;\n  }\n\n  .ion-text-md-right {\n    text-align: right !important;\n  }\n\n  .ion-text-md-nowrap {\n    white-space: nowrap !important;\n  }\n\n  .ion-text-md-wrap {\n    white-space: normal !important;\n  }\n}\n@media (min-width: 992px) {\n  .ion-text-lg-center {\n    text-align: center !important;\n  }\n\n  .ion-text-lg-justify {\n    text-align: justify !important;\n  }\n\n  .ion-text-lg-start {\n    text-align: start !important;\n  }\n\n  .ion-text-lg-end {\n    text-align: end !important;\n  }\n\n  .ion-text-lg-left {\n    text-align: left !important;\n  }\n\n  .ion-text-lg-right {\n    text-align: right !important;\n  }\n\n  .ion-text-lg-nowrap {\n    white-space: nowrap !important;\n  }\n\n  .ion-text-lg-wrap {\n    white-space: normal !important;\n  }\n}\n@media (min-width: 1200px) {\n  .ion-text-xl-center {\n    text-align: center !important;\n  }\n\n  .ion-text-xl-justify {\n    text-align: justify !important;\n  }\n\n  .ion-text-xl-start {\n    text-align: start !important;\n  }\n\n  .ion-text-xl-end {\n    text-align: end !important;\n  }\n\n  .ion-text-xl-left {\n    text-align: left !important;\n  }\n\n  .ion-text-xl-right {\n    text-align: right !important;\n  }\n\n  .ion-text-xl-nowrap {\n    white-space: nowrap !important;\n  }\n\n  .ion-text-xl-wrap {\n    white-space: normal !important;\n  }\n}\n.ion-text-uppercase {\n  /* stylelint-disable-next-line declaration-no-important */\n  text-transform: uppercase !important;\n}\n.ion-text-lowercase {\n  /* stylelint-disable-next-line declaration-no-important */\n  text-transform: lowercase !important;\n}\n.ion-text-capitalize {\n  /* stylelint-disable-next-line declaration-no-important */\n  text-transform: capitalize !important;\n}\n@media (min-width: 576px) {\n  .ion-text-sm-uppercase {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: uppercase !important;\n  }\n\n  .ion-text-sm-lowercase {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: lowercase !important;\n  }\n\n  .ion-text-sm-capitalize {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: capitalize !important;\n  }\n}\n@media (min-width: 768px) {\n  .ion-text-md-uppercase {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: uppercase !important;\n  }\n\n  .ion-text-md-lowercase {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: lowercase !important;\n  }\n\n  .ion-text-md-capitalize {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: capitalize !important;\n  }\n}\n@media (min-width: 992px) {\n  .ion-text-lg-uppercase {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: uppercase !important;\n  }\n\n  .ion-text-lg-lowercase {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: lowercase !important;\n  }\n\n  .ion-text-lg-capitalize {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: capitalize !important;\n  }\n}\n@media (min-width: 1200px) {\n  .ion-text-xl-uppercase {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: uppercase !important;\n  }\n\n  .ion-text-xl-lowercase {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: lowercase !important;\n  }\n\n  .ion-text-xl-capitalize {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: capitalize !important;\n  }\n}\n.ion-align-self-start {\n  align-self: flex-start !important;\n}\n.ion-align-self-end {\n  align-self: flex-end !important;\n}\n.ion-align-self-center {\n  align-self: center !important;\n}\n.ion-align-self-stretch {\n  align-self: stretch !important;\n}\n.ion-align-self-baseline {\n  align-self: baseline !important;\n}\n.ion-align-self-auto {\n  align-self: auto !important;\n}\n.ion-wrap {\n  flex-wrap: wrap !important;\n}\n.ion-nowrap {\n  flex-wrap: nowrap !important;\n}\n.ion-wrap-reverse {\n  flex-wrap: wrap-reverse !important;\n}\n.ion-justify-content-start {\n  justify-content: flex-start !important;\n}\n.ion-justify-content-center {\n  justify-content: center !important;\n}\n.ion-justify-content-end {\n  justify-content: flex-end !important;\n}\n.ion-justify-content-around {\n  justify-content: space-around !important;\n}\n.ion-justify-content-between {\n  justify-content: space-between !important;\n}\n.ion-justify-content-evenly {\n  justify-content: space-evenly !important;\n}\n.ion-align-items-start {\n  align-items: flex-start !important;\n}\n.ion-align-items-center {\n  align-items: center !important;\n}\n.ion-align-items-end {\n  align-items: flex-end !important;\n}\n.ion-align-items-stretch {\n  align-items: stretch !important;\n}\n.ion-align-items-baseline {\n  align-items: baseline !important;\n}\n@font-face {\n  font-family: \"Montserrat\";\n  src: url('Montserrat-Regular.ttf');\n}\n@font-face {\n  font-family: \"Assistant\";\n  src: url('Assistant-Regular.ttf');\n}\nion-content.background {\n  --background: url('FondoAgrari.png') 0 0/100% 100% no-repeat;\n}\n.page-title {\n  font-family: Montserrat;\n  font-size: 22px;\n  color: #FFFFFF;\n  padding-top: 20px;\n}\n.image-zoom .modal-wrapper {\n  height: 70vh;\n  max-height: 80vh;\n  max-width: 100vw;\n  position: absolute;\n  display: block;\n}\n.review-modal .modal-wrapper {\n  position: absolute;\n  display: block;\n}\nion-modal.auto-height {\n  --height: auto;\n  --width: 95vw;\n  --border-radius: 15px;\n}\nion-modal.auto-height.bottom {\n  align-items: flex-end;\n}\nion-modal.auto-height .ion-page {\n  position: relative;\n  display: block;\n  contain: content;\n}\nion-modal.auto-height .ion-page .inner-content {\n  max-height: 80vh;\n  max-width: 95vw;\n  overflow: auto;\n  padding: 10px;\n}\n.iosSearchFix {\n  padding: 0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcZ2xvYmFsLnNjc3MiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvQGlvbmljL2FuZ3VsYXIvc3JjL2Nzcy9jb3JlLnNjc3MiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvQGlvbmljL2FuZ3VsYXIvY3NzL2NvcmUuY3NzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9hbmd1bGFyL3NyYy90aGVtZXMvaW9uaWMubWl4aW5zLnNjc3MiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvQGlvbmljL2FuZ3VsYXIvc3JjL3RoZW1lcy9pb25pYy5nbG9iYWxzLnNjc3MiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvQGlvbmljL2FuZ3VsYXIvc3JjL2NvbXBvbmVudHMvbWVudS9tZW51Lmlvcy52YXJzLnNjc3MiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvQGlvbmljL2FuZ3VsYXIvc3JjL2NvbXBvbmVudHMvbWVudS9tZW51Lm1kLnZhcnMuc2NzcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9zcmMvY3NzL25vcm1hbGl6ZS5zY3NzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9hbmd1bGFyL2Nzcy9ub3JtYWxpemUuY3NzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9hbmd1bGFyL3NyYy9jc3Mvc3RydWN0dXJlLnNjc3MiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvQGlvbmljL2FuZ3VsYXIvY3NzL3N0cnVjdHVyZS5jc3MiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvQGlvbmljL2FuZ3VsYXIvc3JjL2Nzcy90eXBvZ3JhcGh5LnNjc3MiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvQGlvbmljL2FuZ3VsYXIvY3NzL3R5cG9ncmFwaHkuY3NzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9hbmd1bGFyL3NyYy9jc3MvZGlzcGxheS5zY3NzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9hbmd1bGFyL2Nzcy9kaXNwbGF5LmNzcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9zcmMvY3NzL3BhZGRpbmcuc2NzcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9jc3MvcGFkZGluZy5jc3MiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvQGlvbmljL2FuZ3VsYXIvc3JjL2Nzcy9mbG9hdC1lbGVtZW50cy5zY3NzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9hbmd1bGFyL2Nzcy9mbG9hdC1lbGVtZW50cy5jc3MiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvQGlvbmljL2FuZ3VsYXIvc3JjL2Nzcy90ZXh0LWFsaWdubWVudC5zY3NzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9hbmd1bGFyL2Nzcy90ZXh0LWFsaWdubWVudC5jc3MiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvQGlvbmljL2FuZ3VsYXIvc3JjL2Nzcy90ZXh0LXRyYW5zZm9ybWF0aW9uLnNjc3MiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvQGlvbmljL2FuZ3VsYXIvY3NzL3RleHQtdHJhbnNmb3JtYXRpb24uY3NzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9hbmd1bGFyL3NyYy9jc3MvZmxleC11dGlscy5zY3NzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9hbmd1bGFyL2Nzcy9mbGV4LXV0aWxzLmNzcyIsIi4uXFwuLlxcLi5cXHByb2R1Y3Qtc2VhcmNoLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7RUFBQTtBQVdBLDREQUFBO0FDSEE7RUFDRSw2RkFBQTtBQ1BGO0FEU0E7RUFDRSwwREFBQTtBQ05GO0FEU0E7RUFDRSwwQ0FBQTtBQ05GO0FEU0E7RUFDRSx1Q0FBQTtBQ05GO0FEU0E7RUFDRSxnQkFBQTtBQ05GO0FEbUJBO0VBQ0UsZ0JBQUE7QUNoQkY7QURzQkE7RUFDRSxzQkFBQTtBQ25CRjtBRDRDRTtFQVRBLDhEQUFBO0VBQ0EsMkVBQUE7RUFDQSx3RUFBQTtFQUNBLHlGQUFBO0VBQ0EscUVBQUE7RUFDQSxtRUFBQTtBQy9CRjtBRG1DRTtFQVRBLGdFQUFBO0VBQ0EsNkVBQUE7RUFDQSwwRUFBQTtFQUNBLDJGQUFBO0VBQ0EsdUVBQUE7RUFDQSxxRUFBQTtBQ3RCRjtBRDBCRTtFQVRBLCtEQUFBO0VBQ0EsMkVBQUE7RUFDQSx5RUFBQTtFQUNBLDBGQUFBO0VBQ0Esc0VBQUE7RUFDQSxvRUFBQTtBQ2JGO0FEaUJFO0VBVEEsOERBQUE7RUFDQSwyRUFBQTtFQUNBLHdFQUFBO0VBQ0EseUZBQUE7RUFDQSxxRUFBQTtFQUNBLG1FQUFBO0FDSkY7QURRRTtFQVRBLDhEQUFBO0VBQ0EsMEVBQUE7RUFDQSx3RUFBQTtFQUNBLG1GQUFBO0VBQ0EscUVBQUE7RUFDQSxtRUFBQTtBQ0tGO0FEREU7RUFUQSw2REFBQTtFQUNBLHlFQUFBO0VBQ0EsdUVBQUE7RUFDQSx3RkFBQTtFQUNBLG9FQUFBO0VBQ0Esa0VBQUE7QUNjRjtBRFZFO0VBVEEsNERBQUE7RUFDQSwwRUFBQTtFQUNBLHNFQUFBO0VBQ0EsaUZBQUE7RUFDQSxtRUFBQTtFQUNBLGlFQUFBO0FDdUJGO0FEbkJFO0VBVEEsNkRBQUE7RUFDQSwyRUFBQTtFQUNBLHVFQUFBO0VBQ0Esd0ZBQUE7RUFDQSxvRUFBQTtFQUNBLGtFQUFBO0FDZ0NGO0FENUJFO0VBVEEsMkRBQUE7RUFDQSxzRUFBQTtFQUNBLHFFQUFBO0VBQ0Esc0ZBQUE7RUFDQSxrRUFBQTtFQUNBLGdFQUFBO0FDeUNGO0FENUJBO0VFdVBNLE9GdFB1QjtFRXVQdkIsUUZ2UGlCO0VFZ1JyQixNRmhSa0I7RUVpUmxCLFNGalJ3QjtFQUV4QixhQUFBO0VBQ0Esa0JBQUE7RUFFQSxzQkFBQTtFQUNBLDhCQUFBO0VBRUEsMEJBQUE7RUFDQSxnQkFBQTtFQUNBLFVHeEMrQjtBRnVFakM7QUQ1QkE7RUFDRSxrQkFBQTtBQytCRjtBRDVCQTs7Ozs7Ozs7Ozs7Ozs7O0VBZUUseURBQUE7RUFDQSx3QkFBQTtBQytCRjtBRDVCQTtFQUNFLFVBQUE7QUMrQkY7QUQ1QkE7RUFDRSxjQUFBO0FDK0JGO0FEeEJBO0VBQ0UsNkJBQUE7QUMyQkY7QUR4QkE7RUFDRTtJQUNFLGlEQUFBO0VDMkJGO0FBQ0Y7QUR2QkE7RUFDRTtJQUNFLGtEQUFBO0lBQ0Esd0RBQUE7SUFDQSxvREFBQTtJQUNBLHNEQUFBO0VDeUJGO0FBQ0Y7QUR0QkE7RUFDRTtJQUNFLDZDQUFBO0lBQ0EsbURBQUE7SUFDQSwrQ0FBQTtJQUNBLGlEQUFBO0VDd0JGO0FBQ0Y7QURqQkE7O0VBRUUsY0FBQTtBQ21CRjtBRFhBO0VFa1dNLGlDQUFBO0FEblZOO0FEWEE7RUFDRSxlQUFBO0VBQ0EsMEJBQUE7RUFJQSxvQkFBQTtBQ1dGO0FEUkE7RUFDRSwyQ0k3SytCO0FId0xqQztBRFJBO0VBQ0UsMENJOUsrQjtBSHlMakM7QURKQTtFQUNFLDRDSzVMOEI7QUptTWhDO0FESkE7RUFDRSw0Q0toTThCO0FKdU1oQztBRmxNQSx3Q0FBQTtBT1BBOzs7O0VBSUUsd0JBQUE7QUNORjtBRFdBO0VBQ0UsYUFBQTtFQUVBLFNBQUE7QUNURjtBRGlCQTs7RUFFRSxpQkFBQTtBQ2RGO0FEc0JBO0VBQ0UsZUFBQTtFQUVBLFNBQUE7QUNwQkY7QUR3QkE7RUFDRSxnQkFBQTtBQ3JCRjtBRDZCQTtFQUNFLGdCQUFBO0FDMUJGO0FENkJBO0VBQ0UsV0FBQTtFQUVBLGVBQUE7RUFFQSx1QkFBQTtBQzVCRjtBRGdDQTtFQUNFLGNBQUE7QUM3QkY7QURpQ0E7Ozs7RUFJRSxpQ0FBQTtFQUNBLGNBQUE7QUM5QkY7QUQ4Q0E7Ozs7RUFJRSxvQkFBQTtFQUNBLG1CQUFBO0FDM0NGO0FEOENBO0VBQ0UsY0FBQTtFQUVBLFlBQUE7RUFFQSxhQUFBO0VBQ0EsY0FBQTtBQzdDRjtBRGdEQTtFQUNFLGlCQUFBO0FDN0NGO0FEZ0RBOzs7O0VBSUUsU0FBQTtFQUVBLGFBQUE7RUFDQSxjQUFBO0FDOUNGO0FEc0RBOzs7RUFHRSxlQUFBO0VBRUEsMEJBQUE7QUNwREY7QUR3REE7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQWtCRSwwQkFBQTtBQ3JERjtBRHdEQTs7RUFFRSxvQkFBQTtBQ3JERjtBRHdEQTtFQUNFLFNBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFFQSwwQkFBQTtBQ3RERjtBRHlEQTtFQUNFLGVBQUE7QUN0REY7QUQwREE7OztFQUdFLGVBQUE7QUN2REY7QUQyREE7O0VBRUUsVUFBQTtFQUVBLFNBQUE7QUN6REY7QUQrREE7O0VBRUUsVUFBQTtFQUVBLHNCQUFBO0FDN0RGO0FEbUVBOztFQUVFLFlBQUE7QUNoRUY7QURzRUE7O0VBRUUsd0JBQUE7QUNuRUY7QUQyRUE7RUFDRSx5QkFBQTtFQUNBLGlCQUFBO0FDeEVGO0FEMkVBOztFQUVFLFVBQUE7QUN4RUY7QUN4SkE7RUFDRSxzQkFBQTtFQUVBLDZDQUFBO0VBQ0Esd0NBQUE7RUFDQSwyQkFBQTtBQ1RGO0FEWUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUVBLDhCQUFBO1VBQUEsc0JBQUE7QUNWRjtBRGFBO0VBQ0UsYUFBQTtBQ1ZGO0FEYUE7RUFDRSxhQUFBO0FDVkY7QURhQTtFTjZDRSxrQ0FBQTtFQUNBLG1DQUFBO0VBb0tFLGNNaE5jO0VOaU5kLGVNak5jO0VOcVBoQixhTXJQZ0I7RU5zUGhCLGdCTXRQZ0I7RU5nTmQsZU0vTWU7RU5nTmYsZ0JNaE5lO0VOb1BqQixjTXBQaUI7RU5xUGpCLGlCTXJQaUI7RUFFakIsZUFBQTtFQUVBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBRUEsa0NBQUE7RUFFQSxnQkFBQTtFQUVBLDBCQUFBO0VBRUEsdUJBQUE7RUFFQSx5QkFBQTtFQUVBLHFCQUFBO0VBRUEsMkJBQUE7RUFFQSw4QkFBQTtVQUFBLHNCQUFBO0FDYkY7QUNkQTtFQUNFLG1DQUFBO0FDOUJGO0FEaUNBO0VBQ0UsNkJBQUE7RUFDQSx3Q0FBQTtBQzlCRjtBRGlDQTs7Ozs7O0VSK09FLGdCUXpPZ0I7RVIwT2hCLG1CUTFPNEI7RUFFNUIsZ0JBeEM2QjtFQTBDN0IsZ0JBdkM2QjtBQ1EvQjtBRGtDQTtFUmtPRSxnQlFqT2dCO0VBRWhCLGVBMUM2QjtBQ1MvQjtBRG9DQTtFUjRORSxnQlEzTmdCO0VBRWhCLGVBN0M2QjtBQ1UvQjtBRHNDQTtFQUNFLGVBOUM2QjtBQ1UvQjtBRHVDQTtFQUNFLGVBL0M2QjtBQ1cvQjtBRHVDQTtFQUNFLGVBaEQ2QjtBQ1kvQjtBRHVDQTtFQUNFLGVBakQ2QjtBQ2EvQjtBRHVDQTtFQUNFLGNBQUE7QUNwQ0Y7QUR1Q0E7O0VBRUUsa0JBQUE7RUFFQSxjQUFBO0VBRUEsY0FBQTtFQUVBLHdCQUFBO0FDdkNGO0FEMENBO0VBQ0UsV0FBQTtBQ3ZDRjtBRDBDQTtFQUNFLGVBQUE7QUN2Q0Y7QUN0REE7RUFDRSx3QkFBQTtBQ1BGO0FEaUJJO0VBQ0Usd0JBQUE7QUNkTjtBRHFCSTtFQUNFLHdCQUFBO0FDbEJOO0FYc0hJO0VVN0dBO0lBQ0Usd0JBQUE7RUNMSjtBQUNGO0FYeUpJO0VVOUlBO0lBQ0Usd0JBQUE7RUNSSjtBQUNGO0FYMkdJO0VVN0dBO0lBQ0Usd0JBQUE7RUNLSjtBQUNGO0FYK0lJO0VVOUlBO0lBQ0Usd0JBQUE7RUNFSjtBQUNGO0FYaUdJO0VVN0dBO0lBQ0Usd0JBQUE7RUNlSjtBQUNGO0FYcUlJO0VVOUlBO0lBQ0Usd0JBQUE7RUNZSjtBQUNGO0FYdUZJO0VVN0dBO0lBQ0Usd0JBQUE7RUN5Qko7QUFDRjtBWDJISTtFVTlJQTtJQUNFLHdCQUFBO0VDc0JKO0FBQ0Y7QWQvQkEsaURBQUE7QWVKQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VaOE5FLGVZNU5lO0VaNk5mLGdCWTdOZTtFWmlRakIsY1lqUWlCO0Vaa1FqQixpQllsUWlCO0FDYm5CO0FEZ0JBO0VBQ0UseUNBQUE7RUFDQSx1Q0FBQTtFQUNBLHVDQUFBO0VBQ0EsMENBQUE7RVp5TkUsc0NZNU9NO0VaNk9OLHVDWTdPTTtFWjZRUixxQ1k3UVE7RVo4UVIsd0NZOVFRO0FDVVY7QWJzT007RUFDRTtJQUVJLG1CQUFBO0lBR0Esb0JBQUE7SUFJRiw4Q1kxUEE7SVo0UEEsNENZNVBBO0VDbUJSO0FBQ0Y7QURJQTtFQUNFLHVDQUFBO0Vab1BBLHFDWTdRUTtBQ3lCVjtBREtBO0VBQ0UseUNBQUE7RVo2TUUsc0NZNU9NO0FDNkJWO0FibU5NO0VBQ0U7SUFFSSxtQkFBQTtJQU9GLDhDWTFQQTtFQ21DUjtBQUNGO0FEQUE7RUFDRSx1Q0FBQTtFWndNRSx1Q1k3T007QUN5Q1Y7QWJ1TU07RUFDRTtJQUtJLG9CQUFBO0lBTUYsNENZNVBBO0VDK0NSO0FBQ0Y7QUROQTtFQUNFLDBDQUFBO0VabU9BLHdDWTlRUTtBQ3FEVjtBRExBO0VBQ0UsdUNBQUE7RUFDQSwwQ0FBQTtFWjJOQSxxQ1k3UVE7RVo4UVIsd0NZOVFRO0FDMkRWO0FESkE7RUFDRSx5Q0FBQTtFQUNBLHVDQUFBO0VabUxFLHNDWTVPTTtFWjZPTix1Q1k3T007QUNpRVY7QWIrS007RUFDRTtJQUVJLG1CQUFBO0lBR0Esb0JBQUE7SUFJRiw4Q1kxUEE7SVo0UEEsNENZNVBBO0VDMEVSO0FBQ0Y7QURUQTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFWmtLRSxjWWhLYztFWmlLZCxlWWpLYztFWnFNaEIsYVlyTWdCO0Vac01oQixnQll0TWdCO0FDY2xCO0FEWEE7RUFDRSx1Q0FBQTtFQUNBLHFDQUFBO0VBQ0EscUNBQUE7RUFDQSx3Q0FBQTtFWjZKRSxvQ1kzT0s7RVo0T0wscUNZNU9LO0VaNFFQLG1DWTVRTztFWjZRUCxzQ1k3UU87QUNnR1Q7QWIrSU07RUFDRTtJQUVJLGtCQUFBO0lBR0EsbUJBQUE7SUFJRiw0Q1l6UEQ7SVoyUEMsMENZM1BEO0VDeUdQO0FBQ0Y7QUR2QkE7RUFDRSxxQ0FBQTtFWndMQSxtQ1k1UU87QUMrR1Q7QUR0QkE7RUFDRSx1Q0FBQTtFWmlKRSxvQ1kzT0s7QUNtSFQ7QWI0SE07RUFDRTtJQUVJLGtCQUFBO0lBT0YsNENZelBEO0VDeUhQO0FBQ0Y7QUQzQkE7RUFDRSxxQ0FBQTtFWjRJRSxxQ1k1T0s7QUMrSFQ7QWJnSE07RUFDRTtJQUtJLG1CQUFBO0lBTUYsMENZM1BEO0VDcUlQO0FBQ0Y7QURqQ0E7RUFDRSx3Q0FBQTtFWnVLQSxzQ1k3UU87QUMySVQ7QURoQ0E7RUFDRSxxQ0FBQTtFQUNBLHdDQUFBO0VaK0pBLG1DWTVRTztFWjZRUCxzQ1k3UU87QUNpSlQ7QUQvQkE7RUFDRSx1Q0FBQTtFQUNBLHFDQUFBO0VadUhFLG9DWTNPSztFWjRPTCxxQ1k1T0s7QUN1SlQ7QWJ3Rk07RUFDRTtJQUVJLGtCQUFBO0lBR0EsbUJBQUE7SUFJRiw0Q1l6UEQ7SVoyUEMsMENZM1BEO0VDZ0tQO0FBQ0Y7QUM5Skk7RWRtYUUsc0JBQUE7QWUvYU47QURnQkk7RWQrWkUsdUJBQUE7QWUzYU47QURnQkk7RWQ2WUUsc0JBQUE7QWV6Wk47QWY0TFc7RUFnT0wsdUJBQUE7QWV6Wk47QURhSTtFZGdaRSx1QkFBQTtBZXpaTjtBZnFMVztFQXVPTCxzQkFBQTtBZXpaTjtBZjRHSTtFY2xIQTtJZG1hRSxzQkFBQTtFZXhaSjs7RURQRTtJZCtaRSx1QkFBQTtFZXBaSjs7RURQRTtJZDZZRSxzQkFBQTtFZWxZSjtFZnFLUztJQWdPTCx1QkFBQTtFZWxZSjs7RURWRTtJZGdaRSx1QkFBQTtFZWxZSjtFZjhKUztJQXVPTCxzQkFBQTtFZWxZSjtBQUNGO0Fmb0ZJO0VjbEhBO0lkbWFFLHNCQUFBO0VlallKOztFRDlCRTtJZCtaRSx1QkFBQTtFZTdYSjs7RUQ5QkU7SWQ2WUUsc0JBQUE7RWUzV0o7RWY4SVM7SUFnT0wsdUJBQUE7RWUzV0o7O0VEakNFO0lkZ1pFLHVCQUFBO0VlM1dKO0VmdUlTO0lBdU9MLHNCQUFBO0VlM1dKO0FBQ0Y7QWY2REk7RWNsSEE7SWRtYUUsc0JBQUE7RWUxV0o7O0VEckRFO0lkK1pFLHVCQUFBO0VldFdKOztFRHJERTtJZDZZRSxzQkFBQTtFZXBWSjtFZnVIUztJQWdPTCx1QkFBQTtFZXBWSjs7RUR4REU7SWRnWkUsdUJBQUE7RWVwVko7RWZnSFM7SUF1T0wsc0JBQUE7RWVwVko7QUFDRjtBZnNDSTtFY2xIQTtJZG1hRSxzQkFBQTtFZW5WSjs7RUQ1RUU7SWQrWkUsdUJBQUE7RWUvVUo7O0VENUVFO0lkNllFLHNCQUFBO0VlN1RKO0VmZ0dTO0lBZ09MLHVCQUFBO0VlN1RKOztFRC9FRTtJZGdaRSx1QkFBQTtFZTdUSjtFZnlGUztJQXVPTCxzQkFBQTtFZTdUSjtBQUNGO0FDbkdJO0VBQ0UsNkJBQUE7QUNiTjtBRGdCSTtFQUNFLDhCQUFBO0FDYk47QURnQkk7RUFDRSw0QkFBQTtBQ2JOO0FEZ0JJO0VBQ0UsMEJBQUE7QUNiTjtBRGdCSTtFQUNFLDJCQUFBO0FDYk47QURnQkk7RUFDRSw0QkFBQTtBQ2JOO0FEZ0JJO0VBQ0UsOEJBQUE7QUNiTjtBRGdCSTtFQUNFLDhCQUFBO0FDYk47QWpCa0dJO0VnQmxIQTtJQUNFLDZCQUFBO0VDb0JKOztFRGpCRTtJQUNFLDhCQUFBO0VDb0JKOztFRGpCRTtJQUNFLDRCQUFBO0VDb0JKOztFRGpCRTtJQUNFLDBCQUFBO0VDb0JKOztFRGpCRTtJQUNFLDJCQUFBO0VDb0JKOztFRGpCRTtJQUNFLDRCQUFBO0VDb0JKOztFRGpCRTtJQUNFLDhCQUFBO0VDb0JKOztFRGpCRTtJQUNFLDhCQUFBO0VDb0JKO0FBQ0Y7QWpCZ0VJO0VnQmxIQTtJQUNFLDZCQUFBO0VDcURKOztFRGxERTtJQUNFLDhCQUFBO0VDcURKOztFRGxERTtJQUNFLDRCQUFBO0VDcURKOztFRGxERTtJQUNFLDBCQUFBO0VDcURKOztFRGxERTtJQUNFLDJCQUFBO0VDcURKOztFRGxERTtJQUNFLDRCQUFBO0VDcURKOztFRGxERTtJQUNFLDhCQUFBO0VDcURKOztFRGxERTtJQUNFLDhCQUFBO0VDcURKO0FBQ0Y7QWpCK0JJO0VnQmxIQTtJQUNFLDZCQUFBO0VDc0ZKOztFRG5GRTtJQUNFLDhCQUFBO0VDc0ZKOztFRG5GRTtJQUNFLDRCQUFBO0VDc0ZKOztFRG5GRTtJQUNFLDBCQUFBO0VDc0ZKOztFRG5GRTtJQUNFLDJCQUFBO0VDc0ZKOztFRG5GRTtJQUNFLDRCQUFBO0VDc0ZKOztFRG5GRTtJQUNFLDhCQUFBO0VDc0ZKOztFRG5GRTtJQUNFLDhCQUFBO0VDc0ZKO0FBQ0Y7QWpCRkk7RWdCbEhBO0lBQ0UsNkJBQUE7RUN1SEo7O0VEcEhFO0lBQ0UsOEJBQUE7RUN1SEo7O0VEcEhFO0lBQ0UsNEJBQUE7RUN1SEo7O0VEcEhFO0lBQ0UsMEJBQUE7RUN1SEo7O0VEcEhFO0lBQ0UsMkJBQUE7RUN1SEo7O0VEcEhFO0lBQ0UsNEJBQUE7RUN1SEo7O0VEcEhFO0lBQ0UsOEJBQUE7RUN1SEo7O0VEcEhFO0lBQ0UsOEJBQUE7RUN1SEo7QUFDRjtBQ3JKSTtFQUNFLHlEQUFBO0VBQ0Esb0NBQUE7QUNiTjtBRGdCSTtFQUNFLHlEQUFBO0VBQ0Esb0NBQUE7QUNiTjtBRGdCSTtFQUNFLHlEQUFBO0VBQ0EscUNBQUE7QUNiTjtBbkJtSEk7RWtCbEhBO0lBQ0UseURBQUE7SUFDQSxvQ0FBQTtFQ0dKOztFREFFO0lBQ0UseURBQUE7SUFDQSxvQ0FBQTtFQ0dKOztFREFFO0lBQ0UseURBQUE7SUFDQSxxQ0FBQTtFQ0dKO0FBQ0Y7QW5Ca0dJO0VrQmxIQTtJQUNFLHlEQUFBO0lBQ0Esb0NBQUE7RUNtQko7O0VEaEJFO0lBQ0UseURBQUE7SUFDQSxvQ0FBQTtFQ21CSjs7RURoQkU7SUFDRSx5REFBQTtJQUNBLHFDQUFBO0VDbUJKO0FBQ0Y7QW5Ca0ZJO0VrQmxIQTtJQUNFLHlEQUFBO0lBQ0Esb0NBQUE7RUNtQ0o7O0VEaENFO0lBQ0UseURBQUE7SUFDQSxvQ0FBQTtFQ21DSjs7RURoQ0U7SUFDRSx5REFBQTtJQUNBLHFDQUFBO0VDbUNKO0FBQ0Y7QW5Ca0VJO0VrQmxIQTtJQUNFLHlEQUFBO0lBQ0Esb0NBQUE7RUNtREo7O0VEaERFO0lBQ0UseURBQUE7SUFDQSxvQ0FBQTtFQ21ESjs7RURoREU7SUFDRSx5REFBQTtJQUNBLHFDQUFBO0VDbURKO0FBQ0Y7QUN0RUE7RUFDRSxpQ0FBQTtBQ1BGO0FEVUE7RUFDRSwrQkFBQTtBQ1BGO0FEVUE7RUFDRSw2QkFBQTtBQ1BGO0FEVUE7RUFDRSw4QkFBQTtBQ1BGO0FEVUE7RUFDRSwrQkFBQTtBQ1BGO0FEVUE7RUFDRSwyQkFBQTtBQ1BGO0FEY0E7RUFDRSwwQkFBQTtBQ1hGO0FEY0E7RUFDRSw0QkFBQTtBQ1hGO0FEY0E7RUFDRSxrQ0FBQTtBQ1hGO0FEa0JBO0VBQ0Usc0NBQUE7QUNmRjtBRGtCQTtFQUNFLGtDQUFBO0FDZkY7QURrQkE7RUFDRSxvQ0FBQTtBQ2ZGO0FEa0JBO0VBQ0Usd0NBQUE7QUNmRjtBRGtCQTtFQUNFLHlDQUFBO0FDZkY7QURrQkE7RUFDRSx3Q0FBQTtBQ2ZGO0FEc0JBO0VBQ0Usa0NBQUE7QUNuQkY7QURzQkE7RUFDRSw4QkFBQTtBQ25CRjtBRHNCQTtFQUNFLGdDQUFBO0FDbkJGO0FEc0JBO0VBQ0UsK0JBQUE7QUNuQkY7QURzQkE7RUFDRSxnQ0FBQTtBQ25CRjtBeEJuREE7RUFDRSx5QkFBQTtFQUNBLGtDQUFBO0F5QkhGO0F6Qk1BO0VBQ0Usd0JBQUE7RUFDQSxpQ0FBQTtBeUJKRjtBekJPQTtFQUNFLDREQUFBO0F5QkxGO0F6QlFBO0VBQ0UsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0F5QkxGO0F6QlFBO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QXlCTEY7QXpCUUE7RUFFRSxrQkFBQTtFQUNBLGNBQUE7QXlCTkY7QXpCVUE7RUFNRSxjQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0F5QlpGO0F6Qk1FO0VBQ0UscUJBQUE7QXlCSko7QXpCV0U7RUFFRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBeUJWSjtBekJZSTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0F5QlZOO0FBdkVBO0VBQ0UscUJBQUE7QUEwRUYiLCJmaWxlIjoicHJvZHVjdC1zZWFyY2guY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4gKiBBcHAgR2xvYmFsIENTU1xyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqIFB1dCBzdHlsZSBydWxlcyBoZXJlIHRoYXQgeW91IHdhbnQgdG8gYXBwbHkgZ2xvYmFsbHkuIFRoZXNlIHN0eWxlcyBhcmUgZm9yXHJcbiAqIHRoZSBlbnRpcmUgYXBwIGFuZCBub3QganVzdCBvbmUgY29tcG9uZW50LiBBZGRpdGlvbmFsbHksIHRoaXMgZmlsZSBjYW4gYmVcclxuICogdXNlZCBhcyBhbiBlbnRyeSBwb2ludCB0byBpbXBvcnQgb3RoZXIgQ1NTL1Nhc3MgZmlsZXMgdG8gYmUgaW5jbHVkZWQgaW4gdGhlXHJcbiAqIG91dHB1dCBDU1MuXHJcbiAqIEZvciBtb3JlIGluZm9ybWF0aW9uIG9uIGdsb2JhbCBzdHlsZXNoZWV0cywgdmlzaXQgdGhlIGRvY3VtZW50YXRpb246XHJcbiAqIGh0dHBzOi8vaW9uaWNmcmFtZXdvcmsuY29tL2RvY3MvbGF5b3V0L2dsb2JhbC1zdHlsZXNoZWV0c1xyXG4gKi9cclxuXHJcbi8qIENvcmUgQ1NTIHJlcXVpcmVkIGZvciBJb25pYyBjb21wb25lbnRzIHRvIHdvcmsgcHJvcGVybHkgKi9cclxuQGltcG9ydCBcIn5AaW9uaWMvYW5ndWxhci9jc3MvY29yZS5jc3NcIjtcclxuXHJcbi8qIEJhc2ljIENTUyBmb3IgYXBwcyBidWlsdCB3aXRoIElvbmljICovXHJcbkBpbXBvcnQgXCJ+QGlvbmljL2FuZ3VsYXIvY3NzL25vcm1hbGl6ZS5jc3NcIjtcclxuQGltcG9ydCBcIn5AaW9uaWMvYW5ndWxhci9jc3Mvc3RydWN0dXJlLmNzc1wiO1xyXG5AaW1wb3J0IFwifkBpb25pYy9hbmd1bGFyL2Nzcy90eXBvZ3JhcGh5LmNzc1wiO1xyXG5AaW1wb3J0ICd+QGlvbmljL2FuZ3VsYXIvY3NzL2Rpc3BsYXkuY3NzJztcclxuXHJcbi8qIE9wdGlvbmFsIENTUyB1dGlscyB0aGF0IGNhbiBiZSBjb21tZW50ZWQgb3V0ICovXHJcbkBpbXBvcnQgXCJ+QGlvbmljL2FuZ3VsYXIvY3NzL3BhZGRpbmcuY3NzXCI7XHJcbkBpbXBvcnQgXCJ+QGlvbmljL2FuZ3VsYXIvY3NzL2Zsb2F0LWVsZW1lbnRzLmNzc1wiO1xyXG5AaW1wb3J0IFwifkBpb25pYy9hbmd1bGFyL2Nzcy90ZXh0LWFsaWdubWVudC5jc3NcIjtcclxuQGltcG9ydCBcIn5AaW9uaWMvYW5ndWxhci9jc3MvdGV4dC10cmFuc2Zvcm1hdGlvbi5jc3NcIjtcclxuQGltcG9ydCBcIn5AaW9uaWMvYW5ndWxhci9jc3MvZmxleC11dGlscy5jc3NcIjtcclxuXHJcbkBmb250LWZhY2Uge1xyXG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCc7ICAgIC8vVGhpcyBpcyB3aGF0IHdlIGFyZSBnb2luZyB0byBjYWxsXHJcbiAgc3JjOiB1cmwoJ2Fzc2V0cy9mb250cy9tb250c2VycmF0L01vbnRzZXJyYXQtUmVndWxhci50dGYnKTtcclxufVxyXG5cclxuQGZvbnQtZmFjZSB7XHJcbiAgZm9udC1mYW1pbHk6ICdBc3Npc3RhbnQnOyAgLy9UaGlzIGlzIHdoYXQgd2UgYXJlIGdvaW5nIHRvIGNhbGxcclxuICBzcmM6IHVybCgnYXNzZXRzL2ZvbnRzL2Fzc2lzdGFudC9Bc3Npc3RhbnQtUmVndWxhci50dGYnKTtcclxufVxyXG5cclxuaW9uLWNvbnRlbnQuYmFja2dyb3VuZHtcclxuICAtLWJhY2tncm91bmQ6IHVybCguLi9zcmMvYXNzZXRzL0ZvbmRvQWdyYXJpLnBuZykgMCAwLzEwMCUgMTAwJSBuby1yZXBlYXQ7XHJcbn1cclxuXHJcbi5wYWdlLXRpdGxle1xyXG4gIGZvbnQtZmFtaWx5OiBNb250c2VycmF0O1xyXG4gIGZvbnQtc2l6ZTogMjJweDtcclxuICBjb2xvcjogI0ZGRkZGRjtcclxuICBwYWRkaW5nLXRvcDogMjBweDtcclxufVxyXG5cclxuLmltYWdlLXpvb20gLm1vZGFsLXdyYXBwZXIge1xyXG4gIGhlaWdodDogNzB2aDtcclxuICBtYXgtaGVpZ2h0OiA4MHZoO1xyXG4gIG1heC13aWR0aDogMTAwdnc7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4ucmV2aWV3LW1vZGFsIC5tb2RhbC13cmFwcGVyIHtcclxuXHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG5cclxufVxyXG5cclxuaW9uLW1vZGFsLmF1dG8taGVpZ2h0IHtcclxuXHJcbiAgJi5ib3R0b20ge1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gIH1cclxuXHJcbiAgLS1oZWlnaHQ6IGF1dG87XHJcbiAgLS13aWR0aDogOTV2dztcclxuICAtLWJvcmRlci1yYWRpdXM6IDE1cHg7XHJcblxyXG4gIC5pb24tcGFnZSB7XHJcblxyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBjb250YWluOiBjb250ZW50O1xyXG5cclxuICAgIC5pbm5lci1jb250ZW50IHtcclxuICAgICAgbWF4LWhlaWdodDogODB2aDtcclxuICAgICAgbWF4LXdpZHRoOiA5NXZ3O1xyXG4gICAgICBvdmVyZmxvdzogYXV0bztcclxuICAgICAgcGFkZGluZzogMTBweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIixudWxsLCJodG1sLmlvcyB7XG4gIC0taW9uLWRlZmF1bHQtZm9udDogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIkhlbHZldGljYSBOZXVlXCIsIFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG59XG5cbmh0bWwubWQge1xuICAtLWlvbi1kZWZhdWx0LWZvbnQ6IFwiUm9ib3RvXCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbn1cblxuaHRtbCB7XG4gIC0taW9uLWZvbnQtZmFtaWx5OiB2YXIoLS1pb24tZGVmYXVsdC1mb250KTtcbn1cblxuYm9keSB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yKTtcbn1cblxuYm9keS5iYWNrZHJvcC1uby1zY3JvbGwge1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG5odG1sLmlvcyBpb24tbW9kYWwubW9kYWwtY2FyZCAuaW9uLXBhZ2UgPiBpb24taGVhZGVyID4gaW9uLXRvb2xiYXI6Zmlyc3Qtb2YtdHlwZSB7XG4gIHBhZGRpbmctdG9wOiAwcHg7XG59XG5cbmh0bWwuaW9zIGlvbi1tb2RhbCAuaW9uLXBhZ2Uge1xuICBib3JkZXItcmFkaXVzOiBpbmhlcml0O1xufVxuXG4uaW9uLWNvbG9yLXByaW1hcnkge1xuICAtLWlvbi1jb2xvci1iYXNlOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSwgIzM4ODBmZikgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItYmFzZS1yZ2I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXJnYiwgNTYsIDEyOCwgMjU1KSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1jb250cmFzdDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3QsICNmZmYpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLWNvbnRyYXN0LXJnYjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3QtcmdiLCAyNTUsIDI1NSwgMjU1KSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1zaGFkZTogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktc2hhZGUsICMzMTcxZTApICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLXRpbnQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXRpbnQsICM0YzhkZmYpICFpbXBvcnRhbnQ7XG59XG5cbi5pb24tY29sb3Itc2Vjb25kYXJ5IHtcbiAgLS1pb24tY29sb3ItYmFzZTogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSwgIzNkYzJmZikgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItYmFzZS1yZ2I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnktcmdiLCA2MSwgMTk0LCAyNTUpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLWNvbnRyYXN0OiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5LWNvbnRyYXN0LCAjZmZmKSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1jb250cmFzdC1yZ2I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3QtcmdiLCAyNTUsIDI1NSwgMjU1KSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1zaGFkZTogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeS1zaGFkZSwgIzM2YWJlMCkgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItdGludDogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeS10aW50LCAjNTBjOGZmKSAhaW1wb3J0YW50O1xufVxuXG4uaW9uLWNvbG9yLXRlcnRpYXJ5IHtcbiAgLS1pb24tY29sb3ItYmFzZTogdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5LCAjNTI2MGZmKSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1iYXNlLXJnYjogdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5LXJnYiwgODIsIDk2LCAyNTUpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLWNvbnRyYXN0OiB2YXIoLS1pb24tY29sb3ItdGVydGlhcnktY29udHJhc3QsICNmZmYpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLWNvbnRyYXN0LXJnYjogdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5LWNvbnRyYXN0LXJnYiwgMjU1LCAyNTUsIDI1NSkgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3Itc2hhZGU6IHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeS1zaGFkZSwgIzQ4NTRlMCkgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItdGludDogdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5LXRpbnQsICM2MzcwZmYpICFpbXBvcnRhbnQ7XG59XG5cbi5pb24tY29sb3Itc3VjY2VzcyB7XG4gIC0taW9uLWNvbG9yLWJhc2U6IHZhcigtLWlvbi1jb2xvci1zdWNjZXNzLCAjMmRkMzZmKSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1iYXNlLXJnYjogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MtcmdiLCA0NSwgMjExLCAxMTEpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLWNvbnRyYXN0OiB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcy1jb250cmFzdCwgI2ZmZikgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItY29udHJhc3QtcmdiOiB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcy1jb250cmFzdC1yZ2IsIDI1NSwgMjU1LCAyNTUpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLXNoYWRlOiB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcy1zaGFkZSwgIzI4YmE2MikgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItdGludDogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MtdGludCwgIzQyZDc3ZCkgIWltcG9ydGFudDtcbn1cblxuLmlvbi1jb2xvci13YXJuaW5nIHtcbiAgLS1pb24tY29sb3ItYmFzZTogdmFyKC0taW9uLWNvbG9yLXdhcm5pbmcsICNmZmM0MDkpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLWJhc2UtcmdiOiB2YXIoLS1pb24tY29sb3Itd2FybmluZy1yZ2IsIDI1NSwgMTk2LCA5KSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1jb250cmFzdDogdmFyKC0taW9uLWNvbG9yLXdhcm5pbmctY29udHJhc3QsICMwMDApICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLWNvbnRyYXN0LXJnYjogdmFyKC0taW9uLWNvbG9yLXdhcm5pbmctY29udHJhc3QtcmdiLCAwLCAwLCAwKSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1zaGFkZTogdmFyKC0taW9uLWNvbG9yLXdhcm5pbmctc2hhZGUsICNlMGFjMDgpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLXRpbnQ6IHZhcigtLWlvbi1jb2xvci13YXJuaW5nLXRpbnQsICNmZmNhMjIpICFpbXBvcnRhbnQ7XG59XG5cbi5pb24tY29sb3ItZGFuZ2VyIHtcbiAgLS1pb24tY29sb3ItYmFzZTogdmFyKC0taW9uLWNvbG9yLWRhbmdlciwgI2ViNDQ1YSkgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItYmFzZS1yZ2I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXItcmdiLCAyMzUsIDY4LCA5MCkgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItY29udHJhc3Q6IHZhcigtLWlvbi1jb2xvci1kYW5nZXItY29udHJhc3QsICNmZmYpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLWNvbnRyYXN0LXJnYjogdmFyKC0taW9uLWNvbG9yLWRhbmdlci1jb250cmFzdC1yZ2IsIDI1NSwgMjU1LCAyNTUpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLXNoYWRlOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyLXNoYWRlLCAjY2YzYzRmKSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci10aW50OiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyLXRpbnQsICNlZDU3NmIpICFpbXBvcnRhbnQ7XG59XG5cbi5pb24tY29sb3ItbGlnaHQge1xuICAtLWlvbi1jb2xvci1iYXNlOiB2YXIoLS1pb24tY29sb3ItbGlnaHQsICNmNGY1ZjgpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLWJhc2UtcmdiOiB2YXIoLS1pb24tY29sb3ItbGlnaHQtcmdiLCAyNDQsIDI0NSwgMjQ4KSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1jb250cmFzdDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0LWNvbnRyYXN0LCAjMDAwKSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1jb250cmFzdC1yZ2I6IHZhcigtLWlvbi1jb2xvci1saWdodC1jb250cmFzdC1yZ2IsIDAsIDAsIDApICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLXNoYWRlOiB2YXIoLS1pb24tY29sb3ItbGlnaHQtc2hhZGUsICNkN2Q4ZGEpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLXRpbnQ6IHZhcigtLWlvbi1jb2xvci1saWdodC10aW50LCAjZjVmNmY5KSAhaW1wb3J0YW50O1xufVxuXG4uaW9uLWNvbG9yLW1lZGl1bSB7XG4gIC0taW9uLWNvbG9yLWJhc2U6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0sICM5Mjk0OWMpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLWJhc2UtcmdiOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXJnYiwgMTQ2LCAxNDgsIDE1NikgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItY29udHJhc3Q6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tY29udHJhc3QsICNmZmYpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLWNvbnRyYXN0LXJnYjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1jb250cmFzdC1yZ2IsIDI1NSwgMjU1LCAyNTUpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLXNoYWRlOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlLCAjODA4Mjg5KSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci10aW50OiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXRpbnQsICM5ZDlmYTYpICFpbXBvcnRhbnQ7XG59XG5cbi5pb24tY29sb3ItZGFyayB7XG4gIC0taW9uLWNvbG9yLWJhc2U6IHZhcigtLWlvbi1jb2xvci1kYXJrLCAjMjIyNDI4KSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1iYXNlLXJnYjogdmFyKC0taW9uLWNvbG9yLWRhcmstcmdiLCAzNCwgMzYsIDQwKSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1jb250cmFzdDogdmFyKC0taW9uLWNvbG9yLWRhcmstY29udHJhc3QsICNmZmYpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLWNvbnRyYXN0LXJnYjogdmFyKC0taW9uLWNvbG9yLWRhcmstY29udHJhc3QtcmdiLCAyNTUsIDI1NSwgMjU1KSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1zaGFkZTogdmFyKC0taW9uLWNvbG9yLWRhcmstc2hhZGUsICMxZTIwMjMpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLXRpbnQ6IHZhcigtLWlvbi1jb2xvci1kYXJrLXRpbnQsICMzODNhM2UpICFpbXBvcnRhbnQ7XG59XG5cbi5pb24tcGFnZSB7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGNvbnRhaW46IGxheW91dCBzaXplIHN0eWxlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB6LWluZGV4OiAwO1xufVxuXG4uc3BsaXQtcGFuZS12aXNpYmxlID4gLmlvbi1wYWdlLnNwbGl0LXBhbmUtbWFpbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuaW9uLXJvdXRlLFxuaW9uLXJvdXRlLXJlZGlyZWN0LFxuaW9uLXJvdXRlcixcbmlvbi1zZWxlY3Qtb3B0aW9uLFxuaW9uLW5hdi1jb250cm9sbGVyLFxuaW9uLW1lbnUtY29udHJvbGxlcixcbmlvbi1hY3Rpb24tc2hlZXQtY29udHJvbGxlcixcbmlvbi1hbGVydC1jb250cm9sbGVyLFxuaW9uLWxvYWRpbmctY29udHJvbGxlcixcbmlvbi1tb2RhbC1jb250cm9sbGVyLFxuaW9uLXBpY2tlci1jb250cm9sbGVyLFxuaW9uLXBvcG92ZXItY29udHJvbGxlcixcbmlvbi10b2FzdC1jb250cm9sbGVyLFxuLmlvbi1wYWdlLWhpZGRlbixcbltoaWRkZW5dIHtcbiAgLyogc3R5bGVsaW50LWRpc2FibGUtbmV4dC1saW5lIGRlY2xhcmF0aW9uLW5vLWltcG9ydGFudCAqL1xuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5pb24tcGFnZS1pbnZpc2libGUge1xuICBvcGFjaXR5OiAwO1xufVxuXG4uY2FuLWdvLWJhY2sgPiBpb24taGVhZGVyIGlvbi1iYWNrLWJ1dHRvbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5odG1sLnBsdC1pb3MucGx0LWh5YnJpZCwgaHRtbC5wbHQtaW9zLnBsdC1wd2Ege1xuICAtLWlvbi1zdGF0dXNiYXItcGFkZGluZzogMjBweDtcbn1cblxuQHN1cHBvcnRzIChwYWRkaW5nLXRvcDogMjBweCkge1xuICBodG1sIHtcbiAgICAtLWlvbi1zYWZlLWFyZWEtdG9wOiB2YXIoLS1pb24tc3RhdHVzYmFyLXBhZGRpbmcpO1xuICB9XG59XG5Ac3VwcG9ydHMgKHBhZGRpbmctdG9wOiBjb25zdGFudChzYWZlLWFyZWEtaW5zZXQtdG9wKSkge1xuICBodG1sIHtcbiAgICAtLWlvbi1zYWZlLWFyZWEtdG9wOiBjb25zdGFudChzYWZlLWFyZWEtaW5zZXQtdG9wKTtcbiAgICAtLWlvbi1zYWZlLWFyZWEtYm90dG9tOiBjb25zdGFudChzYWZlLWFyZWEtaW5zZXQtYm90dG9tKTtcbiAgICAtLWlvbi1zYWZlLWFyZWEtbGVmdDogY29uc3RhbnQoc2FmZS1hcmVhLWluc2V0LWxlZnQpO1xuICAgIC0taW9uLXNhZmUtYXJlYS1yaWdodDogY29uc3RhbnQoc2FmZS1hcmVhLWluc2V0LXJpZ2h0KTtcbiAgfVxufVxuQHN1cHBvcnRzIChwYWRkaW5nLXRvcDogZW52KHNhZmUtYXJlYS1pbnNldC10b3ApKSB7XG4gIGh0bWwge1xuICAgIC0taW9uLXNhZmUtYXJlYS10b3A6IGVudihzYWZlLWFyZWEtaW5zZXQtdG9wKTtcbiAgICAtLWlvbi1zYWZlLWFyZWEtYm90dG9tOiBlbnYoc2FmZS1hcmVhLWluc2V0LWJvdHRvbSk7XG4gICAgLS1pb24tc2FmZS1hcmVhLWxlZnQ6IGVudihzYWZlLWFyZWEtaW5zZXQtbGVmdCk7XG4gICAgLS1pb24tc2FmZS1hcmVhLXJpZ2h0OiBlbnYoc2FmZS1hcmVhLWluc2V0LXJpZ2h0KTtcbiAgfVxufVxuaW9uLWNhcmQuaW9uLWNvbG9yIC5pb24taW5oZXJpdC1jb2xvcixcbmlvbi1jYXJkLWhlYWRlci5pb24tY29sb3IgLmlvbi1pbmhlcml0LWNvbG9yIHtcbiAgY29sb3I6IGluaGVyaXQ7XG59XG5cbi5tZW51LWNvbnRlbnQge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsICAwLCAgMCk7XG59XG5cbi5tZW51LWNvbnRlbnQtb3BlbiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdG91Y2gtYWN0aW9uOiBtYW5pcHVsYXRpb247XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4uaW9zIC5tZW51LWNvbnRlbnQtcmV2ZWFsIHtcbiAgYm94LXNoYWRvdzogLThweCAwIDQycHggcmdiYSgwLCAwLCAwLCAwLjA4KTtcbn1cblxuW2Rpcj1ydGxdLmlvcyAubWVudS1jb250ZW50LXJldmVhbCB7XG4gIGJveC1zaGFkb3c6IDhweCAwIDQycHggcmdiYSgwLCAwLCAwLCAwLjA4KTtcbn1cblxuLm1kIC5tZW51LWNvbnRlbnQtcmV2ZWFsIHtcbiAgYm94LXNoYWRvdzogNHB4IDBweCAxNnB4IHJnYmEoMCwgMCwgMCwgMC4xOCk7XG59XG5cbi5tZCAubWVudS1jb250ZW50LXB1c2gge1xuICBib3gtc2hhZG93OiA0cHggMHB4IDE2cHggcmdiYSgwLCAwLCAwLCAwLjE4KTtcbn1cblxuLyojIHNvdXJjZU1hcHBpbmdVUkw9Y29yZS5jc3MubWFwICovXG4iLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCwiYXVkaW8sXG5jYW52YXMsXG5wcm9ncmVzcyxcbnZpZGVvIHtcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xufVxuXG5hdWRpbzpub3QoW2NvbnRyb2xzXSkge1xuICBkaXNwbGF5OiBub25lO1xuICBoZWlnaHQ6IDA7XG59XG5cbmIsXG5zdHJvbmcge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuaW1nIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBib3JkZXI6IDA7XG59XG5cbnN2Zzpub3QoOnJvb3QpIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuZmlndXJlIHtcbiAgbWFyZ2luOiAxZW0gNDBweDtcbn1cblxuaHIge1xuICBoZWlnaHQ6IDFweDtcbiAgYm9yZGVyLXdpZHRoOiAwO1xuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbn1cblxucHJlIHtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbmNvZGUsXG5rYmQsXG5wcmUsXG5zYW1wIHtcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlO1xuICBmb250LXNpemU6IDFlbTtcbn1cblxubGFiZWwsXG5pbnB1dCxcbnNlbGVjdCxcbnRleHRhcmVhIHtcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG59XG5cbnRleHRhcmVhIHtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIGhlaWdodDogYXV0bztcbiAgZm9udDogaW5oZXJpdDtcbiAgY29sb3I6IGluaGVyaXQ7XG59XG5cbnRleHRhcmVhOjpwbGFjZWhvbGRlciB7XG4gIHBhZGRpbmctbGVmdDogMnB4O1xufVxuXG5mb3JtLFxuaW5wdXQsXG5vcHRncm91cCxcbnNlbGVjdCB7XG4gIG1hcmdpbjogMDtcbiAgZm9udDogaW5oZXJpdDtcbiAgY29sb3I6IGluaGVyaXQ7XG59XG5cbmh0bWwgaW5wdXRbdHlwZT1idXR0b25dLFxuaW5wdXRbdHlwZT1yZXNldF0sXG5pbnB1dFt0eXBlPXN1Ym1pdF0ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uO1xufVxuXG5hLFxuYSBkaXYsXG5hIHNwYW4sXG5hIGlvbi1pY29uLFxuYSBpb24tbGFiZWwsXG5idXR0b24sXG5idXR0b24gZGl2LFxuYnV0dG9uIHNwYW4sXG5idXR0b24gaW9uLWljb24sXG5idXR0b24gaW9uLWxhYmVsLFxuLmlvbi10YXBwYWJsZSxcblt0YXBwYWJsZV0sXG5bdGFwcGFibGVdIGRpdixcblt0YXBwYWJsZV0gc3Bhbixcblt0YXBwYWJsZV0gaW9uLWljb24sXG5bdGFwcGFibGVdIGlvbi1sYWJlbCxcbmlucHV0LFxudGV4dGFyZWEge1xuICB0b3VjaC1hY3Rpb246IG1hbmlwdWxhdGlvbjtcbn1cblxuYSBpb24tbGFiZWwsXG5idXR0b24gaW9uLWxhYmVsIHtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbmJ1dHRvbiB7XG4gIGJvcmRlcjogMDtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gIGZvbnQtc3R5bGU6IGluaGVyaXQ7XG4gIGZvbnQtdmFyaWFudDogaW5oZXJpdDtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uO1xufVxuXG5bdGFwcGFibGVdIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5hW2Rpc2FibGVkXSxcbmJ1dHRvbltkaXNhYmxlZF0sXG5odG1sIGlucHV0W2Rpc2FibGVkXSB7XG4gIGN1cnNvcjogZGVmYXVsdDtcbn1cblxuYnV0dG9uOjotbW96LWZvY3VzLWlubmVyLFxuaW5wdXQ6Oi1tb3otZm9jdXMtaW5uZXIge1xuICBwYWRkaW5nOiAwO1xuICBib3JkZXI6IDA7XG59XG5cbmlucHV0W3R5cGU9Y2hlY2tib3hdLFxuaW5wdXRbdHlwZT1yYWRpb10ge1xuICBwYWRkaW5nOiAwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5pbnB1dFt0eXBlPW51bWJlcl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXG5pbnB1dFt0eXBlPW51bWJlcl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbmlucHV0W3R5cGU9c2VhcmNoXTo6LXdlYmtpdC1zZWFyY2gtY2FuY2VsLWJ1dHRvbixcbmlucHV0W3R5cGU9c2VhcmNoXTo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbiB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbn1cblxudGFibGUge1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICBib3JkZXItc3BhY2luZzogMDtcbn1cblxudGQsXG50aCB7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi8qIyBzb3VyY2VNYXBwaW5nVVJMPW5vcm1hbGl6ZS5jc3MubWFwICovXG4iLG51bGwsIioge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XG4gIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcbn1cblxuaHRtbCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XG59XG5cbmh0bWw6bm90KC5oeWRyYXRlZCkgYm9keSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbmh0bWwucGx0LXB3YSB7XG4gIGhlaWdodDogMTAwdmg7XG59XG5cbmJvZHkge1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgbWFyZ2luLWxlZnQ6IDA7XG4gIG1hcmdpbi1yaWdodDogMDtcbiAgbWFyZ2luLXRvcDogMDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgcGFkZGluZy1sZWZ0OiAwO1xuICBwYWRkaW5nLXJpZ2h0OiAwO1xuICBwYWRkaW5nLXRvcDogMDtcbiAgcGFkZGluZy1ib3R0b206IDA7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXgtaGVpZ2h0OiAxMDAlO1xuICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0b3VjaC1hY3Rpb246IG1hbmlwdWxhdGlvbjtcbiAgLXdlYmtpdC11c2VyLWRyYWc6IG5vbmU7XG4gIC1tcy1jb250ZW50LXpvb21pbmc6IG5vbmU7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgb3ZlcnNjcm9sbC1iZWhhdmlvci15OiBub25lO1xuICB0ZXh0LXNpemUtYWRqdXN0OiBub25lO1xufVxuXG4vKiMgc291cmNlTWFwcGluZ1VSTD1zdHJ1Y3R1cmUuY3NzLm1hcCAqL1xuIixudWxsLCJodG1sIHtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWlvbi1mb250LWZhbWlseSk7XG59XG5cbmEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LCAjMzg4MGZmKTtcbn1cblxuaDEsXG5oMixcbmgzLFxuaDQsXG5oNSxcbmg2IHtcbiAgbWFyZ2luLXRvcDogMTZweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbn1cbmgxIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgZm9udC1zaXplOiAyNnB4O1xufVxuaDIge1xuICBtYXJnaW4tdG9wOiAxOHB4O1xuICBmb250LXNpemU6IDI0cHg7XG59XG5oMyB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbn1cblxuaDQge1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbmg1IHtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG5oNiB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuc21hbGwge1xuICBmb250LXNpemU6IDc1JTtcbn1cblxuc3ViLFxuc3VwIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmb250LXNpemU6IDc1JTtcbiAgbGluZS1oZWlnaHQ6IDA7XG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbn1cblxuc3VwIHtcbiAgdG9wOiAtMC41ZW07XG59XG5cbnN1YiB7XG4gIGJvdHRvbTogLTAuMjVlbTtcbn1cblxuLyojIHNvdXJjZU1hcHBpbmdVUkw9dHlwb2dyYXBoeS5jc3MubWFwICovXG4iLG51bGwsIi5pb24taGlkZSB7XG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLmlvbi1oaWRlLXVwIHtcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4uaW9uLWhpZGUtZG93biB7XG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSB7XG4gIC5pb24taGlkZS1zbS11cCB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTc1Ljk4cHgpIHtcbiAgLmlvbi1oaWRlLXNtLWRvd24ge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5pb24taGlkZS1tZC11cCB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY3Ljk4cHgpIHtcbiAgLmlvbi1oaWRlLW1kLWRvd24ge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gIC5pb24taGlkZS1sZy11cCB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogOTkxLjk4cHgpIHtcbiAgLmlvbi1oaWRlLWxnLWRvd24ge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xuICAuaW9uLWhpZGUteGwtdXAge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDExOTkuOThweCkge1xuICAuaW9uLWhpZGUteGwtZG93biB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICB9XG59XG5cbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRpc3BsYXkuY3NzLm1hcCAqL1xuIixudWxsLCIuaW9uLW5vLXBhZGRpbmcge1xuICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gIC0tcGFkZGluZy1lbmQ6IDA7XG4gIC0tcGFkZGluZy10b3A6IDA7XG4gIC0tcGFkZGluZy1ib3R0b206IDA7XG4gIHBhZGRpbmctbGVmdDogMDtcbiAgcGFkZGluZy1yaWdodDogMDtcbiAgcGFkZGluZy10b3A6IDA7XG4gIHBhZGRpbmctYm90dG9tOiAwO1xufVxuXG4uaW9uLXBhZGRpbmcge1xuICAtLXBhZGRpbmctc3RhcnQ6IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtcbiAgLS1wYWRkaW5nLWVuZDogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO1xuICAtLXBhZGRpbmctdG9wOiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7XG4gIC0tcGFkZGluZy1ib3R0b206IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtcbiAgcGFkZGluZy1sZWZ0OiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7XG4gIHBhZGRpbmctcmlnaHQ6IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtcbiAgcGFkZGluZy10b3A6IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtcbiAgcGFkZGluZy1ib3R0b206IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtcbn1cbkBzdXBwb3J0cyAobWFyZ2luLWlubGluZS1zdGFydDogMCkgb3IgKC13ZWJraXQtbWFyZ2luLXN0YXJ0OiAwKSB7XG4gIC5pb24tcGFkZGluZyB7XG4gICAgcGFkZGluZy1sZWZ0OiB1bnNldDtcbiAgICBwYWRkaW5nLXJpZ2h0OiB1bnNldDtcbiAgICAtd2Via2l0LXBhZGRpbmctc3RhcnQ6IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtcbiAgICBwYWRkaW5nLWlubGluZS1zdGFydDogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO1xuICAgIC13ZWJraXQtcGFkZGluZy1lbmQ6IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtcbiAgICBwYWRkaW5nLWlubGluZS1lbmQ6IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtcbiAgfVxufVxuXG4uaW9uLXBhZGRpbmctdG9wIHtcbiAgLS1wYWRkaW5nLXRvcDogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO1xuICBwYWRkaW5nLXRvcDogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO1xufVxuLmlvbi1wYWRkaW5nLXN0YXJ0IHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7XG4gIHBhZGRpbmctbGVmdDogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO1xufVxuQHN1cHBvcnRzIChtYXJnaW4taW5saW5lLXN0YXJ0OiAwKSBvciAoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6IDApIHtcbiAgLmlvbi1wYWRkaW5nLXN0YXJ0IHtcbiAgICBwYWRkaW5nLWxlZnQ6IHVuc2V0O1xuICAgIC13ZWJraXQtcGFkZGluZy1zdGFydDogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO1xuICAgIHBhZGRpbmctaW5saW5lLXN0YXJ0OiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7XG4gIH1cbn1cblxuLmlvbi1wYWRkaW5nLWVuZCB7XG4gIC0tcGFkZGluZy1lbmQ6IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtcbiAgcGFkZGluZy1yaWdodDogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO1xufVxuQHN1cHBvcnRzIChtYXJnaW4taW5saW5lLXN0YXJ0OiAwKSBvciAoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6IDApIHtcbiAgLmlvbi1wYWRkaW5nLWVuZCB7XG4gICAgcGFkZGluZy1yaWdodDogdW5zZXQ7XG4gICAgLXdlYmtpdC1wYWRkaW5nLWVuZDogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO1xuICAgIHBhZGRpbmctaW5saW5lLWVuZDogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO1xuICB9XG59XG5cbi5pb24tcGFkZGluZy1ib3R0b20ge1xuICAtLXBhZGRpbmctYm90dG9tOiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7XG4gIHBhZGRpbmctYm90dG9tOiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7XG59XG4uaW9uLXBhZGRpbmctdmVydGljYWwge1xuICAtLXBhZGRpbmctdG9wOiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7XG4gIC0tcGFkZGluZy1ib3R0b206IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtcbiAgcGFkZGluZy10b3A6IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtcbiAgcGFkZGluZy1ib3R0b206IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtcbn1cbi5pb24tcGFkZGluZy1ob3Jpem9udGFsIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7XG4gIC0tcGFkZGluZy1lbmQ6IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtcbiAgcGFkZGluZy1sZWZ0OiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7XG4gIHBhZGRpbmctcmlnaHQ6IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtcbn1cbkBzdXBwb3J0cyAobWFyZ2luLWlubGluZS1zdGFydDogMCkgb3IgKC13ZWJraXQtbWFyZ2luLXN0YXJ0OiAwKSB7XG4gIC5pb24tcGFkZGluZy1ob3Jpem9udGFsIHtcbiAgICBwYWRkaW5nLWxlZnQ6IHVuc2V0O1xuICAgIHBhZGRpbmctcmlnaHQ6IHVuc2V0O1xuICAgIC13ZWJraXQtcGFkZGluZy1zdGFydDogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO1xuICAgIHBhZGRpbmctaW5saW5lLXN0YXJ0OiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7XG4gICAgLXdlYmtpdC1wYWRkaW5nLWVuZDogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO1xuICAgIHBhZGRpbmctaW5saW5lLWVuZDogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO1xuICB9XG59XG5cbi5pb24tbm8tbWFyZ2luIHtcbiAgLS1tYXJnaW4tc3RhcnQ6IDA7XG4gIC0tbWFyZ2luLWVuZDogMDtcbiAgLS1tYXJnaW4tdG9wOiAwO1xuICAtLW1hcmdpbi1ib3R0b206IDA7XG4gIG1hcmdpbi1sZWZ0OiAwO1xuICBtYXJnaW4tcmlnaHQ6IDA7XG4gIG1hcmdpbi10b3A6IDA7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbi5pb24tbWFyZ2luIHtcbiAgLS1tYXJnaW4tc3RhcnQ6IHZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO1xuICAtLW1hcmdpbi1lbmQ6IHZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO1xuICAtLW1hcmdpbi10b3A6IHZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO1xuICAtLW1hcmdpbi1ib3R0b206IHZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO1xuICBtYXJnaW4tbGVmdDogdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7XG4gIG1hcmdpbi1yaWdodDogdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7XG4gIG1hcmdpbi10b3A6IHZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO1xuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1pb24tbWFyZ2luLCAxNnB4KTtcbn1cbkBzdXBwb3J0cyAobWFyZ2luLWlubGluZS1zdGFydDogMCkgb3IgKC13ZWJraXQtbWFyZ2luLXN0YXJ0OiAwKSB7XG4gIC5pb24tbWFyZ2luIHtcbiAgICBtYXJnaW4tbGVmdDogdW5zZXQ7XG4gICAgbWFyZ2luLXJpZ2h0OiB1bnNldDtcbiAgICAtd2Via2l0LW1hcmdpbi1zdGFydDogdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7XG4gICAgbWFyZ2luLWlubGluZS1zdGFydDogdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7XG4gICAgLXdlYmtpdC1tYXJnaW4tZW5kOiB2YXIoLS1pb24tbWFyZ2luLCAxNnB4KTtcbiAgICBtYXJnaW4taW5saW5lLWVuZDogdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7XG4gIH1cbn1cblxuLmlvbi1tYXJnaW4tdG9wIHtcbiAgLS1tYXJnaW4tdG9wOiB2YXIoLS1pb24tbWFyZ2luLCAxNnB4KTtcbiAgbWFyZ2luLXRvcDogdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7XG59XG4uaW9uLW1hcmdpbi1zdGFydCB7XG4gIC0tbWFyZ2luLXN0YXJ0OiB2YXIoLS1pb24tbWFyZ2luLCAxNnB4KTtcbiAgbWFyZ2luLWxlZnQ6IHZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO1xufVxuQHN1cHBvcnRzIChtYXJnaW4taW5saW5lLXN0YXJ0OiAwKSBvciAoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6IDApIHtcbiAgLmlvbi1tYXJnaW4tc3RhcnQge1xuICAgIG1hcmdpbi1sZWZ0OiB1bnNldDtcbiAgICAtd2Via2l0LW1hcmdpbi1zdGFydDogdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7XG4gICAgbWFyZ2luLWlubGluZS1zdGFydDogdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7XG4gIH1cbn1cblxuLmlvbi1tYXJnaW4tZW5kIHtcbiAgLS1tYXJnaW4tZW5kOiB2YXIoLS1pb24tbWFyZ2luLCAxNnB4KTtcbiAgbWFyZ2luLXJpZ2h0OiB2YXIoLS1pb24tbWFyZ2luLCAxNnB4KTtcbn1cbkBzdXBwb3J0cyAobWFyZ2luLWlubGluZS1zdGFydDogMCkgb3IgKC13ZWJraXQtbWFyZ2luLXN0YXJ0OiAwKSB7XG4gIC5pb24tbWFyZ2luLWVuZCB7XG4gICAgbWFyZ2luLXJpZ2h0OiB1bnNldDtcbiAgICAtd2Via2l0LW1hcmdpbi1lbmQ6IHZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO1xuICAgIG1hcmdpbi1pbmxpbmUtZW5kOiB2YXIoLS1pb24tbWFyZ2luLCAxNnB4KTtcbiAgfVxufVxuXG4uaW9uLW1hcmdpbi1ib3R0b20ge1xuICAtLW1hcmdpbi1ib3R0b206IHZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO1xuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1pb24tbWFyZ2luLCAxNnB4KTtcbn1cbi5pb24tbWFyZ2luLXZlcnRpY2FsIHtcbiAgLS1tYXJnaW4tdG9wOiB2YXIoLS1pb24tbWFyZ2luLCAxNnB4KTtcbiAgLS1tYXJnaW4tYm90dG9tOiB2YXIoLS1pb24tbWFyZ2luLCAxNnB4KTtcbiAgbWFyZ2luLXRvcDogdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7XG4gIG1hcmdpbi1ib3R0b206IHZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO1xufVxuLmlvbi1tYXJnaW4taG9yaXpvbnRhbCB7XG4gIC0tbWFyZ2luLXN0YXJ0OiB2YXIoLS1pb24tbWFyZ2luLCAxNnB4KTtcbiAgLS1tYXJnaW4tZW5kOiB2YXIoLS1pb24tbWFyZ2luLCAxNnB4KTtcbiAgbWFyZ2luLWxlZnQ6IHZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO1xuICBtYXJnaW4tcmlnaHQ6IHZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO1xufVxuQHN1cHBvcnRzIChtYXJnaW4taW5saW5lLXN0YXJ0OiAwKSBvciAoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6IDApIHtcbiAgLmlvbi1tYXJnaW4taG9yaXpvbnRhbCB7XG4gICAgbWFyZ2luLWxlZnQ6IHVuc2V0O1xuICAgIG1hcmdpbi1yaWdodDogdW5zZXQ7XG4gICAgLXdlYmtpdC1tYXJnaW4tc3RhcnQ6IHZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO1xuICAgIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IHZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO1xuICAgIC13ZWJraXQtbWFyZ2luLWVuZDogdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7XG4gICAgbWFyZ2luLWlubGluZS1lbmQ6IHZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO1xuICB9XG59XG5cbi8qIyBzb3VyY2VNYXBwaW5nVVJMPXBhZGRpbmcuY3NzLm1hcCAqL1xuIixudWxsLCIuaW9uLWZsb2F0LWxlZnQge1xuICBmbG9hdDogbGVmdCAhaW1wb3J0YW50O1xufVxuXG4uaW9uLWZsb2F0LXJpZ2h0IHtcbiAgZmxvYXQ6IHJpZ2h0ICFpbXBvcnRhbnQ7XG59XG5cbi5pb24tZmxvYXQtc3RhcnQge1xuICBmbG9hdDogbGVmdCAhaW1wb3J0YW50O1xufVxuW2Rpcj1ydGxdIC5pb24tZmxvYXQtc3RhcnQsIDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSAuaW9uLWZsb2F0LXN0YXJ0IHtcbiAgZmxvYXQ6IHJpZ2h0ICFpbXBvcnRhbnQ7XG59XG5cbi5pb24tZmxvYXQtZW5kIHtcbiAgZmxvYXQ6IHJpZ2h0ICFpbXBvcnRhbnQ7XG59XG5bZGlyPXJ0bF0gLmlvbi1mbG9hdC1lbmQsIDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSAuaW9uLWZsb2F0LWVuZCB7XG4gIGZsb2F0OiBsZWZ0ICFpbXBvcnRhbnQ7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkge1xuICAuaW9uLWZsb2F0LXNtLWxlZnQge1xuICAgIGZsb2F0OiBsZWZ0ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuaW9uLWZsb2F0LXNtLXJpZ2h0IHtcbiAgICBmbG9hdDogcmlnaHQgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5pb24tZmxvYXQtc20tc3RhcnQge1xuICAgIGZsb2F0OiBsZWZ0ICFpbXBvcnRhbnQ7XG4gIH1cbiAgW2Rpcj1ydGxdIC5pb24tZmxvYXQtc20tc3RhcnQsIDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSAuaW9uLWZsb2F0LXNtLXN0YXJ0IHtcbiAgICBmbG9hdDogcmlnaHQgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5pb24tZmxvYXQtc20tZW5kIHtcbiAgICBmbG9hdDogcmlnaHQgIWltcG9ydGFudDtcbiAgfVxuICBbZGlyPXJ0bF0gLmlvbi1mbG9hdC1zbS1lbmQsIDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSAuaW9uLWZsb2F0LXNtLWVuZCB7XG4gICAgZmxvYXQ6IGxlZnQgIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5pb24tZmxvYXQtbWQtbGVmdCB7XG4gICAgZmxvYXQ6IGxlZnQgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5pb24tZmxvYXQtbWQtcmlnaHQge1xuICAgIGZsb2F0OiByaWdodCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmlvbi1mbG9hdC1tZC1zdGFydCB7XG4gICAgZmxvYXQ6IGxlZnQgIWltcG9ydGFudDtcbiAgfVxuICBbZGlyPXJ0bF0gLmlvbi1mbG9hdC1tZC1zdGFydCwgOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pIC5pb24tZmxvYXQtbWQtc3RhcnQge1xuICAgIGZsb2F0OiByaWdodCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmlvbi1mbG9hdC1tZC1lbmQge1xuICAgIGZsb2F0OiByaWdodCAhaW1wb3J0YW50O1xuICB9XG4gIFtkaXI9cnRsXSAuaW9uLWZsb2F0LW1kLWVuZCwgOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pIC5pb24tZmxvYXQtbWQtZW5kIHtcbiAgICBmbG9hdDogbGVmdCAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgLmlvbi1mbG9hdC1sZy1sZWZ0IHtcbiAgICBmbG9hdDogbGVmdCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmlvbi1mbG9hdC1sZy1yaWdodCB7XG4gICAgZmxvYXQ6IHJpZ2h0ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuaW9uLWZsb2F0LWxnLXN0YXJ0IHtcbiAgICBmbG9hdDogbGVmdCAhaW1wb3J0YW50O1xuICB9XG4gIFtkaXI9cnRsXSAuaW9uLWZsb2F0LWxnLXN0YXJ0LCA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkgLmlvbi1mbG9hdC1sZy1zdGFydCB7XG4gICAgZmxvYXQ6IHJpZ2h0ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuaW9uLWZsb2F0LWxnLWVuZCB7XG4gICAgZmxvYXQ6IHJpZ2h0ICFpbXBvcnRhbnQ7XG4gIH1cbiAgW2Rpcj1ydGxdIC5pb24tZmxvYXQtbGctZW5kLCA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkgLmlvbi1mbG9hdC1sZy1lbmQge1xuICAgIGZsb2F0OiBsZWZ0ICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcbiAgLmlvbi1mbG9hdC14bC1sZWZ0IHtcbiAgICBmbG9hdDogbGVmdCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmlvbi1mbG9hdC14bC1yaWdodCB7XG4gICAgZmxvYXQ6IHJpZ2h0ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuaW9uLWZsb2F0LXhsLXN0YXJ0IHtcbiAgICBmbG9hdDogbGVmdCAhaW1wb3J0YW50O1xuICB9XG4gIFtkaXI9cnRsXSAuaW9uLWZsb2F0LXhsLXN0YXJ0LCA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkgLmlvbi1mbG9hdC14bC1zdGFydCB7XG4gICAgZmxvYXQ6IHJpZ2h0ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuaW9uLWZsb2F0LXhsLWVuZCB7XG4gICAgZmxvYXQ6IHJpZ2h0ICFpbXBvcnRhbnQ7XG4gIH1cbiAgW2Rpcj1ydGxdIC5pb24tZmxvYXQteGwtZW5kLCA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkgLmlvbi1mbG9hdC14bC1lbmQge1xuICAgIGZsb2F0OiBsZWZ0ICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZmxvYXQtZWxlbWVudHMuY3NzLm1hcCAqL1xuIixudWxsLCIuaW9uLXRleHQtY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG59XG5cbi5pb24tdGV4dC1qdXN0aWZ5IHtcbiAgdGV4dC1hbGlnbjoganVzdGlmeSAhaW1wb3J0YW50O1xufVxuXG4uaW9uLXRleHQtc3RhcnQge1xuICB0ZXh0LWFsaWduOiBzdGFydCAhaW1wb3J0YW50O1xufVxuXG4uaW9uLXRleHQtZW5kIHtcbiAgdGV4dC1hbGlnbjogZW5kICFpbXBvcnRhbnQ7XG59XG5cbi5pb24tdGV4dC1sZWZ0IHtcbiAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xufVxuXG4uaW9uLXRleHQtcmlnaHQge1xuICB0ZXh0LWFsaWduOiByaWdodCAhaW1wb3J0YW50O1xufVxuXG4uaW9uLXRleHQtbm93cmFwIHtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcCAhaW1wb3J0YW50O1xufVxuXG4uaW9uLXRleHQtd3JhcCB7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWwgIWltcG9ydGFudDtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSB7XG4gIC5pb24tdGV4dC1zbS1jZW50ZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmlvbi10ZXh0LXNtLWp1c3RpZnkge1xuICAgIHRleHQtYWxpZ246IGp1c3RpZnkgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5pb24tdGV4dC1zbS1zdGFydCB7XG4gICAgdGV4dC1hbGlnbjogc3RhcnQgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5pb24tdGV4dC1zbS1lbmQge1xuICAgIHRleHQtYWxpZ246IGVuZCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmlvbi10ZXh0LXNtLWxlZnQge1xuICAgIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5pb24tdGV4dC1zbS1yaWdodCB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5pb24tdGV4dC1zbS1ub3dyYXAge1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXAgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5pb24tdGV4dC1zbS13cmFwIHtcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAuaW9uLXRleHQtbWQtY2VudGVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5pb24tdGV4dC1tZC1qdXN0aWZ5IHtcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuaW9uLXRleHQtbWQtc3RhcnQge1xuICAgIHRleHQtYWxpZ246IHN0YXJ0ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuaW9uLXRleHQtbWQtZW5kIHtcbiAgICB0ZXh0LWFsaWduOiBlbmQgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5pb24tdGV4dC1tZC1sZWZ0IHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuaW9uLXRleHQtbWQtcmlnaHQge1xuICAgIHRleHQtYWxpZ246IHJpZ2h0ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuaW9uLXRleHQtbWQtbm93cmFwIHtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuaW9uLXRleHQtbWQtd3JhcCB7XG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbCAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgLmlvbi10ZXh0LWxnLWNlbnRlciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuaW9uLXRleHQtbGctanVzdGlmeSB7XG4gICAgdGV4dC1hbGlnbjoganVzdGlmeSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmlvbi10ZXh0LWxnLXN0YXJ0IHtcbiAgICB0ZXh0LWFsaWduOiBzdGFydCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmlvbi10ZXh0LWxnLWVuZCB7XG4gICAgdGV4dC1hbGlnbjogZW5kICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuaW9uLXRleHQtbGctbGVmdCB7XG4gICAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmlvbi10ZXh0LWxnLXJpZ2h0IHtcbiAgICB0ZXh0LWFsaWduOiByaWdodCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmlvbi10ZXh0LWxnLW5vd3JhcCB7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmlvbi10ZXh0LWxnLXdyYXAge1xuICAgIHdoaXRlLXNwYWNlOiBub3JtYWwgIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xuICAuaW9uLXRleHQteGwtY2VudGVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5pb24tdGV4dC14bC1qdXN0aWZ5IHtcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuaW9uLXRleHQteGwtc3RhcnQge1xuICAgIHRleHQtYWxpZ246IHN0YXJ0ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuaW9uLXRleHQteGwtZW5kIHtcbiAgICB0ZXh0LWFsaWduOiBlbmQgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5pb24tdGV4dC14bC1sZWZ0IHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuaW9uLXRleHQteGwtcmlnaHQge1xuICAgIHRleHQtYWxpZ246IHJpZ2h0ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuaW9uLXRleHQteGwtbm93cmFwIHtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuaW9uLXRleHQteGwtd3JhcCB7XG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbCAhaW1wb3J0YW50O1xuICB9XG59XG5cbi8qIyBzb3VyY2VNYXBwaW5nVVJMPXRleHQtYWxpZ25tZW50LmNzcy5tYXAgKi9cbiIsbnVsbCwiLmlvbi10ZXh0LXVwcGVyY2FzZSB7XG4gIC8qIHN0eWxlbGludC1kaXNhYmxlLW5leHQtbGluZSBkZWNsYXJhdGlvbi1uby1pbXBvcnRhbnQgKi9cbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZSAhaW1wb3J0YW50O1xufVxuXG4uaW9uLXRleHQtbG93ZXJjYXNlIHtcbiAgLyogc3R5bGVsaW50LWRpc2FibGUtbmV4dC1saW5lIGRlY2xhcmF0aW9uLW5vLWltcG9ydGFudCAqL1xuICB0ZXh0LXRyYW5zZm9ybTogbG93ZXJjYXNlICFpbXBvcnRhbnQ7XG59XG5cbi5pb24tdGV4dC1jYXBpdGFsaXplIHtcbiAgLyogc3R5bGVsaW50LWRpc2FibGUtbmV4dC1saW5lIGRlY2xhcmF0aW9uLW5vLWltcG9ydGFudCAqL1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZSAhaW1wb3J0YW50O1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIHtcbiAgLmlvbi10ZXh0LXNtLXVwcGVyY2FzZSB7XG4gICAgLyogc3R5bGVsaW50LWRpc2FibGUtbmV4dC1saW5lIGRlY2xhcmF0aW9uLW5vLWltcG9ydGFudCAqL1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2UgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5pb24tdGV4dC1zbS1sb3dlcmNhc2Uge1xuICAgIC8qIHN0eWxlbGludC1kaXNhYmxlLW5leHQtbGluZSBkZWNsYXJhdGlvbi1uby1pbXBvcnRhbnQgKi9cbiAgICB0ZXh0LXRyYW5zZm9ybTogbG93ZXJjYXNlICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuaW9uLXRleHQtc20tY2FwaXRhbGl6ZSB7XG4gICAgLyogc3R5bGVsaW50LWRpc2FibGUtbmV4dC1saW5lIGRlY2xhcmF0aW9uLW5vLWltcG9ydGFudCAqL1xuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAuaW9uLXRleHQtbWQtdXBwZXJjYXNlIHtcbiAgICAvKiBzdHlsZWxpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZGVjbGFyYXRpb24tbm8taW1wb3J0YW50ICovXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmlvbi10ZXh0LW1kLWxvd2VyY2FzZSB7XG4gICAgLyogc3R5bGVsaW50LWRpc2FibGUtbmV4dC1saW5lIGRlY2xhcmF0aW9uLW5vLWltcG9ydGFudCAqL1xuICAgIHRleHQtdHJhbnNmb3JtOiBsb3dlcmNhc2UgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5pb24tdGV4dC1tZC1jYXBpdGFsaXplIHtcbiAgICAvKiBzdHlsZWxpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZGVjbGFyYXRpb24tbm8taW1wb3J0YW50ICovXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemUgIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gIC5pb24tdGV4dC1sZy11cHBlcmNhc2Uge1xuICAgIC8qIHN0eWxlbGludC1kaXNhYmxlLW5leHQtbGluZSBkZWNsYXJhdGlvbi1uby1pbXBvcnRhbnQgKi9cbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuaW9uLXRleHQtbGctbG93ZXJjYXNlIHtcbiAgICAvKiBzdHlsZWxpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZGVjbGFyYXRpb24tbm8taW1wb3J0YW50ICovXG4gICAgdGV4dC10cmFuc2Zvcm06IGxvd2VyY2FzZSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmlvbi10ZXh0LWxnLWNhcGl0YWxpemUge1xuICAgIC8qIHN0eWxlbGludC1kaXNhYmxlLW5leHQtbGluZSBkZWNsYXJhdGlvbi1uby1pbXBvcnRhbnQgKi9cbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZSAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XG4gIC5pb24tdGV4dC14bC11cHBlcmNhc2Uge1xuICAgIC8qIHN0eWxlbGludC1kaXNhYmxlLW5leHQtbGluZSBkZWNsYXJhdGlvbi1uby1pbXBvcnRhbnQgKi9cbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuaW9uLXRleHQteGwtbG93ZXJjYXNlIHtcbiAgICAvKiBzdHlsZWxpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZGVjbGFyYXRpb24tbm8taW1wb3J0YW50ICovXG4gICAgdGV4dC10cmFuc2Zvcm06IGxvd2VyY2FzZSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmlvbi10ZXh0LXhsLWNhcGl0YWxpemUge1xuICAgIC8qIHN0eWxlbGludC1kaXNhYmxlLW5leHQtbGluZSBkZWNsYXJhdGlvbi1uby1pbXBvcnRhbnQgKi9cbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZSAhaW1wb3J0YW50O1xuICB9XG59XG5cbi8qIyBzb3VyY2VNYXBwaW5nVVJMPXRleHQtdHJhbnNmb3JtYXRpb24uY3NzLm1hcCAqL1xuIixudWxsLCIuaW9uLWFsaWduLXNlbGYtc3RhcnQge1xuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0ICFpbXBvcnRhbnQ7XG59XG5cbi5pb24tYWxpZ24tc2VsZi1lbmQge1xuICBhbGlnbi1zZWxmOiBmbGV4LWVuZCAhaW1wb3J0YW50O1xufVxuXG4uaW9uLWFsaWduLXNlbGYtY2VudGVyIHtcbiAgYWxpZ24tc2VsZjogY2VudGVyICFpbXBvcnRhbnQ7XG59XG5cbi5pb24tYWxpZ24tc2VsZi1zdHJldGNoIHtcbiAgYWxpZ24tc2VsZjogc3RyZXRjaCAhaW1wb3J0YW50O1xufVxuXG4uaW9uLWFsaWduLXNlbGYtYmFzZWxpbmUge1xuICBhbGlnbi1zZWxmOiBiYXNlbGluZSAhaW1wb3J0YW50O1xufVxuXG4uaW9uLWFsaWduLXNlbGYtYXV0byB7XG4gIGFsaWduLXNlbGY6IGF1dG8gIWltcG9ydGFudDtcbn1cblxuLmlvbi13cmFwIHtcbiAgZmxleC13cmFwOiB3cmFwICFpbXBvcnRhbnQ7XG59XG5cbi5pb24tbm93cmFwIHtcbiAgZmxleC13cmFwOiBub3dyYXAgIWltcG9ydGFudDtcbn1cblxuLmlvbi13cmFwLXJldmVyc2Uge1xuICBmbGV4LXdyYXA6IHdyYXAtcmV2ZXJzZSAhaW1wb3J0YW50O1xufVxuXG4uaW9uLWp1c3RpZnktY29udGVudC1zdGFydCB7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydCAhaW1wb3J0YW50O1xufVxuXG4uaW9uLWp1c3RpZnktY29udGVudC1jZW50ZXIge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xufVxuXG4uaW9uLWp1c3RpZnktY29udGVudC1lbmQge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kICFpbXBvcnRhbnQ7XG59XG5cbi5pb24tanVzdGlmeS1jb250ZW50LWFyb3VuZCB7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kICFpbXBvcnRhbnQ7XG59XG5cbi5pb24tanVzdGlmeS1jb250ZW50LWJldHdlZW4ge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW4gIWltcG9ydGFudDtcbn1cblxuLmlvbi1qdXN0aWZ5LWNvbnRlbnQtZXZlbmx5IHtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHkgIWltcG9ydGFudDtcbn1cblxuLmlvbi1hbGlnbi1pdGVtcy1zdGFydCB7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0ICFpbXBvcnRhbnQ7XG59XG5cbi5pb24tYWxpZ24taXRlbXMtY2VudGVyIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xufVxuXG4uaW9uLWFsaWduLWl0ZW1zLWVuZCB7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZCAhaW1wb3J0YW50O1xufVxuXG4uaW9uLWFsaWduLWl0ZW1zLXN0cmV0Y2gge1xuICBhbGlnbi1pdGVtczogc3RyZXRjaCAhaW1wb3J0YW50O1xufVxuXG4uaW9uLWFsaWduLWl0ZW1zLWJhc2VsaW5lIHtcbiAgYWxpZ24taXRlbXM6IGJhc2VsaW5lICFpbXBvcnRhbnQ7XG59XG5cbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWZsZXgtdXRpbHMuY3NzLm1hcCAqL1xuIiwiLypcbiAqIEFwcCBHbG9iYWwgQ1NTXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBQdXQgc3R5bGUgcnVsZXMgaGVyZSB0aGF0IHlvdSB3YW50IHRvIGFwcGx5IGdsb2JhbGx5LiBUaGVzZSBzdHlsZXMgYXJlIGZvclxuICogdGhlIGVudGlyZSBhcHAgYW5kIG5vdCBqdXN0IG9uZSBjb21wb25lbnQuIEFkZGl0aW9uYWxseSwgdGhpcyBmaWxlIGNhbiBiZVxuICogdXNlZCBhcyBhbiBlbnRyeSBwb2ludCB0byBpbXBvcnQgb3RoZXIgQ1NTL1Nhc3MgZmlsZXMgdG8gYmUgaW5jbHVkZWQgaW4gdGhlXG4gKiBvdXRwdXQgQ1NTLlxuICogRm9yIG1vcmUgaW5mb3JtYXRpb24gb24gZ2xvYmFsIHN0eWxlc2hlZXRzLCB2aXNpdCB0aGUgZG9jdW1lbnRhdGlvbjpcbiAqIGh0dHBzOi8vaW9uaWNmcmFtZXdvcmsuY29tL2RvY3MvbGF5b3V0L2dsb2JhbC1zdHlsZXNoZWV0c1xuICovXG4vKiBDb3JlIENTUyByZXF1aXJlZCBmb3IgSW9uaWMgY29tcG9uZW50cyB0byB3b3JrIHByb3Blcmx5ICovXG5AaW1wb3J0IFwifkBpb25pYy9hbmd1bGFyL2Nzcy9jb3JlLmNzc1wiO1xuLyogQmFzaWMgQ1NTIGZvciBhcHBzIGJ1aWx0IHdpdGggSW9uaWMgKi9cbkBpbXBvcnQgXCJ+QGlvbmljL2FuZ3VsYXIvY3NzL25vcm1hbGl6ZS5jc3NcIjtcbkBpbXBvcnQgXCJ+QGlvbmljL2FuZ3VsYXIvY3NzL3N0cnVjdHVyZS5jc3NcIjtcbkBpbXBvcnQgXCJ+QGlvbmljL2FuZ3VsYXIvY3NzL3R5cG9ncmFwaHkuY3NzXCI7XG5AaW1wb3J0ICd+QGlvbmljL2FuZ3VsYXIvY3NzL2Rpc3BsYXkuY3NzJztcbi8qIE9wdGlvbmFsIENTUyB1dGlscyB0aGF0IGNhbiBiZSBjb21tZW50ZWQgb3V0ICovXG5AaW1wb3J0IFwifkBpb25pYy9hbmd1bGFyL2Nzcy9wYWRkaW5nLmNzc1wiO1xuQGltcG9ydCBcIn5AaW9uaWMvYW5ndWxhci9jc3MvZmxvYXQtZWxlbWVudHMuY3NzXCI7XG5AaW1wb3J0IFwifkBpb25pYy9hbmd1bGFyL2Nzcy90ZXh0LWFsaWdubWVudC5jc3NcIjtcbkBpbXBvcnQgXCJ+QGlvbmljL2FuZ3VsYXIvY3NzL3RleHQtdHJhbnNmb3JtYXRpb24uY3NzXCI7XG5AaW1wb3J0IFwifkBpb25pYy9hbmd1bGFyL2Nzcy9mbGV4LXV0aWxzLmNzc1wiO1xuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIjtcbiAgc3JjOiB1cmwoXCJhc3NldHMvZm9udHMvbW9udHNlcnJhdC9Nb250c2VycmF0LVJlZ3VsYXIudHRmXCIpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkFzc2lzdGFudFwiO1xuICBzcmM6IHVybChcImFzc2V0cy9mb250cy9hc3Npc3RhbnQvQXNzaXN0YW50LVJlZ3VsYXIudHRmXCIpO1xufVxuaW9uLWNvbnRlbnQuYmFja2dyb3VuZCB7XG4gIC0tYmFja2dyb3VuZDogdXJsKC4uL3NyYy9hc3NldHMvRm9uZG9BZ3JhcmkucG5nKSAwIDAvMTAwJSAxMDAlIG5vLXJlcGVhdDtcbn1cblxuLnBhZ2UtdGl0bGUge1xuICBmb250LWZhbWlseTogTW9udHNlcnJhdDtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBjb2xvcjogI0ZGRkZGRjtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG59XG5cbi5pbWFnZS16b29tIC5tb2RhbC13cmFwcGVyIHtcbiAgaGVpZ2h0OiA3MHZoO1xuICBtYXgtaGVpZ2h0OiA4MHZoO1xuICBtYXgtd2lkdGg6IDEwMHZ3O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4ucmV2aWV3LW1vZGFsIC5tb2RhbC13cmFwcGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuaW9uLW1vZGFsLmF1dG8taGVpZ2h0IHtcbiAgLS1oZWlnaHQ6IGF1dG87XG4gIC0td2lkdGg6IDk1dnc7XG4gIC0tYm9yZGVyLXJhZGl1czogMTVweDtcbn1cbmlvbi1tb2RhbC5hdXRvLWhlaWdodC5ib3R0b20ge1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG59XG5pb24tbW9kYWwuYXV0by1oZWlnaHQgLmlvbi1wYWdlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgY29udGFpbjogY29udGVudDtcbn1cbmlvbi1tb2RhbC5hdXRvLWhlaWdodCAuaW9uLXBhZ2UgLmlubmVyLWNvbnRlbnQge1xuICBtYXgtaGVpZ2h0OiA4MHZoO1xuICBtYXgtd2lkdGg6IDk1dnc7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4uaW9zU2VhcmNoRml4IHtcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xufSJdfQ== */");

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
/* harmony default export */ __webpack_exports__["default"] = ("<ion-card>\r\n  <ion-card-header>\r\n    <ion-card-title *ngIf=\"isFarmer\" style=\"font-family: Montserrat\">\r\n      Pedido de: {{orderUser.name}}\r\n    </ion-card-title>\r\n    <ion-card-subtitle>\r\n      Fecha: {{order.creationDate | date:'yyyy/MM/dd h:mm:ss a'}}\r\n    </ion-card-subtitle>\r\n  </ion-card-header>\r\n  <ion-card-content style=\"padding-bottom: 0px !important;\">\r\n    <ion-label>\r\n      Productos pedidos:\r\n    </ion-label>\r\n    <ion-list>\r\n      <ion-item *ngFor=\"let product of order.orderedItems\"> {{product?.product?.name}} x {{product.productAmount}} </ion-item>\r\n      <!-- <div *ngFor=\"let product of order.orderedItems\"> {{product.product.name}}</div>-->\r\n    </ion-list>\r\n  </ion-card-content>\r\n  <ion-row>\r\n    <ion-col class=\"ion-padding-bottom\">\r\n      <div>Precio final: {{finalPrice | currency:'EUR'}}</div>\r\n\r\n      <div *ngIf=\"order.status == 'Preparado'\">\r\n        <app-pickup-alert [pickupDate]=\"order.pickupDate\"></app-pickup-alert>\r\n      </div>\r\n      <div *ngIf=\"order.status == 'Cancelado'\">❌️Pedido cancelado</div>\r\n      <div *ngIf=\"order.status == 'Entregado'\">📦 Pedido entregado</div>\r\n      <!-- Farmer Options -->\r\n      <div *ngIf=\"isFarmer\">\r\n        <ion-button *ngIf=\"order.status !== 'Preparado' && order.status !== 'Cancelado' && order.status !== 'Entregado'\" (click)=\"prepareOrder()\">Marcar como preparado</ion-button>\r\n        <ion-button *ngIf=\"order.status == 'Preparado'\" (click)=\"deliveredOrder()\">Marcar como entregado</ion-button>\r\n        <ion-button *ngIf=\"order.status !== 'Cancelado' && order.status !== 'Entregado'\" (click)=\"cancelOrder()\">Cancelar</ion-button>\r\n      </div>\r\n      <!-- User Options -->\r\n      <div *ngIf=\"!isFarmer\">\r\n        <ion-button *ngIf=\"order.status !== 'Cancelado' && order.status !=='Preparado' && order.status !== 'Entregado'\" (click)=\"cancelOrder()\">Cancelar</ion-button>\r\n      </div>\r\n    </ion-col>\r\n  </ion-row>\r\n  <ion-button *ngIf=\"order.status == 'Entregado' && !isFarmer && (!order.hasReview)\" expand=\"block\" (click)=\"openReviewPopup(order.id, order.ownerId)\">Dejar una review</ion-button>\r\n</ion-card>\r\n");

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

/***/ "pI2Q":
/*!***********************************************!*\
  !*** ./src/services/market/market.service.ts ***!
  \***********************************************/
/*! exports provided: MarketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarketService", function() { return MarketService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _models_market_market__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/market/market */ "Umsj");
/* harmony import */ var date_fns_esm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns/esm */ "b/SL");






let MarketService = class MarketService {
    constructor(firestore) {
        this.firestore = firestore;
        this.marketCollection = this.firestore.collection('config').doc('market');
    }
    getNextMarketDayFromDate(today) {
        return new Promise((resolve, reject) => {
            this.getCurrentMarket().then(value => {
                const marketInfo = value;
                let nextMarketDay = Object(date_fns_esm__WEBPACK_IMPORTED_MODULE_4__["nextDay"])(today, marketInfo.marketDay);
                let invalidDays = marketInfo.excludedDays.filter((day) => {
                    return Object(date_fns_esm__WEBPACK_IMPORTED_MODULE_4__["isSameDay"])(day, nextMarketDay);
                });
                while (invalidDays.length > 0) {
                    today = Object(date_fns_esm__WEBPACK_IMPORTED_MODULE_4__["add"])(today, { weeks: 1 });
                    nextMarketDay = Object(date_fns_esm__WEBPACK_IMPORTED_MODULE_4__["nextDay"])(today, marketInfo.marketDay);
                    invalidDays = marketInfo.excludedDays.filter((day) => {
                        return Object(date_fns_esm__WEBPACK_IMPORTED_MODULE_4__["isSameDay"])(day, nextMarketDay);
                    });
                }
                resolve(nextMarketDay);
            });
        });
    }
    getCurrentMarket() {
        return new Promise((resolve, reject) => {
            this.marketCollection.get().subscribe(value => {
                resolve(new _models_market_market__WEBPACK_IMPORTED_MODULE_3__["Market"]().convertFromDTO(value.data()));
            });
        });
    }
    generateMarket(market) {
        const marketEntity = market.convertToDTO();
        return new Promise((resolve, reject) => {
            this.marketCollection.set(marketEntity).then(value => {
                resolve(true);
            });
        });
    }
};
MarketService.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }
];
MarketService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], MarketService);



/***/ }),

/***/ "pJeZ":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/views/product-form/product-form.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content fullscreen>\r\n  <form [formGroup]=\"productForm\" (submit)=\"updateProduct()\">\r\n    <ion-item>\r\n      <ion-label position=\"floating\" type=\"text\">Nombre del producto</ion-label>\r\n      <ion-input formControlName=\"name\" placeholder=\"Patata\" [value]=\"product.name\"></ion-input>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label position=\"floating\" type=\"text\">Descripcion</ion-label>\r\n      <ion-input formControlName=\"description\" placeholder=\"La mas fuerte del campo\" [value]=\"product.description\"></ion-input>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label position=\"floating\" type=\"number\">Precio €</ion-label>\r\n      <ion-input formControlName=\"price\" placeholder=\"10\" type=\"number\" [value]=\"product.price\"></ion-input>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>Tipo de Unidad</ion-label>\r\n      <ion-select value=\"0\" interface=\"popover\" formControlName=\"unit\" [value]=\"product.unit\">\r\n        <ion-select-option *ngFor=\"let unit of optionslist; let i = index\" [value]=\"i\"> {{unit}} </ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>Categoria</ion-label>\r\n      <ion-select value=\"0\" interface=\"popover\" formControlName=\"category\" [value]=\"product.category\">\r\n        <ion-select-option *ngFor=\"let category of categorylist; let i = index\" [value]=\"i\"> {{category}} </ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label position=\"stacked\" type=\"file\">Foto</ion-label>\r\n      <ion-input (click)=\"takePicture()\" readonly formControlName=\"picture\" [value]=\"product.picture\"></ion-input>\r\n    </ion-item>\r\n    <ion-item >\r\n      <ion-checkbox slot=\"start\" formControlName=\"stock\" [checked]=\"product.stock\"></ion-checkbox>\r\n      <ion-label>En stock</ion-label>\r\n    </ion-item>\r\n  </form>\r\n  <ion-row class=\"cardfooter\">\r\n    <ion-col>\r\n      <ion-button *ngIf=\"!product.id\" class=\"ion-float-right\" (click)=\"createProduct()\" type=\"button\">\r\n        <div>Crear</div>\r\n      </ion-button>\r\n      <ion-button *ngIf=\"product.id\" class=\"ion-float-right\" (click)=\"updateProduct()\" type=\"button\">\r\n        <div *ngIf=\"product.id\">Modificar</div>\r\n      </ion-button>\r\n      <ion-button *ngIf=\"product.id\" class=\"ion-float-right\" (click)=\"deleteProduct()\" type=\"button\" color=\"danger\">\r\n        <div *ngIf=\"product.id\">Eliminar</div>\r\n      </ion-button>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-content>\r\n");

/***/ }),

/***/ "pshm":
/*!***************************************************************!*\
  !*** ./src/components/review-list/review-list.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXZpZXctbGlzdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "qFaY":
/*!********************************************!*\
  !*** ./src/services/chat/chats.service.ts ***!
  \********************************************/
/*! exports provided: ChatsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatsService", function() { return ChatsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _models_chat_chat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/chat/chat */ "2qT8");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _views_chat_chat_view__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../views/chat/chat.view */ "PUyY");
/* harmony import */ var _models_chat_message_chat_message__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../models/chat/message/chat-message */ "1j7d");








let ChatsService = class ChatsService {
    constructor(firestore, router, modalCtrl) {
        this.firestore = firestore;
        this.router = router;
        this.modalCtrl = modalCtrl;
        this.chatsCollection = this.firestore.collection('chats');
    }
    createChatOrOpen(ownerId, userId) {
        return new Promise((resolve, reject) => {
            this.getAllUserChats(ownerId).then(chatList => {
                const commonChat = chatList.filter(chat => chat.members.includes(userId));
                // Check if the chat exists
                if (commonChat.length !== 0) {
                    // Navigate to chat
                    resolve(this.openChatModal(commonChat[0].id));
                }
                else {
                    // Create chat
                    const newChat = new _models_chat_chat__WEBPACK_IMPORTED_MODULE_3__["Chat"]();
                    newChat.members.push(ownerId, userId);
                    this.createChat(newChat).then(id => {
                        resolve(this.openChatModal(id));
                    });
                }
            });
        });
    }
    createChat(chat) {
        return new Promise((resolve, reject) => {
            this.chatsCollection.add(chat.convertToDTO()).then(value => {
                resolve(value.id);
            });
        });
    }
    getAllUserChats(ownerId) {
        return new Promise((resolve, reject) => {
            this.firestore.collection('chats', ref => ref.where('_members', 'array-contains', ownerId)).valueChanges({ idField: '_id' })
                .subscribe(chatListEntity => {
                const chatList = [];
                chatListEntity.forEach(chatEntity => {
                    chatList.push(new _models_chat_chat__WEBPACK_IMPORTED_MODULE_3__["Chat"]().convertFromDTO(chatEntity));
                });
                resolve(chatList);
            });
        });
    }
    openChatModal(chatId) {
        this.modalCtrl.create({
            component: _views_chat_chat_view__WEBPACK_IMPORTED_MODULE_6__["ChatView"],
            componentProps: {
                id: chatId,
            }
        }).then(value => {
            value.present().then(r => {
                return true;
            });
        });
    }
    getChatById(chatId) {
        return new Promise((resolve, reject) => {
            this.chatsCollection.doc(chatId).valueChanges({ idField: '_id' }).subscribe(value => {
                const chat = new _models_chat_chat__WEBPACK_IMPORTED_MODULE_3__["Chat"]().convertFromDTO(value);
                this.chatsCollection.doc(chatId).collection('messages').valueChanges().subscribe(messages => {
                    const messagesList = [];
                    messages.forEach((chatMessage, index) => {
                        messagesList.push(new _models_chat_message_chat_message__WEBPACK_IMPORTED_MODULE_7__["ChatMessage"]().convertFromDTO(chatMessage));
                    });
                    messagesList.sort((a, b) => a.creationDate.getTime() - b.creationDate.getTime());
                    chat.messages = messagesList;
                });
                resolve(chat);
            });
        });
    }
    addMessageToChat(chatMessage, chatId) {
        return new Promise((resolve, reject) => {
            this.chatsCollection.doc(chatId).collection('messages').add(chatMessage.convertToDTO()).then(value => resolve(true));
        });
    }
};
ChatsService.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] }
];
ChatsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ChatsService);



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
/* harmony default export */ __webpack_exports__["default"] = ("<ion-item>\r\n  <ion-label style=\"font-family: Montserrat\">\r\n    <h1>\r\n      {{product.product.name}} x {{product.productAmount}}\r\n    </h1>\r\n  </ion-label>\r\n  <ion-button type=\"button\" size=\"default\" [color]=\"'danger'\" (click)=\"product.reduce()\">\r\n    <ion-icon name=\"remove-outline\"></ion-icon>\r\n  </ion-button>\r\n  <ion-button type=\"button\" size=\"default\" [color]=\"'success'\" (click)=\"product.add()\">\r\n    <ion-icon name=\"add-outline\" slot=\"icon-only\"></ion-icon>\r\n  </ion-button>\r\n  <ion-button size=\"default\" (click)=\"removeFromCart()\">\r\n    <ion-icon name=\"trash-outline\" slot=\"icon-only\"></ion-icon>\r\n  </ion-button>\r\n</ion-item>\r\n");

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

/***/ "t8b9":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/views/product-search/product-search.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header translucent>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button (click)=\"dismiss()\">\r\n        <ion-icon name=\"arrow-back-outline\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-searchbar #mySearchbar\r\n                   mode=\"ios\"\r\n                   class=\"iosSearchFix\"\r\n                   placeholder=\"Nombre del producto\"\r\n                   (ionInput)=\"getItems($event)\"></ion-searchbar>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"inner-content\">\r\n  <ion-list class=\"content-list\">\r\n    <app-product-list *ngFor=\"let inproduct of filteredProducts\" [product]=\"inproduct\"></app-product-list>\r\n  </ion-list>\r\n</ion-content>\r\n");

/***/ }),

/***/ "u9JG":
/*!*************************************************************!*\
  !*** ./src/components/review-list/review-list.component.ts ***!
  \*************************************************************/
/*! exports provided: ReviewListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewListComponent", function() { return ReviewListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_review_list_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./review-list.component.html */ "6Aiu");
/* harmony import */ var _review_list_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./review-list.component.scss */ "pshm");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");





let ReviewListComponent = class ReviewListComponent {
    constructor(modalController) {
        this.modalController = modalController;
    }
    ngOnInit() {
    }
    dismiss() {
        this.modalController.dismiss({
            dismissed: true
        });
    }
};
ReviewListComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] }
];
ReviewListComponent.propDecorators = {
    reviewList: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
ReviewListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-review-list',
        template: _raw_loader_review_list_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_review_list_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ReviewListComponent);



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
/* harmony import */ var _profiles_profiles_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../profiles/profiles.service */ "Wnju");











let OrderService = class OrderService {
    constructor(afAuth, firestore, storage, productService, authService, profileService) {
        this.afAuth = afAuth;
        this.firestore = firestore;
        this.storage = storage;
        this.productService = productService;
        this.authService = authService;
        this.profileService = profileService;
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
                    console.log(orderModel);
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
    uploadReviewToProfile(ownerId, review) {
        return new Promise((resolve, reject) => {
            this.profileService.uploadReviewToProfile(ownerId, review).then(value => {
                this.orderCollection.doc(review.orderId).update({ _hasReview: true }).then(value1 => {
                    resolve(true);
                });
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
    { type: _auth_auth_service_service__WEBPACK_IMPORTED_MODULE_8__["AuthServiceService"] },
    { type: _profiles_profiles_service__WEBPACK_IMPORTED_MODULE_10__["ProfilesService"] }
];
OrderService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], OrderService);



/***/ }),

/***/ "uc5p":
/*!*************************************************************!*\
  !*** ./src/components/image-zoom/image-zoom.component.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGltYWdlLXpvb20uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtBQUNGIiwiZmlsZSI6ImltYWdlLXpvb20uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudHtcclxuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG59XHJcbiJdfQ== */");

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
    validateIsCurrentUser(userId) {
        return userId === this.userId;
    }
    logout() {
        return new Promise((resolve, reject) => {
            this.afAuth.signOut().then(() => {
                window.location.reload();
                resolve(true);
            });
        });
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
        this.lostPassword = false;
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
    presentToastSuccess() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: 'Email enviado.',
                duration: 2000,
                color: 'success'
            });
            toast.present();
        });
    }
    ngOnInit() {
        this.registrationForm = this.fb.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email]],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
        });
        this.recoverForm = this.fb.group({
            emailRec: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email]],
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
        this.router.navigate(['myProfile']);
    }
    toggleFieldTextType() {
        this.hide = !this.hide;
    }
    recoverAccount() {
        if (!this.recoverForm.valid) {
            return;
        }
        this.auth.sendPasswordResetEmail(this.recoverForm.value.emailRec).then(value => {
            this.presentToastSuccess();
        });
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
/* harmony import */ var _views_chats_chats_view__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../views/chats/chats.view */ "cZKm");
/* harmony import */ var _views_chat_chat_view__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../views/chat/chat.view */ "PUyY");
















const routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: _views_login_login_view__WEBPACK_IMPORTED_MODULE_3__["LoginView"] },
    { path: 'profile', component: _views_profile_profile_view__WEBPACK_IMPORTED_MODULE_4__["ProfileView"] },
    { path: 'myProfile', component: _views_profile_profile_view__WEBPACK_IMPORTED_MODULE_4__["ProfileView"] },
    { path: 'profile/:id', component: _views_profile_profile_view__WEBPACK_IMPORTED_MODULE_4__["ProfileView"] },
    { path: 'profiles', component: _views_profile_list_profile_list_view__WEBPACK_IMPORTED_MODULE_8__["ProfileListView"] },
    { path: 'profiles/:isFarmer', component: _views_profile_list_profile_list_view__WEBPACK_IMPORTED_MODULE_8__["ProfileListView"] },
    { path: 'newProductForm', component: _views_product_form_product_form_component__WEBPACK_IMPORTED_MODULE_5__["ProductFormComponent"] },
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
    { path: 'chats', component: _views_chats_chats_view__WEBPACK_IMPORTED_MODULE_14__["ChatsView"] },
    { path: 'chat/:id', component: _views_chat_chat_view__WEBPACK_IMPORTED_MODULE_15__["ChatView"] },
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
            else {
                this.rebuildForm();
                this.product = new _models_product_product__WEBPACK_IMPORTED_MODULE_4__["Product"]();
            }
        });
    }
    ngOnInit() {
        this.optionslist = this.enumToArrayPipe.transform(_models_product_product__WEBPACK_IMPORTED_MODULE_4__["UnitTypeEnum"]);
        this.product = new _models_product_product__WEBPACK_IMPORTED_MODULE_4__["Product"]();
        this.rebuildForm();
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
    rebuildForm() {
        this.productForm = this.formBuilder.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]],
            description: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]],
            price: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]],
            unit: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]],
            picture: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]],
            stock: [true,],
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
            this.fillProductToForm();
            if (this.productForm.value.stock === '') {
                this.productForm.value.stock = true;
            }
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
        this.fillProductToForm();
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
    fillProductToForm() {
        this.product.name = this.productForm.value.name;
        this.product.description = this.productForm.value.description;
        this.product.price = this.productForm.value.price;
        this.product.unit = this.productForm.value.unit;
        this.product.picture = this.productForm.value.picture;
        this.product.stock = this.productForm.value.stock;
        this.product.category = this.productForm.value.category;
    }
    uploadPictureToProduct(picture, userID, productID) {
        const file = picture;
        const filePath = '/products/' + userID + '/' + productID + '/image.png';
        this.productForm.value.picture = filePath;
        const ref = this.storage.ref(filePath);
        return ref.putString(file, 'base64');
    }
    changeView(id) {
        this.router.navigate(['/product', id]).then(value => this.rebuildForm());
    }
    deleteProduct() {
        this.productService.deleteProduct(this.product).then(value => {
            this.router.navigate(['/profile']).then(value1 => this.rebuildForm());
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

/***/ "wXBW":
/*!***************************************************************!*\
  !*** ./src/components/review-score/review-score.component.ts ***!
  \***************************************************************/
/*! exports provided: ReviewScoreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewScoreComponent", function() { return ReviewScoreComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_review_score_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./review-score.component.html */ "Isfz");
/* harmony import */ var _review_score_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./review-score.component.scss */ "B728");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_profiles_profiles_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/profiles/profiles.service */ "Wnju");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _review_list_review_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../review-list/review-list.component */ "u9JG");







let ReviewScoreComponent = class ReviewScoreComponent {
    constructor(profileService, modalController) {
        this.profileService = profileService;
        this.modalController = modalController;
        this.scoreValue = 5;
        this.scoreStars = 5;
        this.reviewList = [];
    }
    ngOnInit() {
        this.profileService.loadReviewsByOwnerId(this.ownerId).then(value => {
            this.reviewList = value;
            this.getScoreFromReviewList(this.reviewList);
        });
    }
    getScoreFromReviewList(reviewList) {
        let totalScore = 0;
        const totalCount = reviewList.length;
        reviewList.forEach(review => {
            totalScore += review.valuation;
        });
        this.scoreValue = (totalScore / totalCount);
        this.scoreStars = Math.round(this.scoreValue * 2) / 2;
    }
    openReviewListModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _review_list_review_list_component__WEBPACK_IMPORTED_MODULE_6__["ReviewListComponent"],
                cssClass: 'my-custom-class',
                componentProps: {
                    reviewList: this.reviewList
                }
            });
            return yield modal.present();
        });
    }
};
ReviewScoreComponent.ctorParameters = () => [
    { type: _services_profiles_profiles_service__WEBPACK_IMPORTED_MODULE_4__["ProfilesService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] }
];
ReviewScoreComponent.propDecorators = {
    ownerId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
ReviewScoreComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-review-score',
        template: _raw_loader_review_score_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_review_score_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ReviewScoreComponent);



/***/ }),

/***/ "wjYC":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/views/order-list/order-list.view.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\r\n  <ion-text color=\"tertiary\">\r\n    <h2 class=\"ion-margin\" style=\"font-family: Montserrat; font-weight: bold; font-style: normal; letter-spacing: 2px\">Pedidos</h2>\r\n  </ion-text>\r\n  <div padding>\r\n    <ion-segment [(ngModel)]=\"filterCategory\" (ngModelChange)=\"updateOrders()\" [scrollable]=\"true\">\r\n      <ion-segment-button value=\"Pendiente\" style=\"font-family: Montserrat; letter-spacing: 0.128571px;\">\r\n        Nuevos\r\n      </ion-segment-button>\r\n      <ion-segment-button value=\"Preparado\" style=\"font-family: Montserrat; letter-spacing: 0.128571px;\">\r\n        Preparado\r\n      </ion-segment-button>\r\n      <ion-segment-button value=\"Entregado\" style=\"font-family: Montserrat; letter-spacing: 0.128571px;\">\r\n        Entregado\r\n      </ion-segment-button>\r\n      <ion-segment-button value=\"Cancelado\" style=\"font-family: Montserrat; letter-spacing: 0.128571px;\">\r\n        Cancelado\r\n      </ion-segment-button>\r\n    </ion-segment>\r\n  </div>\r\n\r\n  <app-order-item *ngFor=\"let order of orderShown\" [order]=\"order\" (refreshViewEvent)=\"refreshList()\"></app-order-item>\r\n</ion-content>\r\n\r\n");

/***/ }),

/***/ "y/F2":
/*!*****************************************************************************!*\
  !*** ./src/components/review-list/review-detail/review-detail.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ReviewDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewDetailComponent", function() { return ReviewDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_review_detail_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./review-detail.component.html */ "XKHb");
/* harmony import */ var _review_detail_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./review-detail.component.scss */ "3vaY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_profiles_profiles_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/profiles/profiles.service */ "Wnju");





let ReviewDetailComponent = class ReviewDetailComponent {
    constructor(profileService) {
        this.profileService = profileService;
    }
    ngOnInit() {
        if (this.review.reviewerId) {
            this.profileService.loadUserById(this.review.reviewerId).then(value => {
                this.review.reviewer = value;
            });
        }
    }
};
ReviewDetailComponent.ctorParameters = () => [
    { type: _services_profiles_profiles_service__WEBPACK_IMPORTED_MODULE_4__["ProfilesService"] }
];
ReviewDetailComponent.propDecorators = {
    review: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
ReviewDetailComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-review-detail',
        template: _raw_loader_review_detail_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_review_detail_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ReviewDetailComponent);



/***/ }),

/***/ "yPN1":
/*!*************************************************************!*\
  !*** ./src/components/chat-detail/chat-detail.component.ts ***!
  \*************************************************************/
/*! exports provided: ChatDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatDetailComponent", function() { return ChatDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_chat_detail_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./chat-detail.component.html */ "8vj/");
/* harmony import */ var _chat_detail_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chat-detail.component.scss */ "b6mC");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let ChatDetailComponent = class ChatDetailComponent {
    constructor() { }
    ngOnInit() { }
};
ChatDetailComponent.ctorParameters = () => [];
ChatDetailComponent.propDecorators = {
    chat: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
ChatDetailComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-chat-detail',
        template: _raw_loader_chat_detail_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_chat_detail_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ChatDetailComponent);



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
        this._hasReview = false;
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
    get hasReview() {
        return this._hasReview;
    }
    set hasReview(value) {
        this._hasReview = value;
    }
    get pickupDate() {
        return this._pickupDate;
    }
    set pickupDate(value) {
        this._pickupDate = value;
    }
    convertToDTO() {
        return Object(class_transformer__WEBPACK_IMPORTED_MODULE_1__["classToPlain"])(this);
    }
    convertFromDTO(order) {
        const productOrder = new _cart_product_order__WEBPACK_IMPORTED_MODULE_0__["ProductOrder"]();
        const newOrder = Object(class_transformer__WEBPACK_IMPORTED_MODULE_1__["plainToClass"])(Order, order);
        // Se convierte de Timestamp (firebase) a Date la fecha
        newOrder.creationDate = order._creationDate.toDate();
        if (order._pickupDate) {
            console.log(order._pickupDate);
            newOrder.pickupDate = order._pickupDate.toDate();
            console.log(newOrder.creationDate);
        }
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

/***/ }),

/***/ "zvlA":
/*!**************************************************************!*\
  !*** ./src/views/product-search/product-search.component.ts ***!
  \**************************************************************/
/*! exports provided: ProductSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductSearchComponent", function() { return ProductSearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_product_search_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./product-search.component.html */ "t8b9");
/* harmony import */ var _product_search_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product-search.component.scss */ "kmbO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");





let ProductSearchComponent = class ProductSearchComponent {
    constructor(modalCtrl) {
        this.modalCtrl = modalCtrl;
    }
    ngOnInit() {
        this.filteredProducts = this.productList;
    }
    dismiss() {
        // using the injected ModalController this page
        // can "dismiss" itself and optionally pass back data
        this.modalCtrl.dismiss({
            dismissed: true
        });
    }
    getItems(ev) {
        // Reset items back to all of the items
        this.filteredProducts = this.productList;
        // set val to the value of the searchbar
        const val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() !== '') {
            this.filteredProducts = this.productList.filter(value => {
                return (value.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
            // this.items = this.items.filter((item) => {
            //  return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
            //  });
        }
    }
};
ProductSearchComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] }
];
ProductSearchComponent.propDecorators = {
    productList: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
ProductSearchComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-product-search',
        template: _raw_loader_product_search_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_product_search_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ProductSearchComponent);



/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map