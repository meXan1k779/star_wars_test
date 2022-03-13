import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AppThunk } from '../store';
import { getAllPeople, getCharacter } from '../../end-points/api';

export interface CharacterState {
  data: IData;
  currentPage: number;
  isLoading: boolean;
  currentCharacter: ICharacter;
}

interface ICharacter {
    birth_year: number,
    eye_color: string,
    height: string,
    name: string,
    skin_color: string,
    films: string[],
}

interface IData {
  count: 0,
  results?: {
    name: string,
  }[]
}

const initialState: CharacterState = {
    data: {
      count: 0,
    },
    currentPage: 1,
    isLoading: false,
    currentCharacter: {
      birth_year: 0,
      eye_color: '',
      height: '',
      name: '',
      skin_color: '',
      films: [],
    },
}

export const characterSlice = createSlice({
  name: 'character',
  initialState,
  reducers: {
    setAllData: (state, action: PayloadAction<IData>) => {
      state.data = action.payload
      state.isLoading = false
    },
    setCharacter: (state, action: PayloadAction<ICharacter>) => {
      state.currentCharacter = action.payload
      state.isLoading = false
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload
    },
    startLoading: (state) => {
      state.isLoading = true
    },
    stopLoading: (state) => {
      state.isLoading = false
    },
  },
})

// thunks
export const fetchAllPeople = (value = 1): AppThunk => async (
  dispatch,
) => {
    dispatch(startLoading())
  const peopleRes = await getAllPeople(value);
  if (peopleRes.data) {
    dispatch(setPage(value))
    dispatch(setAllData(peopleRes.data));
  } else {
    console.log('Fail');
    dispatch(stopLoading())
  }
};

export const fetchCharacter = (id: number): AppThunk => async (
  dispatch,
) => {
    dispatch(startLoading())
  const characterRes = await getCharacter(id);
  if (characterRes.data) {
    dispatch(setCharacter(characterRes.data));
  } else {
    console.log('Fail');
    dispatch(stopLoading())
  }
};

export const { setAllData, setPage, startLoading, stopLoading, setCharacter } = characterSlice.actions

export default characterSlice.reducer