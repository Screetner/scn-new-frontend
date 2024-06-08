import {ReactNode} from "react";

export interface IRouteList {
    icon?: ReactNode;
    element: ReactNode;
    label: string
    path: string
    requireAuth: boolean
}