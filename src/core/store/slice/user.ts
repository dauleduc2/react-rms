import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { clearAuthKeyFromLocalStorage } from '../../../util/localStorage';
import { UserState } from '../../interface/redux';
import { userThunk } from '../thunk';

const initialState: UserState = {
  isTriedLogin: false,
  user: {
    id: '',
  },
};

const reducer = createSlice({
  name: 'user',
  initialState,
  reducers: {
    resetState: () => ({ ...initialState }),
    setIsTriedLogin: (state, { payload }: PayloadAction<boolean>) => {
      state.isTriedLogin = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      userThunk.getCurrentUser.fulfilled,
      (state, { payload }) => {
        return { ...state, user: payload, isTriedLogin: true };
      }
    );
    builder.addCase(userThunk.getCurrentUser.rejected, (state) => {
      clearAuthKeyFromLocalStorage();

      return { ...state, isTriedLogin: true };
    });
  },
});
export const userActions = {
  ...reducer.actions,
};

export const userReducer = reducer.reducer;
