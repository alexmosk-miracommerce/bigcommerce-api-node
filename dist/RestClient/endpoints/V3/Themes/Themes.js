"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.themesPath = void 0;
var buildMultipartBody_1 = require("../../../../utils/buildMultipartBody");
exports.themesPath = '/v3/themes';
var Themes = /** @class */ (function () {
    function Themes(client) {
        this.client = client;
    }
    /**
     * Gets a list of store themes
     *
     * @returns Promise resolving to a list of store themes
     */
    Themes.prototype.list = function () {
        return this.client.get(exports.themesPath);
    };
    /**
     * Uploads a new theme to your BigCommerce store.
     *
     * @param themePath An absolute path to the theme file
     * @returns Promise resolving with the job ID processing the theme upload
     */
    Themes.prototype.create = function (themePath) {
        var themeForm = (0, buildMultipartBody_1.buildMultipartBody)('file', themePath);
        return this.client.post(exports.themesPath, themePath, {
            headers: __assign({}, themeForm.getHeaders()),
        });
    };
    /**
     * Returns a store theme.
     *
     * @param uuid A valid store theme UUID
     * @returns Promise resolving to a single theme
     */
    Themes.prototype.get = function (uuid) {
        return this.client.get("".concat(exports.themesPath, "/").concat(uuid));
    };
    /**
     * Deletes a  single store Theme by UUID
     *
     * @param uuid A valid store theme UUID
     * @returns Promise resolving to a 204 No Content response
     */
    Themes.prototype.delete = function (uuid) {
        return this.client.delete("".concat(exports.themesPath, "/").concat(uuid));
    };
    return Themes;
}());
exports.default = Themes;
