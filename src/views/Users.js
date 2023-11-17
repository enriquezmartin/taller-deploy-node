import { useEffect, useState } from "react";
import API from "../api/API";
import '../styles/Users.css'

export default function UsersView() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        API.getUsers().then((response) => {
            setUsers(response.data.data);
            console.log(response.data.data);
        })
    }, [])

    return (
        <div>
            <h2 className="title">Consciencias r[e]gistradas</h2>
            <div className="container">
                    {users.map(u =>
                        <div className = "item">
                            {u.name}
                        </div>)}
            </div>
        </div>
    )
}