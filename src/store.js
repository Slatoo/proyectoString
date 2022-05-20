import textReducer from "./actions";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    text: textReducer,
  },
});
