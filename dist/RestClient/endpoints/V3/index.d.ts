import { AxiosInstance } from 'axios';
import CatalogV3 from './Catalog';
import CustomersV3 from './Customers';
import ThemesV3 from './Themes';
declare class V3 {
    private client;
    catalog: CatalogV3;
    customers: CustomersV3;
    themes: ThemesV3;
    constructor(client: AxiosInstance);
}
export default V3;
