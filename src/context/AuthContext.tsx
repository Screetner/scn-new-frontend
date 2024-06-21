import {createContext, PropsWithChildren, useContext, useEffect, useState} from "react";
import {TAuthContext, UserInfo} from "../types/context/authContext.type.ts";
import Cookies from "js-cookie";

const AuthContext = createContext<TAuthContext | undefined>(undefined);

export const AuthProvider = ({children} : PropsWithChildren) => {
    const [userInfo, setUserInfo] = useState<UserInfo | null>(null);

    useEffect(() => {
        const token = Cookies.get('token');
        const username = Cookies.get('username');

        if (token && username) {
            setUserInfo({
                username,
                token,
                isActiveUser: true
            });
        } else {
            setUserInfo({
                username: "",
                token: "",
                isActiveUser: false
            });
        }
    }, []);

    return <AuthContext.Provider value={{User : userInfo, setUser : setUserInfo}}>{children}</AuthContext.Provider>
}
export const useAuth = () => {
    const context = useContext(AuthContext)

    if(!context){
        throw new Error("useAuth must be used within AuthProvider")
    }

    return context
}