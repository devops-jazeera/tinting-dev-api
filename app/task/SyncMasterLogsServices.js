"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Log_1 = require("./../../utils/Log");
var Config = __importStar(require("../../utils/Config"));
// import { DAOList } from "../../utils/LoadDAO";
var axios = require("axios");
var SyncMasterLogsServices = /** @class */ (function () {
    function SyncMasterLogsServices() {
        Config.setSyncUrl();
        this.url = Config.getSyncUrl().url;
        this.token = Config.getSyncUrl().token;
    }
    SyncMasterLogsServices.prototype.executeSync = function () {
        return __awaiter(this, void 0, void 0, function () {
            var syncLogData, tableData, savedDataArray, _i, tableData_1, table, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 8, , 9]);
                        Log_1.master.debug(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>((((EXECUTION STARTED))))))))))<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<");
                        return [4 /*yield*/, this.getSyncMaterLogsData()];
                    case 1:
                        syncLogData = _a.sent();
                        if (!(syncLogData && syncLogData.rows && syncLogData.rows.length > 0)) return [3 /*break*/, 7];
                        Log_1.master.info("((((((((((((((((((((((((((((((Got result from syn mater logs ))))))))))))))))))))))))))))))))");
                        Log_1.master.info("((((((((((((((((((((((((((((((" + syncLogData.rows.length + " ))))))))))))))))))))))))))))))))");
                        tableData = syncLogData.rows;
                        if (!(tableData && tableData.length > 0)) return [3 /*break*/, 7];
                        savedDataArray = [];
                        _i = 0, tableData_1 = tableData;
                        _a.label = 2;
                    case 2:
                        if (!(_i < tableData_1.length)) return [3 /*break*/, 5];
                        table = tableData_1[_i];
                        //   console.log(table);
                        return [4 /*yield*/, this.saveData(table, savedDataArray, Log_1.master)];
                    case 3:
                        //   console.log(table);
                        _a.sent();
                        _a.label = 4;
                    case 4:
                        _i++;
                        return [3 /*break*/, 2];
                    case 5:
                        Log_1.master.info("Actual data came ::: " + tableData.length + " ");
                        Log_1.master.info("Saved data ::: " + savedDataArray.length);
                        if (!(savedDataArray.length > 0)) return [3 /*break*/, 7];
                        return [4 /*yield*/, this.deleteSyncMaterLogsData(savedDataArray)];
                    case 6:
                        _a.sent();
                        _a.label = 7;
                    case 7:
                        Log_1.master.debug(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>((((EXECUTION COMPLETED))))))))))<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<");
                        return [3 /*break*/, 9];
                    case 8:
                        e_1 = _a.sent();
                        throw e_1;
                    case 9: return [2 /*return*/];
                }
            });
        });
    };
    SyncMasterLogsServices.prototype.chunkArray = function (myArray, chunk_size) {
        return __awaiter(this, void 0, void 0, function () {
            var index, arrayLength, tempArray, myChunk;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        index = 0;
                        arrayLength = myArray.length;
                        tempArray = [];
                        for (index = 0; index < arrayLength; index += chunk_size) {
                            myChunk = myArray.slice(index, index + chunk_size);
                            // Do something if you want with the group
                            tempArray.push(myChunk);
                        }
                        return [4 /*yield*/, tempArray];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    SyncMasterLogsServices.prototype.saveData = function (table, savedDataArray, log) {
        if (savedDataArray === void 0) { savedDataArray = []; }
        return __awaiter(this, void 0, void 0, function () {
            var daoObj, chunck_data, _i, chunck_data_1, chunck, e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 9, , 10]);
                        return [4 /*yield*/, this.getDAOService(table.tableName)];
                    case 1:
                        daoObj = _a.sent();
                        log.info("*****************************DAO " + (daoObj ? "PRESENT" : undefined) + ", \"operation:" + table.operation + " \" \"*****************************");
                        if (!daoObj) return [3 /*break*/, 8];
                        return [4 /*yield*/, this.chunkArray(table.data, 1000)];
                    case 2:
                        chunck_data = _a.sent();
                        _i = 0, chunck_data_1 = chunck_data;
                        _a.label = 3;
                    case 3:
                        if (!(_i < chunck_data_1.length)) return [3 /*break*/, 8];
                        chunck = chunck_data_1[_i];
                        log.info(chunck.length);
                        if (!(table.operation == 'DELETE')) return [3 /*break*/, 5];
                        log.info("*****************************DAO \"operation:" + table.operation + " \" \"*****************************");
                        return [4 /*yield*/, daoObj.delete(chunck)];
                    case 4:
                        _a.sent();
                        return [3 /*break*/, 7];
                    case 5: return [4 /*yield*/, daoObj.save(chunck)];
                    case 6:
                        _a.sent();
                        _a.label = 7;
                    case 7:
                        _i++;
                        return [3 /*break*/, 3];
                    case 8: return [3 /*break*/, 10];
                    case 9:
                        e_2 = _a.sent();
                        throw e_2;
                    case 10: return [2 /*return*/];
                }
            });
        });
    };
    SyncMasterLogsServices.prototype.getSyncMaterLogsData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var storeId, reqData, data, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        storeId = process.env.TINTING_STORE_ID;
                        Log_1.master.info("((((((((((((((((((((STORE ID ::: " + storeId + " ))))))))))))))))))))");
                        reqData = {
                            data: {
                                inventlocationid: storeId,
                            },
                        };
                        return [4 /*yield*/, this.callApi(this.url + "syncmasterlogs/search", this.token, reqData)];
                    case 1:
                        data = _a.sent();
                        Log_1.master.info("((((((((((((((((((((STORE ID ::: " + data + " ))))))))))))))))))))");
                        if (data.error) {
                            throw data.error.message;
                        }
                        else {
                            return [2 /*return*/, data];
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        console.log(error_1);
                        throw error_1;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    SyncMasterLogsServices.prototype.deleteSyncMaterLogsData = function (ids) {
        return __awaiter(this, void 0, void 0, function () {
            var reqData, data, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        Log_1.master.info("((((((((((((((((((((Delete Syn Master Logs API Method))))))))))))))))))))");
                        reqData = {
                            data: {
                                ids: ids,
                            },
                        };
                        return [4 /*yield*/, this.callApi(this.url + "syncmasterlogs/deletedata", this.token, reqData)];
                    case 1:
                        data = _a.sent();
                        Log_1.master.info("((((((((((((((((((((Deleted Data ::: " + ids + " ))))))))))))))))))))");
                        if (data.error) {
                            throw data.error.message;
                        }
                        else {
                            return [2 /*return*/, data];
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        error_2 = _a.sent();
                        console.log(error_2);
                        throw error_2;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    SyncMasterLogsServices.prototype.groupData = function (data, key) {
        return data.reduce(function (rv, x) {
            (rv[x[key]] = rv[x[key]] || []).push(x);
            return rv;
        }, {});
    };
    SyncMasterLogsServices.prototype.syncData = function (data, route) {
        return __awaiter(this, void 0, void 0, function () {
            var url, dataToArray, reqData, resultData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(data);
                        console.log(route);
                        url = this.url + route + "/getData";
                        dataToArray = data.map(function (v) {
                            return v.table_pk;
                        });
                        console.log(dataToArray);
                        reqData = {
                            data: dataToArray,
                        };
                        return [4 /*yield*/, this.callApi(url, this.token, reqData)];
                    case 1:
                        resultData = _a.sent();
                        console.log(resultData);
                        return [2 /*return*/];
                }
            });
        });
    };
    SyncMasterLogsServices.prototype.callApi = function (url, token, reqData) {
        return __awaiter(this, void 0, void 0, function () {
            var data, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        axios.defaults.headers["Authorization"] = token;
                        axios.defaults.headers["Connection"] = "keep-alive";
                        return [4 /*yield*/, axios.post(url, reqData)];
                    case 1:
                        data = _a.sent();
                        data = data.data;
                        if (data.error) {
                            throw data.error.message;
                        }
                        else {
                            return [2 /*return*/, data.data];
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        error_3 = _a.sent();
                        console.log(error_3);
                        throw error_3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    SyncMasterLogsServices.prototype.getDAOService = function (tablename) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = this;
                        if (!this.daoList) return [3 /*break*/, 1];
                        _b = this.daoList;
                        return [3 /*break*/, 3];
                    case 1: return [4 /*yield*/, this.importDaos()];
                    case 2:
                        _b = _c.sent();
                        _c.label = 3;
                    case 3:
                        _a.daoList = _b;
                        Log_1.master.info("*******************getting dao for " + tablename + "*************************");
                        // console.log(this.daoList[tablename]);
                        return [2 /*return*/, this.daoList[tablename]];
                }
            });
        });
    };
    SyncMasterLogsServices.prototype.importDaos = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Promise.resolve().then(function () { return __importStar(require("../../utils/LoadDAO")); })];
                    case 1: return [2 /*return*/, (_a.sent()).DAOList];
                }
            });
        });
    };
    return SyncMasterLogsServices;
}());
exports.SyncMasterLogsServices = SyncMasterLogsServices;
