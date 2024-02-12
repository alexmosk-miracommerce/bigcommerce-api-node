"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
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
var __await = (this && this.__await) || function (v) { return this instanceof __await ? (this.v = v, this) : new __await(v); }
var __asyncGenerator = (this && this.__asyncGenerator) || function (thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateById = exports.paginate = void 0;
function paginate(listFn, params) {
    return __asyncGenerator(this, arguments, function paginate_1() {
        var page, response, items, _i, items_1, item;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    page = 1;
                    if ((params === null || params === void 0 ? void 0 : params.page) && typeof params.page === 'number') {
                        page = params.page;
                    }
                    _a.label = 1;
                case 1:
                    if (!(page >= 1)) return [3 /*break*/, 8];
                    return [4 /*yield*/, __await(listFn(__assign(__assign({}, params), { page: page })))];
                case 2:
                    response = _a.sent();
                    items = response.data;
                    if (items.length === 0) {
                        return [3 /*break*/, 8];
                    }
                    _i = 0, items_1 = items;
                    _a.label = 3;
                case 3:
                    if (!(_i < items_1.length)) return [3 /*break*/, 7];
                    item = items_1[_i];
                    return [4 /*yield*/, __await(item)];
                case 4: return [4 /*yield*/, _a.sent()];
                case 5:
                    _a.sent();
                    _a.label = 6;
                case 6:
                    _i++;
                    return [3 /*break*/, 3];
                case 7:
                    page++;
                    return [3 /*break*/, 1];
                case 8: return [2 /*return*/];
            }
        });
    });
}
exports.paginate = paginate;
function paginateById(listFn, id, params) {
    return __asyncGenerator(this, arguments, function paginateById_1() {
        var page, response, items, _i, items_2, item;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    page = 1;
                    if ((params === null || params === void 0 ? void 0 : params.page) && typeof params.page === 'number') {
                        page = params.page;
                    }
                    _a.label = 1;
                case 1:
                    if (!(page >= 1)) return [3 /*break*/, 8];
                    return [4 /*yield*/, __await(listFn(id, __assign(__assign({}, params), { page: page })))];
                case 2:
                    response = _a.sent();
                    items = response.data;
                    if (items.length === 0) {
                        return [3 /*break*/, 8];
                    }
                    _i = 0, items_2 = items;
                    _a.label = 3;
                case 3:
                    if (!(_i < items_2.length)) return [3 /*break*/, 7];
                    item = items_2[_i];
                    return [4 /*yield*/, __await(item)];
                case 4: return [4 /*yield*/, _a.sent()];
                case 5:
                    _a.sent();
                    _a.label = 6;
                case 6:
                    _i++;
                    return [3 /*break*/, 3];
                case 7:
                    page++;
                    return [3 /*break*/, 1];
                case 8: return [2 /*return*/];
            }
        });
    });
}
exports.paginateById = paginateById;
