"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var OAuth_1 = __importDefault(require("./OAuth"));
var RestClient_1 = __importDefault(require("./RestClient"));
var Orders_1 = __importDefault(require("./RestClient/endpoints/V2/Orders"));
var index_1 = __importDefault(require("./index"));
describe('BigCommerce API Client', function () {
    describe('OAuth', function () {
        var auth = new index_1.default.Auth({
            clientId: '123456789',
            clientSecret: '987654321',
            authCallback: 'https://yourapplication.com/auth',
        });
        it('should be a class', function () {
            expect(auth).toBeInstanceOf(OAuth_1.default);
        });
    });
});
describe('BigCommerce REST', function () {
    var rest = new index_1.default.Rest({
        storeHash: 'abcdefgh1i',
        accessToken: '987654321',
    });
    it('should be a class', function () {
        expect(rest).toBeInstanceOf(RestClient_1.default);
    });
    it('should instantiate and expose a V2 property containing orders object', function () {
        expect(rest.v2.orders).toBeInstanceOf(Orders_1.default);
    });
});
