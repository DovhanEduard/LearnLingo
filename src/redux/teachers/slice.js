import { createSlice } from '@reduxjs/toolkit';
import { getTeachers } from './operations';

const INITIAL_STATE = {
  teachers: [],
  favoriteTeachers: [],
};

export const teachersSlice = createSlice({
  name: 'teachers',
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: builder =>
    builder
      .addCase(getTeachers.pending, state => {
        state.error = null;
      })
      .addCase(getTeachers.fulfilled, (state, action) => {
        state.teachers = action.payload;
      })
      .addCase(getTeachers.rejected, (state, action) => {
        state.error = action.payload;
      }),
});

export const teachersReducer = teachersSlice.reducer;
