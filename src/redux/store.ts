/* eslint-disable import/no-cycle */

"use client";

import { configureStore } from "@reduxjs/toolkit";

import { signinSlice } from "./features/signinSlice";
import { signupSlice } from "./features/signupSlice";
import { switchSlice } from "./features/switchSlice";
import { searchSlice } from "./features/searchSlice";
import { articleSlice } from "./features/articleSlice";
import { authSlice } from "./features/authSlice";
import { notifySlice } from "./features/notifySlice";
import authMiddleware from "./middlewares/authMiddleware";
export const makeStore = () =>
  configureStore({
    reducer: { 
      [signinSlice.name]: signinSlice.reducer,
      [signupSlice.name]: signupSlice.reducer,
      [switchSlice.name]: switchSlice.reducer,
      [searchSlice.name]: searchSlice.reducer,
      [articleSlice.name]: articleSlice.reducer,
      [authSlice.name]: authSlice.reducer,
      [notifySlice.name]: notifySlice.reducer
    },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authMiddleware),
  devTools: process.env.NODE_ENV !== "production",
  });

export type AppStore = ReturnType<typeof makeStore>;
export type AppDispatch = AppStore["dispatch"];
