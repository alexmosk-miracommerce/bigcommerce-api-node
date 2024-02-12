import { AxiosInstance } from 'axios';
import type { Coupons } from './types';
declare class OrderCoupons {
    private client;
    constructor(client: AxiosInstance);
    /**
     * List all coupons associated with an order
     *
     * @param orderId A valid order ID
     * @returns Promise resolving to a response containing the list of coupons associated with an order
     */
    list(orderId: number, params?: Coupons['ListFilters']): Coupons['ListResponse'];
    /**
     * Returns an iterator object allowing you to paginate through all coupons on an order, one coupon at a time
     *
     * @example
     * for await (const coupon of bcRest.orderCoupons.listAll(orderId)) {
     *   console.log(coupon);
     * }
     *
     * @param params Query parameters used to filter response
     * @returns Promise resolving to an order coupon list iterator object
     */
    listAll(orderId: number, params?: Coupons['ListFilters']): Coupons['ListAllResponse'];
}
export default OrderCoupons;
