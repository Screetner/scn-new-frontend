import {IRouteList} from "../types/utils/routeList.type.ts";
import HomePage from "../pages/HomePage.tsx";
import DashboardPage from "../pages/DashboardPage.tsx";
import SignInPage from "../pages/SignInPage.tsx";


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
        label: "Dashboard",
        path: "/dashboard",
        element: <DashboardPage/>,
        requireAuth: true
    }
]