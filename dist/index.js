"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var OAuth_1 = __importDefault(require("./OAuth"));
var RestClient_1 = __importDefault(require("./RestClient"));
var BigCommerce = {
    Auth: OAuth_1.default,
    Rest: RestClient_1.default,
};
module.exports = BigCommerce;
