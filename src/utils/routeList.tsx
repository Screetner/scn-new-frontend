import {IRouteList} from "../types/utils/routeList.type.ts";
import HomePage from "../pages/HomePage.tsx";
import SignInPage from "../pages/SignInPage.tsx";
import GeolocationPage from "@/pages/GeolocationPage.tsx";


export const routeList : IRouteList[] = [
    {
        label: "Sign In",
        path: "/auth/sign-in",
        element: <SignInPage/>,
        requireAuth: false
    },
    {
        label: "Home",
        path: "/",
        element: <HomePage/>,
        requireAuth: true
    },
    {
        label: "Geolocation",
        path: "/geolocation",
        element: <GeolocationPage/>,
        requireAuth: true
    }
]