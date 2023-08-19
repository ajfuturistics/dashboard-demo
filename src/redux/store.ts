import { configureStore } from "@reduxjs/toolkit";
import contactReducer from "./slice/contactSlice";

export const store = configureStore({
  reducer: {
    contact: contactReducer,
  },
});
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
