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

    setEmail: (state: ISignin, action) => {
      state.data.email = action.payload;
    },

    setPassword: (state: ISignin, action) => {
      state.data.password = action.payload;
    }
  }
});

export const { setRole, setEmail, setPassword } = signinSlice.actions;
export const getSignin = (state: RootState) => state.Signin;

export default signinSlice.reducer;
