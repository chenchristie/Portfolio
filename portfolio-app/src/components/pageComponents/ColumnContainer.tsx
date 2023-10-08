import React, { FC, MouseEventHandler } from 'react';
import { styles } from '../../general/Constants';
import { FlexObjectProps, GeneralProps, PictureProps } from '../../general/Interfaces';
import profileImage from '../images/about/profile.jpg';

export const ColumnContainer: FC<GeneralProps & FlexObjectProps> = ({
    children,
    column, 
    basis, 
    height,
    minWidth,
    clickFunction
}) => {
    let containerStyle = {
        width: `${column * basis}px`,
        minWidth: minWidth ? minWidth : "230px",
        // float: float ? float : "unset",
        position: "relative",
        zIndex: "100",
        // border: "1px solid red",
    }
    
    containerStyle = height ? { ...containerStyle, ...{height: `${height}`} } : containerStyle;
    return (
        <div
            style={containerStyle as React.CSSProperties}
            onClick = {() => {
                    if(clickFunction) {
                        clickFunction()
                    }
                }
            }
        >
            {children}
        </div> 
    )
}
