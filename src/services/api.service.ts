import axios from 'axios';
import {IUserWithTokens} from "../models/IUserWithTokens.ts";
import {IProduct} from "../models/IProduct.ts";
import {IProductsResponseModelType} from "../models/IProductsResponseModelType.ts";
import {retriveLocalStorage} from "./helpers.ts";
import {ITokenPair} from "../models/ITokenPair.ts";

type LoginData = {
    username: string;
    password: string;
    expiresInMins: number
}
//створення інстансу axios з задаванням baseURL
const axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com/auth',
    headers: {}
});

//створення методу-перехоплювача, який буде перехоплювати всі request
axiosInstance.interceptors.request.use((requestObject) => {
    //якщо request є GET-метод, додаємо до заголовку запиту властивість Authorization із значенням Bearer плюс токен, який зберігається в localStorage
    if (requestObject.method?.toUpperCase() === 'GET') {
        requestObject.headers.Authorization = 'Bearer ' + retriveLocalStorage<IUserWithTokens>('user').accessToken
    }
    return requestObject;

})


export const login = async ({username, password, expiresInMins}: LoginData): Promise<IUserWithTokens> => {

    const {data: userWithTokens} = await axiosInstance.post<IUserWithTokens>('/login', {username, password, expiresInMins});
    console.log(userWithTokens);
    //при отриманні пари токенів зберігаємо їх в localStorage з ключем user
    localStorage.setItem('user', JSON.stringify(userWithTokens));
    //повертаємо юзера з токенами
    return userWithTokens;
}

export const loadAuthProducts = async (): Promise<IProduct[]> => {
    const {data: {products}} = await axiosInstance.get<IProductsResponseModelType>('/products');
    //повертаємо ї response реструктурований масив products
    return products
}


export const refresh = async () => {
    //отримуємо пару токенів з localStorage
    const iUserWithTokens = retriveLocalStorage<IUserWithTokens>('user');
    //передаємо до axiosInstance refreshToken
    const {data: {accessToken, refreshToken}} = await axiosInstance.post<ITokenPair>('/refresh', {
        refreshToken: iUserWithTokens.refreshToken,
        expiresInMin: 1
    });
    //отримуємо нову пару accessToken та refreshToken
    iUserWithTokens.accessToken = accessToken;
    iUserWithTokens.refreshToken = refreshToken;
    //оновлений об'єкт з токенами додаємо до localStorage з ключем user
    localStorage.setItem('user', JSON.stringify(iUserWithTokens));


}
