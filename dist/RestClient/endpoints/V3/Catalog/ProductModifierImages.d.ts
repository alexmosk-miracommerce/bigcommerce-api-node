import { AxiosInstance } from 'axios';
import type { ProductModifierImage } from './types';
declare class ProductModifierImages {
    private client;
    constructor(client: AxiosInstance);
    create(productId: number, modifierId: number, valueId: number, imagePath: string): ProductModifierImage['CreateResponse'];
}
export default ProductModifierImages;
