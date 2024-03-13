import { useRecoilValue } from "recoil";
import { userState, getFullName } from "@store";

function Home() {
    const fullName = useRecoilValue(getFullName);

    return (
        <div>
            <p>{fullName} has been logged in.</p>   
        </div>
    )
}

export default Home;
