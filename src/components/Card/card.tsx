import React from 'react';
import { getImageNumber } from '../../utils';

import { CardContainer, CardImg, CardTitle } from './card.style';

interface CardProps {
   data: {
    name: string
   }
   index: number;
   page: number;
   onClick?: () => void;
}

export const Card: React.FC<CardProps> = ({ data, onClick, index, page}) => {
    return (
        <CardContainer onClick={onClick}>
            <CardImg src={`https://starwars-visualguide.com/assets/img/characters/${getImageNumber(page, index)}.jpg`}/>
            <CardTitle>{data.name}</CardTitle>
        </CardContainer>
    )
}