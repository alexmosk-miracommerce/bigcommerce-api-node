"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var CustomerAddresses_1 = __importDefault(require("./CustomerAddresses"));
var CustomerAttributes_1 = __importDefault(require("./CustomerAttributes"));
var CustomerAttributeValues_1 = __importDefault(require("./CustomerAttributeValues"));
var CustomerConsent_1 = __importDefault(require("./CustomerConsent"));
var CustomerFormFieldValues_1 = __importDefault(require("./CustomerFormFieldValues"));
var Customers_1 = __importDefault(require("./Customers"));
var CustomerStoredInstruments_1 = __importDefault(require("./CustomerStoredInstruments"));
var CustomersV3 = /** @class */ (function () {
    function CustomersV3(client) {
        this.customers = new Customers_1.default(client);
        this.customerAddresses = new CustomerAddresses_1.default(client);
        this.customerAttributes = new CustomerAttributes_1.default(client);
        this.customerAttributesValues = new CustomerAttributeValues_1.default(client);
        this.customerFormFieldsValues = new CustomerFormFieldValues_1.default(client);
        this.customerConsent = new CustomerConsent_1.default(client);
        this.customerStoredInstruments = new CustomerStoredInstruments_1.default(client);
    }
    return CustomersV3;
}());
exports.default = CustomersV3;
