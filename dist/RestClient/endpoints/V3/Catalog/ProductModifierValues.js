"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Products_1 = require("./Products");
var ProductModifierValues = /** @class */ (function () {
    function ProductModifierValues(client) {
        this.client = client;
    }
    /**
     * Gets a list of product modifier values
     *
     * @param productId A valid product ID
     * @param modifierId A valid product modifier ID
     * @param params Query parameters used to filter the response
     * @returns Promise resolving to the list of product modifier values
     */
    ProductModifierValues.prototype.list = function (productId, modifierId, params) {
        return this.client.get("".concat((0, Products_1.getProductsPath)(productId), "/modifiers/").concat(modifierId, "/values"), { params: params });
    };
    /**
     * Creates a new product modifier value
     *
     * @param productId A valid product ID
     * @param modifierId A valid product modifier ID
     * @param data Data used to create the product modifier value
     * @returns Promise resolving to the newly created product modifier value
     */
    ProductModifierValues.prototype.create = function (productId, modifierId, data) {
        return this.client.post("".concat((0, Products_1.getProductsPath)(productId), "/modifiers/").concat(modifierId, "/values"), data);
    };
    /**
     * Gets a single product modifier value
     *
     * @param productId A valid product ID
     * @param modifierId A valid product modifier ID
     * @param valueId A valid product modifier value ID
     * @param params Query parameters used to filter the response
     * @returns Promise resolving to the product modifier value
     */
    ProductModifierValues.prototype.get = function (productId, modifierId, valueId, params) {
        return this.client.get("".concat((0, Products_1.getProductsPath)(productId), "/modifiers/").concat(modifierId, "/values/").concat(valueId), { params: params });
    };
    /**
     * Updates a single product modifier value
     *
     * @param productId A valid product ID
     * @param modifierId A valid product modifier ID
     * @param valueId A valid product modifier value ID
     * @param data Data used to update the product modifier value
     * @returns Promise resolving to a product modifier value
     */
    ProductModifierValues.prototype.update = function (productId, modifierId, valueId, data) {
        return this.client.put("".concat((0, Products_1.getProductsPath)(productId), "/modifiers/").concat(modifierId, "/values/").concat(valueId), data);
    };
    /**
     * Deletes a single product modifier value
     *
     * @param productId A valid product ID
     * @param modifierId A valid product modifier ID
     * @param valueId A valid product modifier value ID
     * @returns Promise resolving to a 204 No Content response
     */
    ProductModifierValues.prototype.delete = function (productId, modifierId, valueId) {
        return this.client.delete("".concat((0, Products_1.getProductsPath)(productId), "/modifiers/").concat(modifierId, "/values/").concat(valueId));
    };
    return ProductModifierValues;
}());
exports.default = ProductModifierValues;
