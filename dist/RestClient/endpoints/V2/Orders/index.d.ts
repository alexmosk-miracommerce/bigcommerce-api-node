import { AxiosInstance } from 'axios';
import { AxiosPromise } from '../../../../types';
import OrderCoupons from './OrderCoupons';
import OrderMessages from './OrderMessages';
import OrderProducts from './OrderProducts';
import OrderShipments from './OrderShipments';
import OrderShippingAddresses from './OrderShippingAddresses';
import OrderShippingQuotes from './OrderShippingQuotes';
import OrderStatus from './OrderStatus';
import OrderTaxes from './OrderTaxes';
import type { Orders } from './types';
/**
 * Builds a base Orders API path given an optional order ID
 *
 * @param id Optional Order ID
 * @returns Either '/v2/orders/:orderId' or '/v2/orders'
 */
export declare const getOrdersPath: (id?: number | undefined) => string;
declare class OrdersV2 {
    private client;
    orderCoupons: OrderCoupons;
    orderProducts: OrderProducts;
    orderTaxes: OrderTaxes;
    orderStatus: OrderStatus;
    orderShipments: OrderShipments;
    orderShippingAddresses: OrderShippingAddresses;
    orderMessages: OrderMessages;
    orderShippingQuotes: OrderShippingQuotes;
    constructor(client: AxiosInstance);
    /**
     * Gets a single order by ID
     *
     * @param orderId A valid order ID
     * @returns Promise resolving to a response containing the order data
     */
    get(orderId: number): Orders['GetResponse'];
    /**
     * Updates a single order by ID
     *
     * @param orderId A valid order ID
     * @param data The data to update on the order
     * @returns Promise resolving to a response containing the updated order data
     */
    update(orderId: number, data: Orders['UpdateRequest']): Orders['UpdateResponse'];
    /**
     * Archives a single order by ID
     *
     * @param orderId A valid order ID
     * @returns Promise resolving to a '204 No Content' response if successful
     */
    archive(orderId: number): AxiosPromise<string>;
    /**
     * Gets an array of orders in the store organized by order status
     *
     * @returns Promise resolving to a response containing the order count data
     */
    count(): Orders['CountResponse'];
    /**
     * Gets a list of orders in the store
     *
     * @param params Query parameters used to filter response
     * @returns Promise resolving to a response containing the list of orders
     */
    list(params?: Orders['ListFilters']): Orders['ListResponse'];
    /**
     * Returns an iterator object allowing you to paginate through all orders in a store, one order at a time
     *
     * @example
     * for await (const order of bcRest.orders.listAll()) {
     *   console.log(order);
     * }
     *
     * @param params Query parameters used to filter response
     * @returns Promise resolving to an order list iterator object
     */
    listAll(params?: Orders['ListFilters']): Orders['ListAllResponse'];
    /**
     * Creates a new order
     *
     * @param data Data used to create the order
     * @returns Promise resolving to a response containing the created order data
     */
    create(data: Orders['CreateRequest']): Orders['CreateResponse'];
    /**
     * Archives all orders in the store
     *
     * @returns Promise resolving to a '204 No Content' response if successful
     */
    archiveAll(): AxiosPromise<string>;
}
export default OrdersV2;
