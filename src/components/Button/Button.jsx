import React from 'react';
import { LoadButton } from './Button.styled'

const Button = ({ onClick }) => {
    return (
        <LoadButton type="button" onClick={onClick}>Load more</LoadButton>
    )
};

export default Button;
