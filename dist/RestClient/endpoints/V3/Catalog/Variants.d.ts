import { AxiosInstance } from 'axios';
import type { Variant } from './types';
/**
 * Builds a base Variants API path given an optional variant ID
 *
 * @param id Optional Variant ID
 * @returns Either '/v3/catalog/variants/:variantId' or '/v3/catalog/variants'
 */
export declare const getVariantsPath: (id?: number | undefined) => string;
declare class Variants {
    private client;
    constructor(client: AxiosInstance);
    list(params?: Variant['ListFilters']): Variant['ListResponse'];
    /**
     * Creates new product variants in batch
     *
     * @param data Data to create new variants
     * @returns Promise resolving to the newly created variants
     */
    updateBatch(data: Variant['UpdateBatchRequest']): Variant['UpdateBatchResponse'];
}
export default Variants;
