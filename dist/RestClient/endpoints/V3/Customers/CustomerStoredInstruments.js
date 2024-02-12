"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Customers_1 = require("./Customers");
var CustomerStoredInstruments = /** @class */ (function () {
    function CustomerStoredInstruments(client) {
        this.client = client;
    }
    /**
     * Returns a list of all available store instruments for a customer
     *
     * @customerId A valid customer id
     * @return Promise resolving to a list of all available store instruments
     */
    CustomerStoredInstruments.prototype.list = function (customerId) {
        return this.client.get("".concat((0, Customers_1.getCustomersPath)(customerId), "/stored-instruments"));
    };
    return CustomerStoredInstruments;
}());
exports.default = CustomerStoredInstruments;
