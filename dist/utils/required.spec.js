"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var required_1 = require("./required");
describe('required', function () {
    it('should always throw an error with a string describing what parameter is missing', function () {
        expect(function () { return (0, required_1.required)('parameterName'); }).toThrowError('Missing required parameter: parameterName');
    });
});
