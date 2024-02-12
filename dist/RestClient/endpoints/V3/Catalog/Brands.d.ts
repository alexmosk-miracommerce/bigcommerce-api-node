import { AxiosInstance } from 'axios';
import { AxiosPromise } from '../../../../types';
import type { Brand } from './types';
/**
 * Builds a base Brands API path given an optional brand ID
 *
 * @param id Optional Brand ID
 * @returns Either '/v3/catalog/brands/:brandId' or '/v3/catalog/brands'
 */
export declare const getBrandsPath: (id?: number | undefined) => string;
declare class Brands {
    private client;
    constructor(client: AxiosInstance);
    /**
     * List all brands in a store's catalog
     *
     * @param params Query parameters used to filter response
     * @returns Promise resolving to a list of brands
     */
    list(params?: Brand['ListFilters']): Brand['ListResponse'];
    /**
     * Creates a new brand in a store's catalog
     *
     * @param data Data used to create the brand
     * @returns Promise resolving to the newly created brand
     */
    create(data: Brand['CreateRequest']): Brand['CreateResponse'];
    /**
     * Deletes all brand objects in a store's catalog
     *
     * @param params Comma-separated list of brand names or page titles
     * @returns Promise resolving to a 204 No Content response
     */
    deleteMany(params: Brand['DeleteManyFilters']): AxiosPromise<string>;
    /**
     * Retrieves a single brand in a store's catalog
     *
     * @param id A valid Brand ID
     * @returns Promise resolving to a single brand
     */
    get(id: number): Brand['GetResponse'];
    /**
     * Updates a single brand in a store's catalog
     *
     * @param id A valid Brand ID
     * @param data Data used to update the brand
     * @returns Promise resolving to the updated brand
     */
    update(id: number, data: Brand['UpdateRequest']): Brand['UpdateResponse'];
    /**
     * Deletes a single brand in a store's catalog
     *
     * @param id A valid Brand ID
     * @returns Promise resolving to a 204 No Content response
     */
    delete(id: number): AxiosPromise<string>;
}
export default Brands;
