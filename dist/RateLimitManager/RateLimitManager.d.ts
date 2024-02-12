import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosResponseHeaders } from 'axios';
import { RateLimitConfig, RateLimitStatus } from '../types';
declare class RateLimitManager {
    private client;
    rateLimitConfig: RateLimitConfig;
    status: RateLimitStatus | null;
    constructor(client: AxiosInstance, config: RateLimitConfig);
    /**
     * Sets the rate limit status from the response headers
     * @param {AxiosResponseHeaders} headers Headers object from axios response
     * @returns {void}
     */
    setStatus(headers: AxiosResponseHeaders): void;
    /**
     * If enabled, waits until the next rate limit window when remaining requests are less than the minimum. Runs a
     * callback function if provided in rateLimitConfig.
     * @returns {Promise<void>}
     */
    backoff(): Promise<void>;
    /**
     * Callback passed into client request interceptor for rate limiting management.
     * @param {AxiosRequestConfig} req Request config object from axios
     * @returns {Promise<AxiosRequestConfig>} Returns the request config object after backoff runs
     */
    requestSuccessInterceptor: (req: AxiosRequestConfig) => Promise<AxiosRequestConfig>;
    /**
     * Callback to be passed into client response interceptor for rate limiting management.
     * @param {AxiosResponse} res Response object from axios
     * @returns {AxiosResponse} Returns the response object after setting the rate limit status
     */
    responseSuccessInterceptor: (res: AxiosResponse) => AxiosResponse;
    /**
     * Callback to be passed into client response interceptor for better HTTP error handling.
     * @param {AxiosError} error Error object from axios.
     */
    responseErrorInterceptor: (error: AxiosError) => AxiosError;
}
export default RateLimitManager;
