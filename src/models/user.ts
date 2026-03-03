export interface hairItemDummy {
	color: string;
	type: string;
}

export interface bankItemDummy {
	iban: string;
	cardExpire: string;
	cardType: string;
	currency: string;
	cardNumber: string;
}

export interface addressItemDummy {
	country: string;
	address: string;
	city: string;
	postalCode: string;
	coordinates: coordinatesItemDummy;
	stateCode: string;
	state: string;
}

export interface coordinatesItemDummy {
	lng: number;
	lat: number;
}

export interface companyItemDummy {
	address: addressItemDummy;
	name: string;
	department: string;
	title: string;
}

export interface cryptoItemDummy {
	wallet: string;
	coin: string;
	network: string;
}

export interface IUserDummy {
	lastName: string;
	role: string;
	gender: string;
	university: string;
	maidenName: string;
	ein: string;
	ssn: string;
	bloodGroup: string;
	password: string;
	hair: hairItemDummy;
	bank: bankItemDummy;
	eyeColor: string;
	company: companyItemDummy;
	id: number;
	email: string;
	height: number;
	image: string;
	address: addressItemDummy;
	ip: string;
	weight: number;
	userAgent: string;
	birthDate: string;
	crypto: cryptoItemDummy;
	firstName: string;
	macAddress: string;
	phone: string;
	age: number;
	username: string;
}

export interface geoItem {
	lng: string;
	lat: string;
}

export interface addressItem {
	zipcode: string;
	geo: geoItem;
	suite: string;
	city: string;
	street: string;
}

export interface companyItem {
	bs: string;
	catchPhrase: string;
	name: string;
}

export interface IUser {
	website: string;
	address: addressItem;
	phone: string;
	name: string;
	company: companyItem;
	id: number;
	email: string;
	username: string;
}



