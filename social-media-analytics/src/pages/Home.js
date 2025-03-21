import React, { useEffect, useState } from "react";
import { fetchUsers } from "../services/api";
import { Link } from "react-router-dom";

const Home = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetchUsers().then(setUsers).catch(console.error);
    }, []);

    return (
        <div className="container">
            <h2>User List</h2>
            <ul>
                {users.map((user, index) => (
                    <li key={index}>
                        <Link to={`/users/${index + 1}`}>{user}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Home;
