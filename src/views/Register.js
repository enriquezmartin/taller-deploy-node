import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/API";
import '../styles/Register.css'

export default function Register() {
    const [username, setUsername] = useState("");
    const [response, setResponse] = useState("");
    const [success, setSuccess] = useState(false);

    const navigate = useNavigate();
    const goToUsers = () => navigate("/all");

    function postUser() {
        let body = { name: username }
        API.postUser(body)
            .then((response) => {
                if (response.data) {
                    setResponse(`Consciencia de ${username} transferida`)
                    setSuccess(true)
                } else {
                    setResponse("La transferencia ha sido denegada por el bunker")
                    setSuccess(false)
                }
                console.log(response.data);
                setUsername("")
            })
            .catch((e) => {
                console.log(e);
            });
    }

    return (
        <div className="flex-2c-container">
            <img className="flex-child android" src={require("../assets/andriods.jpeg")} />
            <div className="flex-child form-container">
                <div className="form-title">
                    Identif[i]cación Humana
                </div>

                <input
                    type="text"
                    placeholder="Esperando identificación"
                    name="username"
                    onChange={(name) => setUsername(name.target.value)}
                />

                <button
                    type="button"
                    className="btn"
                    onClick={() => postUser(username)}
                    disabled={
                        !username.length > 0
                    }
                >
                    Transferir
                </button>

                <div>
                    {
                        success ?
                            <div className="result-navigation">
                                <div>{response}</div>
                                <div className="navigable" onClick={goToUsers}>Ver lista de usuarios actualizada</div>
                            </div>
                            : <div></div>
                    }
                </div>
            </div>
        </div>
    )
}