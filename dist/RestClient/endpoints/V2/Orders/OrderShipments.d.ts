import { AxiosInstance } from 'axios';
import { AxiosPromise } from '../../../../types';
import type { Shipments } from './types';
declare class OrderShipments {
    private client;
    constructor(client: AxiosInstance);
    /**
     * Gets a list of all shipments on an order
     *
     * @param orderId A valid order ID
     * @param params Query parameters used to filter response
     * @returns Promise resolving to a response containing the collection of shipments
     */
    list(orderId: number, params?: Shipments['ListFilters']): Shipments['ListResponse'];
    /**
     * Returns an iterator object allowing you to paginate through all shipments on an order, one shipment at a time
     *
     * @example
     * for await (const shipment of bcRest.orderShipments.listAll(orderId)) {
     *   console.log(shipment);
     * }
     *
     * @param params Query parameters used to filter response
     * @returns Promise resolving to an order shipment list iterator object
     */
    listAll(orderId: number, params?: Shipments['ListFilters']): Shipments['ListAllResponse'];
    /**
     * Creates a single shipment on an order
     *
     * @param orderId A valid order ID
     * @param data The data to create the order shipment
     * @returns Promise resolving to a response containing the created shipment data
     */
    create(orderId: number, data: Shipments['CreateRequest']): Shipments['CreateResponse'];
    /**
     * Deletes all shipments associated with an order
     *
     * @param orderId A valid order ID
     * @returns Promise resolving to a '204 No Content' response if successful
     */
    deleteAll(orderId: number): AxiosPromise<string>;
    /**
     * Gets a count of the number of shipments that have been made for a single order
     *
     * @param orderId A valid order ID
     * @returns Promise resolving to a response containing the shipment count response data for an order
     */
    count(orderId: number): Shipments['CountResponse'];
    /**
     * Gets an order shipment by ID
     *
     * @param orderId A valid order ID
     * @param shipmentId A valid shipment ID
     * @returns Promise resolving to a response containing the shipment data
     */
    get(orderId: number, shipmentId: number): Shipments['GetResponse'];
    /**
     * Updates an existing shipment associated with an order
     *
     * @param orderId A valid order ID
     * @param shipmentId A valid shipment ID
     * @param data The data to update the order shipment
     * @returns Promise resolving to a response containing the updated shipment data
     */
    update(orderId: number, shipmentId: number, data: Shipments['UpdateRequest']): Shipments['UpdateResponse'];
    /**
     * Deletes a shipment associated with an order
     *
     * @param orderId A valid order ID
     * @param shipmentId A valid shipment ID
     * @returns Promise resolving to a '204 No Content' response if successful
     */
    delete(orderId: number, shipmentId: number): AxiosPromise<string>;
}
export default OrderShipments;
