import { AxiosInstance } from 'axios';
import { AxiosPromise } from '../../../../types';
import type { ProductReview } from './types';
declare class ProductReviews {
    private client;
    constructor(client: AxiosInstance);
    /**
     * Gets a list of product reviews
     *
     * @param productId A valid product ID
     * @param params Query parameters to filter the response
     * @returns Promise resolving to a list of product metafields
     */
    list(productId: number, params?: ProductReview['ListFilters']): ProductReview['ListResponse'];
    /**
     * Creates a new product review
     *
     * @param productId A valid product ID
     * @param data Data to create a new product review
     * @returns Promise resolving to a newly created product review
     */
    create(productId: number, data: ProductReview['CreateRequest']): ProductReview['CreateResponse'];
    /**
     * Gets a single product review
     *
     * @param productId A valid product ID
     * @param reviewId A valid product review ID
     * @param params Query parameters to filter the response
     * @returns Promise resolving to a single product review
     */
    get(productId: number, reviewId: number, params?: ProductReview['GetFilters']): ProductReview['GetResponse'];
    /**
     * Updates a single product review
     *
     * @param productId A valid product ID
     * @param reviewId A valid product review ID
     * @param data Data to update the product review
     * @returns Promise resolving to a single updated product review
     */
    update(productId: number, reviewId: number, data: ProductReview['UpdateRequest']): ProductReview['UpdateResponse'];
    /**
     * Deletes a single product review
     *
     * @param productId A valid product ID
     * @param reviewId A valid product review ID
     * @returns Promise resolving to a 204 No Content response
     */
    delete(productId: number, reviewId: number): AxiosPromise<string>;
}
export default ProductReviews;
