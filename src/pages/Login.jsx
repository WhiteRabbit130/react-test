import Logo from "@components/login/Logo";
import LogoSide from "@components/login/LogoSide";
import LoginSide from "@components/login/LoginSide";

import '@components/login/style.css';

function Login() {
    return (
        <div className="login">
            <Logo />
            <LogoSide />
            <LoginSide />
        </div>
    )
}

export default Login;