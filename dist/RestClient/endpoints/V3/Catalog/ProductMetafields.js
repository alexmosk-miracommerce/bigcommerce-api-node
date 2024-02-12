"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Products_1 = require("./Products");
var ProductMetafields = /** @class */ (function () {
    function ProductMetafields(client) {
        this.client = client;
    }
    /**
     * Gets a list of product metafields
     *
     * @param productId A valid product ID
     * @param params Query parameters to filter the response
     * @returns Promise resolving to a list of product metafields
     */
    ProductMetafields.prototype.list = function (productId, params) {
        return this.client.get("".concat((0, Products_1.getProductsPath)(productId), "/metafields"), { params: params });
    };
    /**
     * Creates a new product metafield
     *
     * @param productId A valid product ID
     * @param data Data used to create a new product metafield
     * @returns Promise resolving to the newly created product metafield
     */
    ProductMetafields.prototype.create = function (productId, data) {
        return this.client.post("".concat((0, Products_1.getProductsPath)(productId), "/metafields"), data);
    };
    /**
     * Gets a single product metafield by ID
     *
     * @param productId A valid product ID
     * @param metafieldId A valid product metafield ID
     * @param params Query parameters used to filter the response
     * @returns Promise resolving to a single product metafield
     */
    ProductMetafields.prototype.get = function (productId, metafieldId, params) {
        return this.client.get("".concat((0, Products_1.getProductsPath)(productId), "/metafields/").concat(metafieldId), { params: params });
    };
    /**
     * Updates a single product metafield
     *
     * @param productId A valid product ID
     * @param metafieldId A valid product metafield ID
     * @param data Data used to update the product metafield
     * @returns Promise resolving to the updated product metafield
     */
    ProductMetafields.prototype.update = function (productId, metafieldId, data) {
        return this.client.put("".concat((0, Products_1.getProductsPath)(productId), "/metafields/").concat(metafieldId), data);
    };
    /**
     * Deletes a single product metafield
     *
     * @param productId A valid product ID
     * @param metafieldId A valid product metafield ID
     * @returns Promise resolving to the deleted product metafield
     */
    ProductMetafields.prototype.delete = function (productId, metafieldId) {
        return this.client.delete("".concat((0, Products_1.getProductsPath)(productId), "/metafields/").concat(metafieldId));
    };
    return ProductMetafields;
}());
exports.default = ProductMetafields;
