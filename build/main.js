webpackJsonp([0],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__paperDetails_paperDetails__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__paperDetails_attendance_attendance__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__paperDetails_notes_notes__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__paperDetails_assignment_assignmentlist_assignmentlist__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__paperDetails_messages_messages__ = __webpack_require__(102);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.date = new Date();
        this.today = this.date.getDay();
        this.dayNumber = this.today - 1;
        this.dayArray = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
        this.dayArray3C = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
        this.pet = "TimeTable";
        this.days = ['Monday', 'Tuesday', 'Wedmesday', 'Thursday', 'Friday', 'Saturday'];
        this.timeTable = [
            { time: '8:40 AM', duration: '55 mins', status: 'In Progress', paper: 'GE', teacher: 'Miss Shini Mehta', room: '10' },
            { time: '9:35', duration: '55 mins', status: 'Not Started', paper: 'AECC', teacher: 'Miss Jigyasa', room: '4' },
            { time: '10:30', duration: '55 mins', status: 'Not Started', paper: 'RV', teacher: 'Mr Anish Sharma', room: '5' },
            { time: '11:25', duration: '55 mins', status: 'Not Started', paper: 'NA', teacher: 'Mr Atul Jain', room: '11' },
            { time: '12:20', duration: '55 mins', status: 'Not Started', paper: 'NA', teacher: 'Mr Atul Jain', room: '11' },
            { time: '9:35', duration: '55 mins', status: 'Not Started', paper: 'AECC', teacher: 'Miss Jigyasa', room: '4' },
            { time: '10:30', duration: '55 mins', status: 'Not Started', paper: 'RV', teacher: 'Mr Anish Sharma', room: '5' },
            { time: '11:25', duration: '55 mins', status: 'Not Started', paper: 'NA', teacher: 'Mr Atul Jain', room: '11' },
            { time: '12:20', duration: '55 mins', status: 'Not Started', paper: 'NA', teacher: 'Mr Atul Jain', room: '11' },
        ];
    }
    HomePage.prototype.openPaperDetails = function (period) {
        this.period = period;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__paperDetails_paperDetails__["a" /* PaperDetailsPage */], { 'period': this.period });
    };
    HomePage.prototype.openAttendancePage = function (period) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__paperDetails_attendance_attendance__["a" /* AttendancePage */], { 'period': period });
    };
    HomePage.prototype.openNotesPage = function (period) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__paperDetails_notes_notes__["a" /* NotesPage */], { 'period': period });
    };
    HomePage.prototype.openAssignmentPage = function (period) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__paperDetails_assignment_assignmentlist_assignmentlist__["a" /* AssignmentListPage */], { 'period': period });
    };
    HomePage.prototype.openPaperMessagePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__paperDetails_messages_messages__["a" /* PaperMessagesPage */], { 'period': this.period });
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/Users/alkagirdhar/Desktop/akash/ramjas/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Dashboard</ion-title>\n  </ion-navbar>\n  <ion-toolbar no-border-top color="primary">\n    <ion-segment [(ngModel)]="TimeTable">\n      <ion-segment-button *ngFor="let day of dayArray3C;let d = index;" [value]="dayArray[d]">\n        <span class="textWhite">{{ day }}</span>\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class="background1">\n  <div [ngSwitch]="TimeTable">\n    <ng-template let-day ngFor [ngForOf]="dayArray" let-j="index">\n      <ion-list *ngSwitchCase="day">\n        <ion-list-header>\n          {{ date }}\n        </ion-list-header>\n        <ion-list no-lines>\n          <ion-item-sliding *ngFor="let period of timeTable">\n            <button ion-item class="timetable-item" (click)="openPaperDetails(period)">\n              <ion-grid no-padding>\n                <ion-row>\n                  <ion-col col-4 class="border border-right-progress left-col" text-right>\n                    <h2 class="textLarge">{{period.time}}</h2>\n                    <span class="textGray">{{period.duration}}</span>\n                    <div><span class="colorInProgress textSmall">{{period.status}}</span></div>\n                  </ion-col>\n                  <ion-col col-8 col-8 class="border border-left-progress right-col">\n                    <h2 class="textLarge">{{period.paper}}</h2>\n                    <span class="textGray">\n          <ion-icon name="person"></ion-icon> {{period.teacher}}</span>\n                    <div><span class="textSmall"><b>Room no. {{period.room}}</b></span></div>\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n            </button>\n            <ion-item-options side="left">\n              <button ion-button color="primary" (click)="openAttendancePage(period)">\n              <ion-icon name="man"></ion-icon>\n              Attendance\n            </button>\n              <button ion-button color="secondary" (click)="openPaperMessagePage()">\n              <ion-icon name="chatbubbles"></ion-icon>\n              Message\n            </button>\n            </ion-item-options>\n            <ion-item-options side="right">\n              <button ion-button color="primary" (click)="openAssignmentPage(period)">\n              <ion-icon name="school"></ion-icon>\n              Assignment\n            </button>\n              <button ion-button color="primary" (click)="openNotesPage(period)">\n                <ion-icon name="paper"></ion-icon>\n                Notes\n              </button>\n            </ion-item-options>\n          </ion-item-sliding>\n        </ion-list>\n\n\n\n\n        <!-- <ion-grid>\n          <ion-row no-padding>\n            <ion-col col-4 class="border border-right-progress" text-right>\n              <span class="textLarge">8:40 A.M.</span>\n              <br>\n              <span class="textGray">55 minutes</span>\n              <div><span class="colorInProgress textSmall">In Progress</span></div>\n            </ion-col>\n            <ion-col col-8 class="border border-left-progress" no-padding>\n              <ion-item-sliding>\n                <ion-item no-padding no-lines no-margin class="timetable-item">\n                  <span class="textLarge">GE</span>\n                  <br>\n                  <span class="textGray">\n                <ion-icon name="person"></ion-icon> Miss Shini Mehta</span>\n                  <div><span class="textSmall"><b>Room no. 3</b></span></div>\n                </ion-item>\n                <ion-item-options side="left">\n                  <button ion-button color="primary">\n                    <ion-icon name="man"></ion-icon>\n                    Attendance\n                  </button>\n                  <button ion-button color="secondary">\n                    <ion-icon name="chatbubbles"></ion-icon>\n                    Message\n                  </button>\n                </ion-item-options>\n                <ion-item-options side="right">\n                  <button ion-button color="primary">\n                    <ion-icon name="school"></ion-icon>\n                    Assignment\n                  </button>\n                  <button ion-button color="primary">\n                      <ion-icon name="paper"></ion-icon>\n                      Motes\n                    </button>\n                </ion-item-options>\n              </ion-item-sliding>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-4 class="border border-right-notstarted" text-right>\n              <span class="textLarge">9:35 A.M.</span>\n              <br>\n              <span class="textGray">55 minutes</span>\n              <div><span class="colorNotstarted textSmall">Not Started</span></div>\n            </ion-col>\n            <ion-col col-8 class="border border-left-notstarted">\n              <span class="textLarge">RV</span>\n              <br>\n              <span class="textGray">\n                  <ion-icon name="person"></ion-icon> Mrs Renu Gupta</span>\n              <div><span class="textSmall"><b>Room no. 5</b></span></div>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-4 class="border border-right-notstarted" text-right>\n              <span class="textLarge">10:30 A.M.</span>\n              <br>\n              <span class="textGray">55 minutes</span>\n              <div><span class="colorNotstarted textSmall">Not Started</span></div>\n            </ion-col>\n            <ion-col col-8 class="border border-left-notstarted">\n              <span class="textLarge">AECC</span>\n              <br>\n              <span class="textGray">\n                    <ion-icon name="person"></ion-icon>Mr Anikait Garg</span>\n              <div><span class="textSmall"><b>Room no. 7</b></span></div>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-4 class="border border-right-notstarted" text-right>\n              <span class="textLarge">12:20 A.M.</span>\n              <br>\n              <span class="textGray">55 minutes</span>\n              <div><span class="colorNotstarted textSmall">Not Started</span></div>\n            </ion-col>\n            <ion-col col-8 class="border border-left-notstarted">\n              <span class="textLarge">Maths II</span>\n              <br>\n              <span class="textGray">\n                      <ion-icon name="person"></ion-icon>Mr Anikait Garg</span>\n              <div><span class="textSmall"><b>Room no. 7</b></span></div>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-4 class="border border-right-notstarted" text-right>\n              <span class="textLarge">1:15 P.M.</span>\n              <br>\n              <span class="textGray">55 minutes</span>\n              <div><span class="colorNotstarted textSmall">Not Started</span></div>\n            </ion-col>\n            <ion-col col-8 class="border border-left-notstarted">\n              <span class="textLarge"> </span>\n              <br>\n              <span class="textGray">\n                        <ion-icon name="person"></ion-icon> </span>\n              <div><span class="textSmall"><b> </b></span></div>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-4 class="border border-right-notstarted" text-right>\n              <span class="textLarge">2:10 P.M.</span>\n              <br>\n              <span class="textGray">55 minutes</span>\n              <div><span class="colorNotstarted textSmall">Not Started</span></div>\n            </ion-col>\n            <ion-col col-8 class="border border-left-notstarted">\n              <span class="textLarge"> </span>\n              <br>\n              <span class="textGray">\n                          <ion-icon name="person"></ion-icon> </span>\n              <div><span class="textSmall"><b> </b></span></div>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-4 class="border border-right-notstarted" text-right>\n              <span class="textLarge">3:05 P.M.</span>\n              <br>\n              <span class="textGray">55 minutes</span>\n              <div><span class="colorNotstarted textSmall">Not Started</span></div>\n            </ion-col>\n            <ion-col col-8 class="border border-left-notstarted">\n              <span class="textLarge"> </span>\n              <br>\n              <span class="textGray">\n                            <ion-icon name="person"></ion-icon> </span>\n              <div><span class="textSmall"><b> </b></span></div>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-4 class="border border-right-notstarted" text-right>\n              <span class="textLarge">4:00 P.M.</span>\n              <br>\n              <span class="textGray">55 minutes</span>\n              <div><span class="colorNotstarted textSmall">Not Started</span></div>\n            </ion-col>\n            <ion-col col-8 class="border border-left-notstarted">\n              <span class="textLarge"> </span>\n              <br>\n              <span class="textGray">\n                              <ion-icon name="person"></ion-icon> </span>\n              <div><span class="textSmall"><b> </b></span></div>\n            </ion-col>\n          </ion-row>\n        </ion-grid> -->\n      </ion-list>\n    </ng-template>\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/alkagirdhar/Desktop/akash/ramjas/src/pages/home/home.html"*/,
        styles: ["\n  ion-label{\n      margin: 5px 0 5px 6px !important;\n}"]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaperMessagesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PaperMessagesPage = (function () {
    function PaperMessagesPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.period = this.navParams.get('period');
    }
    return PaperMessagesPage;
}());
PaperMessagesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'messages',template:/*ion-inline-start:"/Users/alkagirdhar/Desktop/akash/ramjas/src/pages/paperDetails/messages/messages.html"*/'<ion-header>\n        <ion-navbar color="primary">\n                \n          <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n          </button>\n          <ion-title>\n                  Miss Renu Bhadoriya\n                  <div class="textWhite subTitle">Mobile • 5 hrs ago</div>\n        </ion-title>\n        </ion-navbar>\n      </ion-header>\n\n<ion-content class="background1">\n        <div class="chats">\n<div class="msgArea">\n        <div class="avatar">\n                <img class="image-bubble" src="http://www.kemmannu.com/images2011/Sep2011/kemcomMG_7.jpg">\n        </div>\n        <div class="msgBox">\n                Hello whats your name?\n        </div> \n        <div class="date">\n                Renu • 2:59 PM\n        </div>\n</div>\n\n<div class="msgArea me">\n        <div class="avatar">\n                <img src="https://irua.ku.edu/sites/irua.drupal.ku.edu/files/images/general/balaji.jpg">\n        </div>\n        <div class="msgBox">\n                Hello I am Akash Gupta and i have a doubt.\n        </div>  \n        <div class="date">\n                Akash • 3:00 PM\n        </div>\n</div>\n</div>\n</ion-content>\n<ion-footer class="msgFooter">\n        <ion-grid>\n                <ion-row>\n                        <ion-col col-10>\n                                        <ion-textarea placeholder="Type a message"></ion-textarea>\n                        </ion-col>\n                        <ion-col col-2>\n\n                                <div class="send">\n                                                <ion-icon name="send" class="send-btn"></ion-icon>\n                                </div>\n                                \n                        </ion-col>\n                        \n                </ion-row>\n        </ion-grid>\n</ion-footer>\n'/*ion-inline-end:"/Users/alkagirdhar/Desktop/akash/ramjas/src/pages/paperDetails/messages/messages.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], PaperMessagesPage);

//# sourceMappingURL=messages.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SharedService = (function () {
    function SharedService() {
    }
    SharedService.prototype.getCategory = function () {
        return this.category;
    };
    SharedService.prototype.setCategory = function (category) {
        this.category = category;
    };
    return SharedService;
}());
SharedService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], SharedService);

//# sourceMappingURL=shared.service.js.map

/***/ }),

/***/ 111:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 111;

/***/ }),

/***/ 152:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 152;

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaperDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PaperDetailsPage = (function () {
    function PaperDetailsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.period = this.navParams.get('period');
        this.paperInformation = [
            {
                name: this.period.paper,
                description: 'Nullam in ante ac dui rutrum aliquam vel in elit. Donec feugiat convallis est, vel volutpat lacus tristique a. Aenean interdum turpis enim, a condimentum ipsum varius non',
                books: 'Book 1, Book 2, Book 3, Book 4',
                urls: 'www.url1.com, www.url2.com, www.url3.com',
                videos: 'video1, video2, video3',
                whitepaper: 'Aenean lacinia elementum tempor. Etiam accumsan vel ligula id fermentum. Maecenas tincidunt neque mauris, ac ultrices justo porttitor sed. Sed sed semper arcu, vitae varius libero. Vestibulum tempus dolor eu sollicitudin rutrum. Fusce non iaculis erat. Cras pharetra ante sit amet odio varius porta. Duis quis tortor pharetra, ornare quam sed, cursus eros. Morbi et sapien nunc. Quisque tristique consectetur leo congue efficitur. Phasellus eu dolor vel nunc fermentum pellentesque.'
            }
        ];
    }
    return PaperDetailsPage;
}());
PaperDetailsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'paperDetails',template:/*ion-inline-start:"/Users/alkagirdhar/Desktop/akash/ramjas/src/pages/paperDetails/paperDetails.html"*/'<ion-header>\n        <ion-navbar color="primary">\n          <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n          </button>\n          <ion-title>Maths</ion-title>\n        </ion-navbar>\n      </ion-header>\n\n<ion-content class="background1">\n    <ion-item class="background2 textWhite">\n        <b>\n            Description\n        </b>\n        <span class="paragraph textWhite">\n            <!-- {{paperInformation.description}} -->\n            Nullam in ante ac dui rutrum aliquam vel in elit. Donec feugiat convallis est, vel volutpat lacus tristique a. Aenean interdum turpis enim, a condimentum ipsum varius non\n        </span>\n        <ion-grid>\n                <ion-row>\n                <ion-col col-4>\n                    <button ion-button round small class="fullWidth">\n                        Assessment\n                    </button>\n                </ion-col>\n                <ion-col col-4>\n                        <button ion-button round small class="fullWidth">\n                             Messages\n                        </button>\n                </ion-col>\n                <ion-col col-4>\n                        <button ion-button round small class="fullWidth">\n                                Assignment\n                           </button>\n                </ion-col>\n            </ion-row>\n\n            </ion-grid>\n    </ion-item>\n    <ion-item>\n            <ion-icon name="person" item-left></ion-icon>\n            Faculty name\n            <span item-right>\n                    <b>Miss Renu Bhadoriya</b>\n            </span>\n        </ion-item>\n    <ion-card padding>\n            <b>\n                Books\n            </b>\n            <p>\n                    <!-- {{paperInformation.books}} -->\n                    Book 1, Book 2, Book 3, Book 4\n\n            </p>\n    </ion-card>\n\n    <ion-card padding>\n        <b>\n            URLs\n        </b>\n        <p>\n                <!-- {{paperInformation.urls}} -->\n                ww.url1.com, www.url2.com, www.url3.com\n        </p>\n    </ion-card>\n  \n    <ion-card>\n            <ion-card-header>\n                <b>Attendance</b>\n                <br>\n                <progress value="22" max="100" style="width:100%; background:red">\n                    </progress>\n            </ion-card-header>\n            <ion-item>\n                    <b item-left>\n                        Total classes held\n                    </b>\n                    <span item-right>120</span>\n            </ion-item>\n            <ion-item>\n                        <b item-left>\n                            Present\n                        </b>\n                        <span item-right> 80</span>\n            </ion-item>\n            <ion-item>\n                        <b item-left>\n                            Absent\n                        </b>\n                    <span item-right>40</span>\n            </ion-item>\n        </ion-card> \n\n\n<ion-list-header>\n    Videos\n</ion-list-header>\n<ion-card padding>\n    <p>\n        <!-- {{paperInformation.videos}} -->\n        video1, video2, video3\n    </p>\n</ion-card>\n\n<ion-card padding>\n        <b>\n            Whitepapers\n        </b>\n        <p>\n                <!-- {{paperInformation.whitepapers}} -->\n                Aenean lacinia elementum tempor. Etiam accumsan vel ligula id fermentum. Maecenas tincidunt neque mauris, ac ultrices justo porttitor sed. Sed sed semper arcu, vitae varius libero. Vestibulum tempus dolor eu sollicitudin rutrum. Fusce non iaculis erat. Cras pharetra ante sit amet odio varius porta. Duis quis tortor pharetra, ornare quam sed, cursus eros. Morbi et sapien nunc. Quisque tristique consectetur leo congue efficitur. Phasellus eu dolor vel nunc fermentum pellentesque.\n        </p>\n    </ion-card>\n\n\n\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/alkagirdhar/Desktop/akash/ramjas/src/pages/paperDetails/paperDetails.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], PaperDetailsPage);

