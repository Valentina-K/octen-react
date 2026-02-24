export interface userItem {
	fullName: string;
	id: number;
	username: string;
}

export interface IComment {
	id: number;
	postId: number;
	body: string;
	user: userItem;
	likes: number;
}

