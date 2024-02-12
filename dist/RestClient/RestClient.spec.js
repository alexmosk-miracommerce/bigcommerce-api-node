"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jest_mock_axios_1 = __importDefault(require("jest-mock-axios"));
var index_1 = __importDefault(require("./index"));
var mockClient = jest_mock_axios_1.default.create();
describe('RestClient', function () {
    beforeEach(function () {
        jest_mock_axios_1.default.reset();
    });
    describe('constructor', function () {
        it('should throw error for missing storeHash', function () {
            var bigcommerceRest = function () {
                // @ts-expect-error testing missing storeHash param
                return new index_1.default({ accessToken: '987654321' });
            };
            expect(bigcommerceRest).toThrow('storeHash');
        });
        it('should throw error for missing accessToken', function () {
            var bigcommerceRest = function () {
                // @ts-expect-error testing missing accessToken param
                return new index_1.default({ storeHash: 'abcdefgh1i' });
            };
            expect(bigcommerceRest).toThrow('accessToken');
        });
        it('should allow apiHost to be overridden', function () {
            var config = {
                storeHash: 'abcdefgh1i',
                accessToken: '987654321',
                apiHost: 'api.custom.com',
            };
            new index_1.default(config);
            expect(jest_mock_axios_1.default.create).toHaveBeenCalledWith({
                baseURL: "https://".concat(config.apiHost, "/stores/").concat(config.storeHash),
                headers: {
                    // eslint-disable-next-line @typescript-eslint/naming-convention
                    'X-Auth-Token': config.accessToken,
                },
            });
        });
    });
    describe('interceptors', function () {
        it('should initilize axios request and response interceptors', function () {
            new index_1.default({
                storeHash: 'abcdefgh1i',
                accessToken: '987654321',
                rateLimitConfig: {
                    enableWait: false,
                    minRequestsRemaining: 16101495,
                },
            });
            expect(mockClient.interceptors.request.use).toHaveBeenCalled();
            expect(mockClient.interceptors.response.use).toHaveBeenCalled();
        });
    });
    describe('rateLimitManager', function () {
        it('should be initialized with the rate limit config', function () {
            var rateLimitConfig = {
                enableWait: false,
                minRequestsRemaining: 16101495,
            };
            var bigcommerceRest = new index_1.default({
                storeHash: 'abcdefgh1i',
                accessToken: '987654321',
                rateLimitConfig: rateLimitConfig,
            });
            expect(bigcommerceRest.rateLimitManager.rateLimitConfig).toEqual(rateLimitConfig);
        });
        it('should be initialized with the default rate limit config if not provided', function () {
            var bigcommerceRest = new index_1.default({
                storeHash: 'abcdefgh1i',
                accessToken: '987654321',
            });
            expect(bigcommerceRest.rateLimitManager.rateLimitConfig).toEqual({
                enableWait: false,
                minRequestsRemaining: 1,
            });
        });
    });
});
