import { AxiosInstance } from 'axios';
import type { Quotes } from './types';
declare class OrderShippingQuotes {
    private client;
    constructor(client: AxiosInstance);
    /**
     * Gets all shipping quotes persisted on an order
     *
     * @param orderId A valid order ID
     * @param addressId A valid shipping address ID
     * @returns Promise resolving to a response containing the collection of shipping quotes on an order
     */
    list(orderId: number, addressId: number): Quotes['ListResponse'];
}
export default OrderShippingQuotes;
