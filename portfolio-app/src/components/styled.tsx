import styled from "styled-components";
import { fonts, fontSizes, styles, colors } from "../general/Constants";
import { StyledComponentProps } from "../general/Interfaces";
import { PageContainer } from "./pageComponents/PageContainer";

// =============== TEXT ===============
export const Header1 = styled.h1`
    font-size: ${fontSizes.header1};
    font-family: ${fonts.Bitters};
    text-transform: capitalize;

    color: ${(props: React.CSSProperties) => props.color ? props.color : "black"};
    font-weight: 400;
`
export const Header2 = styled.h2<React.CSSProperties & StyledComponentProps>`
    font-size: ${fontSizes.header2};
    font-family: ${fonts.Bitters};
    font-weight: 400;
    text-transform: capitalize;

    color: ${(props) => props.color ? props.color : "black"};
    margin:0;

    &.hoverable:hover{
        color: ${(props) => props.hoverColor ? props.hoverColor : props.color};
        font-weight: 600;
    }
`

export const Header2_5 = styled.h2<React.CSSProperties & StyledComponentProps>`
    font-size: ${fontSizes.header3};
    font-family: ${fonts.Bitters};
    font-weight: 400;
    text-transform: capitalize;

    color: ${(props) => props.color ? props.color : "black"};
    margin:0;

    &.hoverable:hover{
        color: ${(props) => props.hoverColor ? props.hoverColor : props.color};
        font-weight: 600;
    }
`
export const Header3 = styled.h3<React.CSSProperties & StyledComponentProps>`
    font-size: ${fontSizes.header3};
    font-weight: 400;
    text-transform: capitalize;

    color: ${(props) => props.color ? props.color : "black"};
    margin:0;

    &.hoverable:hover{
        color: ${(props) => props.hoverColor ? props.hoverColor : props.color};
        font-weight: 600;
    }
`
export const Header4 = styled.span<React.CSSProperties>`
    font-size: ${fontSizes.header4};
    text-transform: uppercase;
    color: ${(props: React.CSSProperties) => props.color ? props.color : "black"};
    font-weight: 800;
    white-space: ${(props) => props.whiteSpace ? props.whiteSpace : "unset"};;
`
export const Copy = styled.p<React.CSSProperties & StyledComponentProps>`
    font-size: ${fontSizes.copy};
    color: ${(props) => props.color ? props.color : "black"};
    width: ${(props) => props.width ? props.width : "100%"};
    text-transform: ${(props) => props.textTransform ? props.textTransform : "unset"};
    margin:0;

    &.hoverable:hover{
        color: ${(props) => props.hoverColor ? props.hoverColor : props.color};
        font-weight: 600;
    }
`

export const Subtitle = styled.p<React.CSSProperties>`
    font-size: ${fontSizes.subtitle};
    font-style: italic;
    text-transform: capitalize;
    color: ${(props: React.CSSProperties) => props.color ? props.color : "black"};
    margin:0;
    white-space: ${(props) => props.whiteSpace ? props.whiteSpace : "unset"};;
  }
`

export const Italics = styled.p<React.CSSProperties>`
    font-size: ${fontSizes.copy};
    font-style: italic;
    text-transform: capitalize;
    color: ${(props: React.CSSProperties) => props.color ? props.color : "black"};
    margin:0;
    white-space: ${(props) => props.whiteSpace ? props.whiteSpace : "unset"};;
  }
`
export const CustomLink = styled.span`
    font-size: ${fontSizes.copy};
`

export const InvisibleSpan = styled.span`
    visibility: hidden
`


// =============== PAGE COMPONENTS ===============
export const PageComponentWidth = styled.div`
    width: 65%;
    margin-left: auto;
    margin-right: auto;

    @media (max-width: 1500px) {
        width: unset;
    }
`
export const Space = styled.div`
    height: ${(props: React.CSSProperties) => props.height};
`

export const ColumnComtainerDiv = styled.div`
    display: flex;
    flex-direction: row;
    column-gap: 30px;
`
export const ProjectImage = styled.div`
    background-color: ${(props: React.CSSProperties) => props.backgroundColor};
    background-image: ${(props: React.CSSProperties) => props.backgroundImage};
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

    width: 100%;
    min-width: 200px;
    height: 400px;
    position: ${(props: React.CSSProperties) => props.position};
    // transition: top 400ms, right 400ms;
    top: 0;
    right:0;
    z-index: ${(props: React.CSSProperties) => props.zIndex};
    visibility: hidden;
    opacity: 0;
    transition: top 400ms, right 400ms;

    &.visible {
        visibility: visible;
        transition: opacity 1300ms, top 400ms, right 400ms;
        transition-delay: 200ms, 0ms, 0ms;
        opacity: 1;
    }
    &:hover{
        top: ${(props: React.CSSProperties) => props.top};
        right: ${(props: React.CSSProperties) => props.top};
        transition: top 400ms, right 400ms;
    }
`

export const MenuHoverMove = styled.div`
    display: flex;
    overflow: hidden;
    alignItems: center;
    borderBottomLeftRadius: ${styles.menu.size} ${styles.menu.size};
    position: absolute;
    top: 0;
    right: 0px;
    zIndex: 20;
    height: ${styles.menu.size};
    width: ${styles.menu.size};
    transition: top 300ms, right 300ms, width 200ms;
    &:hover{
        top: 8px;
        right: 8px;
    }
    &.open {
        &:hover {
            top: 8px;
            right: 8px;
        }
        top: 5px;
        right: 5px;
        width: 150px;
        padding: 0px 20px 0px 30px;
    }
`

export const FadeInDiv = styled.div`
    opacity: 0;
    transition: opacity 800ms;
`

export const FadeInPicture = styled.div`
    opacity: 0;
    transition: opacity 600ms;

    &.visible{
        opacity: 1;
        transition: opacity 600ms;
    }
`

// =============== DETAILS PAGE COMPONENTS ===============
export const IntroductionTitle = styled(Header4)`
    display: inline-block;
    margin-bottom: 10px;
`

export const DetailsPageContainer = styled.div`
    padding: 10px 10%;
`

//ProjectInfo
export const ProjectInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 25px;
    width: 100%;
    margin-bottom: 100px;
`

export const SingleInfoWrapper = styled.div`
    display: flex;
    flex-direction: row;

`
export const Key = styled.div`
    width: 20%;
    @media (max-width: 970px) {
        width: 40%;
    }
    @media (max-width: 500px) {
        width: 50%;
    }
    font-size: ${fontSizes.header4};
    text-transform: uppercase;
    color: ${(props: React.CSSProperties) => props.color ? props.color : "black"};
    font-weight: 800;
    white-space: ${(props) => props.whiteSpace ? props.whiteSpace : "unset"};;
`
export const Value = styled.div`
    width: 80%;
    font-size: ${fontSizes.header4};
    text-transform: capitalize;
    color: ${(props: React.CSSProperties) => props.color ? props.color : "black"};
    font-weight: 400;
    white-space: ${(props) => props.whiteSpace ? props.whiteSpace : "unset"};

    display: flex;
    flex-direction: column;
    row-gap: 3px;
`

export const SectionTitle = styled(Header2)`
    color: ${colors.darkGrey};
    font-weight: 800;
    margin-bottom: 30px;
`
export const SubSectionTitle = styled(Header2_5)`
    margin-bottom: 20px;
`

export const ProjectDataItemContainer = styled.div`
    margin-top: 70px;
    margin-bottom: 40px;
`

export const SubSectionContainer = styled.div`
    margin-bottom: 30px;
`