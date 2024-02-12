/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */
export interface paths {
    '/customers/subscribers': {
        /** Returns a list of *Subscribers*. Optional filter parameters can be passed in. */
        get: operations['getSubscribers'];
        /**
         * Creates a *Subscriber*.
         *
         * **Required Fields**
         * * email
         *
         * **Read Only Fields**
         * * id
         */
        post: operations['createSubscriber'];
        /** By default, it deletes all *Subscribers*. A filter should be added to avoid deleting all subscribers in a store. */
        delete: operations['deleteSubscribers'];
        parameters: {
            header: {
                /** The [MIME type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types) of the response body. */
                Accept: components['parameters']['Accept'];
            };
        };
    };
    '/customers/subscribers/{subscriber_id}': {
        /** Returns a *Subscriber*. */
        get: operations['getSubscriberById'];
        /**
         * Updates a *Subscriber*.
         *
         * **Read Only Fields**
         * * id
         */
        put: operations['updateSubscriber'];
        /** Deletes a *Subscriber*. */
        delete: operations['deleteSubscriberById'];
        parameters: {
            header: {
                /** The [MIME type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types) of the response body. */
                Accept: components['parameters']['Accept'];
            };
        };
    };
}
export interface components {
    schemas: {
        /**
         * subscriber_Full
         * @description Full subscriber object returned in responses.
         */
        subscriber_Full: components['schemas']['subscriber_Base'] & {
            /** @description The unique numeric ID of the subscriber; increments sequentially. */
            id?: number;
            /**
             * Format: date-time
             * @description The date on which the subscriber was modified.
             */
            date_modified?: string;
            /**
             * Format: date-time
             * @description The date of which the subscriber was created.
             */
            date_created?: string;
        };
        /**
         * subscriber_Base
         * @description Common Subscriber properties.
         */
        subscriber_Base: {
            /** @description The email of the subscriber. Must be unique. */
            email?: string;
            /** @description The first name of the subscriber. */
            first_name?: string;
            /** @description The last name of the subscriber. */
            last_name?: string;
            /** @description The source of the subscriber. Values are: `storefront`, `order`, or `custom`. */
            source?: string;
            /** @description The ID of the source order, if source was an order. */
            order_id?: number | null;
            /** @description The channel ID where the subscriber was created. */
            channel_id?: number;
        };
        Subscriber: {
            /** @description The unique numeric ID of the subscriber; increments sequentially. */
            id?: number;
            /** @description The email of the subscriber. Must be unique. */
            email?: string;
            /** @description The first name of the subscriber. */
            first_name?: string;
            /** @description The last name of the subscriber. */
            last_name?: string;
            /** @description The source of the subscriber. Values are: `storefront`, `order`, or `custom`. */
            source?: string;
            /** @description The ID of the source order, if source was an order. */
            order_id?: number | null;
        } & {
            /**
             * Format: date-time
             * @description The date on which the subscriber was modified.
             */
            date_modified?: string;
            /**
             * Format: date-time
             * @description The date of which the subscriber was created.
             */
            date_created?: string;
        };
        /**
         * subscriber_Post
         * @description The model for a POST to create a subscriber.
         */
        subscriber_Post: components['schemas']['subscriber_Base'];
        /**
         * subscriber_Put
         * @description The model for a PUT to update a subscriber.
         */
        subscriber_Put: components['schemas']['subscriber_Base'];
        /**
         * Collection Meta
         * @description Data about the response, including pagination and collection totals.
         */
        CollectionMeta: {
            /**
             * Pagination
             * @description Data about the response, including pagination and collection totals.
             */
            pagination?: {
                /**
                 * @description Total number of items in the result set.
                 *
                 * @example 36
                 */
                total?: number;
                /**
                 * @description Total number of items in the collection response.
                 *
                 * @example 36
                 */
                count?: number;
                /**
                 * @description The amount of items returned in the collection per page, controlled by the limit parameter.
                 *
                 * @example 50
                 */
                per_page?: number;
                /**
                 * @description The page you are currently on within the collection.
                 *
                 * @example 1
                 */
                current_page?: number;
                /**
                 * @description The total number of pages in the collection.
                 *
                 * @example 1
                 */
                total_pages?: number;
                /** @description Pagination links for the previous and next parts of the whole collection. */
                links?: {
                    /** @description Link to the previous page returned in the response. */
                    previous?: string;
                    /**
                     * @description Link to the current page returned in the response.
                     *
                     * @example ?page=1&limit=50
                     */
                    current?: string;
                    /** @description Link to the next page returned in the response. */
                    next?: string;
                };
            };
        };
        /**
         * Pagination
         * @description Data about the response, including pagination and collection totals.
         */
        Pagination: {
            /**
             * @description Total number of items in the result set.
             *
             * @example 36
             */
            total?: number;
            /**
             * @description Total number of items in the collection response.
             *
             * @example 36
             */
            count?: number;
            /**
             * @description The amount of items returned in the collection per page, controlled by the limit parameter.
             *
             * @example 50
             */
            per_page?: number;
            /**
             * @description The page you are currently on within the collection.
             *
             * @example 1
             */
            current_page?: number;
            /**
             * @description The total number of pages in the collection.
             *
             * @example 1
             */
            total_pages?: number;
            /** @description Pagination links for the previous and next parts of the whole collection. */
            links?: {
                /** @description Link to the previous page returned in the response. */
                previous?: string;
                /**
                 * @description Link to the current page returned in the response.
                 *
                 * @example ?page=1&limit=50
                 */
                current?: string;
                /** @description Link to the next page returned in the response. */
                next?: string;
            };
        };
        /**
         * Response meta
         * @description Response metadata.
         */
        OpenMeta: {
            [key: string]: unknown;
        };
        /** Error Response */
        ErrorResponse: {
            /** @description The HTTP status code. */
            status?: number;
            /** @description The error title describing the particular error. */
            title?: string;
            type?: string;
            instance?: string;
        } & {
            /** Detailed Errors */
            errors?: {
                [key: string]: unknown;
            };
        };
        /**
         * Base Error
         * @description Error payload for the BigCommerce API.
         */
        BaseError: {
            /** @description The HTTP status code. */
            status?: number;
            /** @description The error title describing the particular error. */
            title?: string;
            type?: string;
            instance?: string;
        };
        /**
         * Not Found
         * @description Error payload for the BigCommerce API.
         */
        NotFound: {
            /** @description 404 HTTP status code. */
            status?: number;
            /** @description The error title describing the particular error. */
            title?: string;
            type?: string;
            instance?: string;
        };
        /** Detailed Errors */
        DetailedErrors: {
            [key: string]: unknown;
        };
    };
    responses: {
        subrscriberCollection_Resp: {
            content: {
                'application/json': {
                    data?: components['schemas']['subscriber_Full'][];
                    meta?: components['schemas']['CollectionMeta'];
                };
            };
        };
        subscriber_Resp: {
            content: {
                'application/json': {
                    data?: components['schemas']['subscriber_Full'];
                    meta?: components['schemas']['OpenMeta'];
                };
            };
        };
    };
    parameters: {
        /** @description Filter items by email. */
        FilterEmailParam: string;
        /** @description Filter items by first_name. */
        FilterFirstNameParam: string;
        /** @description Filter items by last_name. */
        FilterLastNameParam: string;
        /** @description Filter items by source. */
        FilterSourceParam: string;
        /** @description Filter items by order_id. */
        FilterOrderIdParam: number;
        /** @description Filter items by date_modified. For example `v3/catalog/products?date_last_imported:min=2018-06-15` */
        FilterDateModifiedParam: string;
        /** @description Filter items by date_created. */
        FilterDateCreatedParam: string;
        /** @description Specifies the page number in a limited (paginated) list of products. */
        PageParam: number;
        /** @description Controls the number of items per page in a limited (paginated) list of products. */
        LimitParam: number;
        /** @description Scripts field name to sort by. */
        ScriptsSortKeyParam: 'name' | 'description' | 'date_created' | 'date_modified';
        /** @description Sort direction. Acceptable values are: `asc`, `desc`. */
        DirectionParam: 'asc' | 'desc';
        /** @description The ID of the `Subscriber` requested. */
        SubscriberIdParam: number;
        /** @description The [MIME type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types) of the response body. */
        Accept: string;
        /** @description The [MIME type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types) of the request body. */
        ContentType: string;
    };
}
export interface operations {
    /** Returns a list of *Subscribers*. Optional filter parameters can be passed in. */
    getSubscribers: {
        parameters: {
            header: {
                /** The [MIME type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types) of the response body. */
                Accept: components['parameters']['Accept'];
            };
            query: {
                /** Filter items by email. */
                email?: string;
                /** Filter items by first_name. */
                first_name?: string;
                /** Filter items by last_name. */
                last_name?: string;
                /** Filter items by source. */
                source?: string;
                /** Filter items by order_id. */
                order_id?: number;
                /** Filter items by date_created. */
                date_created?: string;
                /** Filter items by date_modified. For example `v3/catalog/products?date_last_imported:min=2018-06-15` */
                date_modified?: string;
                /** Specifies the page number in a limited (paginated) list of products. */
                page?: number;
                /** Controls the number of items per page in a limited (paginated) list of products. */
                limit?: number;
                /** Filter items by id. */
                id?: number;
            };
        };
        responses: {
            200: {
                content: {
                    'application/json': {
                        data?: components['schemas']['subscriber_Full'][];
                        meta?: components['schemas']['CollectionMeta'];
                    };
                };
            };
        };
    };
    /**
     * Creates a *Subscriber*.
     *
     * **Required Fields**
     * * email
     *
     * **Read Only Fields**
     * * id
     */
    createSubscriber: {
        parameters: {
            header: {
                /** The [MIME type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types) of the response body. */
                Accept: components['parameters']['Accept'];
                /** The [MIME type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types) of the request body. */
                'Content-Type': components['parameters']['ContentType'];
            };
        };
        responses: {
            200: {
                content: {
                    'application/json': {
                        data?: components['schemas']['subscriber_Full'];
                        meta?: components['schemas']['OpenMeta'];
                    };
                };
            };
            /** The `Subscriber` was in conflict with another subscriber. This is the result of duplicate unique values, such as email. */
            409: {
                content: {
                    'application/json': {
                        /** Detailed Errors */
                        errors?: {
                            [key: string]: unknown;
                        };
                        instance?: string;
                        /** @description The HTTP status code. */
                        status?: number;
                        /** @description The error title describing the particular error. */
                        title?: string;
                        type?: string;
                    };
                };
            };
            /** The `Subscriber` was not valid. This is the result of missing required fields, or of invalid data. See the response for more details. */
            422: {
                content: {
                    'application/json': {
                        /** Detailed Errors */
                        errors?: {
                            [key: string]: unknown;
                        };
                        instance?: string;
                        /** @description The HTTP status code. */
                        status?: number;
                        /** @description The error title describing the particular error. */
                        title?: string;
                        type?: string;
                    };
                };
            };
        };
        requestBody: {
            content: {
                'application/json': components['schemas']['subscriber_Post'];
            };
        };
    };
    /** By default, it deletes all *Subscribers*. A filter should be added to avoid deleting all subscribers in a store. */
    deleteSubscribers: {
        parameters: {
            header: {
                /** The [MIME type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types) of the response body. */
                Accept: components['parameters']['Accept'];
            };
            query: {
                /** Filter items by email. */
                email?: string;
                /** Filter items by first_name. */
                first_name?: string;
                /** Filter items by last_name. */
                last_name?: string;
                /** Filter items by source. */
                source?: string;
                /** Filter items by order_id. */
                order_id?: number;
                /** Filter items by date_created. */
                date_created?: string;
                /** Filter items by date_modified. For example `v3/catalog/products?date_last_imported:min=2018-06-15` */
                date_modified?: string;
            };
        };
        responses: {
            204: never;
        };
    };
    /** Returns a *Subscriber*. */
    getSubscriberById: {
        parameters: {
            header: {
                /** The [MIME type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types) of the response body. */
                Accept: components['parameters']['Accept'];
            };
            path: {
                /** The ID of the `Subscriber` requested. */
                subscriber_id: number;
            };
        };
        responses: {
            200: {
                content: {
                    'application/json': {
                        data?: components['schemas']['subscriber_Full'];
                        meta?: components['schemas']['OpenMeta'];
                    };
                };
            };
            /** The resource was not found. */
            404: {
                content: {
                    'application/json': {
                        /** @description 404 HTTP status code. */
                        status?: number;
                        /** @description The error title describing the particular error. */
                        title?: string;
                        type?: string;
                        instance?: string;
                    };
                };
            };
        };
    };
    /**
     * Updates a *Subscriber*.
     *
     * **Read Only Fields**
     * * id
     */
    updateSubscriber: {
        parameters: {
            header: {
                /** The [MIME type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types) of the response body. */
                Accept: components['parameters']['Accept'];
                /** The [MIME type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types) of the request body. */
                'Content-Type': components['parameters']['ContentType'];
            };
            path: {
                /** The ID of the `Subscriber` requested. */
                subscriber_id: number;
            };
        };
        responses: {
            200: {
                content: {
                    'application/json': {
                        data?: components['schemas']['subscriber_Full'];
                        meta?: components['schemas']['OpenMeta'];
                    };
                };
            };
            /** The resource was not found. */
            404: {
                content: {
                    'application/json': {
                        /** @description 404 HTTP status code. */
                        status?: number;
                        /** @description The error title describing the particular error. */
                        title?: string;
                        type?: string;
                        instance?: string;
                    };
                };
            };
            /** The `Subscriber` was in conflict with another subscriber. This is the result of duplicate unique values, such as `email`. */
            409: {
                content: {
                    'application/json': {
                        /** Detailed Errors */
                        errors?: {
                            [key: string]: unknown;
                        };
                        instance?: string;
                        /** @description The HTTP status code. */
                        status?: number;
                        /** @description The error title describing the particular error. */
                        title?: string;
                        type?: string;
                    };
                };
            };
            /** The `Subscriber` was not valid. This is the result of missing required fields, or of invalid data. See the response for more details. */
            422: {
                content: {
                    'application/json': {
                        /** Detailed Errors */
                        errors?: {
                            additionalProperties?: string;
                        };
                        instance?: string;
                        /** @description The HTTP status code. */
                        status?: number;
                        /** @description The error title describing the particular error. */
                        title?: string;
                        type?: string;
                    };
                };
            };
        };
        requestBody: {
            content: {
                'application/json': components['schemas']['subscriber_Put'];
            };
        };
    };
    /** Deletes a *Subscriber*. */
    deleteSubscriberById: {
        parameters: {
            header: {
                /** The [MIME type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types) of the response body. */
                Accept: components['parameters']['Accept'];
            };
            path: {
                /** The ID of the `Subscriber` requested. */
                subscriber_id: number;
            };
        };
        responses: {
            204: never;
        };
    };
}
export interface external {
}
