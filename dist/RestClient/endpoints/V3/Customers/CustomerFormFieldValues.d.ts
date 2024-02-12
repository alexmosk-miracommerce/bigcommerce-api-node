import { AxiosInstance } from 'axios';
import { CustomerFormFieldValue } from './types';
declare class CustomerFormFieldValues {
    private client;
    constructor(client: AxiosInstance);
    /**
     * Returns a list of form field values for the customer or customer address object
     *
     * @param params Query parameters used to filter response
     * @return Promise resolving to a list of form field values
     */
    list(params?: CustomerFormFieldValue['ListFilters']): CustomerFormFieldValue['ListResponse'];
    /**
     * Updates form field values on the customer or customer address objects
     *
     * @data Data used to update the attribute values on the customer
     * @returns Promise resolving to the updated attribute values on the customer
     */
    update(data: CustomerFormFieldValue['UpdateRequest']): CustomerFormFieldValue['UpdateResponse'];
}
export default CustomerFormFieldValues;
