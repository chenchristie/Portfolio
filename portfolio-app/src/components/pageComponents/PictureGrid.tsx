import React, { FC } from 'react';
import { GeneralProps } from '../../general/Interfaces';

export const PictureGrid: FC<GeneralProps> = ({
    children
}) => {
    let containerStyle = {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        rowGap: "10px",
        columnGap: "10px",
        justifyContent: "space-evenly",
    }
    return (
        <div
            style={containerStyle as React.CSSProperties}
            className = "PictureGrid"
        >
            {children}
        </div> 
    )
}