//# sourceMappingURL=paperDetails.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AttendancePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AttendancePage = (function () {
    function AttendancePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.period = this.navParams.get('period');
    }
    return AttendancePage;
}());
AttendancePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'attendance',template:/*ion-inline-start:"/Users/alkagirdhar/Desktop/akash/ramjas/src/pages/paperDetails/attendance/attendance.html"*/'<ion-header>\n        <ion-navbar color="primary">\n          <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n          </button>\n          <ion-title>{{period.paper}}</ion-title>\n        </ion-navbar>\n      </ion-header>\n\n<ion-content class="background1">\n    <ion-list-header no-lines>\n        {{period.paper}} Attendance\n    </ion-list-header>\n    <progress value="22" max="100" style="width:100%; background:red">\n        </progress>\n    <ion-card no-padding>\n            <ion-item>\n                    <b item-left>\n                        Total classes held\n                    </b>\n                    <span item-right>120</span>\n            </ion-item>\n    </ion-card>\n    <ion-card no-padding>\n            <ion-item>\n                    <b item-left>\n                        Present\n                    </b>\n                    <span item-right> 80</span>\n        </ion-item>\n    </ion-card>\n    <ion-card no-padding>\n            <ion-item>\n                    <b item-left>\n                        Absent\n                    </b>\n                <span item-right>40</span>\n        </ion-item>\n    </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/alkagirdhar/Desktop/akash/ramjas/src/pages/paperDetails/attendance/attendance.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], AttendancePage);

