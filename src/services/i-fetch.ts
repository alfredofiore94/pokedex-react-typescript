export interface IFetch<T> {
  isFetching: boolean;
  error: string;
  fetchedData: T;
}
