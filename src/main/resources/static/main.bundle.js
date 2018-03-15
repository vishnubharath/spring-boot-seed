webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/Constant/Utils.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Utils; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Report_report__ = __webpack_require__("../../../../../src/app/Report/report.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Report_ReportType__ = __webpack_require__("../../../../../src/app/Report/ReportType.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Report_reportAdjusments__ = __webpack_require__("../../../../../src/app/Report/reportAdjusments.ts");



var Utils = (function () {
    function Utils() {
    }
    // getCityList(){
    // 	return this.cityList;
    // }
    // getLocationType(){
    // 	return this.locationType;
    // }
    Utils.prototype.convertFinalReport = function (finalRecord) {
        var serviceRowData = [];
        finalRecord.forEach(function (record) {
            var recordData = new __WEBPACK_IMPORTED_MODULE_0__Report_report__["a" /* Report */]();
            if (record.reportDataType != "duplicate") {
                recordData.reportId = record.reportId;
            }
            recordData.employeeId = record.employeeId;
            recordData.associateId = record.associateId;
            recordData.associateName = record.associateName;
            recordData.associateCity = record.city;
            recordData.locationType = record.location;
            recordData.customerId = record.customerId;
            recordData.customerName = record.customerName;
            recordData.projectId = record.projectId;
            recordData.projectName = record.projectName;
            recordData.billableType = record.billability;
            recordData.associateGrade = record.associateGrade;
            var d = new Date(record.allocStartDate);
            recordData.allocStartDate = d;
            recordData.allocationPercentage = record.allocationPercentage;
            d = new Date(record.allocEndDate);
            recordData.allocEndDate = d;
            recordData.projectBillability = record.projectBillability;
            recordData.forecastPeriodFrom = record.forecastPeriodFrom;
            recordData.forecastPeriodTo = record.forecastPeriodTo;
            recordData.forecastedOn = record.forecastedOn;
            recordData.lastUpdatedUser = record.lastUpdatedUser;
            recordData.lastUpdatedTime = record.lastUpdatedTime;
            recordData.portfolio = record.portfolio;
            recordData.poc = record.poc;
            var reportAdjusments = [];
            for (var i = 0; i < Utils.numberOfMonths; i++) {
                //if(record["adjustment_"+[i+1]]!=null || record["adjustment_"+[i+1]]!="" || record["adjustment_"+[i+1]+"_id"]!=null || record["hours_"+[i+1]]!=null){
                if (!(record["adjustment_" + [i + 1] + "_id"] === undefined)) {
                    var reportAdjusment = new __WEBPACK_IMPORTED_MODULE_2__Report_reportAdjusments__["a" /* ReportAdjusment */]();
                    if (record.reportDataType === "duplicate") {
                        reportAdjusment.id = 0;
                    }
                    else {
                        reportAdjusment.id = record["adjustment_" + [i + 1] + "_id"];
                    }
                    reportAdjusment.adjustment = record["adjustment_" + [i + 1]];
                    reportAdjusment.hours = record["hours_" + [i + 1]];
                    reportAdjusment.rate = record["rate_" + [i + 1]];
                    reportAdjusment.revenue = record["revenue_" + [i + 1]];
                    reportAdjusment.forecastedMonth = record["forecastedMonth_" + [i + 1]];
                    reportAdjusment.forecastedYear = record["forecastedYear_" + [i + 1]];
                    reportAdjusments.push(reportAdjusment);
                }
                else if (record.reportDataType === "NewData") {
                    //	if(record["adjustment_"+[i+1]]!=undefined || record["hours_"+[i+1]]!=undefined || record["rate_"+[i+1]]!=undefined  ){
                    var reportAdjusment = new __WEBPACK_IMPORTED_MODULE_2__Report_reportAdjusments__["a" /* ReportAdjusment */]();
                    reportAdjusment.id = 0;
                    reportAdjusment.adjustment = record["adjustment_" + [i + 1]];
                    reportAdjusment.hours = record["hours_" + [i + 1]];
                    reportAdjusment.rate = record["rate_" + [i + 1]];
                    reportAdjusment.revenue = record["revenue_" + [i + 1]];
                    reportAdjusment.forecastedMonth = record["forecastedMonth_" + [i + 1]];
                    reportAdjusment.forecastedYear = record["forecastedYear_" + [i + 1]];
                    reportAdjusments.push(reportAdjusment);
                    //	}
                }
            }
            recordData.reportAdjustmentEntity = reportAdjusments;
            serviceRowData.push(recordData);
        });
        console.log(serviceRowData);
        return serviceRowData;
    };
    Utils.prototype.createDuplicateRow = function (reports, reportID) {
        var reportTypes = [];
        reports.forEach(function (report) {
            var reportType = new __WEBPACK_IMPORTED_MODULE_1__Report_ReportType__["a" /* ReportType */]();
            reportType.allocStartDate = report.allocStartDate;
            if (reportID) {
                reportType.reportId = report.reportId;
            }
            reportType.city = report.city;
            reportType.associateGrade = report.associateGrade;
            reportType.associateId = report.associateId;
            reportType.associateName = report.associateName;
            reportType.billability = report.billability;
            reportType.customerId = report.customerId;
            reportType.customerName = report.customerName;
            reportType.employeeId = report.employeeId;
            reportType.forecastedOn = report.forecastedOn;
            reportType.forecastPeriodFrom = report.forecastPeriodFrom;
            reportType.forecastPeriodTo = report.forecastPeriodTo;
            reportType.lastUpdatedTime = report.lastUpdatedTime;
            reportType.lastUpdatedUser = report.lastUpdatedUser;
            reportType.location = report.location;
            reportType.poc = report.poc;
            reportType.portfolio = report.portfolio;
            reportType.projectBillability = report.projectBillability;
            reportType.projectId = report.projectId;
            reportType.projectName = report.projectName;
            reportType.allocationPercentage = report.allocationPercentage;
            reportType.allocStartDate = report.allocStartDate;
            reportType.allocEndDate = report.allocEndDate;
            for (var index = 0; index < Utils.numberOfMonths; index++) {
                if (report["adjustment_" + [index + 1] + "_id"] != null && report["adjustment_" + [index + 1] + "_id"] != "") {
                    reportType["adjustment_" + [index + 1] + "_id"] = report["adjustment_" + [index + 1] + "_id"];
                    reportType["adjustment_" + [index + 1]] = report["adjustment_" + [index + 1]];
                    reportType["hours_" + [index + 1]] = report["hours_" + [index + 1]];
                    reportType["rate_" + [index + 1]] = report["rate_" + [index + 1]];
                    reportType["revenue_" + [index + 1]] = report["revenue_" + [index + 1]];
                    reportType["associateId"] = report.associateId;
                    reportType["projectId"] = report.projectId;
                    reportType["locationType"] = report.location;
                    reportType["forecastedYear_" + [index + 1]] = report["forecastedYear_" + [index + 1]];
                    reportType["forecastedMonth_" + [index + 1]] = report["forecastedMonth_" + [index + 1]];
                }
            }
            reportTypes.push(reportType);
        });
        return reportTypes;
    };
    Utils.locationType = ["Onsite", "Offshore"];
    Utils.cityList = ["CHENNAI", "KOLKATA", "LONDON", "NEWYORK", "PUNE", "TORONTO"];
    Utils.billability = ["Y", "N"];
    Utils.numberOfMonths = 12;
    return Utils;
}());



/***/ }),

/***/ "../../../../../src/app/Constant/constants.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Constants; });
var Constants = (function () {
    function Constants() {
    }
    Constants.base_url = "http://CTSC00961933501:8090/";
    return Constants;
}());



/***/ }),

/***/ "../../../../../src/app/Report/Adjustments.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Adjustment; });
var Adjustment = (function () {
    function Adjustment() {
    }
    return Adjustment;
}());



/***/ }),

/***/ "../../../../../src/app/Report/ReportType.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportType; });
var ReportType = (function () {
    function ReportType() {
    }
    return ReportType;
}());



/***/ }),

/***/ "../../../../../src/app/Report/project.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Constant_constants__ = __webpack_require__("../../../../../src/app/Constant/constants.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProjectService = (function () {
    function ProjectService(_http) {
        this._http = _http;
        this.choosenProject = new Array();
    }
    ProjectService.prototype.getAllProjects = function () {
        return this._http
            .get(__WEBPACK_IMPORTED_MODULE_4__Constant_constants__["a" /* Constants */].base_url + 'projects/all')
            .map(function (res) { return res.json(); })
            .catch(function (error) {
            var errMsg = (error.message) ? error.message :
                error.status ? error.status + " - " + error.statusText : 'Server error';
            console.error(errMsg); // log to console instead
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(errMsg);
        });
    };
    ProjectService.prototype.choosenProjectlist = function (choosenProject) {
        this.choosenProject = choosenProject;
    };
    ProjectService.prototype.getChoosenProjectlist = function () {
        return this.choosenProject;
    };
    ProjectService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], ProjectService);
    return ProjectService;
}());



/***/ }),