//# sourceMappingURL=attendance.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NotesPage = (function () {
    function NotesPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.period = this.navParams.get('period');
    }
    return NotesPage;
}());
NotesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'notes',template:/*ion-inline-start:"/Users/alkagirdhar/Desktop/akash/ramjas/src/pages/paperDetails/notes/notes.html"*/'<ion-header>\n        <ion-navbar color="primary">\n          <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n          </button>\n          <ion-title>{{period.paper}}</ion-title>\n        </ion-navbar>\n      </ion-header>\n\n<ion-content class="background1">\n<ion-list-header>\n    <b>{{period.paper}} Notes</b>\n</ion-list-header>\n<ion-card padding>\n    <b>Introduction</b>\n    <p>\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum non urna ante. Proin aliquet hendrerit diam, nec luctus ipsum pellentesque eu. Vestibulum congue metus sed nisi maximus, vel scelerisque erat fringilla. \n    </p>\n</ion-card>\n<ion-card padding>\n        <b>Chapter 1</b>\n        <p>\n                Aenean lacinia elementum tempor. Etiam accumsan vel ligula id fermentum. Maecenas tincidunt neque mauris, ac ultrices justo porttitor sed. Sed sed semper arcu, vitae varius libero. Vestibulum tempus dolor eu sollicitudin rutrum. Fusce non iaculis erat. Cras pharetra ante sit amet odio varius porta. Duis quis tortor pharetra, ornare quam sed, cursus eros. Morbi et sapien nunc. Quisque tristique consectetur leo congue efficitur. Phasellus eu dolor vel nunc fermentum pellentesque.\n        </p>\n    </ion-card>\n    <ion-card padding>\n            <b>Chapter 2</b>\n            <p>\n                    Nullam in ante ac dui rutrum aliquam vel in elit. Donec feugiat convallis est, vel volutpat lacus tristique a. Aenean interdum turpis enim, a condimentum ipsum varius non. Phasellus non bibendum libero. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent rhoncus elit quis ante luctus, non imperdiet lectus tincidunt. Proin eu libero et quam aliquet ultrices. Phasellus cursus elementum nunc nec varius. Proin fermentum arcu vel justo consectetur, eu condimentum lorem molestie. Phasellus auctor aliquam sapien vitae cursus. Donec dictum mauris non felis elementum, aliquam luctus nibh pulvinar. Nulla eleifend mauris nibh, ut venenatis magna pretium sed.\n            </p>\n        </ion-card>    \n        <ion-card padding>\n                <b>Important Points</b>\n                    <ul>\n                        <li>\n                                Pellentesque eget orci cursus mi vestibulum faucibus.\n                        </li>\n                        <li>\n                                Ut purus quam, fermentum sit amet tristique congue, tincidunt eu tortor. \n                        </li>\n                        <li>\n                                Vivamus pretium ligula risus, ut cursus eros lacinia id.\n                        </li>\n                        <li>\n                                Duis volutpat eget libero a venenatis.\n                        </li>\n                    </ul>\n            </ion-card>           \n</ion-content>\n'/*ion-inline-end:"/Users/alkagirdhar/Desktop/akash/ramjas/src/pages/paperDetails/notes/notes.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], NotesPage);

//# sourceMappingURL=notes.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AssignmentListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__assignment__ = __webpack_require__(200);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AssignmentListPage = (function () {
    function AssignmentListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.period = this.navParams.get('period');
        this.assignments = [
            { image: 'http://www.freeimages.co.uk/galleries/workplace/education/thumbs/maths_school.jpg', title: 'Aenean lacinia elementum tempor', description: 'Aenean lacinia elementum tempor. Etiam accumsan vel ligula id fermentum. Maecenas tincidunt neque mauris, ac ultrices justo porttitor sed. Sed sed semper arcu, vitae varius libero. Vestibulum tempus dolor eu sollicitudin rutrum.', leftTime: '3 days left' },
            { image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAB11BMVEX///9+IG7tGyQoOJAPdb0ksk6Mxj73lB3tAIwAre/+//0AtPT6//////v9//7//v/1iYqMlMGEyzr9lRr2gLp3FHQAeMOFTKYZNJMYLosOtlEPdru6f2esaDYks0v5FRVReV2AEHGOxD6QYmvtBBSJUoDCakUgLZb4AIzyAJB8IGlCfsCZY7y4i6uFDmgpOJSL0JzyDyL99PPzbW9kjmeZaY/6v4iGsdm825XvGCyeZZSFNndnxX/6tHT8qVr6uNr62uzvMDzqSU4AbLgAa70Ap+7sAH9KjcgmOYrr8+H8yZrlAIwAqefu7/nrNkD169/5ZW+W1/FpotP6o0yeyl2EwiKP2JrtJ6H+6/rV7r+124mq03eqzee91ujyXrDzptPpKo761e3d6czA3qLS5O4bebHybK5OlMjwAHrvi759yBfl+dzxRaf6xNytm8qEVJqLS3GvobLHd1+kuaBqh1hxfZnSraSUwDqvf2i97Pd1xOObvd3yiMTuUZ+nynVmo8rE7Myg267R69hOu2j6mjJ6bXi2p6Bta59JWJVDS5my3rtSwnf428HYppSYrqcApkAAH5GZoMEAAIhpwPOEiMa1us/W8/RQXZad1/uNlL42vOhcyOoAG3eDtj81AAATUUlEQVR4nO2di18bV3bH7wYB4uo+CvZqTbRVEpoWEbfFpo0huziwERJSJDWVjbLyA/OwjJfa7rvbYuxd26S1Q90aL46Csf/YnnNHwDCPOyMNRsKd8/lkl4wm0nz1O/ecc8+9MyIktNBCCy200EILLbTQQgvt2IxzyjiVklJOtcbxddGi4SdJKYn2HCEYY0IeOSLFdxbM8zwR9IN8vAF8CZLBVx30oyzvylj+m+dfX/C0//mLYPa/357zssePnuQ5an00ZFKARwj+/MLlU77sz376SSD7OOnDXnRvnHuEGkrq7VYeJpgU/JuLvb2nen0ZEP4kiCFhtw9Dym+fSLg8HlRDTp+Dev7wjpHQgNzYPAJnBT7feMepoUJMJjeeBFAPxh/jF5vQ75g1bAg5mZdUkFaUpFyw583htYGwu/tF8hEkj1ayFGf8Qu93zSIeP+GH3S++5ZAfm5dQgof6jaDtJITTk5Mci5xmdJSES95ciGkboaL8bxhSTakowEUvt8DXLkJEbM5RpXLRk0MIaWOSy6aiDbvQGmC7NATIb2UzGrLnrfG1kbA7udlMTuQtKthODbuTeZ90kklysfk0cRyESd1rHyYnib8yHCbzrqWMMUFqq4YfamR8Qsb8TKYgU7hmwi+fo+nyyLslxKmh++vJDelztugm4aneC/gNsC81Kr5jwsnNR5uT7oibvvike64/pQjFl+3SMHlOdaA2k93O5yQ3/FVu7hOKNhMmN2BKj1fopmLyha/ZonCvZtpN+NiYJclHbqdAOPUyKAu45vLbS/hik2FnjLAnbuckuznxqGw4J5pyphM0hHAJGrq66SPJvUobXUXabsINCbWnlK7jEGMRtjS0fIJddq9n2h1LX5xT/ZjHLqEUD29Qps+JnOV1ya7NhJgPnzyadANUlvdo2XDxTUcTGqYBhHyh11AKezbcb9j3nrpoEJqa+MdAqO3v276DRx6Vm2RfWy/6u4sH9rUivGA64ovwF5//wtl8EU7qzEb42IOQElsovWxzbLF/QPDv/BCWXD5t7JfehMkNzYyIkg0r4TktnwuhaQF07zTDJPFJKB1XU8nYZz4Iu7nQrIduWMJOS4TCLTgJKX0SCulkzJeG3ZQJt1Vh6kSoL2pshKdAw4abUGFoKHnjgIDJsrUp7kT4SamxPE2M/2v8m5BjP7Gd7OSlkrkurcsN6+nnPKYXDoRfEuOiCC6f4ylSsMZlcmFrGzsQfvZZ1eXTqv7GoaYMEw7jsElCZDzIDRfVOV8epApbunDS8Ke/dDO7QzfZibJK2BKh6epVxqfsIOPbz3XS0M7h/ppjPjz400poPxCIsP01jdGo0Yl60glfTD7JPzmnq0tPOCEULNjNfaRBPNmEyUlhrE2c05xzsgkfGxfp3qc58YSbUtUc8sl7S6im+JLIzfeWcIMzDjUcc+/TnHBCSBacSEk1geakEyZfbDzefGyr1I6QsPfy12i6TRrvvqbR92mCEva2f/3QwwITNjDee8L3X8OQMCQMCUPCkDAkDAlDwg4nFBcCAfb2BiZ0aPM2R6jfi8F5QA2B8LMg9snHms2H/gi9dipc8HeLmvu9a5/8ZSD7+MNAljzncSOUJP/1J8Hs6dlg9p9/HMx+67EXg5L+4TMBbHgwHYv1tWoxsM8/Oh/EPv0j5rVPuH+wK4CNdqVbB1SQn3/0QRALCTuB8NNOJ4wEI+wLCUPCkDAkDAlDwpAwJHxHhKOjudFWCYuZWFEdwSlHce9oBg5nOogwlxvO2VlyXWf8aZjJFAEvc5gIYJ3Fbo+Gw8+GHWAGv3c41aZhX/H+GmOsvrZdNEEW64yvdQrh6OhwPxw9JNjomdGuP/xAntq0PURYRNfcraunHklC1lC1xqtlLvl2xxAOviacvHo7ejAWYWDmhl8SyZ9u6QhjMAp3GcMtvowRxmvgsQbiNhxylrAdhIP9Em836n9r4siNbiGgZE8tZx/2UnDROueMs3qdUy74WiaTwZcza3DQJea2gTBXIpwSSfqHTRygIFy65CUtYSxTJoLK+naxWMbnMdFdI4JuE0nLnRJLc13Dz8Zg0HC5NxYxc6CCYKL0/RkNYTFTxN4lhRjTVyzhjrQdhZ2pU87gxc4gHO3KDT4THFXkMBbhyBmAfs2FpJyXvrfG2MMaZnbx0xgKl7mOf9aLgJW5L/PSTUI74fkvvvjCFehXwQnxqgefMaIep/dqUA3CrdccRiYnJUgiozrC4o7CUn/fV7CQGkFYSut9fgnP/803Y3zMzfhXR0EIiD+CW2GsgMACY/A1kYIKUHAQvVhHWMZPW1PRZRvfnEEozZSpW6Zw1PBXY5K5P2Pwq0+PgrArt/VjiUN0kOLVcG64n3Lc58meOZxp8dIyUYR9JsJMDDNF0bV6dSDUPXjmq/NHomEuN/gUcqKEoPp0qx+jDqelZ4MOxaqFcAevrWYiLKKunO+6StgeQoyew0/VUzW4eAlpkBOOgPZi1VHDUhHTfGNIZnYhZK2pOJpxHIp2Qq5biDgaQiXjFiCW8D+mWIJJJxe1EfbtcgEjFhUrrnEYfuVMsQaZZxfnFm/K8+XtWMbqrnbCv/0rjVmDaQDC0WFwVExvcIWc/+gyi7QQZupYD81DKbMtsECIFbe54oyVGb4PYWuehB+c/0CzEGM9uXVCyIvDryhXhEI+dRqDdsJi5j5uy+Zrb8oMEgyiQfnGYn2xGsdb6/EuOLbrSXj+vPWQid6SK1smhMngGahkcPERatTXbx0mjA6EsWIfVKD4XC0+BgkURuF9kHIn01cHJTHByjH4976invALjX1gpW9dQ5wGmzV0mP06eCnYPMfqRzLGS6BWXfJ6BuZOUI2XyttldfNmuSM0hLi59ZTvjUMqXAKNA2FsJw8xBtJnGYq3HSrJm0yMShiF9yHcqFjLD4nYtnGYw3Qh92Ip9xlL+1RO2C2Xd95AMRMrwjvUwFXxBuKSamTgV8bfmIvwtsTSRj5U+tEfJN5oS6WffHiAiWJm+tboGAXSNXwnKL0zkDuI1U3bkg8bNQ12IvirP7zmY8JnTXOYMhaD/AAlXOYAax9WR3gMNc1eXQrSQV269RJnFpT6qEsPGyR9ybC3oTa83M/sEYq1NhNCsh/8cQyCDAyifpxbqAYGMeYWVhldCSFxNJJ9XwYfQEB3sGhThLSsjTTvem4Bgw3nh0YifPVWHTFUREf1mB+aBcz01STFyhv+wM/Z2deQa8fhO58fjmIbg6lGDXm5tXfkJUQbH3N80yAs9t2HCKywipgjeC1TbDgsf6PV8N3P8YfBRfHWTfp6y1DsDIzLl8bz7/V9GrOTYteNGrP9DE6kJIvBbH/bmPibO/xt6bXBzBcm+K9NvTaF6N1rM4to6gFnStjaqseKsTq+SfnQ/KId/dJXEqvm11tmjq6tHzD/M+scwz3ScNURNuwNzDNhJNegKIVqVY3N9hGOdo2+xZ73yy1zfs/lFCLV97zNtkY522/OFMv4KG2K3xxju4cnwm0gBL1eYZAxR02cTG2pdQufsRQzhbmND7Mpjpt5aT2GiURXtb1rQqXYoMPaU87f2pNh2MavH0wEsUO8U4PIs3a/aG1ltIXwTM5ppdD3+iEa7qs0KVWMQb7HwtTeqmnPKveorXbpUp7qn7CInWCzM8Zw6U1BW5r74Tp+SBgShoQhYUgYEoaEIeEJIPz/cEdJZxPmOl9DSvq3hgPZTCyYff5RMPPUkP/LXweyf/23Pw9m//Cngewf/8lLQzox0BPEBv45Fcx+Fk9E4q1betzrsfNyojLUug38+8B/jERbN0UYCWIz4x53OlMyEUTBoZ6Bn48UCoUAjD9LJIIwJsaJV6QJ5qVDQBhAQyQELw1gnl7aAYSRkDAkDAlDwpAwJAwJTy6h5XDKpbI7oYSFkehhoFQBDmXfH8JUNpr9TcF0HP7MRkccVXQiTLePcOiaD8Lsw4XppaXpVZNk2alqtXrXr5cmLqXTEb8TjiMlHLp2hwxpCUGl7MqS2lrIpvb0g4MPCeNTWb8aJmjtUnrGp+8eGWGl0nM1L6UHYTT16ypT224PCAupkewSk2zROSLZCRMRwnl9PJKOJ3xQHhVhZe5mHjeb6gnhrwKjxpOp9gmjI9kbQrKFbMER0ZGQMs5L67f8jMejIBzqqQzd5HgLjRDSQ8NotMpZdYwC0j5hNDvNZSnlqKCzl3LceEM4uz47AzrqhQxMODQ08Hdzy7hHCn/KnHt5aTS6VH3wm2lBzISrwLvq1uhwILzFGf5iHujI52/PpBNxXdAJTDhQubZMJKFqwzDhdzwJoxBQpiU7IBzJVgWruvA5EsZrlAr4SMYYJ7XfA+M7IwSca3mKv0susClJl+fUMS0hajUNY/FAwwXC2OmmCBO353H/J96hAd9rDYJOIuHWzQlACP5ZmcjjR+BdFzAOb845neWU8c2EI9ESo9OugG41zdl1hpshcaMyIaX1+Aw2VY+UEMJLz0ReGrvZpaT5q1b/9EmYnRKM3WiWMB5Pp39fw98QVa1Cyq7fSjuHnJYJMXxCdhBU3Zp35SrkQ1C1BcJFIfm97Ihb4e1CCBE0EU/fvs7UnQm464/Mzzomj+YJh3CkVeauqK36eAcT8M1VBqzjzy9h9h7kmLtGTdpE5W04ZDx9dr2Eo0QIlBIqHRijlgHZCmFPz9yy8cBMyt2Gn2/CG5IJ+CubvbG6MHVvYWUxaynAtXOLBBThl8BZibo/gfLapciREM4RFcPwtzPyExV9QeBBCPUal4vRkdUqxAwqIf4vRFP+CVW+n5m9LvKKEBLybMQSb7xXZhwIr6nYKSgD96z0OI8/n4QrkBgXUtkpzN6QcyRUAvea0BAHJKqWGC/hFXHOZtPNEjqszAzMqV+KJvm5So8t//klhLq0kIpmq8AFtTeAckipgEuFeNAMoeGqYOvGL3TPRiLNe6ntqucwyeMDeCeGKgM6Ab00TJ0Gt1yFMJqqstLU1BRkRkCdbpYQMselGugnXAi9ntBqJRwamDNewu/syu/0EroQwoeyqVShMMZENYtaPjidzaayd6ugpJBNEs7cGi/BjMz4YePmCbm8aQslQxN3YB5BJP7uKLlztXnCG6dXVk4/zEYXQMIVo2OTUi/cgwuVY/4I41iOJtIzUMERindJwz9s3d7xWOceT0omVyq2y65Ufrds/EAnvK/ITwy5Rxv3XluqsAiAS1nzy0vgpsynlyagiomAezL8+VNVOpbG4/akn573ICQ073ThA5U5YMQH8XC8zfLmnFvScCEs4Gx4CtLDjYPIORJ9yLCG9xlpQMPEOsRgyuDLhpQP+T7t0LxJ17g+0oD0jhcOZTfWNVAxUQjSki5f63EUUtMRxubMPXMdUyjhHSWWiZQjYQLj5+w88uFsGCZS87exOeVUe5eoRz6UxD4l2r98nNrD+ys3yU/0OOjoTpi9By55N7UvYCG6BJqK0kMfhOCN4+CeBJ0aH7JyfTbtWJTCfznLqX4dH16dqLgQItAEV8+MwKBL8jfnbCe6ERZGHgpJp7IFo0jD/6myMUalBdC5X5rAclQ9MQwKUr5+Nu02zY+nx7lXPoRQ4yygoWylgoEVizi8BZ1f8Z7j79k0eORiwYikhVR2sQr5nlQXrafZCeOJ61i+EMHwQ+vr6Zl4xK1ZE4dAw732RBGqrVuGKj1X76h5PgwK5dL+CE8zKRb2lytSN6pQsvGlLI7LrHlRw6kTRShlWKJxFV50+TKRZtRrHILpMx5iXLvCkFB6dBPNVhX0IKZkV9RzsaqnVx+srq7ePdRhdfBSrPwZMM5fSujLgXjkkicd2rI9I9oMAqvEG/P9Eq6C+z/YzxSnjb1nHIQRgqzovRQJsfc1PzsTsc4krJau+QHkNtezUqgBiYHVs+dt2EhhBKLmdGFvYp+VRtls/P64J2ECJ4TXz2JrRs8HkZTqt3w1TDqUNQ4GjF7rFvteuQBhZWV/tGXHhPk35FfMi4kOkeYWqa/f0rYQ92xm3mNTWwOQcg8RTYx+CEcKd5kQS6ZkP3Vv6t6BHVqEciIcvzXjb1Fxlnn8uEXDSyVZ9sOHWxG9+6VRzA2/XlxcPFSQHp71ekWaGdWI8gZMzxOvorRBSMm1Ia+pbgPIdsB5DbjgvAzjYA4aGmtOniLGI7chb+qnTiZKf4AOyO3bqZBIe21hN5vPYNNRhDPzzRAK2eJyfvsIoSL1lSn2CDm3LdF3MmEikb7EhHe5ZiaUfK4VFdtFmJ7FaVUThPikMeEzK3YCYfp2iTMfJfeBYQMYHNWe7zqQMBFHF4WJr69caHHUiUqzSaMNhAA43jQdGj5HDmbDJ0DDmXkqmEfvwslwsVDIZkPq8ROmbzMuRUsiNmx5zkj+Hu384ybEk+LxyMzsfMtke1ISXHJCZ+0sQixXI+nZ661Lt2fqifjLV7E/c0yEPu+ZSav1GWzwBiTc2zlzZWKup6I63QMa66kM/DwQIGqY1my3TCubSUdmx+dRPkFZcBWVYas8n79yc8LLrv72dDD7+3FPW5+vlSj36N43b9SXO0ghXZ+P5898SIJ9TOyXB2Y6ZPidcfhHXxrhzyUE+JDGD2FQD8PtX1wcuYahhRZaaKGFFlpooYUWWmga+z8fZPrYa3+jmAAAAABJRU5ErkJggg==', title: 'RV', description: 'Nullam in ante ac dui rutrum aliquam vel in elit. Donec feugiat convallis est, vel volutpat lacus tristique a. Aenean interdum turpis enim, a condimentum ipsum varius non.', leftTime: '2 days left' },
            { image: 'http://www.clker.com/cliparts/S/6/M/N/9/4/letter-g-md.png', title: 'Pellentesque eget orci', description: 'Pellentesque eget orci cursus mi vestibulum faucibus. Ut purus quam, fermentum sit amet tristique congue, tincidunt eu tortor. In sit amet risus diam', leftTime: '1 days left' },
            { image: 'data:image/jpeg;base64,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', title: 'AECC', description: 'Pellentesque eget orci cursus mi vestibulum faucibus. Ut purus quam, fermentum sit amet tristique congue, tincidunt eu tortor. In sit amet risus diam', leftTime: '12 hrs left' },
            { image: 'http://www.freeimages.co.uk/galleries/workplace/education/thumbs/maths_school.jpg', title: 'MAenean lacinia elementum tempor', description: 'Aenean lacinia elementum tempor. Etiam accumsan vel ligula id fermentum. Maecenas tincidunt neque mauris, ac ultrices justo porttitor sed. Sed sed semper arcu, vitae varius libero. Vestibulum tempus dolor eu sollicitudin rutrum.', leftTime: '3 days left' },
            { image: 'https://pbs.twimg.com/profile_images/901023388248027136/SnOngaER_400x400.jpg', title: 'Nullam in ante ac dui rutrum aliquam', description: 'Nullam in ante ac dui rutrum aliquam vel in elit. Donec feugiat convallis est, vel volutpat lacus tristique a. Aenean interdum turpis enim, a condimentum ipsum varius non.', leftTime: '2 days left' },
            { image: 'http://www.clker.com/cliparts/S/6/M/N/9/4/letter-g-md.png', title: 'Pellentesque eget orci cursus mi vestibulum faucibus.', description: 'Pellentesque eget orci cursus mi vestibulum faucibus. Ut purus quam, fermentum sit amet tristique congue, tincidunt eu tortor. In sit amet risus diam', leftTime: '1 days left' },
            { image: 'data:image/jpeg;base64,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', title: 'Pellentesque eget orci cursus mi vestibulum faucibus.', description: 'Pellentesque eget orci cursus mi vestibulum faucibus. Ut purus quam, fermentum sit amet tristique congue, tincidunt eu tortor. In sit amet risus diam', leftTime: '12 hrs left' },
            { image: 'http://www.freeimages.co.uk/galleries/workplace/education/thumbs/maths_school.jpg', title: 'MATHS II', description: 'Aenean lacinia elementum tempor. Etiam accumsan vel ligula id fermentum. Maecenas tincidunt neque mauris, ac ultrices justo porttitor sed. Sed sed semper arcu, vitae varius libero. Vestibulum tempus dolor eu sollicitudin rutrum.', leftTime: '3 days left' },
            { image: 'https://pbs.twimg.com/profile_images/901023388248027136/SnOngaER_400x400.jpg', title: 'Nullam in ante ac dui rutrum aliq', description: 'Nullam in ante ac dui rutrum aliquam vel in elit. Donec feugiat convallis est, vel volutpat lacus tristique a. Aenean interdum turpis enim, a condimentum ipsum varius non.', leftTime: '2 days left' },
            { image: 'http://www.clker.com/cliparts/S/6/M/N/9/4/letter-g-md.png', title: 'Pellentesque eget orci cursus ', description: 'Pellentesque eget orci cursus mi vestibulum faucibus. Ut purus quam, fermentum sit amet tristique congue, tincidunt eu tortor. In sit amet risus diam', leftTime: '1 days left' },
            { image: 'data:image/jpeg;base64,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', title: 'Pellentesque eget orci cursus mi vestibulum faucibus. Ut puru', description: 'Pellentesque eget orci cursus mi vestibulum faucibus. Ut purus quam, fermentum sit amet tristique congue, tincidunt eu tortor. In sit amet risus diam', leftTime: '12 hrs left' },
            { image: 'https://vignette1.wikia.nocookie.net/logopedia/images/0/06/500px-Nebraska_Cornhuskers_logo_svg.png/revision/latest?cb=20130525025401', title: 'Pellentesque eget orci cursus mi vestibulum faucibus. Ut puru', description: 'Cras ut sollicitudin libero. Integer eget dignissim arcu. Curabitur non euismod ante. Vestibulum vitae pharetra felis, at laoreet ipsum. Suspendisse nulla nibh, iaculis ut metus at,', leftTime: '2 hrs left' },
        ];
    }
    AssignmentListPage.prototype.openAssignment = function (a) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__assignment__["a" /* AssignmentPage */], { 'assignment': a, 'period': this.period });
    };
    return AssignmentListPage;
}());
AssignmentListPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'assignmentlist',template:/*ion-inline-start:"/Users/alkagirdhar/Desktop/akash/ramjas/src/pages/paperDetails/assignment/assignmentlist/assignmentlist.html"*/'<ion-header>\n        <ion-navbar color="primary">\n            <button ion-button menuToggle>\n                <ion-icon name="menu"></ion-icon>\n              </button>\n            <ion-title>{{period.paper}} Assignments</ion-title>\n        </ion-navbar>\n    </ion-header>\n    \n    <ion-content class="background1">\n            <ion-list>\n                    <button ion-item *ngFor="let a of assignments" (click)="openAssignment(a)">\n                        <ion-thumbnail item-start>\n                            <img [src]="a.image">\n                        </ion-thumbnail>\n                        <h2>{{a.title}}<ion-badge class="right">{{a.leftTime}} </ion-badge></h2>\n                        <p>{{a.description}} </p>\n                    </button>\n                </ion-list>\n    </ion-content>'/*ion-inline-end:"/Users/alkagirdhar/Desktop/akash/ramjas/src/pages/paperDetails/assignment/assignmentlist/assignmentlist.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], AssignmentListPage);

//# sourceMappingURL=assignmentlist.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AssignmentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__assessment_assessment__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__messages_messages__ = __webpack_require__(102);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AssignmentPage = (function () {
    function AssignmentPage(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.period = this.navParams.get('period');
        this.assignment = this.navParams.get('assignment');
        console.log(this.period);
        console.log(this.assignment);
    }
    AssignmentPage.prototype.openAssessment = function (period) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__assessment_assessment__["a" /* PaperAssessmentPage */], { 'period': period });
    };
    AssignmentPage.prototype.openMessages = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__messages_messages__["a" /* PaperMessagesPage */], { 'period': this.period });
    };
    AssignmentPage.prototype.showUpload = function () {
        var prompt = this.alertCtrl.create({
            title: 'Upload Assignment',
            message: "Select your assignment to submit",
            inputs: [
                {
                    name: 'title',
                    type: 'file',
                    placeholder: 'Select file'
                },
            ],
            buttons: [
                {
                    text: 'Cancel',
                    handler: function (data) {
                        console.log('Canceled');
                    }
                },
                {
                    text: 'Upload',
                    handler: function (data) {
                        console.log('Uploaded');
                    }
                }
            ]
        });
        prompt.present();
    };
    return AssignmentPage;
}());
AssignmentPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'assignment',template:/*ion-inline-start:"/Users/alkagirdhar/Desktop/akash/ramjas/src/pages/paperDetails/assignment/assignment.html"*/'<ion-header>\n    <ion-navbar color="primary">\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n          </button>\n        <ion-title>{{period.paper}} Assignment</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="background1">\n    <ion-list-header no-lines>\n        {{period.paper}}\n        <ion-badge class="right">{{assignment.leftTime}}</ion-badge>\n    </ion-list-header>\n    <ion-item>\n        <b>\n                    Title: {{assignment.title}}\n                </b>\n        <p class="paragraph">\n            Description: {{assignment.description}}  </p>\n    </ion-item>\n    <ion-list-header no-lines>\n        Images\n    </ion-list-header>\n    <div class="image-slider" margin-top>\n        <ion-card>\n            <img src="http://www.expressdissertation.com/blog/wp-content/uploads/2015/08/assignment-writing.jpg">\n        </ion-card>\n        <ion-card>\n            <img src="https://us.123rf.com/450wm/ileezhun/ileezhun1601/ileezhun160100036/51510431-assignment-pink-orange-dots.jpg?ver=6">\n        </ion-card>\n        <ion-card>\n            <img src="http://realdealfrench.com/wp-content/uploads/2015/01/exam-650x401.jpg">\n        </ion-card>\n        <ion-card>\n            <img src="https://thrivingwriter.com/wp-content/uploads/2016/08/1-Assignment-Help-online-writing-service-for-students.jpg">\n        </ion-card>\n        <ion-card>\n            <img src="http://www.expressdissertation.com/blog/wp-content/uploads/2015/08/assignment-writing.jpg">\n        </ion-card>\n        <ion-card>\n            <img src="https://us.123rf.com/450wm/ileezhun/ileezhun1601/ileezhun160100036/51510431-assignment-pink-orange-dots.jpg?ver=6">\n        </ion-card>\n        <ion-card>\n            <img src="http://realdealfrench.com/wp-content/uploads/2015/01/exam-650x401.jpg">\n        </ion-card>\n        <ion-card>\n            <img src="https://thrivingwriter.com/wp-content/uploads/2016/08/1-Assignment-Help-online-writing-service-for-students.jpg">\n        </ion-card>\n    </div>\n    <ion-list>\n        <ion-list-header margin-top>\n            PDFs\n        </ion-list-header>\n        <ion-item>\n            <img src="http://www.freeiconspng.com/uploads/pdf-icon-png-17.png" item-left height="25px" width="25px"> File\n            File1.PDF\n            <img src="http://www.free-icons-download.net/images/download-button-icon-27698.png" item-right height="25px" width="25px">\n        </ion-item>\n        <ion-item>\n                <img src="http://www.freeiconspng.com/uploads/pdf-icon-png-17.png" item-left height="25px" width="25px"> File\n                File2.PDF\n                <img src="http://www.free-icons-download.net/images/download-button-icon-27698.png" item-right height="25px" width="25px">\n            </ion-item>\n\n            <ion-list-header margin-top>\n                Videos\n            </ion-list-header>\n            <div class="video-slider">\n            <iframe width="100%" src="https://www.youtube.com/embed/gbsXFE_Ap84" frameborder="0" allowfullscreen></iframe>\n            <iframe  width="100%" src="https://www.youtube.com/embed/UmKRevigZUg" frameborder="0" allowfullscreen></iframe>        \n        </div>\n\n        <ion-list-header margin-top>\n                Notes\n            </ion-list-header>\n            <ion-item>\n                <b>\n                    Nunc posuere non tortor id feugiat\n                </b>\n                <p class="paragraph">\n                    Praesent ullamcorper viverra arcu et cursus. Morbi pulvinar ac enim eu tincidunt. Aliquam aliquet purus quis orci blandit consectetur at ut lacus. Vestibulum ut orci ac tortor tempus tincidunt. Nunc et dui eros. Aliquam erat volutpat. Suspendisse potenti. Duis massa justo, commodo ut mauris at, vehicula pulvinar purus. Fusce mollis id purus eu hendrerit. Vestibulum vitae aliquam magna. Nam vel auctor nisi.                        \n                </p>\n            </ion-item>\n        </ion-list>\n</ion-content>\n<ion-footer no-padding>\n    <ion-grid no-padding>\n        <ion-row>\n        <ion-col col-4 no-padding>\n            <button ion-item color="primary" no-lines text-center (click)="showUpload()"> \n                <!-- <ion-icon name="arrow-dropup-circle" item-left></ion-icon> -->\n                Upload\n            </button>\n        </ion-col>\n        <ion-col col-4 no-padding no-lines (click)="openMessages()">\n            <button ion-item  color="primary" text-center>\n                <!-- <ion-icon name="chatboxes" item-left></ion-icon> -->\n                Message\n            </button>\n    </ion-col>\n    <ion-col col-4 no-padding no-lines>\n            <button ion-item  color="primary" text-center (click)="openAssessment(period)">\n                <!-- <ion-icon name="bookmark" item-left></ion-icon> -->\n               Result\n            </button>\n    </ion-col>\n</ion-row>\n    </ion-grid>\n</ion-footer>'/*ion-inline-end:"/Users/alkagirdhar/Desktop/akash/ramjas/src/pages/paperDetails/assignment/assignment.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], AssignmentPage);

//# sourceMappingURL=assignment.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaperAssessmentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PaperAssessmentPage = (function () {
    function PaperAssessmentPage(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.period = this.navParams.get('period');
        console.log(this.period);
    }
    PaperAssessmentPage.prototype.showAgreePrompt = function () {
        var prompt = this.alertCtrl.create({
            title: 'Confirm Result',
            message: "Add Comment (if any)",
            inputs: [
                {
                    name: 'description',
                    placeholder: 'Description'
                },
            ],
            buttons: [
                {
                    text: 'Cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Submit',
                    handler: function (data) {
                        console.log('Saved clicked');
                    }
                }
            ]
        });
        prompt.present();
    };
    PaperAssessmentPage.prototype.showDisAgreePrompt = function () {
        var prompt = this.alertCtrl.create({
            title: 'Disagree Result',
            message: "Add title and description",
            inputs: [
                {
                    name: 'title',
                    placeholder: 'Title'
                },
                {
                    name: 'description',
                    placeholder: 'Description'
                },
            ],
            buttons: [
                {
                    text: 'Cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Submit',
                    handler: function (data) {
                        console.log('Saved clicked');
                    }
                }
            ]
        });
        prompt.present();
    };
    return PaperAssessmentPage;
}());
PaperAssessmentPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'assessment',template:/*ion-inline-start:"/Users/alkagirdhar/Desktop/akash/ramjas/src/pages/paperDetails/assessment/assessment.html"*/'<ion-header>\n        <ion-navbar color="primary">\n          <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n          </button>\n          <ion-title>Result</ion-title>\n        </ion-navbar>\n      </ion-header>\n\n<ion-content class="background1">\n    <div class="background2">\n        <img class="center-block" src="http://www.ramjascollege.edu/images/logo.png" padding-top>\n        <h5 text-center margin-bottom class="textWhite">{{period.paper}} Assessment</h5>\n    </div>\n    <ion-card>\n        <ion-list>\n            <ion-item>\n                <ion-icon name="filing"></ion-icon>\n                Total Questions\n                <span item-right><b>100</b></span>\n            </ion-item>\n            <ion-item>\n                <ion-icon name="filing"></ion-icon>\n                Attended Questions\n                <span item-right><b>90</b></span>\n            </ion-item>\n            <ion-item>\n                <ion-icon name="filing"></ion-icon>\n                Correct Answers\n                <span item-right><b>80</b></span>\n            </ion-item>\n            <ion-item>\n                <ion-icon name="filing"></ion-icon>\n                Wrong Submissions\n                <span item-right><b>10</b></span>\n            </ion-item>\n            <ion-item>\n                <ion-icon name="filing"></ion-icon>\n                Total obtained marks\n                <span item-right><b>80</b></span>\n            </ion-item>\n            <ion-item>\n                    <ion-icon name="filing"></ion-icon>\n                    Checked by\n                    <span item-right><b>Mrs. Reema</b></span>\n                </ion-item>\n        </ion-list>\n    </ion-card>\n\n    <ion-grid>\n        <ion-row>\n            <ion-col col-6>\n                <button ion-button block (click)="showAgreePrompt()">\n                    Agree\n                </button>\n            </ion-col>\n            <ion-col col-6 (click)="showDisAgreePrompt()">\n                <button ion-button block>\n                    Disagree\n                </button>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/alkagirdhar/Desktop/akash/ramjas/src/pages/paperDetails/assessment/assessment.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], PaperAssessmentPage);

