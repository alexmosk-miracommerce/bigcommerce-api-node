"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var paginate_1 = require("../../../../utils/paginate");
var index_1 = require("./index");
var OrderShipments = /** @class */ (function () {
    function OrderShipments(client) {
        this.client = client;
    }
    /**
     * Gets a list of all shipments on an order
     *
     * @param orderId A valid order ID
     * @param params Query parameters used to filter response
     * @returns Promise resolving to a response containing the collection of shipments
     */
    OrderShipments.prototype.list = function (orderId, params) {
        return this.client.get("".concat((0, index_1.getOrdersPath)(orderId), "/shipments"), { params: params });
    };
    /**
     * Returns an iterator object allowing you to paginate through all shipments on an order, one shipment at a time
     *
     * @example
     * for await (const shipment of bcRest.orderShipments.listAll(orderId)) {
     *   console.log(shipment);
     * }
     *
     * @param params Query parameters used to filter response
     * @returns Promise resolving to an order shipment list iterator object
     */
    OrderShipments.prototype.listAll = function (orderId, params) {
        var _this = this;
        return (0, paginate_1.paginateById)(function (id, args) { return _this.list(id, args); }, orderId, params);
    };
    /**
     * Creates a single shipment on an order
     *
     * @param orderId A valid order ID
     * @param data The data to create the order shipment
     * @returns Promise resolving to a response containing the created shipment data
     */
    OrderShipments.prototype.create = function (orderId, data) {
        return this.client.post("".concat((0, index_1.getOrdersPath)(orderId), "/shipments"), data);
    };
    /**
     * Deletes all shipments associated with an order
     *
     * @param orderId A valid order ID
     * @returns Promise resolving to a '204 No Content' response if successful
     */
    OrderShipments.prototype.deleteAll = function (orderId) {
        return this.client.delete("".concat((0, index_1.getOrdersPath)(orderId), "/shipments"));
    };
    /**
     * Gets a count of the number of shipments that have been made for a single order
     *
     * @param orderId A valid order ID
     * @returns Promise resolving to a response containing the shipment count response data for an order
     */
    OrderShipments.prototype.count = function (orderId) {
        return this.client.get("".concat((0, index_1.getOrdersPath)(orderId), "/shipments/count"));
    };
    /**
     * Gets an order shipment by ID
     *
     * @param orderId A valid order ID
     * @param shipmentId A valid shipment ID
     * @returns Promise resolving to a response containing the shipment data
     */
    OrderShipments.prototype.get = function (orderId, shipmentId) {
        return this.client.get("".concat((0, index_1.getOrdersPath)(orderId), "/shipments/").concat(shipmentId));
    };
    /**
     * Updates an existing shipment associated with an order
     *
     * @param orderId A valid order ID
     * @param shipmentId A valid shipment ID
     * @param data The data to update the order shipment
     * @returns Promise resolving to a response containing the updated shipment data
     */
    OrderShipments.prototype.update = function (orderId, shipmentId, data) {
        return this.client.put("".concat((0, index_1.getOrdersPath)(orderId), "/shipments/").concat(shipmentId), data);
    };
    /**
     * Deletes a shipment associated with an order
     *
     * @param orderId A valid order ID
     * @param shipmentId A valid shipment ID
     * @returns Promise resolving to a '204 No Content' response if successful
     */
    OrderShipments.prototype.delete = function (orderId, shipmentId) {
        return this.client.delete("".concat((0, index_1.getOrdersPath)(orderId), "/shipments/").concat(shipmentId));
    };
    return OrderShipments;
}());
exports.default = OrderShipments;
