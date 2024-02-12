import { AxiosInstance } from 'axios';
import { AxiosPromise } from '../../../../types';
import type { ChannelAssignments } from './types';
declare class ProductsChannelAssignments {
    private client;
    constructor(client: AxiosInstance);
    /**
     * Gets a list of products channel assignments
     *
     * @param params Query parameters to filter the response
     * @returns Promise resolving to a list of product channel assignments
     */
    list(params?: ChannelAssignments['ListFilters']): ChannelAssignments['ListResponse'];
    /**
     * Creates products channel assignments
     *
     * @param data Data used to create a product channel assignment
     * @returns Promise resolving to a 204 No Content response
     */
    create(data: ChannelAssignments['CreateRequest']): AxiosPromise<string>;
    /**
     * Deletes products channel assignments
     * @param params Query parameters to filter the response
     * @returns Promise resolving to a 204 No Content response
     */
    delete(params?: ChannelAssignments['DeleteFilters']): AxiosPromise<string>;
}
export default ProductsChannelAssignments;
