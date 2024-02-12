import { AxiosInstance } from 'axios';
import { CustomerConsent } from './types';
declare class CustomersConsent {
    private client;
    constructor(client: AxiosInstance);
    /**
     * Gets the status of a single customer's consent
     *
     * @param customerId A valid Customer ID
     * @returns Promise resolving to single customer consent status
     */
    get(customerId: number): CustomerConsent['GetResponse'];
    /**
     * Updates the status of a customer's consent
     * @param customerId A valid Customer ID
     * @data Data used to update a customer's consent
     * @returns Promise resolving to the updated customer consent
     */
    update(customerId: number, data: CustomerConsent['UpdateRequest']): CustomerConsent['UpdateResponse'];
}
export default CustomersConsent;
