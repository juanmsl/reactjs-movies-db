export type ApiResponseEntity<T> = {
  page: number;
  results: Array<T>;
  total_pages: number;
  total_results: number;
};
