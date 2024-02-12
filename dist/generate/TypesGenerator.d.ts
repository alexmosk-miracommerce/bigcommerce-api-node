declare class TypesGenerator {
    private client;
    private REPO_URL;
    private CONTENT_URL;
    private OUTPUT_DIRECTORY_PATH;
    private PRETTIER_CONFIG_PATH;
    constructor();
    /**
     * Generates a TypeScript file for each Open API Spec file provided as input,
     * and writes each file to the output directory defined above.
     */
    generate(): Promise<void>;
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
    private getSourceFiles;
    /**
     * Returns a list of valid Open API Spec files URLs that could exist within directories or as standalone files.
     *
     * @returns Array of Open API Spec file URLs as strings
     */
    private getSpecFileNames;
}
export declare const tg: TypesGenerator;
export {};
