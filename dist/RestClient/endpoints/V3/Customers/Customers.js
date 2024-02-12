"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCustomersPath = void 0;
var customersPath = '/v3/customers';
/**
 * Builds a base Customers API path given an optional customer ID
 *
 * @param id Optional filter parameters
 * @returns Returns either '/v3/customers' or '/v3/customers/:customerId
 */
var getCustomersPath = function (id) { return "".concat(customersPath, "/").concat(id !== null && id !== void 0 ? id : ''); };
exports.getCustomersPath = getCustomersPath;
var Customers = /** @class */ (function () {
    function Customers(client) {
        this.client = client;
    }
    /**
     * Gets a list of all customers in a store
     *
     * @param params Query parameters used to filter the response
     * @returns Promise resolving to a list of categories
     */
    Customers.prototype.list = function (params) {
        return this.client.get((0, exports.getCustomersPath)(), {
            params: params,
        });
    };
    /**
     * Creates a new customer
     *
     * @param data Data used to create the customer
     * @returns Promise resolving to a newly created customer
     */
    Customers.prototype.create = function (data) {
        return this.client.post((0, exports.getCustomersPath)(), data);
    };
    /**
     * Updates customers.
     *
     * @data Data used to update customers
     * @returns Promise resolving to the updated customers
     */
    Customers.prototype.update = function (data) {
        return this.client.put((0, exports.getCustomersPath)(), data);
    };
    /**
     * Deletes a  single customer by ID
     *
     * @param params Query params used to delete customer
     * @returns Promise resolving to a 204 No Content response
     */
    Customers.prototype.delete = function (params) {
        return this.client.delete((0, exports.getCustomersPath)(), {
            params: params,
        });
    };
    return Customers;
}());
exports.default = Customers;
