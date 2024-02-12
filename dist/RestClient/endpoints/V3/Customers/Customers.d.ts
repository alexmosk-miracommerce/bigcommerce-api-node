import { AxiosInstance } from 'axios';
import { AxiosPromise } from '../../../../types';
import type { Customer } from './types';
/**
 * Builds a base Customers API path given an optional customer ID
 *
 * @param id Optional filter parameters
 * @returns Returns either '/v3/customers' or '/v3/customers/:customerId
 */
export declare const getCustomersPath: (id?: number | undefined) => string;
declare class Customers {
    private client;
    constructor(client: AxiosInstance);
    /**
     * Gets a list of all customers in a store
     *
     * @param params Query parameters used to filter the response
     * @returns Promise resolving to a list of categories
     */
    list(params?: Customer['ListFilters']): Customer['ListResponse'];
    /**
     * Creates a new customer
     *
     * @param data Data used to create the customer
     * @returns Promise resolving to a newly created customer
     */
    create(data: Customer['CreateRequest']): Customer['CreateResponse'];
    /**
     * Updates customers.
     *
     * @data Data used to update customers
     * @returns Promise resolving to the updated customers
     */
    update(data: Customer['UpdateRequest']): Customer['UpdateResponse'];
    /**
     * Deletes a  single customer by ID
     *
     * @param params Query params used to delete customer
     * @returns Promise resolving to a 204 No Content response
     */
    delete(params: Customer['DeleteRequest']): AxiosPromise<string>;
}
export default Customers;