/***/ "../../../../../src/app/Report/report.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Constant_constants__ = __webpack_require__("../../../../../src/app/Constant/constants.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ReportType__ = __webpack_require__("../../../../../src/app/Report/ReportType.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Constant_Utils__ = __webpack_require__("../../../../../src/app/Constant/Utils.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ReportService = (function () {
    function ReportService(_http) {
        this._http = _http;
    }
    ReportService.prototype.getAllReports = function () {
        return this._http
            .get(__WEBPACK_IMPORTED_MODULE_4__Constant_constants__["a" /* Constants */].base_url + 'reports/all')
            .map(function (res) { return res.json(); })
            .catch(function (error) {
            var errMsg = (error.message) ? error.message :
                error.status ? error.status + " - " + error.statusText : 'Server error';
            console.error(errMsg); // log to console instead
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(errMsg);
        });
    };
    ReportService.prototype.deleteReport = function (deleteRecord) {
        return this._http.post(__WEBPACK_IMPORTED_MODULE_4__Constant_constants__["a" /* Constants */].base_url + 'reports/deleteRecords', new __WEBPACK_IMPORTED_MODULE_6__Constant_Utils__["a" /* Utils */]().convertFinalReport(deleteRecord))
            .catch(function (error) {
            var errMsg = (error.message) ? error.message :
                error.status ? error.status + " - " + error.statusText : 'Server error';
            console.error(error); // log to console instead
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(errMsg);
        });
    };
    ReportService.prototype.getReportForProject = function (projects) {
        var query = "?requestBy=";
        for (var i = 0; i < projects.length; i++) {
            query = query + projects[i] + ",";
        }
        return this._http
            .get(__WEBPACK_IMPORTED_MODULE_4__Constant_constants__["a" /* Constants */].base_url + 'reports/project' + query)
            .map(function (res) { return res.json(); })
            .catch(function (error) {
            var errMsg = (error.message) ? error.message :
                error.status ? error.status + " - " + error.statusText : 'Server error';
            console.error(errMsg); // log to console instead
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(errMsg);
        });
    };
    ReportService.prototype.finalReportSave = function (finalRecord) {
        console.log(new __WEBPACK_IMPORTED_MODULE_6__Constant_Utils__["a" /* Utils */]().convertFinalReport(finalRecord));
        return this._http.post(__WEBPACK_IMPORTED_MODULE_4__Constant_constants__["a" /* Constants */].base_url + 'reports/saveRecords', new __WEBPACK_IMPORTED_MODULE_6__Constant_Utils__["a" /* Utils */]().convertFinalReport(finalRecord))
            .catch(function (error) {
            var errMsg = (error.message) ? error.message :
                error.status ? error.status + " - " + error.statusText : 'Server error';
            console.error(error); // log to console instead
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(errMsg);
        });
    };
    ReportService.prototype.convertReport = function (reports) {
        var index = 0;
        for (var i = 0; i < reports.length; i++) {
            if (reports[i].reportAdjustmentEntity.length === 6) {
                index = i;
                console.log("index of the record");
                console.log(index);
                break;
            }
        }
        this.sampleData = reports[index];
        var reportTypes = [];
        console.log("samepl data ");
        console.log(this.sampleData);
        reports.forEach(function (report) {
            console.log("inside conver report");
            var reportType = new __WEBPACK_IMPORTED_MODULE_5__ReportType__["a" /* ReportType */]();
            reportType.reportId = report.reportId;
            var d = new Date(report.allocStartDate);
            reportType.allocStartDate = d.toISOString().split('T')[0];
            d = new Date(report.allocEndDate);
            reportType.allocEndDate = d.toISOString().split('T')[0];
            reportType.city = report.associateCity;
            reportType.associateGrade = report.associateGrade;
            reportType.associateId = report.associateId;
            reportType.associateName = report.associateName;
            reportType.billability = report.billableType;
            reportType.customerId = report.customerId;
            reportType.customerName = report.customerName;
            reportType.employeeId = report.employeeId;
            reportType.forecastedOn = report.forecastedOn;
            reportType.forecastPeriodFrom = report.forecastPeriodFrom;
            reportType.forecastPeriodTo = report.forecastPeriodTo;
            reportType.allocationPercentage = report.allocationPercentage;
            reportType.lastUpdatedTime = report.lastUpdatedTime;
            reportType.lastUpdatedUser = report.lastUpdatedUser;
            reportType.location = report.locationType;
            reportType.poc = report.poc;
            reportType.portfolio = report.portfolio;
            reportType.projectBillability = report.projectBillability;
            reportType.projectId = report.projectId;
            reportType.projectName = report.projectName;
            for (var index_1 = 0; index_1 < report.reportAdjustmentEntity.length; index_1++) {
                reportType["adjustment_" + [index_1 + 1] + "_id"] = report.reportAdjustmentEntity[index_1].id;
                reportType["adjustment_" + [index_1 + 1]] = report.reportAdjustmentEntity[index_1].adjustment;
                if (report.reportAdjustmentEntity[index_1].hours === undefined) {
                    reportType["hours_" + [index_1 + 1]] = 0;
                }
                else {
                    reportType["hours_" + [index_1 + 1]] = report.reportAdjustmentEntity[index_1].hours;
                }
                reportType["rate_" + [index_1 + 1]] = report.reportAdjustmentEntity[index_1].rate;
                reportType["revenue_" + [index_1 + 1]] = report.reportAdjustmentEntity[index_1].revenue;
                reportType["forecastedMonth_" + [index_1 + 1]] = report.reportAdjustmentEntity[index_1].forecastedMonth;
                reportType["forecastedYear_" + [index_1 + 1]] = report.reportAdjustmentEntity[index_1].forecastedYear;
            }
            reportTypes.push(reportType);
        });
        console.log("....");
        console.log(reportTypes);
        return reportTypes;
    };
    ReportService.prototype.convertNewData = function (record) {
        console.log("inside convertData");
        console.log(record);
        var reports = [];
        var report = new __WEBPACK_IMPORTED_MODULE_5__ReportType__["a" /* ReportType */]();
        for (var i = 0; i < __WEBPACK_IMPORTED_MODULE_6__Constant_Utils__["a" /* Utils */].numberOfMonths; i++) {
            report["adjustment_" + [i + 1]] = 0;
            report["hours_" + [i + 1]] = 0;
            report["rate_" + [i + 1]] = 0;
            report["revenue_" + [i + 1]] = 0;
            //	if(record["forecastedMonth_year_"+[i]]!=undefined && record["forecastedMonth_year_"+[i]]!=null){
            //	var tmp=record["forecastedMonth_year_"+[i]].split("-");
            report["forecastedMonth_" + [i + 1]] = this.sampleData.reportAdjustmentEntity[i].forecastedMonth;
            report["forecastedYear_" + [i + 1]] = this.sampleData.reportAdjustmentEntity[i].forecastedYear;
            //	}
            // if(record["adjustment_"+[i]]!=undefined && record["adjustment_"+[i]]!=null){
            // 	report["adjustment_"+[i+1]]=record["adjustment_"+[i]];
            // }
            // if(record["hours_"+[i]]!=undefined && record["hours_"+[i]]!=null){
            // 	report["hours_"+[i+1]]=record["hours_"+[i]];
            // }
            // if(record["rate_"+[i]]!=undefined && record["rate_"+[i]]!=null){
            // 	report["rate_"+[i+1]]=record["rate_"+[i]];
            // }
            // if(record["forecastedMonth_year_"+[i]]!=undefined && record["forecastedMonth_year_"+[i]]!=null){
            // 	var tmp=record["forecastedMonth_year_"+[i]].split("-");
            // 	report["forecastedMonth_"+[i+1]]=tmp[0];
            // 	report["forecastedYear_"+[i+1]]=tmp[1];
            // }
            // if(record["hours_"+[i]]!=undefined && record["hours_"+[i]]!=null){
            // 	report["revenue_"+[i+1]]=(record["hours_"+[i]] - record["adjustment_"+[i]]) * record["rate_"+[i]];
            // }
        }
        report["associateName"] = record["associateName"];
        report["projectName"] = record["projectName"];
        report["associateId"] = record["associateId"];
        report["location"] = record["locationType"];
        report["projectId"] = record["projectId"];
        report["associateGrade"] = record["associateGrade"];
        report["city"] = record["city"];
        report["billability"] = record["billability"];
        report["customerId"] = record["customerId"];
        report["customerName"] = record["customerName"];
        report["portfolio"] = record["portfolio"];
        report["poc"] = record["poc"];
        report["projectBillability"] = record["projectBillability"];
        //report["allocStartDate"]=record["allocStartDate"].toLocaleDateString();
        if (record["allocStartDate"] != undefined) {
            report["allocStartDate"] = record["allocStartDate"].toISOString().split('T')[0];
        }
        if (record["allocEndDate"] != undefined) {
            report["allocEndDate"] = record["allocEndDate"].toISOString().split('T')[0];
            console.log(record["allocEndDate"].toISOString().split('T')[0]);
            console.log(record["allocEndDate"].toISOString());
            console.log((record["allocEndDate"].toDateString()));
        }
        report["allocationPercentage"] = record["allocationPercentage"];
        report.reportDataType = "NewData";
        reports.push(report);
        console.log("final data ...");
        console.log(reports);
        return reports;
    };
    ReportService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], ReportService);
    return ReportService;
}());



/***/ }),

/***/ "../../../../../src/app/Report/report.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Report; });
var Report = (function () {
    function Report() {
    }
    return Report;
}());



/***/ }),

/***/ "../../../../../src/app/Report/reportAdjusments.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportAdjusment; });
var ReportAdjusment = (function () {
    function ReportAdjusment() {
    }
    return ReportAdjusment;
}());



/***/ }),

/***/ "../../../../../src/app/Toast/CustomOption.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomOption; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_ng2_toastr__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var CustomOption = (function (_super) {
    __extends(CustomOption, _super);
    function CustomOption() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        //animate = 'flyRight'; // you can override any options available
        _this.newestOnTop = false;
        _this.showCloseButton = true;
        _this.positionClass = 'toast-top-center';
        return _this;
    }
    return CustomOption;
}(__WEBPACK_IMPORTED_MODULE_0_ng2_toastr__["ToastOptions"]));



