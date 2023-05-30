import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import relojReducer from "../features/reloj/relojSlice";

import { intervalHour } from "../middlewares/intervalHour";
export const store = configureStore({
  reducer: { relojState: relojReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(intervalHour)
});
