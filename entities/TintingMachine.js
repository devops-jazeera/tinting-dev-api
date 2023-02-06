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
var Address_1 = require("./Address");
var CountryMaster_1 = require("./CountryMaster");
var AreaMaster_1 = require("./AreaMaster");
var Dealer_1 = require("./Dealer");
var DatabaseMaster_1 = require("./DatabaseMaster");
var Technician_1 = require("./Technician");
var TintingMachine = /** @class */ (function () {
    function TintingMachine() {
    }
    __decorate([
        typeorm_1.PrimaryColumn({ name: "id" }),
        __metadata("design:type", String)
    ], TintingMachine.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column({ name: "type" }),
        __metadata("design:type", String)
    ], TintingMachine.prototype, "type", void 0);
    __decorate([
        typeorm_1.Column({ name: "serial_number" }),
        __metadata("design:type", String)
    ], TintingMachine.prototype, "serial_number", void 0);
    __decorate([
        typeorm_1.Column({ name: "mfg_date" }),
        __metadata("design:type", Date)
    ], TintingMachine.prototype, "mfg_date", void 0);
    __decorate([
        typeorm_1.Column({ name: "installation_date" }),
        __metadata("design:type", Date)
    ], TintingMachine.prototype, "installation_date", void 0);
    __decorate([
        typeorm_1.Column({ name: "expiry_date" }),
        __metadata("design:type", Date)
    ], TintingMachine.prototype, "expiry_date", void 0);
    __decorate([
        typeorm_1.Column({ name: "license_key" }),
        __metadata("design:type", String)
    ], TintingMachine.prototype, "license_key", void 0);
    __decorate([
        typeorm_1.Column({ name: "service_occurance" }),
        __metadata("design:type", Number)
    ], TintingMachine.prototype, "service_occurance", void 0);
    __decorate([
        typeorm_1.Column({ name: "vendor_id" }),
        __metadata("design:type", String)
    ], TintingMachine.prototype, "vendor_id", void 0);
    __decorate([
        typeorm_1.Column({ name: "vid" }),
        __metadata("design:type", String)
    ], TintingMachine.prototype, "vid", void 0);
    __decorate([
        typeorm_1.Column({ name: "active" }),
        __metadata("design:type", Boolean)
    ], TintingMachine.prototype, "active", void 0);
    __decorate([
        typeorm_1.Column({ name: "updated_by" }),
        __metadata("design:type", String)
    ], TintingMachine.prototype, "updated_by", void 0);
    __decorate([
        typeorm_1.Column({ name: "updated_on" }),
        __metadata("design:type", Date)
    ], TintingMachine.prototype, "updated_on", void 0);
    __decorate([
        typeorm_1.Column({ name: "system_code" }),
        __metadata("design:type", String)
    ], TintingMachine.prototype, "system_code", void 0);
    __decorate([
        typeorm_1.Column({ name: "dealerid" }),
        __metadata("design:type", String)
    ], TintingMachine.prototype, "dealerid", void 0);
    __decorate([
        typeorm_1.Column({ name: "technician_id" }),
        __metadata("design:type", String)
    ], TintingMachine.prototype, "technician_id", void 0);
    __decorate([
        typeorm_1.JoinColumn({ name: "dealerid" }),
        typeorm_1.ManyToOne(function (type) { return Dealer_1.Dealer; }),
        __metadata("design:type", Dealer_1.Dealer)
    ], TintingMachine.prototype, "dealer", void 0);
    __decorate([
        typeorm_1.JoinColumn({ name: "system_code" }),
        typeorm_1.ManyToOne(function (type) { return DatabaseMaster_1.DatabaseMaster; }),
        __metadata("design:type", DatabaseMaster_1.DatabaseMaster)
    ], TintingMachine.prototype, "database", void 0);
    __decorate([
        typeorm_1.JoinColumn({ name: "technician_id" }),
        typeorm_1.ManyToOne(function (type) { return Technician_1.Technician; }),
        __metadata("design:type", Technician_1.Technician)
    ], TintingMachine.prototype, "technician", void 0);
    __decorate([
        typeorm_1.JoinColumn({ name: "vendor_id" }),
        typeorm_1.ManyToOne(function (type) { return Vendor_1.Vendor; }),
        __metadata("design:type", Vendor_1.Vendor)
    ], TintingMachine.prototype, "vendor", void 0);
    __decorate([
        typeorm_1.JoinColumn({ name: "address_id" }),
        typeorm_1.ManyToOne(function (type) { return Address_1.Address; }, { cascade: true }),
        __metadata("design:type", Address_1.Address)
    ], TintingMachine.prototype, "address", void 0);
    __decorate([
        typeorm_1.Column({ name: "country_id" }),
        __metadata("design:type", Number)
    ], TintingMachine.prototype, "country_id", void 0);
    __decorate([
        typeorm_1.JoinColumn({ name: "country_id" }),
        typeorm_1.OneToOne(function (type) { return CountryMaster_1.CountryMaster; }, function (cou) { return cou.id; }),
        __metadata("design:type", CountryMaster_1.CountryMaster)
    ], TintingMachine.prototype, "countryMaster", void 0);
    __decorate([
        typeorm_1.JoinColumn({ name: "country_id" }),
        typeorm_1.ManyToOne(function (type) { return AreaMaster_1.AreaMaster; }, function (area) { return area.country_id; }),
        __metadata("design:type", AreaMaster_1.AreaMaster)
    ], TintingMachine.prototype, "areaMaster", void 0);
    __decorate([
        typeorm_1.Column({ name: "region_id" }),
        __metadata("design:type", Number)
    ], TintingMachine.prototype, "region_id", void 0);
    __decorate([
        typeorm_1.Column({ name: "city_id" }),
        __metadata("design:type", Number)
    ], TintingMachine.prototype, "city_id", void 0);
    __decorate([
        typeorm_1.Column({ name: "district_id" }),
        __metadata("design:type", Number)
    ], TintingMachine.prototype, "district_id", void 0);
    __decorate([
        typeorm_1.Column({ name: "machine_photo_id" }),
        __metadata("design:type", String)
    ], TintingMachine.prototype, "machine_photo_id", void 0);
    __decorate([
        typeorm_1.Column({ name: "machine_id" }),
        __metadata("design:type", String)
    ], TintingMachine.prototype, "machine_id", void 0);
    __decorate([
        typeorm_1.Column({ name: "store_id" }),
        __metadata("design:type", String)
    ], TintingMachine.prototype, "store_id", void 0);
    __decorate([
        typeorm_1.Column({ name: "client_version" }),
        __metadata("design:type", String)
    ], TintingMachine.prototype, "client_version", void 0);
    __decorate([
        typeorm_1.Column({ name: "client_updated_on" }),
        __metadata("design:type", Date)
    ], TintingMachine.prototype, "client_updated_on", void 0);
    __decorate([
        typeorm_1.Column({ name: 'channel_id' }),
        __metadata("design:type", String)
    ], TintingMachine.prototype, "channel_id", void 0);
    TintingMachine = __decorate([
        typeorm_1.Entity("tinting_machine")
    ], TintingMachine);
    return TintingMachine;
}());
exports.TintingMachine = TintingMachine;
