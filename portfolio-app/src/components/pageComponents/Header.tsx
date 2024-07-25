import React, { FC, ReactNode } from "react";
import { colors, functionalColors } from "../../general/Constants";

interface Props {
    children?: ReactNode
    height?: string,
    backgroundColor?: string,
    sidePadding?: string
}


export const Header: FC<Props> = ({children, height, backgroundColor, sidePadding}) => {
    let pageStyle = {
        height: height ? height : "unset",
        backgroundColor: backgroundColor ? backgroundColor : functionalColors.backgrounds.page,
        padding: `50px ${sidePadding ? sidePadding : "10%"}`,
        marginBottom: "60px"
    }
    return (
        <div style={pageStyle as React.CSSProperties}> 
            {children} 
        </div>
    )
}