import React, { FC, ReactNode } from "react";
import { colors } from "../../general/Constants";
import ContextProvider from "../ContextProvider";
import { Header1, SingleInfoWrapper } from "../styled";
import { projectWorkDetails } from "../../general/Interfaces";

interface Props {
    children?: ReactNode,
    date: string,
    projectInfo: projectWorkDetails[],
}


export const ProjectInfo: FC<Props> = ({
    children,
    date,
    projectInfo
}) => {
    console.log(projectInfo)
    return (
        <div>
            <SingleInfoWrapper>
                <span> {date} </span>
            </SingleInfoWrapper>
            <SingleInfoWrapper>
                <span> something </span>
                <span> something else </span>
            </SingleInfoWrapper>
        </div>
    );
}