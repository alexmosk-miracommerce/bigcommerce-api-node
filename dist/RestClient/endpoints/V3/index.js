"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Catalog_1 = __importDefault(require("./Catalog"));
var Customers_1 = __importDefault(require("./Customers"));
var Themes_1 = __importDefault(require("./Themes"));
var V3 = /** @class */ (function () {
    function V3(client) {
        this.client = client;
        this.catalog = new Catalog_1.default(this.client);
        this.customers = new Customers_1.default(this.client);
        this.themes = new Themes_1.default(this.client);
    }
    return V3;
}());
exports.default = V3;
