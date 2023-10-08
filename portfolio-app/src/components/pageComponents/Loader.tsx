import React, { FC } from 'react';
import { GeneralProps, LoaderProps } from '../../general/Interfaces';
import profileImage from '../images/about/profile.jpg';

export const Loader: FC<GeneralProps & LoaderProps> = ({
    show
}) => {
   
    return (
        <>
            {show ? <div className="loader"> </div> : <></>}
        </>
    );
}
