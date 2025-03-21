import axios from "axios";

const API_BASE_URL = "http://20.244.56.144/test";
const ACCESS_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzQyNTM4MjgwLCJpYXQiOjE3NDI1Mzc5ODAsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6ImZjMjJkNWEzLWMyOTktNDkwMy1iMWEzLTkwYTBlY2I3ZGJlMSIsInN1YiI6ImdoYW1hbmkxMjFAZ21haWwuY29tIn0sImNvbXBhbnlOYW1lIjoiQWZmb3JkIE1lZGljYWwgVGVjaG5vbG9naWVzIiwiY2xpZW50SUQiOiJmYzIyZDVhMy1jMjk5LTQ5MDMtYjFhMy05MGEwZWNiN2RiZTEiLCJjbGllbnRTZWNyZXQiOiJ6UEdEUVhBVGVNYmZyVVJYIiwib3duZXJOYW1lIjoiR2hhbWFuaSBNIiwib3duZXJFbWFpbCI6ImdoYW1hbmkxMjFAZ21haWwuY29tIiwicm9sbE5vIjoiUjIyRUYwNzAifQ.0ijI4bl3lo6Vwj2sa9d8dHTbZ14szJE8T3Sfu8zcV6I"; 

const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
        "Content-Type": "application/json",
    },
});

// Fetch users
export const fetchUsers = async () => {
    const response = await api.get("/users");
    return response.data.users;
};

// Fetch posts of a user
export const fetchUserPosts = async (userId) => {
    const response = await api.get(`/users/${userId}/posts`);
    return response.data.posts;
};

// Fetch comments on a post
export const fetchPostComments = async (postId) => {
    const response = await api.get(`/posts/${postId}/comments`);
    return response.data.comments;
};
