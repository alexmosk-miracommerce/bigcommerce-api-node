"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var form_data_1 = __importDefault(require("form-data"));
var buildMultipartBody_1 = require("./buildMultipartBody");
describe('buildMultipartBody', function () {
    it('should return a Form data object', function () {
        var assetPath = './__fixtures__/test.png';
        var key = 'key';
        var multiPartForm = (0, buildMultipartBody_1.buildMultipartBody)(key, assetPath);
        expect(multiPartForm).toBeInstanceOf(form_data_1.default);
    });
});
