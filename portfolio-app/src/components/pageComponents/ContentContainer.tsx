import React, { FC, ReactNode } from "react";

interface Props {
    children?: ReactNode
    width?: string,
    padding?: string
}


export const ContentContainer: FC<Props> = ({children, width, padding}) => {
    let pageStyle = {
        padding: padding ? padding : '0px 8%',
        width: width ? width : "unset",
    }
    return (
        <div style={pageStyle as React.CSSProperties}> 
            {children} 
        </div>
    )
}