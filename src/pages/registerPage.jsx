import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function RegisterPage() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const { register } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {

        e.preventDefault();

        setError("");
        setSuccess("");

        if (password !== confirmPassword) {
            setError("Passwords do not match.");
            return;
        }

        try {

            await register(username, password);

            setSuccess("Registration successful! Redirecting to login...");

            setTimeout(() => {
                navigate("/login");
            }, 2000);

        } catch (err) {

            setError(
                err.response?.data?.message ||
                "Registration failed."
            );

        }

    };

    return (

        <div
            style={{
                maxWidth: "400px",
                margin: "60px auto",
                padding: "30px",
                border: "1px solid #ddd",
                borderRadius: "10px",
                textAlign: "center"
            }}
        >

            <h1>🍔 FoodForge</h1>

            <h2>Create Account</h2>

            <form onSubmit={handleSubmit}>

                <div style={{ marginBottom: "15px" }}>
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                        style={{
                            width: "100%",
                            padding: "10px"
                        }}
                    />
                </div>

                <div style={{ marginBottom: "15px" }}>
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        style={{
                            width: "100%",
                            padding: "10px"
                        }}
                    />
                </div>

                <div style={{ marginBottom: "15px" }}>
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                        style={{
                            width: "100%",
                            padding: "10px"
                        }}
                    />
                </div>

                <button
                    type="submit"
                    style={{
                        width: "100%",
                        padding: "10px"
                    }}
                >
                    Register
                </button>

            </form>

            {error && (
                <p style={{ color: "red" }}>
                    {error}
                </p>
            )}

            {success && (
                <p style={{ color: "green" }}>
                    {success}
                </p>
            )}

            <hr />

            <p>
                Already have an account?
            </p>

            <Link to="/login">
                Login Here
            </Link>

        </div>

    );

}

export default RegisterPage;