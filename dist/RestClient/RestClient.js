"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __importDefault(require("axios"));
var qs_1 = __importDefault(require("qs"));
var RateLimitManager_1 = __importDefault(require("../RateLimitManager"));
var V2_1 = __importDefault(require("./endpoints/V2"));
var V3_1 = __importDefault(require("./endpoints/V3"));
var RestClient = /** @class */ (function () {
    function RestClient(config) {
        var _a, _b;
        if (!config.storeHash || !config.accessToken) {
            throw new Error('Config must contain a storeHash and accessToken');
        }
        var apiHost = (_a = config.apiHost) !== null && _a !== void 0 ? _a : 'api.bigcommerce.com';
        var client = axios_1.default.create({
            baseURL: "https://".concat(apiHost, "/stores/").concat(config.storeHash),
            headers: {
                // eslint-disable-next-line @typescript-eslint/naming-convention
                'X-Auth-Token': config.accessToken,
            },
            paramsSerializer: function (params) {
                return qs_1.default.stringify(params, { arrayFormat: 'brackets' });
            },
        });
        client.interceptors.response.use(function (response) { return response; }, function (error) {
            var _a;
            // Return a BigCommerce error response for a better understanding of the issue
            if ('response' in error && ((_a = error.response) === null || _a === void 0 ? void 0 : _a.data)) {
                return Promise.reject(error.response.data);
            }
            return Promise.reject(error);
        });
        this.rateLimitManager = new RateLimitManager_1.default(client, (_b = config.rateLimitConfig) !== null && _b !== void 0 ? _b : { enableWait: false, minRequestsRemaining: 1 });
        this.v2 = new V2_1.default(client);
        this.v3 = new V3_1.default(client);
    }
    return RestClient;
}());
exports.default = RestClient;