/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<rich-grid></rich-grid>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'my-app',
            template: __webpack_require__("../../../../../src/app/app.component.html")
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export toastOptions */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ag_grid_angular_main__ = __webpack_require__("../../../../ag-grid-angular/main.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ag_grid_angular_main___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ag_grid_angular_main__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__rich_grid_example_rich_grid_component__ = __webpack_require__("../../../../../src/app/rich-grid-example/rich-grid.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__date_component_date_component__ = __webpack_require__("../../../../../src/app/date-component/date.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__header_component_header_component__ = __webpack_require__("../../../../../src/app/header-component/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__header_group_component_header_group_component__ = __webpack_require__("../../../../../src/app/header-group-component/header-group.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Report_report_service__ = __webpack_require__("../../../../../src/app/Report/report.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Report_project_service__ = __webpack_require__("../../../../../src/app/Report/project.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_material_button__ = __webpack_require__("../../../material/esm5/button.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_material_progress_spinner__ = __webpack_require__("../../../material/esm5/progress-spinner.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_material_toolbar__ = __webpack_require__("../../../material/esm5/toolbar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_material_icon__ = __webpack_require__("../../../material/esm5/icon.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_material_card__ = __webpack_require__("../../../material/esm5/card.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_material_autocomplete__ = __webpack_require__("../../../material/esm5/autocomplete.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__angular_material_select__ = __webpack_require__("../../../material/esm5/select.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__angular_material_chips__ = __webpack_require__("../../../material/esm5/chips.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__rich_grid_example_dialog_component__ = __webpack_require__("../../../../../src/app/rich-grid-example/dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__angular_material_menu__ = __webpack_require__("../../../material/esm5/menu.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_24_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__Toast_CustomOption__ = __webpack_require__("../../../../../src/app/Toast/CustomOption.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// ag-grid

// rich grid






// application

//material















function toastOptions() {
    return {
        toastLife: 5000,
        dismiss: 'auto',
        showCloseButton: true,
        positionClass: 'toast-top-full-width',
        animate: 'fade',
        maxShown: 5,
        newestOnTop: true,
        enableHTML: true,
        messageClass: '',
        titleClass: ''
    };
}
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_20__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material_button__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material_progress_spinner__["a" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_15__angular_material_icon__["a" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_22__angular_material__["d" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_22__angular_material__["f" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_22__angular_material__["b" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_22__angular_material__["d" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_18__angular_material_select__["a" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_19__angular_material_chips__["a" /* MatChipsModule */],
                __WEBPACK_IMPORTED_MODULE_22__angular_material__["g" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_material_toolbar__["a" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_16__angular_material_card__["a" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_17__angular_material_autocomplete__["a" /* MatAutocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_23__angular_material_menu__["a" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* JsonpModule */],
                __WEBPACK_IMPORTED_MODULE_24_ng2_toastr__["ToastModule"].forRoot(),
                __WEBPACK_IMPORTED_MODULE_4_ag_grid_angular_main__["AgGridModule"].withComponents([
                    __WEBPACK_IMPORTED_MODULE_6__date_component_date_component__["a" /* DateComponent */],
                    __WEBPACK_IMPORTED_MODULE_7__header_component_header_component__["a" /* HeaderComponent */],
                    __WEBPACK_IMPORTED_MODULE_8__header_group_component_header_group_component__["a" /* HeaderGroupComponent */]
                ])
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__rich_grid_example_rich_grid_component__["b" /* RichGridComponent */],
                __WEBPACK_IMPORTED_MODULE_6__date_component_date_component__["a" /* DateComponent */],
                __WEBPACK_IMPORTED_MODULE_7__header_component_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_8__header_group_component_header_group_component__["a" /* HeaderGroupComponent */], __WEBPACK_IMPORTED_MODULE_21__rich_grid_example_dialog_component__["a" /* DialogComponent */], __WEBPACK_IMPORTED_MODULE_5__rich_grid_example_rich_grid_component__["a" /* DialogOverviewExampleDialog */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_9__Report_report_service__["a" /* ReportService */], __WEBPACK_IMPORTED_MODULE_10__Report_project_service__["a" /* ProjectService */], { provide: __WEBPACK_IMPORTED_MODULE_24_ng2_toastr__["ToastOptions"], useClass: __WEBPACK_IMPORTED_MODULE_25__Toast_CustomOption__["a" /* CustomOption */] }],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* AppComponent */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_5__rich_grid_example_rich_grid_component__["b" /* RichGridComponent */], __WEBPACK_IMPORTED_MODULE_5__rich_grid_example_rich_grid_component__["a" /* DialogOverviewExampleDialog */]],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/date-component/date.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".filter {\n    margin:2px\n}\n\n.dd {\n    width:30px\n}\n\n.mm {\n    width:30px\n}\n\n.yyyy {\n    width:60px\n}\n\n.reset {\n    padding: 2px;\n    background-color: red;\n    border-radius: 3px;\n    font-size: 10px;\n    margin-right: 5px;\n    color: white\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/date-component/date.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"filter\">\n    <span class=\"reset\" (click)=\"onResetDate()\">x</span>\n    <input class=\"dd\" (ngModelChange)=\"onDateChanged('dd', $event)\" placeholder=\"dd\" [(ngModel)]=\"dd\" maxLength=\"2\"/>/\n    <input class=\"mm\" (ngModelChange)=\"onDateChanged('mm', $event)\" placeholder=\"mm\" [(ngModel)]=\"mm\" maxLength=\"2\"/>/\n    <input class=\"yyyy\" (ngModelChange)=\"onDateChanged('yyyy', $event)\" placeholder=\"yyyy\" [(ngModel)]=\"yyyy\" maxLength=\"4\"/>\n</div>"

/***/ }),

/***/ "../../../../../src/app/date-component/date.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DateComponent = (function () {
    function DateComponent() {
        this.dd = '';
        this.mm = '';
        this.yyyy = '';
    }
    DateComponent.prototype.agInit = function (params) {
        this.params = params;
    };
    DateComponent.prototype.ngOnDestroy = function () {
        console.log("Destroying DateComponent");
    };
    DateComponent.prototype.onResetDate = function () {
        this.dd = '';
        this.mm = '';
        this.yyyy = '';
        this.date = null;
        this.params.onDateChanged();
    };
    DateComponent.prototype.onDateChanged = function (on, newValue) {
        this.date = this.parseDate(on === 'dd' ? newValue : this.dd, on === 'mm' ? newValue : this.mm, on === 'yyyy' ? newValue : this.yyyy);
        this.params.onDateChanged();
    };
    DateComponent.prototype.getDate = function () {
        return this.date;
    };
    DateComponent.prototype.setDate = function (date) {
        this.dd = date.getDate() + '';
        this.mm = (date.getMonth() + 1) + '';
        this.yyyy = date.getFullYear() + '';
        this.date = date;
        this.params.onDateChanged();
    };
    //*********************************************************************************
    //          INTERNAL LOGIC
    //*********************************************************************************
    DateComponent.prototype.parseDate = function (dd, mm, yyyy) {
        //If any of the three input date fields are empty, stop and return null
        if (dd.trim() === '' || mm.trim() === '' || yyyy.trim() === '') {
            return null;
        }
        var day = Number(dd);
        var month = Number(mm);
        var year = Number(yyyy);
        var date = new Date(year, month - 1, day);
        //If the date is not valid
        if (isNaN(date.getTime())) {
            return null;
        }
        //Given that new Date takes any garbage in, it is possible for the user to specify a new Date
        //like this (-1, 35, 1) and it will return a valid javascript date. In this example, it will
        //return Sat Dec 01    1 00:00:00 GMT+0000 (GMT) - Go figure...
        //To ensure that we are not letting non sensical dates to go through we check that the resultant
        //javascript date parts (month, year and day) match the given date fields provided as parameters.
        //If the javascript date parts don't match the provided fields, we assume that the input is non
        //sensical... ie: Day=-1 or month=14, if this is the case, we return null
        //This also protects us from non sensical dates like dd=31, mm=2 of any year
        if (date.getDate() != day || date.getMonth() + 1 != month || date.getFullYear() != year) {
            return null;
        }
        return date;
    };
    DateComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ag-full-width-grid',
            template: __webpack_require__("../../../../../src/app/date-component/date.component.html"),
            styles: [__webpack_require__("../../../../../src/app/date-component/date.component.css")],
        })
    ], DateComponent);
    return DateComponent;
}());



/***/ }),

/***/ "../../../../../src/app/header-component/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".customHeaderMenuButton{\n    margin-top: 5px;\n    margin-left: 4px;\n    float: left;\n}\n\n.customHeaderLabel{\n    margin-left: 5px;\n    margin-top: 3px;\n    float: left;\n}\n\n.customSortDownLabel{\n    float: left;\n    margin-left: 10px;\n    margin-top: 5px;\n}\n\n.customSortUpLabel{\n    float: left;\n    margin-left: 3px;\n    margin-top: 4px;\n}\n\n.customSortRemoveLabel{\n    float: left;\n    font-size: 11px;\n    margin-left: 3px;\n    margin-top: 6px;\n}\n\n.active {\n    color: cornflowerblue;\n}\n\n.hidden { display:none; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header-component/header.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n    <div [hidden]=\"!params.enableMenu\" class=\"customHeaderMenuButton\" (click)=\"onMenuClick()\"><i class=\"{{'fa ' + params.menuIcon}}\"></i></div>\n    <div class=\"customHeaderLabel\">{{params.displayName}}</div>\n    <div [hidden]=\"!params.enableSorting\" class=\"{{'customSortDownLabel'+ (this.sorted === 'desc' ? ' active' : '') }}\" (click)=\"onSortRequested('desc', $event)\">\n        <i class=\"fa fa-long-arrow-down\"></i>\n    </div>\n    <div [hidden]=\"!params.enableSorting\" class=\"{{'customSortUpLabel'+ (this.sorted === 'asc' ? ' active' : '') }}\" (click)=\"onSortRequested('asc', $event)\">\n        <i class=\"fa fa-long-arrow-up\"></i>\n    </div>\n    <div [hidden]=\"!params.enableSorting\" class=\"{{'customSortRemoveLabel'+ (this.sorted === '' ? ' active' : '') }}\" (click)=\"onSortRequested('', $event)\">\n        <i class=\"fa fa-times\"></i>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/header-component/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = (function () {
    function HeaderComponent(elementRef) {
        this.elementRef = elementRef;
    }
    HeaderComponent.prototype.agInit = function (params) {
        this.params = params;
        this.params.column.addEventListener('sortChanged', this.onSortChanged.bind(this));
        this.onSortChanged();
    };
    HeaderComponent.prototype.ngOnDestroy = function () {
        console.log("Destroying HeaderComponent");
    };
    HeaderComponent.prototype.onMenuClick = function () {
        this.params.showColumnMenu(this.querySelector('.customHeaderMenuButton'));
    };
    HeaderComponent.prototype.onSortRequested = function (order, event) {
        this.params.setSort(order, event.shiftKey);
    };
    ;
    HeaderComponent.prototype.onSortChanged = function () {
        if (this.params.column.isSortAscending()) {
            this.sorted = 'asc';
        }
        else if (this.params.column.isSortDescending()) {
            this.sorted = 'desc';
        }
        else {
            this.sorted = '';
        }
    };
    ;
    HeaderComponent.prototype.querySelector = function (selector) {
        return this.elementRef.nativeElement.querySelector('.customHeaderMenuButton', selector);
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("../../../../../src/app/header-component/header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/header-component/header.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/header-group-component/header-group.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".customHeaderLabel{\n    margin-left: 5px;\n    margin-top: 3px;\n    float: left;\n}\n\n.customExpandButton{\n    float:right;\n    margin-top: 5px;\n    margin-left: 3px;\n}\n\n.expanded {\n    -webkit-animation-name: toExpanded;\n            animation-name: toExpanded;\n    -webkit-animation-duration: 1s;\n            animation-duration: 1s; /* IE 9 */\n    -webkit-transform: rotate(180deg); /* Chrome, Safari, Opera */\n    transform: rotate(180deg);\n}\n\n.collapsed {\n    color: cornflowerblue;\n    -webkit-animation-name: toCollapsed;\n            animation-name: toCollapsed;\n    -webkit-animation-duration: 1s;\n            animation-duration: 1s; /* IE 9 */\n    -webkit-transform: rotate(0deg); /* Chrome, Safari, Opera */\n    transform: rotate(0deg);\n}\n\n@-webkit-keyframes  toExpanded{\n    from {\n        color: cornflowerblue; /* IE 9 */\n        -webkit-transform: rotate(0deg); /* Chrome, Safari, Opera */\n        transform: rotate(0deg);\n    }\n    to {\n        color: black; /* IE 9 */\n        -webkit-transform: rotate(180deg); /* Chrome, Safari, Opera */\n        transform: rotate(180deg);\n    }\n}\n\n@keyframes  toExpanded{\n    from {\n        color: cornflowerblue; /* IE 9 */\n        -webkit-transform: rotate(0deg); /* Chrome, Safari, Opera */\n        transform: rotate(0deg);\n    }\n    to {\n        color: black; /* IE 9 */\n        -webkit-transform: rotate(180deg); /* Chrome, Safari, Opera */\n        transform: rotate(180deg);\n    }\n}\n\n@-webkit-keyframes toCollapsed{\n    from {\n        color: black; /* IE 9 */\n        -webkit-transform: rotate(180deg); /* Chrome, Safari, Opera */\n        transform: rotate(180deg);\n    }\n    to {\n        color: cornflowerblue; /* IE 9 */\n        -webkit-transform: rotate(0deg); /* Chrome, Safari, Opera */\n        transform: rotate(0deg);\n    }\n}\n\n@keyframes toCollapsed{\n    from {\n        color: black; /* IE 9 */\n        -webkit-transform: rotate(180deg); /* Chrome, Safari, Opera */\n        transform: rotate(180deg);\n    }\n    to {\n        color: cornflowerblue; /* IE 9 */\n        -webkit-transform: rotate(0deg); /* Chrome, Safari, Opera */\n        transform: rotate(0deg);\n    }\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header-group-component/header-group.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n    <div class=\"customHeaderLabel\"> {{this.params.displayName}}</div>\n    <div (click)=\"expandOrCollapse()\" class=\"{{'customExpandButton' + (this.expanded ?  ' expanded': ' collapsed')}}\"><i class=\"fa fa-arrow-right\" ></i></div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/header-group-component/header-group.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderGroupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HeaderGroupComponent = (function () {
    function HeaderGroupComponent() {
    }
    HeaderGroupComponent.prototype.agInit = function (params) {
        this.params = params;
        this.params.columnGroup.getOriginalColumnGroup().addEventListener('expandedChanged', this.onExpandChanged.bind(this));
    };
    HeaderGroupComponent.prototype.ngOnDestroy = function () {
        console.log("Destroying HeaderComponent");
    };
    HeaderGroupComponent.prototype.expandOrCollapse = function () {
        this.params.setExpanded(!this.expanded);
    };
    ;
    HeaderGroupComponent.prototype.onExpandChanged = function () {
        this.expanded = this.params.columnGroup.getOriginalColumnGroup().isExpanded();
    };
    HeaderGroupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("../../../../../src/app/header-group-component/header-group.component.html"),
            styles: [__webpack_require__("../../../../../src/app/header-group-component/header-group.component.css")]
        })
    ], HeaderGroupComponent);
    return HeaderGroupComponent;
}());



/***/ }),

/***/ "../../../../../src/app/rich-grid-example/dialog-overview-example-dialog.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\" role=\"header\" style=\"background: #1565C0\">\r\n    <mat-toolbar-row> \r\n      <img src=\"https://www.cognizant.com/content/dam/cognizant_foundation/Dotcomimage/COG-Logo-White.svg\" style=\"width: 80px;\">\r\n    \r\n      <span style=\"padding-left: 33%\">Add New Forecast Record</span> \r\n      <span class=\"headder-spacer\"></span> \r\n      <!-- <span style=\"width: 80px;\">\r\n        <img *ngIf=\"hideprogress == false\" src=\"https://loading.io/spinners/double-ring/lg.double-ring-spinner.gif\" style=\"width: 80px;\">\r\n      </span>  -->\r\n      <div *ngIf=\"hideprogress == false\" class=\"loader\" ></div>\r\n    </mat-toolbar-row> </mat-toolbar>\r\n<br>\r\n<br>\r\n<form #form='ngForm' ngNativeValidate   (ngSubmit)='submitForm(form.value)' style=\"width: auto; margin-left: 30%; \">\r\n<div mat-dialog-content>\r\n<table >\r\n  <tr>\r\n    <td>\r\n      <P style=\"font-weight: bold\">AssociateId  </P>\r\n      <mat-form-field>\r\n        <input required matInput type=\"number\" [(ngModel)]=\"data.associateId\"  name=\"associateId\">\r\n      </mat-form-field>\r\n    </td>\r\n    <div class=\"addRow\"></div>\r\n    <td>\r\n       <p style=\"font-weight: bold\">AssociateName</p>\r\n        <mat-form-field>\r\n          <input required matInput [(ngModel)]=\"data.associateName\" name=\"associateName\">\r\n        </mat-form-field>\r\n      </td>\r\n  </tr>\r\n   <tr>\r\n<td>\r\n    <p style=\"font-weight: bold\">ProjectName</p>\r\n    <mat-form-field>\r\n        <mat-select >\r\n          <mat-option *ngFor=\"let project of projects\" [(ngModel)]=\"data.projectName\"  (click)=\"onChange(project.projectId,project.projectName)\" [(value)]=\"project.projectName\" name=\"projectName\" ngDefaultControl>\r\n            {{ project.projectName }}\r\n          </mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n</td>\r\n<td class=\"addRow\"></td>\r\n<td>\r\n    <p style=\"font-weight: bold\">ProjectID</p>\r\n    <mat-form-field>\r\n        <input  required type=\"number\" matInput [(ngModel)]=\"selectedProjectID\" name=\"projectId\" readonly>\r\n    </mat-form-field>\r\n</td>\r\n</tr>\r\n<tr>\r\n<td> <p style=\"font-weight: bold\">CustomerId</p>\r\n  <mat-form-field>\r\n    <input  type=\"number\" matInput [(ngModel)]=\"data.customerId\"  name=\"customerId\">\r\n  </mat-form-field></td>\r\n<td class=\"addRow\"></td>\r\n<td><p style=\"font-weight: bold\">CustomerName</p>\r\n  <mat-form-field>\r\n    <input matInput required [(ngModel)]=\"data.customerName\" name=\"customerName\">\r\n  </mat-form-field></td>\r\n      </tr>\r\n      <tr>\r\n        <td>\r\n          <p style=\"font-weight: bold\">Location Type</p>\r\n          <mat-form-field>\r\n              <mat-select >\r\n                <mat-option *ngFor=\"let location of locationType\" [(ngModel)]=\"data.locationType\"  (click)=\"onChangeLocation(location)\"  [value]=\"location\" name=\"locationType\" ngDefaultControl>\r\n                  {{ location }}\r\n                </mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n          </td>\r\n        <td class=\"addRow\"></td>\r\n        <td><p style=\"font-weight: bold\">City</p>\r\n          <!-- <mat-form-field>\r\n            <input matInput required [(ngModel)]=\"data.city\" name=\"city\">\r\n          </mat-form-field> -->\r\n          <mat-form-field>\r\n              <mat-select >\r\n                <mat-option *ngFor=\"let city of cityList\" [(ngModel)]=\"data.city\"  (click)=\"onChangecity(city)\"  [value]=\"city\" name=\"city\" ngDefaultControl>\r\n                  {{ city }}\r\n                </mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n        </td>\r\n      </tr>\r\n      <tr>\r\n          <td>\r\n              <p style=\"font-weight: bold\">Allocation Percentage</p>\r\n              <mat-form-field>\r\n                <input matInput min=\"1\" max=\"100\" required [(ngModel)]=\"data.allocationPercentage\"  name=\"allocationPercentage\">\r\n              </mat-form-field>\r\n          </td>\r\n          <td class=\"addRow\"></td>\r\n          <td>\r\n              <p style=\"font-weight: bold\">HR Grade</p>\r\n              <mat-form-field>\r\n                <input matInput [(ngModel)]=\"data.associateGrade\" name=\"associateGrade\">\r\n              </mat-form-field>\r\n          </td>\r\n      </tr>\r\n      <tr>\r\n          <td>\r\n              <p style=\"font-weight: bold\">Billability</p>\r\n              <!-- <mat-form-field>\r\n                <input matInput [(ngModel)]=\"data.billability\" name=\"billability\">\r\n              </mat-form-field> -->\r\n              <mat-form-field>\r\n                  <mat-select >\r\n                    <mat-option *ngFor=\"let billability of billabilityList\" [(ngModel)]=\"data.billability\"  (click)=\"onChangebillability(billability)\"  [value]=\"billability\" name=\"billability\" ngDefaultControl>\r\n                      {{ billability }}\r\n                    </mat-option>\r\n                  </mat-select>\r\n                </mat-form-field>\r\n          </td>\r\n          <td class=\"addRow\"></td>\r\n          <td>\r\n              <p style=\"font-weight: bold\">Portfolio</p>\r\n              <mat-form-field>\r\n                <input matInput [(ngModel)]=\"data.portfolio\" name=\"portfolio\">\r\n              </mat-form-field>\r\n          </td>\r\n      </tr>\r\n      <tr>\r\n        <td> <p style=\"font-weight: bold\">POC</p>\r\n          <mat-form-field>\r\n            <input matInput [(ngModel)]=\"data.poc\" name=\"poc\">\r\n          </mat-form-field></td>\r\n        <td class=\"addRow\"></td>\r\n        <td><p style=\"font-weight: bold\">ProjectBillability</p>\r\n          <mat-form-field>\r\n            <input matInput [(ngModel)]=\"data.projectBillability\"  name=\"projectBillability\">\r\n          </mat-form-field>\r\n        </td>\r\n      </tr>\r\n      <tr>\r\n          <td><p style=\"font-weight: bold\">Allocation StartDate</p>\r\n            <mat-form-field>\r\n              <input matInput  [matDatepicker]=\"allocStartDate\" [ngModel]  name=\"allocStartDate\"  readonly >\r\n              <mat-datepicker-toggle matSuffix [for]=\"allocStartDate\"></mat-datepicker-toggle>\r\n              <mat-datepicker #allocStartDate ></mat-datepicker>\r\n            </mat-form-field></td>\r\n          <td class=\"addRow\"></td>\r\n          <td>\r\n              <p style=\"font-weight: bold\">Allocation EndDate</p>\r\n              <mat-form-field>\r\n                <input matInput  [matDatepicker]=\"allocEndDate\" [ngModel]  name=\"allocEndDate\" readonly>\r\n                <mat-datepicker-toggle matSuffix [for]=\"allocEndDate\"></mat-datepicker-toggle>\r\n                <mat-datepicker #allocEndDate ></mat-datepicker>\r\n              </mat-form-field>\r\n            \r\n          </td>\r\n        </tr>\r\n</table>\r\n  \r\n  <!-- <p>Location Type</p>\r\n  <mat-form-field>\r\n    <input required  matInput [(ngModel)]=\"data.locationType\" name=\"locationType\">\r\n  </mat-form-field> -->\r\n  \r\n<!-- <div *ngFor=\"let rowData of sampleData;  let i=index\">\r\n       <p>{{rowData.forecastedMonth}}</p> \r\n    <mat-form-field>\r\n        <input matInput [(ngModel)]=\"rowData.forecastedMonth+'-'+rowData.forecastedYear\" name=\"{{'forecastedMonth_year_'+i}}\" readonly=\"readonly\">\r\n    </mat-form-field>\r\n      <p>Hours</p>\r\n      <mat-form-field>\r\n        <input  type=\"number\" matInput  [ngModel] name=\"{{'hours_'+i}}\">\r\n      </mat-form-field>\r\n     <p>Adjustment</p>\r\n      <mat-form-field>\r\n        <input  type=\"number\" matInput [ngModel] name=\"{{'adjustment_'+i}}\">\r\n      </mat-form-field>\r\n      <p>Rate</p>\r\n      <mat-form-field>\r\n        <input  type=\"number\" matInput [ngModel]  name=\"{{'rate_'+i}}\">\r\n      </mat-form-field> \r\n     \r\n  </div>    -->\r\n \r\n</div>\r\n<!-- <div mat-dialog-actions>\r\n  <button mat-raised-button (click)=\"onNoClick()\">No Thanks</button>\r\n  <button mat-raised-button [mat-dialog-close]=\"data\" >Ok</button>\r\n</div> -->\r\n<br>\r\n<br>\r\n<div style=\"padding-left: 10%\">\r\n<button  mat-stroked-button type='submit'>Submit</button>\r\n<span style=\"padding-left: 9%\"></span> \r\n<button  mat-stroked-button (click)=\"onNoClick()\">Cancel</button>\r\n</div>\r\n</form>\r\n<!-- Copyright 2018 Google Inc. All Rights Reserved.\r\n    Use of this source code is governed by an MIT-style license that\r\n    can be found in the LICENSE file at http://angular.io/license -->"

/***/ }),

/***/ "../../../../../src/app/rich-grid-example/dialog.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".overlay {\r\n  position: fixed;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  background-color: rgba(0, 0, 0, 0.5);\r\n  z-index: 999;\r\n}\r\n\r\n.dialog {\r\n  z-index: 1000;\r\n  position: fixed;\r\n  right: 0;\r\n  left: 0;\r\n  top: 20px;\r\n  margin-right: auto;\r\n  margin-left: auto;\r\n  min-height: 200px;\r\n  max-width: 2000px;\r\n  background-color: #fff;\r\n  padding: 12px;\r\n  -webkit-box-shadow: 0 7px 8px -4px rgba(0, 0, 0, 0.2), 0 13px 19px 2px rgba(0, 0, 0, 0.14), 0 5px 24px 4px rgba(0, 0, 0, 0.12);\r\n          box-shadow: 0 7px 8px -4px rgba(0, 0, 0, 0.2), 0 13px 19px 2px rgba(0, 0, 0, 0.14), 0 5px 24px 4px rgba(0, 0, 0, 0.12);\r\n}\r\n\r\n.ng-invalid:not(form)  {\r\n  border-left: 5px solid #a94442; /* red */\r\n}\r\n\r\n/* .ng-valid[required], .ng-valid.required  {\r\n  border-left: 5px solid #42A948; // green \r\n} \r\n*/\r\n\r\n@media (min-width: 100px) {\r\n  .dialog {\r\n    top: 40px;\r\n  }\r\n}\r\n\r\n.dialog__close-btn {\r\n  border: 0;\r\n  background: none;\r\n  color: #2d2d2d;\r\n  position: absolute;\r\n  top: 8px;\r\n  right: 8px;\r\n  font-size: 1.2em;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/rich-grid-example/dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<div [@dialog] *ngIf=\"visible\" class=\"dialog\">\r\n    <ng-content></ng-content>\r\n    <button *ngIf=\"closable\" (click)=\"close()\" aria-label=\"Close\" class=\"dialog__close-btn\">X</button>\r\n  </div>\r\n  <div *ngIf=\"visible\" class=\"overlay\" (click)=\"close()\"></div>"

/***/ }),

/***/ "../../../../../src/app/rich-grid-example/dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__("../../../animations/esm5/animations.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DialogComponent = (function () {
    function DialogComponent() {
        this.closable = true;
        this.visibleChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    DialogComponent.prototype.ngOnInit = function () { };
    DialogComponent.prototype.close = function () {
        this.visible = false;
        this.visibleChange.emit(this.visible);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], DialogComponent.prototype, "closable", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], DialogComponent.prototype, "visible", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], DialogComponent.prototype, "visibleChange", void 0);
    DialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dialog',
            template: __webpack_require__("../../../../../src/app/rich-grid-example/dialog.component.html"),
            styles: [__webpack_require__("../../../../../src/app/rich-grid-example/dialog.component.css")],
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["m" /* trigger */])('dialog', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["l" /* transition */])('void => *', [
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["k" /* style */])({ transform: 'scale3d(.3, .3, .3)' }),
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])(100)
                    ]),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["l" /* transition */])('* => void', [
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])(100, Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["k" /* style */])({ transform: 'scale3d(.0, .0, .0)' }))
                    ])
                ])
            ]
        }),
        __metadata("design:paramtypes", [])
    ], DialogComponent);
    return DialogComponent;
}());



