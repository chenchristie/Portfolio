import React, { FC } from 'react';
import { styles } from '../general/Constants';
import { FlexObjectProps, GeneralProps, PictureProps } from '../general/Interfaces';
import profileImage from '../images/about/profile.jpg';
import { FadeInPicture } from './styled';

export const Picture: FC<GeneralProps& PictureProps> = ({
    shadow, shadowPosition, color,  
    height,
    src,
    className, id,
    children,
    fadeIn
}) => {
    let position = "";
    switch(shadowPosition) { 
        case "bottomLeft": 
            position = "-15px 15px"
            break;
        case "bottomRight": 
            position = "15px 15px"
            break;
        case "topLeft": 
            position = "-15px -15px"
            break;
        case "topRight": 
            position = "15px -15px"
            break;
    }

    let containerStyle = {
        width: "100%",
        height: height ? height : "400px",
        position: "relative",
        boxShadow: shadow ? `${position} ${color}` : "unset",
        marginRight: '20px',
        backgroundImage: `url(${process.env.PUBLIC_URL}/images/${src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
    }
    
    return (
        <>
            {
                fadeIn ? 
                <FadeInPicture
                    className={className ? className : ""}
                    id={id ? id : ""}
                    style={containerStyle as React.CSSProperties}
                >
                    {children}
                </FadeInPicture> 
                : 
                <div
                    className={className ? className : ""}
                    style={containerStyle as React.CSSProperties}
                >
                    {children}
                </div> 
            }
        </>
    )
}
