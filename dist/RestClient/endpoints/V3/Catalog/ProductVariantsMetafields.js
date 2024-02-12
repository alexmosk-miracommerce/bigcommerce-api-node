"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Products_1 = require("./Products");
var ProductVariantsMetafields = /** @class */ (function () {
    function ProductVariantsMetafields(client) {
        this.client = client;
    }
    /**
     * Gets a list of product variant metafields
     *
     * @param productId A valid product ID
     * @param variantId A valid product variant ID
     * @param params Query parameters to filter the response
     * @returns Promise resolving to a list of product variant metafields
     */
    ProductVariantsMetafields.prototype.list = function (productId, variantId, params) {
        return this.client.get("".concat((0, Products_1.getProductsPath)(productId), "/variants/").concat(variantId, "/metafields"), { params: params });
    };
    /**
     * Create a new product variant metafield
     *
     * @param productId A valid product ID
     * @param variantId A valid product variant ID
     * @param data Data to create a new product variant metafield
     * @returns Promise resolving to the newly created product variant metafield
     */
    ProductVariantsMetafields.prototype.create = function (productId, variantId, data) {
        return this.client.post("".concat((0, Products_1.getProductsPath)(productId), "/variants/").concat(variantId, "/metafields"), data);
    };
    /**
     * Gets a single product variant metafield
     *
     * @param productId A valid product ID
     * @param variantId A valid product variant ID
     * @param metafieldId A valid product variant metafield ID
     * @param params Query parameters used to filter the response
     * @returns Promise resolving to a product variant metafield
     */
    ProductVariantsMetafields.prototype.get = function (productId, variantId, metafieldId, params) {
        return this.client.get("".concat((0, Products_1.getProductsPath)(productId), "/variants/").concat(variantId, "/metafields/").concat(metafieldId), { params: params });
    };
    /**
     * Updates a single product variant metafield
     *
     * @param productId A valid product ID
     * @param variantId A valid product variant ID
     * @param metafieldId A valid product variant metafield ID
     * @param data Data to update the product variant metafield
     * @returns Promise resolving to the updated product variant metafield
     */
    ProductVariantsMetafields.prototype.update = function (productId, variantId, metafieldId, data) {
        return this.client.put("".concat((0, Products_1.getProductsPath)(productId), "/variants/").concat(variantId, "/metafields/").concat(metafieldId), data);
    };
    /**
     * Deletes a single product variant metafield
     *
     * @param productId A valid product ID
     * @param variantId A valid product variant ID
     * @param metafieldId A valid product variant metafield ID
     * @returns Promise resolving to a 204 No Content response
     */
    ProductVariantsMetafields.prototype.delete = function (productId, variantId, metafieldId) {
        return this.client.delete("".concat((0, Products_1.getProductsPath)(productId), "/variants/").concat(variantId, "/metafields/").concat(metafieldId));
    };
    return ProductVariantsMetafields;
}());
exports.default = ProductVariantsMetafields;
