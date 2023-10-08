import React, { FC, useEffect, useState } from 'react';
import { NavBar } from '../components/pageComponents/NavBar';
import { PageContainer } from '../components/pageComponents/PageContainer';
import { Picture } from '../components/Picture';
import { HeaderComponent } from '../components/Text/HeaderComponent';
import { colors, functionalColors, styles } from '../general/Constants';
import { FilterState, FlexContainerProps, FlexObjectProps, PictureProps, SINGLE_WORK_TYPE } from '../general/Interfaces';
import profileImage from '../images/about/profile.jpg';
import brandingImage from '../images/about/branding.png';
import { ColumnComtainerDiv, Copy, Header1, Header3, Header4, Space } from '../components/styled';
import { ColumnContainer } from '../components/pageComponents/ColumnContainer';
import { Filter } from '../components/Filter';
import { ProjectBox } from '../components/ProjectBox/ProjectBox';
// import { works } from '../data/work';
import works from '../data/allWorks.json';
import { PictureGrid } from '../components/pageComponents/PictureGrid';
import { useNavigate } from 'react-router-dom';
import { Header } from '../components/pageComponents/Header';
import { ContentContainer } from '../components/pageComponents/ContentContainer';

const WorkPageContent: FC<FlexContainerProps> = ({columns, rowHeight}) => {

    let fullDiv = {
        width: "100%"
    }
    let columnRight = {
        flex: "1",
        columnGap: "50px",
        rowGap: "50px"
    }

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

    const [filterValue, setFilterValue] = useState<FilterState>({ value: [] });

    const navigate = useNavigate();

    const toDetailsPage = (project: SINGLE_WORK_TYPE) => {
        navigate(`/Details?work=${project}`);
    }

    return (
        <>
            <Header backgroundColor={colors.midGrey}>
                <ColumnComtainerDiv>

                    {/* <ColumnContainer 
                        basis={basis} column = {2} minWidth={"50px"}
                    /> */}
                    <ColumnContainer
                        column={2}
                        basis={basis}
                    >
                        <Header1> Work </Header1>
                    </ColumnContainer>
                </ColumnComtainerDiv>

            </Header>
            <ContentContainer>
                <ColumnComtainerDiv>
                {/* FILTER */}
                    <ColumnContainer
                        column={1.5}
                        basis={basis}
                    >
                        <div style={fullDiv}>
                            <Header4 color={colors.darkGrey}> filter by </Header4>
                            <Filter 
                                filter = {filterValue}
                                setFilter = {setFilterValue}
                            />
                        </div>
                    </ColumnContainer>
                    {
                        <div style={columnRight as React.CSSProperties} className="flex row">
                        {/* // load images */}
                            {
                                works.data.map((workData, index) => {
                                    return (
                                        <ProjectBox 
                                            key={`${workData.title}-${index}`}
                                            basis={basis}
                                            work = {workData}
                                            clickFunction = {toDetailsPage}
                                        />
                                    );
                                })
                            }
                        </div>
                    }
                </ColumnComtainerDiv>
            </ContentContainer>
        </>
    );
}

export const Work: FC = () => {
  return (
    <PageContainer className = "workPage">
        <NavBar currentPage="work"/>
        <WorkPageContent columns={10} rowHeight={200}/>
    </PageContainer>
  );
}

