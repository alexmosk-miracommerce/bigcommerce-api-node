"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildMultipartBody = void 0;
var form_data_1 = __importDefault(require("form-data"));
var fs_1 = require("fs");
/**
 * Builds a FormData object from an asset path to be sent in a multipart/form-data request
 *
 * @param key The name of the key/value pair appended to the FormData object
 * @param assetPath The path on your local machine of the data object to be appended to the multipart form
 * @returns Multipart data object with the asset path
 */
var buildMultipartBody = function (key, assetPath) {
    var multiPartForm = new form_data_1.default();
    multiPartForm.append(key, (0, fs_1.createReadStream)(assetPath));
    return multiPartForm;
};
exports.buildMultipartBody = buildMultipartBody;
