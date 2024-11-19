import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "./CounterSlice";
import userSlice from "./UserSlice";

export default configureStore({
  reducer: {
    CounterSlice,
    userSlice,
  },
});
