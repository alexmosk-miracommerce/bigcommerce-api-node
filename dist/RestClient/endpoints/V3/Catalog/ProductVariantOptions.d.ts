import { AxiosInstance } from 'axios';
import { AxiosPromise } from '../../../../types';
import type { VariantOptions } from './types';
declare class ProductVariantOptions {
    private client;
    constructor(client: AxiosInstance);
    /**
     * Gets a list of product variant options
     *
     * @param productId A valid product ID
     * @param params Query parameters used to filter the response
     * @returns Promise resolving to a list of product variant options
     */
    list(productId: number, params?: VariantOptions['ListFilters']): VariantOptions['ListResponse'];
    /**
     * Creates a new product variant option
     *
     * @param productId A valid product ID
     * @param data Data used to create a new product variant option
     * @returns Promise resolving to the newly created product variant option
     */
    create(productId: number, data: VariantOptions['CreateRequest']): VariantOptions['CreateResponse'];
    /**
     * Gets a single product variant option
     *
     * @param productId A valid product ID
     * @param optionId A valid product variant option ID
     * @param params Query parameters used to filter the response
     * @returns Promise resolving to a single product variant option
     */
    get(productId: number, optionId: number, params?: VariantOptions['GetFilters']): VariantOptions['GetResponse'];
    /**
     * Updates a single product variant option
     *
     * @param productId A valid product ID
     * @param optionId A valid product variant option ID
     * @param data Data used to update a product variant option
     * @returns Promise resolving to the updated product variant option
     */
    update(productId: number, optionId: number, data: VariantOptions['UpdateRequest']): VariantOptions['UpdateResponse'];
    /**
     * Deletes a single product variant option
     *
     * @param productId A valid product ID
     * @param optionId A valid product variant option ID
     * @returns Promise resolving to a 204 No Content response
     */
    delete(productId: number, optionId: number): AxiosPromise<string>;
}
export default ProductVariantOptions;
