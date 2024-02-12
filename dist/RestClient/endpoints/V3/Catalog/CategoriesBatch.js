"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CategoryTrees_1 = require("./CategoryTrees");
var CategoriesBatch = /** @class */ (function () {
    function CategoriesBatch(client) {
        this.client = client;
    }
    /**
     * Gets a list of categories in a store's catalog
     *
     * @param params Query parameters used to filter the response
     * @returns Promise resolving to a list of categories
     */
    CategoriesBatch.prototype.list = function (params) {
        return this.client.get("".concat((0, CategoryTrees_1.getCategoryTreesPath)(), "/categories"), { params: params });
    };
    /**
     * Creates new categories in a store's catalog
     *
     * @param data Data used to create categories
     * @returns Promise resolving to a list of new categories
     */
    CategoriesBatch.prototype.create = function (data) {
        return this.client.post("".concat((0, CategoryTrees_1.getCategoryTreesPath)(), "/categories"), data);
    };
    /**
     * Updates existing categories in a store's catalog
     *
     * @param data Data used to create new categories
     * @returns Promise resolving to a list of updated categories
     */
    CategoriesBatch.prototype.update = function (data) {
        return this.client.put("".concat((0, CategoryTrees_1.getCategoryTreesPath)(), "/categories"), data);
    };
    /**
     * Deletes categories in a store's catalog
     *
     * @param params Query parameters used to delete categories
     * @returns Promise resolving to a meta object with data about the deleted categories
     */
    CategoriesBatch.prototype.delete = function (params) {
        return this.client.delete("".concat((0, CategoryTrees_1.getCategoryTreesPath)(), "/categories"), { params: params });
    };
    return CategoriesBatch;
}());
exports.default = CategoriesBatch;
