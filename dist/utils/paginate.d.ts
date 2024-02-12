import { AxiosPromise } from '../types';
declare type QueryParams = Record<string, unknown> | undefined;
declare type ListFn<ResponseData, Filters extends QueryParams> = (params: Filters) => AxiosPromise<ResponseData[]>;
declare type ListFnWithID<ResponseData, Filters extends QueryParams> = (orderId: number, params: Filters) => AxiosPromise<ResponseData[]>;
export declare function paginate<ResponseData, Filters extends QueryParams>(listFn: ListFn<ResponseData, Filters>, params: Filters): AsyncGenerator<ResponseData, void, unknown>;
export declare function paginateById<ResponseData, Filters extends QueryParams>(listFn: ListFnWithID<ResponseData, Filters>, id: number, params: Filters): AsyncGenerator<ResponseData, void, unknown>;
export {};
