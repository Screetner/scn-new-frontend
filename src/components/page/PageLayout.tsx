import React from "react";
import {PageHeaderProps} from "@/types/components/page.type.ts";

const PageLayout : React.FC<PageHeaderProps> = ({children, pageTitle}) => {
    return (
        <div>
            <h1
                className={"text-2xl font-bold text-blue-950"}
            >
                {pageTitle}
            </h1>
            <div>
                {children}
            </div>
        </div>)
}

export default PageLayout;