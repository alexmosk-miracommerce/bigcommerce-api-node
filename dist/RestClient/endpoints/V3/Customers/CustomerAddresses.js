"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Customers_1 = require("./Customers");
var CustomerAddresses = /** @class */ (function () {
    function CustomerAddresses(client) {
        this.client = client;
    }
    /**
     * Returns a list of customer addresses
     *
     * @param params Query parameters used to filter response
     * @returns Promise resolving to a list of customer addresses
     */
    CustomerAddresses.prototype.list = function (params) {
        return this.client.get("".concat((0, Customers_1.getCustomersPath)(), "/addresses"), {
            params: params,
        });
    };
    /**
     * Creates a customer address
     *
     * @param data Data used to create the customer address
     * @returns Promise resolving to a newly created customer address
     */
    CustomerAddresses.prototype.create = function (data) {
        return this.client.post("".concat((0, Customers_1.getCustomersPath)(), "/addresses"), data);
    };
    /**
     * Updates a customer address
     *
     * @data Data used to update a customer address
     * @returns Promise resolving to the updated customer address
     */
    CustomerAddresses.prototype.update = function (data) {
        return this.client.put("".concat((0, Customers_1.getCustomersPath)(), "/addresses"), data);
    };
    /**
     * Deletes a single customer address
     *
     * @param params Query params used to a delete customer address
     * @returns Promise resolving to a 204 No Content Response
     */
    CustomerAddresses.prototype.delete = function (params) {
        return this.client.delete("".concat((0, Customers_1.getCustomersPath)(), "/addresses"), {
            params: params,
        });
    };
    return CustomerAddresses;
}());
exports.default = CustomerAddresses;
