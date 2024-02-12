"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Products_1 = require("./Products");
var ProductVariantOptions = /** @class */ (function () {
    function ProductVariantOptions(client) {
        this.client = client;
    }
    /**
     * Gets a list of product variant options
     *
     * @param productId A valid product ID
     * @param params Query parameters used to filter the response
     * @returns Promise resolving to a list of product variant options
     */
    ProductVariantOptions.prototype.list = function (productId, params) {
        return this.client.get("".concat((0, Products_1.getProductsPath)(productId), "/options"), { params: params });
    };
    /**
     * Creates a new product variant option
     *
     * @param productId A valid product ID
     * @param data Data used to create a new product variant option
     * @returns Promise resolving to the newly created product variant option
     */
    ProductVariantOptions.prototype.create = function (productId, data) {
        return this.client.post("".concat((0, Products_1.getProductsPath)(productId), "/options"), data);
    };
    /**
     * Gets a single product variant option
     *
     * @param productId A valid product ID
     * @param optionId A valid product variant option ID
     * @param params Query parameters used to filter the response
     * @returns Promise resolving to a single product variant option
     */
    ProductVariantOptions.prototype.get = function (productId, optionId, params) {
        return this.client.get("".concat((0, Products_1.getProductsPath)(productId), "/options/").concat(optionId), { params: params });
    };
    /**
     * Updates a single product variant option
     *
     * @param productId A valid product ID
     * @param optionId A valid product variant option ID
     * @param data Data used to update a product variant option
     * @returns Promise resolving to the updated product variant option
     */
    ProductVariantOptions.prototype.update = function (productId, optionId, data) {
        return this.client.put("".concat((0, Products_1.getProductsPath)(productId), "/options/").concat(optionId), data);
    };
    /**
     * Deletes a single product variant option
     *
     * @param productId A valid product ID
     * @param optionId A valid product variant option ID
     * @returns Promise resolving to a 204 No Content response
     */
    ProductVariantOptions.prototype.delete = function (productId, optionId) {
        return this.client.delete("".concat((0, Products_1.getProductsPath)(productId), "/options/").concat(optionId));
    };
    return ProductVariantOptions;
}());
exports.default = ProductVariantOptions;
