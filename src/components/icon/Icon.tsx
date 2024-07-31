import React from 'react';
import icons from '../../assets/images/icons.svg';

export const Icon = (props: { id: string }) => {
    return (
        <svg fill="none" xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={`#${props.id}`}></use>
        </svg>
    );
};

