import React, { FC, ReactNode } from "react";

interface Props {
    children?: ReactNode
    width?: string
    className?:string
}


export const PageContainer: FC<Props> = ({children, width, className}) => {
    let pageStyle = {
        paddingBottom: '60px',
        width: width ? width : "unset",
    }
    return (
        <div style={pageStyle as React.CSSProperties} className= {className ? className : ""}> 
            {children} 
        </div>
    )
}