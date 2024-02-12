"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Products_1 = require("./Products");
var ProductModifiers = /** @class */ (function () {
    function ProductModifiers(client) {
        this.client = client;
    }
    /**
     * Gets a list of product modifiers
     *
     * @param productId A valid product ID
     * @param params Query parameters used to filter the response
     * @returns Promise resolving to a list of modifiers
     */
    ProductModifiers.prototype.list = function (productId, params) {
        return this.client.get("".concat((0, Products_1.getProductsPath)(productId), "/modifiers"), { params: params });
    };
    /**
     * Creates a new product modifier
     *
     * @param productId A valid product ID
     * @param data Data used to create a new product modifier
     * @returns Promise resolving to the newly created modifier
     */
    ProductModifiers.prototype.create = function (productId, data) {
        return this.client.post("".concat((0, Products_1.getProductsPath)(productId), "/modifiers"), data);
    };
    /**
     * Gets a single product modifier
     *
     * @param productId A valid product ID
     * @param modifierId A valid product modifier ID
     * @param params Query parameters used to filter the response
     * @returns Promise resolving to a single product modifier
     */
    ProductModifiers.prototype.get = function (productId, modifierId, params) {
        return this.client.get("".concat((0, Products_1.getProductsPath)(productId), "/modifiers/").concat(modifierId), { params: params });
    };
    /**
     * Updates a single product modifier
     *
     * @param productId A valid product ID
     * @param modifierId A valid product modifier ID
     * @param data Data used to update a product modifier
     * @returns Promise resolving to the updated product modifier
     */
    ProductModifiers.prototype.update = function (productId, modifierId, data) {
        return this.client.put("".concat((0, Products_1.getProductsPath)(productId), "/modifiers/").concat(modifierId), data);
    };
    /**
     * Deletes a single product modifier
     *
     * @param productId A valid product ID
     * @param modifierId A valid product modifier ID
     * @returns Promise resolving to the deleted product modifier
     */
    ProductModifiers.prototype.delete = function (productId, modifierId) {
        return this.client.delete("".concat((0, Products_1.getProductsPath)(productId), "/modifiers/").concat(modifierId));
    };
    return ProductModifiers;
}());
exports.default = ProductModifiers;
