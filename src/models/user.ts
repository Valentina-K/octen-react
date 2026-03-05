interface IHair {
	color: string;
	type: string;
}

interface IBank {
	iban: string;
	cardExpire: string;
	cardType: string;
	currency: string;
	cardNumber: string;
}

interface IAddress {
	country: string;
	address: string;
	city: string;
	postalCode: string;
	coordinates: ICoordinates;
	stateCode: string;
	state: string;
}

interface ICoordinates {
	lng: number;
	lat: number;
}

interface ICompany {
	address: IAddress;
	name: string;
	department: string;
	title: string;
}

interface ICrypto {
	wallet: string;
	coin: string;
	network: string;
}

export interface IUser {
	lastName: string;
	role: string;
	gender: string;
	university: string;
	maidenName: string;
	ein: string;
	ssn: string;
	bloodGroup: string;
	password: string;
	hair: IHair;
	bank: IBank;
	eyeColor: string;
	company: ICompany;
	id: number;
	email: string;
	height: number;
	image: string;
	address: IAddress;
	ip: string;
	weight: number;
	userAgent: string;
	birthDate: string;
	crypto: ICrypto;
	firstName: string;
	macAddress: string;
	phone: string;
	age: number;
	username: string;
}

