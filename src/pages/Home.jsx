import { useEffect } from "react";
import { useRecoilValue } from "recoil";

import { getProducts } from "@api";
import { userState, getFullName } from "@store";

function Home() {
    const fullName = useRecoilValue(getFullName);

    useEffect(() => {
        getProducts().then(response => console.log(response));
    }, []);

    return (
        <div>
            <p>{fullName} has been logged in.</p>   
        </div>
    )
}

export default Home;
