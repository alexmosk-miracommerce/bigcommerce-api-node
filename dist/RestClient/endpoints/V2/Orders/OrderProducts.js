"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var paginate_1 = require("../../../../utils/paginate");
var index_1 = require("./index");
var OrderProducts = /** @class */ (function () {
    function OrderProducts(client) {
        this.client = client;
    }
    /**
     * Lists products associated with an order
     *
     * @param orderId A valid order ID
     * @param params Query parameters used to filter response
     * @returns Promise resolving to a response containing the list of products associated with an order
     */
    OrderProducts.prototype.list = function (orderId, params) {
        return this.client.get("".concat((0, index_1.getOrdersPath)(orderId), "/products"), { params: params });
    };
    /**
     * Returns an iterator object allowing you to paginate through all products on an order, one product at a time
     *
     * @example
     * for await (const product of bcRest.orderProducts.listAll(orderId)) {
     *   console.log(product);
     * }
     *
     * @param params Query parameters used to filter response
     * @returns Promise resolving to an order product list iterator object
     */
    OrderProducts.prototype.listAll = function (orderId, params) {
        var _this = this;
        return (0, paginate_1.paginateById)(function (id, args) { return _this.list(id, args); }, orderId, params);
    };
    /**
     * Gets a single order product
     *
     * @param orderId The order ID
     * @param productId The order product ID
     * @returns Promise resolving to a response containing the single order product data
     */
    OrderProducts.prototype.get = function (orderId, productId) {
        return this.client.get("".concat((0, index_1.getOrdersPath)(orderId), "/products/").concat(productId));
    };
    return OrderProducts;
}());
exports.default = OrderProducts;
