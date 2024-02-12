import { AxiosInstance } from 'axios';
import { AxiosPromise } from '../../../../types';
import type { Theme } from './types';
export declare const themesPath = "/v3/themes";
declare class Themes {
    private client;
    constructor(client: AxiosInstance);
    /**
     * Gets a list of store themes
     *
     * @returns Promise resolving to a list of store themes
     */
    list(): Theme['ListResponse'];
    /**
     * Uploads a new theme to your BigCommerce store.
     *
     * @param themePath An absolute path to the theme file
     * @returns Promise resolving with the job ID processing the theme upload
     */
    create(themePath: string): Theme['CreateResponse'];
    /**
     * Returns a store theme.
     *
     * @param uuid A valid store theme UUID
     * @returns Promise resolving to a single theme
     */
    get(uuid: string): Theme['GetResponse'];
    /**
     * Deletes a  single store Theme by UUID
     *
     * @param uuid A valid store theme UUID
     * @returns Promise resolving to a 204 No Content response
     */
    delete(uuid: string): AxiosPromise<string>;
}
export default Themes;
