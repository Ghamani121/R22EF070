import React, { useEffect, useState } from "react";
import { fetchUserPosts } from "../services/api";
import { Link, useParams } from "react-router-dom";

const UserPosts = () => {
    const { userId } = useParams();
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetchUserPosts(userId).then(setPosts).catch(console.error);
    }, [userId]);

    return (
        <div className="container">
            <h2>User {userId} Posts</h2>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <Link to={`/posts/${post.id}`}>{post.content}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserPosts;
