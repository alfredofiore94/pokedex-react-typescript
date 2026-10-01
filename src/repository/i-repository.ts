import type { ResponseModel } from "../dto/response-model";

export interface IRepository<T> {
  getEntitiesAsync: () => Promise<ResponseModel<T[]>>;

  getEntityAsync: () => Promise<ResponseModel<T>>;

  postEntityAsync: (entity: T) => Promise<ResponseModel<T>>;

  postEntitiesAsync: (entities: T[]) => Promise<ResponseModel<T[]>>;
}
