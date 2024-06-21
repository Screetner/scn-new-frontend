import React from "react";
import {Navigate, Outlet} from "react-router-dom";
import {ProtectRouteProp} from "../types/components/protectRoute.type.ts";
import {useAuth} from "../context/AuthContext.tsx";

const ProtectRoute : React.FC<ProtectRouteProp> = () => {
    const {User} = useAuth()

    return (
        <>
            {User?.isActiveUser ? <Outlet/> : <Navigate to={"auth/sign-in"}/>}
        </>
    )
}

export default ProtectRoute