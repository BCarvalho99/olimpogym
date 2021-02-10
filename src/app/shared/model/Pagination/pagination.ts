export class Pagination<T>{
    totalItems: number;
    totalPages: number;
    totalFiltered: number;
    perPage: number;
    page: number;
    data: Array<T>;
    hasPreviousPage: boolean;
    hasNextPage: boolean;
    nextPageNumber: number;
    previousPageNumber: number;
    search: string;
    sortColumn:string;
    sortDirection: string;
}