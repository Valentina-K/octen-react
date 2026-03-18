import axios from "axios";
import type {ICar} from "../models/models.ts";

const base_url = import.meta.env.VITE_BASE_URL;
console.log(base_url);
const axiosInstance = axios.create({
    baseURL: base_url,
})

export const getCars = async (): Promise<ICar[]> => {
    const {data} = await axiosInstance.get<ICar[]>('/cars');
    return data;
}

export const addCar = async (car: ICar): Promise<number> => {
    const result = await axiosInstance.post<ICar[]>('/cars', car);
    return result.status;
}