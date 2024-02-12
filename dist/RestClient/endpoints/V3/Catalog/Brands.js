"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBrandsPath = void 0;
var BRANDS_PATH = '/v3/catalog/brands';
/**
 * Builds a base Brands API path given an optional brand ID
 *
 * @param id Optional Brand ID
 * @returns Either '/v3/catalog/brands/:brandId' or '/v3/catalog/brands'
 */
var getBrandsPath = function (id) { return "".concat(BRANDS_PATH).concat(id ? "/".concat(id) : ''); };
exports.getBrandsPath = getBrandsPath;
var Brands = /** @class */ (function () {
    function Brands(client) {
        this.client = client;
    }
    /**
     * List all brands in a store's catalog
     *
     * @param params Query parameters used to filter response
     * @returns Promise resolving to a list of brands
     */
    Brands.prototype.list = function (params) {
        return this.client.get((0, exports.getBrandsPath)(), { params: params });
    };
    /**
     * Creates a new brand in a store's catalog
     *
     * @param data Data used to create the brand
     * @returns Promise resolving to the newly created brand
     */
    Brands.prototype.create = function (data) {
        return this.client.post((0, exports.getBrandsPath)(), data);
    };
    /**
     * Deletes all brand objects in a store's catalog
     *
     * @param params Comma-separated list of brand names or page titles
     * @returns Promise resolving to a 204 No Content response
     */
    Brands.prototype.deleteMany = function (params) {
        return this.client.delete((0, exports.getBrandsPath)(), { params: params });
    };
    /**
     * Retrieves a single brand in a store's catalog
     *
     * @param id A valid Brand ID
     * @returns Promise resolving to a single brand
     */
    Brands.prototype.get = function (id) {
        return this.client.get((0, exports.getBrandsPath)(id));
    };
    /**
     * Updates a single brand in a store's catalog
     *
     * @param id A valid Brand ID
     * @param data Data used to update the brand
     * @returns Promise resolving to the updated brand
     */
    Brands.prototype.update = function (id, data) {
        return this.client.put((0, exports.getBrandsPath)(id), data);
    };
    /**
     * Deletes a single brand in a store's catalog
     *
     * @param id A valid Brand ID
     * @returns Promise resolving to a 204 No Content response
     */
    Brands.prototype.delete = function (id) {
        return this.client.delete((0, exports.getBrandsPath)(id));
    };
    return Brands;
}());
exports.default = Brands;
