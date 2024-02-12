import { AxiosInstance } from 'axios';
import type { Addresses } from './types';
declare class OrderShippingAddresses {
    private client;
    constructor(client: AxiosInstance);
    /**
     * Gets all shipping addresses on an order using the order ID
     *
     * @param orderId A valid order ID
     * @returns Promise resolving to a response containing the collection of shipping addresses
     */
    list(orderId: number, params?: Addresses['ListFilters']): Addresses['ListResponse'];
    /**
     * Returns an iterator object allowing you to paginate through all shipping addresses on an order,
     * one address at a time
     *
     * @example
     * for await (const shippingAddress of bcRest.orderShippingAddresses.listAll(orderId)) {
     *   console.log(shippingAddress);
     * }
     *
     * @param params Query parameters used to filter response
     * @returns Promise resolving to an order shipping address list iterator object
     */
    listAll(orderId: number, params?: Addresses['ListFilters']): Addresses['ListAllResponse'];
    /**
     * Gets a shipping address associated with an order
     *
     * @param orderId A valid order ID
     * @param addressId A valid shipping address ID
     * @returns Promise resolving to a response containing the shipping address data
     */
    get(orderId: number, addressId: number): Addresses['GetResponse'];
    /**
     * Updates a shipping address associated with an order
     *
     * @param orderId A valid order ID
     * @param addressId A valid shipping address ID
     * @param data The data to update the shipping address on the order
     * @returns Promise resolving to a response containing the updated shipping address data
     */
    update(orderId: number, addressId: number, data: Addresses['UpdateRequest']): Addresses['UpdateResponse'];
}
export default OrderShippingAddresses;
