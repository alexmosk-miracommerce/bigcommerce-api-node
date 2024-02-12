import { AxiosInstance } from 'axios';
import type { CategoryBatch } from './types';
declare class CategoriesBatch {
    private client;
    constructor(client: AxiosInstance);
    /**
     * Gets a list of categories in a store's catalog
     *
     * @param params Query parameters used to filter the response
     * @returns Promise resolving to a list of categories
     */
    list(params?: CategoryBatch['ListFilters']): CategoryBatch['ListResponse'];
    /**
     * Creates new categories in a store's catalog
     *
     * @param data Data used to create categories
     * @returns Promise resolving to a list of new categories
     */
    create(data: CategoryBatch['CreateRequest']): CategoryBatch['CreateResponse'];
    /**
     * Updates existing categories in a store's catalog
     *
     * @param data Data used to create new categories
     * @returns Promise resolving to a list of updated categories
     */
    update(data: CategoryBatch['UpdateRequest']): CategoryBatch['UpdateResponse'];
    /**
     * Deletes categories in a store's catalog
     *
     * @param params Query parameters used to delete categories
     * @returns Promise resolving to a meta object with data about the deleted categories
     */
    delete(params?: CategoryBatch['DeleteFilters']): CategoryBatch['DeleteResponse'];
}
export default CategoriesBatch;
