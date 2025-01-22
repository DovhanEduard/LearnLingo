import { createAsyncThunk } from '@reduxjs/toolkit';
import { auth } from '../../firebase/firebase';

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';

export const login = createAsyncThunk(
  'auth/login',
  async ({ email, password }, thunkAPI) => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, password)
        .then(userCredential => {
          const user = userCredential.user;

          return {
            user: { email: user.email, name: user.displayName },
            token: user.stsTokenManager.accessToken,
            refreshToken: user.stsTokenManager.refreshToken,
          };
        })
        .catch(error => {
          return thunkAPI.rejectWithValue(error.message);
        });

      return user;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const register = createAsyncThunk(
  'auth/register',
  async ({ email, password }, thunkAPI) => {
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password)
        .then(userCredential => {
          const user = userCredential.user;
          console.log(user);

          return {
            user: { email: user.email, name: user.displayName },
            token: user.stsTokenManager.accessToken,
            refreshToken: user.stsTokenManager.refreshToken,
          };
        })
        .catch(error => {
          return thunkAPI.rejectWithValue(error.message);
        });

      return user;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    auth.signOut();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const token = state.auth.token;

      setAuthToken(token);
      const { data } = await instance.get('users/current');

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
  {
    condition: (_, thunkAPI) => {
      const state = thunkAPI.getState();
      const token = state.auth.token;

      if (token) return true;

      return false;
    },
  }
);
