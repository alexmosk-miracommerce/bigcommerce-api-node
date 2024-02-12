"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var paginate_1 = require("../../../../utils/paginate");
var index_1 = require("./index");
var OrderShippingAddresses = /** @class */ (function () {
    function OrderShippingAddresses(client) {
        this.client = client;
    }
    /**
     * Gets all shipping addresses on an order using the order ID
     *
     * @param orderId A valid order ID
     * @returns Promise resolving to a response containing the collection of shipping addresses
     */
    OrderShippingAddresses.prototype.list = function (orderId, params) {
        return this.client.get("".concat((0, index_1.getOrdersPath)(orderId), "/shipping_addresses"), { params: params });
    };
    /**
     * Returns an iterator object allowing you to paginate through all shipping addresses on an order,
     * one address at a time
     *
     * @example
     * for await (const shippingAddress of bcRest.orderShippingAddresses.listAll(orderId)) {
     *   console.log(shippingAddress);
     * }
     *
     * @param params Query parameters used to filter response
     * @returns Promise resolving to an order shipping address list iterator object
     */
    OrderShippingAddresses.prototype.listAll = function (orderId, params) {
        var _this = this;
        return (0, paginate_1.paginateById)(function (id, args) { return _this.list(id, args); }, orderId, params);
    };
    /**
     * Gets a shipping address associated with an order
     *
     * @param orderId A valid order ID
     * @param addressId A valid shipping address ID
     * @returns Promise resolving to a response containing the shipping address data
     */
    OrderShippingAddresses.prototype.get = function (orderId, addressId) {
        return this.client.get("".concat((0, index_1.getOrdersPath)(orderId), "/shipping_addresses/").concat(addressId));
    };
    /**
     * Updates a shipping address associated with an order
     *
     * @param orderId A valid order ID
     * @param addressId A valid shipping address ID
     * @param data The data to update the shipping address on the order
     * @returns Promise resolving to a response containing the updated shipping address data
     */
    OrderShippingAddresses.prototype.update = function (orderId, addressId, data) {
        return this.client.put("".concat((0, index_1.getOrdersPath)(orderId), "/shipping_addresses/").concat(addressId), data);
    };
    return OrderShippingAddresses;
}());
exports.default = OrderShippingAddresses;
