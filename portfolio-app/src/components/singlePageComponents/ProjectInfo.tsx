import React, { FC, ReactNode } from "react";
import { colors } from "../../general/Constants";
import ContextProvider from "../ContextProvider";
import { Header1, Key, ProjectInfoContainer, SingleInfoWrapper, Value } from "../styled";
import { ProjectWorkDetails } from "../../general/Interfaces";

interface Props {
    children?: ReactNode,
    date: string,
    projectInfo: ProjectWorkDetails[],
}


export const ProjectInfo: FC<Props> = ({
    children,
    date,
    projectInfo
}) => {
    return (
        <ProjectInfoContainer>
            <SingleInfoWrapper>
                <Key>{date}</Key>
            </SingleInfoWrapper>
            {
                projectInfo.map(entry => {
                    return (
                        <SingleInfoWrapper key={entry.displayName}>
                            <Key>{entry.displayName}</Key>
                            <Value>
                                {
                                    entry.data.map(value => {
                                        return (
                                            <div key={value}>
                                                {value}
                                            </div>
                                        );
                                    })
                                }
                            </Value>
                        </SingleInfoWrapper>
                    );
                })
            }
        </ProjectInfoContainer>
    );
}