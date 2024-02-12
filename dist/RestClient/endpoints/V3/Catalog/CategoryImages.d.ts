import { AxiosInstance } from 'axios';
import { AxiosPromise } from '../../../../types';
import type { CategoryImage } from './types';
declare class CategoryImages {
    private client;
    constructor(client: AxiosInstance);
    /**
     * Creates a category image
     *
     * @param id A valid Category ID
     * @param imagePath An absolute path to an image file
     * @returns Promise resolving to a category image object
     */
    create(id: number, imagePath: string): CategoryImage['CreateResponse'];
    /**
     * Deletes a category image
     *
     * @param id A valid Category ID
     * @returns Promise resolving to a 204 No Content response
     */
    delete(id: number): AxiosPromise<string>;
}
export default CategoryImages;
