import { AxiosInstance } from 'axios';
import { AxiosPromise } from '../../../../types';
import { CustomerAttributeValue } from './types';
declare class CustomerAttributesValues {
    private client;
    constructor(client: AxiosInstance);
    /**
     * Returns a list of customer attribute values
     *
     * @param params Query parameters used to filter response
     * @return Promise resolving to a list of customer attributes values
     */
    list(params?: CustomerAttributeValue['ListFilters']): CustomerAttributeValue['ListResponse'];
    /**
     * Upserts Customer Attribute Values
     *
     * @data Data used to update the attribute values on the customer
     * @returns Promise resolving to the updated attribute values on the customer
     */
    update(data: CustomerAttributeValue['UpdateRequest']): CustomerAttributeValue['UpdateResponse'];
    /**
     * Deletes a single customer attribute value
     *
     * @param params Data used to delete the attribute value from the customer
     * @returns Promise resolving to a 204 No Content Response
     */
    delete(params: CustomerAttributeValue['DeleteRequest']): AxiosPromise<string>;
}
export default CustomerAttributesValues;
