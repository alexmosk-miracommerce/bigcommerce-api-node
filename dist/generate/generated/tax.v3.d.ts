/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */
export interface paths {
    '/tax/providers/{provider_id}/connection': {
        /**
         * Retrieve the connection status of the specified tax provider in the context of a store.
         *
         * > #### Note
         * > * Requires **read** permissions on the **Information and Settings** scope.
         */
        get: operations['provider-connection-get'];
        /**
         * Set authentication information associated with a merchant's account on the tax provider's infrastructure:
         * - [HTTP Basic Authentication](https://developer.mozilla.org/en-US/docs/Web/HTTP/Authentication) (developer.mozilla.org) credentials
         * - (optional) Tax provider profile used in customized endpoint urls for tax provider calls. This is only available for tax providers that support this feature.
         *
         * The configured `username`, `password`, and `profile` (if available) is used to authenticate each API request to the Tax Provider from the associated store.
         * The tax provider's `profile` will be included in the url for [Tax Provider API](/docs/rest-contracts/tax) endpoints.
         *
         * > #### Note
         * > * This operation will be logged in [Store Logs](https://support.bigcommerce.com/s/article/Using-Store-Logs) under **Staff Actions**.
         * > * Requires **write** permissions on the **Information and Settings** [scope](/docs/start/authentication/api-accounts#oauth-scopes).
         */
        put: operations['provider-connection-put'];
        /**
         * Remove any previously set basic connection credentials for the specified provider. If the specified provider is the active tax provider on the store, the store's active tax provider will be reset to BigCommerce Manual Tax. It is suggested to call this endpoint during a single-click app [uninstall callback](/docs/integrations/apps/guide/callbacks#uninstall-callback).
         *
         * > #### Note
         * > * This operation will be logged in [Store Logs](https://support.bigcommerce.com/s/article/Using-Store-Logs) under **Staff Actions**.
         * > * Requires **write** permissions on the **Information and Settings** [scope](/docs/start/authentication/api-accounts#oauth-scopes).
         */
        delete: operations['provider-connection-delete'];
        parameters: {
            header: {
                /** The [MIME type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types) of the response body. */
                Accept: components['parameters']['Accept'];
            };
            path: {
                /** The Tax Providerʼs `provider_id` provided by BigCommerce after the provider [shares their provider details](/docs/integrations/tax#sharing-provider-details-with-bigcommerce). */
                provider_id: string;
            };
        };
    };
}
export interface components {
    schemas: {
        /** Connection Status */
        'response-connection': {
            data?: {
                /** @description Identifies a unique account on the external tax provider infrastructure. May be used to reconcile the two platforms. */
                username?: string;
                /**
                 * @description Describes whether the stored credentials are considered complete and configured, ready to be used for Tax Provider API requests.
                 *
                 * Merchants may enable any **configured** tax provider for storefront tax quotation.
                 */
                configured?: boolean;
            };
        };
    };
    parameters: {
        /** @description The [MIME type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types) of the response body. */
        Accept: string;
        /** @description The [MIME type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types) of the request body. */
        ContentType: string;
        /** @description Unique key that identifies the Tax Provider on the BigCommerce platform. */
        provider_id: string;
    };
}
export interface operations {
    /**
     * Retrieve the connection status of the specified tax provider in the context of a store.
     *
     * > #### Note
     * > * Requires **read** permissions on the **Information and Settings** scope.
     */
    'provider-connection-get': {
        parameters: {
            header: {
                /** The [MIME type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types) of the response body. */
                Accept: components['parameters']['Accept'];
            };
            path: {
                /** The Tax Providerʼs `provider_id` provided by BigCommerce after the provider [shares their provider details](/docs/integrations/tax#sharing-provider-details-with-bigcommerce). */
                provider_id: string;
            };
        };
        responses: {
            /** OK */
            200: {
                content: {
                    'application/json': components['schemas']['response-connection'];
                };
            };
            /** Provider does not exist */
            404: unknown;
        };
    };
    /**
     * Set authentication information associated with a merchant's account on the tax provider's infrastructure:
     * - [HTTP Basic Authentication](https://developer.mozilla.org/en-US/docs/Web/HTTP/Authentication) (developer.mozilla.org) credentials
     * - (optional) Tax provider profile used in customized endpoint urls for tax provider calls. This is only available for tax providers that support this feature.
     *
     * The configured `username`, `password`, and `profile` (if available) is used to authenticate each API request to the Tax Provider from the associated store.
     * The tax provider's `profile` will be included in the url for [Tax Provider API](/docs/rest-contracts/tax) endpoints.
     *
     * > #### Note
     * > * This operation will be logged in [Store Logs](https://support.bigcommerce.com/s/article/Using-Store-Logs) under **Staff Actions**.
     * > * Requires **write** permissions on the **Information and Settings** [scope](/docs/start/authentication/api-accounts#oauth-scopes).
     */
    'provider-connection-put': {
        parameters: {
            header: {
                /** The [MIME type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types) of the response body. */
                Accept: components['parameters']['Accept'];
                /** The [MIME type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types) of the request body. */
                'Content-Type': components['parameters']['ContentType'];
            };
            path: {
                /** The Tax Providerʼs `provider_id` provided by BigCommerce after the provider [shares their provider details](/docs/integrations/tax#sharing-provider-details-with-bigcommerce). */
                provider_id: string;
            };
        };
        responses: {
            /** OK */
            200: {
                content: {
                    'application/json': components['schemas']['response-connection'];
                };
            };
            /** Provider does not exist */
            404: unknown;
            /** Unprocessable Entity, will include a specific error message referencing the issue. */
            422: unknown;
        };
        /** Basic authentication information, associated with a merchant account on the third-party tax providerʼs infrastructure. */
        requestBody: {
            content: {
                'application/json': {
                    /**
                     * @description Public identifying information representing a unique account on the tax provider's infrastructure. Should not contain any personal identifying information (e.g. a personal email address).
                     * @example MyTaxProviderAccount
                     */
                    username?: string;
                    /** @example h6eSgKLN72q7jYTW */
                    password?: string;
                    /**
                     * @description Optional field that allows merchants to customize Tax Provider API endpoint URLs. Only available for supporting providers.
                     * @example your_app_name
                     */
                    profile?: string;
                };
            };
        };
    };
    /**
     * Remove any previously set basic connection credentials for the specified provider. If the specified provider is the active tax provider on the store, the store's active tax provider will be reset to BigCommerce Manual Tax. It is suggested to call this endpoint during a single-click app [uninstall callback](/docs/integrations/apps/guide/callbacks#uninstall-callback).
     *
     * > #### Note
     * > * This operation will be logged in [Store Logs](https://support.bigcommerce.com/s/article/Using-Store-Logs) under **Staff Actions**.
     * > * Requires **write** permissions on the **Information and Settings** [scope](/docs/start/authentication/api-accounts#oauth-scopes).
     */
    'provider-connection-delete': {
        parameters: {
            header: {
                /** The [MIME type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types) of the response body. */
                Accept: components['parameters']['Accept'];
            };
            path: {
                /** The Tax Providerʼs `provider_id` provided by BigCommerce after the provider [shares their provider details](/docs/integrations/tax#sharing-provider-details-with-bigcommerce). */
                provider_id: string;
            };
        };
        responses: {
            /** OK */
            200: {
                content: {
                    'application/json': components['schemas']['response-connection'];
                };
            };
            /** Provider or provider connection does not exist */
            404: unknown;
        };
    };
}
export interface external {
}