/***/ }),

/***/ "../../../../../src/app/rich-grid-example/proficiency-renderer.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".ag-fresh .duplicated-row {\n    background-color: lightgreen !important;\n}\n .ag-fresh .duplicated_row_error {\n    background-color: lightcoral !important;\n}\n .ag-menu {\n    z-index: 50;\n}\n .div-outer-div {\n    display: inline-block;\n    height: 100%;\n    width: 100%;\n}\n .div-percent-value {\n    position: absolute;\n    padding-left: 4px;\n    font-weight: bold;\n    font-size: 13px;\n    z-index: 10;\n}\n label {\n    font-weight: normal !important;\n    background-color:white;\n}\n #top {\n    width: 100%;\n    margin: 0;\n    padding: 0;\n    background-color:#C5E1A5;\n    top: 0;\n    left: 0;\n }\n .div-percent-bar {\n    display: inline-block;\n    height: 100%;\n    position: relative;\n    z-index: 0;\n}\n .ag-cell {\n    padding-top: 2px !important;\n    padding-bottom: 2px !important;\n}\n .loader{\n    position: fixed;\n     left: 25%;\n     top: 40%;\n     width: 50%;\n     height: 50%;\n     z-index: 9999;\n     background: url('https://loading.io/spinners/double-ring/lg.double-ring-spinner.gif') 50% 50% no-repeat rgb(249,249,249);\n   }\n\n\n   ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/rich-grid-example/rich-grid.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"overlay\" align=\"center\" *ngIf=\"hideprogress == false\">\n\t<img  src=\"images/spinner_2.gif\" style=\"width: 80px;\">\n</div>\n<mat-toolbar color=\"primary\" role=\"header\" style=\"background: #1565C0\">\n<mat-toolbar-row> \n\t<img src=\"https://www.cognizant.com/content/dam/cognizant_foundation/Dotcomimage/COG-Logo-White.svg\" style=\"width: 80px;\">\n\n\t<span style=\"padding-left: 33%\">Forecast & Reports</span> \n\t<span class=\"headder-spacer\"></span> \n</mat-toolbar-row> </mat-toolbar>\n<div style=\"padding: 5px 5px 10px 10px\">\n\t\t\n\t<div style=\"padding-top: 5px;\"> \n\t\t<mat-chip-list #chipList>\n\t\t\t<mat-chip *ngIf=\"showALLChip\" style=\"margin-right: 5px;margin-top: 5px;\" [selectable]=\"selectable\"\n\t\t\t\t\t\t[removable]=\"removable\" (remove)=\"removeAllProjectSelection()\">\n\t\t\t\tAll\n\t\t\t\t<mat-icon matChipRemove *ngIf=\"removable\">cancel</mat-icon>\n\t\t\t</mat-chip>\n\t\t\t<mat-chip style=\" margin-right: 5px;margin-top: 5px;\" *ngFor=\"let project of chosenProject\" [selectable]=\"selectable\"\n\t\t\t\t\t\t[removable]=\"removable\" (remove)=\"remove(project)\">\n\t\t\t\t{{project.projectName}}\n\t\t\t\t<mat-icon matChipRemove *ngIf=\"removable\">cancel</mat-icon>\n\t\t\t</mat-chip>\n\t\t\t<input matInput placeholder=\"Filter by project\" class=\"head-control\"\n\t\t\t\t\t[matChipInputFor]=\"chipList\"\n\t\t\t\t\t[matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\"\n\t\t\t\t\t[matChipInputAddOnBlur]=\"addOnBlur\"\n\t\t\t\t\t(matChipInputTokenEnd)=\"add($event)\"\n\t\t\t\t\t[matAutocomplete]=\"auto2\" [formControl]=\"projectCtrl\" style=\"margin: 0px\" (focus)=\"focusOnProjectAutoComplete()\"/>\n\t\t\t<span class=\"controls-spacing\"></span> \t\t\t\n\t\t</mat-chip-list>\t\n\t\t<mat-autocomplete #auto2=\"matAutocomplete\"> \t\t\t \n\t\t\t<mat-option *ngFor=\"let project of filteredProjectsObs | async\"\n\t\t\t\t[value]=\"project.projectId\" (click)=\"autoComplete(project)\" > \n\t\t\t\t<span>{{project.projectName }}</span> \n\t\t\t</mat-option> \n\t\t\t<mat-option [value]=\"all\" (click)=\"listAllProject()\" > \n\t\t\t\t<span>All</span> \n\t\t\t</mat-option>\n\t\t</mat-autocomplete>\n\t</div>\n\n\t<div style=\"padding-top: 5px;\">\t\t\t\n\t\t<input matInput class=\"head-control\" (keyup)=\"onQuickFilterChanged($event)\" type=\"text\"\n\t\t\tid=\"quickFilterInput\" placeholder=\"Filter by data\" style=\"width: 50%;\" />\t\t\n\t\t<div style=\"float: right\" >\n\t\t\t<span class=\"controls-spacing\"></span> \n\t\t\t<button mat-stroked-button (click)=\"onBtExport()\">Export Current Rows to Excel</button>\n\t\t\t<span class=\"controls-spacing\"></span>\n\t\t\t<button mat-stroked-button (click)=\"getALLReports()\">Export All Data To Excel</button>\n\t\t</div>\n\t</div>\n\n\t<div style=\"padding-top: 5px;\">\n\t\t<button mat-stroked-button (click)=\"saveUpdated()\">Save</button>\n\t\t<span class=\"controls-spacing\"></span>\n\t\t<button mat-stroked-button   (click)=\"openDialog()\">Add Row</button>\n\t\t<span class=\"controls-spacing\"></span>\n\t\t<button mat-stroked-button (click)=\"onDeleteRow()\" [disabled]=\"!selectedRow\">Delete Row</button>\n\t\t<span class=\"controls-spacing\"></span>\n\t\t<button mat-stroked-button (click)=\"onDuplicateRow()\" [disabled]=\"!selectedRow\">Duplicate Row</button>\n\t</div>\n</div>\n<!-- [getMainMenuItems]=\"getMainMenuItems\"\n\t\t[postProcessPopup]=\"postProcessPopup\" -->\n<!-- [showToolPanel]=\"true\" -->\n<div style=\"margin: 0px 10px 0px 10px\">\n\t<ag-grid-angular style=\"width: 100%; height: 500px;\" class=\"ag-fresh\"\n\t\t#agGrid\n\t\tid=\"myGrid\"\n\t\t[overlayNoRowsTemplate]=\"overlayNoRowsTemplate\" \n    \t[defaultColDef]=\"defaultColDef\"\n    \t[showToolPanel]=\"false\"\n\t\t[enableFilter]=\"true\"\n\t\t[rowClassRules]=\"rowClassRules\" [gridOptions]=\"gridOptions\"\n\t\t[columnDefs]=\"columnDefs\" [showToolPanel]=\"showToolPanel\"\n\t\t[rowData]=\"rowData\" [excelStyles]=\"excelStyles\" enableColResize\n\t\t[enableSorting]=\"true\" enableFilter groupHeaders\n\t\tsuppressRowClickSelection toolPanelSuppressGroups\n\t\ttoolPanelSuppressValues rowHeight=\"25\" rowSelection=\"single\"\n\t\t[sortingOrder]=\"sortingOrder\" (modelUpdated)=\"onModelUpdated()\"\n\t\t(cellClicked)=\"onCellClicked($event)\"\n\t\t(cellDoubleClicked)=\"onCellDoubleClicked($event)\"\n\t\t(cellContextMenu)=\"onCellContextMenu($event)\"\n\t\t(cellValueChanged)=\"onCellValueChanged($event)\"\n\t\t(cellFocused)=\"onCellFocused($event)\"\n\t\t(rowSelected)=\"onRowSelected($event)\"\n\t\t(selectionChanged)=\"onSelectionChanged($event)\"\n\t\t(beforeFilterChanged)=\"onBeforeFilterChanged()\"\n\t\t(afterFilterChanged)=\"onAfterFilterChanged()\"\n\t\t(filterModified)=\"onFilterModified()\"\n\t\t(beforeSortChanged)=\"onBeforeSortChanged()\"\n\t\t(afterSortChanged)=\"onAfterSortChanged()\"\n\t\t(virtualRowRemoved)=\"onVirtualRowRemoved($event)\"\n\t\t(rowClicked)=\"onRowClicked($event)\" (gridReady)=\"onReady($event)\"\n\t\t(getSelectedRows)=\"getSelectedRows()\"\n\t\t(columnEverythingChanged)=\"onColumnEvent($event)\"\n\t\t(columnRowGroupChanged)=\"onColumnEvent($event)\"\n\t\t(columnValueChanged)=\"onColumnEvent($event)\"\n\t\t(columnMoved)=\"onColumnEvent($event)\"\n\t\t(columnVisible)=\"onColumnEvent($event)\"\n\t\t(columnGroupOpened)=\"onColumnEvent($event)\"\n\t\t(columnResized)=\"onColumnEvent($event)\"\n\t\t(columnPinnedCountChanged)=\"onColumnEvent($event)\">\n\t</ag-grid-angular>\n</div>"

