import { createSlice } from '@reduxjs/toolkit';
import { getTeachers, clearTeachersList, getAllTeachers } from './operations';

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
        state.isLoading = true;
      })
      .addCase(getTeachers.fulfilled, (state, action) => {
        state.isLoading = false;

        state.teachers = [...state.teachers, ...action.payload.teachers];
        state.lastKeys.push(action.payload.lastKey);
        state.hasNextPage = action.payload.hasNextPage;
      })
      .addCase(getTeachers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(getAllTeachers.pending, state => {
        state.error = null;
        state.isLoading = true;
      })
      .addCase(getAllTeachers.fulfilled, (state, action) => {
        state.isLoading = false;

        state.teachers = action.payload.teachers;
      })
      .addCase(getAllTeachers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(clearTeachersList.pending, state => {
        state.error = null;
      })
      .addCase(clearTeachersList.fulfilled, () => {
        return INITIAL_STATE;
      })
      .addCase(clearTeachersList.rejected, (state, action) => {
        state.error = action.payload;
      }),
});

export const teachersReducer = teachersSlice.reducer;
