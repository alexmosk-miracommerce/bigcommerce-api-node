import { AxiosInstance } from 'axios';
import { AxiosPromise } from '../../../../types';
import type { ProductVariant } from './types';
declare class ProductVariants {
    private client;
    constructor(client: AxiosInstance);
    /**
     * Gets a list of product variants
     *
     * @param productId A valid product ID
     * @param params Query parameters used to filter the response
     * @returns Promise resolving to a list of product variants
     */
    list(productId: number, params?: ProductVariant['ListFilters']): ProductVariant['ListResponse'];
    /**
     * Creates a single product variant
     *
     * @param productId A valid product ID
     * @param data Data used to create a new product variant
     * @returns Promise resolving to the newly created product variant
     */
    create(productId: number, data: ProductVariant['CreateRequest']): ProductVariant['CreateResponse'];
    /**
     * Gets a single product variant
     *
     * @param productId A valid product ID
     * @param variantId A valid product variant ID
     * @param params Query parameters used to filter the response
     * @returns Promise resolving to a single product variant
     */
    get(productId: number, variantId: number, params?: ProductVariant['GetFilters']): ProductVariant['GetResponse'];
    /**
     * Updates a single product variant
     *
     * @param productId A valid product ID
     * @param variantId A valid product variant ID
     * @param data Data used to update a product variant
     * @returns Promise resolving to the updated product variant
     */
    update(productId: number, variantId: number, data: ProductVariant['UpdateRequest']): ProductVariant['UpdateResponse'];
    /**
     * Deletes a single product variant
     *
     * @param productId A valid product ID
     * @param variantId A valid product variant ID
     * @returns Promise resolving to a 204 No Content response
     */
    delete(productId: number, variantId: number): AxiosPromise<string>;
    /**
     * Creates a new product variant image
     *
     * @param productId A valid product ID
     * @param variantId A valid product variant ID
     * @param data Data used to create a new product variant image
     * @returns Promise resolving to the newly created product variant image
     */
    createImage(productId: number, variantId: number, data: ProductVariant['CreateImageRequest']): ProductVariant['CreateImageResponse'];
}
export default ProductVariants;
