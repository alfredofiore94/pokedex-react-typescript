export interface ResponseModel<T> {
  payload?: T;
  metadata?: Metadata;
  statusCode?: number;
}

interface Metadata {
  result: boolean;
  errorMessage: string;
}
