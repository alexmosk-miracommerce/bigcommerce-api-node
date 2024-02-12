"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Category_1 = require("./Category");
var ProductSortOrder = /** @class */ (function () {
    function ProductSortOrder(client) {
        this.client = client;
    }
    /**
     * Retrieve a list of products sorted by their sort order
     *
     * @param id A valid Category ID
     * @returns Promise resolving to a list of products and their sort order
     */
    ProductSortOrder.prototype.list = function (id) {
        return this.client.get("".concat((0, Category_1.getCategoryPath)(id), "/products/sort-order"));
    };
    /**
     * Updates the sort order of a list of products in a category
     *
     * @param id A valid Category ID
     * @param data Data used to update the sort order of products
     * @returns Promise resolving to a list of products and their sort order
     */
    ProductSortOrder.prototype.update = function (id, data) {
        return this.client.put("".concat((0, Category_1.getCategoryPath)(id), "/products/sort-order"), data);
    };
    return ProductSortOrder;
}());
exports.default = ProductSortOrder;
