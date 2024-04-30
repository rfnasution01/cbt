import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type StateSearchType = {
  find: string
}

const initialState: StateSearchType = {
  find: '',
}

const stateSearchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setStateSearch: (state, action: PayloadAction<StateSearchType>) => {
      const { find } = action.payload
      state.find = find
    },
  },
})

export const { setStateSearch } = stateSearchSlice.actions

export const getSearchSlice = (state: { stateSearch: StateSearchType }) =>
  state.stateSearch

export default stateSearchSlice.reducer
