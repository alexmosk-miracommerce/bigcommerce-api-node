"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Products_1 = require("./Products");
var ProductVideos = /** @class */ (function () {
    function ProductVideos(client) {
        this.client = client;
    }
    /**
     * Gets a list of product videos
     *
     * @param productId A valid product ID
     * @param params Query parameters used to filter the response
     * @returns Promise resolving to a list of product videos
     */
    ProductVideos.prototype.list = function (productId, params) {
        return this.client.get("".concat((0, Products_1.getProductsPath)(productId), "/videos"), { params: params });
    };
    /**
     * Creates a new product video
     *
     * @param productId A valid product ID
     * @param data Data used to create a new product video
     * @returns Promise resolving to a newly created product video
     */
    ProductVideos.prototype.create = function (productId, data) {
        return this.client.post("".concat((0, Products_1.getProductsPath)(productId), "/videos"), data);
    };
    /**
     * Gets a single product video
     *
     * @param productId A valid product ID
     * @param videoId A valid product video ID
     * @param params Query parameters used to filter the response
     * @returns Promise resolving to a product video
     */
    ProductVideos.prototype.get = function (productId, videoId, params) {
        return this.client.get("".concat((0, Products_1.getProductsPath)(productId), "/videos/").concat(videoId), { params: params });
    };
    /**
     * Updates a single product video
     *
     * @param productId A valid product ID
     * @param videoId A valid product video ID
     * @param data Data used to update a product video
     * @returns Promise resolving to an updated product video
     */
    ProductVideos.prototype.update = function (productId, videoId, data) {
        return this.client.put("".concat((0, Products_1.getProductsPath)(productId), "/videos/").concat(videoId), data);
    };
    /**
     * Deletes a single product video
     *
     * @param productId A valid product ID
     * @param videoId A valid product video ID
     * @returns Promise resolving to a 204 No Content response
     */
    ProductVideos.prototype.delete = function (productId, videoId) {
        return this.client.delete("".concat((0, Products_1.getProductsPath)(productId), "/videos/").concat(videoId));
    };
    return ProductVideos;
}());
exports.default = ProductVideos;
