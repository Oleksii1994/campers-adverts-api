export const handlePending = state => {
  state.isLoading = true;
};

export const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

export const handlerFetchAdvertsFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  state.advertsArr = payload;
};
