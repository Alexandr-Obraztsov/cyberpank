import React from 'react';
import icons from '../../assets/images/icons.svg';

type IconPropsType = {
    id?: string,
    width?: string,
    height?: string
}


export const Icon = (props: IconPropsType) => {
    return (
        <svg width={props.width || "10px"} height={props.height || "10px"} fill="none" xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={`${icons}#${props.id}`}></use>
        </svg>
    );
};

