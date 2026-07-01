import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function LoginPage() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [error, setError] = useState("");

    const navigate = useNavigate();

    const { login } = useAuth();

    const handleSubmit = async (e) => {

        e.preventDefault();

        setError("");

        try {

            await login(username, password);

            navigate("/");

        } catch (err) {

            setError("Invalid username or password.");

        }

    };

    return (

        <div style={{ padding: "30px" }}>

            <h1>FoodForge Login</h1>

            <form onSubmit={handleSubmit}>

                <div>
                    <label>Username</label>
                    <br />
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>

                <br />

                <div>
                    <label>Password</label>
                    <br />
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>

                <br />

                <button type="submit">
                    Login
                </button>

            </form>

            {error && (
                <p style={{ color: "red" }}>
                    {error}
                </p>
            )}

            <br />

            <p>
                Don't have an account?{" "}
                <Link to="/register">
                    Register here
                </Link>
            </p>

        </div>

    );
}

export default LoginPage;