/***/ }),

/***/ "../../../../../src/app/rich-grid-example/rich-grid.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return RichGridComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogOverviewExampleDialog; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_cdk_keycodes__ = __webpack_require__("../../../cdk/esm5/keycodes.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ag_grid_enterprise_main__ = __webpack_require__("../../../../ag-grid-enterprise/main.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ag_grid_enterprise_main___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ag_grid_enterprise_main__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__header_group_component_header_group_component__ = __webpack_require__("../../../../../src/app/header-group-component/header-group.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__date_component_date_component__ = __webpack_require__("../../../../../src/app/date-component/date.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__header_component_header_component__ = __webpack_require__("../../../../../src/app/header-component/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Report_report_service__ = __webpack_require__("../../../../../src/app/Report/report.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Report_project_service__ = __webpack_require__("../../../../../src/app/Report/project.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Report_ReportType__ = __webpack_require__("../../../../../src/app/Report/ReportType.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__Report_Adjustments__ = __webpack_require__("../../../../../src/app/Report/Adjustments.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__Constant_Utils__ = __webpack_require__("../../../../../src/app/Constant/Utils.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




// only import this if you are using the ag-Grid-Enterprise








//import { UpdateReportDialog } from "../Dialog/update-report-dialog.component";



var RichGridComponent = (function () {
    function RichGridComponent(_reportservice, _projectService, dialog, toastr, vcr) {
        var _this = this;
        this.dialog = dialog;
        this.toastr = toastr;
        this.chosenProject = new Array();
        this.chosenProjectArray = new Array();
        this.HeaderGroupComponent = __WEBPACK_IMPORTED_MODULE_5__header_group_component_header_group_component__["a" /* HeaderGroupComponent */];
        this.hideprogress = true;
        this.updatedValues = [];
        this.updatedRowData = [];
        this.selectedRow = false;
        this.addNewRow = false;
        this.editable = false;
        this.showALLChip = false;
        this.duplicaterowData = [];
        //public parentRowData: ReportType[]=[];
        this.errorData = [];
        this.parentRowData = new Map();
        // Chips Config
        this.selectable = true;
        this.removable = true;
        //addOnBlur: boolean = true;
        // Enter, comma
        this.separatorKeysCodes = [__WEBPACK_IMPORTED_MODULE_3__angular_cdk_keycodes__["g" /* ENTER */], __WEBPACK_IMPORTED_MODULE_3__angular_cdk_keycodes__["c" /* COMMA */]];
        // we pass an empty gridOptions in, so we can grab the api out
        this.toastr.setRootViewContainerRef(vcr);
        // this. toastr.op = { positionClass: 'toast-bottom-right' }
        this._reportservice = _reportservice;
        this._projectService = _projectService;
        this.overlayNoRowsTemplate = "<span style=\"padding: 10px; border: 1px solid #fff; background: #E57373; color: white; border-radius: 10px;\">Please filter by Projects option(in top left) to view Reports data</span>";
        this.gridOptions = {};
        this.defaultColDef = {
            enableValue: true,
            enableRowGroup: true,
            enablePivot: true
        };
        this.createRowData();
        this.createColumnDefs();
        this.showGrid = true;
        this.addNewRow = true;
        this.gridOptions.dateComponentFramework = __WEBPACK_IMPORTED_MODULE_6__date_component_date_component__["a" /* DateComponent */];
        this.gridOptions.defaultColDef = {
            editable: false,
            width: 100,
            headerComponentFramework: __WEBPACK_IMPORTED_MODULE_7__header_component_header_component__["a" /* HeaderComponent */],
            headerComponentParams: {
                menuIcon: 'fa-bars'
            }
        };
        //Control
        this.projectCtrl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]();
        this.projectCtrl.valueChanges.subscribe(function (value) {
            console.log("test .." + value);
            _this.filteredProjects = _this.projects.filter(function (project) {
                return project.projectName.toLowerCase().indexOf((value + "").toLowerCase()) !== -1;
            });
            _this.filteredProjectsObs = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */](function (observer) {
                observer.next(_this.filteredProjects);
            });
        });
        this.rowClassRules = {
            "duplicated-row": function (params) {
                console.log();
                if (params.data != undefined) {
                    return params.data.reportId === undefined;
                }
            }
            // "duplicated_row_error": function(params){
            //     if(params.data.reportId===undefined){
            //             return true;
            //     }
            //     return false
            // }
        };
        //   this.postProcessPopup = function(params) {
        //     if (params.type !== "columnMenu") {
        //       return;
        //     }
        //     var columnId = params.column.getId();
        //     if (columnId === "gold") {
        //       var ePopup = params.ePopup;
        //       var oldTopStr = ePopup.style.top;
        //       oldTopStr = oldTopStr.substring(0, oldTopStr.indexOf("px"));
        //       var oldTop = parseInt(oldTopStr);
        //       var newTop = oldTop + 25;
        //       ePopup.style.top = newTop + "px";
        //     }
        //   };
        //   this.getMainMenuItems = function getMainMenuItems(params) {
        //     switch (params.column.getId()) {
        //       default:
        //         return params.defaultItems;
        //     }
        //   };
        // this.toastr.info('Please choose projects for querying','Please Choose Projects');
        this.rowData = [];
    }
    RichGridComponent.prototype.createRowData = function () {
        var _this = this;
        console.log("enter into create Row data");
        //this.hideprogress = false;
        this.addNewRow = true;
        this.duplicaterowData = [];
        this.errorData = [];
        this.updatedRowData = [];
        this.selectedRow = false;
        this.selectedRowIndex = "";
        this._projectService.getAllProjects().subscribe(function (projects) {
            _this.projects = projects;
            console.log("projects ");
            console.log(projects);
        }, function (error) {
            _this.toastr.error(error, "Error");
        });
        console.log("inside the create row data" + this.rowData);
    };
    RichGridComponent.prototype.createDynamicColumn = function (reportdata) {
        console.log("Length of the record" + reportdata.reportAdjustmentEntity.length);
        this.columnDefs = [];
        this.createColumnDefs();
        var _loop_1 = function (i) {
            params = {
                headerName: reportdata.reportAdjustmentEntity[i].forecastedMonth + "- " + reportdata.reportAdjustmentEntity[i].forecastedYear,
                children: [
                    {
                        headerName: "Hours", field: "hours_" + [i + 1], sortingOrder: ["asc", "desc"], filter: "agTextColumnFilter",
                        width: 150, pinned: false, editable: true
                    },
                    {
                        headerName: "Adjustment", field: "adjustment_" + [i + 1], filter: "agTextColumnFilter", sortingOrder: ["asc", "desc"],
                        width: 150, pinned: false, editable: true
                    },
                    {
                        headerName: "Rate", field: "rate_" + [i + 1], filter: "agTextColumnFilter", sortingOrder: ["asc", "desc"],
                        width: 150, pinned: false, editable: true
                    },
                    {
                        headerName: "Revenue", valueGetter: function aPlusBValueGetter(params) {
                            var hours = params.data["hours_" + [i + 1]];
                            var adjustment = params.data["adjustment_" + [i + 1]];
                            var rate = params.data["rate_" + [i + 1]];
                            params.data["revenue_" + [i + 1]] = (hours - adjustment) * rate;
                            return params.data["revenue_" + [i + 1]];
                        }, filter: "agTextColumnFilter", sortingOrder: ["asc", "desc"],
                        width: 150, pinned: false, valueFormatter: function RevenueFormater(params) {
                            return "CAD" + " " + params.data["revenue_" + [i + 1]].toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,");
                        }
                    }
                ]
            };
            this_1.columnDefs.push(params);
        };
        var this_1 = this, params;
        for (var i = 0; i < reportdata.reportAdjustmentEntity.length; i++) {
            _loop_1(i);
        }
        this.gridOptions.api.setColumnDefs(this.columnDefs);
        this.gridOptions.api.redrawRows();
    };
    RichGridComponent.prototype.createColumnDefs = function () {
        this.columnDefs = [
            {
                headerName: '#', width: 30, checkboxSelection: true, suppressSorting: true,
                suppressMenu: true, pinned: true
            },
            {
                headerName: 'Employee ',
                children: [
                    {
                        headerName: "Associate ID", field: "associateId", filter: "agTextColumnFilter", sortingOrder: ["asc", "desc"],
                        width: 150, pinned: false
                    },
                    {
                        headerName: "Associate Name", field: "associateName", filter: "agTextColumnFilter", sortingOrder: ["asc", "desc"],
                        width: 150, pinned: true
                    },
                    {
                        headerName: "HR Grade", field: "associateGrade", filter: "agTextColumnFilter", sortingOrder: ["asc", "desc"],
                        width: 150, pinned: false
                    },
                    {
                        headerName: "Location", field: "location", filter: "agTextColumnFilter", sortingOrder: ["asc", "desc"],
                        width: 150, pinned: false, editable: true, cellEditor: "agSelectCellEditor",
                        cellEditorParams: {
                            values: ["Onsite", "Offshore"]
                        },
                    },
                    {
                        headerName: "City", field: "city", filter: "agTextColumnFilter", sortingOrder: ["asc", "desc"],
                        width: 150, pinned: false, editable: true, cellEditor: "agSelectCellEditor",
                        cellEditorParams: {
                            values: ["CHENNAI", "KOLKATA", "LONDON", "NEWYORK", "PUNE", "TORONTO"]
                        },
                    },
                    {
                        headerName: "Billability", field: "billability", filter: "agTextColumnFilter", sortingOrder: ["asc", "desc"],
                        width: 150, pinned: false
                    },
                ]
            },
            {
                headerName: 'Project ',
                children: [
                    {
                        headerName: "Customer ID", field: "customerId", filter: "agTextColumnFilter", sortingOrder: ["asc", "desc"],
                        width: 150, pinned: false
                    },
                    {
                        headerName: "Customer Name", field: "customerName", filter: "agTextColumnFilter", sortingOrder: ["asc", "desc"],
                        width: 150
                    },
                    {
                        headerName: "Project ID", field: "projectId", filter: "agTextColumnFilter", sortingOrder: ["asc", "desc"],
                        width: 150, pinner: false
                    },
                    {
                        headerName: "Project Name", field: "projectName", filter: "agTextColumnFilter", sortingOrder: ["asc", "desc"],
                        width: 150, pinned: true
                    },
                    {
                        headerName: "Allocation StartDate", field: "allocStartDate", filter: "agTextColumnFilter", sortingOrder: ["asc", "desc"],
                        width: 150
                    },
                    {
                        headerName: "Allocation Enddate", field: "allocEndDate", filter: "agTextColumnFilter", sortingOrder: ["asc", "desc"],
                        width: 150
                    },
                    {
                        headerName: "Allocation Percentage", field: "allocationPercentage", filter: "agTextColumnFilter", sortingOrder: ["asc", "desc"],
                        width: 150
                    },
                    {
                        headerName: "Portfolio", field: "portfolio", filter: "agTextColumnFilter", sortingOrder: ["asc", "desc"],
                        width: 150
                    },
                    {
                        headerName: "POCs", field: "poc", filter: "agTextColumnFilter", sortingOrder: ["asc", "desc"],
                        width: 150
                    },
                    {
                        headerName: "Project Billability", field: "projectBillability", filter: "agTextColumnFilter", sortingOrder: ["asc", "desc"],
                        width: 150
                    },
                ]
            }
        ];
    };
    RichGridComponent.prototype.calculateRowCount = function () {
        if (this.gridOptions.api && this.rowData) {
            var model = this.gridOptions.api.getModel();
            var totalRows = this.rowData.length;
            var processedRows = model.getRowCount();
            this.rowCount = processedRows.toLocaleString() + ' / ' + totalRows.toLocaleString();
        }
    };
    RichGridComponent.prototype.onModelUpdated = function () {
        console.log('onModelUpdated');
        this.calculateRowCount();
    };
    RichGridComponent.prototype.onReady = function () {
        console.log('onReady');
        this.calculateRowCount();
    };
    RichGridComponent.prototype.onCellClicked = function ($event) {
        console.log('onCellClicked: ' + $event.rowIndex + ' ' + $event.colDef.field);
        if ($event.rowIndex != this.selectedRowIndex) {
            this.editable = false;
        }
    };
    RichGridComponent.prototype.onCellValueChanged = function ($event) {
        var col_number = $event.colDef.field.split("_")[1];
        var idFiled = "adjustment_" + col_number + "_id";
        var adjustment = "adjustment_" + col_number;
        var hoursFiled = "hours_" + col_number;
        var rateFiled = "rate_" + col_number;
        console.log("data..");
        console.log("field name : " + $event.colDef.field);
        console.log("project id :" + $event.node.data.reportId);
        console.log("adj val : " + $event.node.data[adjustment]);
        console.log("adj id : " + $event.node.data[idFiled]);
        console.log("hours : " + $event.node.data[hoursFiled]);
        console.log("rate : " + $event.node.data[rateFiled]);
        console.log("project id : " + $event.node.data["projectId"]);
        console.log("associate id : " + $event.node.data["associateId"]);
        console.log(this.updatedValues);
        if ($event.node.data.reportId != undefined && ($event.colDef.field.split("_")[0] === "location" || $event.colDef.field.split("_")[0] === "city") && ($event.oldValue != $event.newValue)) {
            this.toastr.error("Location Type & Associate City can be updated only for duplicate Records!!");
            $event.node.data[$event.colDef.field.split("_")[0]] = $event.oldValue;
            this.gridOptions.api.refreshCells({ columns: ['location', 'city'] });
            // return;
        }
        else if ($event.node.data.reportId === undefined) {
            // if (this.duplicaterowData.filter(data => $event.node.data[idFiled] === data).length > 0) {
            console.log("Duplicate record changes..");
            this.duplicaterowData.forEach(function (data) {
                if (data.associateId === $event.node.data["associateId"] && data.projectId === $event.node.data["projectId"]) {
                    data[$event.colDef.field] = $event.newValue;
                }
            });
            //   }
        }
        else if (this.updatedRowData.filter(function (data) { return $event.node.data[idFiled] === data[idFiled]; }).length > 0) {
            console.log("containts..");
            this.updatedRowData.forEach(function (data) {
                if (data[idFiled] === $event.node.data[idFiled]) {
                    data[$event.colDef.field] = $event.newValue;
                }
            });
        }
        else {
            console.log("push..");
            var newValueChanges = new __WEBPACK_IMPORTED_MODULE_11__Report_Adjustments__["a" /* Adjustment */]();
            console.log($event.node.data);
            var tmp = $event.node.data;
            tmp.reportDataType = "Update";
            this.updatedRowData.push(tmp);
            console.log(this.updatedRowData);
            this.addNewRow = false;
        }
        console.log(this.updatedValues);
        console.log('onCellValueChanged: ' + $event.oldValue + ' to ' + $event.newValue + ' ' + $event.rowIndex + ' ' + $event.node.data.projectId + " " + $event.node.data.projectName);
        if ($event.colDef.field.split("_")[0] === 'rate') {
            var columnsName = [];
            for (var i = col_number; i <= __WEBPACK_IMPORTED_MODULE_14__Constant_Utils__["a" /* Utils */].numberOfMonths; i++) {
                $event.node.data["rate_" + i] = $event.newValue;
                var hours = $event.node.data["hours_" + [i]];
                var adjustment_1 = $event.node.data["adjustment_" + [i]];
                var rate = $event.newValue;
                $event.node.data["revenue_" + [i]] = (hours - adjustment_1) * rate;
                columnsName.push("rate_" + i);
                columnsName.push("revenue_" + i);
                columnsName.push("hours_" + i);
            }
            // this.gridOptions.api.updateRowData({ update: $event.node.data });
            this.gridOptions.api.refreshCells({ columns: columnsName });
            console.log($event.node.data);
        }
    };
    RichGridComponent.prototype.onCellDoubleClicked = function ($event) {
        console.log('onCellDoubleClicked: ' + $event.rowIndex + ' ' + $event.colDef.field);
    };
    RichGridComponent.prototype.onCellContextMenu = function ($event) {
        console.log('onCellContextMenu: ' + $event.rowIndex + ' ' + $event.colDef.field);
    };
    RichGridComponent.prototype.onCellFocused = function ($event) {
        console.log('onCellFocused: (' + $event.rowIndex + ',' + $event.colIndex + ')');
    };
    RichGridComponent.prototype.onRowSelected = function ($event) {
        // taking out, as when we 'select all', it prints to much to the console!!
        // console.log('onRowSelected: ' + $event.node.data.name);
    };
    RichGridComponent.prototype.onSelectionChanged = function () {
        console.log('selectionChanged');
        this.editable = true;
        if (this.gridOptions.api.getSelectedRows().length > 0) {
            this.selectedRow = true;
            this.selectedRowIndex = this.gridOptions.api.getSelectedNodes()[0].childIndex;
        }
        else {
            this.selectedRow = false;
            this.selectedRowIndex = "";
        }
    };
    RichGridComponent.prototype.onBeforeFilterChanged = function () {
        console.log('beforeFilterChanged');
    };
    RichGridComponent.prototype.onAfterFilterChanged = function () {
        console.log('afterFilterChanged');
    };
    RichGridComponent.prototype.onFilterModified = function () {
        console.log('onFilterModified');
    };
    RichGridComponent.prototype.onBeforeSortChanged = function () {
        console.log('onBeforeSortChanged');
    };
    RichGridComponent.prototype.onAfterSortChanged = function () {
        console.log('onAfterSortChanged');
    };
    RichGridComponent.prototype.onVirtualRowRemoved = function ($event) {
        // because this event gets fired LOTS of times, we don't print it to the
        // console. if you want to see it, just uncomment out this line
        // console.log('onVirtualRowRemoved: ' + $event.rowIndex);
    };
    RichGridComponent.prototype.onRowClicked = function ($event) {
        console.log('onRowClicked: ' + $event.node.data.name);
    };
    RichGridComponent.prototype.onQuickFilterChanged = function ($event) {
        this.gridOptions.api.setQuickFilter($event.target.value);
    };
    // here we use one generic event to handle all the column type events.
    // the method just prints the event name
    RichGridComponent.prototype.onColumnEvent = function ($event) {
        console.log('onColumnEvent: ' + $event);
    };
    RichGridComponent.prototype.saveUpdated = function () {
        var _this = this;
        this.hideprogress = false;
        //  if(this.duplicaterowData.length>0){
        var isParentCopy;
        var errormsg = "";
        this.duplicaterowData.forEach(function (data) {
            if (_this.parentRowData.has(data.associateId + "-" + data.projectId + "-" + data.location)) {
                _this.errorData.push(data);
            }
        });
        if (this.errorData.length === 0) {
            if ((this.updatedRowData.length > 0 || this.duplicaterowData.length > 0)) {
                this.updatedRowData.forEach(function (rowData) {
                    _this.duplicaterowData.push(rowData);
                });
                //Final Data send to server 
                console.log("Final data");
                console.log(this.duplicaterowData);
                // if(this.duplicaterowData.length>0){
                this._reportservice.finalReportSave(this.duplicaterowData).subscribe(function (data) {
                    _this.hideprogress = true;
                    _this.duplicaterowData = [];
                    _this.errorData = [];
                    _this.updatedRowData = [];
                    _this.addNewRow = true;
                    _this.getReports();
                    _this.toastr.success("Data Saved", "success");
                }, function (err) {
                    console.log(err);
                    _this.toastr.error(err, "Error");
                    _this.hideprogress = true;
                });
                // }
            }
            else {
                this.toastr.warning("Nothing to save", "Warning");
                this.hideprogress = true;
            }
        }
        else {
            //aleart box
            console.log("Error data ");
            console.log(this.errorData);
            errormsg = "Records are already available for below combination(Associate Id - Project Id - Location Type).\n\n Please validate below records in list \n\n\n************************ \n\n";
            this.errorData.forEach(function (data) {
                errormsg = errormsg + data.associateId + "-" + data.projectId + "-" + data.location + "\n ";
            });
            errormsg = errormsg + '\n\n************************';
            this.toastr.error(errormsg, 'Error!');
            this.errorData = [];
            this.hideprogress = true;
        }
        //color part
        console.log(this.duplicaterowData);
    };
    RichGridComponent.prototype.onBtExport = function () {
        var params = {
            skipHeader: false,
            columnGroups: true,
            fileName: "ForeCaseReport",
            sheetName: "Sheet 1"
        };
        this.gridOptions.api.exportDataAsExcel(params);
    };
    //   showSuccess() {
    //       console.log(this.chosenProject);
    //       console.log(this.projects);
    //     this.toastr.success('You are awesome!', 'Success!');
    //   }
    RichGridComponent.prototype.onDuplicateRow = function () {
        if (this.selectedRow) {
            console.log(this.gridOptions.api.getSelectedRows());
            var rowData_record = new __WEBPACK_IMPORTED_MODULE_14__Constant_Utils__["a" /* Utils */]().createDuplicateRow(this.gridOptions.api.getSelectedRows(), false);
            rowData_record[0].reportDataType = "duplicate";
            console.log("duplicated data check");
            console.log(rowData_record);
            this.duplicaterowData.push(rowData_record[0]);
            this.parentRowData.set(rowData_record[0].associateId + "-" + rowData_record[0].projectId + "-" + rowData_record[0].location, rowData_record[0]);
            this.gridOptions.api.updateRowData({ add: rowData_record, addIndex: this.selectedRowIndex + 1 });
            rowData_record = null;
            this.toastr.success('Data Duplicated', 'Success!');
        }
        console.log("data from duplicate " + this.duplicaterowData);
        console.log(this.duplicaterowData);
    };
    RichGridComponent.prototype.onDeleteRow = function () {
        var _this = this;
        var rowData_record = new __WEBPACK_IMPORTED_MODULE_14__Constant_Utils__["a" /* Utils */]().createDuplicateRow(this.gridOptions.api.getSelectedRows(), true);
        if ((rowData_record[0].reportId === undefined) || (this.selectedRow && this.duplicaterowData.length == 0 && this.updatedRowData.length == 0 && this.errorData.length == 0)) {
            if (rowData_record[0].reportId != undefined) {
                this.hideprogress = false;
                console.log("inside if condition ");
                this._reportservice.deleteReport(rowData_record).subscribe(function (result) {
                    console.log(result);
                    _this.toastr.success('Data Deleted', 'Success!');
                    //this.createRowData();
                    _this.selectedRow = false;
                    _this.selectedRowIndex = "";
                    _this.getReports();
                    _this.hideprogress = true;
                }, function (error) {
                    _this.toastr.error(error, 'Error!');
                    _this.hideprogress = true;
                });
            }
            else {
                this.hideprogress = false;
                var selectedData = this.gridOptions.api.getSelectedRows();
                this.gridOptions.api.updateRowData({ remove: selectedData });
                var index = this.duplicaterowData.indexOf(selectedData[0]);
                console.log(this.duplicaterowData);
                this.duplicaterowData.splice(index, 1);
                console.log("from delete else part");
                console.log(this.duplicaterowData);
                this.hideprogress = true;
                this.toastr.success('Data Deleted', 'Success!');
            }
        }
        else {
            this.toastr.error('Please save unsaved data before proceeding with delete to prevent data loss!! ', 'Error');
        }
    };
    RichGridComponent.prototype.openDialog = function () {
        var _this = this;
        if (this.rowData.length === 0) {
            this.toastr.warning('Please choose any project before adding New Row data!!');
        }
        else if (this.duplicaterowData.length === 0 && this.errorData.length === 0 && this.updatedRowData.length === 0) {
            console.log("inside opendialog");
            if (this.addRowData === undefined) {
                this.addRowData = new __WEBPACK_IMPORTED_MODULE_10__Report_ReportType__["a" /* ReportType */]();
            }
            this.addRowData.reportDataType = "NewData";
            var dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
                width: '75%',
                data: this.addRowData
            });
            dialogRef.afterClosed().subscribe(function (result) {
                console.log('The dialog was closed');
                // console.log(result.from);
                _this.addRowData = result;
                console.log(result);
                //console.log(this._reportservice.convertNewData(result));
                //   var reports:ReportType[]  = this._reportservice.convertNewData(result);
                //   var costing:Boolean=false;
                //   var serviceRowData: Report[]=this._reportservice.convertFinalReport(reports);
                //   for(let i=0;i<serviceRowData[0].reportAdjustmentEntity.length;i++){
                //       if(serviceRowData[0].reportAdjustmentEntity[i].hours!=undefined || serviceRowData[0].reportAdjustmentEntity[i].rate!=undefined || serviceRowData[0].reportAdjustmentEntity[i].adjustment!=undefined   ){
                //         costing=true;
                //         break;
                //       }
                //   }
                // console.log(this._reportservice.convertFinalReport(reports)[0].reportAdjustmentEntity.length);
                //   if(costing){
                if ((result != undefined) && (result.from === "save")) {
                    _this._reportservice.finalReportSave(_this._reportservice.convertNewData(result)).subscribe(function (resp) {
                        _this.toastr.success('Data Added', 'Success!');
                        _this.getReports();
                        _this.addRowData = new __WEBPACK_IMPORTED_MODULE_10__Report_ReportType__["a" /* ReportType */]();
                    }, function (error) {
                        _this.toastr.error(error, 'Error!');
                    });
                }
                //   }else{
                //     this.toastr.error('Please enter Costing Data of any one month to proceed for addition of new report record.'); 
                //   }
            });
        }
        else {
            this.toastr.error('Please save unsaved data before adding new data to prevent data loss!! ', 'Error');
        }
    };
    RichGridComponent.prototype.add = function (event) {
        this.showALLChip = false;
        var input = event.input;
        var value = event.value;
        // Add our fruit
        if ((value || '').trim()) {
            var project = this.projects.filter(function (proj) { return proj.projectId + "" === value; })[0];
            if (project) {
                this.projects = this.projects.filter(function (proj) { return proj.projectId + "" != value; });
                this.chosenProject.push(project);
                this._projectService.choosenProjectlist(this.chosenProject);
                this.getReports();
            }
        }
        // Reset the input value
        if (input) {
            input.value = '';
        }
    };
    RichGridComponent.prototype.remove = function (project) {
        var index = this.chosenProject.indexOf(project);
        if (index >= 0) {
            this.chosenProject.splice(index, 1);
            this._projectService.choosenProjectlist(this.chosenProject);
            this._projectService;
            this.projects.push(project);
            this.getReports();
        }
    };
    RichGridComponent.prototype.autoComplete = function (projectSelected) {
        this.showALLChip = false;
        this.projectCtrl.setValue("");
        var project = this.projects.filter(function (proj) { return proj.projectId + "" === projectSelected.projectId + ""; })[0];
        if (project) {
            this.projects = this.projects.filter(function (proj) { return proj.projectId + "" != projectSelected.projectId; });
            this.chosenProject.push(project);
            this._projectService.choosenProjectlist(this.chosenProject);
            this.getReports();
        }
        console.log(project);
    };
    RichGridComponent.prototype.getReports = function () {
        var _this = this;
        console.log(this.chosenProject);
        console.log("Enter into getReports");
        // this.toastr.info("Refreshing Data...")
        var projects = [];
        this.chosenProject.forEach(function (cp) { return projects.push(cp.projectId + ""); });
        if (projects.length <= 0) {
            //this.toastr.info('Please choose projects for querying','Please Choose Projects');
            this.rowData = [];
            return;
        }
        this.hideprogress = false;
        console.log("projet name ");
        console.log(projects);
        this._reportservice.getReportForProject(projects)
            .subscribe(function (data) {
            var serviceRowData = data;
            _this.rowData = _this._reportservice.convertReport(serviceRowData);
            if (_this.rowData.length > 0) {
                var index = 0;
                for (var i = 0; i < serviceRowData.length; i++) {
                    if (serviceRowData[i].reportAdjustmentEntity.length === 12) {
                        index = i;
                        console.log("index of the record");
                        console.log(index);
                        break;
                    }
                }
                _this.createDynamicColumn(data[index]);
            }
            _this.hideprogress = true;
        }, function (error) {
            _this.toastr.error(error, 'Error!');
        });
    };
    RichGridComponent.prototype.getALLReports = function () {
        var _this = this;
        this.hideprogress = false;
        this._reportservice.getAllReports()
            .subscribe(function (data) {
            var serviceRowData = data;
            _this.rowData = _this._reportservice.convertReport(serviceRowData);
            if (_this.rowData.length > 0) {
                var index = 0;
                for (var i = 0; i < serviceRowData.length; i++) {
                    if (serviceRowData[i].reportAdjustmentEntity.length === 12) {
                        index = i;
                        console.log("index of the record");
                        console.log(index);
                        break;
                    }
                }
                _this.createDynamicColumn(data[index]);
            }
            _this.hideprogress = true;
            _this.onBtExport();
        }, function (error) {
            _this.toastr.error(error, 'Error!');
        });
    };
    RichGridComponent.prototype.listAllProject = function () {
        var _this = this;
        this.showALLChip = true;
        this.chosenProject = new Array();
        this.hideprogress = false;
        this._reportservice.getAllReports()
            .subscribe(function (data) {
            var serviceRowData = data;
            _this.rowData = _this._reportservice.convertReport(serviceRowData);
            if (_this.rowData.length > 0) {
                var index = 0;
                for (var i = 0; i < serviceRowData.length; i++) {
                    if (serviceRowData[i].reportAdjustmentEntity.length === 12) {
                        index = i;
                        console.log("index of the record");
                        console.log(index);
                        break;
                    }
                }
                _this.createDynamicColumn(data[index]);
            }
            _this.hideprogress = true;
        }, function (error) {
            _this.toastr.error(error, 'Error!');
        });
    };
    RichGridComponent.prototype.removeAllProjectSelection = function () {
        this.showALLChip = false;
        console.log("remove all .. all project");
        this.getReports();
    };
    RichGridComponent.prototype.focusOnProjectAutoComplete = function () {
        var _this = this;
        this.filteredProjectsObs = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */](function (observer) {
            observer.next(_this.projects);
        });
    };
    RichGridComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'rich-grid',
            template: __webpack_require__("../../../../../src/app/rich-grid-example/rich-grid.component.html"),
            styles: [__webpack_require__("../../../../../src/app/rich-grid-example/rich-grid.css"), __webpack_require__("../../../../../src/app/rich-grid-example/proficiency-renderer.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_8__Report_report_service__["a" /* ReportService */], __WEBPACK_IMPORTED_MODULE_9__Report_project_service__["a" /* ProjectService */], __WEBPACK_IMPORTED_MODULE_12__angular_material__["c" /* MatDialog */], __WEBPACK_IMPORTED_MODULE_13_ng2_toastr__["ToastsManager"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]])
    ], RichGridComponent);
    return RichGridComponent;
}());

