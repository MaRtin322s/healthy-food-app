import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/UserContext";
import * as service from "../../services/userServices";

const Logout = () => {
    const { user, userLogout } = useContext(AuthContext);
    const navigate = useNavigate();

    service.logoutUser(user.accessToken)
        .then(() => {
            userLogout();
            navigate("/", { replace: true });
        });
};

export default Logout;