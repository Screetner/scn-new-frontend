import {createBrowserRouter, Navigate} from "react-router-dom";
import { routeList } from "../utils/routeList.tsx";
import ProtectRoute from "../components/ProtectRoute.tsx";
import SideBarLayout from "../layouts/SideBarLayout.tsx";

const router = createBrowserRouter([
    {
        element: <ProtectRoute/>,
        children: routeList
            .filter((route) => route.requireAuth)
            .map((route) => ({
                path: route.path,
                element: (
                    <SideBarLayout>
                        {route.element}
                    </SideBarLayout>
                )
            })),
    },
    {
        path: "*",
        element: <Navigate to={"/"}/>,
    },
    ...routeList
        .filter((route) => !route.requireAuth)
        .map((route) => ({
            path: route.path,
            element: route.element,
        })),
]);

export default router;