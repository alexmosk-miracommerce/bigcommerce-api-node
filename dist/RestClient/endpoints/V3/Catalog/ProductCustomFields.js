"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Products_1 = require("./Products");
var ProductCustomFields = /** @class */ (function () {
    function ProductCustomFields(client) {
        this.client = client;
    }
    /**
     * Gets a list of custom fields for a given product
     *
     * @param id A valid product ID
     * @param params Query parameters used to filter the response
     * @returns Promise resolving to a list of product custom fields
     */
    ProductCustomFields.prototype.list = function (id, params) {
        return this.client.get("".concat((0, Products_1.getProductsPath)(id), "/custom-fields"), { params: params });
    };
    /**
     * Creates a new product custom field
     *
     * @param id A valid product ID
     * @param data Data used to create a new product custom field
     * @returns Promise resolving to the newly created product custom field
     */
    ProductCustomFields.prototype.create = function (id, data) {
        return this.client.post("".concat((0, Products_1.getProductsPath)(id), "/custom-fields"), data);
    };
    /**
     * Gets a single product custom field
     *
     * @param productId A valid product ID
     * @param customFieldId A valid custom field ID
     * @param params Query parameters to filter the response
     * @returns Promise resolving to a single product custom field
     */
    ProductCustomFields.prototype.get = function (productId, customFieldId, params) {
        return this.client.get("".concat((0, Products_1.getProductsPath)(productId), "/custom-fields/").concat(customFieldId), { params: params });
    };
    /**
     * Updates a single product custom field
     *
     * @param productId A valid product ID
     * @param customFieldId A valid custom field ID
     * @param data Data used to update the custom field
     * @returns Promise resolving to the updated custom field
     */
    ProductCustomFields.prototype.update = function (productId, customFieldId, data) {
        return this.client.put("".concat((0, Products_1.getProductsPath)(productId), "/custom-fields/").concat(customFieldId), data);
    };
    /**
     * Deletes a single product custom field
     *
     * @param productId A valid product ID
     * @param customFieldId A valid custom field ID
     * @returns Promise resolving to a 204 No Content response
     */
    ProductCustomFields.prototype.delete = function (productId, customFieldId) {
        return this.client.delete("".concat((0, Products_1.getProductsPath)(productId), "/custom-fields/").concat(customFieldId));
    };
    return ProductCustomFields;
}());
exports.default = ProductCustomFields;
