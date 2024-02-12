"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var basePath = '/v2/order_statuses';
/**
 * Builds a base Order Status API path given an optional order status ID
 *
 * @param id Optional Order Status ID
 * @returns Either '/v2/order_statuses/:orderStatusId' or '/v2/order_statuses'
 */
var getBasePath = function (id) { return "".concat(basePath, "/").concat(id !== null && id !== void 0 ? id : ''); };
var OrderStatus = /** @class */ (function () {
    function OrderStatus(client) {
        this.client = client;
    }
    /**
     * Gets a list of order statuses in the store
     *
     * @returns Promise resolving to a response containing the collection of order statuses
     */
    OrderStatus.prototype.list = function () {
        return this.client.get(getBasePath());
    };
    /**
     * Gets a single order status in the store
     *
     * @param statusId Order status ID
     * @returns Promise resolving to a response containing the single order status response
     */
    OrderStatus.prototype.get = function (statusId) {
        return this.client.get(getBasePath(statusId));
    };
    return OrderStatus;
}());
exports.default = OrderStatus;
