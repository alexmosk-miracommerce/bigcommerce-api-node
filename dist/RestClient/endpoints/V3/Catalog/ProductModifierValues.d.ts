import { AxiosInstance } from 'axios';
import { AxiosPromise } from '../../../../types';
import type { ProductModifierValue } from './types';
declare class ProductModifierValues {
    private client;
    constructor(client: AxiosInstance);
    /**
     * Gets a list of product modifier values
     *
     * @param productId A valid product ID
     * @param modifierId A valid product modifier ID
     * @param params Query parameters used to filter the response
     * @returns Promise resolving to the list of product modifier values
     */
    list(productId: number, modifierId: number, params?: ProductModifierValue['ListFilters']): ProductModifierValue['ListResponse'];
    /**
     * Creates a new product modifier value
     *
     * @param productId A valid product ID
     * @param modifierId A valid product modifier ID
     * @param data Data used to create the product modifier value
     * @returns Promise resolving to the newly created product modifier value
     */
    create(productId: number, modifierId: number, data: ProductModifierValue['CreateRequest']): ProductModifierValue['CreateResponse'];
    /**
     * Gets a single product modifier value
     *
     * @param productId A valid product ID
     * @param modifierId A valid product modifier ID
     * @param valueId A valid product modifier value ID
     * @param params Query parameters used to filter the response
     * @returns Promise resolving to the product modifier value
     */
    get(productId: number, modifierId: number, valueId: number, params?: ProductModifierValue['GetFilters']): ProductModifierValue['GetResponse'];
    /**
     * Updates a single product modifier value
     *
     * @param productId A valid product ID
     * @param modifierId A valid product modifier ID
     * @param valueId A valid product modifier value ID
     * @param data Data used to update the product modifier value
     * @returns Promise resolving to a product modifier value
     */
    update(productId: number, modifierId: number, valueId: number, data: ProductModifierValue['UpdateRequest']): ProductModifierValue['UpdateResponse'];
    /**
     * Deletes a single product modifier value
     *
     * @param productId A valid product ID
     * @param modifierId A valid product modifier ID
     * @param valueId A valid product modifier value ID
     * @returns Promise resolving to a 204 No Content response
     */
    delete(productId: number, modifierId: number, valueId: number): AxiosPromise<string>;
}
export default ProductModifierValues;
