"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Customers_1 = require("./Customers");
var CustomerFormFieldValues = /** @class */ (function () {
    function CustomerFormFieldValues(client) {
        this.client = client;
    }
    /**
     * Returns a list of form field values for the customer or customer address object
     *
     * @param params Query parameters used to filter response
     * @return Promise resolving to a list of form field values
     */
    CustomerFormFieldValues.prototype.list = function (params) {
        return this.client.get("".concat((0, Customers_1.getCustomersPath)(), "/form-field-values"), {
            params: params,
        });
    };
    /**
     * Updates form field values on the customer or customer address objects
     *
     * @data Data used to update the attribute values on the customer
     * @returns Promise resolving to the updated attribute values on the customer
     */
    CustomerFormFieldValues.prototype.update = function (data) {
        return this.client.put("".concat((0, Customers_1.getCustomersPath)(), "/form-field-values"), data);
    };
    return CustomerFormFieldValues;
}());
exports.default = CustomerFormFieldValues;
