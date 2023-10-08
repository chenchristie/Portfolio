import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import { colors, functionalColors, styles } from '../../general/Constants';
import { GeneralProps, NavBarProps } from '../../general/Interfaces';
import { CustomLink, MenuHoverMove, Header4 } from '../styled';

const Menu: FC<GeneralProps> = () => {
    const [open, setOpen] = useState(false);

    let menuStyleClosed = {
        display: "flex",
        overflow: "hidden",
        alignItems: "center",
        backgroundColor: colors.green2,
        height: styles.menu.size,
        width: styles.menu.size,
        borderBottomLeftRadius: `${styles.menu.borderBottom} ${styles.menu.borderBottom}`,
        transition: styles.transitions.transition,
        position: "absolute",
        zIndex: 10
    }
    let menuStyleOpen = {
        display: "flex",
        overflow: "hidden",
        alignItems: "center",
        backgroundColor: colors.green2,
        height: styles.menu.size,
        borderBottomLeftRadius: `${styles.menu.borderBottom} ${styles.menu.borderBottom}`,
        transition: styles.transitions.transition,
        right: "0",
        width: "150px",
        padding: `0px 20px 0px ${styles.menu.paddingLeft}`,
        position: "absolute",
        justifyContent: "space-around",
        zIndex: 10
    }

    let coverInactive = {
        display: "flex",
        overflow: "hidden",
        alignItems: "center",
        backgroundColor: colors.green2,
        height: styles.menu.size,
        borderBottomLeftRadius: `${styles.menu.borderBottom} ${styles.menu.borderBottom}`,
        transition: styles.transitions.transition,
        right: "0px",
        width: "150px",
        padding: `0px 20px 0px ${styles.menu.paddingLeft}`,
        position: "absolute",
        opacity: 0,
        zIndex: 3
    }
    let coverActive = {
        display: "flex",
        overflow: "hidden",
        alignItems: "center",
        backgroundColor: colors.green2,
        height: styles.menu.size,
        width: styles.menu.size,
        borderBottomLeftRadius: `${styles.menu.borderBottom} ${styles.menu.borderBottom}`,
        transition: styles.transitions.transition,
        position: "absolute",
        // right: "25px",
        zIndex: 20,
        opacity: 1
    }

    let background = {
        display: "flex",
        overflow: "hidden",
        alignItems: "center",
        height: styles.menu.size,
        width: styles.menu.size,
        borderBottomLeftRadius: `${styles.menu.size} ${styles.menu.size}`,
        transition: styles.transitions.transition,
        position: "absolute",
        right: "0",
        zIndex: 5,
        backgroundColor: functionalColors.cutoutBack.green
    }
 
    let navLinkStyle = {
        color: "white",
        lineheight: styles.menu.size,
        zIndex: 35,
    }

    return (
        <div style={{position: "relative"}}>
        {/* overlay */}
            <MenuHoverMove className={open ? "open" : ""}>
                <div 
                    style = {(open ? coverInactive : coverActive) as React.CSSProperties}
                    onClick = {()=> setOpen(!open)}
                >
                </div>

                <div 
                    style = {(open ? menuStyleOpen: menuStyleClosed) as React.CSSProperties}
                    onClick = {()=> setOpen(!open)}
                > 
                    <Link to="/About" style={navLinkStyle}> <CustomLink> About </CustomLink> </Link>
                    <Link to="/Work" style={navLinkStyle}> <CustomLink> Work </CustomLink> </Link>
                </div>
            </MenuHoverMove>
            <div 
                style = {background as React.CSSProperties}
                onClick = {()=> setOpen(!open)}
            > 
            </div>
        </div>
    )
}

export const NavBar: FC<NavBarProps> = ({currentPage}) => {
    let navStyle = {
        display: "flex",
        justifyContent: "space-between",
        // position: "sticky",
        padding: '30px 50px 0 50px',

        // top: "0px",
        height:"70px",
        zIndex: "100",
        backgroundColor: functionalColors.backgrounds.page
    }
    return (
        <nav style={navStyle as React.CSSProperties}>
            <Header4 color={colors.darkGrey}> {currentPage} </Header4>
            <Menu />
        </nav>
    );
}

