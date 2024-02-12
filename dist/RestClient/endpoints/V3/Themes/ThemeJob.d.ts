import { AxiosInstance } from 'axios';
import type { ThemeJob } from './types';
declare class ThemeJobs {
    private client;
    constructor(client: AxiosInstance);
    /**
     * Returns a Theme job
     *
     * @param jobId A valid theme job ID
     * @returns Promise resolving to the current status of a theme job
     */
    get(jobId: string): ThemeJob['GetResponse'];
}
export default ThemeJobs;
