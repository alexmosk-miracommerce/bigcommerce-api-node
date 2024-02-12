"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Themes_1 = require("./Themes");
var ThemeJobs = /** @class */ (function () {
    function ThemeJobs(client) {
        this.client = client;
    }
    /**
     * Returns a Theme job
     *
     * @param jobId A valid theme job ID
     * @returns Promise resolving to the current status of a theme job
     */
    ThemeJobs.prototype.get = function (jobId) {
        return this.client.get("".concat(Themes_1.themesPath, "/jobs/").concat(jobId));
    };
    return ThemeJobs;
}());
exports.default = ThemeJobs;
