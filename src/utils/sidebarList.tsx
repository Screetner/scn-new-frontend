import {TSideBarList} from "../types/utils/sideBarList.type.ts";
import { IoHomeOutline } from "react-icons/io5";
import { BiCurrentLocation } from "react-icons/bi";




export const sidebarList : TSideBarList[] = [
    {
        label: "Home",
        path: "/",
        icon: <IoHomeOutline/>
    },
    {
        label: "Geolocation",
        path: "/geolocation",
        icon: <BiCurrentLocation/>
    }
]