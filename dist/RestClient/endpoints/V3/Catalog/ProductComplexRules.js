"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Products_1 = require("./Products");
var ProductComplexRules = /** @class */ (function () {
    function ProductComplexRules(client) {
        this.client = client;
    }
    /**
     * Gets a list of all product complex rules
     *
     * @param id A valid product ID
     * @param params Query parameters used to filter the response
     * @returns Promise resolving to a list of product complex rules
     */
    ProductComplexRules.prototype.list = function (id, params) {
        return this.client.get("".concat((0, Products_1.getProductsPath)(id), "/complex-rules"), { params: params });
    };
    /**
     * Creates a new product complex rule
     *
     * @param id A valid product ID
     * @param data Data used to create a complex rule
     * @returns Promise resolving to the newly created product complex rule
     */
    ProductComplexRules.prototype.create = function (id, data) {
        return this.client.post("".concat((0, Products_1.getProductsPath)(id), "/complex-rules"), data);
    };
    /**
     * Gets a single product complex rule
     *
     * @param productId A valid product ID
     * @param ruleId A valid complex rule ID
     * @param params Query parameters used to filter the response
     * @returns Promise resolving to a single product complex rule
     */
    ProductComplexRules.prototype.get = function (productId, ruleId, params) {
        return this.client.get("".concat((0, Products_1.getProductsPath)(productId), "/complex-rules/").concat(ruleId), { params: params });
    };
    /**
     * Updates a single product complex rule
     *
     * @param productId A valid product ID
     * @param ruleId A valid complex rule ID
     * @param data Data used to update a complex rule
     * @returns Promise resolving to the updated product complex rule
     */
    ProductComplexRules.prototype.update = function (productId, ruleId, data) {
        return this.client.put("".concat((0, Products_1.getProductsPath)(productId), "/complex-rules/").concat(ruleId), data);
    };
    /**
     * Deletees a single product complex rule
     *
     * @param productId A valid product ID
     * @param ruleId A valid complex rule ID
     * @returns Promise resolving to a 204 No Content response
     */
    ProductComplexRules.prototype.delete = function (productId, ruleId) {
        return this.client.delete("".concat((0, Products_1.getProductsPath)(productId), "/complex-rules/").concat(ruleId));
    };
    return ProductComplexRules;
}());
exports.default = ProductComplexRules;
