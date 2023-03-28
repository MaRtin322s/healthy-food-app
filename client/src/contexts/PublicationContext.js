import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as service from "../services/productService";

export const PublicContext = createContext();

export const PublicProvider = ({ children }) => {
    const [showDelete, setShowDelete] = useState(false);
    const [isDownloading, setIsDownloading] = useState(false);
    const navigate = useNavigate();

    const getAllProducts = async () => {
        const recipes = await service.getAll();
        return recipes;
    };

    const getOneProduct = async (productId) => {
        const recipe = await service.getOne(productId);
        return recipe;
    };

    const showDeleteProduct = () => {
        setShowDelete(true);
    };

    const backHandleClick = () => {
        navigate(-1);
    };

    const closeHandler = () => {
        setShowDelete(false);
    };

    return (
        <PublicContext.Provider
            value={{
                getAllProducts,
                getOneProduct,
                closeHandler,
                showDelete,
                showDeleteProduct,
                backHandleClick,
                isDownloading,
                setIsDownloading
            }}
        >
            {children}
        </PublicContext.Provider>
    );
};