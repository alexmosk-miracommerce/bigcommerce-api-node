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
var wait_1 = require("../utils/wait");
var RateLimitManager = /** @class */ (function () {
    function RateLimitManager(client, config) {
        var _this = this;
        /**
         * Callback passed into client request interceptor for rate limiting management.
         * @param {AxiosRequestConfig} req Request config object from axios
         * @returns {Promise<AxiosRequestConfig>} Returns the request config object after backoff runs
         */
        this.requestSuccessInterceptor = function (req) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.backoff()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, req];
                }
            });
        }); };
        /**
         * Callback to be passed into client response interceptor for rate limiting management.
         * @param {AxiosResponse} res Response object from axios
         * @returns {AxiosResponse} Returns the response object after setting the rate limit status
         */
        this.responseSuccessInterceptor = function (res) {
            _this.setStatus(res.headers);
            return res;
        };
        /**
         * Callback to be passed into client response interceptor for better HTTP error handling.
         * @param {AxiosError} error Error object from axios.
         */
        this.responseErrorInterceptor = function (error) {
            var _a, _b, _c;
            if (((_a = error.response) === null || _a === void 0 ? void 0 : _a.status) === 429) {
                throw new Error("".concat(error.response.status, " - Rate limit exceeded. ").concat((_c = (_b = _this.status) === null || _b === void 0 ? void 0 : _b.msToReset) !== null && _c !== void 0 ? _c : 0, "ms to reset."));
            }
            return error;
        };
        this.client = client;
        this.status = null;
        this.rateLimitConfig = config;
        this.client.interceptors.request.use(this.requestSuccessInterceptor);
        this.client.interceptors.response.use(this.responseSuccessInterceptor, this.responseErrorInterceptor);
    }
    /**
     * Sets the rate limit status from the response headers
     * @param {AxiosResponseHeaders} headers Headers object from axios response
     * @returns {void}
     */
    RateLimitManager.prototype.setStatus = function (headers) {
        if (headers['x-rate-limit-time-reset-ms']) {
            var now = new Date();
            var msToReset = Number(headers['x-rate-limit-time-reset-ms']);
            this.status = {
                msToReset: msToReset,
                nextWindowTime: new Date(+now + msToReset),
                windowSize: Number(headers['x-rate-limit-time-window-ms']),
                requestsRemaining: Number(headers['x-rate-limit-requests-left']),
                requestsQuota: Number(headers['x-rate-limit-requests-quota']),
            };
        }
    };
    /**
     * If enabled, waits until the next rate limit window when remaining requests are less than the minimum. Runs a
     * callback function if provided in rateLimitConfig.
     * @returns {Promise<void>}
     */
    RateLimitManager.prototype.backoff = function () {
        return __awaiter(this, void 0, void 0, function () {
            var isAtRequestThreshold;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.status) return [3 /*break*/, 3];
                        isAtRequestThreshold = this.status.requestsRemaining <= this.rateLimitConfig.minRequestsRemaining;
                        if (!(this.rateLimitConfig.enableWait && isAtRequestThreshold)) return [3 /*break*/, 2];
                        return [4 /*yield*/, (0, wait_1.wait)(this.status.msToReset)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        if (this.rateLimitConfig.callback && isAtRequestThreshold) {
                            this.rateLimitConfig.callback(this.rateLimitConfig.callbackParams);
                        }
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return RateLimitManager;
}());
exports.default = RateLimitManager;
