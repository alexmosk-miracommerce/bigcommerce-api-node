import { AxiosInstance } from 'axios';
import OrdersV2 from './Orders';
declare class V2 {
    private client;
    orders: OrdersV2;
    constructor(client: AxiosInstance);
}
export default V2;
