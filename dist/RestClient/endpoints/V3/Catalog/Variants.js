"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getVariantsPath = void 0;
var VARIANTS_PATH = '/v3/catalog/variants';
/**
 * Builds a base Variants API path given an optional variant ID
 *
 * @param id Optional Variant ID
 * @returns Either '/v3/catalog/variants/:variantId' or '/v3/catalog/variants'
 */
var getVariantsPath = function (id) { return "".concat(VARIANTS_PATH).concat(id ? "/".concat(id) : ''); };
exports.getVariantsPath = getVariantsPath;
var Variants = /** @class */ (function () {
    function Variants(client) {
        this.client = client;
    }
    Variants.prototype.list = function (params) {
        return this.client.get((0, exports.getVariantsPath)(), { params: params });
    };
    /**
     * Creates new product variants in batch
     *
     * @param data Data to create new variants
     * @returns Promise resolving to the newly created variants
     */
    Variants.prototype.updateBatch = function (data) {
        return this.client.put((0, exports.getVariantsPath)(), data);
    };
    return Variants;
}());
exports.default = Variants;
