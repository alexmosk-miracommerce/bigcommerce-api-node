import { AxiosInstance } from 'axios';
import type { ThemeCustomTemplate } from './types';
declare class ThemeCustomTemplates {
    private client;
    constructor(client: AxiosInstance);
    /**
     * Enumerates available custom templates for theme files in a specific theme version for each supported entity type
     *
     * @param versionUUID A valid store theme version UUID
     * @returns Promise resolving to a list of available custom template files
     */
    get(versionUUID: string): ThemeCustomTemplate['GetResponse'];
}
export default ThemeCustomTemplates;