//# sourceMappingURL=assessment.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = ListPage_1 = (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    return ListPage;
}());
ListPage = ListPage_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-list',template:/*ion-inline-start:"/Users/alkagirdhar/Desktop/akash/ramjas/src/pages/list/list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-end>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/alkagirdhar/Desktop/akash/ramjas/src/pages/list/list.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], ListPage);

var ListPage_1;
//# sourceMappingURL=list.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_shared_service__ = __webpack_require__(103);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginPage = (function () {
    function LoginPage(navCtrl, sharedService, event) {
        this.navCtrl = navCtrl;
        this.sharedService = sharedService;
        this.event = event;
    }
    LoginPage.prototype.login = function () {
        this.event.publish("user:login", { category: this.category, name: this.name });
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'login',template:/*ion-inline-start:"/Users/alkagirdhar/Desktop/akash/ramjas/src/pages/login/login.html"*/'<ion-content padding class="background-image">\n  <img class="center-block" src="http://www.ramjascollege.edu/images/logo.png" margin-top>\n  <div text-center margin-top>\n    <h1 class="textWhite">Login</h1>\n  </div>\n<!-- \n  <ion-badge class="badge-full shadow1" color="primary" text-center margin-top>Login using Pre accounts</ion-badge>\n  <div padding>\n  <button  ion-item block color="facebook" no-lines>\n      <ion-icon item-left name="logo-facebook" ></ion-icon>\n      Facebook\n    </button>\n    <button margin-top ion-item color="google" no-lines>\n        <ion-icon item-left name="logo-google" ></ion-icon>\n        Google\n      </button>\n    </div> -->\n\n    <!-- <ion-badge class="badge-full shadow1" color="primary" text-center margin-bottom margin-top>Sign in with e-mail</ion-badge> -->\n  <ion-list margin-top>\n      <ion-item>\n          <ion-icon name="options" item-left color="color9"></ion-icon>\n          <ion-label>Sign in as</ion-label>\n          <ion-select [(ngModel)]="category">\n            <ion-option value="student">Students</ion-option>\n            <ion-option value="faculty">Faculty</ion-option>\n            <ion-option value="hod">Head of Department</ion-option>\n            <ion-option value="principal">Pricipal/Manager</ion-option>\n            <ion-option value="admin">Admin</ion-option>\n          </ion-select>\n        </ion-item>    \n    <ion-item>\n      <ion-icon name="person" item-left color="color2"></ion-icon>\n      <ion-input type="text" [(ngModel)]="name" placeholder="Username"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-icon name="lock" item-left color="color1"></ion-icon>\n      <ion-input type="password" placeholder="Password"></ion-input>\n    </ion-item>\n  </ion-list>\n  <button block ion-button color="" text-center (click)="login()">Submit</button>\n\n</ion-content>'/*ion-inline-end:"/Users/alkagirdhar/Desktop/akash/ramjas/src/pages/login/login.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_shared_service__["a" /* SharedService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProfilePage = (function () {
    function ProfilePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    return ProfilePage;
}());
ProfilePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'profile',template:/*ion-inline-start:"/Users/alkagirdhar/Desktop/akash/ramjas/src/pages/profile/profile.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Profile</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="background1">\n  <div class="profileHeader">\n    <div class="profileText textWhite">\n        <span class="name">Akash</span>\n        <br>\n        <span class="course">B.Sc (Hons) Mathematics</span>\n    </div>\n    <img class="profilePic" src="https://irua.ku.edu/sites/irua.drupal.ku.edu/files/images/general/balaji.jpg">\n  </div>\n  <button ion-button color="color4" icon-only class="profile-edit" margin-right>\n      <ion-icon margin name="create"></ion-icon>\n  </button>\n  <ion-list>\n    <ion-item>\n      <ion-icon name="finger-print" item-left color="color1"></ion-icon>\n      Roll Number\n      <span item-right>\n        <b>1100234</b>\n      </span>\n    </ion-item>\n    <ion-item>\n        <ion-icon name="calendar" item-left color="color1"></ion-icon>\n        Date of Birth\n        <span item-right>\n          <b>14/06/1992</b>\n        </span>\n      </ion-item>\n      <ion-item>\n          <ion-icon name="barcode" item-left color="color1"></ion-icon>\n          Year\n          <span item-right>\n            <b>2nd</b>\n          </span>\n        </ion-item>   \n        <ion-item>\n            <ion-icon name="call" item-left color="color1"></ion-icon>\n            Contact Number\n            <span item-right>\n              <b>9630397544</b>\n            </span>\n          </ion-item>\n          <ion-item>\n              <ion-icon name="people" item-left color="color1"></ion-icon>\n              Groups\n              <span item-right>\n                <b>Technical Committee , <br>Cultural Committee, <br>Dance Club</b>\n              </span>\n            </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/alkagirdhar/Desktop/akash/ramjas/src/pages/profile/profile.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], ProfilePage);

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DueAssignmentsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__viewAssignment_viewAssignments__ = __webpack_require__(206);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DueAssignmentsPage = (function () {
    function DueAssignmentsPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.dueAssignments = [
            { image: 'http://www.freeimages.co.uk/galleries/workplace/education/thumbs/maths_school.jpg', subject: 'MATHS II', description: 'Aenean lacinia elementum tempor. Etiam accumsan vel ligula id fermentum. Maecenas tincidunt neque mauris, ac ultrices justo porttitor sed. Sed sed semper arcu, vitae varius libero. Vestibulum tempus dolor eu sollicitudin rutrum.', leftTime: '3 days left', assessed: null, agreed: null, disagree: null },
            { image: 'https://pbs.twimg.com/profile_images/901023388248027136/SnOngaER_400x400.jpg', subject: 'RV', description: 'Nullam in ante ac dui rutrum aliquam vel in elit. Donec feugiat convallis est, vel volutpat lacus tristique a. Aenean interdum turpis enim, a condimentum ipsum varius non.', leftTime: '2 days left', assessed: null, agreed: null, disagree: null },
            { image: 'http://www.clker.com/cliparts/S/6/M/N/9/4/letter-g-md.png', subject: 'GE', description: 'Pellentesque eget orci cursus mi vestibulum faucibus. Ut purus quam, fermentum sit amet tristique congue, tincidunt eu tortor. In sit amet risus diam', leftTime: null, assessed: null, agreed: '1', disagree: null },
            { image: 'data:image/jpeg;base64,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', subject: 'AECC', description: 'Pellentesque eget orci cursus mi vestibulum faucibus. Ut purus quam, fermentum sit amet tristique congue, tincidunt eu tortor. In sit amet risus diam', leftTime: null, assessed: null, agreed: null, disagree: '1' },
            { image: 'http://www.freeimages.co.uk/galleries/workplace/education/thumbs/maths_school.jpg', subject: 'MATHS II', description: 'Aenean lacinia elementum tempor. Etiam accumsan vel ligula id fermentum. Maecenas tincidunt neque mauris, ac ultrices justo porttitor sed. Sed sed semper arcu, vitae varius libero. Vestibulum tempus dolor eu sollicitudin rutrum.', leftTime: null, assessed: "1", agreed: null, disagree: null },
            { image: 'https://pbs.twimg.com/profile_images/901023388248027136/SnOngaER_400x400.jpg', subject: 'RV', description: 'Nullam in ante ac dui rutrum aliquam vel in elit. Donec feugiat convallis est, vel volutpat lacus tristique a. Aenean interdum turpis enim, a condimentum ipsum varius non.', leftTime: '2 days left', assessed: null, agreed: null, disagree: null },
            { image: 'http://www.clker.com/cliparts/S/6/M/N/9/4/letter-g-md.png', subject: 'GE', description: 'Pellentesque eget orci cursus mi vestibulum faucibus. Ut purus quam, fermentum sit amet tristique congue, tincidunt eu tortor. In sit amet risus diam', leftTime: null, assessed: null, agreed: '1', disagree: null },
            { image: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAHBhUIEBETFRUWFxkbFxcXFRYYFhwfGB0WFhoZGB0YHSggGBolHRUWJDMhJSkrLi86GiAzODMtNygtLisBCgoKDg0OGxAQGi0lICYvMC4vLS0tLS0tLTAtLS0wLS81LS0tLS0tLS03Ly4rLS0tLS0tLS0vLS0tLS0tLSstLf/AABEIAPMAzwMBEQACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABwgBBQYEAgP/xAA/EAACAQICBgcGBAQFBQAAAAAAAQIDEQQFBgcSISKBFTFRYXGCkRMUQXKSoiMyVKEXQpPRCFJio9JDg7LD0//EABsBAQACAwEBAAAAAAAAAAAAAAAFBgEDBAIH/8QAMhEBAAECAgkCBQUBAQEBAAAAAAECAwQRBRITITFBUYGhkeEGYXHB0RQWQrHwU1IyIv/aAAwDAQACEQMRAD8AnEAAAAAAAAAAAcfrRzT3DRp4aLtKtJQ79lcU34WSj5iY0Jh9pidaeFO/vy/PZw6Qu6lmY5zuQwXRXAAAAATtoDmXSei1Ko3eUF7OW+7vDcr97jsvmUTStjY4qqI4Tvjv75ws+DubSzTPb0dCRzqAAAAAAAAAAAAAAAAAAAAAQvrTzT37SX3VPhoRUe7alaU3/wCK8pc9B4fZ4bXnjVv7cI+890BpK7rXdXo465Mo8uAuAuAuBI2p3MtjF1srb3SSqR8Y2jLm04fSVz4gsZ00XY5bp/uPv6pfRdz/AOqO6UyrJgAAAAAAAAAAAAAAAAAAADy5njY5bl1TGz/LThKT77K9l3vqNtm1N25Tbp4zOTzXVFNM1TyVyxOIlisTLETd5Tk5Sfa5Ntv1Z9FooiimKaeEbvRVa6pqqmqeb87np5LgLgLgLgbXRbM+iNIaONbtGM0pfLLhl6Rk3yOXHWNvh67fOY3fWN8N+FubO7FSwx89WcAAAAAAAAAAAAAAAAAAADgdb+ae7ZJDLk99aV38tO0n4cTh6MntAYfXvTdn+MeZ9s0fpG5q29XqiC5bkEXAXAXAXAXAAWA0HzPpbRejiW7yUdifbtQ4W342T5lB0lY2OJrpjhnnH0nf7LNhrm0tRU3pwt4AAAAAAAAAAAAAAAAAAII1kZr0ppXUs7xpfhR8l9r73L0RedEYfY4WnPjVv9eHjJX8dc17sx03OYuSbjLgLgLgLgLgLgSbqZzO06+VN9dqsV6Qn/6/3K18Q2N1F6PpP9x90voy5xo7pRKwlQAAAAAAAAAAAAAAAAA1ukmZrJsirZg7XhBuN/jJ7oLnJxR0YSxN+9Tb6z45+Gu7XqUTV0VxlNyltNtt9bfW+9n0OIy3QrM75zLmWC4C4Zfcqcoq7jJeKZ5iqJ5szRMcYfFz08lwFwN1oXmnROk9DFN2jt7M9+7ZnwNvuV78ji0hY22Gro55Zx9Y3+zpwtzUuxKwxQFiAAAAAAAAAAAAAAAAACM9c+bezw1HKIvfJ+0nv+Ebxgn3NuT8hY/h/D51VXp5bo+/++aN0jcypiiOaKblpRBcBcDotX+WdLaWUaTV4wftJ+FPer9zlsrmR+lL+xwtU853R39s3Vg7evdj5b0551gFmmUVcA/+pCUb9ja3Pk7PkUnD3ps3abkcpiU5XTr0zT1VrnF05uElZp2afWmtzR9FiYmM4VqYynJi5lguBh71YCxWh2adMaM0Ma3eTglP5ocEvVxb5nz/AB9jYYiujlnu+k74WSxXr24qbk420AAAAAAAAAAAAAAAAV404zbpnSitik7xUtiHZsw4U13Npy8xftHYfYYamjnxn6z+OCAxVzXuzLRXO5zFwFwJZ1LZXsYOtmslvnJU4eEeKTXc20vIVb4gv5102o5b578P980vo+3lTNfVJZXEigDWPlvRel9aCVo1Gqsf+5vl96n6F70Tf2uFpnnG709skDjLepdn573NXJFylwFwJV1K5ptUa+Ut9TVWC7naE+Sah9RV/iGxvovR9J/uPv6JbR1z/wDM0JPK2kgAAAAAAAAAAAAAADQ6cZt0LovWxadp7OzDt2p8Ka8L7XI7dHYfb4mmieHGfpH54NN+5qW5qV2W5WL+rzNwFwFwzELI6LZX0No9Ry+2+EFtfNLin9zZ89xt/b36rnWd305eFitUalEUtqcrYjHXXlu1haGaJflk6ct3wktqN+5OMvqLH8PXsqq7U898duP++SO0hRnTFSJ7lpRJcBcDoNAc06J0soV27RlL2c/Cpw7+5ScZeU4NJ2Ntha6ecb47f7J04SvUux6LDFCTwAAAAAAAAAAAAAABEuuvNtvFUcni90V7Wfi7whzS2/qRafh/D5U1Xp57o/uft6IzSFzhR3RjcsaMLgLgdHq9yvpbS2jRavGD9pPwp8Sv3OWwuZH6Uv7HC1TzndHf2zl04S3r3Y+W9YUoadANJprlnS+i1fBpXk4OUF/qhxxXNxS5nZo+/scTRXyz3/Sd0tV6jXtzSrkndH0BXi4C4C4FktFc06Z0doZhe7nBbXzR4Z/cpHz3G2Nhfrt9J3fTl4WK1Xr0RU2xytgAAAAAAAAAAAAGJSUY7T3JDiK06S5q86z+tmPwnNuPyrhhz2VE+h4SxsLFNvpHnn5QF+vXuTU1lzpaS4C4Et6ksr2MJWzaS3zapw3fCPFJrubcV5CrfEF/OqmzHLfPfh/vmlcBbypmpJ5XEgAAK26X5b0PpNXwKVoxm3FfDZnxwS8IyS5H0HA3tth6K+eW/wCsbpQOIt6lyYae51tBcBcCXdSeae1wFbKpPfCSqR8J7pJdylG/nKr8QWMq6bsc909v94S2Arzpmnok0rrvAAAAAAAAAAAAA5PWdm/ROiFWztOr+FHz32vC0FPf4EnojD7bFU58Kd89uHnJz4m5qW5V/uXlCFwFwFwRCy2ieVdC6OUMvtvhBbXzS4p/c2fPcbf29+q51nd9OXhP2qNSiKW2OVsAAEP67ss9lmNDNEt04unLsvB7UebUpfSWr4fvZ0V2p5TnHfj/AL5o3H0b4qRncsSOLgLgdPq2zXorTCjNu0aj9lLwqWUfvUHyI7StjbYWqI4xvjt7ZunCV6tyPmsKURNAAAAAAAAAAAAAQrrpzf3rPoZZF8NCF5b/AOepZ2fhBQ+plu0Dh9SzN2f5T4j3z9EZjq86opR3cnnAXAXA6TV5lfS+l9Cg1eMJe0n4U+JX7nLYXmI/Sl/Y4WqrnO6O/tnLowtGtcj5LFFDTQAAAcnrRyzpLQyq0uKlarHu2PzfY5knoi9ssVT0nd68POTRiaNa3Kvty8oQuAuBlScXtJtNdTXWu9GN08WY3Tms3o3maznIaOYq34kE3bqUuqa5SUlyPnmKs7C9Vb6T45J63Xr0xU2RzvYAAAAAAAAAAflisRHCYWWJm7RhFyk+xRTbfoj1RRNdUU08Z3MTOUZqv5tmE81zOpmE/wA1ScpNXva7uo+CVlyPotm1Fq3TbjlGSCuVa9U1PJc2vBcBcCX9R+VbGEr5vJb5yVOG74R4pNdzbivIVb4gv51U2Y5b578P980ngqMqZqSiVx3AAAB81aarUnSkrppprtT3NGYmYnOBV3N8BLKs1q5fK96U5Qu/iotpPmrPmfRrF2Ltum5HOM0Fco1a5h47m1rLgLgTNqRzX2+T1crk99Ke1H5al9y8JRk/Mip/EFjVu03Y5xl3j2y9Ergq86NXokor7sAAAAAAAAAADhdcOcdHaKPCRdp4iSh37K4pvwslHzkxoTD7TE688Kd/fl+ezmxVerb+qBy6IgAALhmIWb0RynoTRuhl1rOEFt/PLin90pHz3G39vfqudZ3fTl4TlunVpiG3OV7AAAABBmufLPctKY45LdXpp+anaEvt9l6lx0Ff18PNE/xnxO+PujMbRlVrdXAE24gAB12q3Nei9M6SbtGtelLz2cOe3GC5si9MWNrhasuNO/04+M3VhKtW5l1WEKOlgAAAAAAAAAAgTXDnHSOlrwkXwYeKguzalac2vWMfIXTQmH2eG1541Tn24R957ozGV515dHDXJhyFwFwOj1e5as00voUpW2IS9pO7SVqfElv605bK5nBpO9NrDVzHGd0d/bNvw1GtchYz3mm/54/UiialXRL5s+3h/mj6oas9Bn2sX/MvVGNWRn2ke1eoykZ2l2oxkM3A4HXPlfvuifviXFQqRl1XezLgkvC8ot/KTWgr+pidSeFUZd43x+O7mxVGtbz6IJuXJFFwFwPqnUlRqKrB2lFpxa601vT5MxMRMZTwZpnKc1pMjzGOb5NRzGO5VacZW7G0m4+Kd1yPnWIszZu1W55Tkm6ataIl7jS9AAAAAAAAHjzjMIZVlVXMJ/lpQlN9+ym7LvfVzNtm1N25Tbp4zOTFU5Rmq1icRLF4mWJm7znKUpPtlJuUn6tn0WimKKYpp4Rujshap1pmX53PTyXAXAw94GNldi9BnLOc9TYXYvQZyZz1Nhdi9DOcmc9WPZx7F6IZya09T2cexeiGtJrT1PZR/wAq9ENaWdarqKnGLukvRDOWJqmeb7uYYLgLgLgTdqQzb3rR6plje+hO6X+ireS+9VP2Kjp+xq34uR/KPMe2STwledGXRI5AuoAAAAAAAAjbXhnHuuQU8qi+KvO8vkpWly43T9GT2gLGtem7P8Y8z7ZubFVZUZdUI3LcjC4C4C4C4C4C4C4C4C4C4C4C4C4C4C4Haaos26N0zhRb4a8ZU3v3XfFB+O1HZXzkTpqxtcLMxxp3/n89nVhasq8uqwZSUkAAAAAAAAVz1pZz0xplVad4UfwY+S+2/rc9/YkXnROH2OFpz41b578PGSMxNetXl0ckSTnAAAAAAAAAAAAAAAAAD9MPXlhcRHEwdpwkpRfY4tSi/VIxVTFVM01cJ3er1TOrOa1WU4+OaZXSzCH5asIzXmSdn3q585vWptXKqJ4xOXomInOM3rNbIAAAAAGp0rzdZDo5XzN2vTg3FPqcnwwXOTiuZ04Sxt79NvrPjn4ea6tWJlVpycntNtt9be9t/FvtZ9C+iInfOYZAAAAAAAAAAAAAAAAAAATvqRzf33RaWXt8WHqNLfv2Kl5xf1e0XlKdp6xqYiLkcKo8xun7T3SWHqzoy6JEIRvAAAAAAibXznPs8NQySL3zbq1Ff4RvGCa7HJyfkLH8P4fOqq9PLdH3/wB83LiqsoyQ3ctDhLgLgG7K5kyS9kep+jjsmo4utiK8Kk6cZShFQtFyW1s7433XsVm/p6ui7VTRTExE5RO/8u6nDU5b3t/grhf1eI9Kf/E1fuG7/wCKfP5Z/S0H8FMN+rr/AE0/7D9w3f8AxHk/S0sfwUw36yt9MP7D9w3f/EeT9LSx/BTD/rK30QM/uG5/4j1lj9LS+XqUofrKv9OH9x+4bn/OPWT9LT1YepOj+tqf04/3H7hr/wCcesn6Wnqw9SdL9bP+lH/kZ/cVf/OPU/S09Xy9SdP9dP8Aor/mZ/cVX/Pz7MfpI6vl6ko/r5f0F/8AQz+4p/5+fY/SR1RVnGAllObVcun+alUlBu1r7LaUrfBNWfMsVi7F23TcjnGbkrp1ZyeO5seS4C4Hd6mM36P0xWEb4cRCUO7ajxwb+mUfORGm7G0w2tzpnPtwn7T2dOGqyqyWCKW7wAAAAAKw6f5107pdXxid4KWxT7NmnwprubUpeYv2jsPsMNTRz4z9Z/HDsjb1WtW5652tRcBcDb6I5V05pNh8ttdTqLa+SN5z+yMjmxl7YWK7nSN314R5bLVOtXELULcrHz1JgAAAAAAAAABAmvDKvcdLI49LhxFNN/PTtCX2+y/cuOgr+vh5on+M+J3/AN5uHE05Tmju5NOYuAuB+2CxcsBjYYyn+enOM4+MGpL90ea6IrpmirhMZer1TOUxK2OX4yGYYCnjabvCpCM4vuklJfsz5zcom3XNFXGJy9EpE5xm9B4ZAAADnNYeddA6IV8ZF2m47FPt26nBFrwu5eVndo7D7fE00Tw4z9I3+zxcq1aZlWFblYvqMLgLgLgSrqEyn22aV84kt1OCpw7Nqb2pc1GMfrK98QX8rdNqOc5z24ff0deGp4ymwqrrAAAAAAAAAACPtduVe/aH++pcWHqRn1b9mX4cl4cUZP5SZ0He1MTqTwqjLvxj8d2m/TnQr/cuSPLgLgLgWC1KZv0hoesG3xYebh37L44Pw4nHyFN05Y2eJ1o4VRn34T+e6QsVZ0O/IZuAAACFtfmde0xtDJIvdBOrPxleEOaSn9SLR8P4fKmq9PPdH9z9nLiKuSJbljchcBcBcMrK6qso6H0IoQatOqvbT8am+N+9Q2FyKNpa/tsVVPKN0dvfNIWqdWmIdcRrYAAAAAAAAAAHlzXAwzPLKuAn+WrCUJeEk4vnvNlq5NuuK44xOfoxMZxkqXiqE8HiZ4WorThKUZLvi3F/umfRaKorpiqnhO/1RtUZTk/K56eS4C4Eiaj849x0teXt8OIpteenecft9ouaIXTtjXw8VxxpnxO6fs6cPVlOSfynOwAAYlJQi5N2S62OIqhpVnDz7SOvmnwqVG4/KrRgn37EYn0PCWNhYpt9I88/KPuVa1WbVXOhrLgLgbPRrK3nmkFDK1f8WpFSt1qPXN8oqT5GjFXtjZqudI88vL3bpzqiFsYRUIqKVktyR87mc0iyAAAAAAAAAAAAFcdcWU9F6cVKiVo14xqx3brvhn4vag5eZF20Nf2uFiOdO78fjs4r9OVWbiLkq0FwFwPVlWYSyvM6WYQ/NSnGaV7X2WnbwdrczXdtRdt1W54TGT3ROU5ra4TEwxmEhiqbvCcYyi11NSSafo0fOq6JoqmmrjG5Iv2PIAcZrbzroXQmrsu0634MPPfbfdaCnv7bEnojD7bFU58I3z24ecmu5VlSrXcvDhLgLgLgSjqEyj3rP62bSW6jDZju/nq/FPtUYyXnRAafv6tqm1HOc+0e/wDTosU7807FTdQAAAAAAAAAAAAEW6/Mp94yGjmsVvo1NmXy1bK788YLzMn9AX9W9Vbn+UeY9s2m/TnTmgq5bHGXAXAXAsZqYzfpPQmFCTvLDylSd+xcUOSjJR8pStNWNnipmOFW/wDPne7rVWdLuyJbACBdfOd++aRU8pi+HDwvL56lnv8ACCh9TLdoHD6lmbs/ynxHv/Tmv1b8kY3J1zlwFwFwLJansn6J0HpTatKu3Wl4Tsof7cYerKRpi/tcVV0p3enHzm7bVOVLtiLbAAAAAAAAAAAAANTpXlKz3RuvljSvUpyUb9Skt8HykovkdGFvbG9Tc6T45sVRnGSprunZqz+KPoaPLgLgLgSZqGzj3PSaplknuxFO6+eleS+x1PREFp6xr2IuR/GfE++TfYnfknwqLqfjjMTDBYSeKqO0IRlKT7FFOTfomeqKZrqimOM7hUfOcynm+bVcyqfmqzlNq97bTuoruSsuR9Es2otW6bccoycNU5zm8dza8lwFwPdkOWyznOqOWRverUjC6+Cb4pcld8jViL0WbVVyeUZvVMZzktzRpRoUY0Yq0YpJJdSS3JHzqZmZzl3PswAAAAAAAAAAAAAAKvazsp6G03xFBK0Zy9rDstV43buUnJeUvmi7+1wtE843T29nHdpyqctc72suAuB78gzSWTZ3RzON70qkZWXxSfFHnG65mnEWYvWqrc84yeqZynNbijVjXoqrF3jJJprqae9M+dzExOUu5wGu7O+i9Dngou08TJQW/fsriqPwslF/OS+hMPtMTrTwp39+X57Nd2cqVdblzchcBcBcCTdQuUe+6UVMzkuHD093z1bxX2qp+xB6ev6liLcfynxHvk3WY35p/Kg6QAAAAAAAAAAAAAACG/8AEJlN6WGzpLqbozfx33qQ5K1T1LJ8P3t9dqfrH9T9mi9HNC9yzucuAuAuBZbU9nHS+g1KLd50L0ZeS2x/tyh6Mo+l7GyxVXSrf68fObstznSinXfnfSemTwUXeGGioLs25cc2u/fGL+QsGhMPs8Przxq39uX57tN2c5R7cmGsuAuAuBZDUpk/RehEMRJWliJSqu/Z+SHJxipeYpWmr+0xUxHCnd+fw6bcZUu+IlsAAAAAAAAAAAAAAAOa1j5R03oXicGleShtwt17VP8AESXjs7PM7dHX9jiaK+WeU/SdzzXGcKrXL85C4C4C4Eq/4f8AOfds+rZRJ7q0NqN3/NTvuS7XGUm/kRAafsa1qm7HKcu0/wC8ttqd+SM83rSxGbVq83eUqk3J9rcm2/Vk3Zpim3TEdIeJ4vIbGAAAAuNldGOHyylQglGMacIxS6klFJJckfN7lU1VzM8c3XD1HhkAAAAAAAAAAAAAAAAU8zylHD51XoQVoxq1FFdiUmkvQ+jWKpqtUzPSP6ck8XiNrAAA2ujGLqYHPKeJpScZx2rNdavGSf7NnPi6Ka7U01Ru92ad0v/Z', subject: 'AECC', description: 'Pellentesque eget orci cursus mi vestibulum faucibus. Ut purus quam, fermentum sit amet tristique congue, tincidunt eu tortor. In sit amet risus diam', leftTime: '12 hrs left', assessed: null, agreed: null, disagree: null },
            { image: 'http://www.freeimages.co.uk/galleries/workplace/education/thumbs/maths_school.jpg', subject: 'MATHS II', description: 'Aenean lacinia elementum tempor. Etiam accumsan vel ligula id fermentum. Maecenas tincidunt neque mauris, ac ultrices justo porttitor sed. Sed sed semper arcu, vitae varius libero. Vestibulum tempus dolor eu sollicitudin rutrum.', leftTime: '3 days left', assessed: null, agreed: null, disagree: null },
            { image: 'https://pbs.twimg.com/profile_images/901023388248027136/SnOngaER_400x400.jpg', subject: 'RV', description: 'Nullam in ante ac dui rutrum aliquam vel in elit. Donec feugiat convallis est, vel volutpat lacus tristique a. Aenean interdum turpis enim, a condimentum ipsum varius non.', leftTime: null, assessed: '1', agreed: null, disagree: null },
            { image: 'http://www.clker.com/cliparts/S/6/M/N/9/4/letter-g-md.png', subject: 'GE', description: 'Pellentesque eget orci cursus mi vestibulum faucibus. Ut purus quam, fermentum sit amet tristique congue, tincidunt eu tortor. In sit amet risus diam', leftTime: null, assessed: null, agreed: null, disagree: '1' },
            { image: 'data:image/jpeg;base64,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', subject: 'AECC', description: 'Pellentesque eget orci cursus mi vestibulum faucibus. Ut purus quam, fermentum sit amet tristique congue, tincidunt eu tortor. In sit amet risus diam', leftTime: '12 hrs left', assessed: null, agreed: null, disagree: null },
            { image: 'https://vignette1.wikia.nocookie.net/logopedia/images/0/06/500px-Nebraska_Cornhuskers_logo_svg.png/revision/latest?cb=20130525025401', subject: 'NA', description: 'Cras ut sollicitudin libero. Integer eget dignissim arcu. Curabitur non euismod ante. Vestibulum vitae pharetra felis, at laoreet ipsum. Suspendisse nulla nibh, iaculis ut metus at,', leftTime: '2 hrs left', assessed: null, agreed: null, disagree: null },
        ];
    }
    DueAssignmentsPage.prototype.openAssignment = function (a) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__viewAssignment_viewAssignments__["a" /* ViewAssignmentPage */], { 'assignment': a });
    };
    return DueAssignmentsPage;
}());
DueAssignmentsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'dueAssignments',template:/*ion-inline-start:"/Users/alkagirdhar/Desktop/akash/ramjas/src/pages/assignments/dueAssignments/dueAssignments.html"*/'<ion-header>\n    <ion-navbar color="primary">\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n          </button>\n        <ion-title>Due Assignments</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="background1">\n<ion-list>\n    <button ion-item *ngFor="let a of dueAssignments" (click)="openAssignment(a)">\n        <ion-thumbnail item-start>\n            <img [src]="a.image">\n        </ion-thumbnail>\n        <h2>{{a.subject}}\n            <ion-badge class="right" *ngIf="a.leftTime" color="color4">{{a.leftTime}} </ion-badge>\n            <ion-badge class="right" *ngIf="a.assessed" color="color3">Assessed</ion-badge>\n            <ion-badge class="right" *ngIf="a.agreed" color="color2">Agreed</ion-badge>\n            <ion-badge class="right" *ngIf="a.disagree" color="color1">Disagreed</ion-badge>\n        </h2>\n        <p>{{a.description}} </p>\n    </button>\n</ion-list>\n</ion-content>'/*ion-inline-end:"/Users/alkagirdhar/Desktop/akash/ramjas/src/pages/assignments/dueAssignments/dueAssignments.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
], DueAssignmentsPage);

//# sourceMappingURL=dueAssignments.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewAssignmentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ViewAssignmentPage = (function () {
    function ViewAssignmentPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.assignment = navParams.get('assignment');
    }
    return ViewAssignmentPage;
}());
ViewAssignmentPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'viewAssignments',template:/*ion-inline-start:"/Users/alkagirdhar/Desktop/akash/ramjas/src/pages/assignments/viewAssignment/viewAssignments.html"*/'<ion-header>\n        <ion-navbar color="primary">\n            <button ion-button menuToggle>\n                <ion-icon name="menu"></ion-icon>\n              </button>\n            <ion-title>Due Assignments</ion-title>\n        </ion-navbar>\n    </ion-header>\n    \n    <ion-content class="background1">\n        <ion-card>\n            <img [src]="assignment.image">\n            <ion-card-header>\n                    <h2>{{ assignment.subject }} <ion-badge class="right">{{ assignment.leftTime }}</ion-badge></h2>\n            </ion-card-header>\n            <ion-card-content>\n                    <p>\n                        {{assignment.description}}\n                    </p>\n            </ion-card-content>\n        </ion-card>\n    </ion-content>'/*ion-inline-end:"/Users/alkagirdhar/Desktop/akash/ramjas/src/pages/assignments/viewAssignment/viewAssignments.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], ViewAssignmentPage);

//# sourceMappingURL=viewAssignments.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AssessmentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__semester_semesterAssessment__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__yearlyAssessment_yearlyAssessment__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__overallAssessment_overallAssessment__ = __webpack_require__(210);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AssessmentPage = (function () {
    function AssessmentPage() {
        this.tab1 = __WEBPACK_IMPORTED_MODULE_1__semester_semesterAssessment__["a" /* SemesterAssessmentPage */];
        this.tab2 = __WEBPACK_IMPORTED_MODULE_2__yearlyAssessment_yearlyAssessment__["a" /* YearlyAssessmentPage */];
        this.tab3 = __WEBPACK_IMPORTED_MODULE_3__overallAssessment_overallAssessment__["a" /* OverallAssessmentPage */];
    }
    return AssessmentPage;
}());
AssessmentPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        template: "\n    <ion-tabs color=\"primary\">\n      <ion-tab tabIcon=\"paper\" tabText=\"Semester\" [root]=\"tab1\"></ion-tab>\n      <ion-tab tabIcon=\"photos\"  tabText=\"Yearly\" [root]=\"tab2\"></ion-tab>\n      <ion-tab tabIcon=\"school\" tabText=\"Overall\" [root]=\"tab3\"></ion-tab>\n    </ion-tabs>"
    }),
    __metadata("design:paramtypes", [])
], AssessmentPage);

