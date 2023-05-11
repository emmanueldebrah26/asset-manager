import {PaginatedData} from "../models/PaginateData";
import {Asset} from "../models/Asset";


const api_url = 'http://127.0.0.1:8000';
export async function getAssets(): Promise<PaginatedData> {
    const response = await fetch(`${api_url}/scribe_asset_manager`)
    return await response.json();
}

export async function createAssets(form: FormData): Promise<Asset> {
    const response = await fetch(`${api_url}/scribe_asset_manager/`,{ method: 'POST',body: form})
    return await response.json();
}



