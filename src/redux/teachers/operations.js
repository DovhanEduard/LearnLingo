import { createAsyncThunk } from '@reduxjs/toolkit';
import { database } from '../../firebase/firebase';
import {
  ref,
  query,
  orderByKey,
  limitToFirst,
  startAfter,
  get,
} from 'firebase/database';

export const getTeachers = createAsyncThunk(
  'teachers/getTeachers',
  async (pageNumber = 1, thunkAPI) => {
    const pageSize = 4;
    const dbRef = ref(database, '/');

    try {
      const state = thunkAPI.getState();
      const lastKeys = state.teachers?.lastKeys || [];

      let teachersQuery;

      if (pageNumber === 1) {
        teachersQuery = query(dbRef, orderByKey(), limitToFirst(pageSize + 1));
      } else {
        const lastKey = lastKeys[pageNumber - 2];
        if (!lastKey) {
          return thunkAPI.rejectWithValue('No more pages available');
        }

        teachersQuery = query(
          dbRef,
          orderByKey(),
          startAfter(lastKey),
          limitToFirst(pageSize + 1)
        );
      }

      const snapshot = await get(teachersQuery);

      if (snapshot.exists()) {
        const data = snapshot.val();
        const keys = Object.keys(data);

        const hasNextPage = keys.length > pageSize;

        const displayedKeys = hasNextPage ? keys.slice(0, pageSize) : keys;

        const lastKeyForNextPage = displayedKeys[displayedKeys.length - 1];
        const teachers = displayedKeys.map(key => ({ id: key, ...data[key] }));
        return {
          teachers,
          lastKey: lastKeyForNextPage,
          hasNextPage,
        };
      } else {
        return thunkAPI.rejectWithValue('No data available');
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const clearTeachersList = createAsyncThunk(
  'teachers/clearTeachersList',
  async () => {
    return null;
  }
);
