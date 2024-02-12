"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCategoryPath = void 0;
var CATEGORY_PATH = '/v3/catalog/categories';
/**
 * Builds a base Category API path given an optional category ID
 *
 * @param id Optional Category ID
 * @returns Either '/v3/catalog/categories/:categoryId' or '/v3/catalog/categories'
 */
var getCategoryPath = function (id) { return "".concat(CATEGORY_PATH).concat(id ? "/".concat(id) : ''); };
exports.getCategoryPath = getCategoryPath;
var Category = /** @class */ (function () {
    function Category(client) {
        this.client = client;
    }
    /**
     * Gets a list of categories in a store's catalog
     *
     * @param params Query parameters used to filter the response
     * @returns Promise resolving to a list of categories
     */
    Category.prototype.list = function (params) {
        return this.client.get((0, exports.getCategoryPath)(), {
            params: params,
        });
    };
    /**
     * Creates a new category in a store's catalog
     *
     * @param data Data used to create a new category
     * @returns Promise resolving to the newly created category
     */
    Category.prototype.create = function (data) {
        return this.client.post((0, exports.getCategoryPath)(), data);
    };
    /**
     * Deletes categories in a store's catalog
     *
     * @param params Query parameters used to filter which categories should be deleted
     * @returns Promise resolving to a 204 No Content response
     */
    Category.prototype.deleteMany = function (params) {
        return this.client.delete((0, exports.getCategoryPath)(), {
            params: params,
        });
    };
    /**
     * Gets a single category in a store's catalog
     *
     * @param id A valid category ID
     * @param params Query filters used to filter the response
     * @returns Promise resolving to a response for a single category
     */
    Category.prototype.get = function (id, params) {
        return this.client.get((0, exports.getCategoryPath)(id), {
            params: params,
        });
    };
    /**
     * Updates a single category in a store's catalog
     *
     * @param id A valid category ID
     * @param data Data used to update a category
     * @returns Promise resolving to the updated category
     */
    Category.prototype.update = function (id, data) {
        return this.client.put((0, exports.getCategoryPath)(id), data);
    };
    /**
     * Deletes a single category in a store's catalog
     *
     * @param id A valid category ID
     * @returns Promise resolving to a 204 No Content response
     */
    Category.prototype.delete = function (id) {
        return this.client.delete((0, exports.getCategoryPath)(id));
    };
    return Category;
}());
exports.default = Category;
