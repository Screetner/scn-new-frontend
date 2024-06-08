import {createContext} from "react";
import {SidebarContextType} from "../types/context/sidebarContext.type.ts";

const SideBarContext = createContext<SidebarContextType>({
    expanded: true,
});

export default SideBarContext;