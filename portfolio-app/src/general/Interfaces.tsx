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
export interface StyledComponentProps{
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
        projectInfo: projectWorkDetails[],
        singlePageData: singleWorkDetails[]
    }
}


export interface projectWorkDetails {
    displayName: string,
    data: string,
}
export interface singleWorkDetails {
    sectionTitle?: string,
    sectionTitleType?: string,
    sectionPath?: string,
    information: {
        subSectionTitle?: string,
        subSectionTitleType?: string,
        subSectionPath?: string,
        subSectionData: {
            type: subSectionDataType,
            data: subSectionDataData,
        }[]
    }[] 
}

export enum subSectionDataType {
    DESCRIPTION,
    IMAGE,
    IMAGE_GRID
}
export interface subSectionDataData {
    text?: string[],
    images?: string[],
    caption: string
}