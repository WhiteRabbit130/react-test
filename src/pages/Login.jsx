import { useRecoilState, useRecoilValue } from "recoil";
import { Navigate, useNavigate } from "react-router-dom";

import { userState } from "@store";
import Logo from "@components/login/Logo";
import LogoSide from "@components/login/LogoSide";
import LoginSide from "@components/login/LoginSide";

import '@components/login/style.css';

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
        <div className="login">
            <Logo />
            <LogoSide />
            <LoginSide />
            {/* <button onClick={onLogin}>Sign In</button> */}
        </div>
    )
}

export default Login;