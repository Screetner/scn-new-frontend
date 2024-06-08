import React from "react";
import {Outlet, Navigate} from "react-router-dom";
import {ProtectRouteProp} from "../types/components/protectRoute.type.ts";

const ProtectRoute : React.FC<ProtectRouteProp> = () => {
    const isAllowed = true;

    return (
        <>
            {isAllowed ? <Outlet/> : <Navigate to={"auth/sign-in"}/>}
        </>
    )
}

export default ProtectRoute