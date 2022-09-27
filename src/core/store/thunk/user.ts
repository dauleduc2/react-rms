import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAuthKeyFromLocalStorage } from '../../../util/localStorage';
import { User } from '../../models';

export const userThunk = {
  getCurrentUser: createAsyncThunk<User, void>(
    'getCurrentUser',
    async (_, { rejectWithValue }) => {
      try {
        // TODO: get current user with existed token here

        // fake action depend on token exist or not
        const token = getAuthKeyFromLocalStorage();
        if (!token) throw new Error('Token not found');
        return { id: '1' };
      } catch (error) {
        return rejectWithValue(null);
      }
    }
  ),
};
