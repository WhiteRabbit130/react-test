import { useRecoilState } from "recoil";
import { Navigate } from "react-router-dom";

import { userState } from "@store";

function AuthLayout(props) {
    const [user] = useRecoilState(userState);
    
    if(!user.isLoggedIn) 
        return <Navigate to='/' />
    else 
        return <>{ props.children }</>
}

export default AuthLayout;