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
var Vendor_1 = require("./Vendor");
var PigmentSet_1 = require("./PigmentSet");
var DatabaseMaster = /** @class */ (function () {
    function DatabaseMaster() {
    }
    __decorate([
        typeorm_1.PrimaryColumn({ name: "id" }),
        __metadata("design:type", String)
    ], DatabaseMaster.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column({ name: "vendor_id" }),
        __metadata("design:type", String)
    ], DatabaseMaster.prototype, "vendor_id", void 0);
    __decorate([
        typeorm_1.Column({ name: "pigment_set_id" }),
        __metadata("design:type", String)
    ], DatabaseMaster.prototype, "pigment_set_id", void 0);
    __decorate([
        typeorm_1.Column({ name: "vid" }),
        __metadata("design:type", String)
    ], DatabaseMaster.prototype, "vid", void 0);
    __decorate([
        typeorm_1.Column({ name: "active" }),
        __metadata("design:type", Boolean)
    ], DatabaseMaster.prototype, "active", void 0);
    __decorate([
        typeorm_1.Column({ name: "updated_by" }),
        __metadata("design:type", String)
    ], DatabaseMaster.prototype, "updated_by", void 0);
    __decorate([
        typeorm_1.Column({ name: "updated_on" }),
        __metadata("design:type", Date)
    ], DatabaseMaster.prototype, "updated_on", void 0);
    __decorate([
        typeorm_1.Column({ name: "system_code" }),
        __metadata("design:type", String)
    ], DatabaseMaster.prototype, "system_code", void 0);
    __decorate([
        typeorm_1.Column({ name: "shot" }),
        __metadata("design:type", String)
    ], DatabaseMaster.prototype, "shot", void 0);
    __decorate([
        typeorm_1.Column({ name: "shot_conversion" }),
        __metadata("design:type", Number)
    ], DatabaseMaster.prototype, "shot_conversion", void 0);
    __decorate([
        typeorm_1.Column({ name: "name_en" }),
        __metadata("design:type", String)
    ], DatabaseMaster.prototype, "name_en", void 0);
    __decorate([
        typeorm_1.Column({ name: "name_ar" }),
        __metadata("design:type", String)
    ], DatabaseMaster.prototype, "name_ar", void 0);
    __decorate([
        typeorm_1.Column({ name: "vat" }),
        __metadata("design:type", Number)
    ], DatabaseMaster.prototype, "vat", void 0);
    __decorate([
        typeorm_1.JoinColumn({ name: "vendor_id" }),
        typeorm_1.ManyToOne(function (type) { return Vendor_1.Vendor; }, function (vendor) { return vendor.id; }),
        __metadata("design:type", Vendor_1.Vendor)
    ], DatabaseMaster.prototype, "vendor", void 0);
    __decorate([
        typeorm_1.JoinColumn({ name: "pigment_set_id" }),
        typeorm_1.ManyToOne(function (type) { return PigmentSet_1.PigmentSet; }, function (pigmentSet) { return pigmentSet.id; }),
        __metadata("design:type", PigmentSet_1.PigmentSet)
    ], DatabaseMaster.prototype, "pigmentSet", void 0);
    __decorate([
        typeorm_1.Column({ name: "coating_type" }),
        __metadata("design:type", String)
    ], DatabaseMaster.prototype, "coating_type", void 0);
    DatabaseMaster = __decorate([
        typeorm_1.Entity("database_master")
    ], DatabaseMaster);
    return DatabaseMaster;
}());
exports.DatabaseMaster = DatabaseMaster;
