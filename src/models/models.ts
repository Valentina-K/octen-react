export type LightCourseType = {
    title: string, monthDuration: number
}

export type MiddleCourseType = {
    title: string,
    monthDuration: number,
    hourDuration: number,
    modules: string[]
}

export type CourseType = {
    title: string,
    monthDuration: number,
    hourDuration: number,
    modules: string[],
    logo: string,
    price: number,
    rating: number,
    avgResult: number
}

export type SimpsonType = {
    name: string,
    surname: string,
    age: number,
    info: string,
    photo: string,
    character?: unknown
}

export type FullUserType = {
    id: number,
    name: string,
    username: string,
    email: string,
    address: AddressType,
    phone: string,
    website: string,
    company: CompanyType,
}

type AddressType = {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: {
        lat: string,
        lng: string
    }
}

type CompanyType = {
    name: string,
    catchPhrase: string,
    bs: string
}

export type UserType = { name: string, age: number, status: boolean }

export type LocationType = {
    "title": string,
    "type": string,
}