import { AxiosInstance } from 'axios';
import type { CatSummary } from './types';
declare class Summary {
    private client;
    constructor(client: AxiosInstance);
    /**
     * Returns a lightweight inventory summary from the BigCommerce Catalog
     *
     * @returns Promise resolving to a catalog summary object
     */
    get(): CatSummary['GetResponse'];
}
export default Summary;
