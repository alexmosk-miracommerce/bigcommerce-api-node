import OAuth from './OAuth';
import RestClient from './RestClient';
declare const BigCommerce: {
    Auth: typeof OAuth;
    Rest: typeof RestClient;
};
export = BigCommerce;
