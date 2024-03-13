import { useRecoilState, useRecoilValue } from "recoil";
import { Navigate, useNavigate } from "react-router-dom";

import { userState } from "@store";

function Login() {
    const [user, setUser] = useRecoilState(userState);
    const navigate = useNavigate();
    
    const onLogin = () => {
        setUser({
            isLoggedIn: true,
            userEmail: "whiterabbit.followme130@gmail.com",
            userPassword: "csd",
            firstName: "Daria",
            lastName: "Andrei"
        });

        navigate('/home');
    };

    return (
        <div>
            Login
            <button onClick={onLogin}>Sign In</button>
        </div>
    )
}

export default Login;