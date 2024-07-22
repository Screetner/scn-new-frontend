import {createContext, PropsWithChildren, useContext, useEffect, useState} from "react";
import {TAuthContext, UserInfo} from "../types/context/authContext.type.ts";
import Cookies from "js-cookie";

const AuthContext = createContext<TAuthContext | undefined>(undefined);

export const AuthProvider = ({children} : PropsWithChildren) => {
    const [userInfo, setUserInfo] = useState<UserInfo | null>(null);

    useEffect(() => {
        const userNotParse = Cookies.get('user')

        if (userNotParse) {
            const user = JSON.parse(userNotParse)
            setUserInfo({
                username: user.username,
                token: user.token,
                organization_name: user.organization_name,
                isActiveUser: true
            });
        } else {
            setUserInfo({
                username: '',
                token: '',
                organization_name: '',
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