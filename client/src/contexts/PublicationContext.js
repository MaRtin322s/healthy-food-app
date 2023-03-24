import { createContext } from "react";
import * as service from "../services/productService";

export const PublicContext = createContext();

export const PrublicProvider = ({ children }) => {
    const getAllProducts = async () => {
        const recipes = await service.getAll();
        return recipes;
    };

    const getOneProduct = async (recipeId) => {
        const recipe = await service.getOne(recipeId);
        return recipe;
    };

    return (
        <PublicContext.Provider
            value={{ 
                getAllProducts,
                getOneProduct
            }}
        >
            {children}
        </PublicContext.Provider>
    );
};