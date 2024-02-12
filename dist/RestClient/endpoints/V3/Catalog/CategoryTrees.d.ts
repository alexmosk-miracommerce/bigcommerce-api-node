import { AxiosInstance } from 'axios';
import { AxiosPromise } from '../../../../types';
import type { CategoryTree } from './types';
/**
 * Builds a base Category Trees API path given an optional tree ID
 *
 * @param id Optional Tree ID
 * @returns Either '/v3/catalog/trees/:treeId' or '/v3/catalog/trees'
 */
export declare const getCategoryTreesPath: (id?: number | undefined) => string;
declare class CategoryTrees {
    private client;
    constructor(client: AxiosInstance);
    /**
     * Gets a list of category trees
     *
     * @param params Query parameters to filter the response
     * @returns Promise resolving to a list of category trees
     */
    list(params?: CategoryTree['ListFilters']): CategoryTree['ListResponse'];
    /**
     * Upserts category trees
     *
     * @param data Data used to upsert new category trees
     * @returns Promise resolving to the list of upserted category trees
     */
    upsert(data: CategoryTree['UpsertRequest']): CategoryTree['UpsertResponse'];
    /**
     * Deletes category trees
     *
     * @param params Query parameters used to filter the response
     * @returns Promise resolving to a 204 No Content response
     */
    delete(params?: CategoryTree['DeleteFilters']): AxiosPromise<string>;
    /**
     * Gets a single category tree
     *
     * @param treeId A valid category tree ID
     * @param params Query parameters used to filter the response
     * @returns Promise resolving to a single category tree
     */
    get(treeId: number, params?: CategoryTree['GetFilters']): CategoryTree['GetResponse'];
}
export default CategoryTrees;
