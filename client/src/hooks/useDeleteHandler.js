import { useContext } from "react";
import { AuthContext } from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";
import * as userService from '../services/userServices';


export const useDeleteHandler = () => {
    const { userLogout } = useContext(AuthContext);
    const navigate = useNavigate();

    function deleteHandler (userId, token) {
        userService.deleteAccount(userId, token)
            .then(() => {
                userLogout();
                navigate('/', { replace: true });
            });
    }

    return deleteHandler;
};