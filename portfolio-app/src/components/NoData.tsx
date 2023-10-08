import React, { FC, MouseEventHandler, useEffect } from 'react';
import { colors } from '../general/Constants';
import { ColumnContainer } from './pageComponents/ColumnContainer';
import { ContentContainer } from './pageComponents/ContentContainer';
import { Header } from './pageComponents/Header';
import { ColumnComtainerDiv, Copy, FadeInDiv, Header1 } from './styled';

export const NoData: FC = () => {
    useEffect(()=>{
        setTimeout(()=>$(".fadeIn").css("opacity", "1"), 100);
        return () => {
            $(".fadeIn").css("opacity", "0");
        }
    }, [])
    
    return (
        // <ColumnComtainerDiv
        // >
        //     <ColumnContainer
        //         basis={window.innerWidth}
        //         column={1}
        //     >
        //         <Header1> Nothing here </Header1>
        //     </ColumnContainer>           
        // </ColumnComtainerDiv> 
        
        <FadeInDiv className="fadeIn">
            <Header backgroundColor={colors.midGrey}>
                <Header1> Oops! </Header1>
                <Copy> You've tried to reach a page that doesn't exist yet. </Copy>
            </Header>
        </FadeInDiv>
    )
}

export const CheckBackIn: FC = () => {
    useEffect(()=>{
        setTimeout(()=>$(".fadeIn").css("opacity", "1"), 100);
        return () => {
            $(".fadeIn").css("opacity", "0");
        }
    }, [])
    
    return (
        <FadeInDiv className="fadeIn">
            <Header backgroundColor={colors.midGrey}>
                <Header1> This website is in progress </Header1>
                <Copy> Please check in later!. </Copy>
            </Header>
        </FadeInDiv>
    )
}
