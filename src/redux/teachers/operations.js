import { createAsyncThunk } from '@reduxjs/toolkit';
import { database } from '../../firebase/firebase';
import { ref, child, get } from 'firebase/database';

export const getTeachers = createAsyncThunk(
  'teachers/getTeachers',
  async (_, thunkAPI) => {
    try {
      const dbRef = ref(database);

      const teachers = await get(child(dbRef, '/')).then(snapshot => {
        if (snapshot.exists()) {
          return snapshot.val();
        } else {
          return thunkAPI.rejectWithValue('No data available');
        }
      });

      return teachers;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
