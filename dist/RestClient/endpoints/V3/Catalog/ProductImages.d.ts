import { AxiosInstance } from 'axios';
import { AxiosPromise } from '../../../../types';
import type { ProductImage } from './types';
declare class ProductImages {
    private client;
    constructor(client: AxiosInstance);
    /**
     * Gets a list of product images for a given product
     *
     * @param id A valid product ID
     * @param params Query parameters used to filter the response
     * @returns Promise resolving to a list of product images
     */
    list(id: number, params?: ProductImage['ListFilters']): ProductImage['ListResponse'];
    /**
     * Creates a new product image
     *
     * @param productId A valid product ID
     * @param data Data used to create a new product image
     * @returns Promise resolving to a newly created product image
     */
    create(productId: number, data: ProductImage['CreateRequest']): ProductImage['CreateResponse'];
    /**
     * Gets a single product image
     *
     * @param productId A valid product ID
     * @param imageId A valid product image ID
     * @param params Query parameters used to filter the response
     * @returns Promise resolving to a single product image
     */
    get(productId: number, imageId: number, params?: ProductImage['GetFilters']): ProductImage['GetResponse'];
    /**
     * Updates a single product image
     *
     * @param productId A valid product ID
     * @param imageId A valid product image ID
     * @param data Data used to update the product image
     * @returns Promise resolving to the updated product image
     */
    update(productId: number, imageId: number, data: ProductImage['UpdateRequest']): ProductImage['UpdateResponse'];
    /**
     * Deletes a single product image
     *
     * @param productId A valid product ID
     * @param imageId A valid product image ID
     * @returns Promise resolving to a 204 No Content response
     */
    delete(productId: number, imageId: number): AxiosPromise<string>;
}
export default ProductImages;
