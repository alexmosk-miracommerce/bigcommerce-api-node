"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var assertIsError_1 = require("./assertIsError");
describe('assertIsError', function () {
    it('should be a function', function () {
        expect(assertIsError_1.assertIsError).toBeInstanceOf(Function);
    });
    it('should throw an error if the unknown type is not an error', function () {
        expect(function () { return (0, assertIsError_1.assertIsError)(undefined); }).toThrow();
    });
    it('should not throw an error if the unknown type is an error', function () {
        expect(function () { return (0, assertIsError_1.assertIsError)(new Error()); }).not.toThrow();
    });
});
