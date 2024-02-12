import { AxiosInstance } from 'axios';
import type { SortOrder } from './types';
declare class ProductSortOrder {
    private client;
    constructor(client: AxiosInstance);
    /**
     * Retrieve a list of products sorted by their sort order
     *
     * @param id A valid Category ID
     * @returns Promise resolving to a list of products and their sort order
     */
    list(id: number): SortOrder['ListResponse'];
    /**
     * Updates the sort order of a list of products in a category
     *
     * @param id A valid Category ID
     * @param data Data used to update the sort order of products
     * @returns Promise resolving to a list of products and their sort order
     */
    update(id: number, data: SortOrder['UpdateRequest']): SortOrder['ListResponse'];
}
export default ProductSortOrder;
