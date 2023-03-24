import { createContext } from "react";
import { useStorage } from "../hooks/useStorage";
import * as service from "../services/recipeService";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useStorage('session', {});
    const userLogin = (userData) => setAuth(userData);
    const userLogout = () => setAuth({});

    const getAllRecipes = async () => {
        const recipes = await service.getAll();
        return recipes;
    };

    return (
        <AuthContext.Provider
            value={{ user: auth, userLogin, userLogout, getAllRecipes }}
        >
            {children}
        </AuthContext.Provider>
    );
};