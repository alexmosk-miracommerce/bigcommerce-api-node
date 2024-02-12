"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var ThemeActions_1 = __importDefault(require("./ThemeActions"));
var ThemeConfigurations_1 = __importDefault(require("./ThemeConfigurations"));
var ThemeCustomTemplates_1 = __importDefault(require("./ThemeCustomTemplates"));
var ThemeJob_1 = __importDefault(require("./ThemeJob"));
var Themes_1 = __importDefault(require("./Themes"));
var ThemesV3 = /** @class */ (function () {
    function ThemesV3(client) {
        this.themes = new Themes_1.default(client);
        this.themeActions = new ThemeActions_1.default(client);
        this.themeConfigurations = new ThemeConfigurations_1.default(client);
        this.themeCustomTemplates = new ThemeCustomTemplates_1.default(client);
        this.themeJobs = new ThemeJob_1.default(client);
    }
    return ThemesV3;
}());
exports.default = ThemesV3;
