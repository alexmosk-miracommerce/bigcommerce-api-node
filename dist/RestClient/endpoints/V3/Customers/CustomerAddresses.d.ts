import { AxiosInstance } from 'axios';
import { AxiosPromise } from '../../../../types';
import type { CustomerAddress } from './types';
declare class CustomerAddresses {
    private client;
    constructor(client: AxiosInstance);
    /**
     * Returns a list of customer addresses
     *
     * @param params Query parameters used to filter response
     * @returns Promise resolving to a list of customer addresses
     */
    list(params?: CustomerAddress['ListFilters']): CustomerAddress['ListResponse'];
    /**
     * Creates a customer address
     *
     * @param data Data used to create the customer address
     * @returns Promise resolving to a newly created customer address
     */
    create(data: CustomerAddress['CreateRequest']): CustomerAddress['CreateResponse'];
    /**
     * Updates a customer address
     *
     * @data Data used to update a customer address
     * @returns Promise resolving to the updated customer address
     */
    update(data: CustomerAddress['UpdateRequest']): CustomerAddress['UpdateResponse'];
    /**
     * Deletes a single customer address
     *
     * @param params Query params used to a delete customer address
     * @returns Promise resolving to a 204 No Content Response
     */
    delete(params: CustomerAddress['DeleteRequest']): AxiosPromise<string>;
}
export default CustomerAddresses;
