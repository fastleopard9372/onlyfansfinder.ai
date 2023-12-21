/* eslint-disable import/no-cycle */
/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

import { ROLES } from "@/utils/constants";
import { RootState } from "@/redux/store";

export interface ISignin {
  data: {
    role: string;
    email: string;
    password: string;
  };
}

const initialState: ISignin = {
  data: {
    role: ROLES.CUSTOMER,
    email: "",
    password: ""
  }
};

export const signinSlice = createSlice({
  name: "Signin",
  initialState,
  reducers: {
    setRole: (state: ISignin, action) => {
      state.data.role = action.payload;
    },

    setData: (state: ISignin, action) => {
      state.data = { ...state.data, ...action.payload };
    }
  }
});

export const { setRole, setData } = signinSlice.actions;
export const getSignin = (state: RootState) => state.Signin;

export default signinSlice.reducer;
