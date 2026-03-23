//функцвя, яка повертає об'єкт з localStorage, якщо такий є, або пустий об'єкт в іншому разі
export const retriveLocalStorage = <T>(key: string) => {
    const object = localStorage.getItem(key) || '';
    if (!object) {
        return {} as T;
    }
    const parse = JSON.parse(object);
    return parse as T;

}
