"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
var OrderShippingQuotes = /** @class */ (function () {
    function OrderShippingQuotes(client) {
        this.client = client;
    }
    /**
     * Gets all shipping quotes persisted on an order
     *
     * @param orderId A valid order ID
     * @param addressId A valid shipping address ID
     * @returns Promise resolving to a response containing the collection of shipping quotes on an order
     */
    OrderShippingQuotes.prototype.list = function (orderId, addressId) {
        return this.client.get("".concat((0, index_1.getOrdersPath)(orderId), "/shipping_addresses/").concat(addressId, "/shipping_quotes"));
    };
    return OrderShippingQuotes;
}());
exports.default = OrderShippingQuotes;
