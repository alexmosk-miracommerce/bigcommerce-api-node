"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Customers_1 = require("./Customers");
var CustomerAttributes = /** @class */ (function () {
    function CustomerAttributes(client) {
        this.client = client;
    }
    /**
     * Returns a list of customer attributes
     *
     * @param params Query parameters used to filter response
     * @return Promise resolving to a list of customer attributes
     */
    CustomerAttributes.prototype.list = function (params) {
        return this.client.get("".concat((0, Customers_1.getCustomersPath)(), "/attributes"), {
            params: params,
        });
    };
    /**
     * Creates a customer attribute
     *
     * @param data Data used to create the customer attribute
     * @returns Promise resolving to a newly created customer attribute
     */
    CustomerAttributes.prototype.create = function (data) {
        return this.client.post("".concat((0, Customers_1.getCustomersPath)(), "/attributes"), data);
    };
    /**
     * Updates a customer attribute
     *
     * @data Data used to update a customer attribute
     * @returns Promise resolving to the updated customer attribute
     */
    CustomerAttributes.prototype.update = function (data) {
        return this.client.put("".concat((0, Customers_1.getCustomersPath)(), "/attributes"), data);
    };
    /**
     * Deletes a single customer attribute
     *
     * @param params Query params used to delete a customer attribute
     * @returns Promise resolving to a 204 No Content Response
     */
    CustomerAttributes.prototype.delete = function (params) {
        return this.client.delete("".concat((0, Customers_1.getCustomersPath)(), "/attributes"), {
            params: params,
        });
    };
    return CustomerAttributes;
}());
exports.default = CustomerAttributes;
