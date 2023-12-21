/* eslint-disable import/no-cycle */

"use client";

import { configureStore } from "@reduxjs/toolkit";

import { signinSlice } from "./features/signinSlice";
import { signupSlice } from "./features/signupSlice";

export const makeStore = () =>
  configureStore({
    reducer: {
      [signinSlice.name]: signinSlice.reducer,
      [signupSlice.name]: signupSlice.reducer
    }
  });

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
