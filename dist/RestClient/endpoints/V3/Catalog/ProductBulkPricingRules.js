"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Products_1 = require("./Products");
var ProductBulkPricingRules = /** @class */ (function () {
    function ProductBulkPricingRules(client) {
        this.client = client;
    }
    /**
     * Returns a list of bulk pricing rules for a product
     *
     * @param id A valid product ID
     * @param params Query parameters used to filter the response
     * @returns Promise resolving to a list of bulk pricing rules for a product
     */
    ProductBulkPricingRules.prototype.list = function (id, params) {
        return this.client.get("".concat((0, Products_1.getProductsPath)(id), "/bulk-pricing-rules"), { params: params });
    };
    /**
     * Creates a new bulk pricing rule for a product
     *
     * @param id A valid product ID
     * @param data Data used to create the bulk pricing rule
     * @param params Query parameters used to filter the response
     * @returns Promise resolving to the newly created bulk pricing rule
     */
    ProductBulkPricingRules.prototype.create = function (id, data, params) {
        return this.client.post("".concat((0, Products_1.getProductsPath)(id), "/bulk-pricing-rules"), data, { params: params });
    };
    /**
     * Gets a single bulk pricing rule for a product
     *
     * @param productId A valid product ID
     * @param ruleId A valid bulk pricing rule ID
     * @param params Query parameters used to filter the response
     * @returns Promise resolving to a single bulk pricing rule
     */
    ProductBulkPricingRules.prototype.get = function (productId, ruleId, params) {
        return this.client.get("".concat((0, Products_1.getProductsPath)(productId), "/bulk-pricing-rules/").concat(ruleId), { params: params });
    };
    /**
     * Updates a single bulk pricing rule for a product
     *
     * @param productId A valid product ID
     * @param ruleId A valid bulk pricing rule ID
     * @param data Data used to update the bulk pricing rule
     * @returns Promise resolving to the updated bulk pricing rule
     */
    ProductBulkPricingRules.prototype.update = function (productId, ruleId, data) {
        return this.client.put("".concat((0, Products_1.getProductsPath)(productId), "/bulk-pricing-rules/").concat(ruleId), data);
    };
    /**
     * Deletes a single bulk pricing rule for a product
     *
     * @param productId A valid product ID
     * @param ruleId A valid bulk pricing rule ID
     * @returns Promise resolving to a 204 No Content response
     */
    ProductBulkPricingRules.prototype.delete = function (productId, ruleId) {
        return this.client.delete("".concat((0, Products_1.getProductsPath)(productId), "/bulk-pricing-rules/").concat(ruleId));
    };
    return ProductBulkPricingRules;
}());
exports.default = ProductBulkPricingRules;
