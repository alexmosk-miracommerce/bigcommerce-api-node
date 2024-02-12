import { AxiosInstance } from 'axios';
import type { Messages } from './types';
declare class OrderMessages {
    private client;
    constructor(client: AxiosInstance);
    /**
     * Gets all messages associated with an order
     *
     * @param orderId A valid order ID
     * @param params Query parameters used to filter response
     * @returns Promise resolving to a response containing the collection of messages on an order
     */
    list(orderId: number, params?: Messages['ListFilters']): Messages['ListResponse'];
    /**
     * Returns an iterator object allowing you to paginate through all messages on an order, one message at a time
     *
     * @example
     * for await (const message of bcRest.orderMessages.listAll(orderId)) {
     *   console.log(message);
     * }
     *
     * @param params Query parameters used to filter response
     * @returns Promise resolving to an order message list iterator object
     */
    listAll(orderId: number, params?: Messages['ListFilters']): Messages['ListAllResponse'];
}
export default OrderMessages;
