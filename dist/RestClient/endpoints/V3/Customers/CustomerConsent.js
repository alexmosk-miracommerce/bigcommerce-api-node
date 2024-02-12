"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Customers_1 = require("./Customers");
var CustomersConsent = /** @class */ (function () {
    function CustomersConsent(client) {
        this.client = client;
    }
    /**
     * Gets the status of a single customer's consent
     *
     * @param customerId A valid Customer ID
     * @returns Promise resolving to single customer consent status
     */
    CustomersConsent.prototype.get = function (customerId) {
        return this.client.get("".concat((0, Customers_1.getCustomersPath)(customerId), "/consent"));
    };
    /**
     * Updates the status of a customer's consent
     * @param customerId A valid Customer ID
     * @data Data used to update a customer's consent
     * @returns Promise resolving to the updated customer consent
     */
    CustomersConsent.prototype.update = function (customerId, data) {
        return this.client.put("".concat((0, Customers_1.getCustomersPath)(customerId), "/consent"), data);
    };
    return CustomersConsent;
}());
exports.default = CustomersConsent;
