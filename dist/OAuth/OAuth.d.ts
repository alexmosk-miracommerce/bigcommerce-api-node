import { JwtPayload } from 'jsonwebtoken';
import { AuthCallbackQueryParams, AuthResponsePayload, OAuthConfig } from '../types';
declare class OAuth {
    private config;
    constructor(config: OAuthConfig);
    /**
     * Sends a POST request to the BigCommerce /oauth2/token endpoint
     * to exchange the temporary access code provided by app installation
     * for a permanent access_token that can be used to communicate with
     * the BigCommerce API.
     *
     * @param {Object} query Required properties are code, scope, and context
     * @param {string} query.code Temporary code to exchange for access_token
     * @param {string} query.context Store hash, e.g., stores/{STORE_HASH}
     * @param {string} query.scope List of scopes authorized by the user
     * @returns {Promise<AuthResponsePayload>} Object containing access_token to use
     *     for API requests
     */
    authorize(query: AuthCallbackQueryParams): Promise<AuthResponsePayload>;
    /**
     * Verify signed_payload_jwt from load/uninstall/remove user callbacks
     *
     * @param {string} signedPayloadJWT JWT provided in callback query params
     * @returns {JwtPayload} Decoded JWT containing store hash, user,
     *     and owner information
     */
    verifyJWT(signedPayloadJWT: string): JwtPayload;
}
export default OAuth;
