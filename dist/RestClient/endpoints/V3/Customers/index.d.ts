import { AxiosInstance } from 'axios';
import CustomerAddresses from './CustomerAddresses';
import CustomerAttributes from './CustomerAttributes';
import CustomerAttributesValues from './CustomerAttributeValues';
import CustomersConsent from './CustomerConsent';
import CustomerFormFieldValues from './CustomerFormFieldValues';
import Customers from './Customers';
import CustomerStoredInstruments from './CustomerStoredInstruments';
declare class CustomersV3 {
    customers: Customers;
    customerAddresses: CustomerAddresses;
    customerAttributes: CustomerAttributes;
    customerAttributesValues: CustomerAttributesValues;
    customerFormFieldsValues: CustomerFormFieldValues;
    customerConsent: CustomersConsent;
    customerStoredInstruments: CustomerStoredInstruments;
    constructor(client: AxiosInstance);
}
export default CustomersV3;
