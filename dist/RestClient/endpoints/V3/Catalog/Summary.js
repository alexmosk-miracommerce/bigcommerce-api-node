"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var summaryPath = '/v3/catalog/summary';
var Summary = /** @class */ (function () {
    function Summary(client) {
        this.client = client;
    }
    /**
     * Returns a lightweight inventory summary from the BigCommerce Catalog
     *
     * @returns Promise resolving to a catalog summary object
     */
    Summary.prototype.get = function () {
        return this.client.get(summaryPath);
    };
    return Summary;
}());
exports.default = Summary;
