"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var buildMultipartBody_1 = require("../../../../utils/buildMultipartBody");
var Category_1 = require("./Category");
var CategoryImages = /** @class */ (function () {
    function CategoryImages(client) {
        this.client = client;
    }
    /**
     * Creates a category image
     *
     * @param id A valid Category ID
     * @param imagePath An absolute path to an image file
     * @returns Promise resolving to a category image object
     */
    CategoryImages.prototype.create = function (id, imagePath) {
        var imageForm = (0, buildMultipartBody_1.buildMultipartBody)('image', imagePath);
        return this.client.post("".concat((0, Category_1.getCategoryPath)(id), "/image"), imageForm, {
            headers: __assign({}, imageForm.getHeaders()),
        });
    };
    /**
     * Deletes a category image
     *
     * @param id A valid Category ID
     * @returns Promise resolving to a 204 No Content response
     */
    CategoryImages.prototype.delete = function (id) {
        return this.client.delete("".concat((0, Category_1.getCategoryPath)(id), "/image"));
    };
    return CategoryImages;
}());
exports.default = CategoryImages;
