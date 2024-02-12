"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var paginate_1 = require("../../../../utils/paginate");
var index_1 = require("./index");
var OrderMessages = /** @class */ (function () {
    function OrderMessages(client) {
        this.client = client;
    }
    /**
     * Gets all messages associated with an order
     *
     * @param orderId A valid order ID
     * @param params Query parameters used to filter response
     * @returns Promise resolving to a response containing the collection of messages on an order
     */
    OrderMessages.prototype.list = function (orderId, params) {
        return this.client.get("".concat((0, index_1.getOrdersPath)(orderId), "/messages"), { params: params });
    };
    /**
     * Returns an iterator object allowing you to paginate through all messages on an order, one message at a time
     *
     * @example
     * for await (const message of bcRest.orderMessages.listAll(orderId)) {
     *   console.log(message);
     * }
     *
     * @param params Query parameters used to filter response
     * @returns Promise resolving to an order message list iterator object
     */
    OrderMessages.prototype.listAll = function (orderId, params) {
        var _this = this;
        return (0, paginate_1.paginateById)(function (id, args) { return _this.list(id, args); }, orderId, params);
    };
    return OrderMessages;
}());
exports.default = OrderMessages;
