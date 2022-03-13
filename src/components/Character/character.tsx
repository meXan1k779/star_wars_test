import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
import { RootState } from '../../redux/store';
import { fetchCharacter } from '../../redux/slice/charactersSlice';
import { Loader } from '../Loader/loader';

import { CharWrapper, Text, CharImg } from './character.style';

export const Character: React.FC = () => {
    const dispatch = useDispatch()
    const { currentCharacter, isLoading } = useSelector((state: RootState) => state.characters);
    const { birth_year, eye_color, height, name, skin_color, films } = currentCharacter

    const url = window.location.href.split('/')
    const id = url[url.length -1]

    useEffect(() => {
        dispatch(fetchCharacter(+id))
    }, [dispatch, id])

    return (
        isLoading ? <Loader /> :  <>
            <h1>{name}</h1>
            <CharWrapper>
                <CharImg src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}/>
                <Text>Birth date: {birth_year}</Text>
                <Text>Eye color: {eye_color}</Text>
                <Text>Height: {height}</Text>
                <Text>Skin color: {skin_color}</Text>
                <Text>Films count: {films.length}</Text>
            </CharWrapper>
            <Link to={`/${url[url.length - 2]}`}>Go back</Link>
        </>
    )
}