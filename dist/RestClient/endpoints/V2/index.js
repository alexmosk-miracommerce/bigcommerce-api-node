"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Orders_1 = __importDefault(require("./Orders"));
var V2 = /** @class */ (function () {
    function V2(client) {
        this.client = client;
        this.orders = new Orders_1.default(this.client);
    }
    return V2;
}());
exports.default = V2;
