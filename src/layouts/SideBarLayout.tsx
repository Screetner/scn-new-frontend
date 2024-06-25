import React, { PropsWithChildren } from "react";
import { Sidebar } from "../components/sidebar/Sidebar.tsx";
import { SidebarItem } from "../components/sidebar/SidebarItem.tsx";
import { sidebarList } from "../utils/sidebarList.tsx";

const SideBarLayout: React.FC<PropsWithChildren<{}>> = ({ children }) => {
    return (
        <div className="flex">
            <Sidebar>
                {sidebarList.map((r) => (
                    <SidebarItem key={r.label} label={r.label} icon={r.icon} path={r.path} />
                ))}
            </Sidebar>
            <div className="w-full p-2">
                {children}
            </div>
        </div>
    );
};

export default SideBarLayout;
