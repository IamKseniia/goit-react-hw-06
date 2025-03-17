import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'filters',
  initialState: {
    filters: {
      name: '',
    },
  },
  reducers: {
    setNameFilter(state, action) {
      state.filters.name = action.payload;
    },
  },
});

export const { setNameFilter } = slice.actions;

export default slice.reducer;
