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
var Brands_1 = require("./Brands");
var BrandImages = /** @class */ (function () {
    function BrandImages(client) {
        this.client = client;
    }
    /**
     * Creates a brand image
     *
     * @param id A valid Brand ID
     * @param imagePath An absolute path to an image file
     * @returns Promise resolving to a brand image object
     */
    BrandImages.prototype.create = function (id, imagePath) {
        var imageForm = (0, buildMultipartBody_1.buildMultipartBody)('image', imagePath);
        return this.client.post("".concat((0, Brands_1.getBrandsPath)(id), "/image"), imageForm, {
            headers: __assign({}, imageForm.getHeaders()),
        });
    };
    /**
     * Deletes a brand image
     *
     * @param id A valid Brand ID
     * @returns Promise resolving to a 204 No Content response
     */
    BrandImages.prototype.delete = function (id) {
        return this.client.delete("".concat((0, Brands_1.getBrandsPath)(id), "/image"));
    };
    return BrandImages;
}());
exports.default = BrandImages;
