// import { createSelector } from '@reduxjs/toolkit';

// export const selectAdverts = state => state.contacts;
export const selectAdvertsArr = state => state.adverts.advertsArr;
export const selectIsLoading = state => state.adverts.isLoading;
export const selectError = state => state.adverts.error;
