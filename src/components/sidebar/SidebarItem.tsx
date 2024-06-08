import { useContext } from "react";
import SideBarContext from "../../context/SideBarContext.ts";
import { TSideBarList } from "../../types/utils/sideBarList.type.ts";
import { useNavigate, useLocation } from "react-router-dom";

export function SidebarItem({ icon, path, label }: TSideBarList) {
    const { expanded } = useContext(SideBarContext);
    const navigate = useNavigate();
    const location = useLocation();
    const active = location.pathname === path;

    const handleOnClick = () => {
        navigate(path);
    };

    return (
        <li
            className={`relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group ${
                active
                    ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
                    : "hover:bg-indigo-50 text-gray-600"
            }`}
            onClick={handleOnClick}
        >
            {icon}
            <span
                className={`overflow-hidden transition-all ${
                    expanded ? "w-52 ml-3" : "w-0"
                }`}
            >
                {label}
            </span>
            {!expanded && (
                <div
                    className={`absolute left-full rounded-md px-2 py-1 ml-6 bg-indigo-100 text-indigo-800 text-sm invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0`}
                >
                    {label}
                </div>
            )}
        </li>
    );
}