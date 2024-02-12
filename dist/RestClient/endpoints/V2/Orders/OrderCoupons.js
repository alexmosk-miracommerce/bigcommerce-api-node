"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var paginate_1 = require("../../../../utils/paginate");
var index_1 = require("./index");
var OrderCoupons = /** @class */ (function () {
    function OrderCoupons(client) {
        this.client = client;
    }
    /**
     * List all coupons associated with an order
     *
     * @param orderId A valid order ID
     * @returns Promise resolving to a response containing the list of coupons associated with an order
     */
    OrderCoupons.prototype.list = function (orderId, params) {
        return this.client.get("".concat((0, index_1.getOrdersPath)(orderId), "/coupons"), { params: params });
    };
    /**
     * Returns an iterator object allowing you to paginate through all coupons on an order, one coupon at a time
     *
     * @example
     * for await (const coupon of bcRest.orderCoupons.listAll(orderId)) {
     *   console.log(coupon);
     * }
     *
     * @param params Query parameters used to filter response
     * @returns Promise resolving to an order coupon list iterator object
     */
    OrderCoupons.prototype.listAll = function (orderId, params) {
        var _this = this;
        return (0, paginate_1.paginateById)(function (id, args) { return _this.list(id, args); }, orderId, params);
    };
    return OrderCoupons;
}());
exports.default = OrderCoupons;
