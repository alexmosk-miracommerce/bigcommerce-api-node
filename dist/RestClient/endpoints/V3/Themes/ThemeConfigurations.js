"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Themes_1 = require("./Themes");
var ThemeConfigurations = /** @class */ (function () {
    function ThemeConfigurations(client) {
        this.client = client;
    }
    /**
     * Returns a list of theme configurations
     *
     * @param uuid A valid theme UUID
     * @param params Query parameters used to filter response, with required site ID
     * @returns Promise resolving to a list of theme configurations
     */
    ThemeConfigurations.prototype.list = function (uuid, params) {
        return this.client.get("".concat(Themes_1.themesPath, "/").concat(uuid, "/configurations"), {
            params: params,
        });
    };
    /**
     * Validates a theme configuration against the theme's schema without creating it. Useful for testing schemas before creation
     *
     * @param uuid A valid theme UUID
     * @returns Promise resolving to a 200 OK response representing that the theme passes validation
     */
    ThemeConfigurations.prototype.validate = function (uuid) {
        return this.client.post("".concat(Themes_1.themesPath, "/").concat(uuid, "/configurations/validate"));
    };
    return ThemeConfigurations;
}());
exports.default = ThemeConfigurations;
