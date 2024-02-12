import { AxiosInstance } from 'axios';
import { CustomerInstrument } from './types';
declare class CustomerStoredInstruments {
    private client;
    constructor(client: AxiosInstance);
    /**
     * Returns a list of all available store instruments for a customer
     *
     * @customerId A valid customer id
     * @return Promise resolving to a list of all available store instruments
     */
    list(customerId: number): CustomerInstrument['ListResponse'];
}
export default CustomerStoredInstruments;
