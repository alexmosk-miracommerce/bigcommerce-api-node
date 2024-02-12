import { AxiosInstance } from 'axios';
import { AxiosPromise } from '../../../../types';
import type { CustomerAttribute } from './types';
declare class CustomerAttributes {
    private client;
    constructor(client: AxiosInstance);
    /**
     * Returns a list of customer attributes
     *
     * @param params Query parameters used to filter response
     * @return Promise resolving to a list of customer attributes
     */
    list(params?: CustomerAttribute['ListFilters']): CustomerAttribute['ListResponse'];
    /**
     * Creates a customer attribute
     *
     * @param data Data used to create the customer attribute
     * @returns Promise resolving to a newly created customer attribute
     */
    create(data: CustomerAttribute['CreateRequest']): CustomerAttribute['CreateResponse'];
    /**
     * Updates a customer attribute
     *
     * @data Data used to update a customer attribute
     * @returns Promise resolving to the updated customer attribute
     */
    update(data: CustomerAttribute['UpdateRequest']): CustomerAttribute['UpdateResponse'];
    /**
     * Deletes a single customer attribute
     *
     * @param params Query params used to delete a customer attribute
     * @returns Promise resolving to a 204 No Content Response
     */
    delete(params: CustomerAttribute['DeleteRequest']): AxiosPromise<string>;
}
export default CustomerAttributes;
