import { createAsyncThunk } from '@reduxjs/toolkit';
import { auth } from '../../firebase/firebase';

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
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

export const registerUser = createAsyncThunk(
  'auth/register',
  async ({ email, password, name }, thunkAPI) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);

      await updateProfile(auth.currentUser, {
        displayName: name,
      });

      await signInWithEmailAndPassword(auth, email, password);

      const user = auth.currentUser;

      return {
        user: { email: user.email, name: user.displayName },
        token: user.stsTokenManager.accessToken,
        refreshToken: user.stsTokenManager.refreshToken,
      };
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
  'auth/refreshUser',
  async (user, thunkAPI) => {
    try {
      return user;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
