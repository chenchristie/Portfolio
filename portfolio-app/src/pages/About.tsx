import React, { FC, useEffect, useState } from 'react';
import { NavBar } from '../components/pageComponents/NavBar';
import { PageContainer } from '../components/pageComponents/PageContainer';
import { Picture } from '../components/Picture';
import { HeaderComponent } from '../components/Text/HeaderComponent';
import { colors, functionalColors, styles } from '../general/Constants';
import { FlexContainerProps, FlexObjectProps, PictureProps } from '../general/Interfaces';
import { Copy, Space } from '../components/styled';
import { ColumnContainer } from '../components/pageComponents/ColumnContainer';
import { Header } from '../components/pageComponents/Header';
import { ContentContainer } from '../components/pageComponents/ContentContainer';

const AboutPageContent: FC<FlexContainerProps> = ({columns, rowHeight}) => {
    let pageStyles = {
        display: 'flex',
        flexDirection: 'row',
        // columnGap: "50px",
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
    // let basis = styles.flex.desktop / columns;
    let basis = innerWidth / columns;
    
    useEffect(()=>{
        setTimeout(()=>$(".fadeIn").css("opacity", "1"), 100);
        return () => {
            $(".fadeIn").css("opacity", "0");
        }
    }, [])

    return (
        <>
            <Header
                backgroundColor= {colors.midGrey}
            >
                <div style={pageStyles as React.CSSProperties}>
                    <ColumnContainer
                        basis={basis} column={5} 
                    >
                        <Picture 
                            id='profile'
                            fadeIn
                            height="400px"
                            shadow 
                            shadowPosition={"bottomRight"} 
                            color={functionalColors.cutoutBack.tan}
                            src={`about/profile.jpg`}
                        >
                            <img
                                className="show"
                                style={{
                                    position: "absolute",
                                    display: "none"
                                }}
                                src = {`${process.env.PUBLIC_URL}/images/about/profile.jpg`}
                                onLoad ={()=> {
                                    console.log("profile image visible");
                                    $('#profile').addClass("visible")
                                }} 
                            />
                        </Picture>
                    </ColumnContainer>
                    <ColumnContainer 
                        basis={basis} column = {1.5} minWidth={"50px"}
                    />
                    <ColumnContainer
                        basis={basis} column={7}
                    >
                        <HeaderComponent text="Hi! I'm Christie."/>
                        <Copy width={"80%"}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.  
                        </Copy>
                        
                    </ColumnContainer>
                    
                </div>
            </Header>
            <ContentContainer>
                <ColumnContainer
                    basis={basis} 
                    column={3} 
                >
                    <Picture 
                        id="bottom"
                        fadeIn
                        shadow 
                        shadowPosition={"bottomLeft"} 
                        color={functionalColors.cutoutBack.pink} 
                        src={`about/branding.png`}
                    >
                        <img
                                className="show"
                                style={{
                                    position: "absolute",
                                    display: "none"
                                }}
                                src = {`${process.env.PUBLIC_URL}/images/about/branding.png`}
                                onLoad ={()=> {
                                    console.log("LOADED IMAGE");
                                    $('#bottom').addClass("visible")
                                }} 
                            />
                    </Picture>
                </ColumnContainer>
            </ContentContainer>
        </>
    );
}

export const About: FC = () => {
  return (
    <PageContainer>
        <NavBar currentPage="about"/>
        <AboutPageContent columns={12} rowHeight={200}/>
    </PageContainer>
  );
}

