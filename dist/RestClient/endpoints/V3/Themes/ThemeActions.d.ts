import { AxiosInstance } from 'axios';
import type { ThemeAction } from './types';
declare class ThemeActions {
    private client;
    constructor(client: AxiosInstance);
    /**
     * Downloads a store's Theme.
     *
     * @param uuid A valid store theme UUID
     * @param data Data specifying which theme to download
     * @returns Promise resolving to a job ID that can be used to query the current status of a theme download
     */
    download(uuid: string, data?: ThemeAction['DownloadRequest']): ThemeAction['DownloadResponse'];
    /**
     * Activates a Theme
     *
     * @param data Data used to activate a theme
     * @returns Promise resolving to a 204 No Content response
     */
    activate(data: ThemeAction['CreateRequest']): ThemeAction['CreateResponse'];
}
export default ThemeActions;
