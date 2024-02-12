import RateLimitManager from '../RateLimitManager';
import { RestClientConfig } from '../types';
import V2 from './endpoints/V2';
import V3 from './endpoints/V3';
declare class RestClient {
    rateLimitManager: RateLimitManager;
    v2: V2;
    v3: V3;
    constructor(config: RestClientConfig);
}
export default RestClient;
