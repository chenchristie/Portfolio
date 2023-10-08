import React, { FC, useEffect, useState } from 'react';
import { NavBar } from '../components/pageComponents/NavBar';
import { PageContainer } from '../components/pageComponents/PageContainer';
import { Picture } from '../components/Picture';
import { HeaderComponent } from '../components/Text/HeaderComponent';
import { colors, EMPTY_DETAILS_PAGE, functionalColors, pageInfoTypes, styles } from '../general/Constants';
import { FlexContainerProps, FlexObjectProps, PictureProps, DETAIL_PAGE_DATA } from '../general/Interfaces';
import { ColumnComtainerDiv, Copy, DetailsPageContainer, FadeInDiv, Header1, Header4, Space } from '../components/styled';
import { ColumnContainer } from '../components/pageComponents/ColumnContainer';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { Header } from '../components/pageComponents/Header';
import { NoData } from '../components/NoData';
import { ProjectInfo } from '../components/singlePageComponents/ProjectInfo';

const Introduction: FC<{ data: string }> = ({ data }) => {
    console.log(data);
    return (
        <>
            <Header4> Introduction </Header4>
            <Copy width={"80%"}>
                {data}
            </Copy>
        </>
    );
}

const DetailsPageContent: FC<DETAIL_PAGE_DATA & FlexContainerProps> = ({
    data,
    columns
}) => {
    let { title, date, srcPath, headerSrc, backgroundColor,
        introduction, projectInfo, singlePageData } = data;

    const [innerWidth, setInnerWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleWindowResize = () => {
            setInnerWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    });
    let basis = innerWidth / columns;

    let fadeInTimeout: any;
    useEffect(() => {
        fadeInTimeout = setTimeout(() => $(".fadeIn").css("opacity", "1"), 100);
        return () => {
            clearTimeout(fadeInTimeout);
            $(".fadeIn").css("opacity", "0");
        }
    }, [])

    // //if the other timeout for some reason did not trigger before divs are loaded
    // setTimeout(()=>{
    //     $(".fadeIn").css("opacity", "1");
    // }, 8000);

    const [showLoader, setShowLoader] = useState(true);

    return (
        <FadeInDiv className="fadeIn">
            <Header backgroundColor={colors[backgroundColor as keyof typeof colors]}>
                <ColumnComtainerDiv>
                    <ColumnContainer
                        basis={basis}
                        column={6}
                    >
                        <Header1> {title} </Header1>
                        <Introduction data={introduction} />

                    </ColumnContainer>
                    <ColumnContainer
                        basis={basis}
                        column={4}
                    >
                        <Picture
                            fadeIn
                            className="projectImage"
                            src={`work/${srcPath}/${headerSrc}`}
                        >
                            {
                                showLoader ?
                                    <img
                                        className="show"
                                        style={{
                                            position: "absolute",
                                            display: "none"
                                        }}
                                        src={`${process.env.PUBLIC_URL}/images/work/${srcPath}/${headerSrc}`}
                                        onLoad={() => {
                                            console.log("here");
                                            $('.projectImage').addClass("visible")
                                            setShowLoader(false);
                                        }} />
                                    : <></>
                            }
                        </Picture>
                    </ColumnContainer>
                </ColumnComtainerDiv>
            </Header>

            {/* project info */}
            <DetailsPageContainer>

                <ProjectInfo date={date} projectInfo={projectInfo} />
            </DetailsPageContainer>
        </FadeInDiv>
    );
}

export const Details: FC = () => {
    const location = useLocation();
    const [singlePage, setSinglePage] = useState(EMPTY_DETAILS_PAGE as DETAIL_PAGE_DATA);
    const [error, setError] = useState(false);

    let numTries = 0;
    let maxTries = 3;
    const projectName = new URLSearchParams(location.search).get('work');
    const importJSON = () => {
        numTries++;
        console.log("trying", numTries)
        import(`../data/workPages/${projectName}.json`).then((singlePage) => {
            setSinglePage(singlePage as DETAIL_PAGE_DATA);
        }).catch(
            () => {
                if (numTries < maxTries) {
                    setTimeout(() => importJSON(), 500); // try again
                }
                else {
                    setError(true);
                }
            }
        );
    }
    useEffect(() => {
        importJSON();
    }, []);
    let { title, date, srcPath, backgroundColor, projectInfo, singlePageData } = singlePage.data;

    console.log(singlePage.data)
    return (
        <PageContainer>
            <NavBar currentPage={`work ${title !== "EMPTY" ? `• ${title}` : ""}`} />
            {
                !error && title !== "EMPTY" ?
                    <DetailsPageContent
                        data={singlePage.data}
                        columns={10}
                    />
                    :
                    <></>
            }
            {
                error ?
                    < NoData />
                    :
                    <></>
            }

        </PageContainer>
    );
}