//# sourceMappingURL=assessment.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SemesterAssessmentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SemesterAssessmentPage = (function () {
    function SemesterAssessmentPage(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.dayArray = ['I', 'II', 'III', 'IV', 'V', 'VI'];
        this.semester3c = ['I', 'II', 'III', 'IV', 'V', 'VI'];
        this.pet = "TimeTable";
        this.days = ['I', 'II', 'III', 'IV', 'V', 'VI'];
        this.results = [
            { paper: 'Maths', paperCode: '1293', totalQuestion: '100', attended: '90', correct: '80', incorrect: '10', obtained: '80', checkedBy: 'Miss Reema' },
            { paper: 'GE', paperCode: '1194', totalQuestion: '100', attended: '90', correct: '80', incorrect: '10', obtained: '80', checkedBy: 'Miss Seema' },
            { paper: 'RV', paperCode: '1794', totalQuestion: '100', attended: '90', correct: '80', incorrect: '10', obtained: '80', checkedBy: 'Miss Renu' },
            { paper: 'ACEE', paperCode: '1294', totalQuestion: '100', attended: '90', correct: '80', incorrect: '10', obtained: '80', checkedBy: 'Miss Tina' },
            { paper: 'GC', paperCode: '1994', totalQuestion: '100', attended: '90', correct: '80', incorrect: '10', obtained: '80', checkedBy: 'Miss Taniya' },
        ];
    }
    SemesterAssessmentPage.prototype.showAgreePrompt = function () {
        var prompt = this.alertCtrl.create({
            title: 'Confirm Result',
            message: "Add Comment (if any)",
            inputs: [
                {
                    name: 'description',
                    placeholder: 'Description'
                },
            ],
            buttons: [
                {
                    text: 'Cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Submit',
                    handler: function (data) {
                        console.log('Saved clicked');
                    }
                }
            ]
        });
        prompt.present();
    };
    SemesterAssessmentPage.prototype.showDisAgreePrompt = function () {
        var prompt = this.alertCtrl.create({
            title: 'Disagree Result',
            message: "Add title and description",
            inputs: [
                {
                    name: 'title',
                    placeholder: 'Title'
                },
                {
                    name: 'description',
                    placeholder: 'Description'
                },
            ],
            buttons: [
                {
                    text: 'Cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Submit',
                    handler: function (data) {
                        console.log('Saved clicked');
                    }
                }
            ]
        });
        prompt.present();
    };
    return SemesterAssessmentPage;
}());
SemesterAssessmentPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'semesterAssessment',template:/*ion-inline-start:"/Users/alkagirdhar/Desktop/akash/ramjas/src/pages/assessment/semester/semesterAssessment.html"*/'<ion-header>\n        <ion-navbar color="primary">\n          <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n          </button>\n          <ion-title>Semester</ion-title>\n        </ion-navbar>\n      </ion-header>\n\n<ion-content class="background1">\n        <div class="background2">\n                <img class="center-block" src="http://www.ramjascollege.edu/images/logo.png" padding-top>\n                <h5 text-center margin-bottom class="textWhite"> Assessment</h5>\n            </div>\n            <ion-card *ngFor="let paper of results">\n                <ion-list>\n                    <ion-list-header>\n                        {{paper.paper}}\n                        <ion-badge class=\'right\'>{{paper.paperCode}}</ion-badge>\n                    </ion-list-header>\n                    <ion-item>\n                        <ion-icon name="filing"></ion-icon>\n                        Total Questions\n                        <span item-right><b>{{paper.totalQuestion}}</b></span>\n                    </ion-item>\n                    <ion-item>\n                        <ion-icon name="filing"></ion-icon>\n                        Attempted Questions\n                        <span item-right><b>{{paper.attended}}</b></span>\n                    </ion-item>\n                    <ion-item>\n                        <ion-icon name="filing"></ion-icon>\n                        Correct Answers\n                        <span item-right><b>{{paper.correct}}</b></span>\n                    </ion-item>\n                    <ion-item>\n                        <ion-icon name="filing"></ion-icon>\n                        Wrong Submissions\n                        <span item-right><b>{{paper.incorrect}}</b></span>\n                    </ion-item>\n                    <ion-item>\n                        <ion-icon name="filing"></ion-icon>\n                        Marks Obtained\n                        <span item-right><b>{{paper.obtained}}</b></span>\n                    </ion-item>\n                    <ion-item>\n                            <ion-icon name="filing"></ion-icon>\n                            Checked by\n                            <span item-right><b>{{paper.checkedBy}}</b></span>\n                        </ion-item>\n                </ion-list>\n            </ion-card>\n        \n            <ion-card>\n                    <ion-item>\n                            <ion-icon name="filing"></ion-icon>\n                            Total\n                            <span item-right><b>390/500</b></span>\n                        </ion-item>\n                        <ion-item>\n                                <ion-icon name="filing"></ion-icon>\n                                Grade\n                                <span item-right><b>A</b></span>\n                            </ion-item>\n            </ion-card>\n            <ion-grid>\n                <ion-row>\n                    <ion-col col-6>\n                        <button ion-button block (click)="showAgreePrompt()">\n                            Agree\n                        </button>\n                    </ion-col>\n                    <ion-col col-6 (click)="showDisAgreePrompt()">\n                        <button ion-button block>\n                            Disagree\n                        </button>\n                    </ion-col>\n                </ion-row>\n            </ion-grid>\n        \n</ion-content>\n'/*ion-inline-end:"/Users/alkagirdhar/Desktop/akash/ramjas/src/pages/assessment/semester/semesterAssessment.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], SemesterAssessmentPage);

//# sourceMappingURL=semesterAssessment.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return YearlyAssessmentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var YearlyAssessmentPage = (function () {
    function YearlyAssessmentPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.marks = [
            { testpaper: 'Cumulative Test 1', math: '90', rv: '60', acce: '90', gc: '50', total: '290' },
            { testpaper: 'Cumulative Test 2', math: '10', rv: '60', acce: '90', gc: '50', total: '290' },
            { testpaper: 'Final Exam', math: '80', rv: '60', acce: '90', gc: '50', total: '290' },
        ];
    }
    return YearlyAssessmentPage;
}());
YearlyAssessmentPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'yearlyAssessment',template:/*ion-inline-start:"/Users/alkagirdhar/Desktop/akash/ramjas/src/pages/assessment/yearlyAssessment/yearlyAssessment.html"*/'<ion-header>\n    <ion-navbar color="primary">\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n          </button>\n        <ion-title>Yearly</ion-title>\n    </ion-navbar>\n</ion-header>\n<ion-content  class="background1">\n    <div class="background2">\n        <img class="center-block" src="http://www.ramjascollege.edu/images/logo.png" padding-top>\n        <h5 text-center margin-bottom class="textWhite">Yearly Assessment</h5>\n    </div>\n    <ion-card *ngFor="let test of marks">\n        <ion-list>\n            <ion-list-header>\n                {{test.testpaper}}\n            </ion-list-header>\n            <ion-item>\n                <ion-icon name="filing"></ion-icon>\n                Maths\n                <span item-right><b>{{test.math}}</b></span>\n            </ion-item>\n            <ion-item>\n                <ion-icon name="filing"></ion-icon>\n                RV\n                <span item-right><b>{{test.rv}}</b></span>\n            </ion-item>\n            <ion-item>\n                <ion-icon name="filing"></ion-icon>\n                ACCE\n                <span item-right><b>{{test.acce}}</b></span>\n            </ion-item>\n            <ion-item>\n                <ion-icon name="filing"></ion-icon>\n                GC\n                <span item-right><b>{{test.gc}}</b></span>\n            </ion-item>\n            <ion-item>\n                <ion-icon name="filing"></ion-icon>\n                Total\n                <span item-right><b>{{test.total}}</b></span>\n            </ion-item>\n        </ion-list>\n    </ion-card>\n    <ion-card>\n        <ion-item>\n            <ion-icon name="filing"></ion-icon>\n            Total\n            <span item-right><b>2500/3000</b></span>\n        </ion-item>\n        <ion-item>\n            <ion-icon name="filing"></ion-icon>\n            Grade\n            <span item-right><b>A</b></span>\n        </ion-item>\n    </ion-card>\n</ion-content>'/*ion-inline-end:"/Users/alkagirdhar/Desktop/akash/ramjas/src/pages/assessment/yearlyAssessment/yearlyAssessment.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], YearlyAssessmentPage);

//# sourceMappingURL=yearlyAssessment.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OverallAssessmentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OverallAssessmentPage = (function () {
    function OverallAssessmentPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.results = [
            { sem: 'I', tp1marks: '390', tp2marks: '400', tp3marks: '450', total: '1240' },
            { sem: 'II', tp1marks: '390', tp2marks: '400', tp3marks: '450', total: '1240' },
            { sem: 'III', tp1marks: '390', tp2marks: '400', tp3marks: '450', total: '1240' },
            { sem: 'IV', tp1marks: '390', tp2marks: '400', tp3marks: '450', total: '1240' },
            { sem: 'V', tp1marks: '390', tp2marks: '400', tp3marks: '450', total: '1240' },
            { sem: 'VI', tp1marks: '390', tp2marks: '400', tp3marks: '450', total: '1240' },
        ];
    }
    return OverallAssessmentPage;
}());
OverallAssessmentPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'overallAssessment',template:/*ion-inline-start:"/Users/alkagirdhar/Desktop/akash/ramjas/src/pages/assessment/overallAssessment/overallAssessment.html"*/'<ion-header>\n    <ion-navbar color="primary">\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n          </button>\n        <ion-title>Overall Assessment</ion-title>\n    </ion-navbar>\n</ion-header>\n<ion-content  class="background1">\n    <div class="background2">\n        <img class="center-block" src="http://www.ramjascollege.edu/images/logo.png" padding-top>\n        <h5 text-center margin-bottom class="textWhite">Overall Assessment</h5>\n    </div>\n    <ion-card *ngFor="let test of results">\n        <ion-list>\n            <ion-list-header>\n                Semester {{test.sem}}\n            </ion-list-header>\n            <ion-item>\n                <ion-icon name="filing"></ion-icon>\n                Cumulative Test I\n                <span item-right><b>{{test.tp1marks}}</b></span>\n            </ion-item>\n            <ion-item>\n                <ion-icon name="filing"></ion-icon>\n                Cumulative Test II\n                <span item-right><b>{{test.tp2marks}}</b></span>\n            </ion-item>\n            <ion-item>\n                <ion-icon name="filing"></ion-icon>\n                Final Exam\n                <span item-right><b>{{test.tp3marks}}</b></span>\n            </ion-item>\n            <ion-item>\n                <ion-icon name="filing"></ion-icon>\n                Total\n                <span item-right><b>{{test.total}}</b></span>\n            </ion-item>\n        </ion-list>\n    </ion-card>\n    <ion-card>\n            <ion-item>\n                <ion-icon name="filing"></ion-icon>\n                Total\n                <span item-right><b>14,300/18,000</b></span>\n            </ion-item>\n            <ion-item>\n                <ion-icon name="filing"></ion-icon>\n                Grade\n                <span item-right><b>A</b></span>\n            </ion-item>\n        </ion-card>\n</ion-content>'/*ion-inline-end:"/Users/alkagirdhar/Desktop/akash/ramjas/src/pages/assessment/overallAssessment/overallAssessment.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], OverallAssessmentPage);

//# sourceMappingURL=overallAssessment.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EventsPage = (function () {
    function EventsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.calendar = {
            mode: 'month',
            currentDate: new Date(),
            dateFormatter: {
                formatMonthViewDay: function (date) {
                    return date.getDate().toString();
                },
                formatMonthViewDayHeader: function (date) {
                    return 'MonMH';
                },
                formatMonthViewTitle: function (date) {
                    return 'testMT';
                },
                formatWeekViewDayHeader: function (date) {
                    return 'MonWH';
                },
                formatWeekViewTitle: function (date) {
                    return 'testWT';
                },
                formatWeekViewHourColumn: function (date) {
                    return 'testWH';
                },
                formatDayViewHourColumn: function (date) {
                    return 'testDH';
                },
                formatDayViewTitle: function (date) {
                    return 'testDT';
                }
            }
        };
        this.markDisabled = function (date) {
            var current = new Date();
            current.setHours(0, 0, 0);
            return date < current;
        };
        this.loadEvents();
    }
    EventsPage.prototype.loadEvents = function () {
        this.eventSource = this.createRandomEvents();
    };
    EventsPage.prototype.onViewTitleChanged = function (title) {
        this.viewTitle = title;
    };
    EventsPage.prototype.onEventSelected = function (event) {
        console.log('Event selected:' + event.startTime + '-' + event.endTime + ',' + event.title);
    };
    EventsPage.prototype.changeMode = function (mode) {
        this.calendar.mode = mode;
    };
    EventsPage.prototype.today = function () {
        this.calendar.currentDate = new Date();
    };
    EventsPage.prototype.onTimeSelected = function (ev) {
        console.log('Selected time: ' + ev.selectedTime + ', hasEvents: ' +
            (ev.events !== undefined && ev.events.length !== 0) + ', disabled: ' + ev.disabled);
    };
    EventsPage.prototype.onCurrentDateChanged = function (event) {
        var today = new Date();
        today.setHours(0, 0, 0, 0);
        event.setHours(0, 0, 0, 0);
        this.isToday = today.getTime() === event.getTime();
    };
    EventsPage.prototype.createRandomEvents = function () {
        var events = [];
        for (var i = 0; i < 50; i += 1) {
            var date = new Date();
            var eventType = Math.floor(Math.random() * 2);
            var startDay = Math.floor(Math.random() * 90) - 45;
            var endDay = Math.floor(Math.random() * 2) + startDay;
            var startTime;
            var endTime;
            if (eventType === 0) {
                startTime = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate() + startDay));
                if (endDay === startDay) {
                    endDay += 1;
                }
                endTime = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate() + endDay));
                events.push({
                    title: 'All Day - ' + i,
                    startTime: startTime,
                    endTime: endTime,
                    allDay: true
                });
            }
            else {
                var startMinute = Math.floor(Math.random() * 24 * 60);
                var endMinute = Math.floor(Math.random() * 180) + startMinute;
                startTime = new Date(date.getFullYear(), date.getMonth(), date.getDate() + startDay, 0, date.getMinutes() + startMinute);
                endTime = new Date(date.getFullYear(), date.getMonth(), date.getDate() + endDay, 0, date.getMinutes() + endMinute);
                events.push({
                    title: 'Event - ' + i,
                    startTime: startTime,
                    endTime: endTime,
                    allDay: false
                });
            }
        }
        return events;
    };
    EventsPage.prototype.onRangeChanged = function (ev) {
        console.log('range changed: startTime: ' + ev.startTime + ', endTime: ' + ev.endTime);
    };
    return EventsPage;
}());
EventsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'events',template:/*ion-inline-start:"/Users/alkagirdhar/Desktop/akash/ramjas/src/pages/events/events.html"*/'<ion-header>\n        <ion-navbar color="primary">\n          <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n          </button>\n          <ion-title>Events</ion-title>\n        </ion-navbar>\n      </ion-header>\n\n<ion-content class="background1">\n        <calendar [eventSource]="eventSource"\n        [calendarMode]="calendar.mode"\n        [currentDate]="calendar.currentDate"\n        (onCurrentDateChanged)="onCurrentDateChanged($event)"\n        (onRangeChanged)="reloadSource(startTime, endTime)"\n        (onEventSelected)="onEventSelected($event)"\n        (onTitleChanged)="onViewTitleChanged($event)"\n        (onTimeSelected)="onTimeSelected($event)"\n        step="30">\n      </calendar>\n</ion-content>\n'/*ion-inline-end:"/Users/alkagirdhar/Desktop/akash/ramjas/src/pages/events/events.html"*/,
        styles: ["\n    item-inner{\n      border-left: 3px solid green !important;\n    },\n    .csDate{\n        background:#e9e9e9;\n    }\n    .csCalIcon{\n        font-size: 50px !important;\n    }\n    ion-slides{\n          margin-bottom: 10px !important;\n          box-shadow: 0px 0px 13px black !important;\n}\n  "]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], EventsPage);

