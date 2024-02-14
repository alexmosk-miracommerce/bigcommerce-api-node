/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */
export interface paths {
    '/tax_classes': {
        /**
         * Returns a list of all *Tax Classes* in a store.
         *
         * Default sorting is by tax-class id, from lowest to highest.
         */
        get: operations['getAllTaxClasses'];
    };
    '/tax_classes/{id}': {
        /** Returns a single *Tax Class*. */
        get: operations['getATaxClass'];
    };
}
export interface components {
    schemas: {
        /**
         * taxClass_Full
         * @example [object Object]
         */
        taxClass_Full: {
            /**
             * @description The unique numerical ID of the tax class. A read-only value which is automatically assigned and increments sequentially.
             * @example 1
             */
            id?: string;
            /**
             * @description The name of the tax class.
             * @example Shipping
             */
            name?: string;
            /**
             * Format: date-time
             * @description Date and time of the tax class' creation. Read-Only.
             * @example 2018-05-07T20:14:17.000Z
             */
            created_at?: string;
            /**
             * Format: date-time
             * @description Date and time when the tax class was last updated. Read-Only.
             * @example 2018-05-07T20:14:17.000Z
             */
            updated_at?: string;
        };
    };
    parameters: {
        /** @description The [MIME type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types) of the response body. */
        Accept: string;
        /** @description The [MIME type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types) of the request body. */
        ContentType: string;
    };
}
export interface operations {
    /**
     * Returns a list of all *Tax Classes* in a store.
     *
     * Default sorting is by tax-class id, from lowest to highest.
     */
    getAllTaxClasses: {
        parameters: {
            header: {
                /** The [MIME type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types) of the response body. */
                Accept: components['parameters']['Accept'];
            };
            query: {
                /** Optional filter param. Number of pages. */
                page?: number;
                /** Optional filter param. Number of items per page */
                limit?: number;
            };
        };
        responses: {
            200: {
                content: {
                    'application/json': components['schemas']['taxClass_Full'][];
                };
            };
        };
    };
    /** Returns a single *Tax Class*. */
    getATaxClass: {
        parameters: {
            header: {
                /** The [MIME type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types) of the response body. */
                Accept: components['parameters']['Accept'];
            };
            path: {
                /** ID of the tax class. */
                id: number;
            };
        };
        responses: {
            200: {
                content: {
                    'application/json': components['schemas']['taxClass_Full'];
                };
            };
        };
    };
}
export interface external {
}