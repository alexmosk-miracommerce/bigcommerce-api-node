import { AxiosInstance } from 'axios';
import { AxiosPromise } from '../../../../types';
import type { Product } from './types';
/**
 * Builds a base Products API path given an optional product ID
 *
 * @param id Optional Product ID
 * @returns Either '/v3/catalog/products/:productId' or '/v3/catalog/products'
 */
export declare const getProductsPath: (id?: number | undefined) => string;
declare class Products {
    private client;
    constructor(client: AxiosInstance);
    /**
     * Gets a list of products from a store's catalog
     *
     * @param params Query parameters used to filter the response
     * @returns Promise resolving to a list of products
     */
    list(params?: Product['ListFilters']): Product['ListResponse'];
    /**
     * Updates a batch of products in a store's catalog
     *
     * @param data Data used to update a batch of products
     * @param params Query parameters used to filter the response
     * @returns Promise resolving to a list of updated products
     */
    updateBatch(data: Product['UpdateBatchRequest'], params?: Product['UpdateBatchFilters']): Product['UpdateBatchResponse'];
    /**
     * Creates a new product in a store's catalog
     *
     * @param data Data used to create a product
     * @param params Query parameters used to filter the response
     * @returns Promise resolving to the newly created product
     */
    create(data: Product['CreateRequest'], params?: Product['CreateFilters']): Product['CreateResponse'];
    /**
     * Deletes products from a store's catalog
     *
     * @param params Query parameters used to filter the products to delete
     * @returns Promise resolving to a 204 No Content response
     */
    deleteMany(params?: Product['DeleteManyFilters']): AxiosPromise<string>;
    /**
     * Gets a single product by ID
     *
     * @param id A valid product ID
     * @param params Query parameters used to filter the response
     * @returns Promise resolving to a single product
     */
    get(id: number, params?: Product['GetFilters']): Product['GetResponse'];
    /**
     * Updates a single product by ID
     *
     * @param id A valid product ID
     * @param data Data used to update the product
     * @param params Query parameters used to filter the response
     * @returns Promise resolving to the updated product
     */
    update(id: number, data: Product['UpdateRequest'], params?: Product['UpdateFilters']): Product['UpdateResponse'];
    /**
     * Deletes a single product by ID
     *
     * @param id A valid product ID
     * @returns Promise resolving to a 204 No Content response
     */
    delete(id: number): AxiosPromise<string>;
}
export default Products;
