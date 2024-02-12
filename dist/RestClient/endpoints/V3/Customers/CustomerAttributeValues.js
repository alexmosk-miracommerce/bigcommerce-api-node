"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Customers_1 = require("./Customers");
var CustomerAttributesValues = /** @class */ (function () {
    function CustomerAttributesValues(client) {
        this.client = client;
    }
    /**
     * Returns a list of customer attribute values
     *
     * @param params Query parameters used to filter response
     * @return Promise resolving to a list of customer attributes values
     */
    CustomerAttributesValues.prototype.list = function (params) {
        return this.client.get("".concat((0, Customers_1.getCustomersPath)(), "/attribute-values"), {
            params: params,
        });
    };
    /**
     * Upserts Customer Attribute Values
     *
     * @data Data used to update the attribute values on the customer
     * @returns Promise resolving to the updated attribute values on the customer
     */
    CustomerAttributesValues.prototype.update = function (data) {
        return this.client.put("".concat((0, Customers_1.getCustomersPath)(), "/attribute-values"), data);
    };
    /**
     * Deletes a single customer attribute value
     *
     * @param params Data used to delete the attribute value from the customer
     * @returns Promise resolving to a 204 No Content Response
     */
    CustomerAttributesValues.prototype.delete = function (params) {
        return this.client.delete("".concat((0, Customers_1.getCustomersPath)(), "/attribute-values"), {
            params: params,
        });
    };
    return CustomerAttributesValues;
}());
exports.default = CustomerAttributesValues;
