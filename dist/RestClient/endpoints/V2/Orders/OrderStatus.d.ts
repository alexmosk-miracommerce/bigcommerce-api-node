import { AxiosInstance } from 'axios';
import type { Status } from './types';
declare class OrderStatus {
    private client;
    constructor(client: AxiosInstance);
    /**
     * Gets a list of order statuses in the store
     *
     * @returns Promise resolving to a response containing the collection of order statuses
     */
    list(): Status['ListResponse'];
    /**
     * Gets a single order status in the store
     *
     * @param statusId Order status ID
     * @returns Promise resolving to a response containing the single order status response
     */
    get(statusId: number): Status['GetResponse'];
}
export default OrderStatus;
