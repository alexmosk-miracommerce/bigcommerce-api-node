import { AxiosInstance } from 'axios';
import { AxiosPromise } from '../../../../types';
import type { ProductBulkPricingRule } from './types';
declare class ProductBulkPricingRules {
    private client;
    constructor(client: AxiosInstance);
    /**
     * Returns a list of bulk pricing rules for a product
     *
     * @param id A valid product ID
     * @param params Query parameters used to filter the response
     * @returns Promise resolving to a list of bulk pricing rules for a product
     */
    list(id: number, params?: ProductBulkPricingRule['ListFilters']): ProductBulkPricingRule['ListResponse'];
    /**
     * Creates a new bulk pricing rule for a product
     *
     * @param id A valid product ID
     * @param data Data used to create the bulk pricing rule
     * @param params Query parameters used to filter the response
     * @returns Promise resolving to the newly created bulk pricing rule
     */
    create(id: number, data: ProductBulkPricingRule['CreateRequest'], params?: ProductBulkPricingRule['CreateFilters']): ProductBulkPricingRule['CreateResponse'];
    /**
     * Gets a single bulk pricing rule for a product
     *
     * @param productId A valid product ID
     * @param ruleId A valid bulk pricing rule ID
     * @param params Query parameters used to filter the response
     * @returns Promise resolving to a single bulk pricing rule
     */
    get(productId: number, ruleId: number, params?: ProductBulkPricingRule['GetFilters']): ProductBulkPricingRule['GetResponse'];
    /**
     * Updates a single bulk pricing rule for a product
     *
     * @param productId A valid product ID
     * @param ruleId A valid bulk pricing rule ID
     * @param data Data used to update the bulk pricing rule
     * @returns Promise resolving to the updated bulk pricing rule
     */
    update(productId: number, ruleId: number, data: ProductBulkPricingRule['UpdateRequest']): ProductBulkPricingRule['UpdateResponse'];
    /**
     * Deletes a single bulk pricing rule for a product
     *
     * @param productId A valid product ID
     * @param ruleId A valid bulk pricing rule ID
     * @returns Promise resolving to a 204 No Content response
     */
    delete(productId: number, ruleId: number): AxiosPromise<string>;
}
export default ProductBulkPricingRules;
