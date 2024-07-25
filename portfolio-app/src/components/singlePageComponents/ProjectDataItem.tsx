import React, { FC, ReactNode } from "react";
import { colors } from "../../general/Constants";
import ContextProvider from "../ContextProvider";
import { Copy, Header1, Key, ProjectDataItemContainer, SectionTitle, SingleInfoWrapper, SubSectionContainer, SubSectionTitle, Value } from "../styled";
import { SingleWorkDetails, SubSectionDataBlocks, SUBSECTIONDATA_TYPE, SubSectionType } from "../../general/Interfaces";

interface Props {
    children?: ReactNode,
    srcPath: string,
    SingleWorkDetails: SingleWorkDetails,
}


export const ProjectDataItem: FC<Props> = ({
    children,
    srcPath,
    SingleWorkDetails
}) => {
    const {
        sectionTitle,
        sectionTitleType,
        information
    } = SingleWorkDetails;
    console.log("============================");
    console.log(SingleWorkDetails);
    return (
        <ProjectDataItemContainer>
            <SectionTitle> {sectionTitle} </SectionTitle>
            {
                information.map(singleInformation => {
                    return (
                        <SubSectionContainer
                            key={singleInformation.subSectionTitle}
                        >
                            <SectionInformation
                                path={`${process.env.PUBLIC_URL}/images/work/${srcPath}`}
                                singleInformation={singleInformation}
                            />
                        </SubSectionContainer>
                    )
                })
            }
        </ProjectDataItemContainer>
    );
}

export const SectionInformation: FC<{ path?: string, singleInformation: SubSectionType }> = ({
    singleInformation,
    path
}) => {
    const { subSectionTitle, subSectionData, subSectionPath } = singleInformation;
    const style = {
        display: "flex",
        flexDirection: "column",
        rowGap: "20px"
    }

    const dataPath = subSectionPath ? `${path}/${subSectionPath}`: path;

    return (
        <div>
            <SubSectionTitle> {subSectionTitle} </SubSectionTitle>
            <div style={style as React.CSSProperties}>
                {
                    subSectionData.map((block, index) => {
                        const { type, data } = block;
                        let returnBlock = <></>;
                        switch (type as SUBSECTIONDATA_TYPE) {
                            case SUBSECTIONDATA_TYPE.DESCRIPTION:
                                returnBlock = <DescriptionBlock {...block} path={dataPath ?? ''} />
                                break;
                            case SUBSECTIONDATA_TYPE.IMAGE_GRID:
                                returnBlock = <ImageGridBlock {...block} path={dataPath ?? ''} />
                                break;
                            default:
                                break;
                        }

                        return (
                            <div key={index}>
                                {returnBlock}
                            </div>
                        )
                    })
                }
            </div>
        </div >
    );
}

export const DescriptionBlock: FC<SubSectionDataBlocks & { path: string }> = ({
    type,
    path,
    data
}) => {
    const style = {
        display: "flex",
        flexDirection: "column",
        rowGap: "10px",
    }
    return (
        <div style={style as React.CSSProperties}>
            {
                data.text?.map((t, index) =>
                    <Copy key={index}> {t} </Copy>
                )
            }
        </div>
    );
}

export const ImageGridBlock: FC<SubSectionDataBlocks & { path: string }> = ({
    type,
    path,
    data: { images, caption }
}) => {
    const style = {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        columnGap: "10px",
    }
    return (
        <div style={style as React.CSSProperties}>
            {
                images?.map((image, index) => {
                    console.log(path)
                    console.log(`${path}/${image.image}`);
                    return (
                        <img src={`${path}/${image.image}`} width="30%" alt={`${image.image}`}/>
                    )
                })
            }
        </div>
    );
}