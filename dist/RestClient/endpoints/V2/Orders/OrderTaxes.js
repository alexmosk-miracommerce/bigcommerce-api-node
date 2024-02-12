"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var paginate_1 = require("../../../../utils/paginate");
var index_1 = require("./index");
var OrderTaxes = /** @class */ (function () {
    function OrderTaxes(client) {
        this.client = client;
    }
    /**
     * Gets all order taxes using order ID
     *
     * @param orderId A valid order ID
     * @param params Query parameters used to filter response
     * @returns Promise resolving to a response containing the list of taxes associated with an order
     */
    OrderTaxes.prototype.list = function (orderId, params) {
        return this.client.get("".concat((0, index_1.getOrdersPath)(orderId), "/taxes"), { params: params });
    };
    /**
     * Returns an iterator object allowing you to paginate through all taxes on an order, one tax at a time
     *
     * @example
     * for await (const tax of bcRest.orderTaxes.listAll(orderId)) {
     *   console.log(tax);
     * }
     *
     * @param params Query parameters used to filter response
     * @returns Promise resolving to an order tax list iterator object
     */
    OrderTaxes.prototype.listAll = function (orderId, params) {
        var _this = this;
        return (0, paginate_1.paginateById)(function (id, args) { return _this.list(id, args); }, orderId, params);
    };
    return OrderTaxes;
}());
exports.default = OrderTaxes;
