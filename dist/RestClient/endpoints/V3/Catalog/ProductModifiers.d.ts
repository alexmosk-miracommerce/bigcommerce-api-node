import { AxiosInstance } from 'axios';
import { AxiosPromise } from '../../../../types';
import type { ProductModifier } from './types';
declare class ProductModifiers {
    private client;
    constructor(client: AxiosInstance);
    /**
     * Gets a list of product modifiers
     *
     * @param productId A valid product ID
     * @param params Query parameters used to filter the response
     * @returns Promise resolving to a list of modifiers
     */
    list(productId: number, params?: ProductModifier['ListFilters']): ProductModifier['ListResponse'];
    /**
     * Creates a new product modifier
     *
     * @param productId A valid product ID
     * @param data Data used to create a new product modifier
     * @returns Promise resolving to the newly created modifier
     */
    create(productId: number, data: ProductModifier['CreateRequest']): ProductModifier['CreateResponse'];
    /**
     * Gets a single product modifier
     *
     * @param productId A valid product ID
     * @param modifierId A valid product modifier ID
     * @param params Query parameters used to filter the response
     * @returns Promise resolving to a single product modifier
     */
    get(productId: number, modifierId: number, params?: ProductModifier['GetFilters']): ProductModifier['GetResponse'];
    /**
     * Updates a single product modifier
     *
     * @param productId A valid product ID
     * @param modifierId A valid product modifier ID
     * @param data Data used to update a product modifier
     * @returns Promise resolving to the updated product modifier
     */
    update(productId: number, modifierId: number, data: ProductModifier['UpdateRequest']): ProductModifier['UpdateResponse'];
    /**
     * Deletes a single product modifier
     *
     * @param productId A valid product ID
     * @param modifierId A valid product modifier ID
     * @returns Promise resolving to the deleted product modifier
     */
    delete(productId: number, modifierId: number): AxiosPromise<string>;
}
export default ProductModifiers;
