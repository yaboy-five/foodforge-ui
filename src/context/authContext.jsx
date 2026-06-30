import { createContext, useContext, useEffect, useState } from "react";
import * as authService from "../services/authService";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }) {

    const [user, setUser] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem("token");
        const username = localStorage.getItem("username");

        if (token && username) {
            setUser({
                token,
                username
            });
        }
    }, []);

    const login = async (username, password) => {

        const data = await authService.login(username, password);

        localStorage.setItem("token", data.token);
        localStorage.setItem("username", data.username);

        setUser({
            token: data.token,
            username: data.username
        });
    };

    const register = async (username, password) => {
        await authService.register(username, password);
    };

    const logout = () => {

        localStorage.removeItem("token");
        localStorage.removeItem("username");

        setUser(null);
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                login,
                register,
                logout
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}