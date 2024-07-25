import React from "react";


// ============== STYLES ==============
export const colors = {
    // offWhite: "#F8F0E8",
    offWhite: "#F5F5F5",
    // offWhite: "#F2F3F4",
    //darkest
    green3: "#343E37",

    //medium
    green2: "#607466",
    blue2: "#626981",
    pink2: "#8C5E58",
    tan2: "#95683B",

    //lightest
    green1: "#A7C4AF",
    blue1: "#C3CAE1",
    pink1: "#E6C3C3",
    tan1: "#E2D0BE",

    //greys
    midGrey: "#DED4D2",
    darkGrey: "#5d5d5d",
}

export const functionalColors = {
    cutoutBack: {
        green: colors.green3,
        blue: colors.blue2,
        pink: colors.pink2,
        tan: colors.tan2
    },
    backgrounds: {
        page: colors.offWhite
    }
}

export const fontSizes = {
    header1: "45px",
    header2: "30px",
    header3: "25px",
    header4: "20px",
    copy: "20px",
    subtitle: "15px"
}

export const fonts = {
    Bitters: "'Bitter', serif",
}

export const styles = {
    menu: {
        size: "44px",
        borderBottom: "46px",
        paddingLeft: "30px",
        sizeOpen: "67px"
    },
    transitions: {
        transition: "width 250ms, height 200ms",
        opacity: "opacity 200ms"
    },
    image: {
    },
    flex: {
        desktop: 1920
    }

}

export const pageInfoTypes = {
    description: "description",
}

export const EMPTY_DETAILS_PAGE = {
    data: {
        title: "EMPTY",
        date: "EMPTY",
        srcPath: "EMPTY",
        headerSrc: "",
        backgroundColor: "EMPTY",
        introduction: "EMPTY",
        projectInfo: [],
        singlePageData: []
    }
}