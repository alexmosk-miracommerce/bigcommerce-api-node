"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Brands_1 = require("./Brands");
var BrandMetafields = /** @class */ (function () {
    function BrandMetafields(client) {
        this.client = client;
    }
    /**
     * Retrieves a list of brand metafields for a given brand
     *
     * @param id A valid Brand ID
     * @param params Query parameters used to filter response
     * @returns Promise resolving to a list of brand metafields
     */
    BrandMetafields.prototype.list = function (id, params) {
        return this.client.get("".concat((0, Brands_1.getBrandsPath)(id), "/metafields"), {
            params: params,
        });
    };
    /**
     * Creates a new brand metafield for a given brand
     *
     * @param id A valid Brand ID
     * @param data Data used to create a brand metafield
     * @returns Promise resolving to the newly created brand metafield
     */
    BrandMetafields.prototype.create = function (id, data) {
        return this.client.post("".concat((0, Brands_1.getBrandsPath)(id), "/metafields"), data);
    };
    /**
     * Gets a single brand metafield by ID
     *
     * @param brandId A valid Brand ID
     * @param metafieldId A valid Brand Metafield ID
     * @param params Query parameters used to filter response
     * @returns Promise resolving to a single brand metafield
     */
    BrandMetafields.prototype.get = function (brandId, metafieldId, params) {
        return this.client.get("".concat((0, Brands_1.getBrandsPath)(brandId), "/metafields/").concat(metafieldId), { params: params });
    };
    /**
     * Updates a single brand metafield by ID
     *
     * @param brandId A valid Brand ID
     * @param metafieldId A valid Brand Metafield ID
     * @param data Data used to update a brand metafield
     * @returns Promise resolving to the updated brand metafield
     */
    BrandMetafields.prototype.update = function (brandId, metafieldId, data) {
        return this.client.put("".concat((0, Brands_1.getBrandsPath)(brandId), "/metafields/").concat(metafieldId), data);
    };
    /**
     * Deletes a single brand metafield by ID
     *
     * @param brandId A valid Brand ID
     * @param metafieldId A valid Brand Metafield ID
     * @returns Promise resolving to a 204 No Content response
     */
    BrandMetafields.prototype.delete = function (brandId, metafieldId) {
        return this.client.delete("".concat((0, Brands_1.getBrandsPath)(brandId), "/metafields/").concat(metafieldId));
    };
    return BrandMetafields;
}());
exports.default = BrandMetafields;
