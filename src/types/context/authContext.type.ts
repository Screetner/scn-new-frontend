import React from "react";

export type UserInfo = {
    username? : string
    token? : string
    isActiveUser? : boolean
}

export type TAuthContext = {
    User : UserInfo | null
    setUser : React.Dispatch<React.SetStateAction<UserInfo | null>>
}