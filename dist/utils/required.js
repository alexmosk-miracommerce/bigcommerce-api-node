"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.required = void 0;
/**
 * Function that throws an error if a parameter is not provided.
 *
 * @example
 * function foo(bar: string = required('bar')) {
 *  // ...
 * }
 * // throws 'Missing required parameter: bar' if bar is not provided
 *
 * @param parameterName Name of required parameter
 */
function required(parameterName) {
    throw new Error("Missing required parameter: ".concat(parameterName));
}
exports.required = required;
