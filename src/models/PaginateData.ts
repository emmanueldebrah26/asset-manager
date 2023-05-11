import {Asset} from "./Asset";

export interface PaginatedData{
    count: number;
    results: Asset[];
    next: string;
    previous: string;
}