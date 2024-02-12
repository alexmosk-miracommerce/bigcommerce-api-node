"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Themes_1 = require("./Themes");
var ThemeActions = /** @class */ (function () {
    function ThemeActions(client) {
        this.client = client;
    }
    /**
     * Downloads a store's Theme.
     *
     * @param uuid A valid store theme UUID
     * @param data Data specifying which theme to download
     * @returns Promise resolving to a job ID that can be used to query the current status of a theme download
     */
    ThemeActions.prototype.download = function (uuid, data) {
        return this.client.post("".concat(Themes_1.themesPath, "/").concat(uuid, "/actions/download"), data);
    };
    /**
     * Activates a Theme
     *
     * @param data Data used to activate a theme
     * @returns Promise resolving to a 204 No Content response
     */
    ThemeActions.prototype.activate = function (data) {
        return this.client.post("".concat(Themes_1.themesPath, "/actions/activate"), data);
    };
    return ThemeActions;
}());
exports.default = ThemeActions;
