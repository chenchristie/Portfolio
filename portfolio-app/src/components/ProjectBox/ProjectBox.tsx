import React, { FC, useEffect, useState } from "react";
import { colors, functionalColors } from "../../general/Constants";
import { GeneralProps, ProjectBoxProps } from "../../general/Interfaces";
import { ColumnContainer } from "../pageComponents/ColumnContainer";
import { Loader } from "../pageComponents/Loader";
import { Copy, Header4, InvisibleSpan, Italics, ProjectImage, Subtitle } from "../styled";
import allWorksJSON from "../../data/allWorks.json";


export const ProjectBox: FC<GeneralProps & ProjectBoxProps> = ({
    basis,
    work, 
    clickFunction,
}) => {
    //check if the first image is completely loaded
    const [showLoader, setShowLoader] = useState(true);
    
    let topRound: React.CSSProperties= {
        backgroundColor: functionalColors.backgrounds.page,
        width: "fit-content",
        padding: "0px 25px 8px 8px",
        borderBottomRightRadius: "25px 100% ",
        position: "absolute",
        top: 0,
        left: "-3px",
        display: "flex",
        alignItems: "center",
        columnGap: "5px",
    }
    let bottomRound: React.CSSProperties= {
        backgroundColor: functionalColors.backgrounds.page,
        width: "fit-content",
        padding: "5px 8px 0px 20px",
        borderTopLeftRadius: "25px 100%",
        position: "absolute",
        bottom: 0,
        right: "-3px",
        display: "flex",
        alignItems: "center",
        columnGap: "5px",
    }

    // let noWrapTextStyle: React.CSSProperties = {
    //     whiteSpace: "nowrap"
    // }

    //don't keep loaders active for more than 5 seconds
    setTimeout(() => $('.projectImage').addClass("visible"), 5000);

    let singlePageData = work;
    let {title, tags, srcPath, coverSrc, backgroundColor, date } = singlePageData;

    return (
        <ColumnContainer
            column={1.9}
            basis={basis}
            height="400px"
            clickFunction = 
                {() => {
                    if(clickFunction) {
                        clickFunction(singlePageData.title);
                    }
                }}
        > 
            <Loader show={showLoader}/>
            {/* background text */}
            <ProjectImage
                className="projectImage"
                backgroundColor = {colors[backgroundColor as keyof typeof colors]}
                position="absolute"
                zIndex="-10"
                top="0px"
                right="0px"
            >                
                <div style={topRound}> 
                    <InvisibleSpan> <Header4 whiteSpace="nowrap"> {title} </Header4> </InvisibleSpan>
                    <InvisibleSpan> <Italics whiteSpace="nowrap"> {`// ${date}`}</Italics> </InvisibleSpan>        
                </div>
                <div style={bottomRound}> <InvisibleSpan> <Subtitle>  {tags} </Subtitle> </InvisibleSpan> </div>
            </ProjectImage>
            {/* text */}
            <ProjectImage
                className="projectImage"
                backgroundImage = {`url(${process.env.PUBLIC_URL}/images/work/${srcPath}/${coverSrc})`}
                position="relative"
                zIndex="10"
                top="10px"
                right="10px"
            >
                <div style={topRound}> 
                    <Header4 whiteSpace="nowrap"> {title} </Header4> 
                    <Italics whiteSpace="nowrap"> {`// ${date}`}</Italics> 
                </div>
                <div style={bottomRound}> <Subtitle> {tags} </Subtitle> </div>

                {/* load the image first so image loading is hidden in progress */}
                {
                    showLoader  ? 
                        <img
                            className="show"
                            style={{
                                position: "absolute",
                                display: "none"
                            }}
                            src = {`${process.env.PUBLIC_URL}/images/work/${srcPath}/${coverSrc}`}
                            onLoad ={()=> {
                                $('.projectImage').addClass("visible")
                                setShowLoader(false);
                            }} />
                    : <></>
                }
            </ProjectImage>

        </ColumnContainer>
    )

}