import { AxiosInstance } from 'axios';
import type { Taxes } from './types';
declare class OrderTaxes {
    private client;
    constructor(client: AxiosInstance);
    /**
     * Gets all order taxes using order ID
     *
     * @param orderId A valid order ID
     * @param params Query parameters used to filter response
     * @returns Promise resolving to a response containing the list of taxes associated with an order
     */
    list(orderId: number, params?: Taxes['ListFilters']): Taxes['ListResponse'];
    /**
     * Returns an iterator object allowing you to paginate through all taxes on an order, one tax at a time
     *
     * @example
     * for await (const tax of bcRest.orderTaxes.listAll(orderId)) {
     *   console.log(tax);
     * }
     *
     * @param params Query parameters used to filter response
     * @returns Promise resolving to an order tax list iterator object
     */
    listAll(orderId: number, params?: Taxes['ListFilters']): Taxes['ListAllResponse'];
}
export default OrderTaxes;
