"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var DispenseLog = /** @class */ (function () {
    function DispenseLog() {
    }
    __decorate([
        typeorm_1.PrimaryColumn({ name: "id" }),
        __metadata("design:type", String)
    ], DispenseLog.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column({ name: "product_code" }),
        __metadata("design:type", String)
    ], DispenseLog.prototype, "productCode", void 0);
    __decorate([
        typeorm_1.Column({ name: "base_code" }),
        __metadata("design:type", String)
    ], DispenseLog.prototype, "baseCode", void 0);
    __decorate([
        typeorm_1.Column({ name: "color_code" }),
        __metadata("design:type", String)
    ], DispenseLog.prototype, "colorCode", void 0);
    __decorate([
        typeorm_1.Column({ name: "invoiceid" }),
        __metadata("design:type", String)
    ], DispenseLog.prototype, "invoiceid", void 0);
    __decorate([
        typeorm_1.Column({ name: "size_code" }),
        __metadata("design:type", String)
    ], DispenseLog.prototype, "sizeCode", void 0);
    __decorate([
        typeorm_1.Column({ name: "base_price" }),
        __metadata("design:type", Number)
    ], DispenseLog.prototype, "basePrice", void 0);
    __decorate([
        typeorm_1.Column({ name: "colarant_price" }),
        __metadata("design:type", Number)
    ], DispenseLog.prototype, "colarantPrice", void 0);
    __decorate([
        typeorm_1.Column({ name: "quantity" }),
        __metadata("design:type", Number)
    ], DispenseLog.prototype, "quantity", void 0);
    __decorate([
        typeorm_1.Column({ name: "c1" }),
        __metadata("design:type", String)
    ], DispenseLog.prototype, "c1", void 0);
    __decorate([
        typeorm_1.Column({ name: "q1" }),
        __metadata("design:type", Number)
    ], DispenseLog.prototype, "q1", void 0);
    __decorate([
        typeorm_1.Column({ name: "c2" }),
        __metadata("design:type", String)
    ], DispenseLog.prototype, "c2", void 0);
    __decorate([
        typeorm_1.Column({ name: "q2" }),
        __metadata("design:type", Number)
    ], DispenseLog.prototype, "q2", void 0);
    __decorate([
        typeorm_1.Column({ name: "c3" }),
        __metadata("design:type", String)
    ], DispenseLog.prototype, "c3", void 0);
    __decorate([
        typeorm_1.Column({ name: "q3" }),
        __metadata("design:type", Number)
    ], DispenseLog.prototype, "q3", void 0);
    __decorate([
        typeorm_1.Column({ name: "c4" }),
        __metadata("design:type", String)
    ], DispenseLog.prototype, "c4", void 0);
    __decorate([
        typeorm_1.Column({ name: "q4" }),
        __metadata("design:type", Number)
    ], DispenseLog.prototype, "q4", void 0);
    __decorate([
        typeorm_1.Column({ name: "c5" }),
        __metadata("design:type", String)
    ], DispenseLog.prototype, "c5", void 0);
    __decorate([
        typeorm_1.Column({ name: "q5" }),
        __metadata("design:type", Number)
    ], DispenseLog.prototype, "q5", void 0);
    __decorate([
        typeorm_1.Column({ name: "c6" }),
        __metadata("design:type", String)
    ], DispenseLog.prototype, "c6", void 0);
    __decorate([
        typeorm_1.Column({ name: "q6" }),
        __metadata("design:type", Number)
    ], DispenseLog.prototype, "q6", void 0);
    __decorate([
        typeorm_1.Column({ name: "system_code" }),
        __metadata("design:type", String)
    ], DispenseLog.prototype, "systemCode", void 0);
    __decorate([
        typeorm_1.Column({ name: "comapny_code" }),
        __metadata("design:type", Number)
    ], DispenseLog.prototype, "comapnyCode", void 0);
    __decorate([
        typeorm_1.Column({ name: "volume" }),
        __metadata("design:type", Number)
    ], DispenseLog.prototype, "volume", void 0);
    __decorate([
        typeorm_1.Column({ name: "unit" }),
        __metadata("design:type", String)
    ], DispenseLog.prototype, "unit", void 0);
    __decorate([
        typeorm_1.Column({ name: "grand_total" }),
        __metadata("design:type", Number)
    ], DispenseLog.prototype, "grandTotal", void 0);
    __decorate([
        typeorm_1.Column({ name: "remarks" }),
        __metadata("design:type", String)
    ], DispenseLog.prototype, "remarks", void 0);
    __decorate([
        typeorm_1.Column({ name: "store_id" }),
        __metadata("design:type", String)
    ], DispenseLog.prototype, "storeId", void 0);
    __decorate([
        typeorm_1.Column({ name: "dealer_id" }),
        __metadata("design:type", String)
    ], DispenseLog.prototype, "dealerId", void 0);
    __decorate([
        typeorm_1.Column({ name: "c7" }),
        __metadata("design:type", Number)
    ], DispenseLog.prototype, "c7", void 0);
    __decorate([
        typeorm_1.Column({ name: "q7" }),
        __metadata("design:type", Number)
    ], DispenseLog.prototype, "q7", void 0);
    __decorate([
        typeorm_1.Column({ name: "c8" }),
        __metadata("design:type", Number)
    ], DispenseLog.prototype, "c8", void 0);
    __decorate([
        typeorm_1.Column({ name: "q8" }),
        __metadata("design:type", Number)
    ], DispenseLog.prototype, "q8", void 0);
    __decorate([
        typeorm_1.Column({ name: "c9" }),
        __metadata("design:type", Number)
    ], DispenseLog.prototype, "c9", void 0);
    __decorate([
        typeorm_1.Column({ name: "q9" }),
        __metadata("design:type", Number)
    ], DispenseLog.prototype, "q9", void 0);
    __decorate([
        typeorm_1.Column({ name: "c10" }),
        __metadata("design:type", Number)
    ], DispenseLog.prototype, "c10", void 0);
    __decorate([
        typeorm_1.Column({ name: "q10" }),
        __metadata("design:type", Number)
    ], DispenseLog.prototype, "q10", void 0);
    __decorate([
        typeorm_1.Column({ name: "c11" }),
        __metadata("design:type", Number)
    ], DispenseLog.prototype, "c11", void 0);
    __decorate([
        typeorm_1.Column({ name: "q11" }),
        __metadata("design:type", Number)
    ], DispenseLog.prototype, "q11", void 0);
    __decorate([
        typeorm_1.Column({ name: "c12" }),
        __metadata("design:type", Number)
    ], DispenseLog.prototype, "c12", void 0);
    __decorate([
        typeorm_1.Column({ name: "q12" }),
        __metadata("design:type", Number)
    ], DispenseLog.prototype, "q12", void 0);
    __decorate([
        typeorm_1.Column({ name: "c13" }),
        __metadata("design:type", Number)
    ], DispenseLog.prototype, "c13", void 0);
    __decorate([
        typeorm_1.Column({ name: "q13" }),
        __metadata("design:type", Number)
    ], DispenseLog.prototype, "q13", void 0);
    __decorate([
        typeorm_1.Column({ name: "c14" }),
        __metadata("design:type", Number)
    ], DispenseLog.prototype, "c14", void 0);
    __decorate([
        typeorm_1.Column({ name: "q14" }),
        __metadata("design:type", Number)
    ], DispenseLog.prototype, "q14", void 0);
    __decorate([
        typeorm_1.Column({ name: "c15" }),
        __metadata("design:type", Number)
    ], DispenseLog.prototype, "c15", void 0);
    __decorate([
        typeorm_1.Column({ name: "q15" }),
        __metadata("design:type", Number)
    ], DispenseLog.prototype, "q15", void 0);
    __decorate([
        typeorm_1.Column({ name: "c16" }),
        __metadata("design:type", Number)
    ], DispenseLog.prototype, "c16", void 0);
    __decorate([
        typeorm_1.Column({ name: "q16" }),
        __metadata("design:type", Number)
    ], DispenseLog.prototype, "q16", void 0);
    __decorate([
        typeorm_1.Column({ name: "c17" }),
        __metadata("design:type", Number)
    ], DispenseLog.prototype, "c17", void 0);
    __decorate([
        typeorm_1.Column({ name: "q17" }),
        __metadata("design:type", Number)
    ], DispenseLog.prototype, "q17", void 0);
    __decorate([
        typeorm_1.Column({ name: "c18" }),
        __metadata("design:type", Number)
    ], DispenseLog.prototype, "c18", void 0);
    __decorate([
        typeorm_1.Column({ name: "q18" }),
        __metadata("design:type", Number)
    ], DispenseLog.prototype, "q18", void 0);
    __decorate([
        typeorm_1.Column({ name: "c19" }),
        __metadata("design:type", Number)
    ], DispenseLog.prototype, "c19", void 0);
    __decorate([
        typeorm_1.Column({ name: "q19" }),
        __metadata("design:type", Number)
    ], DispenseLog.prototype, "q19", void 0);
    __decorate([
        typeorm_1.Column({ name: "c20" }),
        __metadata("design:type", Number)
    ], DispenseLog.prototype, "c20", void 0);
    __decorate([
        typeorm_1.Column({ name: "q20" }),
        __metadata("design:type", Number)
    ], DispenseLog.prototype, "q20", void 0);
    __decorate([
        typeorm_1.Column({ name: "c21" }),
        __metadata("design:type", Number)
    ], DispenseLog.prototype, "c21", void 0);
    __decorate([
        typeorm_1.Column({ name: "q21" }),
        __metadata("design:type", Number)
    ], DispenseLog.prototype, "q21", void 0);
    __decorate([
        typeorm_1.Column({ name: "c22" }),
        __metadata("design:type", Number)
    ], DispenseLog.prototype, "c22", void 0);
    __decorate([
        typeorm_1.Column({ name: "q22" }),
        __metadata("design:type", Number)
    ], DispenseLog.prototype, "q22", void 0);
    __decorate([
        typeorm_1.Column({ name: "c23" }),
        __metadata("design:type", Number)
    ], DispenseLog.prototype, "c23", void 0);
    __decorate([
        typeorm_1.Column({ name: "q23" }),
        __metadata("design:type", Number)
    ], DispenseLog.prototype, "q23", void 0);
    __decorate([
        typeorm_1.Column({ name: "c24" }),
        __metadata("design:type", Number)
    ], DispenseLog.prototype, "c24", void 0);
    __decorate([
        typeorm_1.Column({ name: "q24" }),
        __metadata("design:type", Number)
    ], DispenseLog.prototype, "q24", void 0);
    __decorate([
        typeorm_1.Column({ name: "c25" }),
        __metadata("design:type", Number)
    ], DispenseLog.prototype, "c25", void 0);
    __decorate([
        typeorm_1.Column({ name: "q25" }),
        __metadata("design:type", Number)
    ], DispenseLog.prototype, "q25", void 0);
    __decorate([
        typeorm_1.Column({ name: "c26" }),
        __metadata("design:type", Number)
    ], DispenseLog.prototype, "c26", void 0);
    __decorate([
        typeorm_1.Column({ name: "q26" }),
        __metadata("design:type", Number)
    ], DispenseLog.prototype, "q26", void 0);
    __decorate([
        typeorm_1.Column({ name: "c27" }),
        __metadata("design:type", Number)
    ], DispenseLog.prototype, "c27", void 0);
    __decorate([
        typeorm_1.Column({ name: "q27" }),
        __metadata("design:type", Number)
    ], DispenseLog.prototype, "q27", void 0);
    __decorate([
        typeorm_1.Column({ name: "c28" }),
        __metadata("design:type", Number)
    ], DispenseLog.prototype, "c28", void 0);
    __decorate([
        typeorm_1.Column({ name: "q28" }),
        __metadata("design:type", Number)
    ], DispenseLog.prototype, "q28", void 0);
    __decorate([
        typeorm_1.Column({ name: "c29" }),
        __metadata("design:type", Number)
    ], DispenseLog.prototype, "c29", void 0);
    __decorate([
        typeorm_1.Column({ name: "q29" }),
        __metadata("design:type", Number)
    ], DispenseLog.prototype, "q29", void 0);
    __decorate([
        typeorm_1.Column({ name: "c30" }),
        __metadata("design:type", Number)
    ], DispenseLog.prototype, "c30", void 0);
    __decorate([
        typeorm_1.Column({ name: "q30" }),
        __metadata("design:type", Number)
    ], DispenseLog.prototype, "q30", void 0);
    __decorate([
        typeorm_1.Column({ name: "created_at" }),
        __metadata("design:type", Date)
    ], DispenseLog.prototype, "createdAt", void 0);
    __decorate([
        typeorm_1.Column({ name: "syncstatus" }),
        __metadata("design:type", Number)
    ], DispenseLog.prototype, "syncstatus", void 0);
    __decorate([
        typeorm_1.Column({ name: "mobile_number" }),
        __metadata("design:type", String)
    ], DispenseLog.prototype, "mobileNumber", void 0);
    __decorate([
        typeorm_1.Column({ name: "customer_name" }),
        __metadata("design:type", String)
    ], DispenseLog.prototype, "customerName", void 0);
    __decorate([
        typeorm_1.Column({ name: "show_room_invoice" }),
        __metadata("design:type", String)
    ], DispenseLog.prototype, "showRoomInvoice", void 0);
    DispenseLog = __decorate([
        typeorm_1.Entity("dispense_log")
    ], DispenseLog);
    return DispenseLog;
}());
exports.DispenseLog = DispenseLog;
