import React, { FC, ReactNode } from "react";
import { colors } from "../../general/Constants";
import ContextProvider from "../ContextProvider";
import { Header1 } from "../styled";

interface Props {
    children?: ReactNode
    text: string
    background?: boolean
}


export const HeaderComponent: FC<Props> = ({
        children, 
        text,
        background
    }) => {
        let bgStyle = {
            backgroundColor: colors.offWhite,
            padding: "20px",
            width: "fit-content",
            borderRadius: "50px"
        }
    
        return (
            <Header1 style={background ? bgStyle : {}}> {text} </Header1>
        )
}