const base_url: string = 'https://jsonplaceholder.typicode.com';
const base_url_dummy: string = 'https://dummyjson.com';

export const urls = {
    users: {
        allUsers: base_url + '/users',
        allUsersDummy: base_url_dummy + '/users',
        user: (id: number) => base_url + '/users/' + id,
        userDummy: (id: number) => base_url_dummy + '/users/' + id,
    },
    posts: {
        allPosts: base_url + '/posts',
        allPostsDummy: base_url_dummy + '/posts',
        post: (id: number) => base_url + '/posts/' + id,
        postDummy: (id: number) => base_url_dummy + '/posts/' + id,
    },
    comments: {
        allComments: base_url + '/comments',
        allCommentsDummy: base_url_dummy + '/comments',
        comment: (id: number) => base_url + '/comments/' + id,
        commentDummy: (id: number) => base_url_dummy + '/comments/' + id,
    },
}