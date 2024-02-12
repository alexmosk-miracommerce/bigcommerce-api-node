"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Products_1 = require("./Products");
var ProductsCategoryAssignments = /** @class */ (function () {
    function ProductsCategoryAssignments(client) {
        this.client = client;
    }
    /**
     * Gets a list of products category assignments
     *
     * @param params Query parameters used to filter the response
     * @returns Promise resolving to a list of product category assignments
     */
    ProductsCategoryAssignments.prototype.list = function (params) {
        return this.client.get("".concat((0, Products_1.getProductsPath)(), "/category-assignments"), { params: params });
    };
    /**
     * Creates products category assignments
     *
     * @param data Data used to create a new product category assignment
     * @returns Promise resolving to a 204 No Content response
     */
    ProductsCategoryAssignments.prototype.create = function (data) {
        return this.client.put("".concat((0, Products_1.getProductsPath)(), "/category-assignments"), data);
    };
    /**
     * Deletes products category assignments
     *
     * @param params Query parameters used to filter the response
     * @returns Promise resolving to a 204 No Content response
     */
    ProductsCategoryAssignments.prototype.delete = function (params) {
        return this.client.delete("".concat((0, Products_1.getProductsPath)(), "/category-assignments"), { params: params });
    };
    return ProductsCategoryAssignments;
}());
exports.default = ProductsCategoryAssignments;
