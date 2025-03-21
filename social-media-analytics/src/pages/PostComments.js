import React, { useEffect, useState } from "react";
import { fetchPostComments } from "../services/api";
import { useParams } from "react-router-dom";

const PostComments = () => {
    const { postId } = useParams();
    const [comments, setComments] = useState([]);

    useEffect(() => {
        fetchPostComments(postId).then(setComments).catch(console.error);
    }, [postId]);

    return (
        <div className="container">
            <h2>Comments for Post {postId}</h2>
            <ul>
                {comments.map((comment) => (
                    <li key={comment.id}>{comment.content}</li>
                ))}
            </ul>
        </div>
    );
};

export default PostComments;

