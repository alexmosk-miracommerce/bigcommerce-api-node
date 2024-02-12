import { AxiosInstance } from 'axios';
import { AxiosPromise } from '../../../../types';
import type { BrandImage } from './types';
declare class BrandImages {
    private client;
    constructor(client: AxiosInstance);
    /**
     * Creates a brand image
     *
     * @param id A valid Brand ID
     * @param imagePath An absolute path to an image file
     * @returns Promise resolving to a brand image object
     */
    create(id: number, imagePath: string): BrandImage['CreateResponse'];
    /**
     * Deletes a brand image
     *
     * @param id A valid Brand ID
     * @returns Promise resolving to a 204 No Content response
     */
    delete(id: number): AxiosPromise<string>;
}
export default BrandImages;
