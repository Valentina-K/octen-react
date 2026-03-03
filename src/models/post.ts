export interface IPostDummy {
    "id": number,
    "title": string,
    "body": string,
    "tags": string[],
    "reactions": {
        "likes": number,
        "dislikes": number
    },
    "views": number,
    "userId": number
}


export interface IPost {
	id: number;
	title: string;
	body: string;
	userId: number;
}

