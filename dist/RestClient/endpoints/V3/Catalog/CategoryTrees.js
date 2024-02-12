"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCategoryTreesPath = void 0;
var CATEGORY_TREES_PATH = '/v3/catalog/trees';
/**
 * Builds a base Category Trees API path given an optional tree ID
 *
 * @param id Optional Tree ID
 * @returns Either '/v3/catalog/trees/:treeId' or '/v3/catalog/trees'
 */
var getCategoryTreesPath = function (id) { return "".concat(CATEGORY_TREES_PATH).concat(id ? "/".concat(id) : ''); };
exports.getCategoryTreesPath = getCategoryTreesPath;
var CategoryTrees = /** @class */ (function () {
    function CategoryTrees(client) {
        this.client = client;
    }
    /**
     * Gets a list of category trees
     *
     * @param params Query parameters to filter the response
     * @returns Promise resolving to a list of category trees
     */
    CategoryTrees.prototype.list = function (params) {
        return this.client.get((0, exports.getCategoryTreesPath)(), { params: params });
    };
    /**
     * Upserts category trees
     *
     * @param data Data used to upsert new category trees
     * @returns Promise resolving to the list of upserted category trees
     */
    CategoryTrees.prototype.upsert = function (data) {
        return this.client.post((0, exports.getCategoryTreesPath)(), data);
    };
    /**
     * Deletes category trees
     *
     * @param params Query parameters used to filter the response
     * @returns Promise resolving to a 204 No Content response
     */
    CategoryTrees.prototype.delete = function (params) {
        return this.client.delete((0, exports.getCategoryTreesPath)(), { params: params });
    };
    /**
     * Gets a single category tree
     *
     * @param treeId A valid category tree ID
     * @param params Query parameters used to filter the response
     * @returns Promise resolving to a single category tree
     */
    CategoryTrees.prototype.get = function (treeId, params) {
        return this.client.get("".concat((0, exports.getCategoryTreesPath)(treeId), "/categories"), { params: params });
    };
    return CategoryTrees;
}());
exports.default = CategoryTrees;
