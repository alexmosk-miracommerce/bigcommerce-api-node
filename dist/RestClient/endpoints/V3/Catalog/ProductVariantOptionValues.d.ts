import { AxiosInstance } from 'axios';
import { AxiosPromise } from '../../../../types';
import type { VariantOptionValues } from './types';
declare class ProductVariantOptionValues {
    private client;
    constructor(client: AxiosInstance);
    /**
     * Gets a list of product variant option values
     *
     * @param productId A valid product ID
     * @param optionId A valid product option ID
     * @param params Query parameters used to filter the response
     * @returns Promise resolving to a list of product variant option values
     */
    list(productId: number, optionId: number, params?: VariantOptionValues['ListFilters']): VariantOptionValues['ListResponse'];
    /**
     * Creates a single product variant option value
     *
     * @param productId A valid product ID
     * @param optionId A valid product option ID
     * @param data Data used to create a new product variant option value
     * @returns Promise resolving to the newly created product variant option value
     */
    create(productId: number, optionId: number, data: VariantOptionValues['CreateRequest']): VariantOptionValues['CreateResponse'];
    /**
     * Gets a single product variant option value
     *
     * @param productId A valid product ID
     * @param optionId A valid product option ID
     * @param valueId A valid product variant option value ID
     * @param params Query parameters used to filter the response
     * @returns Promise resolving to a single product variant option value
     */
    get(productId: number, optionId: number, valueId: number, params?: VariantOptionValues['GetFilters']): VariantOptionValues['GetResponse'];
    /**
     * Updates a single product variant option value
     *
     * @param productId A valid product ID
     * @param optionId A valid product option ID
     * @param valueId A valid product variant option value ID
     * @param data Data used to update a product variant option value
     * @returns Promise resolving to the updated product variant option value
     */
    update(productId: number, optionId: number, valueId: number, data: VariantOptionValues['UpdateRequest']): VariantOptionValues['UpdateResponse'];
    /**
     * Deletes a single product variant option value
     *
     * @param productId A valid product ID
     * @param optionId A valid product option ID
     * @param valueId A valid product variant option value ID
     * @returns Promise resolving to a 204 No Content response
     */
    delete(productId: number, optionId: number, valueId: number): AxiosPromise<string>;
}
export default ProductVariantOptionValues;
