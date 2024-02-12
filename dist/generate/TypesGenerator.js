"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.tg = void 0;
var axios_1 = __importDefault(require("axios"));
var fs_1 = require("fs");
var openapi_typescript_1 = __importDefault(require("openapi-typescript"));
var path_1 = __importDefault(require("path"));
var assertIsError_1 = require("../utils/assertIsError");
var writeFile = fs_1.promises.writeFile;
var TypesGenerator = /** @class */ (function () {
    function TypesGenerator() {
        this.REPO_URL = 'https://api.github.com/repos/bigcommerce/api-specs/git/trees/main';
        this.CONTENT_URL = 'https://raw.githubusercontent.com/bigcommerce/api-specs/main';
        this.OUTPUT_DIRECTORY_PATH = path_1.default.join(process.cwd(), 'src/generate/generated');
        this.PRETTIER_CONFIG_PATH = path_1.default.join(process.cwd(), '.prettierrc');
        this.client = axios_1.default.create({
            headers: {
                accept: 'application/vnd.github.v3+json',
            },
        });
    }
    /**
     * Generates a TypeScript file for each Open API Spec file provided as input,
     * and writes each file to the output directory defined above.
     */
    TypesGenerator.prototype.generate = function () {
        return __awaiter(this, void 0, void 0, function () {
            var sourceFiles, _i, sourceFiles_1, sourceFile, outputPath, output, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getSourceFiles()];
                    case 1:
                        sourceFiles = _a.sent();
                        _i = 0, sourceFiles_1 = sourceFiles;
                        _a.label = 2;
                    case 2:
                        if (!(_i < sourceFiles_1.length)) return [3 /*break*/, 8];
                        sourceFile = sourceFiles_1[_i];
                        outputPath = path_1.default.join(this.OUTPUT_DIRECTORY_PATH, path_1.default.basename(sourceFile.replace(path_1.default.extname(sourceFile), '.ts')));
                        _a.label = 3;
                    case 3:
                        _a.trys.push([3, 6, , 7]);
                        return [4 /*yield*/, (0, openapi_typescript_1.default)(sourceFile, { prettierConfig: this.PRETTIER_CONFIG_PATH, silent: false })];
                    case 4:
                        output = _a.sent();
                        return [4 /*yield*/, writeFile(outputPath, output)];
                    case 5:
                        _a.sent();
                        return [3 /*break*/, 7];
                    case 6:
                        err_1 = _a.sent();
                        (0, assertIsError_1.assertIsError)(err_1);
                        process.stderr.write("".concat(sourceFile, ": ").concat(err_1.name, ": ").concat(err_1.message, "}\n"));
                        return [3 /*break*/, 7];
                    case 7:
                        _i++;
                        return [3 /*break*/, 2];
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Returns a list of valid Open API Spec files URLs that can be used as input to
     * the openapi-typescript module.
     *
     * All spec source files for the public BigCommerce API are stored in the
     * bigcommerce/api-specs repository in a directory called 'reference'. The method
     * below uses the Git Trees API (https://docs.github.com/en/rest/git/trees) to
     * fetch the files in that directory and then returns a list of each source file
     * formatted as an absolute URL.
     *
     * @returns Array of Open API Spec file URLs as strings
     */
    TypesGenerator.prototype.getSourceFiles = function () {
        return __awaiter(this, void 0, void 0, function () {
            var sourceRepo, targetDir;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.get(this.REPO_URL)];
                    case 1:
                        sourceRepo = _a.sent();
                        targetDir = sourceRepo.data.tree.find(function (file) { return file.path === 'reference'; });
                        if (!targetDir) {
                            throw new Error('Unable to find a directory containing Open API spec files in provided repo');
                        }
                        return [4 /*yield*/, this.getSpecFileNames('reference', targetDir)];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Returns a list of valid Open API Spec files URLs that could exist within directories or as standalone files.
     *
     * @returns Array of Open API Spec file URLs as strings
     */
    TypesGenerator.prototype.getSpecFileNames = function (targetDirPath, targetDir) {
        return __awaiter(this, void 0, void 0, function () {
            var remoteSourceDir, specFileNames;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.get(targetDir.url)];
                    case 1:
                        remoteSourceDir = _a.sent();
                        return [4 /*yield*/, remoteSourceDir.data.tree.reduce(function (accPromise, node) { return __awaiter(_this, void 0, void 0, function () {
                                var acc, nestedSpecFileNames;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, accPromise];
                                        case 1:
                                            acc = _a.sent();
                                            if (!(node.type === 'blob')) return [3 /*break*/, 2];
                                            return [2 /*return*/, __spreadArray(__spreadArray([], acc, true), ["".concat(this.CONTENT_URL, "/").concat(targetDirPath, "/").concat(node.path)], false)];
                                        case 2: return [4 /*yield*/, this.getSpecFileNames("".concat(targetDirPath, "/").concat(node.path), node)];
                                        case 3:
                                            nestedSpecFileNames = _a.sent();
                                            return [2 /*return*/, __spreadArray(__spreadArray([], acc, true), nestedSpecFileNames, true)];
                                    }
                                });
                            }); }, Promise.resolve([]))];
                    case 2:
                        specFileNames = _a.sent();
                        return [2 /*return*/, specFileNames];
                }
            });
        });
    };
    return TypesGenerator;
}());
exports.tg = new TypesGenerator();
void exports.tg.generate();
