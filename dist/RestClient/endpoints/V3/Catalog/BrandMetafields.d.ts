import { AxiosInstance } from 'axios';
import { AxiosPromise } from '../../../../types';
import type { BrandMetafield } from './types';
declare class BrandMetafields {
    private client;
    constructor(client: AxiosInstance);
    /**
     * Retrieves a list of brand metafields for a given brand
     *
     * @param id A valid Brand ID
     * @param params Query parameters used to filter response
     * @returns Promise resolving to a list of brand metafields
     */
    list(id: number, params?: BrandMetafield['ListFilters']): BrandMetafield['ListResponse'];
    /**
     * Creates a new brand metafield for a given brand
     *
     * @param id A valid Brand ID
     * @param data Data used to create a brand metafield
     * @returns Promise resolving to the newly created brand metafield
     */
    create(id: number, data: BrandMetafield['CreateRequest']): BrandMetafield['CreateResponse'];
    /**
     * Gets a single brand metafield by ID
     *
     * @param brandId A valid Brand ID
     * @param metafieldId A valid Brand Metafield ID
     * @param params Query parameters used to filter response
     * @returns Promise resolving to a single brand metafield
     */
    get(brandId: number, metafieldId: number, params?: BrandMetafield['GetFilters']): BrandMetafield['GetResponse'];
    /**
     * Updates a single brand metafield by ID
     *
     * @param brandId A valid Brand ID
     * @param metafieldId A valid Brand Metafield ID
     * @param data Data used to update a brand metafield
     * @returns Promise resolving to the updated brand metafield
     */
    update(brandId: number, metafieldId: number, data: BrandMetafield['UpdateRequest']): BrandMetafield['UpdateResponse'];
    /**
     * Deletes a single brand metafield by ID
     *
     * @param brandId A valid Brand ID
     * @param metafieldId A valid Brand Metafield ID
     * @returns Promise resolving to a 204 No Content response
     */
    delete(brandId: number, metafieldId: number): AxiosPromise<string>;
}
export default BrandMetafields;
