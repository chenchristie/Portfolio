import React from 'react';
import { ReactNode } from "react";

export interface GeneralProps {
    children?: ReactNode,
    clickFunction?: Function,
    className?: string,
    id?: string
}


//NAV BAR
export interface NavBarProps {
    currentPage: string
}

//LOADER
export interface LoaderProps {
    show: boolean
}

//======== PAGES ========

//COMPONENTS
export interface PictureProps {
    shadow?: boolean,
    shadowPosition?: string,
    color?: string
    height?: string
    src: string,
    fadeIn?: boolean,
}
export interface ProjectBoxProps {
    basis: number,
    work: SINGLE_WORK_TYPE

}

// FILTER TYPES
export interface FilterProps {
    filter: FilterState,
    setFilter: Function
}
export interface FilterState {
    value: string[]
}


// STYLING TYPES
export interface FlexContainerProps {
    columns: number
    rowHeight?: number //pixels
}
export interface FlexObjectProps {
    column: number,
    basis: number,
    height?: string,
    minWidth?: string
}
export interface StyledComponentProps {
    hoverColor?: string,
}

//EVENT TYPES
export type MouseEvent = React.MouseEventHandler<HTMLInputElement>;


// DATA
export interface ALL_WORKS_INTERFACE {
    data: SINGLE_WORK_TYPE[]
}

export type SINGLE_WORK_TYPE = {
    title: string,
    date: string,
    srcPath?: string,
    backgroundColor?: string,
    coverSrc: string,
    purpose: string,
    tags: string
}

export interface DETAIL_PAGE_DATA {
    data: {
        title: string,
        date: string,
        srcPath: string,
        backgroundColor: string,
        headerSrc: string,
        introduction: string,
        projectInfo: ProjectWorkDetails[],
        singlePageData: SingleWorkDetails[]
    }
}


export interface ProjectWorkDetails {
    displayName: string,
    data: string[],
}
export interface SingleWorkDetails {
    sectionTitle?: string,
    sectionTitleType?: string,
    sectionPath?: string,
    information: SubSectionType[]
}

export interface SubSectionType {
    subSectionTitle?: string,
    subSectionTitleType?: string,
    subSectionPath?: string,
    subSectionData: SubSectionDataBlocks[]
}

export interface SubSectionDataBlocks {
    type: SUBSECTIONDATA_TYPE,
    data: SubSectionDataData,
}

export enum SUBSECTIONDATA_TYPE {
    DESCRIPTION = "DESCRIPTION",
    IMAGE = "IMAGE",
    IMAGE_GRID = "IMAGE_GRID"
}

export interface SubSectionDataData {
    text?: string[],
    images?: Image[],
    caption: string
}

export interface Image {
    image: string,
    caption?: string
}