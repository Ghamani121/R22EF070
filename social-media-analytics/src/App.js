import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import UserPosts from "./pages/UserPosts";
import PostComments from "./pages/PostComments";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/users/:userId" element={<UserPosts />} />
                <Route path="/posts/:postId" element={<PostComments />} />
            </Routes>
        </Router>
    );
};

export default App;
