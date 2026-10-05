import type { RequestModel } from "../dto/request-model";
import type { ResponseModel } from "../dto/response-model";

export interface IRepository<T> {
  getEntitiesAsync: () => Promise<ResponseModel<T[]>>;

  getEntityAsync: () => Promise<ResponseModel<T>>;

  getEntityIdAsync: (request: RequestModel<T>) => Promise<ResponseModel<T>>;

  postEntityAsync: (request: RequestModel<T>) => Promise<ResponseModel<T>>;

  postEntitiesAsync: (
    request: RequestModel<T>[],
  ) => Promise<ResponseModel<T[]>>;
}
