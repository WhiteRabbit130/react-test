import { atom, selector } from "recoil";

const userState = atom({
    key: "userStateKey",
    default: {
        isLoggedIn: false,
        userEmail: "",
        userPassword: "",
        firstName: "",
        lastName: ""
    }
});

const getFullName = selector({
    key: "getFullNameKey",
    get: ({ get }) => {
        const user = get(userState);

        let initials = "";
        user.firstName && (initials += user.firstName[0]);
        user.lastName && (initials += user.lastName[0]);

        return initials;
    }
});

export { userState,  getFullName }