/* eslint-disable import/no-cycle */

"use client";

import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./features/userSlice";

export const makeStore = () =>
  configureStore({
    reducer: {
      [userSlice.name]: userSlice.reducer
    }
  });

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
