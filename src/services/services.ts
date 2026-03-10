import {LIMIT} from "../constants/urlParams.ts";

const base_url = import.meta.env.VITE_BASE_URL;

export const getData = async <T, >(endpoint: string, page: string): Promise<T> => {
    const skip = LIMIT * +page - LIMIT;
    return await fetch(base_url + endpoint + '?skip=' + skip).then((response: Response) => response.json());
}
