import { memo, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../../contexts/UserContext";
import * as service from "../../services/userServices";
import { GoogleLogout } from "react-google-login";

const clientId = '108817696069-jff0rj5c2riujajno2jt1cg6jk9v7pfm.apps.googleusercontent.com';

const Logout = memo(() => {
    const { user, userLogout } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        navigate("/", { replace: true });
    }, [userLogout, navigate]);

    service.logoutUser(user.accessToken)
        .then(() => {
            userLogout();
        });

        function onSuccess() {
            console.log('Logout success');
        }

    return (
        <div id="signOutButton">
            <GoogleLogout 
                clientId={clientId}
                buttonText={'Logout'}
                onLogoutSuccess={onSuccess}
            />
        </div>
    );
});

export default Logout;