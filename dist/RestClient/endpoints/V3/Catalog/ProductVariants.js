"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Products_1 = require("./Products");
var ProductVariants = /** @class */ (function () {
    function ProductVariants(client) {
        this.client = client;
    }
    /**
     * Gets a list of product variants
     *
     * @param productId A valid product ID
     * @param params Query parameters used to filter the response
     * @returns Promise resolving to a list of product variants
     */
    ProductVariants.prototype.list = function (productId, params) {
        return this.client.get("".concat((0, Products_1.getProductsPath)(productId), "/variants"), { params: params });
    };
    /**
     * Creates a single product variant
     *
     * @param productId A valid product ID
     * @param data Data used to create a new product variant
     * @returns Promise resolving to the newly created product variant
     */
    ProductVariants.prototype.create = function (productId, data) {
        return this.client.post("".concat((0, Products_1.getProductsPath)(productId), "/variants"), data);
    };
    /**
     * Gets a single product variant
     *
     * @param productId A valid product ID
     * @param variantId A valid product variant ID
     * @param params Query parameters used to filter the response
     * @returns Promise resolving to a single product variant
     */
    ProductVariants.prototype.get = function (productId, variantId, params) {
        return this.client.get("".concat((0, Products_1.getProductsPath)(productId), "/variants/").concat(variantId), { params: params });
    };
    /**
     * Updates a single product variant
     *
     * @param productId A valid product ID
     * @param variantId A valid product variant ID
     * @param data Data used to update a product variant
     * @returns Promise resolving to the updated product variant
     */
    ProductVariants.prototype.update = function (productId, variantId, data) {
        return this.client.put("".concat((0, Products_1.getProductsPath)(productId), "/variants/").concat(variantId), data);
    };
    /**
     * Deletes a single product variant
     *
     * @param productId A valid product ID
     * @param variantId A valid product variant ID
     * @returns Promise resolving to a 204 No Content response
     */
    ProductVariants.prototype.delete = function (productId, variantId) {
        return this.client.delete("".concat((0, Products_1.getProductsPath)(productId), "/variants/").concat(variantId));
    };
    /**
     * Creates a new product variant image
     *
     * @param productId A valid product ID
     * @param variantId A valid product variant ID
     * @param data Data used to create a new product variant image
     * @returns Promise resolving to the newly created product variant image
     */
    ProductVariants.prototype.createImage = function (productId, variantId, data) {
        return this.client.post("".concat((0, Products_1.getProductsPath)(productId), "/variants/").concat(variantId, "/image"), data);
    };
    return ProductVariants;
}());
exports.default = ProductVariants;
