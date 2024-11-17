import { createSlice } from "@reduxjs/toolkit";

const countslice = createSlice({
  name: "count",
  initialState: {
    value: 0,
  },
  reducers: {
    Increment: (state, action) => {
      if (!action) {
        action.payload = 1;
      }
      state.value += action.payload;
    },
  },
});

export default countslice.reducer;
export const { Increment } = countslice.actions;
