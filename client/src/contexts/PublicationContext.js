import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as service from "../services/productService";

export const PublicContext = createContext();

export const PublicProvider = ({ children }) => {
    const [showDelete, setShowDelete] = useState(false);
    const navigate = useNavigate();

    const getAllProducts = async () => await service.getAll();
    const getOneProduct = async (productId) => await service.getOne(productId);
    const backHandleClick = () => navigate(-1);
    const closeHandler = () => setShowDelete(false);

    return (
        <PublicContext.Provider
            value={{
                getAllProducts,
                getOneProduct,
                closeHandler,
                showDelete,
                backHandleClick,
            }}
        >
            {children}
        </PublicContext.Provider>
    );
};