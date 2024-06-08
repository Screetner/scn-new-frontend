import {TSideBarList} from "../types/utils/sideBarList.type.ts";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineDashboardCustomize } from "react-icons/md";



export const sidebarList : TSideBarList[] = [
    {
        label: "Home",
        path: "/",
        icon: <IoHomeOutline/>
    },
    {
        label: "Dashboard",
        path: "/dashboard",
        icon: <MdOutlineDashboardCustomize/>
    }
]