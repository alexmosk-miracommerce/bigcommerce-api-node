"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Category_1 = require("./Category");
var CategoryMetafields = /** @class */ (function () {
    function CategoryMetafields(client) {
        this.client = client;
    }
    /**
     * Gets a list of metafields associated with a category
     *
     * @param id A valid Category ID
     * @param params Query parameters used to filter the response
     * @returns Promise resolving to a list of category metafields
     */
    CategoryMetafields.prototype.list = function (id, params) {
        return this.client.get("".concat((0, Category_1.getCategoryPath)(id), "/metafields"), { params: params });
    };
    /**
     * Creates a new metafield for a category
     *
     * @param id A valid Category ID
     * @param data Data used to create a category metafield
     * @returns Promise resolving to a newly created category metafield
     */
    CategoryMetafields.prototype.create = function (id, data) {
        return this.client.post("".concat((0, Category_1.getCategoryPath)(id), "/metafields"), data);
    };
    /**
     * Gets a single category metafield
     *
     * @param categoryId A valid Category ID
     * @param metafieldId A valid Category Metafield ID
     * @param params Query parameters used to filter the response
     * @returns Promise resolving to a single category metafield
     */
    CategoryMetafields.prototype.get = function (categoryId, metafieldId, params) {
        return this.client.get("".concat((0, Category_1.getCategoryPath)(categoryId), "/metafields/").concat(metafieldId), { params: params });
    };
    /**
     * Updates a single category metafield
     *
     * @param categoryId A valid Category ID
     * @param metafieldId A valid Category Metafield ID
     * @param data Data used to update the category metafield
     * @returns Promise resolving to the updated category metafield
     */
    CategoryMetafields.prototype.update = function (categoryId, metafieldId, data) {
        return this.client.put("".concat((0, Category_1.getCategoryPath)(categoryId), "/metafields/").concat(metafieldId), data);
    };
    /**
     * Deletes a single category metafield
     *
     * @param categoryId A valid Category ID
     * @param metafieldId A valid Category Metafield ID
     * @returns Promise resolving to a 204 No Content response
     */
    CategoryMetafields.prototype.delete = function (categoryId, metafieldId) {
        return this.client.delete("".concat((0, Category_1.getCategoryPath)(categoryId), "/metafields/").concat(metafieldId));
    };
    return CategoryMetafields;
}());
exports.default = CategoryMetafields;
