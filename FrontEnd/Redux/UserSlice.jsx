import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    isFetching: false,
    fetchError: null,
    user: [],
  },
  reducers: {
    FetchingUser: (state) => {
      state.isFetching = true;
      state.user = [];
      state.fetchError = null;
    },
    FetchingUserSuccess: (state, action) => {
      state.isFetching = false;
      state.user = action.payload;
    },
    FetchingUserFailure: (state, action) => {
      state.isFetching = false;
      state.fetchError = action.payload;
    },
  },
});

export const { FetchingUser, FetchingUserSuccess, FetchingUserFailure } =
  userSlice.actions;

export default userSlice.reducer;
