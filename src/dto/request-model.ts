export interface RequestModel<T> {
  entity?: T;
  queryParams?: QueryParam[];
  pathParam?: string;
}

type QueryParam = {
  key: string;
  values: string[];
  separator?: string;
};
