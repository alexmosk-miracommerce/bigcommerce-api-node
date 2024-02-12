import { AxiosInstance } from 'axios';
import type { ThemeConfiguration } from './types';
declare class ThemeConfigurations {
    private client;
    constructor(client: AxiosInstance);
    /**
     * Returns a list of theme configurations
     *
     * @param uuid A valid theme UUID
     * @param params Query parameters used to filter response, with required site ID
     * @returns Promise resolving to a list of theme configurations
     */
    list(uuid: string, params: ThemeConfiguration['ListFilters']): ThemeConfiguration['ListResponse'];
    /**
     * Validates a theme configuration against the theme's schema without creating it. Useful for testing schemas before creation
     *
     * @param uuid A valid theme UUID
     * @returns Promise resolving to a 200 OK response representing that the theme passes validation
     */
    validate(uuid: string): ThemeConfiguration['CreateResponse'];
}
export default ThemeConfigurations;
