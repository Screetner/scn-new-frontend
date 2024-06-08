import {PropsWithChildren, useState} from "react";
import SideBarContext from "../../context/SideBarContext.ts";
import { RiExpandLeftLine } from "react-icons/ri";
import { RiExpandRightLine } from "react-icons/ri";
import logo from "/logo.jpg";
import { CiLogout } from "react-icons/ci";


export function Sidebar({children} : PropsWithChildren){
   const [expanded, setExpanded] = useState<boolean>(true);

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
                        <div
                            className={`flex justify-between items-center overflow-hidden transition-all ${
                                expanded ? "w-52 ml-3" : "w-0"
                            } `}
                        >
                            <div className="leading-4">
                                <h4 className="font-semibold">AuJung</h4>
                                <span className="text-xs text-gray-600">Developer</span>
                            </div>
                            <div className="hover:cursor-pointer">
                                <CiLogout className="w-6 h-6"/>
                            </div>
                        </div>
                    </div>
                </nav>
            </aside>
        </>
    )
}