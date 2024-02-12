import { AxiosInstance } from 'axios';
import { AxiosPromise } from '../../../../types';
import type { CategoryAssignments } from './types';
declare class ProductsCategoryAssignments {
    private client;
    constructor(client: AxiosInstance);
    /**
     * Gets a list of products category assignments
     *
     * @param params Query parameters used to filter the response
     * @returns Promise resolving to a list of product category assignments
     */
    list(params?: CategoryAssignments['ListFilters']): CategoryAssignments['ListResponse'];
    /**
     * Creates products category assignments
     *
     * @param data Data used to create a new product category assignment
     * @returns Promise resolving to a 204 No Content response
     */
    create(data: CategoryAssignments['CreateRequest']): AxiosPromise<string>;
    /**
     * Deletes products category assignments
     *
     * @param params Query parameters used to filter the response
     * @returns Promise resolving to a 204 No Content response
     */
    delete(params?: CategoryAssignments['DeleteFilters']): AxiosPromise<string>;
}
export default ProductsCategoryAssignments;
