"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Products_1 = require("./Products");
var ProductsChannelAssignments = /** @class */ (function () {
    function ProductsChannelAssignments(client) {
        this.client = client;
    }
    /**
     * Gets a list of products channel assignments
     *
     * @param params Query parameters to filter the response
     * @returns Promise resolving to a list of product channel assignments
     */
    ProductsChannelAssignments.prototype.list = function (params) {
        return this.client.get("".concat((0, Products_1.getProductsPath)(), "/channel-assignments"), { params: params });
    };
    /**
     * Creates products channel assignments
     *
     * @param data Data used to create a product channel assignment
     * @returns Promise resolving to a 204 No Content response
     */
    ProductsChannelAssignments.prototype.create = function (data) {
        return this.client.put("".concat((0, Products_1.getProductsPath)(), "/channel-assignments"), data);
    };
    /**
     * Deletes products channel assignments
     * @param params Query parameters to filter the response
     * @returns Promise resolving to a 204 No Content response
     */
    ProductsChannelAssignments.prototype.delete = function (params) {
        return this.client.delete("".concat((0, Products_1.getProductsPath)(), "/channel-assignments"), { params: params });
    };
    return ProductsChannelAssignments;
}());
exports.default = ProductsChannelAssignments;
