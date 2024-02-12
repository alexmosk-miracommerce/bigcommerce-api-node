"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Products_1 = require("./Products");
var ProductVariantOptionValues = /** @class */ (function () {
    function ProductVariantOptionValues(client) {
        this.client = client;
    }
    /**
     * Gets a list of product variant option values
     *
     * @param productId A valid product ID
     * @param optionId A valid product option ID
     * @param params Query parameters used to filter the response
     * @returns Promise resolving to a list of product variant option values
     */
    ProductVariantOptionValues.prototype.list = function (productId, optionId, params) {
        return this.client.get("".concat((0, Products_1.getProductsPath)(productId), "/options/").concat(optionId, "/values"), { params: params });
    };
    /**
     * Creates a single product variant option value
     *
     * @param productId A valid product ID
     * @param optionId A valid product option ID
     * @param data Data used to create a new product variant option value
     * @returns Promise resolving to the newly created product variant option value
     */
    ProductVariantOptionValues.prototype.create = function (productId, optionId, data) {
        return this.client.post("".concat((0, Products_1.getProductsPath)(productId), "/options/").concat(optionId, "/values"), data);
    };
    /**
     * Gets a single product variant option value
     *
     * @param productId A valid product ID
     * @param optionId A valid product option ID
     * @param valueId A valid product variant option value ID
     * @param params Query parameters used to filter the response
     * @returns Promise resolving to a single product variant option value
     */
    ProductVariantOptionValues.prototype.get = function (productId, optionId, valueId, params) {
        return this.client.get("".concat((0, Products_1.getProductsPath)(productId), "/options/").concat(optionId, "/values/").concat(valueId), { params: params });
    };
    /**
     * Updates a single product variant option value
     *
     * @param productId A valid product ID
     * @param optionId A valid product option ID
     * @param valueId A valid product variant option value ID
     * @param data Data used to update a product variant option value
     * @returns Promise resolving to the updated product variant option value
     */
    ProductVariantOptionValues.prototype.update = function (productId, optionId, valueId, data) {
        return this.client.put("".concat((0, Products_1.getProductsPath)(productId), "/options/").concat(optionId, "/values/").concat(valueId), data);
    };
    /**
     * Deletes a single product variant option value
     *
     * @param productId A valid product ID
     * @param optionId A valid product option ID
     * @param valueId A valid product variant option value ID
     * @returns Promise resolving to a 204 No Content response
     */
    ProductVariantOptionValues.prototype.delete = function (productId, optionId, valueId) {
        return this.client.delete("".concat((0, Products_1.getProductsPath)(productId), "/options/").concat(optionId, "/values/").concat(valueId));
    };
    return ProductVariantOptionValues;
}());
exports.default = ProductVariantOptionValues;
