"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Products_1 = require("./Products");
var ProductImages = /** @class */ (function () {
    function ProductImages(client) {
        this.client = client;
    }
    /**
     * Gets a list of product images for a given product
     *
     * @param id A valid product ID
     * @param params Query parameters used to filter the response
     * @returns Promise resolving to a list of product images
     */
    ProductImages.prototype.list = function (id, params) {
        return this.client.get("".concat((0, Products_1.getProductsPath)(id), "/images"), { params: params });
    };
    /**
     * Creates a new product image
     *
     * @param productId A valid product ID
     * @param data Data used to create a new product image
     * @returns Promise resolving to a newly created product image
     */
    ProductImages.prototype.create = function (productId, data) {
        return this.client.post("".concat((0, Products_1.getProductsPath)(productId), "/images"), data);
    };
    /**
     * Gets a single product image
     *
     * @param productId A valid product ID
     * @param imageId A valid product image ID
     * @param params Query parameters used to filter the response
     * @returns Promise resolving to a single product image
     */
    ProductImages.prototype.get = function (productId, imageId, params) {
        return this.client.get("".concat((0, Products_1.getProductsPath)(productId), "/images/").concat(imageId), { params: params });
    };
    /**
     * Updates a single product image
     *
     * @param productId A valid product ID
     * @param imageId A valid product image ID
     * @param data Data used to update the product image
     * @returns Promise resolving to the updated product image
     */
    ProductImages.prototype.update = function (productId, imageId, data) {
        return this.client.put("".concat((0, Products_1.getProductsPath)(productId), "/images/").concat(imageId), data);
    };
    /**
     * Deletes a single product image
     *
     * @param productId A valid product ID
     * @param imageId A valid product image ID
     * @returns Promise resolving to a 204 No Content response
     */
    ProductImages.prototype.delete = function (productId, imageId) {
        return this.client.delete("".concat((0, Products_1.getProductsPath)(productId), "/images/").concat(imageId));
    };
    return ProductImages;
}());
exports.default = ProductImages;
