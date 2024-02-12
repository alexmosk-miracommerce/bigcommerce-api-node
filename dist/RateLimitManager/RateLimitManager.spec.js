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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/naming-convention */
var jest_mock_axios_1 = __importDefault(require("jest-mock-axios"));
var wait_1 = require("../utils/wait");
var index_1 = __importDefault(require("./index"));
var mockClient = jest_mock_axios_1.default.create();
jest.mock('../utils/wait', function () { return ({
    wait: jest.fn(),
}); });
var headers = {
    'x-rate-limit-time-reset-ms': '123',
    'x-rate-limit-time-window-ms': '456',
    'x-rate-limit-requests-left': '10',
    'x-rate-limit-requests-quota': '101112',
};
describe('RateLimitManager', function () {
    describe('constructor', function () {
        it('should initialize the rate limit manager', function () {
            // @ts-expect-error testing RateLimitManager constructor
            var rateLimitManager = new index_1.default(mockClient, {
                enableWait: true,
                minRequestsRemaining: 1,
            });
            expect(rateLimitManager.rateLimitConfig).toEqual({
                enableWait: true,
                minRequestsRemaining: 1,
            });
            expect(rateLimitManager.status).toBeNull();
        });
    });
    describe('setStatus', function () {
        it('should set the rate limit status from the response headers', function () {
            var dateSpy = jest.spyOn(global, 'Date'); // spy on Date
            // @ts-expect-error testing RateLimitManager constructor
            var rateLimitManager = new index_1.default(mockClient, {
                enableWait: true,
                minRequestsRemaining: 1,
            });
            rateLimitManager.setStatus(headers);
            var date = dateSpy.mock.instances[0];
            expect(rateLimitManager.status).toEqual({
                msToReset: 123,
                nextWindowTime: date,
                windowSize: 456,
                requestsRemaining: 10,
                requestsQuota: 101112,
            });
        });
    });
    describe('backoff', function () {
        beforeEach(function () {
            jest.clearAllMocks();
        });
        it('should wait until the next rate limit window when remaining requests are less than the minimum', function () { return __awaiter(void 0, void 0, void 0, function () {
            var rateLimitManager;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        rateLimitManager = new index_1.default(mockClient, {
                            enableWait: true,
                            minRequestsRemaining: 10,
                        });
                        rateLimitManager.setStatus(headers);
                        return [4 /*yield*/, rateLimitManager.backoff()];
                    case 1:
                        _a.sent();
                        expect(wait_1.wait).toHaveBeenCalledWith(123);
                        return [2 /*return*/];
                }
            });
        }); });
        it('should not wait if the rate limit is not enabled', function () { return __awaiter(void 0, void 0, void 0, function () {
            var rateLimitManager;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        rateLimitManager = new index_1.default(mockClient, {
                            enableWait: false,
                            minRequestsRemaining: 1,
                        });
                        rateLimitManager.setStatus(headers);
                        return [4 /*yield*/, rateLimitManager.backoff()];
                    case 1:
                        _a.sent();
                        expect(wait_1.wait).not.toHaveBeenCalled();
                        return [2 /*return*/];
                }
            });
        }); });
        it('should not wait if the remaining requests are greater than the minimum', function () { return __awaiter(void 0, void 0, void 0, function () {
            var rateLimitManager;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        rateLimitManager = new index_1.default(mockClient, {
                            enableWait: true,
                            minRequestsRemaining: 1,
                        });
                        rateLimitManager.setStatus(headers);
                        return [4 /*yield*/, rateLimitManager.backoff()];
                    case 1:
                        _a.sent();
                        expect(wait_1.wait).not.toHaveBeenCalled();
                        return [2 /*return*/];
                }
            });
        }); });
        it('should not wait if status is not set', function () { return __awaiter(void 0, void 0, void 0, function () {
            var rateLimitManager;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        rateLimitManager = new index_1.default(mockClient, {
                            enableWait: true,
                            minRequestsRemaining: 1,
                        });
                        return [4 /*yield*/, rateLimitManager.backoff()];
                    case 1:
                        _a.sent();
                        expect(wait_1.wait).not.toHaveBeenCalled();
                        return [2 /*return*/];
                }
            });
        }); });
        it('should run the callback function if provided', function () { return __awaiter(void 0, void 0, void 0, function () {
            var rateLimitManager;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        rateLimitManager = new index_1.default(mockClient, {
                            enableWait: true,
                            minRequestsRemaining: 10,
                            callbackParams: { foo: 'bar' },
                            callback: jest.fn(),
                        });
                        rateLimitManager.setStatus(headers);
                        return [4 /*yield*/, rateLimitManager.backoff()];
                    case 1:
                        _a.sent();
                        expect(rateLimitManager.rateLimitConfig.callback).toHaveBeenCalledWith(rateLimitManager.rateLimitConfig.callbackParams);
                        return [2 /*return*/];
                }
            });
        }); });
    });
    describe('requestSuccessInterceptor', function () {
        it('should call backoff if the rate limit is enabled', function () { return __awaiter(void 0, void 0, void 0, function () {
            var rateLimitManager, requestConfig;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        rateLimitManager = new index_1.default(mockClient, {
                            enableWait: true,
                            minRequestsRemaining: 10,
                        });
                        rateLimitManager.setStatus(headers);
                        requestConfig = {};
                        return [4 /*yield*/, rateLimitManager.requestSuccessInterceptor(requestConfig)];
                    case 1:
                        _a.sent();
                        expect(wait_1.wait).toHaveBeenCalled();
                        return [2 /*return*/];
                }
            });
        }); });
    });
    describe('responseSuccessInterceptor', function () {
        it('should update the rate limit status from the response headers', function () {
            // @ts-expect-error testing RateLimitManager constructor
            var rateLimitManager = new index_1.default(mockClient, {
                enableWait: true,
                minRequestsRemaining: 1,
            });
            var response = {
                data: '',
                status: 200,
                statusText: 'OK',
                headers: headers,
                config: {},
            };
            rateLimitManager.responseSuccessInterceptor(response);
            expect(rateLimitManager.status).toEqual({
                msToReset: 123,
                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                nextWindowTime: expect.any(Date),
                windowSize: 456,
                requestsRemaining: 10,
                requestsQuota: 101112,
            });
        });
    });
    describe('responseErrorInterceptor', function () {
        it('should throw error for 429 response code', function () {
            // @ts-expect-error testing RateLimitManager constructor
            var rateLimitManager = new index_1.default(mockClient, {
                enableWait: true,
                minRequestsRemaining: 1,
            });
            var response = {
                data: '',
                status: 429,
                statusText: 'Too Many Requests',
                headers: headers,
                config: {},
            };
            var responseError = {
                name: 'ResponseError',
                message: '',
                config: {},
                response: response,
                isAxiosError: true,
                toJSON: function () { return ({}); },
            };
            expect(function () { return rateLimitManager.responseErrorInterceptor(responseError); }).toThrow('Rate limit exceeded');
        });
        it('should not throw error if response object missing from error', function () {
            // @ts-expect-error testing RateLimitManager constructor
            var rateLimitManager = new index_1.default(mockClient, {
                enableWait: true,
                minRequestsRemaining: 1,
            });
            var responseError = {
                name: 'ResponseError',
                message: '',
                config: {},
                isAxiosError: true,
                toJSON: function () { return ({}); },
            };
            expect(function () { return rateLimitManager.responseErrorInterceptor(responseError); }).not.toThrow();
        });
        it('should return error', function () {
            // @ts-expect-error testing RateLimitManager constructor
            var rateLimitManager = new index_1.default(mockClient, {
                enableWait: true,
                minRequestsRemaining: 1,
            });
            var response = {
                data: '',
                status: 500,
                statusText: 'Internal Server Error',
                headers: headers,
                config: {},
            };
            var responseError = {
                name: 'ResponseError',
                message: '',
                config: {},
                response: response,
                isAxiosError: true,
                toJSON: function () { return ({}); },
            };
            expect(rateLimitManager.responseErrorInterceptor(responseError)).toEqual(responseError);
        });
    });
});
