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
var Products_1 = require("./Products");
var ProductModifierImages = /** @class */ (function () {
    function ProductModifierImages(client) {
        this.client = client;
    }
    ProductModifierImages.prototype.create = function (productId, modifierId, valueId, imagePath) {
        var imageForm = (0, buildMultipartBody_1.buildMultipartBody)('image', imagePath);
        return this.client.post("".concat((0, Products_1.getProductsPath)(productId), "/modifiers/").concat(modifierId, "/values/").concat(valueId, "/image"), imageForm, {
            headers: __assign({}, imageForm.getHeaders()),
        });
    };
    return ProductModifierImages;
}());
exports.default = ProductModifierImages;
