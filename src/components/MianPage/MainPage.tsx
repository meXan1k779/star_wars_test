import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import Pagination from '@mui/material/Pagination';
import { Link, useNavigate } from 'react-router-dom';

import { Card } from '../Card';
import { RootState } from '../../redux/store';
import { fetchAllPeople } from '../../redux/slice/charactersSlice';
import { getImageNumber } from '../../utils';
import { Loader } from '../Loader/loader';

import { CardsContainer } from './mainPage.style';

export const MainPage: React.FC = React.memo(() => {
    const { isLoading, currentPage, data } = useSelector((state: RootState) => state.characters);
    const { results, count } = data

    const dispatch = useDispatch()
    const nav = useNavigate()
    const url = window.location.href.split('/')
    const page = url[url.length - 1]

    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        dispatch(fetchAllPeople(value));
        nav(`/${value}`)

      };

    useEffect(() => {
        dispatch(fetchAllPeople(+page))
    }, [dispatch, page])

    return ( 
        <>
            <h1>People List</h1>
            {isLoading ? <Loader /> : 
                    <>
                        <CardsContainer>
                            {results?.map((item, i) => <Link key={i} to={`${getImageNumber(currentPage, i)}`}><Card data={item} index={i} page={currentPage}/></Link>)}
                        </CardsContainer>
                        <Pagination count={Math.ceil(count/10)} color="secondary" onChange={handleChange} page={currentPage}/>
                    </>}
        </>
    )
})