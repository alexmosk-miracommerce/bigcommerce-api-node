"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProductsPath = void 0;
var PRODUCTS_PATH = '/v3/catalog/products';
/**
 * Builds a base Products API path given an optional product ID
 *
 * @param id Optional Product ID
 * @returns Either '/v3/catalog/products/:productId' or '/v3/catalog/products'
 */
var getProductsPath = function (id) { return "".concat(PRODUCTS_PATH).concat(id ? "/".concat(id) : ''); };
exports.getProductsPath = getProductsPath;
var Products = /** @class */ (function () {
    function Products(client) {
        this.client = client;
    }
    /**
     * Gets a list of products from a store's catalog
     *
     * @param params Query parameters used to filter the response
     * @returns Promise resolving to a list of products
     */
    Products.prototype.list = function (params) {
        return this.client.get((0, exports.getProductsPath)(), { params: params });
    };
    /**
     * Updates a batch of products in a store's catalog
     *
     * @param data Data used to update a batch of products
     * @param params Query parameters used to filter the response
     * @returns Promise resolving to a list of updated products
     */
    Products.prototype.updateBatch = function (data, params) {
        return this.client.put((0, exports.getProductsPath)(), data, { params: params });
    };
    /**
     * Creates a new product in a store's catalog
     *
     * @param data Data used to create a product
     * @param params Query parameters used to filter the response
     * @returns Promise resolving to the newly created product
     */
    Products.prototype.create = function (data, params) {
        return this.client.post((0, exports.getProductsPath)(), data, { params: params });
    };
    /**
     * Deletes products from a store's catalog
     *
     * @param params Query parameters used to filter the products to delete
     * @returns Promise resolving to a 204 No Content response
     */
    Products.prototype.deleteMany = function (params) {
        return this.client.delete((0, exports.getProductsPath)(), { params: params });
    };
    /**
     * Gets a single product by ID
     *
     * @param id A valid product ID
     * @param params Query parameters used to filter the response
     * @returns Promise resolving to a single product
     */
    Products.prototype.get = function (id, params) {
        return this.client.get((0, exports.getProductsPath)(id), { params: params });
    };
    /**
     * Updates a single product by ID
     *
     * @param id A valid product ID
     * @param data Data used to update the product
     * @param params Query parameters used to filter the response
     * @returns Promise resolving to the updated product
     */
    Products.prototype.update = function (id, data, params) {
        return this.client.put((0, exports.getProductsPath)(id), data, { params: params });
    };
    /**
     * Deletes a single product by ID
     *
     * @param id A valid product ID
     * @returns Promise resolving to a 204 No Content response
     */
    Products.prototype.delete = function (id) {
        return this.client.delete((0, exports.getProductsPath)(id));
    };
    return Products;
}());
exports.default = Products;
