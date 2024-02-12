"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOrdersPath = void 0;
var paginate_1 = require("../../../../utils/paginate");
var OrderCoupons_1 = __importDefault(require("./OrderCoupons"));
var OrderMessages_1 = __importDefault(require("./OrderMessages"));
var OrderProducts_1 = __importDefault(require("./OrderProducts"));
var OrderShipments_1 = __importDefault(require("./OrderShipments"));
var OrderShippingAddresses_1 = __importDefault(require("./OrderShippingAddresses"));
var OrderShippingQuotes_1 = __importDefault(require("./OrderShippingQuotes"));
var OrderStatus_1 = __importDefault(require("./OrderStatus"));
var OrderTaxes_1 = __importDefault(require("./OrderTaxes"));
var ordersPath = '/v2/orders';
/**
 * Builds a base Orders API path given an optional order ID
 *
 * @param id Optional Order ID
 * @returns Either '/v2/orders/:orderId' or '/v2/orders'
 */
var getOrdersPath = function (id) { return "".concat(ordersPath).concat(id ? "/".concat(id) : ''); };
exports.getOrdersPath = getOrdersPath;
var OrdersV2 = /** @class */ (function () {
    function OrdersV2(client) {
        this.client = client;
        this.orderCoupons = new OrderCoupons_1.default(client);
        this.orderProducts = new OrderProducts_1.default(client);
        this.orderTaxes = new OrderTaxes_1.default(client);
        this.orderStatus = new OrderStatus_1.default(client);
        this.orderShipments = new OrderShipments_1.default(client);
        this.orderShippingAddresses = new OrderShippingAddresses_1.default(client);
        this.orderMessages = new OrderMessages_1.default(client);
        this.orderShippingQuotes = new OrderShippingQuotes_1.default(client);
    }
    /**
     * Gets a single order by ID
     *
     * @param orderId A valid order ID
     * @returns Promise resolving to a response containing the order data
     */
    OrdersV2.prototype.get = function (orderId) {
        return this.client.get((0, exports.getOrdersPath)(orderId));
    };
    /**
     * Updates a single order by ID
     *
     * @param orderId A valid order ID
     * @param data The data to update on the order
     * @returns Promise resolving to a response containing the updated order data
     */
    OrdersV2.prototype.update = function (orderId, data) {
        return this.client.put((0, exports.getOrdersPath)(orderId), data);
    };
    /**
     * Archives a single order by ID
     *
     * @param orderId A valid order ID
     * @returns Promise resolving to a '204 No Content' response if successful
     */
    OrdersV2.prototype.archive = function (orderId) {
        return this.client.delete((0, exports.getOrdersPath)(orderId));
    };
    /**
     * Gets an array of orders in the store organized by order status
     *
     * @returns Promise resolving to a response containing the order count data
     */
    OrdersV2.prototype.count = function () {
        return this.client.get("".concat((0, exports.getOrdersPath)(), "/count"));
    };
    /**
     * Gets a list of orders in the store
     *
     * @param params Query parameters used to filter response
     * @returns Promise resolving to a response containing the list of orders
     */
    OrdersV2.prototype.list = function (params) {
        return this.client.get((0, exports.getOrdersPath)(), { params: params });
    };
    /**
     * Returns an iterator object allowing you to paginate through all orders in a store, one order at a time
     *
     * @example
     * for await (const order of bcRest.orders.listAll()) {
     *   console.log(order);
     * }
     *
     * @param params Query parameters used to filter response
     * @returns Promise resolving to an order list iterator object
     */
    OrdersV2.prototype.listAll = function (params) {
        var _this = this;
        return (0, paginate_1.paginate)(function (args) { return _this.list(args); }, params);
    };
    /**
     * Creates a new order
     *
     * @param data Data used to create the order
     * @returns Promise resolving to a response containing the created order data
     */
    OrdersV2.prototype.create = function (data) {
        return this.client.post((0, exports.getOrdersPath)(), data);
    };
    /**
     * Archives all orders in the store
     *
     * @returns Promise resolving to a '204 No Content' response if successful
     */
    OrdersV2.prototype.archiveAll = function () {
        return this.client.delete((0, exports.getOrdersPath)());
    };
    return OrdersV2;
}());
exports.default = OrdersV2;
