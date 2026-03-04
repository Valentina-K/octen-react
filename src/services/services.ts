const base_url = import.meta.env.VITE_BASE_URL;

export const getData = async <T, >  (endpoint: string):Promise<T>=>{
    return await fetch(base_url + endpoint).then((response:Response) => response.json());
}