//# sourceMappingURL=events.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CircularListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__circular__ = __webpack_require__(213);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CircularListPage = (function () {
    function CircularListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.circulars = [
            {
                title: 'Annual Day',
                description: 'The annual day function will be held on Sunday 1st November in the College premises',
                createdAt: '12/10/2017',
                circularTypeColor: '#03a9f4',
                circularTypeName: 'College',
                employeeName: 'Renu Bhadoriya',
                start: '10/12/2017', src: "https://previews.123rf.com/images/michaeljung/michaeljung0906/michaeljung090600213/5126537-indian-teacher-Stock-Photo-school.jpg",
            },
            {
                title: 'Sports Day',
                description: 'The Sports day function will be held on Sunday 1st December in the College premises',
                createdAt: '10/11/2017',
                circularTypeColor: '#03a9f4',
                circularTypeName: 'Collage',
                employeeName: 'Renu Bhadoriya',
                start: '10/12/2017', src: "http://www.asiancollegeofteachers.com/images/MAIN_2.jpg",
            },
            {
                title: 'Picnic',
                description: 'College has decided to organise a fun picnic for the students, Soon we will conduct a poll to decide the location for picnic.',
                createdAt: '11/9/2017',
                circularTypeColor: '#009688',
                circularTypeName: 'Fun',
                employeeName: 'Renu Bhadoriya',
                start: '10/12/2017', src: "http://www.iluvcinema.in/telugu/wp-content/uploads/2015/01/Renu-Desai-makes-Pawan-Kalyan-to-join-Twitter.jpg",
            },
            {
                title: 'Exam',
                description: 'Colege final exam are scheduled as per regular timing, no extra prepration leaves will be alloted to any of the regular class.',
                createdAt: '10/8/2017',
                circularTypeColor: '#F44336',
                circularTypeName: 'Exam',
                employeeName: 'Renu Bhadoriya',
                start: '10/12/2017', src: "http://www.livemint.com/rf/Image-621x414/LiveMint/Period1/2012/09/10/Photos/teachers--621x414.JPG",
            },
            {
                title: 'Results',
                description: 'Results will be declared 10 days of exams, Students are requested not to leave hostels befter checking the results.',
                createdAt: '15/12/2017',
                circularTypeColor: '#ff9800',
                circularTypeName: 'Results',
                employeeName: 'Renu Bhadoriya',
                start: '10/12/2017', src: "http://www.livemint.com/rf/Image-621x414/LiveMint/Period1/2012/09/10/Photos/teachers--621x414.JPG",
            },
            {
                title: 'Lorem Ipsum',
                description: 'scelerisque accumsan nisi ac scelerisque. Donec libero enim, tristique quis ultricies ac, scelerisque a dui. Integer condimentum est non tortor porttitor pharetra. Nam ut rhoncus velit, nec bibendum est. Vivamus dapibus enim ligula, tincidunt rutrum nibh vulputate eu. Sed tempor urna ante,',
                createdAt: '15/12/2017',
                circularTypeColor: '#ff9800',
                circularTypeName: 'Results',
                employeeName: 'Renu Bhadoriya',
                start: '10/12/2017', src: "http://www.livemint.com/rf/Image-621x414/LiveMint/Period1/2012/09/10/Photos/teachers--621x414.JPG",
            },
            {
                title: 'Lorem Ipsum',
                description: 'scelerisque accumsan nisi ac scelerisque. Donec libero enim, tristique quis ultricies ac, scelerisque a dui. Integer condimentum est non tortor porttitor pharetra. Nam ut rhoncus velit, nec bibendum est. Vivamus dapibus enim ligula, tincidunt rutrum nibh vulputate eu. Sed tempor urna ante,',
                createdAt: '15/12/2017',
                circularTypeColor: '#ff9800',
                circularTypeName: 'Results',
                employeeName: 'Renu Bhadoriya',
                start: '10/12/2017', src: "http://www.livemint.com/rf/Image-621x414/LiveMint/Period1/2012/09/10/Photos/teachers--621x414.JPG",
            },
            {
                title: 'Lorem Ipsum',
                description: 'scelerisque accumsan nisi ac scelerisque. Donec libero enim, tristique quis ultricies ac, scelerisque a dui. Integer condimentum est non tortor porttitor pharetra. Nam ut rhoncus velit, nec bibendum est. Vivamus dapibus enim ligula, tincidunt rutrum nibh vulputate eu. Sed tempor urna ante,',
                createdAt: '15/12/2017',
                circularTypeColor: '#ff9800',
                circularTypeName: 'Results',
                employeeName: 'Renu Bhadoriya',
                start: '10/12/2017', src: "http://www.livemint.com/rf/Image-621x414/LiveMint/Period1/2012/09/10/Photos/teachers--621x414.JPG",
            },
            {
                title: 'Lorem Ipsum',
                description: 'scelerisque accumsan nisi ac scelerisque. Donec libero enim, tristique quis ultricies ac, scelerisque a dui. Integer condimentum est non tortor porttitor pharetra. Nam ut rhoncus velit, nec bibendum est. Vivamus dapibus enim ligula, tincidunt rutrum nibh vulputate eu. Sed tempor urna ante,',
                createdAt: '15/12/2017',
                circularTypeColor: '#ff9800',
                circularTypeName: 'Results',
                employeeName: 'Renu Bhadoriya',
                start: '10/12/2017', src: "http://www.livemint.com/rf/Image-621x414/LiveMint/Period1/2012/09/10/Photos/teachers--621x414.JPG",
            },
        ];
    }
    CircularListPage.prototype.openCircularView = function (circular) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__circular__["a" /* CircularPage */], { 'circular': circular });
    };
    return CircularListPage;
}());
CircularListPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'circularlist',template:/*ion-inline-start:"/Users/alkagirdhar/Desktop/akash/ramjas/src/pages/circular/circularList/circularlist.html"*/'<ion-header>\n  <ion-navbar color="primary"> \n    <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n          </button>\n    <ion-title>Circulars</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="background1">\n<ion-list>\n    <ion-item *ngFor="let circular of circulars" (click)="openCircularView(circular)">\n            <div style="border-left:3px solid" [style.border-left-color]="circular.circularTypeColor">\n                <h2 margin-left><b>{{circular.title}}</b></h2>\n                <h3 margin-left>{{circular.description}}</h3>\n                <h4 margin-left>\n                    <ion-row no-padding>\n                        <ion-col no-padding>\n                                <ion-icon name="clock"></ion-icon> <span> {{ circular.createdAt }}</span>\n                        </ion-col>\n                        <ion-col  [style.color]="circular.circularTypeColor">\n                                <ion-icon name="at"></ion-icon> <span> {{ circular.circularTypeName }}</span>\n                        </ion-col>\n                    </ion-row>\n                </h4>\n            </div>\n\n    </ion-item>\n</ion-list>\n\n\n    \n        <!-- <ion-list>\n          <ion-item *ngFor="let circular of circulars" (click)="openCircularView(circular)">\n            <div class="csIndicator" [style.border-left-color]="circular.circularTypeColor">\n              <h2><b>{{circular.title}}</b></h2>\n              <h3>{{circular.description}}</h3>\n              <ion-note>\n                <ion-row>\n                  <ion-col width-50 class="no-padding-l csGray5353">\n                    <ion-icon name="clock"></ion-icon> <span> {{ circular.createdAt }}</span>\n                  </ion-col>\n                  <ion-col width-50 class="no-padding-l" >\n                    <ion-icon name="at"></ion-icon> <span> {{ circular.circularTypeName }}</span>\n                  </ion-col>\n                </ion-row>\n              </ion-note>\n            </div>\n          </ion-item>\n        </ion-list> -->\n</ion-content>\n\n'/*ion-inline-end:"/Users/alkagirdhar/Desktop/akash/ramjas/src/pages/circular/circularList/circularlist.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], CircularListPage);

//# sourceMappingURL=circularList.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CircularPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CircularPage = (function () {
    function CircularPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.circular = this.navParams.get('circular');
    }
    return CircularPage;
}());
CircularPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'circular',template:/*ion-inline-start:"/Users/alkagirdhar/Desktop/akash/ramjas/src/pages/circular/circular.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Circular</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="background1">\n    <img margin-top class="csAppImg csOnCardImage center-block" [style.border]="\'3px solid \' + circular.circularTypeColor" src="http://www.asiancollegeofteachers.com/images/MAIN_2.jpg" style="    margin-bottom: -51px;">\n    <ion-card class="csCardInImage" [style.border-top]="\'3px solid \' + circular.circularTypeColor">\n      <div class="csBottomShadow">\n        <div text-center>\n          <b>{{circular.employeeName}}</b>\n        </div>\n        <p text-center>\n          Start Date: {{circular.start}}\n        </p>\n      </div>\n      <ion-card-content>\n        <div class="csParagraph"><b>{{circular.title}} </b></div>\n        <p class="csParagraph">{{circular.description}}</p>\n      </ion-card-content>\n    </ion-card>\n    <ion-card>  \n      <img>\n    </ion-card>\n    <ion-card>\n      <ion-item>\n        <b>Create Date: </b>\n        <span> {{circular.createdAt}}</span>\n      </ion-item>\n    </ion-card>\n  \n</ion-content>\n'/*ion-inline-end:"/Users/alkagirdhar/Desktop/akash/ramjas/src/pages/circular/circular.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], CircularPage);

//# sourceMappingURL=circular.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__messages__ = __webpack_require__(215);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MessageListPage = (function () {
    function MessageListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.messages = [
            {
                title: 'Annual Day',
                categoryColor: '#673AB7',
                categoryName: 'Extra',
                createdAt: '12/9/2017',
                closedOn: '15/10/2017',
                isClosed: '1',
            },
            {
                title: 'Results',
                categoryColor: '#4CAF50',
                categoryName: 'Exams',
                createdAt: '12/9/2017',
                closedOn: '19/10/2017',
                isClosed: '1',
            },
            {
                title: 'College Holiday',
                categoryColor: '#00BCD4',
                categoryName: 'College',
                createdAt: '17/7/2017',
                closedOn: null,
                isClosed: null,
            },
            {
                title: 'Exam date',
                categoryColor: '#4CAF50',
                categoryName: 'Exams',
                createdAt: '17/9/2017',
                closedOn: '19/9/2017',
                isClosed: '1',
            },
        ];
    }
    MessageListPage.prototype.openMessageView = function (message) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__messages__["a" /* MessagesPage */], { 'message': message });
    };
    return MessageListPage;
}());
MessageListPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'messageList',template:/*ion-inline-start:"/Users/alkagirdhar/Desktop/akash/ramjas/src/pages/messages/messageList/messageList.html"*/'<ion-header>\n  <ion-navbar color="primary"> \n    <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n          </button>\n    <ion-title>Circulars</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="background1">\n    <ion-list>\n        <ion-item no-lines *ngFor="let message of messages; let i = index" class="new-list">\n          <div class="csListMargin" ion-item detail-push detail-none style="border-left:3px solid" [style.border-left-color]="message.categoryColor" href="#" (click)="openMessageView(message)">\n            <h2><b>{{message.title}}</b></h2>\n            <ion-row style="font-size:12px">\n              <ion-col class="no-padding-l" width-50 [style.color]="message.categoryColor">\n                  <ion-icon name="at" style="padding-left:0px"></ion-icon>\n                  {{message.categoryName}}\n              </ion-col>\n                  <ion-col class="csGrayText">\n                    <ion-icon name="clock"></ion-icon>  {{message.createdAt}}\n                    <span *ngIf="message.closedOn"> - {{message.closedOn}}</span>\n                  </ion-col>            \n            </ion-row>\n          </div>\n        </ion-item>\n      </ion-list>\n</ion-content>\n\n'/*ion-inline-end:"/Users/alkagirdhar/Desktop/akash/ramjas/src/pages/messages/messageList/messageList.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], MessageListPage);

//# sourceMappingURL=messageList.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MessagesPage = (function () {
    function MessagesPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.message = this.navParams.get('message');
    }
    return MessagesPage;
}());
MessagesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'messages',template:/*ion-inline-start:"/Users/alkagirdhar/Desktop/akash/ramjas/src/pages/messages/messages.html"*/'<ion-header>\n        <ion-navbar color="primary">\n                \n          <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n          </button>\n          <ion-title>\n                  {{message.title}}\n                  <div class="textWhite subTitle">Mobile • {{message.createdAt}}</div>\n        </ion-title>\n        </ion-navbar>\n      </ion-header>\n\n<ion-content class="background1">\n        <div class="chats">\n<div class="msgArea">\n        <div class="avatar">\n                <img class="image-bubble" src="http://www.kemmannu.com/images2011/Sep2011/kemcomMG_7.jpg">\n        </div>\n        <div class="msgBox">\n                Hello whats your name?\n        </div> \n        <div class="date">\n                Renu • 2:59 PM\n        </div>\n</div>\n\n<div class="msgArea me">\n        <div class="avatar">\n                <img src="https://irua.ku.edu/sites/irua.drupal.ku.edu/files/images/general/balaji.jpg">\n        </div>\n        <div class="msgBox">\n                Hello I am Akash Gupta and i have a doubt.\n        </div>  \n        <div class="date">\n                Akash • 3:00 PM\n        </div>\n</div>\n</div>\n</ion-content>\n<ion-footer class="msgFooter">\n        <ion-grid>\n                <ion-row>\n                        <ion-col col-10>\n                                        <ion-textarea placeholder="Type a message"></ion-textarea>\n                        </ion-col>\n                        <ion-col col-2>\n\n                                <div class="send">\n                                                <ion-icon name="send" class="send-btn"></ion-icon>\n                                </div>\n                                \n                        </ion-col>\n                        \n                </ion-row>\n        </ion-grid>\n</ion-footer>\n'/*ion-inline-end:"/Users/alkagirdhar/Desktop/akash/ramjas/src/pages/messages/messages.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], MessagesPage);

//# sourceMappingURL=messages.js.map

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DateSheetListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dateSheet__ = __webpack_require__(217);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DateSheetListPage = (function () {
    function DateSheetListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dateSheetList = [
            { title: 'Exam Time Table', left: '25 days left', createdBy: 'Amit Sharma', audience: 'Students', color: '#F44336' },
            { title: 'Cumulative Test 2', left: '13 Days Left', createdBy: 'Sonam Singh', audience: 'College', color: '#03A9F4' },
            { title: 'Cumulative Test 1', left: '1 Day Left', createdBy: 'Renu Bhadoriya', audience: 'Students', color: '#F44336' },
            { title: 'Annual Function Timing', left: '20 Days Left', createdBy: 'Raj Bahadur', audience: 'College', color: '#03A9F4' },
            { title: 'Sports Meet', left: '1 Month left', createdBy: 'Tushar Thakur', audience: 'College', color: '#03A9F4' },
        ];
    }
    DateSheetListPage.prototype.openDateSheet = function (dateSheet) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__dateSheet__["a" /* DateSheetPage */], { 'dateSheet': dateSheet });
    };
    return DateSheetListPage;
}());
DateSheetListPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'sheetList',template:/*ion-inline-start:"/Users/alkagirdhar/Desktop/akash/ramjas/src/pages/dateSheet/sheetList/sheetList.html"*/'<ion-header>\n        <ion-navbar color="primary">\n          <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n          </button>\n          <ion-title>Date Sheets</ion-title>\n        </ion-navbar>\n      </ion-header>\n      \n      <ion-content class="background1">\n        <ion-list>\n            <ion-item *ngFor="let dateSheet of dateSheetList" (click)="openDateSheet(dateSheet)">\n                <div class="highlight-border" [style.border-color]="dateSheet.color">\n                    <h2 margin-left><b>{{dateSheet.title}} </b><h3 class="right" margin-left><ion-badge>{{dateSheet.left}}</ion-badge></h3></h2>\n                    <br>\n                    <h3 margin-left>\n                        <ion-icon name="person"></ion-icon> {{dateSheet.createdBy}}  \n                        <span class="right" [style.color]="dateSheet.color">@{{dateSheet.audience}}</span>\n                    </h3>\n                 </div>   \n            </ion-item>\n        </ion-list>\n      </ion-content>\n      '/*ion-inline-end:"/Users/alkagirdhar/Desktop/akash/ramjas/src/pages/dateSheet/sheetList/sheetList.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], DateSheetListPage);

//# sourceMappingURL=sheetList.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DateSheetPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DateSheetPage = (function () {
    function DateSheetPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dateSheet = this.navParams.get('dateSheet');
        this.timeTable = [
            { sno: '1', subject: 'Maths II', date: '12/10/2017', time: '1:30 PM' },
            { sno: '2', subject: 'GE', date: '13/10/2017', time: '2:30 PM' },
            { sno: '3', subject: 'RV', date: '15/10/2017', time: '1:30 PM' },
            { sno: '4', subject: 'ACEE', date: '17/10/2017', time: '2:30 PM' },
            { sno: '5', subject: 'ME', date: '19/10/2017', time: '11:00 AM' },
        ];
    }
    return DateSheetPage;
}());
DateSheetPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'dateSheet',template:/*ion-inline-start:"/Users/alkagirdhar/Desktop/akash/ramjas/src/pages/dateSheet/dateSheet.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Date Sheet</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="background1">\n  <ion-list-header text-center>\n    <b [style.color]="dateSheet.color">{{dateSheet.title}}</b>\n  </ion-list-header>\n  <ion-card>\n    <ion-grid>\n      <ion-row>\n        <ion-col col-2>\n          <b>S.no </b>\n        </ion-col>\n        <ion-col col-4>\n          <b>Subject </b>\n        </ion-col>\n        <ion-col col-3>\n          <b>Date </b>\n        </ion-col>\n        <ion-col col-3>\n          <b>Time </b>\n        </ion-col>\n      </ion-row>\n      <ion-row *ngFor="let table of timeTable">\n          <ion-col col-2>\n            {{table.sno}}\n          </ion-col>\n          <ion-col col-4>\n            {{table.subject}}\n          </ion-col>\n          <ion-col col-3>\n          {{table.date}}\n          </ion-col>\n          <ion-col col-3>\n          {{table.time}}\n          </ion-col>\n        </ion-row>\n    </ion-grid>\n    <ion-item>\n      <ion-icon name="person" item-left [style.color]="dateSheet.color"></ion-icon>\n      Created by\n      <span item-right><b>{{dateSheet.createdBy}}</b></span>\n    </ion-item>\n    <ion-item>\n        <ion-icon name="people" item-left [style.color]="dateSheet.color"></ion-icon>\n        Audience\n        <span item-right><b>{{dateSheet.audience}}</b></span>\n      </ion-item>    \n      <ion-item>\n          <ion-icon name="time" item-left [style.color]="dateSheet.color"></ion-icon>\n          Left Time\n          <span item-right><b>{{dateSheet.left}}</b></span>\n        </ion-item>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/alkagirdhar/Desktop/akash/ramjas/src/pages/dateSheet/dateSheet.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], DateSheetPage);

//# sourceMappingURL=dateSheet.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ElectiveListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__elective__ = __webpack_require__(219);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ElectiveListPage = (function () {
    function ElectiveListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.electives = [
            { subject: 'Stats', left: '25 days left', faculty: 'Amit Sharma', description: 'Lorem ipsumLorem ipsumLorem ipsum', color: '#8BC34A', choosen: '1' },
            { subject: 'Business Analyst', left: null, faculty: 'Sonam Singh', description: 'Lorem ipsumLorem ipsumLorem ipsum', color: '#F44336', choosen: null },
            { subject: 'Corporate Turnaround', left: '1 Day Left', faculty: 'Renu Bhadoriya', description: 'Lorem ipsumLorem ipsumLorem ipsum', color: '#8BC34A', choosen: 1 },
            { subject: 'Automation', left: null, faculty: 'Raj Bahadur', description: 'Lorem ipsumLorem ipsumLorem ipsum', color: '#F44336', choosen: null },
            { subject: 'Political Science', left: '1 Month left', faculty: 'Komal Thakur', description: 'Lorem ipsumLorem ipsumLorem ipsum', color: '#8BC34A', choosen: null },
            { subject: 'Indian Economy', left: '1 Month left', faculty: 'Tushar Thakur', description: 'Lorem ipsumLorem ipsumLorem ipsum', color: '#8BC34A', choosen: null },
        ];
    }
    ElectiveListPage.prototype.openElective = function (elective) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__elective__["a" /* ElectivePage */], { 'elective': elective });
    };
    return ElectiveListPage;
}());
ElectiveListPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'electiveList',template:/*ion-inline-start:"/Users/alkagirdhar/Desktop/akash/ramjas/src/pages/elective/sheetList/electiveList.html"*/'<ion-header>\n        <ion-navbar color="primary">\n          <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n          </button>\n          <ion-title>Electives</ion-title>\n        </ion-navbar>\n      </ion-header>\n      \n      <ion-content class="background1">\n        <ion-list>\n            <ion-item *ngFor="let elective of electives" (click)="openElective(elective)">\n                <ion-icon name="md-checkmark-circle-outline" color="color10" item-start *ngIf="elective.choosen"></ion-icon>\n                <ion-icon name="md-radio-button-off" color="color10" item-start *ngIf="!elective.choosen"></ion-icon>\n                    <h2>\n                      <b>{{elective.subject}} </b>\n                      <h3 class="right">\n                        <ion-badge color="color11">{{elective.left}}</ion-badge>\n                        <ion-badge color="color1" *ngIf="!elective.left">Closed</ion-badge>\n                      </h3>\n                    </h2>\n                    <br>\n                    <h3>\n                      <ion-row>\n                        <ion-col col-8 class="overflow-x">\n                            {{elective.description}}\n                        </ion-col>\n                        <ion-col col-4>\n                            <span><ion-icon name="person" [style.color]="elective.color"> </ion-icon> {{elective.faculty}}</span>\n                          </ion-col>\n                      </ion-row>\n                    </h3>  \n            </ion-item>\n        </ion-list>\n      </ion-content>\n      '/*ion-inline-end:"/Users/alkagirdhar/Desktop/akash/ramjas/src/pages/elective/sheetList/electiveList.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], ElectiveListPage);

//# sourceMappingURL=electiveList.js.map

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ElectivePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ElectivePage = (function () {
    function ElectivePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.elective = this.navParams.get('elective');
    }
    return ElectivePage;
}());
ElectivePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'elective',template:/*ion-inline-start:"/Users/alkagirdhar/Desktop/akash/ramjas/src/pages/elective/elective.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Elective</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="background1">\n  <ion-list-header text-center>\n    <h1 [style.color]="elective.color">\n      <ion-icon name="md-checkmark-circle-outline" *ngIf="elective.choosen"></ion-icon> \n      <ion-icon name="md-radio-button-off" *ngIf="!elective.choosen"></ion-icon> \n       {{elective.subject}}\n    </h1>\n    <span color="color11" *ngIf="elective.left">({{ elective.left }})</span>\n    <span color="color1" *ngIf="!elective.left">(closed)</span>\n  </ion-list-header>\n\n  <ion-card padding>\n      <b>Introduction</b>\n      <p>\n              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum non urna ante. Proin aliquet hendrerit diam, nec luctus ipsum pellentesque eu. Vestibulum congue metus sed nisi maximus, vel scelerisque erat fringilla. \n      </p>\n  </ion-card>\n  <ion-card padding>\n          <b>Chapter 1</b>\n          <p>\n                  Aenean lacinia elementum tempor. Etiam accumsan vel ligula id fermentum. Maecenas tincidunt neque mauris, ac ultrices justo porttitor sed. Sed sed semper arcu, vitae varius libero. Vestibulum tempus dolor eu sollicitudin rutrum. Fusce non iaculis erat. Cras pharetra ante sit amet odio varius porta. Duis quis tortor pharetra, ornare quam sed, cursus eros. Morbi et sapien nunc. Quisque tristique consectetur leo congue efficitur. Phasellus eu dolor vel nunc fermentum pellentesque.\n          </p>\n      </ion-card>\n      <ion-card padding>\n              <b>Chapter 2</b>\n              <p>\n                      Nullam in ante ac dui rutrum aliquam vel in elit. Donec feugiat convallis est, vel volutpat lacus tristique a. Aenean interdum turpis enim, a condimentum ipsum varius non. Phasellus non bibendum libero. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent rhoncus elit quis ante luctus, non imperdiet lectus tincidunt. Proin eu libero et quam aliquet ultrices. Phasellus cursus elementum nunc nec varius. Proin fermentum arcu vel justo consectetur, eu condimentum lorem molestie. Phasellus auctor aliquam sapien vitae cursus. Donec dictum mauris non felis elementum, aliquam luctus nibh pulvinar. Nulla eleifend mauris nibh, ut venenatis magna pretium sed.\n              </p>\n          </ion-card>    \n          <ion-card padding>\n                  <b>Important Points</b>\n                      <ul>\n                          <li>\n                                  Pellentesque eget orci cursus mi vestibulum faucibus.\n                          </li>\n                          <li>\n                                  Ut purus quam, fermentum sit amet tristique congue, tincidunt eu tortor. \n                          </li>\n                          <li>\n                                  Vivamus pretium ligula risus, ut cursus eros lacinia id.\n                          </li>\n                          <li>\n                                  Duis volutpat eget libero a venenatis.\n                          </li>\n                      </ul>\n              </ion-card>     \n              <div padding>\n                <button ion-button color="color1" *ngIf="elective.left && elective.choosen" block>\n                  Unselect\n                </button>\n                <button ion-button color="color11" *ngIf="elective.left && !elective.choosen" block>\n                    Choose\n                </button>\n              </div>\n</ion-content>\n'/*ion-inline-end:"/Users/alkagirdhar/Desktop/akash/ramjas/src/pages/elective/elective.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], ElectivePage);

//# sourceMappingURL=elective.js.map

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(239);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 239:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic2_calendar__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_login_login__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_shared_service__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_profile_profile__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_assignments_dueAssignments_dueAssignments__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_assignments_viewAssignment_viewAssignments__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_assessment_assessment__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_assessment_semester_semesterAssessment__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_assessment_overallAssessment_overallAssessment__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_assessment_yearlyAssessment_yearlyAssessment__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_paperDetails_paperDetails__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_paperDetails_attendance_attendance__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_paperDetails_notes_notes__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_paperDetails_assignment_assignment__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_paperDetails_assessment_assessment__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_paperDetails_assignment_assignmentlist_assignmentlist__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_events_events__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_circular_circular__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_circular_circularList_circularList__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_messages_messageList_messageList__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_paperDetails_messages_messages__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_messages_messages__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_dateSheet_dateSheet__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_dateSheet_sheetList_sheetList__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_elective_elective__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_elective_sheetList_electiveList__ = __webpack_require__(218);
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
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_profile_profile__["a" /* ProfilePage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_assignments_dueAssignments_dueAssignments__["a" /* DueAssignmentsPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_assignments_viewAssignment_viewAssignments__["a" /* ViewAssignmentPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_assessment_assessment__["a" /* AssessmentPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_assessment_semester_semesterAssessment__["a" /* SemesterAssessmentPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_assessment_overallAssessment_overallAssessment__["a" /* OverallAssessmentPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_assessment_yearlyAssessment_yearlyAssessment__["a" /* YearlyAssessmentPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_paperDetails_paperDetails__["a" /* PaperDetailsPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_paperDetails_attendance_attendance__["a" /* AttendancePage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_paperDetails_notes_notes__["a" /* NotesPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_paperDetails_assignment_assignment__["a" /* AssignmentPage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_paperDetails_assessment_assessment__["a" /* PaperAssessmentPage */],
            __WEBPACK_IMPORTED_MODULE_28__pages_paperDetails_messages_messages__["a" /* PaperMessagesPage */],
            __WEBPACK_IMPORTED_MODULE_23__pages_paperDetails_assignment_assignmentlist_assignmentlist__["a" /* AssignmentListPage */],
            __WEBPACK_IMPORTED_MODULE_24__pages_events_events__["a" /* EventsPage */],
            __WEBPACK_IMPORTED_MODULE_26__pages_circular_circularList_circularList__["a" /* CircularListPage */],
            __WEBPACK_IMPORTED_MODULE_25__pages_circular_circular__["a" /* CircularPage */],
            __WEBPACK_IMPORTED_MODULE_27__pages_messages_messageList_messageList__["a" /* MessageListPage */],
            __WEBPACK_IMPORTED_MODULE_29__pages_messages_messages__["a" /* MessagesPage */],
            __WEBPACK_IMPORTED_MODULE_30__pages_dateSheet_dateSheet__["a" /* DateSheetPage */],
            __WEBPACK_IMPORTED_MODULE_31__pages_dateSheet_sheetList_sheetList__["a" /* DateSheetListPage */],
            __WEBPACK_IMPORTED_MODULE_32__pages_elective_elective__["a" /* ElectivePage */],
            __WEBPACK_IMPORTED_MODULE_33__pages_elective_sheetList_electiveList__["a" /* ElectiveListPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_6_ionic2_calendar__["a" /* NgCalendarModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                links: []
            }),
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_profile_profile__["a" /* ProfilePage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_assignments_dueAssignments_dueAssignments__["a" /* DueAssignmentsPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_assignments_viewAssignment_viewAssignments__["a" /* ViewAssignmentPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_assessment_assessment__["a" /* AssessmentPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_assessment_semester_semesterAssessment__["a" /* SemesterAssessmentPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_assessment_overallAssessment_overallAssessment__["a" /* OverallAssessmentPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_assessment_yearlyAssessment_yearlyAssessment__["a" /* YearlyAssessmentPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_paperDetails_paperDetails__["a" /* PaperDetailsPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_paperDetails_attendance_attendance__["a" /* AttendancePage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_paperDetails_notes_notes__["a" /* NotesPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_paperDetails_assignment_assignment__["a" /* AssignmentPage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_paperDetails_assessment_assessment__["a" /* PaperAssessmentPage */],
            __WEBPACK_IMPORTED_MODULE_28__pages_paperDetails_messages_messages__["a" /* PaperMessagesPage */],
            __WEBPACK_IMPORTED_MODULE_23__pages_paperDetails_assignment_assignmentlist_assignmentlist__["a" /* AssignmentListPage */],
            __WEBPACK_IMPORTED_MODULE_24__pages_events_events__["a" /* EventsPage */],
            __WEBPACK_IMPORTED_MODULE_26__pages_circular_circularList_circularList__["a" /* CircularListPage */],
            __WEBPACK_IMPORTED_MODULE_25__pages_circular_circular__["a" /* CircularPage */],
            __WEBPACK_IMPORTED_MODULE_27__pages_messages_messageList_messageList__["a" /* MessageListPage */],
            __WEBPACK_IMPORTED_MODULE_29__pages_messages_messages__["a" /* MessagesPage */],
            __WEBPACK_IMPORTED_MODULE_30__pages_dateSheet_dateSheet__["a" /* DateSheetPage */],
            __WEBPACK_IMPORTED_MODULE_31__pages_dateSheet_sheetList_sheetList__["a" /* DateSheetListPage */],
            __WEBPACK_IMPORTED_MODULE_32__pages_elective_elective__["a" /* ElectivePage */],
            __WEBPACK_IMPORTED_MODULE_33__pages_elective_sheetList_electiveList__["a" /* ElectiveListPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_10__providers_shared_service__["a" /* SharedService */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_shared_service__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_profile_profile__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_assignments_dueAssignments_dueAssignments__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_assessment_assessment__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_events_events__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_circular_circularList_circularList__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_messages_messageList_messageList__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_dateSheet_sheetList_sheetList__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_elective_sheetList_electiveList__ = __webpack_require__(218);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
















var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, event, sharedService) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.event = event;
        this.sharedService = sharedService;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.students = [
            { title: 'Dashboard', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */], icon: 'http://www.eq2llc.com/wp-content/uploads/icon-dashboard.png' },
            { title: 'Profile', component: __WEBPACK_IMPORTED_MODULE_8__pages_profile_profile__["a" /* ProfilePage */], icon: 'https://www.shareicon.net/download/2016/09/01/822739_user_512x512.png' },
            { title: 'Due Assignments', component: __WEBPACK_IMPORTED_MODULE_9__pages_assignments_dueAssignments_dueAssignments__["a" /* DueAssignmentsPage */], icon: 'http://www.iconshock.com/img_jpg/SIGMA/project_managment/jpg/256/responsibility_assignment_icon.jpg' },
            { title: 'Assessments', component: __WEBPACK_IMPORTED_MODULE_10__pages_assessment_assessment__["a" /* AssessmentPage */], icon: 'https://cdn3.iconfinder.com/data/icons/brain-games/128/Quiz-Games.png' },
            { title: 'Date Sheet ', component: __WEBPACK_IMPORTED_MODULE_14__pages_dateSheet_sheetList_sheetList__["a" /* DateSheetListPage */], icon: 'https://lh4.ggpht.com/TUyR16LfVjlNA-K9-coUNtUYqVmu8mpi_9_ZQEXlJAO709FgsDX8b7jZwhW4BSwpCQ=w300' },
            { title: 'Events', component: __WEBPACK_IMPORTED_MODULE_11__pages_events_events__["a" /* EventsPage */], icon: 'http://icons.iconarchive.com/icons/wwalczyszyn/android-style/256/Calendar-icon.png' },
            { title: 'Circular', component: __WEBPACK_IMPORTED_MODULE_12__pages_circular_circularList_circularList__["a" /* CircularListPage */], icon: 'http://www.geetabalbharti.in/images/footer/circulars.png' },
            { title: 'Messages', component: __WEBPACK_IMPORTED_MODULE_13__pages_messages_messageList_messageList__["a" /* MessageListPage */], icon: 'http://www.iconsdb.com/icons/preview/orange/message-xxl.png' },
            { title: 'Electives', component: __WEBPACK_IMPORTED_MODULE_15__pages_elective_sheetList_electiveList__["a" /* ElectiveListPage */], icon: 'https://maxcdn.icons8.com/Share/icon/ultraviolet/Science//elective1600.png' },
            { title: 'Logout', component: __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */], icon: 'http://icons.iconarchive.com/icons/alecive/flatwoken/512/Apps-Dialog-Logout-icon.png' },
        ];
        this.faculty = [
            { title: 'Dashboard', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */], icon: 'xyz.png' },
            { title: 'Faculty List', component: __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */], icon: 'xyz.png' }
        ];
        this.hod = [
            { title: 'Dashboard', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */], icon: 'xyz.png' },
            { title: 'HOD List', component: __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */], icon: 'xyz.png' }
        ];
        this.principal = [
            { title: 'Dashboard', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */], icon: 'xyz.png' },
            { title: 'principal List', component: __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */], icon: 'xyz.png' }
        ];
        this.admin = [
            { title: 'Dashboard', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */], icon: 'xyz.png' },
            { title: 'Admin List', component: __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */], icon: 'xyz.png' }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
            _this.event.subscribe("user:login", function (data) {
                if (data.category == 'student')
                    _this.pages = _this.students;
                else if (data.category == 'faculty')
                    _this.pages = _this.faculty;
                else if (data.category == 'hod')
                    _this.pages = _this.hod;
                else if (data.category == 'principal')
                    _this.pages = _this.principal;
                else if (data.category == 'admin')
                    _this.pages = _this.hod;
                console.log(data.name);
                _this.username = data.name;
            });
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.openAccountPage = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_8__pages_profile_profile__["a" /* ProfilePage */]);
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]) === "function" && _a || Object)
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/alkagirdhar/Desktop/akash/ramjas/src/app/app.html"*/'<ion-menu [content]="content">\n    <ion-header class="csProfileHeader" tappable (tap)="openAccountPage()">\n        <div class="csAccBgImg csHeight160">\n        <div class="center-block csProfileHeader">\n          <div class="csAccBgImg">\n            <br><img src="https://irua.ku.edu/sites/irua.drupal.ku.edu/files/images/general/balaji.jpg" class="csAccImg center-block">\n            <div class="csAccName" text-center>{{username}}</div>\n          </div>\n        </div>\n        </div>\n      </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button class="csStrip" menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n          <img [src]="p.icon" item-left height="25px" width="25px">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/Users/alkagirdhar/Desktop/akash/ramjas/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_7__providers_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__providers_shared_service__["a" /* SharedService */]) === "function" && _f || Object])
], MyApp);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 293:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[220]);
//# sourceMappingURL=main.js.map