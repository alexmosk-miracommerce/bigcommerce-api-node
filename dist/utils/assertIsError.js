"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertIsError = void 0;
/**
 * This function asserts that an unknown type (typically an error in a
 * catch block) is of type Error, which means for the rest of the scope,
 * the unknown type can safely be treated as a type of Error.
 */
function assertIsError(error) {
    if (!(error instanceof Error)) {
        throw error;
    }
}
exports.assertIsError = assertIsError;
