import { AxiosInstance } from 'axios';
import { AxiosPromise } from '../../../../types';
import type { CategoryMetafield } from './types';
declare class CategoryMetafields {
    private client;
    constructor(client: AxiosInstance);
    /**
     * Gets a list of metafields associated with a category
     *
     * @param id A valid Category ID
     * @param params Query parameters used to filter the response
     * @returns Promise resolving to a list of category metafields
     */
    list(id: number, params?: CategoryMetafield['ListFilters']): CategoryMetafield['ListResponse'];
    /**
     * Creates a new metafield for a category
     *
     * @param id A valid Category ID
     * @param data Data used to create a category metafield
     * @returns Promise resolving to a newly created category metafield
     */
    create(id: number, data: CategoryMetafield['CreateRequest']): CategoryMetafield['CreateResponse'];
    /**
     * Gets a single category metafield
     *
     * @param categoryId A valid Category ID
     * @param metafieldId A valid Category Metafield ID
     * @param params Query parameters used to filter the response
     * @returns Promise resolving to a single category metafield
     */
    get(categoryId: number, metafieldId: number, params?: CategoryMetafield['GetFilters']): CategoryMetafield['GetResponse'];
    /**
     * Updates a single category metafield
     *
     * @param categoryId A valid Category ID
     * @param metafieldId A valid Category Metafield ID
     * @param data Data used to update the category metafield
     * @returns Promise resolving to the updated category metafield
     */
    update(categoryId: number, metafieldId: number, data: CategoryMetafield['UpdateRequest']): CategoryMetafield['UpdateResponse'];
    /**
     * Deletes a single category metafield
     *
     * @param categoryId A valid Category ID
     * @param metafieldId A valid Category Metafield ID
     * @returns Promise resolving to a 204 No Content response
     */
    delete(categoryId: number, metafieldId: number): AxiosPromise<string>;
}
export default CategoryMetafields;
