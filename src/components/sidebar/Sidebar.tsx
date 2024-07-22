import {PropsWithChildren, useState} from "react";
import SideBarContext from "../../context/SideBarContext.ts";
import { RiExpandLeftLine } from "react-icons/ri";
import { RiExpandRightLine } from "react-icons/ri";
import logo from "/logo.jpg";
import { CiLogout } from "react-icons/ci";
import {IconContext} from "react-icons";
import {useLogout} from "@/hooks/auth/useLogout.tsx";
import {useAuth} from "@/context/AuthContext.tsx";


export function Sidebar({children} : PropsWithChildren){
   const [expanded, setExpanded] = useState<boolean>(true);
   const {logout} = useLogout();

   const {User} = useAuth()

    return (
        <>
            <aside className="h-screen">
                <nav className="h-full flex flex-col bg-white border-r shadow-sm">
                    <div className="p-4 pb-2 flex justify-between items-center">
                        <img
                            src={logo}
                            className={`overflow-hidden transition-all ${
                                expanded ? "w-12" : "w-0"
                            }`}
                            alt="Logo"
                        />
                        <button
                            onClick={() => setExpanded((curr) => !curr)}
                            className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
                        >
                            {expanded ? <RiExpandLeftLine/> : <RiExpandRightLine/>}
                        </button>
                    </div>
                    <SideBarContext.Provider value={{expanded}}>
                        <ul className="flex-1 px-3">{children}</ul>
                    </SideBarContext.Provider>
                    <div className="border-t flex p-3">
                        <img
                            src={logo}
                            className="w-10 h-10 rounded-md"
                            alt="Profile"
                            width={40}
                            height={40}
                        />
                        {
                            expanded && (
                                <div
                                    className={`flex justify-between items-center overflow-hidden transition-all w-52 ml-3`}
                                >
                                    <div className="leading-4">
                                        <h4 className="font-semibold">{User?.username}</h4>
                                        <span className="text-xs text-gray-600">{User?.organization_name}</span>
                                    </div>
                                    <div className="hover:cursor-pointer">
                                        <IconContext.Provider value={{className: "w-6 h-6 text-red", color: "red"}}>
                                            <CiLogout onClick={logout}/>
                                        </IconContext.Provider>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </nav>
            </aside>
        </>
    )
}