var DialogOverviewExampleDialog = (function () {
    function DialogOverviewExampleDialog(dialogRef, data, _reportService, _projectService) {
        //   if(this._reportService.sendingSampleData()!=undefined){
        //     this.sampleData=this._reportService.sendingSampleData().reportAdjustmentEntity;
        //   }
        this.dialogRef = dialogRef;
        this.data = data;
        this._reportService = _reportService;
        console.log("constructor of dialog ");
        // console.log(this.sampleData);
        //var utils =new Utils();
        this.locationType = __WEBPACK_IMPORTED_MODULE_14__Constant_Utils__["a" /* Utils */].locationType;
        this.cityList = __WEBPACK_IMPORTED_MODULE_14__Constant_Utils__["a" /* Utils */].cityList;
        this.billabilityList = __WEBPACK_IMPORTED_MODULE_14__Constant_Utils__["a" /* Utils */].billability;
        console.log("location");
        console.log(this.locationType);
        // _projectService.getAllProjects().subscribe(projects => {
        //     this.projects = projects;
        //     console.log("projects ");
        //     console.log(projects);
        // });
        this.projects = _projectService.getChoosenProjectlist();
    }
    DialogOverviewExampleDialog.prototype.submitForm = function (data) {
        console.log("from dialog ");
        data.from = "save";
        data.locationType = this.selectedlocation;
        data.projectName = this.projectName;
        data.projectId = this.selectedProjectID;
        data.city = this.selectedCity;
        data.billability = this.selectedBillabilityType;
        console.log(data);
        this.dialogRef.close(data);
    };
    DialogOverviewExampleDialog.prototype.onChange = function (projectID, projectName) {
        console.log(projectID);
        this.projectName = projectName;
        this.selectedProjectID = projectID;
    };
    DialogOverviewExampleDialog.prototype.onChangeLocation = function (locationType) {
        this.selectedlocation = locationType;
    };
    DialogOverviewExampleDialog.prototype.onChangecity = function (city) {
        this.selectedCity = city;
    };
    DialogOverviewExampleDialog.prototype.onChangebillability = function (billability) {
        this.selectedBillabilityType = billability;
    };
    DialogOverviewExampleDialog.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    DialogOverviewExampleDialog = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'dialog-overview-example-dialog',
            template: __webpack_require__("../../../../../src/app/rich-grid-example/dialog-overview-example-dialog.html"),
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_12__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_12__angular_material__["e" /* MatDialogRef */], Object, __WEBPACK_IMPORTED_MODULE_8__Report_report_service__["a" /* ReportService */], __WEBPACK_IMPORTED_MODULE_9__Report_project_service__["a" /* ProjectService */]])
    ], DialogOverviewExampleDialog);
    return DialogOverviewExampleDialog;
}());



/***/ }),

/***/ "../../../../../src/app/rich-grid-example/rich-grid.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".toolbar button {\n    margin: 2px; padding: 0;\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
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


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map