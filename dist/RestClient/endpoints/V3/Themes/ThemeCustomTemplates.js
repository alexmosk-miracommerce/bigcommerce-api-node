"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Themes_1 = require("./Themes");
var ThemeCustomTemplates = /** @class */ (function () {
    function ThemeCustomTemplates(client) {
        this.client = client;
    }
    /**
     * Enumerates available custom templates for theme files in a specific theme version for each supported entity type
     *
     * @param versionUUID A valid store theme version UUID
     * @returns Promise resolving to a list of available custom template files
     */
    ThemeCustomTemplates.prototype.get = function (versionUUID) {
        return this.client.get("".concat(Themes_1.themesPath, "/custom-templates/").concat(versionUUID));
    };
    return ThemeCustomTemplates;
}());
exports.default = ThemeCustomTemplates;
