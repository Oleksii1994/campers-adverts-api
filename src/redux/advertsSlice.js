import { createSlice } from '@reduxjs/toolkit';
import * as handlersForAdvertsSlice from './handlers/handlersForAdvertsSlice';
import { fetchAdverts } from './operations';

export const advertsSlice = createSlice({
  name: 'adverts',
  initialState: {
    advertsArr: [],
    isLoading: false,
    error: null,
  },

  extraReducers: builder => {
    builder
      .addCase(
        fetchAdverts.fulfilled,
        handlersForAdvertsSlice.handlerFetchAdvertsFulfilled
      )
      .addCase(fetchAdverts.pending, handlersForAdvertsSlice.handlePending)
      .addCase(fetchAdverts.rejected, handlersForAdvertsSlice.handleRejected);
  },
});

export const { fetchingInProgress, fetchingSuccess, fetchingError } =
  advertsSlice.actions;
export const advertsReducer = advertsSlice.reducer;
