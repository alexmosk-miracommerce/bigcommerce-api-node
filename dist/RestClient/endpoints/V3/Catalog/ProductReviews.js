"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Products_1 = require("./Products");
var ProductReviews = /** @class */ (function () {
    function ProductReviews(client) {
        this.client = client;
    }
    /**
     * Gets a list of product reviews
     *
     * @param productId A valid product ID
     * @param params Query parameters to filter the response
     * @returns Promise resolving to a list of product metafields
     */
    ProductReviews.prototype.list = function (productId, params) {
        return this.client.get("".concat((0, Products_1.getProductsPath)(productId), "/reviews"), { params: params });
    };
    /**
     * Creates a new product review
     *
     * @param productId A valid product ID
     * @param data Data to create a new product review
     * @returns Promise resolving to a newly created product review
     */
    ProductReviews.prototype.create = function (productId, data) {
        return this.client.post("".concat((0, Products_1.getProductsPath)(productId), "/reviews"), data);
    };
    /**
     * Gets a single product review
     *
     * @param productId A valid product ID
     * @param reviewId A valid product review ID
     * @param params Query parameters to filter the response
     * @returns Promise resolving to a single product review
     */
    ProductReviews.prototype.get = function (productId, reviewId, params) {
        return this.client.get("".concat((0, Products_1.getProductsPath)(productId), "/reviews/").concat(reviewId), { params: params });
    };
    /**
     * Updates a single product review
     *
     * @param productId A valid product ID
     * @param reviewId A valid product review ID
     * @param data Data to update the product review
     * @returns Promise resolving to a single updated product review
     */
    ProductReviews.prototype.update = function (productId, reviewId, data) {
        return this.client.put("".concat((0, Products_1.getProductsPath)(productId), "/reviews/").concat(reviewId), data);
    };
    /**
     * Deletes a single product review
     *
     * @param productId A valid product ID
     * @param reviewId A valid product review ID
     * @returns Promise resolving to a 204 No Content response
     */
    ProductReviews.prototype.delete = function (productId, reviewId) {
        return this.client.delete("".concat((0, Products_1.getProductsPath)(productId), "/reviews/").concat(reviewId));
    };
    return ProductReviews;
}());
exports.default = ProductReviews;
