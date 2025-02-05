import { createSlice } from '@reduxjs/toolkit';
import { getTeachers } from './operations';

const INITIAL_STATE = {
  teachers: [],
  lastKeys: [],
  hasNextPage: false,
  isLoading: false,
  error: null,
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
        state.teachers = [...state.teachers, ...action.payload.teachers];
        state.lastKeys.push(action.payload.lastKey);
        state.hasNextPage = action.payload.hasNextPage;
      })
      .addCase(getTeachers.rejected, (state, action) => {
        state.error = action.payload;
      }),
});

export const teachersReducer = teachersSlice.reducer;
