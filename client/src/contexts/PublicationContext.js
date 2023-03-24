import { createContext } from "react";
import * as service from "../services/productService";

export const PublicContext = createContext();

export const PublicProvider = ({ children }) => {
    const getAllProducts = async () => {
        const recipes = await service.getAll();
        return recipes;
    };

    const getOneProduct = async (productId) => {
        const recipe = await service.getOne(productId);
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