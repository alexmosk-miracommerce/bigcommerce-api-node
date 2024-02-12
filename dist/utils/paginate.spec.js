"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
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
Object.defineProperty(exports, "__esModule", { value: true });
var paginate_1 = require("./paginate");
var mockList = jest.fn();
beforeEach(function () {
    mockList.mockReturnValueOnce(new Promise(function (resolve) {
        return resolve({
            data: [{ id: 1 }, { id: 2 }],
        });
    }));
    mockList.mockReturnValueOnce(new Promise(function (resolve) {
        return resolve({
            data: [{ id: 3 }, { id: 4 }],
        });
    }));
    mockList.mockReturnValueOnce(new Promise(function (resolve) {
        return resolve({
            data: [],
        });
    }));
});
afterEach(function () {
    mockList.mockClear();
});
describe('paginate', function () {
    it('should be a function', function () {
        expect(paginate_1.paginate).toBeInstanceOf(Function);
    });
    it('should call listFn, returning one item from the result of listFn at a time', function () { return __awaiter(void 0, void 0, void 0, function () {
        var generator, _a, _b, _c, _d, _e;
        return __generator(this, function (_f) {
            switch (_f.label) {
                case 0:
                    generator = (0, paginate_1.paginate)(mockList);
                    _a = expect;
                    return [4 /*yield*/, generator.next()];
                case 1:
                    _a.apply(void 0, [_f.sent()]).toEqual({ done: false, value: { id: 1 } });
                    _b = expect;
                    return [4 /*yield*/, generator.next()];
                case 2:
                    _b.apply(void 0, [_f.sent()]).toEqual({ done: false, value: { id: 2 } });
                    expect(mockList).toHaveBeenCalledWith({ page: 1 });
                    _c = expect;
                    return [4 /*yield*/, generator.next()];
                case 3:
                    _c.apply(void 0, [_f.sent()]).toEqual({ done: false, value: { id: 3 } });
                    _d = expect;
                    return [4 /*yield*/, generator.next()];
                case 4:
                    _d.apply(void 0, [_f.sent()]).toEqual({ done: false, value: { id: 4 } });
                    expect(mockList).toHaveBeenCalledWith({ page: 2 });
                    _e = expect;
                    return [4 /*yield*/, generator.next()];
                case 5:
                    _e.apply(void 0, [_f.sent()]).toEqual({ done: true });
                    return [2 /*return*/];
            }
        });
    }); });
    it('should allow the starting page to be overridden if provided as a parameter', function () { return __awaiter(void 0, void 0, void 0, function () {
        var generator, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    generator = (0, paginate_1.paginate)(mockList, { page: 2 });
                    _a = expect;
                    return [4 /*yield*/, generator.next()];
                case 1:
                    _a.apply(void 0, [_b.sent()]).toEqual({ done: false, value: { id: 1 } });
                    expect(mockList).toHaveBeenCalledWith({ page: 2 });
                    return [2 /*return*/];
            }
        });
    }); });
});
describe('paginateById', function () {
    it('should be a function', function () {
        expect(paginate_1.paginateById).toBeInstanceOf(Function);
    });
    it('should call listFn with the provided id', function () { return __awaiter(void 0, void 0, void 0, function () {
        var generator;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    generator = (0, paginate_1.paginateById)(mockList, 100);
                    return [4 /*yield*/, generator.next()];
                case 1:
                    _a.sent();
                    expect(mockList).toHaveBeenCalledWith(100, { page: 1 });
                    return [2 /*return*/];
            }
        });
    }); });
    it('should allow the starting page to be overridden if provided as a parameter', function () { return __awaiter(void 0, void 0, void 0, function () {
        var generator;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    generator = (0, paginate_1.paginateById)(mockList, 100, { page: 2 });
                    return [4 /*yield*/, generator.next()];
                case 1:
                    _a.sent();
                    expect(mockList).toHaveBeenCalledWith(100, { page: 2 });
                    return [2 /*return*/];
            }
        });
    }); });
    it('should call listFn with an id, returning one item from the result of listFn at a time', function () { return __awaiter(void 0, void 0, void 0, function () {
        var generator, _a, _b, _c, _d, _e;
        return __generator(this, function (_f) {
            switch (_f.label) {
                case 0:
                    generator = (0, paginate_1.paginateById)(mockList, 100);
                    _a = expect;
                    return [4 /*yield*/, generator.next()];
                case 1:
                    _a.apply(void 0, [_f.sent()]).toEqual({ done: false, value: { id: 1 } });
                    _b = expect;
                    return [4 /*yield*/, generator.next()];
                case 2:
                    _b.apply(void 0, [_f.sent()]).toEqual({ done: false, value: { id: 2 } });
                    expect(mockList).toHaveBeenCalledWith(100, { page: 1 });
                    _c = expect;
                    return [4 /*yield*/, generator.next()];
                case 3:
                    _c.apply(void 0, [_f.sent()]).toEqual({ done: false, value: { id: 3 } });
                    _d = expect;
                    return [4 /*yield*/, generator.next()];
                case 4:
                    _d.apply(void 0, [_f.sent()]).toEqual({ done: false, value: { id: 4 } });
                    expect(mockList).toHaveBeenCalledWith(100, { page: 2 });
                    _e = expect;
                    return [4 /*yield*/, generator.next()];
                case 5:
                    _e.apply(void 0, [_f.sent()]).toEqual({ done: true });
                    return [2 /*return*/];
            }
        });
    }); });
});
