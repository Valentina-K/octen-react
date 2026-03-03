export interface userItemDummy {
	fullName: string;
	id: number;
	username: string;
}

export interface ICommentDummy {
	id: number;
	postId: number;
	body: string;
	user: userItemDummy;
	likes: number;
}

export interface IComment{
	name: string;
	postId: number;
	id: number;
	body: string;
	email: string;
}



